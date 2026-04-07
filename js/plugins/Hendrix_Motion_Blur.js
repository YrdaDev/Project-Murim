/*:
 * @target MZ
 * @plugindesc This is a plugin for RPG Maker MZ that creates a motion blur effect on events whenever they move. It helps easen events movement, make them look smoother.
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help
 * Verion 1.0.5
 * ==============================================================================
 * This is a plugin for RPG Maker MZ that creates a motion blur effect on events whenever they move. 
 * It helps easen events movement, make them look smoother.
 *==============================================================================

 * How to use
 * If you only want some specific events to have motion blur:
 * Change parameter "Applies to all Events" to False, 
 * then add <obj> to your events notetag
 * 
 * If you only want some specific events to have motion blur:
 * Change parameter "Applies to all Events" to True. When this is true, 
 * it'll ignore <obj>  * and just applies to all events.
 * 
 * ==============================================================================
 * 
 * FEATURES
 * - The motion blur effect's strength will adjust accordingly to how fast your events move
 *   The faster your events move, the stronger the effect becomes
 * - The effect applies to all directions. If your event moves upward, it'll blur vertically, etc
 * - You can have all events to be affected or only events with notetag <obj> to be affected
 * - The option to enable or disable the motion blur in Scene Option
 * - Plug in and use, very simple. You just need to enable it and that's it
 * - Performance friendly
 * - More feature to be added if you request
 * 
 *==============================================================================
 * For feedback or support, please visit Discord:
 * https://discord.com/invite/YKPscqHV8b
 * 
 * @param Apply to all events
 * @text Apply to All Events
 * @desc The motion blur effect will be applied to all events except the player. If false, use the <obj> notetag to your desired event
 * @type boolean
 * @default true
 * 
 * @command EnablePlayerMotionBlur
 * @text Enable Player Motion Blur
 * @desc Apply motion blur effect on the player
 *
 * @arg enable
 * @text Enable on the player?
 * @desc Apply motion blur effect on the player
 * @type boolean
 * @default true
 *
 * @arg strength
 * @text Strength
 * @desc Strength of the motion blur effect
 * @type number
 * @default 1
 */
(() => {
    const pluginName = 'Hendrix_Motion_Blur';
    const pluginParams = PluginManager.parameters(pluginName);
    const applyToAllEvents = (pluginParams['Apply to all events'] === 'true');

    let playerMotionBlur = false;
    let playerBlurStrength = 1;

    PluginManager.registerCommand(pluginName, "EnablePlayerMotionBlur", args => {
        playerMotionBlur = args.enable === 'true';
        playerBlurStrength = Number(args.strength) || 1;
        $gamePlayer.checkMotionBlurTag();
    });

    const _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function () {
        _Game_CharacterBase_initMembers.call(this);
        this._motionBlur = false;
        this._lastPosition = { x: this._realX, y: this._realY };
    };

    const _Game_Event_setupPage = Game_Event.prototype.setupPage;
    Game_Event.prototype.setupPage = function () {
        _Game_Event_setupPage.call(this);
        this.checkMotionBlurTag();
    };

    Game_CharacterBase.prototype.checkMotionBlurTag = function () {
        if (this._moveSpeed <= 3) {
            this._motionBlur = false;
            return;
        }
        if (this instanceof Game_Player) {
            this._motionBlur = playerMotionBlur;
        } else if (this instanceof Game_Event) {
            if (this.page()) {
                const note = this.event().note;
                this._hasObjTag = note.includes('<obj>');
                this._motionBlur = ConfigManager.motionBlur && (applyToAllEvents || this._hasObjTag);
            } else {
                this._motionBlur = ConfigManager.motionBlur && applyToAllEvents;
            }
        } else {
            this._motionBlur = false;
        }
    };

    const _Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
    Spriteset_Map.prototype.createCharacters = function () {
        _Spriteset_Map_createCharacters.call(this);
        this._characterSprites.forEach(sprite => {
            if (sprite._character) {
                sprite.updateMotionBlur();
            }
        });
    };

    Spriteset_Map.prototype.updateBlurSettings = function () {
        this._characterSprites.forEach(sprite => {
            if (sprite._character) {
                sprite._character.checkMotionBlurTag();
                sprite.updateMotionBlur();
            }
        });
    };

    const _Sprite_Character_update = Sprite_Character.prototype.update;
    Sprite_Character.prototype.update = function () {
        _Sprite_Character_update.call(this);
        this._character._wasMoving = this._character._isMoving;
        this._character._isMoving = this._character.isMoving();
        if (this._character._isMoving || this._character._wasMoving) {
            this.updateMotionBlur();
        } else {
            this.clearMotionBlur();
        }
    };

    Sprite_Character.prototype.clearMotionBlur = function () {
        if (this._motionBlurFilter) {
            this._motionBlurFilter.uniforms.blurDirection = [0, 0];
        }
    };

    Sprite_Character.prototype.updateMotionBlur = function () {
        const screenWidth = Graphics.boxWidth;
        const screenHeight = Graphics.boxHeight;
        const screenX = this._character.screenX();
        const screenY = this._character.screenY();

        // Check if the character is within the viewport + 100
        if (screenX >= -100 && screenY >= -100 && screenX <= screenWidth + 100 && screenY <= screenHeight + 100) {
            if (ConfigManager.motionBlur && this._character._motionBlur) {
                if (!this._motionBlurFilter) {
                    this._motionBlurFilter = this.createMotionBlurFilter();
                }
                if (this.filters) {
                    if (!this.filters.includes(this._motionBlurFilter)) {
                        this.filters.push(this._motionBlurFilter);
                    }
                } else {
                    this.filters = [this._motionBlurFilter];
                }
                this.updateBlurDirection();
            } else {
                if (this.filters && this.filters.includes(this._motionBlurFilter)) {
                    this.filters = this.filters.filter(filter => filter !== this._motionBlurFilter);
                }
            }
        }
    };

    Sprite_Character.prototype.updateBlurDirection = function () {
        const char = this._character;
        const deltaX = char._realX - char._lastPosition.x;
        const deltaY = char._realY - char._lastPosition.y;

        if (char.isMoving()) {
            char._lastPosition.x = char._realX;
            char._lastPosition.y = char._realY;

            const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const scaleFactor = Math.min(speed / 3, 1);

            const blurStrength = char instanceof Game_Player ? playerBlurStrength : 10 * scaleFactor;

            this._motionBlurFilter.uniforms.blurDirection = [deltaX * blurStrength, deltaY * blurStrength];
        } else {
            this._motionBlurFilter.uniforms.blurDirection[0] *= 0.9;
            this._motionBlurFilter.uniforms.blurDirection[1] *= 0.9;
        }
    };

    Sprite_Character.prototype.createMotionBlurFilter = function () {
        const HVertex = `
            attribute vec2 aVertexPosition;
            attribute vec2 aTextureCoord;
            uniform mat3 projectionMatrix;
            varying vec2 vTextureCoord;
            void main(void) {
                gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
                vTextureCoord = aTextureCoord;
            }
        `;

        const HFrag = `
            varying vec2 vTextureCoord;
            uniform sampler2D uSampler;
            uniform vec2 blurDirection;
            const int samples = 5;
            void main(void) {
                vec4 color = vec4(0.0);
                vec2 offset = blurDirection / float(samples);
                for (int i = 0; i < samples; i++) {
                    color += texture2D(uSampler, vTextureCoord + offset * (float(i) - float(samples) / 2.0));
                }
                color /= float(samples);
                gl_FragColor = color;
            }
        `;

        const uniforms = {
            blurDirection: [0, 0]
        };

        return new PIXI.Filter(HVertex, HFrag, uniforms);
    };

    const _Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
    Window_Options.prototype.addGeneralOptions = function () {
        _Window_Options_addGeneralOptions.call(this);
        this.addCommand('Motion Blur', 'motionBlur');
    };

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        const config = _ConfigManager_makeData.call(this);
        config.motionBlur = this.motionBlur;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.call(this, config);
        this.motionBlur = this.readFlag(config, 'motionBlur', true);
        this.onChangeMotionBlur();
    };

    ConfigManager.motionBlur = true;

    ConfigManager.onChangeMotionBlur = function () {
        $gameMap.events().forEach(event => {
            event.checkMotionBlurTag();
        });
        SceneManager._scene._spriteset.updateBlurSettings();
    };
})();
