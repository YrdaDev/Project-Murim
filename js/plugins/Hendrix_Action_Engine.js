/*:
 * @target MZ
 * @plugindesc v1.6.2 Create quality action games with upgraded eventing system
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io
 * 
 * @help
 * Version 1.6.3
 * ----------------------------------------------------------------------------
 * This RPG Maker MZ plugin lets you create real-time action games like
 * ARPGs, top-down shooters, beat 'em ups, and more. Designed for ease of use,
 * it builds on RPG Maker’s built-in eventing system, so the better you are with
 * RPG Maker, the better the games you'll be able to create with this plugin.
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * Please visit this link for the manual, which contents all extended features
 * for Movement Route, Conditional Branches, plugin commands.
 * https://rpgmakeractioncombat.com
 * 
 * ■ All expansion and add-on (not required, but good to have and fun to play with) 
 * https://itch.io/c/5532775/rpg-maker-action-combat-mz-active-battle-system
 * 
 * ■ Video Trailer: https://www.youtube.com/watch?v=zcXZNgt3V50
 * ■ Video Tutorials: https://www.youtube.com/watch?v=pF6q9zI3EQg&list=PL785kvkmLIUh4oP32GWsuLHOl-v7w1gjb
 * 
 * You still need to learn how to use RPG Maker, especially eventing in order
 * to maximize the potential of this plugin.
 * 
 * Some common keyword in plugin commands:
 * this - The current event / The event calling this plugin command. Similar to this._eventId
 * player - Party leader
 * <notetag> - An event with this notetag
 * Event name / id - An event name or its id
 * ----------------------------------------------------------------------------
 * HOW TO INSTALL
 * 1. Copy all plugins from RPG Maker Action Combat folder
 * 2. Paste them to your project's plugins folder
 * 3. Enable them in your plugin list. Enabling only Hendrix Action Engine
 * and Dot Move System is enough. The other plugins are optional unless
 * you want more feature.
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * ■ Accquiring this plugin legally grants you the permission to use this plugin
 * 	 in your free and commercial game projects
 * ■ Accquiring this plugin legally grants you nearly 24/7 support from developer
 * ■ You can modify the plugin to suit your game project
 * ■ This plugin (even modified versions) cannot be re-distributed by any mean
 * ■ Please credit this line when you publish your game project:
 * 	 Real-time combat plugin "RPG Maker Action Combat" by Sang Hendrix
 * ----------------------------------------------------------------------------
 * For support, please reach out:
 * Discord: https://discord.gg/YKPscqHV8b (prefered)
 * Patreon: https://www.patreon.com/SangHendrix
 * X: https://x.com/sanghendrix96
 * ----------------------------------------------------------------------------
 * @param axc34234234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param gameGenre
 * @text Game Type
 * @desc Top-Down: Default RPG Maker | Beat 'em up: Limit to only Left & Right direction
 * @type select
 * @option Top-Down
 * @value topdown
 * @option Beat 'em up
 * @value beatup
 * @default topdown
 * 
 * @param axc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ DEBUG
 * 
 * @param avd4
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Debug Toggle Button
 * @text Debug Hitbox Button
 * @desc Button to toggle debug hitbox mode, displaying hitbox and checkRange area
 * @type string
 * @default 9
 * 
 * @param Debug Collision Button
 * @text Debug Collision Button
 * @desc Button to show real collision (like the area that block you)
 * @type string
 * @default 0
 * 
 * @param axcxcxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1s
 * @text ■ SPAWN EVENTS
 * 
 * @param axcxcxcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param templateMapId
 * @text Template Map ID
 * @desc The map ID containing your template events
 * @type number
 * @default 0
 * 
 * @param Events To Spawn
 * @text Spawn Events at Start
 * @desc Spawn event with this Id/Name when you enter a map
 * @type string
 * @default 
 * 
 * @param Spawn Actors at Start
 * @text Spawn Actor Events
 * @desc Spawn events that share the same name with any actor in party. Good to make followers system
 * @type boolean
 * @default false
 * 
 * @param axcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1x
 * @text ■ Passive Common Event
 * 
 * @param avdx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param NpcTags
 * @text Events Notetags
 * @type struct<NpcTag>[]
 * @desc Any event with this tag will always run these common event in parallel
 *
 * @param LimitAreaOfCalling
 * @text Disable Offscreen
 * @type boolean
 * @desc Only run common events if the events are inside game viewport
 * @default false
 * 
 * @param a
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco1
 * @text ■ ENEMY HP BAR SETUP
 * 
 * @param aa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param barSize 
 * @text Bar Size
 * @desc Format: width, height
 * @default 100, 6
 * 
 * @param borderImage
 * @text Border Image
 * @type file
 * @dir img/system/
 * @desc The border image to be used for the HP bar
 * @default
 * 
 * @param showRadius
 * @text Show Radius
 * @type number
 * @desc When player comes to this radius of enemy event (tile unit), display its HP bar. 0 to not display HP bars.
 * @default 7
 * 
 * @param axczr
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco1er
 * @text ■ HUD SETUP
 * 
 * @param aaww
 * @text --------------------------
 * @default --------------------------
 * 
 * @param HUDs
 * @text HUD Elements
 * @type struct<HUD>[]
 * @desc List of HUD elements to be displayed on the screen
 * @default []
 * 
 * @param smartHUDVisibility
 * @text Smart HUD Visibility
 * @type boolean
 * @desc HUD elements to fade out when player character is behind them
 * @default true
 * 
 * @param hideHUDDuringMessages
 * @text Hide during Messages
 * @type boolean
 * @desc Hide all HUD elements when message windows are displayed
 * @default false
 * 
 * @param customFontFile
 * @text Custom Font File
 * @type string
 * @desc Custom font for HUD's text elements, e.g. haha.ttf
 * @default 
 * 
 * @param aaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3z
 * @text ■ DAMAGE TEXT SETUP
 * 
 * @param aaaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param addValue
 * @text Add Value
 * @type boolean
 * @desc True: 1 dmg -> 3 dmg = Display 4. False: 1 dmg -> 3 dmg = Display 1 and then 3
 * @default false
 * 
 * @param largeNumberThreshold
 * @text High Damage Threshold
 * @type number
 * @desc Damage that higher than this value will appear in Red color
 * @default 15
 * 
 * @param damageTextSettings
 * @text Damage Text Settings
 * @type struct<DamageTextSettings>
 * @desc General font settings for damage text
 * @default
 * 
 * @param aaaazfrt
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwe
 * @text ■ COMBAT SETTINGS
 * 
 * @param aaaazxce353
 * @text --------------------------
 * @default --------------------------
 * 
 * @param critDmgMultiplier
 * @text Critical Damage Multiplier
 * @type number
 * @decimals 2
 * @min 0
 * @desc Multiplier for critical hit damage
 * @default 3.0
 * 
 * @param Gain XP when enemy defeated
 * @text Gain EXP from Enemy
 * @type boolean
 * @desc Enemies from database when defeated will grant EXP to whole party
 * @default true
 * 
 * @param Gain Gold when enemy defeated
 * @text Gain Gold from Enemy
 * @type boolean
 * @desc Enemies from database when defeated will grant GOLD to whole party
 * @default true
 * 
 * @param missSfxSettings
 * @text Miss Sound Effect
 * @type struct<MissSfxSettings>
 * @desc Settings for the miss sound effect
 * @default {"filename":"","volume":"80","pitch":"100"}
 * 
 * @param aaaazfrtvvvc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwexcvd
 * @text ■ ENEMY DROP ITEMS
 * 
 * @param aaaazxce353fsdgsdh
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Enemy Drop Items
 * @text Enemy Drop Items
 * @type boolean
 * @desc Enemies drop items from database by spawning an event from template map with the same name as the drop
 * @default true
 * 
 * @param Drop Item Style
 * @text Drop Item Style
 * @type select
 * @option Icon Drop (Easy but no customization)
 * @value icon
 * @option Event from Template Map
 * @value template
 * @desc How items are dropped: Icon Drop (auto-generates) or Template Map (spawn events with same name as the items)
 * @default icon
 * 
 * @param pickupSFX
 * @text Item Pickup SFX
 * @type struct<PickupSFX>
 * @desc Sound effect settings for picking up dropped items
 * @default {"sfxFile":"Item1","volume":"90","pitch":"100"}
 * 
 * @param aaaaz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxc
 * @text ■ PLAYER SETTINGS
 * 
 * @param aaaazxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Player Hitbox
 * @text Player Hitbox Settings
 * @desc Format: width, height, offsetX, offsetY (in tiles for width/height, pixels for offsets)
 * @type string
 * @default 1, 1, 0, 0
 * 
 * @param playerCollisionRect
 * @text Player Collision Rect
 * @desc Set player collision area: width, height, offset x, offset y. Tiles unit (support decimal). Centered by default
 * @type string
 * @default 1, 1, 0, 0
 * 
 * @param Player Graphical Offset
 * @text Player Graphical Offset
 * @desc Format: offsetX, offsetY (in pixels). Adjust the player's graphic position for sprite
 * @type string
 * @default 0, 0
 * 
 * @param dashSpeedMultiplier
 * @text Player Run Speed
 * @desc The multiplier to apply to movement speed when dashing (holding Shift)
 * @default 2.0
 * @type number
 * @decimals 1
 * @min 0
 * 
 * @param Auto Game Over
 * @text Disable Auto Game Over
 * @type boolean
 * @desc Game won't end when party leader HP reaches 0. Setup your own game over mechanic with condition HP('player') <= 0
 * @default false
 * 
 * @param aaaaazxcxcxczxcxcs
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdffdfdwe
 * @text ■ BLOCK
 * 
 * @param aaaazxcxsdasdczxx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Block Region ID
 * @text Block Region ID
 * @desc Region ID that both players and events cannot pass through, even with Through ON
 * @type number
 * @default 0
 * 
 * @param Allow Region ID
 * @text Allow Region ID
 * @desc Player and Events can pass through this Region ID in all circumstances
 * @type number
 * @min 0
 * @max 255
 * @default 250
 * 
 * @param Building & Wall Block
 * @text Building & Wall Block
 * @desc Blocks characters (even with Through ON) from passing through tile A3 A4 (wall and building)
 * @type boolean
 * @default false
 * 
 * @param blockTarget
 * @text Block Target
 * @desc Only block these Through ON target from Block Region ID and Building & Wall
 * @type select
 * @option Both Player and Events
 * @value both
 * @option Only Player
 * @value player
 * @option Only Events
 * @value events
 * @default both
 * 
 * @param aaaaazxcxcxczxcxcs34
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdffdfdwex1
 * @text ■ TILESET PASSAGE
 * 
 * @param aaaazxcxsdasdczxx234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param passageType
 * @text Passage Type
 * @type select
 * @option Default RPG Maker
 * @value default
 * @option RPG Maker Action Combat
 * @value action
 * @desc Choose collision system: Default uses original RPG Maker collision, Action Combat adds custom collision features
 * @default default
 * 
 * @param passableSwitch
 * @text <Pass> feature
 * @type switch
 * @desc If empty or 0 then <pass> feature always enabled. Otherwise, it'll only enabled when this switch is ON
 * @default 0
 * 
 * @param aaaazfrt33
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwe234
 * @text ■ MENU MODIFICATION
 * 
 * @param aaaazxce353zxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Disable Right Click Menu
 * @text Right Click open Menu
 * @type boolean
 * @desc Prevents opening menu with right click
 * @default false
 * 
 * @param SoloPlayerMenu
 * @text Solo Player Menu
 * @type boolean
 * @desc Disables party member selection when using items or skills
 * @default true
 * 
 * @param RemoveFormation
 * @text Remove Formation
 * @type boolean
 * @default true
 * @desc Remove Formation command from menu
 * 
 * @param aaaaazxcxcxcs234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdwe
 * @text ■ OTHER HELPFUL FEATURES
 * 
 * @param aaaazxcxczxx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Easy Conditional Branch
 * @text Easy Conditional Branch
 * @type boolean
 * @desc Instead of writing this._eventId, 'player', '<notetag>', you can write as: this, player, <notetag> in condition
 * @default true
 * 
 * @param Move via Cursor
 * @text Move via Cursor Click
 * @type boolean
 * @desc Move player when click/touch on map
 * @default false
 * 
 * @param eventSliding
 * @text Event Sliding
 * @type boolean
 * @desc Events slide when moving toward an obstacles. Put comment <no sliding> in an event to force sliding off
 * @default true
 * 
 * @param Fix Shaky Events
 * @type boolean
 * @default false
 * @desc Fix events shaking when moving diagonally. If you don't see it then just leave it false.
 * 
 * @command ----s
 * @text ■ SPAWN EVENTS -----------------
 * 
 * @command spawnEvent
 * @text Spawn Event
 * @desc Spawn an event from template map (assign template map ID in plugin parameter)
 * 
 * @arg eventId
 * @text Event ID/Name
 * @desc ID / Name of the event from template map | Support Expression
 * @type string
 * @default
 * 
 * @arg position
 * @text Position (X, Y)
 * @desc this| player| region x| cursor| random(A:B)| <notetag> near: this/player/eventId| this/player locked target
 * @type string
 * @default this
 * 
 * @arg startDegree
 * @text Rotation Degree
 * @desc 0-360 | this/player | mouse or gamepad | mouse or gamepad +/- X | <notetag>: Point to event with this notetag
 * @type string
 * @default
 * 
 * @arg notSpawnOn
 * @text Not Spawn On
 * @desc Support: impassable A3 A4 B C (etc) (tileset), impassable events (events that block movement)
 * @type string
 * @default
 * 
 * @arg spawnInFront
 * @text Spawn in Front
 * @desc Spawn in front of the target's current direction when using 'this' or 'player'
 * @type boolean
 * @default false
 * 
 * @arg attachTo
 * @text Attach To
 * @desc Attach this spawned event to a target. Support: this (the event calling this spawn command), player, none
 * @type select
 * @option none
 * @option this
 * @option player
 * @default none
 * 
 * @arg gridBased
 * @text Grid-Based
 * @desc Spawn Grid-Based instead of Pixel-Based. Pixel-Based is more accurate
 * @type boolean
 * @default false
 * 
 * @arg permanent
 * @text Permanent Event
 * @desc The event will persist after map transfer
 * @type boolean
 * @default false
 * 
 * @command DestroyEvent
 * @text Destroy Event
 * @desc Destroys any event (spawned from template map or regular RPG Maker)
 *
 * @arg target
 * @text Event Target
 * @desc Support: this, ID, name, <notetag>
 * @type string
 * @default this
 * 
 * @arg destroyNearby
 * @text Destroy Nearby Events
 * @desc Destroys nearest event with this name/<notetag> near Event Target. Leave empty to destroy Event Target itself
 * @type string
 * @default
 *
 * @arg permanent
 * @text Destroy Permanently
 * @desc For regular RPG Maker events only: remain deleted when returning to map
 * @type boolean
 * @default true
 * 
 * @command spawnEventHitbox
 * @text Create Dynamic Event
 * @desc Creates an event with specified notetag and auto-destroy timer. Use it creatively
 * 
 * @arg notetag
 * @text Notetag
 * @desc Notetag to add to the event (e.g. <enemyHitbox> <stuff <etc>)
 * @type string
 * @default
 * 
 * @arg comment
 * @text Comments
 * @desc Add comments to the event (e.g. <water>)
 * @type string
 * @default
 * 
 * @arg wait
 * @text Destroy After
 * @desc Number of frames to wait before destroying the hitbox. Empty = lives forever
 * @type number
 * @default
 * 
 * @arg position
 * @text Position (X, Y)
 * @desc Support: this | player | random(A:B) | <notetag> near: this/player/eventId | this/player locked target
 * @type string
 * @default this
 * 
 * @arg rotationDegree
 * @text Rotation Degree
 * @desc 0-360 | this/player | mouse or gamepad | mouse or gamepad +/- X
 * @type string
 * @default
 * 
 * @arg attachTo
 * @text Attach To
 * @desc Attach this dynamic event to a target. Support: this (the event calling this command), player, <notetag>
 * @type string
 * @default
 * 
 * @command DestroyDynamicEvent
 * @text Destroy Dynamic Event
 * @desc Destroys all dynamic events (created by Create Dynamic Event) with the specified notetag
 * 
 * @arg notetag
 * @text Notetag to Match
 * @desc <notetag> -> Destroy all events with this notetag | <notetag> near: this/player/eventId -> Only events near X
 * @type string
 * @default
 * 
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---
 * @text ■ ENEMY & PLAYER HP BAR
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command UpdateEventHp
 * @text Increase / Decrease Character HP
 * @desc Change the HP of a character
 *
 * @arg eventId
 * @type string
 * @text Target
 * @desc Support: this | player | eventId | all: All events with hp bar
 * @default this
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc +- numbers, $gameVariables.value(x), damage (read value from notetag <dmg: x>), player weapon, player 2nd weapon
 * 
 * @arg exceedMaxHealth
 * @text Exceed Max Health
 * @type boolean
 * @desc Allow HP to exceed the initial maximum HP when gaining health
 * @default false
 * 
 * @command EventHPBarVisibility
 * @text HP Bar Visibility
 * @desc Show or hide HP bar of a specific event
 *
 * @arg Status
 * @type boolean
 * @text Show HP Bar
 * @desc Show or hide the HP bar
 * @default true
 * 
 * @arg Target
 * @type text
 * @text Target Event ID
 * @desc The event ID to affect. Use 'this' for current event
 * @default this
 * 
 * @command RemoveEventHpBar
 * @text Remove Event HP Bar
 * @desc Remove the HP bar of the specified event.
 * 
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc this: Current event
 * @default this
 * 
 * @command setCollisionStatus
 * @text Collision Status
 * @desc Enable or disable collision checks for this event (result of conditional branch 'checkCollide')
 * 
 * @arg enabled
 * @text Enable Collisions
 * @type boolean
 * @desc If false, checkCollide conditional branch will return false for this event
 * @default true
 * 
 * @command aaaa
 * @text ---------------------------------
 *
 * @command --
 * @text ■ POP UP TEXT
 * 
 * @command aaaaa
 * @text ---------------------------------
 * 
 * @command ShowVariableOnEvent
 * @text Pop Text Value
 * @desc Pop up damage text on the screen
 *
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc Support: this, eventId, player
 * @default this
 *
 * @arg value
 * @type string
 * @text Value
 * @desc Text, $gameVariables.value(x), damage (notetag <dmg: x>), exp / gold (from enemy), player weapon, player 2nd weapon
 * @default
 *
 * @arg duration
 * @type number
 * @text Text Duration
 * @desc Duration of the DMG text (in frame)
 * @min 1
 * @default 80
 * 
 * @arg animation
 * @type select
 * @text Animation Type
 * @desc Choose how the text will animate
 * @default bounce
 * @option Bounce
 * @value bounce
 * @option Move Up
 * @value moveup
 * @option Pop Up
 * @value popup
 * @option Pop Up Letter
 * @value letter
 * 
 * @arg stickToMap
 * @text Stick to Map
 * @type boolean
 * @desc Text stays at world position instead of moving with screen
 * @default false
 *
 * @arg visualSettings
 * @text Visual Settings
 * @type struct<DMGTextVisualSettings>
 * @desc Settings for text appearance and position
 * @default {"fontFilename":"","fontSize":"","offsetX":"0","offsetY":"0","fontColor":"#ffffff","outlineColor":"#000000","criticalColor":"true"}
 * 
 * @command aaaaaa213
 * @text ---------------------------------
 * 
 * @command ----r4
 * @text ■ EASY GUN SYSTEM
 * 
 * @command aaaaaaa12ew
 * @text ---------------------------------
 * 
 * @command GunAmmoControl
 * @text Gun - Ammo and Capacity Control
 * @desc Modify the ammo/magazine capacity of the equipped gun (a weapon with note <capacity: x> and <ammo: item name>)
 * 
 * @arg slot
 * @text Weapon Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield Slot
 * @value 1
 * @desc Which equipment slot to check for the gun
 * @default 0
 * 
 * @arg target
 * @text Target
 * @type select
 * @option Ammo
 * @value ammo
 * @option Capacity
 * @value capacity
 * @desc Remember to put these note to your weapon in database: <capacity: x> and <ammo: item name>
 * @default ammo
 * 
 * @arg value
 * @text Value to Change
 * @type string
 * @desc -1, +5, -$gameVariables.value(4)
 * @default -1
 * 
 * @command GunReload
 * @text Gun - Reload
 * @desc Reload the equipped gun using ammo from inventory
 * 
 * @arg slot
 * @text Weapon Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield Slot
 * @value 1
 * @desc Which equipment slot to check for the gun
 * @default 0
 * 
 * @command aaaaaazxcasd1
 * @text ---------------------------------
 * 
 * @command ----123125
 * @text ■ STATES
 * 
 * @command aaaaaaarqwee2
 * @text ---------------------------------
 * 
 * @command AddState
 * @text Add State
 * @desc Inflict a state to target and run associated common event if defined in state database's note <state common event: x> 
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: this/player/event ID/event name/<notetag>
 * @default this
 * 
 * @arg stateId
 * @text State
 * @type state
 * @desc The state to apply
 * @default 1
 * 
 * @command RemoveState
 * @text Remove State
 * @desc Only use this in common event of states assigned by <state common event: x> in State database
 * 
 * @arg stateId
 * @text State
 * @type state
 * @desc The state to remove
 * @default 1
 * 
 * @command aaaaaa
 * @text ---------------------------------
 * 
 * @command ----
 * @text ■ SPECIAL COMMANDS
 * 
 * @command aaaaaaa
 * @text ---------------------------------
 * 
 * @command Knockback
 * @text Knockback
 * @desc Pushes a character away from a target
 * 
 * @arg character
 * @text Who to knockback
 * @type string
 * @desc Who to knockback. Support: this, player, event ID, <notetag>
 * @default this
 * 
 * @arg from
 * @text Knockback From
 * @type string
 * @desc The target to knockback from. Use: 'player', event ID, or notetag
 * @default player
 * 
 * @arg distance
 * @text Distance
 * @type number
 * @decimals 1
 * @desc Distance to knockback in tiles (1 = 1 tile, 0.5 = half tile, etc.)
 * @default 1
 * 
 * @arg durationPower
 * @text Duration, Deceleration
 * @type string
 * @desc Format: duration (in frame), deceleration power. Lower duration/deceleration = Faster/Smoother
 * @default 30, 2.5
 * 
 * @arg style
 * @text Style
 * @type select
 * @desc How the knockback behaves
 * @default push
 * @option Push Away
 * @value push
 * @option Jump Away
 * @value jump
 * 
 * @arg wait
 * @text Wait to Completion
 * @type boolean
 * @desc Wait until knockback finishes before continuing
 * @default false
 * 
 * @command PlayerJump
 * @text Jumping
 * @desc Makes a target jump
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Which character should jump: player, this, event ID, or <notetag>
 * @default player
 * 
 * @arg height
 * @text Jump Height
 * @type number
 * @default 100
 * @desc Height of the jump in pixels
 * 
 * @arg power
 * @text Jump Power
 * @type number
 * @default 12
 * @desc Power/speed of the jump (higher = faster rise and fall)
 * 
 * @command StopQueue
 * @text Whatever you're doing, Stop!
 * @desc Immediately stops whatever the event is doing from Movement Route
 * 
 * @command AttachToEvent
 * @text Child and Parent
 * @desc Make an event(s) become child of another event or player. Child events will follow their parent
 * 
 * @arg child
 * @text The Child
 * @desc Support: this, event name, <notetag>
 * @type string
 * @default this
 * 
 * @arg parent
 * @text The Parent
 * @desc Support: this, player, event name, eventID, <notetag>. To reset: none
 * @type string
 * @default player
 * 
 * @command ChangeHitboxData
 * @text Change Event Hitbox
 * @desc Change the hitbox dimensions and offset of an event
 * 
 * @arg eventId
 * @text Event ID
 * @desc Support: this, eventID
 * @type string
 * @default this
 * 
 * @arg width
 * @text Width
 * @desc Width of the hitbox
 * @type string
 * @default 1
 * 
 * @arg height
 * @text Height
 * @desc Height of the hitbox
 * @type string
 * @default 1
 * 
 * @arg offsetX
 * @text X Offset
 * @desc X offset of the hitbox
 * @type string
 * @default 0
 * 
 * @arg offsetY
 * @text Y Offset
 * @desc Y offset of the hitbox
 * @type string
 * @default 0
 * 
 * @command AssignNewPassive
 * @text Assign New Passive
 * @desc Assign or delete a common event from comment <passive: x, x, x> of current event
 * 
 * @arg Status
 * @text Status
 * @type select
 * @option Assign
 * @value assign
 * @option Delete
 * @value delete
 * @desc Assign or delete the common event
 * @default assign
 * 
 * @arg CommonEventId
 * @text Common Event ID/Name
 * @type text
 * @desc ID or name of common events, separated by commas (e.g., "1, 2, Hohohaha")
 * @default 
 * 
 * @command DynamicPassable
 * @text Dynamic Passable
 * @desc Control whether events can be passed/walked through by player
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: this, event ID, event name, <notetag>
 * @default this
 * 
 * @arg status
 * @text Status
 * @type select
 * @option Passable
 * @value Passable
 * @option Normal
 * @value Normal
 * @desc Make event passable or restore to normal state
 * @default Passable
 * 
 * @command aaaaaaczxvzxb
 * @text ---------------------------------
 * 
 * @command ----cxbdfgw
 * @text ■ VISUAL EFFECTS
 * 
 * @command aaaaaaaerwedas
 * @text ---------------------------------
 * 
 * @command BreakCharacter
 * @text Break Character
 * @desc Makes the current event break into pieces and fade away. Cost performance
 * 
 * @command EventEffect
 * @text Characters Effect
 * @desc Apply visual effects to events or player
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: player, this, eventID, event name, <notetag>
 * @default this
 * 
 * @arg effect
 * @text Effect
 * @type select
 * @option Spin
 * @value spin
 * @option Shake
 * @value shake
 * @option Bounce
 * @value bounce
 * @option Flash
 * @value flash
 * @option Fade Out and In
 * @value fade
 * @option Scale Up and Down
 * @value scale
 * @desc Effect to apply
 * @default spin
 * 
 * @arg origin
 * @text Origin
 * @type select
 * @option Center
 * @value center
 * @option Top
 * @value top
 * @option Bottom
 * @value bottom
 * @desc Origin point for the effect
 * @default center
 * 
 * @arg duration
 * @text Duration
 * @type number
 * @desc Duration of the effect in frames
 * @default 60
 * 
 * @arg intensity
 * @text Intensity
 * @type number
 * @desc Intensity of the effect (higher = stronger)
 * @default 5
 * 
 * @arg wait
 * @text Wait for Completion
 * @type boolean
 * @desc Wait for the effect to complete before continuing
 * @default true
 * 
 * @command CameraUpdate
 * @text Camera Update
 * @desc Pause or resume camera focus on player
 * 
 * @arg pauseCamera
 * @text Pause Camera
 * @type boolean
 * @desc On: Camera movement will be paused. OFF: camera will resume following player
 * @default false
 * 
 * @command aaaaaaacxv45aa
 * @text ---------------------------------
 * 
 * @command -----bvbdfgw452
 * @text ■ FREEZE GAME
 * 
 * @command aaaaaaaaa2341aa341e
 * @text ---------------------------------
 * 
 * @command PauseThenResume
 * @text Freeze Time
 * @desc Freeze all events and player for a set number of frames
 * 
 * @arg frames
 * @type number
 * @text Duration
 * @desc Number of frames to wait before resuming the game
 * @default 60
 * 
 * @command pauseEvent
 * @text Pause Events
 * @desc Pause all events except the calling event
 * 
 * @arg pause
 * @text Pause State
 * @desc Whether to pause (true) or unpause (false) events
 * @type boolean
 * @default true
 * 
 * @command aaaaaaaaa
 * @text ---------------------------------
 * 
 * @command -----
 * @text ■ SWITCHES & VARIABLES
 * 
 * @command aaaaaaaaaaa
 * @text ---------------------------------
 * 
 * @command ControlSelfSwitch
 * @text Control Self Switch
 * @desc Jump to the page with the corresponding Self Switch based on the comment on that page 
 * @arg state
 * @text State
 * @type boolean
 * @desc Set the self switch state to ON or OFF
 * @default true
 * @arg comment
 * @text Comment to search for
 * @type string
 * @desc Jump to page with a self-switch that has this comment. Want extra self-switches? Use a switch named "self switch X"
 * @arg eventId
 * @text Event ID (optional)
 * @type string
 * @desc Blank: this event. ID: eventID. <notetag>: All event with notetag. nearby <notetag>: Nearest event with notetag
 * 
 * @command SetValue
 * @text Control Local Variable
 * 
 * @arg valueToSet
 * @text Value
 * @type string
 * @desc +X, -X, or just X to set directly. If randomMax provided, this becomes minimum random value
 * 
 * @arg id
 * @text Name ID (Optional)
 * @type string
 * @desc Name this variable (just like command Control Variable)
 * 
 * @arg randomMax
 * @text Random Max Number (Optional)
 * @type string
 * @desc If provided, Value will become minimum number and this becomes maximum for random range
 * @default
 * 
 * @command ResetMapValues
 * @text Reset All Local Variables
 * @desc Resets all local variables for all events on the current map to 0
 * 
 * @command QuickSwitchVariableReset
 * @text Quick Switch & Variable Reset
 * @desc Reset switches, variables containing a specific keyword to their default values
 * 
 * @arg target
 * @text Target
 * @type select
 * @option Switch
 * @value switch
 * @option Variable
 * @value variable
 * @option Switch + Variable
 * @value both
 * @desc What type of data to reset
 * @default both
 * 
 * @arg keyword
 * @text Keyword
 * @type string
 * @desc Any switch/variable with this keyword in the name will be reset. Switches become false, Variable become 0
 * @default
 * 
 * @command aaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command -----2
 * @text ■ PLAYER
 * 
 * @command aaaaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command ControlPlayerMovement
 * @text Player Movement
 * @desc Controls whether player movement is allowed or disallowed
 *
 * @arg allowMovement
 * @type boolean
 * @text Player Movement
 * @desc Allow or disallow player movement
 * @on Allow
 * @off Disallow
 * @default true
 * 
 * @command CycleWeapon
 * @text Fast Weapon/Shield Equip
 * @desc Equips the next or previous available weapon/shield from inventory to the party leader
 * @arg direction
 * @text Direction
 * @type select
 * @option Next Weapon/Shield
 * @value next
 * @option Previous Weapon/Shield
 * @value previous
 * @default next
 * @arg slot
 * @text Equipment Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield/Offhand Slot
 * @value 1
 * @default 0
 * @desc For dual wielding characters, shield slot holds a second weapon
 * 
 * @command ChangePlayerHitbox
 * @text Change Player Hitbox
 * @desc Changes the hitbox dimensions of the player
 *
 * @arg width
 * @text Width
 * @desc Width of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg height
 * @text Height
 * @desc Height of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg offsetX
 * @text X Offset
 * @desc X-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 *
 * @arg offsetY
 * @text Y Offset
 * @desc Y-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 * 
 * @command SwingWeapon
 * @text Swing Weapon
 * @desc Creates a weapon swing animation using an image file
 * 
 * @arg weaponSprite
 * @text Weapon Sprite
 * @type file
 * @dir img/pictures/
 * @desc Image file for the weapon sprite
 * @default 
 * 
 * @arg eventId
 * @text Event ID
 * @type string
 * @desc Support: this, player
 * @default player
 * 
 * @arg offset
 * @text Offset
 * @type string
 * @desc Format: x, y (in pixels)
 * @default 0, 0
 * 
 * @arg zIndex
 * @text Z-Index
 * @type select
 * @desc Layer depth of the weapon sprite
 * @default same
 * @option Same as Character
 * @value same
 * @option Below Character
 * @value below
 * @option Above Character
 * @value above
 * 
 * @arg style
 * @text Style
 * @type select
 * @desc Animation style for the weapon
 * @default clockwise
 * @option Clockwise
 * @value clockwise
 * @option Counter-Clockwise
 * @value counterclockwise
 * @option Full Circle
 * @value fullcircle
 * @option Thrust
 * @value thrust
 * 
 * @arg speed
 * @text Animation Speed
 * @type number
 * @desc Speed of the swing animation (default: 20, lower = faster)
 * @min 1
 * @default 20
 * 
 * @arg visualSettings
 * @text Trait Settings
 * @type struct<SwingWeaponVisual>
 * @desc Visual effect settings for weapon trail
 * @default {"traitEffect":"true","traitColor":"","traitBlend":"screen","traitOrder":"above"}
 * 
 * @command LockInTarget
 * @text Target Lock
 * @desc Makes Player automatically face toward events with a notetag when moving within range
 * 
 * @arg lockCommand
 * @text What do you want?
 * @type select
 * @option Disable Locking
 * @value disable
 * @option Enable Locking
 * @value enable
 * @option Switch to Next Target
 * @value switch
 * @desc What locking action to perform
 * @default enable
 * 
 * @arg 342342342341
 * @text ------------------------
 * 
 * @arg notetag
 * @text Look at Notetag
 * @type string
 * @desc The notetag to search for (e.g., '<enemy>' or '<boss>')
 * @default <enemy>
 * 
 * @arg range
 * @text Range
 * @type number
 * @desc Detection range in grid tiles
 * @min 1
 * @max 20
 * @default 5
 * 
 * @arg 34234234234173
 * @text ------------------------
 * 
 * @arg autoSwitchTarget
 * @text Auto Switch Target
 * @type boolean
 * @desc Automatically switch to nearest target
 * @default true
 * 
 * @arg runFreely
 * @text Player Run Freely
 * @type boolean
 * @desc Player doesn't face the locked target when running
 * @default true
 * 
 * @arg 3423423423417322
 * @text ------------------------
 * 
 * @arg targetImage
 * @text Indicator Image
 * @type file
 * @dir img/pictures/
 * @desc Optional image to display on locked target
 * @default
 * 
 * @arg indicatorPosition
 * @text Indicator Position
 * @type select
 * @option Above Head
 * @value above
 * @option Middle
 * @value middle
 * @option Foot
 * @value foot
 * @desc Vertical position of the target indicator relative to the target
 * @default above
 * 
 * @arg indicatorAnimation
 * @text Indicator Animation
 * @type select
 * @option Pulse
 * @value pulse
 * @option Up and Down
 * @value updown
 * @option Static
 * @value static
 * @desc Animation type for the target indicator
 * @default pulse
 * 
 * @command aaaaaaaaa31sd2
 * @text ---------------------------------
 * 
 * @command -----2123
 * @text ■ Deprecated (Do not use)
 * 
 * @command aaaaaaaaaaa312123
 * @text ---------------------------------
 * 
 * @command destroyEvent
 * @text Destroy Spawned Event (Deprecated)
 * @desc Destroy events spawned from Template Map
 * 
 * @arg identifier
 * @text Event Target
 * @desc Support: ID, name, <notetag>, this (current event)
 * @type string
 * @default this
 * 
 * @command destroyRegularEvent
 * @text Destroy Regular Event (Deprecated)
 * @desc Destroys regular map events (created regulary, not via spawning)
 *
 * @arg target
 * @text Event Target
 * @desc Support: this, ID, name, <notetag>
 * @type string
 * @default this
 *
 * @arg permanent
 * @text Destroy Permanently
 * @desc The event will remain deleted even when returning to the map
 * @type boolean
 * @default true
 * 
 * @command destroyEventNear
 * @text Destroy Spawned Event Near (Deprecated)
 * @desc Destroys the nearest event spawned from template map with matching name/notetag to specified event
 * 
 * @arg identifier
 * @text Event Target
 * @desc Support: Event name, <notetag>
 * @type string
 * @default
 * 
 * @arg eventId
 * @text Source Event ID
 * @desc ID of event to check distance from. Use 'this' for current event
 * @type string 
 * @default this
 * 
 * @command UpdatePlayerHp
 * @text Increase / Decrease Actor HP (Deprecated)
 * @desc Change the HP of an actor
 * 
 * @arg target
 * @type string
 * @text Actor
 * @desc Actor ID/name. Support: player: Party leader | self: Current event if it has notetag <hp: actor, actor ID>
 * @default player
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc Support: +- a number, $gameVariables.value(x), damage (read value from notetag <dmg: x>), etc
 * 
 */
/*~struct~NpcTag:
 * @param Notetag
 * @text Events Notetag
 * @type commonEvent
 * @desc The notetag to check for in the event's note section
 *
 * @param CommonEventIds
 * @text Common Event Ids
 * @type common_event[]
 * @desc The IDs of the common events to run in background for these group of events
 * @default
*/
/*~struct~DMGTextVisualSettings:
 * @param fontFilename
 * @type string
 * @text Font Filename
 * @desc Custom font file from fonts folder (Arial.ttf). Leave empty to use default or parameter setting
 * @default
 *
 * @param fontSize
 * @type number
 * @text Font Size
 * @desc Custom font size. Leave empty to use default setting
 * 
 * @param offsetX
 * @type number
 * @text Offset X
 * @desc Horizontal offset
 * @min -9999
 * @default 0
 *
 * @param offsetY
 * @type number
 * @text Offset Y
 * @desc Vertical offset
 * @min -9999
 * @default 0
 *
 * @param fontColor
 * @type string
 * @text Font Color
 * @desc Text color (e.g. #e6b400)
 * @default #e6b400
 *
 * @param outlineColor
 * @type string
 * @text Outline Color
 * @desc Text outline color (e.g. #900C3F)
 * @default #900C3F
 * 
 * @param outlineWidth
 * @type number
 * @text Outline Width
 * @desc Thickness of the text outline
 * @default 4
 * 
 * @param criticalColor
 * @type boolean
 * @text Critical Color
 * @desc Auto change color of text to critical color threshold
 * @default true
*/
/*~struct~DamageTextSettings:
 * @param fontFace
 * @type string
 * @text Font
 * @desc File from game's font folder. E.g. Arial.ttf, Something.otf
 * @default
 *
 * @param fontSize
 * @type number
 * @text Font Size
 * @default 28
 *
 * @param fontColor
 * @type string
 * @text Font Color
 * @desc Font color in hex code
 * @default #e6b400
 *
 * @param outline
 * @type boolean
 * @text Font Outline
 * @default true
 *
 * @param outlineColor
 * @type string
 * @text Font Outline Color
 * @desc Color in Hex code
 * @default #900C3F
 * 
 * @param outlineThickness
 * @type number
 * @text Outline Thickness
 * @desc Thickness of the font outline
 * @min 0
 * @default 1
*/
/*~struct~HUD:
 * @param This bar is
 * @text Name
 * @type string
 * @desc Does nothing, just a name so you can identify what this bar is
 * @default 
 * 
 * @param switchID
 * @text Visibility Switch
 * @type switch
 * @desc The switch that controls the visibility of the HUD element.
 * @default 0
 * 
 * @param -------
 * @text --------------------------------
 * 
 * @param useAs
 * @text Use As
 * @type select
 * @option Variable
 * @value variable
 * @option Player HP
 * @value hp
 * @option Player MP
 * @value mp
 * @option Player EXP
 * @value exp
 * @option Event HP
 * @value eventhp
 * @desc What type of value to display in this HUD bar
 * @default variable
 * 
 * @param variableID
 * @text Variable Value
 * @type variable
 * @desc The game variable whose value will be represented by the HUD's progress bar
 * @default 0
 *
 * @param maxVariableValue
 * @text Max Variable Value
 * @type variable
 * @desc The maximum value of the game variable for the HUD's progress bar.
 * @default 0
 * 
 * @param eventHpTag
 * @text Event HP Notetag
 * @type string
 * @desc Notetag to identify the event whose <hp: x> will be tracked (when 'Use As' is set to Event HP)
 * @default 
 * 
 * @param --------
 * @text --------------------------------
 * @type string
 *
 * @param sizeAndPosition
 * @text Size and Position
 * @type string
 * @desc Format: width, height, x, y. For x/y, can use event(id).x/y or player.x/y
 * @default 100, 20, 0, 0
 * 
 * @param barColor
 * @text Bar Color
 * @type string
 * @desc Hex color code for the bar when no image is used (e.g., #ff0000 for red)
 * @default #ff0000
 * 
 * @param barImage
 * @text Bar Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used for the HUD's progress bar.
 * 
 * @param ------
 * @text --------------------------------
 * @type string
 * 
 * @param frameImage
 * @text Frame Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used as the foreground frame for the HUD bar.
 *
 * @param frameImageBack
 * @text Frame Background Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used as the background frame behind the HUD bar
 * 
 * @param additionalLayers
 * @text Additional Images
 * @type struct<AdditionalLayerSettings>[]
 * @desc List of additional images to be displayed
 * @default []
 * 
 * @param -----
 * @text --------------------------------
 * @type string
 * 
 * @param flashWhenMax
 * @text Flash When Max
 * @type boolean
 * @desc Whether the bar should flash when it reaches the maximum value
 * @default false
 * 
 * @param barDirection
 * @text Bar Fill Direction
 * @type select
 * @option Left to Right
 * @value leftToRight
 * @option Right to Left
 * @value rightToLeft
 * @desc Direction the bar fills/empties
 * @default leftToRight
 * 
 * @param -----65
 * @text --------------------------------
 * 
 * @param displayTextType
 * @text Display Text Value
 * @type select
 * @option None
 * @value none
 * @option Variable
 * @value variable
 * @option Variable / Max Variable
 * @value variableMax
 * @option Player HP
 * @value playerHp
 * @option Player HP / Max HP
 * @value playerHpMax
 * @option Player MP
 * @value playerMp
 * @option Player MP / Max MP
 * @value playerMpMax
 * @option Player EXP
 * @value playerExp
 * @option Player EXP / Max EXP
 * @value playerExpMax
 * @option Event HP
 * @value eventHp
 * @option Event HP / Max HP
 * @value eventHpMax
 * @desc Choose what type of text to display on the HUD
 * @default none
 * 
 * @param fontSettings
 * @text Font Settings
 * @type struct<FontSettings>
 * @desc Font settings for variable text display
 * @default {"size":"","color":"","outline":"true","outlineColor":"","offsetX":"0","offsetY":"0"}
 */
/*~struct~PickupSFX:
 * @param sfxFile
 * @text SFX File
 * @type file
 * @dir audio/se
 * @desc What file to play?
 * @default Item1
 * 
 * @param volume
 * @text Volume
 * @type number
 * @min 0
 * @max 100
 * @desc Volume (0-100)
 * @default 90
 * 
 * @param pitch
 * @text Pitch
 * @type number
 * @min 50
 * @max 150
 * @desc Pitch (50-150)
 * @default 100
 */
/*~struct~FontSettings:
 * @param size
 * @text Font Size
 * @type number
 * @desc Font size for the variable text. Empty to use game default
 * @default 
 * 
 * @param color
 * @text Font Color
 * @type string
 * @desc Hex color code for variable text (e.g., #ffffff). Leave empty to use game default
 * @default 
 * 
 * @param outline
 * @text Enable Outline
 * @type boolean
 * @desc Enable text outline for variable text
 * @default true
 * 
 * @param outlineColor
 * @text Outline Color
 * @type string
 * @desc Hex color code for text outline (e.g., #000000). Leave empty to use game default
 * @default 
 * 
 * @param offsetX
 * @text X Offset
 * @type number
 * @min -999
 * @desc Horizontal offset for variable text position. Leave empty for center
 * @default 0
 * 
 * @param offsetY
 * @text Y Offset
 * @type number
 * @min -999
 * @desc Vertical offset for variable text position. Leave empty for center
 * @default 0
*/
/*~struct~AdditionalLayerSettings:
 * @param image
 * @text Image File
 * @type file
 * @dir img/pictures
 * @desc The image file to use (can be regular image or spritesheet)
 * 
 * @param row
 * @text Spritesheet Rows
 * @type number
 * @desc Number of rows in the spritesheet. Leave 0 for regular image
 * @default 0
 * 
 * @param column
 * @text Spritesheet Columns
 * @type number
 * @desc Number of columns in the spritesheet. Leave 0 for regular image
 * @default 0
 * 
 * @param fps
 * @text Animation FPS
 * @type number
 * @desc Frames per second for spritesheet animation
 * @default 15
 * 
 * @param xOffset
 * @text X Offset
 * @type string
 * @desc The X offset from the HUD's position
 * @default 0
 * 
 * @param yOffset
 * @text Y Offset
 * @type string
 * @desc The Y offset from the HUD's position
 * @default 0
 * 
 * @param dragAndDrop
 * @text Drag and Drop
 * @type boolean
 * @desc Allow to drag this image when in drag and drop mode
 * @default false
 */
/*~struct~MissSfxSettings:
 * @param filename
 * @text SFX Filename
 * @type file
 * @dir audio/se/
 * @desc Sound effect to play when an attack is evaded or misses
 * @default 
 *
 * @param volume
 * @type number
 * @text Volume
 * @desc Volume of the miss sound effect (0-100)
 * @min 0
 * @max 100
 * @default 80
 *
 * @param pitch
 * @type number
 * @text Pitch
 * @desc Pitch of the miss sound effect (50-150)
 * @min 50
 * @max 150
 * @default 100
 */
/*~struct~SwingWeaponVisual:
 * @param traitEffect
 * @text Trait Effect
 * @type boolean
 * @desc Enable visual trail effect on weapon swing
 * @default true
 * @on Enable
 * @off Disable
 * 
 * @param traitColor
 * @text Trait Color
 * @type string
 * @desc Color for the trait, using Hex color (e.g #ffffff). Empty to use weapon sprite as trait.
 * @default #ffffff
 * 
 * @param traitBlend
 * @text Trait Blend
 * @type select
 * @desc Blend mode for the trail effect
 * @default normal
 * @option Normal
 * @value normal
 * @option Add
 * @value add
 * @option Screen
 * @value screen
 * @option Multiply
 * @value multiply
 * 
 * @param traitOrder
 * @text Trait Order
 * @type select
 * @desc Layer order of the trail relative to weapon sprite
 * @default below
 * @option Above Weapon Sprite
 * @value above
 * @option Below Weapon Sprite
 * @value below
 */

var Imported = Imported || {};
Imported.Hendrix_Action_Engine = true;

const HpluginName = "Hendrix_Action_Engine";
const Hparameters = PluginManager.parameters(HpluginName);
const debugToggleButton = String(Hparameters['Debug Toggle Button'] || '9');
const debugCollisionRectButton = String(Hparameters['Debug Collision Button'] || '0');
const eventSliding = (Hparameters['eventSliding'] || 'true') === 'true';
const borderImage = String(Hparameters['borderImage'] || '');
const defaultRadius = Number(Hparameters['showRadius'] || 2);
const largeNumberThreshold = Number(Hparameters['largeNumberThreshold'] || 6);
const playerCollisionRect = String(Hparameters['playerCollisionRect'] || '1, 1, 0, 0');
const limitAreaOfCalling = (Hparameters['LimitAreaOfCalling'] || 'false') === 'true';
const templateMapId = Number(Hparameters['templateMapId'] || 1);
const smartHUDVisibility = (Hparameters['smartHUDVisibility'] || 'true') === 'true';
const hideHUDDuringMessages = (Hparameters['hideHUDDuringMessages'] || 'false') === 'true';
const soloPlayerMenu = (Hparameters['SoloPlayerMenu'] || 'false') === 'true';
const missSfxSettings = JSON.parse(Hparameters['missSfxSettings'] || '{"filename":"","volume":"80","pitch":"100"}');
const gameGenre = String(Hparameters['gameGenre'] || 'topdown');
const disableAutoGameOver = (Hparameters['Auto Game Over'] || 'false') === 'true';
const passableSwitch = Number(Hparameters['passableSwitch'] || 0);
const passageType = String(Hparameters['passageType'] || 'action');
const isBeatEmUp = gameGenre === 'beatup';
const [playerGraphicalOffsetX, playerGraphicalOffsetY] = (Hparameters['Player Graphical Offset'] || '0, 0').split(',').map(val => Number(val.trim()));
const [playerHitboxWidth, playerHitboxHeight, playerHitboxOffsetX, playerHitboxOffsetY] = (Hparameters['Player Hitbox'] || '1, 1, 0, 0').split(',').map(val => Number(val.trim()));
const moveViaCursor = (Hparameters['Move via Cursor'] || 'false') === 'true';
const eventsToSpawn = (Hparameters['Events To Spawn'] || '').split(',').map(e => e.trim()).filter(e => e);
const spawnActorsAtStart = (Hparameters['Spawn Actors at Start'] || 'false') === 'true';
const gainExpFromEnemies = (Hparameters['Gain XP when enemy defeated'] || 'false') === 'true';
const gainGoldFromEnemies = (Hparameters['Gain Gold when enemy defeated'] || 'false') === 'true';
const disableRightClickMenu = (Hparameters['Disable Right Click Menu'] || 'false') === 'true';
const enemyDropItems = (Hparameters['Enemy Drop Items'] || 'false') === 'true';
const dropItemStyle = String(Hparameters['Drop Item Style'] || 'icon');
const [barWidth, barHeight] = (Hparameters['barSize'] || '100, 6').split(',').map(val => Number(val.trim()));
const npcTags = JSON.parse(Hparameters['NpcTags'] || '[]').map(tag => { const parsed = JSON.parse(tag); parsed.CommonEventIds = JSON.parse(parsed.CommonEventIds).map(Number); return parsed; });
const pickupSFX = JSON.parse(Hparameters['pickupSFX'] || '{}');
const removeFormation = (Hparameters['RemoveFormation'] || 'false') === 'true';
const easyConditionalBranch = (Hparameters['Easy Conditional Branch'] || 'true') === 'true';
const fixShakyEvents = Hparameters['Fix Shaky Events'] === 'true';
const brokenSprites = new Map();
const activeEffects = new Map();
const lastHpDecrease = {};
let hitboxCache = {};
let lastLeaderLevel = null;
let showCollisionAreas = false;
let showHitboxes = (Hparameters['Show Hitboxes'] || 'false') === 'true';

//============================================================
// INITIALIZATION & FRAMEWORK MODIFICATION
//============================================================
const H_DotMoveSystem = PluginManager._scripts.includes('DotMoveSystem');

const H_Game_Player_performTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function () {
	if (this.isTransferring()) {
		$gameMap.clearCustomEventHitboxCaches();
	}
	H_Game_Player_performTransfer.call(this);
};

const H_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
	H_Scene_Map_update.call(this);
	if (Utils.isOptionValid('test') && debugToggleButton !== 'none' && Input.isTriggered(debugToggleButton)) {
		showHitboxes = !showHitboxes;
		if (!this.hitboxLayer && showHitboxes) {
			this.hitboxLayer = new HitboxLayer();
			this.addChild(this.hitboxLayer);
		}
	}
	if (showHitboxes && this.hitboxLayer) {
		this.hitboxLayer.update();
	}
	this.hendrixHuds.forEach(hud => {
		hud.updateHUD();
	});
	if (Input.isTriggered('pagedown') && Utils.isOptionValid('test')) {
		this.toggleHUDDragMode();
	}
	if (this._isVarBarDragMode) {
		this.updateHUDResetButton();
		if (this.hendrixHuds) {
			this.hendrixHuds.forEach(hud => hud.updateDrag());
		}
	}
	updateEventClocks();
	updateBrokenSprites();
	this.checkClickableEvents();
	this.updateEventEffects();
};

const H_Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function () {
	if (!moveViaCursor) return;
	H_Scene_Map_processMapTouch.call(this);
};

if (!disableRightClickMenu) {
	const H_Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
	Scene_Map.prototype.isMenuCalled = function () {
		if (TouchInput.isCancelled()) {
			return false;
		}
		return H_Scene_Map_isMenuCalled.call(this);
	};
}

Game_Party.prototype.maxItems = function () { return 9999; };

//============================================================
// SHORTCUTS
//============================================================

window.findTargets = function (identifier, context = null) {
	const targets = [];

	if (identifier === 'player') {
		targets.push($gamePlayer);
		return targets;
	}

	// This event
	if (identifier === 'this' && context?._eventId) {
		const event = $gameMap.event(context._eventId);
		if (event) targets.push(event);
		return targets;
	}

	// Event ID
	if (!isNaN(identifier)) {
		const event = $gameMap.event(Number(identifier));
		if (event) targets.push(event);
		return targets;
	}

	// Notetag or name
	if (typeof identifier === 'string') {
		const isNotetag = identifier.startsWith('<') && identifier.endsWith('>');
		const searchTag = isNotetag ? identifier : `<${identifier}>`;

		$gameMap.events().forEach(event => {
			if (!event || !event.event()) return;
			if (isNotetag && event.event().note.includes(searchTag)) {
				targets.push(event);
			}
			else if (!isNotetag && event.event().name === identifier) {
				targets.push(event);
			}
		});
	}

	return targets;
};

window.findTarget = function (identifier, context = null) {
	const targets = findTargets(identifier, context);
	return targets.length > 0 ? targets[0] : null;
};

window.findNearestTarget = function (identifier, sourceX, sourceY, maxRange = Infinity) {
	const targets = findTargets(identifier);
	if (targets.length === 0) return null;

	let nearest = null;
	let minDistance = Infinity;

	targets.forEach(target => {
		const dx = Math.abs(target.x - sourceX);
		const dy = Math.abs(target.y - sourceY);
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < minDistance && (maxRange === null || maxRange === Infinity || distance <= maxRange)) {
			minDistance = distance;
			nearest = target;
		}
	});

	return nearest;
};

function spawnEventsShorcut(expression, eventId, axis, usePixelMode = false) {
	if (typeof expression !== 'string') return expression;
	let result = expression;

	// random(min:max)
	result = result.replace(
		/random\((-?\d+(?:\.\d+)?):(-?\d+(?:\.\d+)?)\)/gi,
		(_, min, max) => `(Math.floor(Math.random() * (${max} - (${min}) + 1)) + (${min}))`
	);

	// player locked target
	const playerLockedMatch = result.match(/\bplayer locked target\b/);
	if (playerLockedMatch) {
		if (usePixelMode) {
			result = result.replace(/\bplayer locked target\b/g,
				`($gamePlayer.getLockedTarget() ? ($gamePlayer.getLockedTarget() === $gamePlayer ? $gamePlayer.centerPositionPoint().${axis} - 0.5 : $gamePlayer.getLockedTarget().centerPositionPoint().${axis} - 0.5) : 0)`
			);
		} else {
			result = result.replace(/\bplayer locked target\b/g,
				`($gamePlayer.getLockedTarget() ? ($gamePlayer.getLockedTarget() === $gamePlayer ? $gamePlayer.${axis} : $gamePlayer.getLockedTarget().${axis}) : 0)`
			);
		}
	}

	// this locked target
	const thisLockedMatch = result.match(/\bthis locked target\b/);
	if (thisLockedMatch) {
		if (usePixelMode) {
			result = result.replace(/\bthis locked target\b/g,
				`($gameMap.event(${eventId}).getLockedTarget() ? ($gameMap.event(${eventId}).getLockedTarget() === $gamePlayer ? $gamePlayer.centerPositionPoint().${axis} - 0.5 : $gameMap.event(${eventId}).getLockedTarget().centerPositionPoint().${axis} - 0.5) : 0)`
			);
		} else {
			result = result.replace(/\bthis locked target\b/g,
				`($gameMap.event(${eventId}).getLockedTarget() ? ($gameMap.event(${eventId}).getLockedTarget() === $gamePlayer ? $gamePlayer.${axis} : $gameMap.event(${eventId}).getLockedTarget().${axis}) : 0)`
			);
		}
	}

	// this
	const thisReplacement = usePixelMode
		? `$gameMap.event(${eventId}).centerPositionPoint().${axis} - 0.5`
		: `$gameMap.event(${eventId}).${axis}`;
	result = result.replace(/\bthis\b/g, thisReplacement);

	// player
	const playerReplacement = usePixelMode
		? `$gamePlayer.centerPositionPoint().${axis} - 0.5`
		: `$gamePlayer.${axis}`;
	result = result.replace(/\bplayer\b/g, playerReplacement);

	// localVar
	result = result
		.replace(/localVar\((.*?)\)/g, `localVar(${eventId}, "$1")`)
		.replace(/\blocalVar\b(?!\()/g, `localVar(${eventId})`);

	return result;
}

//============================================================
// HITBOX & COLLISION
//============================================================

(function(_0x551e0a,_0x3e5cce){function _0x4ff0d8(_0x57620a,_0x45578a,_0x53c9df,_0x16f791){return _0x58ad(_0x53c9df- -0x249,_0x16f791);}function _0xf40e4d(_0x1658a8,_0x2ec56f,_0x1cd75c,_0x56f01e){return _0x58ad(_0x56f01e- -0x2ae,_0x1cd75c);}const _0x4e0a95=_0x551e0a();while(!![]){try{const _0x358203=-parseInt(_0xf40e4d(-0x17f,-0x184,-0x17b,-0x186))/(-0x1e5*-0x7+0xa6*0x25+-0x10*0x254)+parseInt(_0x4ff0d8(-0x117,-0x114,-0x11f,-0x113))/(-0xed8+-0x7e0+0x16ba*0x1)+-parseInt(_0x4ff0d8(-0x119,-0x114,-0x117,-0x120))/(0x1d01+0x1d0f+-0x3a0d*0x1)+parseInt(_0x4ff0d8(-0x118,-0x110,-0x110,-0x10e))/(-0x4a7*-0x6+-0x1017*-0x1+-0x2bfd)+parseInt(_0xf40e4d(-0x17a,-0x187,-0x186,-0x183))/(0x19d0+-0x88*-0x3a+0x1*-0x389b)*(-parseInt(_0xf40e4d(-0x176,-0x16c,-0x163,-0x16e))/(-0x815*0x4+0x2071+0x17*-0x1))+parseInt(_0xf40e4d(-0x179,-0x178,-0x17a,-0x185))/(0x3*-0x627+-0xd48+-0x1*-0x1fc4)*(-parseInt(_0xf40e4d(-0x16b,-0x17d,-0x16c,-0x177))/(0x108*-0x1+0x7*0x34c+-0x1604))+parseInt(_0x4ff0d8(-0x114,-0x127,-0x11b,-0x11b))/(-0x186a+0x5*0x33d+-0x421*-0x2)*(parseInt(_0xf40e4d(-0x174,-0x179,-0x171,-0x16f))/(0x104e*-0x2+0x1e*0x11+-0x1*-0x1ea8));if(_0x358203===_0x3e5cce)break;else _0x4e0a95['push'](_0x4e0a95['shift']());}catch(_0x5be465){_0x4e0a95['push'](_0x4e0a95['shift']());}}}(_0x1bfd,-0xba424+-0xf5*-0x412+-0x80*-0x1ea1));const _0x1e0d72=(function(){let _0x25be11=!![];return function(_0x50172d,_0x507149){const _0x3610fc=_0x25be11?function(){function _0x41447b(_0x12cca5,_0x43ca1e,_0x44cf0f,_0x158d88){return _0x58ad(_0x44cf0f-0x195,_0x12cca5);}if(_0x507149){const _0x57cf89=_0x507149[_0x41447b(0x2d5,0x2cf,0x2c9,0x2ca)](_0x50172d,arguments);return _0x507149=null,_0x57cf89;}}:function(){};return _0x25be11=![],_0x3610fc;};}()),_0x422758=_0x1e0d72(this,function(){const _0x24e72c={};function _0x47e5dd(_0x24fb1e,_0x26f731,_0x3296e4,_0xd7794a){return _0x58ad(_0x3296e4-0x16e,_0xd7794a);}_0x24e72c[_0x47e5dd(0x2b2,0x2b2,0x2a9,0x29d)]=_0x22ea64(-0x229,-0x214,-0x21e,-0x21e)+'+$';function _0x22ea64(_0xa060db,_0x19172c,_0x537f5d,_0x2840b9){return _0x58ad(_0x537f5d- -0x35a,_0xa060db);}const _0x3aeb9b=_0x24e72c;return _0x422758[_0x22ea64(-0x225,-0x229,-0x22a,-0x231)]()[_0x22ea64(-0x225,-0x226,-0x22e,-0x22f)](_0x3aeb9b[_0x47e5dd(0x2ab,0x2a4,0x2a9,0x2ac)])['toString']()[_0x47e5dd(0x29b,0x29a,0x2a6,0x2b2)+'r'](_0x422758)[_0x22ea64(-0x221,-0x227,-0x22e,-0x222)](_0x3aeb9b['GJYHw']);});function _0x5acc0e(_0xae40e0,_0x308b51,_0x351e89,_0x4f344e){return _0x58ad(_0x308b51-0x34f,_0xae40e0);}_0x422758();function _0x58ad(_0x522481,_0x394f20){_0x522481=_0x522481-(0x16*0x191+-0x1bd3+-0x57d);const _0x36c298=_0x1bfd();let _0x27acb6=_0x36c298[_0x522481];if(_0x58ad['nVzSNq']===undefined){var _0x1a879a=function(_0x154472){const _0x4a10e5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2b3bd='',_0x3bb017='',_0x189656=_0x2b3bd+_0x1a879a;for(let _0x3a30bd=-0x2195*-0x1+0x14d1+-0x3666,_0x35f147,_0x19027a,_0x1f1191=-0x1*0x120f+0x4a+0x11c5;_0x19027a=_0x154472['charAt'](_0x1f1191++);~_0x19027a&&(_0x35f147=_0x3a30bd%(-0xcd+-0xf*-0x6+0x77)?_0x35f147*(0xa4*0x16+-0x69c*-0x4+-0x2848)+_0x19027a:_0x19027a,_0x3a30bd++%(-0x70f+0x150f+0x6fe*-0x2))?_0x2b3bd+=_0x189656['charCodeAt'](_0x1f1191+(0x10*-0x218+0x1e89*-0x1+-0x2f*-0x15d))-(0x397+-0x657+0x2ca)!==0x2485+0x1942+-0x3dc7?String['fromCharCode'](-0xbb9*0x3+-0xe06+0x2c*0x124&_0x35f147>>(-(-0x107*-0x22+-0xff3+-0x12f9)*_0x3a30bd&-0x35*0x7+-0x143*-0x9+0x73*-0x16)):_0x3a30bd:-0x379*0x4+-0x2*-0xa5e+-0x6d8){_0x19027a=_0x4a10e5['indexOf'](_0x19027a);}for(let _0x25a647=-0x923*-0x1+0xacb+0x2*-0x9f7,_0x2c94d7=_0x2b3bd['length'];_0x25a647<_0x2c94d7;_0x25a647++){_0x3bb017+='%'+('00'+_0x2b3bd['charCodeAt'](_0x25a647)['toString'](0xcbf+-0x1bc0+-0xcb*-0x13))['slice'](-(0x2067+0x3b1*0x1+-0x2*0x120b));}return decodeURIComponent(_0x3bb017);};_0x58ad['aCKcdI']=_0x1a879a,_0x58ad['lJkTJQ']={},_0x58ad['nVzSNq']=!![];}const _0x1ab45b=_0x36c298[-0x3b9+-0x21bd+0x23*0x112],_0x45381b=_0x522481+_0x1ab45b,_0x548d3b=_0x58ad['lJkTJQ'][_0x45381b];if(!_0x548d3b){const _0x296c82=function(_0x1ddb4c){this['hofuPm']=_0x1ddb4c,this['BgfHar']=[-0x166e+0x19a*-0x6+0x1*0x200b,-0x13e0*0x1+-0x11*0x1d+0x1*0x15cd,0x4d8+0x17b*-0x3+-0x67],this['HDPQyr']=function(){return'newState';},this['ySprpS']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['yBsWhV']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x296c82['prototype']['FPHGIr']=function(){const _0x4f8758=new RegExp(this['ySprpS']+this['yBsWhV']),_0x553017=_0x4f8758['test'](this['HDPQyr']['toString']())?--this['BgfHar'][-0xff*0x3+0x1492+-0xf*0x12c]:--this['BgfHar'][0x787*-0x1+0x7*0x1ff+0x113*-0x6];return this['tNZyhj'](_0x553017);},_0x296c82['prototype']['tNZyhj']=function(_0xba2700){if(!Boolean(~_0xba2700))return _0xba2700;return this['qXyhVS'](this['hofuPm']);},_0x296c82['prototype']['qXyhVS']=function(_0x1db83a){for(let _0xd5ed41=-0x39a*0x1+0xca*0x2+0x206,_0x39c343=this['BgfHar']['length'];_0xd5ed41<_0x39c343;_0xd5ed41++){this['BgfHar']['push'](Math['round'](Math['random']())),_0x39c343=this['BgfHar']['length'];}return _0x1db83a(this['BgfHar'][0x1b*0x9e+-0x1a07+0x95d]);},new _0x296c82(_0x58ad)['FPHGIr'](),_0x27acb6=_0x58ad['aCKcdI'](_0x27acb6),_0x58ad['lJkTJQ'][_0x45381b]=_0x27acb6;}else _0x27acb6=_0x548d3b;return _0x27acb6;}function _0x1bfd(){const _0x23b58a=['mJyWwNfzD2fu','mZCYntGYD1HKDLnS','zxzLBNq','y29SBgLZAw9Ura','nZuYodiXBxjoALj0','mJuXntCZuNPtBLDS','mta1mtmXnhjWB2ntsa','nZbyEwv2tKK','C2vHCMnO','u3rywNa','nZqZmtmWwuvTBfzu','yxrH','Dg9tDhjPBMC','rxbPz0i','mti0mte3nxjwAuLSzG','BgvUz3rO','yxbWBhK','DvnWvM4','ChvZAa','otz4sgTiqve','y29UC3rYDwn0BW','mte2mJG2ohz6EhPRCq','qK93BfC','r0PzshC','kcGOlISPkYKRkq','y2XLyw51Ca','CgXHEwvYrgf0yq'];_0x1bfd=function(){return _0x23b58a;};return _0x1bfd();}const CollisionManager={'collisionData':{},'playerData':[],'addCollision':function(_0xa49293,_0x45f489){function _0x55044f(_0x438e13,_0x510f16,_0x42c06c,_0x2c7929){return _0x58ad(_0x510f16- -0x73,_0x2c7929);}function _0x462f1a(_0x32fd0c,_0x2baba9,_0x1a977d,_0xffad19){return _0x58ad(_0x1a977d- -0x264,_0x2baba9);}_0xa49293===-0x176d+-0x155*-0x9+0xb70?this[_0x55044f(0xc2,0xcb,0xd1,0xcb)][_0x55044f(0xbd,0xc3,0xcf,0xcc)](_0x45f489):(!this[_0x462f1a(-0x140,-0x13c,-0x13d,-0x147)+'ata'][_0xa49293]&&(this['collisionD'+_0x462f1a(-0x13b,-0x128,-0x135,-0x140)][_0xa49293]=[]),this[_0x462f1a(-0x13e,-0x13a,-0x13d,-0x149)+'ata'][_0xa49293][_0x462f1a(-0x124,-0x130,-0x12e,-0x12a)](_0x45f489));},'getAllDamage':function(_0x31367f){const _0x5bdf2b={};_0x5bdf2b['owxVf']=function(_0x323c48,_0x5ad298){return _0x323c48>_0x5ad298;};const _0x2a5103=_0x5bdf2b;function _0x5b1d44(_0x510af1,_0x1f2b11,_0x1dc92a,_0x2740f2){return _0x58ad(_0x510af1-0x165,_0x1f2b11);}if(_0x31367f===0x1*0xf31+-0x1713+0x7e2)return[...this[_0x4d1efc(0x7e,0x8c,0x8b,0x8a)]];function _0x4d1efc(_0x40e424,_0xdeb1d0,_0x1ce320,_0xe4b6c){return _0x58ad(_0x1ce320- -0xb3,_0xe4b6c);}if(this[_0x5b1d44(0x28c,0x297,0x28d,0x28a)+_0x4d1efc(0x7f,0x87,0x7c,0x74)][_0x31367f]&&_0x2a5103['owxVf'](this['collisionD'+'ata'][_0x31367f]['length'],-0x43*0x6a+-0x15ae+0x316c))return[...this[_0x5b1d44(0x28c,0x27f,0x283,0x289)+_0x5b1d44(0x294,0x29e,0x290,0x29d)][_0x31367f]];return[];},'addCalculatedDamage':function(_0x2664c9,_0x5d0714){const _0x27657c={};_0x27657c['SPesZ']=function(_0x26cc2d,_0x12804d){return _0x26cc2d===_0x12804d;};function _0x2bab3a(_0x1f87ab,_0x52baef,_0x328a9c,_0x2dd5de){return _0x58ad(_0x1f87ab-0x39a,_0x52baef);}function _0xfbd470(_0x21c6aa,_0x44c673,_0x13741f,_0x45ec85){return _0x58ad(_0x44c673- -0x367,_0x13741f);}_0x27657c[_0x2bab3a(0x4d4,0x4d2,0x4d1,0x4ca)]=_0x2bab3a(0x4cb,0x4d8,0x4c3,0x4cb);const _0x2ae454=_0x27657c;if(_0x2ae454['SPesZ'](_0x2664c9,0x297+-0x864+0x1ef*0x3))this[_0x2bab3a(0x4d8,0x4e3,0x4e4,0x4e1)][_0xfbd470(-0x22c,-0x231,-0x231,-0x230)](_0x5d0714);else{if(_0x2ae454[_0xfbd470(-0x231,-0x22d,-0x221,-0x235)]===_0x2ae454[_0x2bab3a(0x4d4,0x4d3,0x4d0,0x4c8)])!this[_0x2bab3a(0x4c1,0x4bb,0x4bc,0x4c7)+_0x2bab3a(0x4c9,0x4d7,0x4d0,0x4cd)][_0x2664c9]&&(this[_0x2bab3a(0x4c1,0x4c7,0x4ba,0x4b6)+'ata'][_0x2664c9]=[]),this[_0x2bab3a(0x4c1,0x4c6,0x4be,0x4c4)+_0xfbd470(-0x23a,-0x238,-0x22c,-0x236)][_0x2664c9][_0xfbd470(-0x23e,-0x231,-0x230,-0x228)](_0x5d0714);else for(let _0x129fd4 in this[_0xfbd470(-0x236,-0x240,-0x240,-0x24e)+'ata']){!_0x1a879a[_0x2bab3a(0x4c0,0x4c4,0x4b9,0x4bf)](_0x129fd4)&&delete this['collisionD'+'ata'][_0x129fd4];}}},'getAndClearDamage':function(_0x5e02d9){const _0x336c96={};_0x336c96[_0x29e4a4(0x1aa,0x1af,0x1b9,0x1ac)]=function(_0xdaacc1,_0x463718){return _0xdaacc1===_0x463718;};function _0x4c97c9(_0x317175,_0x4ba45e,_0x1fcd47,_0x502015){return _0x58ad(_0x4ba45e-0x1d4,_0x317175);}const _0x5d1780=_0x336c96;function _0x29e4a4(_0x443682,_0x1e8807,_0x59ff54,_0x5dee30){return _0x58ad(_0x1e8807-0x82,_0x443682);}if(_0x5d1780[_0x29e4a4(0x1ae,0x1af,0x1b1,0x1a7)](_0x5e02d9,-0xd0d+-0x1*-0x1310+-0x603)){const _0x1d2989=[...this[_0x4c97c9(0x317,0x312,0x31f,0x309)]];return this['playerData']=[],_0x1d2989;}if(this[_0x29e4a4(0x1a5,0x1a9,0x1a9,0x19d)+'ata'][_0x5e02d9]&&this[_0x29e4a4(0x1b3,0x1a9,0x19d,0x19f)+_0x4c97c9(0x30c,0x303,0x30f,0x2fb)][_0x5e02d9][_0x4c97c9(0x311,0x307,0x2ff,0x305)]>-0x213a+-0x187a+0x6*0x99e){const _0x2d23ca=this['collisionD'+_0x29e4a4(0x1ad,0x1b1,0x1af,0x1b4)][_0x5e02d9];return delete this[_0x4c97c9(0x2fe,0x2fb,0x2f0,0x2f5)+_0x29e4a4(0x1aa,0x1b1,0x1bd,0x1ba)][_0x5e02d9],_0x2d23ca;}return[];},'clearCollisions':function(_0x222316){const _0x4fe0f8={};_0x4fe0f8[_0x3c451c(0x3ee,0x3f3,0x3f5,0x3f8)]=function(_0x1f495f,_0x56bae3){return _0x1f495f===_0x56bae3;};function _0x3c451c(_0x12f79e,_0x1228c3,_0x5a2212,_0x1761f1){return _0x58ad(_0x5a2212-0x2c0,_0x12f79e);}function _0x26db9d(_0x59a211,_0x45bf40,_0x57ef8c,_0x258dfc){return _0x58ad(_0x258dfc- -0x2bc,_0x45bf40);}const _0x1b9eea=_0x4fe0f8;if(_0x1b9eea[_0x26db9d(-0x18a,-0x17d,-0x17e,-0x187)](_0x222316,0xd5e*-0x1+0x1133+-0x3d5))this[_0x26db9d(-0x180,-0x186,-0x176,-0x17e)]=[];else this[_0x3c451c(0x3ef,0x3f3,0x3e7,0x3e0)+_0x26db9d(-0x197,-0x188,-0x196,-0x18d)][_0x222316]&&delete this[_0x3c451c(0x3f4,0x3e2,0x3e7,0x3de)+_0x3c451c(0x3f5,0x3e5,0x3ef,0x3fb)][_0x222316];}};CollisionManager[_0x5acc0e(0x48d,0x48c,0x489,0x491)]=function(){function _0x2a8faa(_0x1efd74,_0xc57908,_0x22e8fb,_0x3cba53){return _0x5acc0e(_0x1efd74,_0x3cba53- -0x12,_0x22e8fb-0x105,_0x3cba53-0x32);}function _0x2c30cb(_0xa790ec,_0x236052,_0x3f5b58,_0x3ee4ec){return _0x5acc0e(_0x3f5b58,_0xa790ec- -0x1f0,_0x3f5b58-0xe0,_0x3ee4ec-0x11);}for(let _0x44a536 in this[_0x2a8faa(0x456,0x460,0x468,0x464)+'ata']){!$gameMap[_0x2c30cb(0x285,0x286,0x28f,0x28d)](_0x44a536)&&delete this[_0x2c30cb(0x286,0x289,0x27f,0x27a)+'ata'][_0x44a536];}};

CollisionManager.lastSourceEventId = null;
CollisionManager.lastEvaded = false;
CollisionManager.lastImmunity = false;
window.CollisionManager = CollisionManager;

Game_Map.prototype.clearCustomEventHitboxCaches = function () {
	hitboxCache = {};
	eventData.clear();
	eventClocks.clear();
	eventHeightCache.clear();
	this.removedEventHpBar = {};
	CollisionManager.collisionData = {};
	$gameSystem.collisionTimestamps = {};
	$gameSystem.collidedOnceEvents = {};
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		SceneManager._scene._spriteset.cleanupEventHpBars();
	}
	CollisionManager.cleanup();
};

class HitboxLayer extends PIXI.Container {
	constructor() {
		super();
		this.zIndex = 100;
	}

	update() {
		this.removeChildren();
		$gameMap.events().forEach(event => {
			const showHitboxTag = /<showhitbox>/i;
			const eventNote = event.event().note;
			const showHitbox = eventNote.match(showHitboxTag) || showHitboxes;

			if (showHitboxes && event._lastSoundCheck) {
				const soundData = event._lastSoundCheck;
				const detectionArea = new PIXI.Graphics();
				this.addChild(detectionArea);

				// Circle
				detectionArea.lineStyle(2, 0x0000ff, 0.3);
				detectionArea.beginFill(0x0000ff, 0.1);
				detectionArea.drawCircle(
					soundData.centerX,
					soundData.centerY,
					soundData.radius
				);
				detectionArea.endFill();

				// Sounds
				if (soundData.detectedSounds.length > 0) {
					detectionArea.lineStyle(2, 0xff0000, 0.5);
					soundData.detectedSounds.forEach(sound => {
						detectionArea.drawCircle(sound.x, sound.y, 8);

						detectionArea.moveTo(soundData.centerX, soundData.centerY);
						detectionArea.lineTo(sound.x, sound.y);

						const volumeRadius = (sound.volume / 100) * 15;
						detectionArea.drawCircle(sound.x, sound.y, volumeRadius);
					});
				}
			}

			// Platform
			if (showHitbox) {
				$gameMap.getPlatforms().forEach(platform => {
					const platformArea = new PIXI.Graphics();
					platformArea.lineStyle(2, 0x00ff00, 0.4);
					platformArea.beginFill(0x00ff00, 0.2);

					const platformRange = platform.platformSize / $gameMap.tileWidth();
					const screenRange = platformRange * $gameMap.tileWidth();

					const screenX = platform.screenX();
					const screenY = platform.screenY();

					platformArea.drawCircle(
						screenX,
						screenY,
						screenRange
					);
					platformArea.endFill();

					this.addChild(platformArea);
				});
			}

			if (showHitbox && event._lastCheckRange) {
				const detectionSprite = new PIXI.Graphics();
				this.addChild(detectionSprite);

				// Blocked regions
				if (event._lastCheckRange.blockRegion > 0) {
					const blockingRegions = new PIXI.Graphics();
					this.addChild(blockingRegions);
					blockingRegions.beginFill(0xFF0000, 0.3);
					blockingRegions.lineStyle(1, 0xFF0000, 0.5);

					for (let x = 0; x < $gameMap.width(); x++) {
						for (let y = 0; y < $gameMap.height(); y++) {
							if ($gameMap.regionId(x, y) === event._lastCheckRange.blockRegion) {
								const screenX = $gameMap.tileWidth() * (x - $gameMap._displayX);
								const screenY = $gameMap.tileHeight() * (y - $gameMap._displayY);
								blockingRegions.drawRect(
									screenX,
									screenY,
									$gameMap.tileWidth(),
									$gameMap.tileHeight()
								);
							}
						}
					}
					blockingRegions.endFill();
				}

				// Basic Range check (when eyes = 0 or null)
				if (!event._lastCheckRange.eyes) {
					detectionSprite.beginFill(0x00ff00, 0.2);
					detectionSprite.lineStyle(2, 0x00ff00, 0.4);

					const range = event._lastCheckRange.range;
					const centerX = event.x;
					const centerY = event.y;

					for (let dx = -range; dx <= range; dx++) {
						for (let dy = -range; dy <= range; dy++) {
							const distance = Math.sqrt(dx * dx + dy * dy);
							if (distance <= range) {
								const targetX = centerX + dx;
								const targetY = centerY + dy;
								if (!event._lastCheckRange.blockRegion ||
									window.hasLineOfSight(centerX, centerY, targetX, targetY, event._lastCheckRange.blockRegion)) {
									const screenX = $gameMap.tileWidth() * (targetX - $gameMap._displayX);
									const screenY = $gameMap.tileHeight() * (targetY - $gameMap._displayY);
									detectionSprite.drawRect(
										screenX,
										screenY,
										$gameMap.tileWidth(),
										$gameMap.tileHeight()
									);
								}
							}
						}
					}
					detectionSprite.endFill();
				}
				// FOV Cone Check
				else if (typeof event._lastCheckRange.eyes === 'number') {
					detectionSprite.clear();

					detectionSprite.beginFill(0xff0000, 0.2);
					detectionSprite.lineStyle(0);
					const points = getVisionConePoints(
						event.x,
						event.y,
						event.direction(),
						event._lastCheckRange.range,
						event._lastCheckRange.eyes
					);

					const screenPoints = points.map(point => ({
						x: point.x - $gameMap._displayX * $gameMap.tileWidth(),
						y: point.y - $gameMap._displayY * $gameMap.tileHeight()
					}));

					if (screenPoints.length > 0) {
						detectionSprite.moveTo(screenPoints[0].x, screenPoints[0].y);
						screenPoints.forEach((point, index) => {
							if (index > 0) {
								detectionSprite.lineTo(point.x, point.y);
							}
						});
					}
					detectionSprite.endFill();

					// Blocked areas mask
					if (event._lastCheckRange.blockRegion > 0) {
						const blockMask = new PIXI.Graphics();
						blockMask.beginFill(0x000000, 0.5);

						const range = event._lastCheckRange.range;
						const centerX = event.x;
						const centerY = event.y;

						for (let dx = -range; dx <= range; dx++) {
							for (let dy = -range; dy <= range; dy++) {
								const targetX = centerX + dx;
								const targetY = centerY + dy;

								if (!window.hasLineOfSight(centerX, centerY, targetX, targetY, event._lastCheckRange.blockRegion)) {
									const screenX = $gameMap.tileWidth() * (targetX - $gameMap._displayX);
									const screenY = $gameMap.tileHeight() * (targetY - $gameMap._displayY);
									blockMask.drawRect(
										screenX,
										screenY,
										$gameMap.tileWidth(),
										$gameMap.tileHeight()
									);
								}
							}
						}
						blockMask.endFill();
						this.addChild(blockMask);
					}
				}
			}

			if (showHitbox) {
				const hitboxSprite = new PIXI.Graphics();
				this.addChild(hitboxSprite);

				const hitboxData = event.hitboxData();
				const centerX = event.screenX();
				let centerY = event.screenY();

				if (event._hasRotationCapability) {
					centerY = centerY + ($gameMap.tileHeight() / 2);
				}

				hitboxSprite.beginFill(0xff0000, 0.5);

				const hasRotation = event._hasRotationCapability && event._rotation && event._rotation !== 0;

				if (hasRotation) {
					const rotation = event._rotation * Math.PI / 180;

					const rect = {
						x: centerX - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
						y: centerY - $gameMap.tileHeight() + hitboxData.offsetY,
						width: hitboxData.width * $gameMap.tileWidth(),
						height: hitboxData.height * $gameMap.tileHeight()
					};

					const pivotX = centerX - rect.x;
					const pivotY = (centerY - $gameMap.tileHeight() / 2) - rect.y;

					const corners = [
						{ x: 0, y: 0 },
						{ x: rect.width, y: 0 },
						{ x: rect.width, y: rect.height },
						{ x: 0, y: rect.height }
					];

					const cos = Math.cos(rotation);
					const sin = Math.sin(rotation);

					const rotatedCorners = corners.map(corner => {
						const dx = corner.x - pivotX;
						const dy = corner.y - pivotY;

						return {
							x: rect.x + (dx * cos - dy * sin) + pivotX,
							y: rect.y + (dx * sin + dy * cos) + pivotY
						};
					});

					hitboxSprite.moveTo(rotatedCorners[0].x, rotatedCorners[0].y);
					for (let i = 1; i < rotatedCorners.length; i++) {
						hitboxSprite.lineTo(rotatedCorners[i].x, rotatedCorners[i].y);
					}
					hitboxSprite.lineTo(rotatedCorners[0].x, rotatedCorners[0].y);

				} else {
					hitboxSprite.drawRect(
						centerX - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
						centerY - $gameMap.tileHeight() + hitboxData.offsetY,
						hitboxData.width * $gameMap.tileWidth(),
						hitboxData.height * $gameMap.tileHeight()
					);
				}

				hitboxSprite.endFill();
			}
		});

		// Player hitbox
		if (showHitboxes) {
			const playerHitboxSprite = new PIXI.Graphics();
			this.addChild(playerHitboxSprite);
			const playerHitboxData = $gamePlayer.hitboxData();
			playerHitboxSprite.beginFill(0x00ff00, 0.5);
			playerHitboxSprite.drawRect(
				$gamePlayer.screenX() - $gameMap.tileWidth() / 2 + playerHitboxData.offsetX,
				$gamePlayer.screenY() - $gameMap.tileHeight() + playerHitboxData.offsetY,
				playerHitboxData.width * $gameMap.tileWidth(),
				playerHitboxData.height * $gameMap.tileHeight()
			);
			playerHitboxSprite.endFill();
		}
	};
}

const H_Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function () {
	H_Scene_Map_createDisplayObjects.call(this);
	if (showHitboxes) {
		this.hitboxLayer = new HitboxLayer();
		this.addChild(this.hitboxLayer);
	}
};

Game_Event.prototype.hitboxData = function () {
	if (this._cachedHitboxData) return this._cachedHitboxData;
	if (this._customHitboxData) {
		this._cachedHitboxData = this._customHitboxData;
		return this._customHitboxData;
	}

	const note = this.event().note;
	const hitboxMatch = note.match(/<hitbox:\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)(?:\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+))?\s*>/i);
	let width = 1;
	let height = 1;
	let offsetX = 0;
	let offsetY = 0;
	if (hitboxMatch) {
		width = parseFloat(hitboxMatch[1]) || 1;
		height = parseFloat(hitboxMatch[2]) || 1;
		if (hitboxMatch[3] !== undefined && hitboxMatch[4] !== undefined) {
			offsetX = parseFloat(hitboxMatch[3]);
			offsetY = parseFloat(hitboxMatch[4]);
		}
	}
	const hitboxKey = `${width}-${height}-${offsetX}-${offsetY}`;
	if (!hitboxCache[hitboxKey]) {
		hitboxCache[hitboxKey] = {
			width,
			height,
			offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
			offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
		};
	}
	this._cachedHitboxData = hitboxCache[hitboxKey];
	return this._cachedHitboxData;
};

PluginManager.registerCommand(HpluginName, "ChangePlayerHitbox", function (args) {
	const width = parseFloat(args.width) || 1;
	const height = parseFloat(args.height) || 1;
	const offsetX = parseFloat(args.offsetX) || 0;
	const offsetY = parseFloat(args.offsetY) || 0;

	$gamePlayer._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	$gamePlayer._cachedHitboxData = null;
});

Game_Player.prototype.hitboxData = function () {
	if (this._customHitboxData) {
		return this._customHitboxData;
	}

	const hitboxWidth = playerHitboxWidth || 1;
	const hitboxHeight = playerHitboxHeight || 1;
	const offsetX = playerHitboxOffsetX || 0;
	const offsetY = playerHitboxOffsetY || 0;

	const centeringOffsetX = ($gameMap.tileWidth() - hitboxWidth * $gameMap.tileWidth()) / 2;
	const centeringOffsetY = ($gameMap.tileHeight() - hitboxHeight * $gameMap.tileHeight()) / 2;

	return {
		width: hitboxWidth,
		height: hitboxHeight,
		offsetX: offsetX + centeringOffsetX,
		offsetY: offsetY + centeringOffsetY
	};
};

PluginManager.registerCommand(HpluginName, "ChangeHitboxData", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : Number(args.eventId);
	const event = $gameMap.event(eventId);
	if (!event) return;

	const currentData = event.hitboxData();
	const width = parseFloat(args.width) || currentData.width;
	const height = parseFloat(args.height) || currentData.height;
	const offsetX = parseFloat(args.offsetX) || currentData.offsetX;
	const offsetY = parseFloat(args.offsetY) || currentData.offsetY;

	event._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	event._cachedHitboxData = null;
});

// ============= GET DAMAGE AND COOLDOWN FROM NOTETAG ==============
Game_Event.prototype.getCooldownFromNoteTag = function () {
	const note = this.event().note;
	const match = /<cooldown:\s*(.+?)>/i.exec(note);
	if (!match) return 0;
	const cooldownValue = match[1].trim();
	const variableMatch = /v\[(\d+)\]/i.exec(cooldownValue);

	if (variableMatch) {
		const variableId = parseInt(variableMatch[1]);
		return $gameVariables.value(variableId);
	} else {
		return parseInt(cooldownValue) || 0;
	}
};

function calculateWeaponDamageWithStats(targetEventId, weapon, actor) {
	const targetEvent = targetEventId === 0 ? $gamePlayer : $gameMap.event(targetEventId);
	if (!targetEvent || !weapon || !actor) return weapon ? weapon.params[2] : 0;

	const evaded = checkEvasion(targetEvent);
	if (evaded) {
		CollisionManager.lastEvaded = true;
		return 0;
	}

	let criticalRate = 0;
	actor.traitObjects().forEach(obj => obj?.traits?.forEach(trait => {
		if (trait.code === 22 && trait.dataId === 2) criticalRate += trait.value;
	}));

	const isPlayerTarget = targetEvent === $gamePlayer;
	const defender = isPlayerTarget ? $gameParty.leader() : setupEventTarget(targetEvent);
	const defenseValue = isPlayerTarget ? defender.def : (defender.def || 0);

	let damage = actor.atk;

	weapon.traits?.forEach(trait => {
		if (trait.code === 21 && trait.dataId === 2) {
			damage *= trait.value;
		}
	});

	let actorMultiplier = 1;
	actor.traitObjects().forEach(obj => obj?.traits?.forEach(trait => {
		if ((trait.code === 33 && trait.dataId === weapon.wtypeId) ||
			(trait.code === 21 && trait.dataId === 2)) {
			actorMultiplier *= trait.value;
		}
	}));
	damage *= actorMultiplier;
	damage = Math.max(damage - Math.floor(defenseValue / 2), 1);

	const varianceAmp = Math.floor(Math.abs(damage) * 0.2);
	const varianceRoll = Math.floor(Math.random() * (varianceAmp * 2 + 1)) - varianceAmp;
	damage += varianceRoll;

	const isCritical = Math.random() < criticalRate;
	if (isCritical) {
		damage *= Number(Hparameters['critDmgMultiplier'] || 3.0);
	}

	const elementId = weapon.traits?.find(trait => trait.code === 31)?.dataId || 0;
	if (elementId > 0) {
		let resistance = 1;

		if (isPlayerTarget) {
			resistance = defender.elementRate(elementId);
		} else if (targetEvent.databaseActor?.elementRate) {
			resistance = targetEvent.databaseActor.elementRate(elementId);
		} else if (targetEvent.databaseEnemy?.traits) {
			const resistTrait = targetEvent.databaseEnemy.traits.find(t => t.code === 11 && t.dataId === elementId);
			resistance = resistTrait ? resistTrait.value : 1;
		}

		CollisionManager.lastImmunity = (resistance === 0);
		if (resistance !== 1) {
			damage *= resistance;
		}
	}

	if (weapon.traits) {
		weapon.traits.forEach(trait => {
			if (trait.code === 32) {
				const stateId = trait.dataId;
				const stateChance = trait.value;
				const { stateRate, hasStateResist } = checkStateResistance(targetEventId, stateId);

				if (hasStateResist) return;
				const finalStateChance = stateChance * stateRate;
				if (Math.random() < finalStateChance) {
					const state = $dataStates[stateId];
					if (state) {
						const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
						if (commonEventMatch) {
							const commonEventIdentifier = commonEventMatch[1].trim();
							let commonEventId = !isNaN(commonEventIdentifier) ?
								parseInt(commonEventIdentifier) :
								commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;

							if (commonEventId) {
								if (targetEventId === 0 || targetEventId === 'player') {
									const actor = $gameParty.leader();
									if (actor) {
										actor.addState(stateId);
										$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
										$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
										$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] || {};
										$gamePlayer.stateInterpreters = $gamePlayer.stateInterpreters || {};

										if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
											$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
											const interpreter = new Game_Interpreter();
											interpreter.setup($dataCommonEvents[commonEventId].list, 0);
											$gamePlayer.stateInterpreters[stateId] = interpreter;
										}
									}
								} else {
									const targetEvent = $gameMap.event(targetEventId);
									if (targetEvent) {
										$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
										$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
										$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] || {};
										targetEvent.stateInterpreters = targetEvent.stateInterpreters || {};

										if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
											$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
											const interpreter = new Game_Interpreter();
											interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
											targetEvent.stateInterpreters[stateId] = interpreter;
										}
									}
								}
							}
						}
					}
				}
			}
		});
	}

	const finalDamage = Math.round(Math.max(damage, 1));
	return finalDamage;
}

Game_Interpreter.prototype.calculateDamageAgainstEvent = function (targetEvent, damageSource, skillOrWeapon, sourceEventId = null) {
	if (!targetEvent) return 0;
	const actualSourceEventId = sourceEventId || this._eventId;
	const sourceEvent = $gameMap.event(actualSourceEventId);

	let a = null;

	// <attacker: x>
	if (sourceEvent && sourceEvent.event && sourceEvent.event()) {
		const eventNote = sourceEvent.event().note;
		const attackerMatch = eventNote.match(/<attacker:\s*(.+?)>/i);

		if (attackerMatch) {
			const attackerValue = attackerMatch[1].trim();
			let attackerData = null;

			if (attackerValue === 'player') {
				attackerData = $gameParty.leader();
			} else if (attackerValue.toLowerCase().startsWith('actor')) {
				const actorMatch = /actor\s*(\d+)/i.exec(attackerValue);
				if (actorMatch) {
					const actorId = Number(actorMatch[1]);
					attackerData = $gameActors.actor(actorId);
				}
			} else {
				const enemy = enemyNameCache[attackerValue.toLowerCase()];
				if (enemy) {
					attackerData = enemy;
				}
			}

			if (attackerData) {
				if (attackerData.params) {
					let criticalRate = 0;
					if (attackerData.traits) {
						attackerData.traits.forEach(trait => {
							if (trait.code === 22 && trait.dataId === 2) {
								criticalRate += trait.value;
							}
						});
					}
					a = {
						mhp: attackerData.params[0],
						mmp: attackerData.params[1],
						atk: attackerData.params[2],
						def: attackerData.params[3],
						mat: attackerData.params[4],
						mdf: attackerData.params[5],
						agi: attackerData.params[6],
						luk: attackerData.params[7],
						cri: criticalRate
					};
				} else {
					let criticalRate = 0;
					if (attackerData.traitObjects) {
						attackerData.traitObjects().forEach(object => {
							if (object && object.traits) {
								object.traits.forEach(trait => {
									if (trait.code === 22 && trait.dataId === 2) {
										criticalRate += trait.value;
									}
								});
							}
						});
					}
					a = {
						mhp: attackerData.mhp,
						mmp: attackerData.mmp,
						atk: attackerData.atk,
						def: attackerData.def,
						mat: attackerData.mat,
						mdf: attackerData.mdf,
						agi: attackerData.agi,
						luk: attackerData.luk,
						cri: criticalRate
					};
				}
			}
		}
	}

	if (!a && sourceEvent && sourceEvent._inheritedEnemyName && sourceEvent._inheritedEnemyData) {
		const enemy = sourceEvent._inheritedEnemyData;
		let criticalRate = 0;
		if (enemy.traits) {
			enemy.traits.forEach(trait => {
				if (trait.code === 22 && trait.dataId === 2) {
					criticalRate += trait.value;
				}
			});
		}
		a = {
			mhp: enemy.params[0],
			mmp: enemy.params[1],
			atk: enemy.params[2],
			def: enemy.params[3],
			mat: enemy.params[4],
			mdf: enemy.params[5],
			agi: enemy.params[6],
			luk: enemy.params[7],
			cri: criticalRate
		};
	}
	else if (!a && sourceEvent && sourceEvent._inheritedActorId && sourceEvent._inheritedActorData) {
		const actor = sourceEvent._inheritedActorData;
		let criticalRate = 0;

		if (actor.traitObjects) {
			actor.traitObjects().forEach(object => {
				if (object && object.traits) {
					object.traits.forEach(trait => {
						if (trait.code === 22 && trait.dataId === 2) {
							criticalRate += trait.value;
						}
					});
				}
			});
		}

		a = {
			mhp: actor.mhp,
			mmp: actor.mmp,
			atk: actor.atk,
			def: actor.def,
			mat: actor.mat,
			mdf: actor.mdf,
			agi: actor.agi,
			luk: actor.luk,
			cri: criticalRate
		};
	}
	else if (sourceEvent && sourceEvent.databaseActor) {
		const actor = sourceEvent.databaseActor;
		let criticalRate = 0;

		if (actor.traitObjects) {
			actor.traitObjects().forEach(object => {
				if (object && object.traits) {
					object.traits.forEach(trait => {
						if (trait.code === 22 && trait.dataId === 2) {
							criticalRate += trait.value;
						}
					});
				}
			});
		}

		a = {
			mhp: actor.mhp,
			mmp: actor.mmp,
			atk: actor.atk,
			def: actor.def,
			mat: actor.mat,
			mdf: actor.mdf,
			agi: actor.agi,
			luk: actor.luk,
			cri: criticalRate
		};
	}

	if (!a) {
		a = $gameParty.leader();
	}

	const isPlayerTarget = targetEvent === $gamePlayer;
	let b;

	if (isPlayerTarget) {
		b = $gameParty.leader();
	} else {
		b = setupEventTarget(targetEvent);
		if (targetEvent && targetEvent.event) {
			const eventData = targetEvent.event();
			if (eventData?.note) {
				const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
				if (hpMatch) {
					const hpString = hpMatch[1].trim();
					const actorMatch = /actor,\s*(\d+)/i.exec(hpString);
					if (actorMatch) {
						const actorId = parseInt(actorMatch[1]);
						const actor = $gameActors.actor(actorId);
						if (actor) {
							b = actor;
						}
					}
				}
			}
		}
	}

	if (damageSource !== 'skill') return 0;
	const skill = getSkillData(skillOrWeapon);
	if (!skill) return 0;
	const successRate = skill.successRate !== undefined ? skill.successRate : 100;
	if (successRate < 100 && Math.random() * 100 > successRate) {
		CollisionManager.lastEvaded = true;
		return 0;
	}
	const evaded = checkEvasion(targetEvent, skill);
	if (evaded) return 0;

	let formula = skill.damage.formula;
	formula = formula.replace(/v\[(\d+)\]/gi, (match, variableId) => {
		const id = parseInt(variableId);
		return $gameVariables.value(id);
	});

	let damage = Math.max(eval(formula), 0);
	damage = applyVariance(damage, skill);
	damage = applyCritical(damage, skill, a);
	damage = applyElementalEffects(damage, skill, b, targetEvent, isPlayerTarget);
	return Math.round(damage);
};

function applyDefenseReduction(rawDamage, sourceEventId, targetActor) {
	if (!sourceEventId || !targetActor) return rawDamage;

	const sourceEvent = $gameMap.event(sourceEventId);
	if (!sourceEvent || !sourceEvent.event().note) return rawDamage;

	const dmgMatch = sourceEvent.event().note.match(/<dmg:\s*(.+?)>/i);
	if (!dmgMatch) return rawDamage;

	const dmgValue = dmgMatch[1].trim();
	// <dmg: not a skill> -> -actor's DÈF
	const isSkill = $dataSkills.find(s => s && s.name === dmgValue);

	if (!isSkill) {
		const def = targetActor.def;
		return Math.max(rawDamage - Math.floor(def / 2), 1);
	}

	return rawDamage;
}

function setupEventTarget(targetEvent) {
	const b = targetEvent;
	let enemyData = null;
	let actorData = null;

	if (targetEvent.databaseEnemy) {
		enemyData = targetEvent.databaseEnemy;
	} else if (targetEvent.databaseActor) {
		actorData = targetEvent.databaseActor;
	}
	else if (targetEvent.event) {
		const eventData = targetEvent.event();
		if (eventData?.note) {
			const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
			if (hpMatch) {
				const hpString = hpMatch[1].trim();
				const minionMatch = /minion,\s*(\d+)/i.exec(hpString);
				if (minionMatch) {
					const actorId = parseInt(minionMatch[1]);
					actorData = $gameActors.actor(actorId);
				}
				else {
					const actorMatch = /actor,\s*(\d+)/i.exec(hpString);
					if (actorMatch) {
						const actorId = parseInt(actorMatch[1]);
						actorData = $gameActors.actor(actorId);
					} else {
						enemyData = enemyNameCache[hpString.toLowerCase()];
					}
				}
			}
		}
		if (!enemyData && !actorData && eventData?.name) {
			enemyData = $dataEnemies.find(enemy => enemy && enemy.name === eventData.name);
			if (enemyData) {
				targetEvent.setupEnemyData(eventData.name);
			}
		}
	}

	if (actorData) {
		b.mhp = actorData.mhp;
		b.mmp = actorData.mmp;
		b.atk = actorData.atk;
		b.def = actorData.def;
		b.mat = actorData.mat;
		b.mdf = actorData.mdf;
		b.agi = actorData.agi;
		b.luk = actorData.luk;
		b.databaseActor = actorData;
		b.traitObjects = () => actorData.traitObjects ? actorData.traitObjects() : [];

	} else if (enemyData) {
		b.mhp = enemyData.params[0];
		b.mmp = enemyData.params[1];
		b.atk = enemyData.params[2];
		b.def = enemyData.params[3];
		b.mat = enemyData.params[4];
		b.mdf = enemyData.params[5];
		b.agi = enemyData.params[6];
		b.luk = enemyData.params[7];

		b.databaseEnemy = enemyData;
	} else {
		b.mhp = b.mmp = 100;
		b.atk = b.def = b.mat = b.mdf = b.agi = b.luk = 0;
	}

	return b;
}

function getSkillData(skillOrWeapon) {
	if (typeof skillOrWeapon === 'string') {
		return $dataSkills.find(s => s && s.name === skillOrWeapon);
	} else if (typeof skillOrWeapon === 'number') {
		return $dataSkills[skillOrWeapon];
	}
	return skillOrWeapon;
}

function checkEvasion(targetEvent) {
	if (targetEvent === $gamePlayer || targetEvent === 'player') {
		const player = $gameParty.leader();
		let evasionRate = 0;
		player.traitObjects().forEach(object => {
			if (object && object.traits) {
				object.traits.forEach(trait => {
					if (trait.code === 22 && trait.dataId === 1) {
						evasionRate += trait.value;
					}
				});
			}
		});
		if (evasionRate > 0) {
			const evaded = Math.random() < evasionRate;
			CollisionManager.lastEvaded = evaded;
			return evaded;
		}
	}
	else if (targetEvent.databaseActor) {
		let evasionRate = 0;
		if (targetEvent.databaseActor.traitObjects) {
			targetEvent.databaseActor.traitObjects().forEach(object => {
				if (object && object.traits) {
					object.traits.forEach(trait => {
						if (trait.code === 22 && trait.dataId === 1) {
							evasionRate += trait.value;
						}
					});
				}
			});
		}
		if (evasionRate > 0) {
			const evaded = Math.random() < evasionRate;
			CollisionManager.lastEvaded = evaded;
			return evaded;
		}
	}
	else if (targetEvent.databaseEnemy?.traits) {
		let evasionRate = 0;
		for (const trait of targetEvent.databaseEnemy.traits) {
			if (trait.code === 22 && trait.dataId === 1) {
				evasionRate += trait.value;
			}
		}
		if (evasionRate > 0) {
			const evaded = Math.random() < evasionRate;
			CollisionManager.lastEvaded = evaded;
			return evaded;
		}
	}

	CollisionManager.lastEvaded = false;
	return false;
}

function applyVariance(damage, skill) {
	if (skill.damage.variance > 0) {
		const variance = skill.damage.variance / 100;
		const amp = Math.floor(Math.max(Math.abs(damage) * variance, 0));
		const varianceValue = Math.floor(Math.random() * (amp * 2 + 1)) - amp;
		return damage >= 0 ? damage + varianceValue : damage - varianceValue;
	}
	return damage;
}

function applyCritical(damage, skill, a) {
	if (skill.damage.critical) {
		const criticalRate = a.cri || 0.04;
		const isCritical = Math.random() < criticalRate;

		if (isCritical) {
			const critMultiplier = Number(Hparameters['critDmgMultiplier'] || 3.0);
			return damage * critMultiplier;
		}
	}
	return damage;
}

function applyElementalEffects(damage, skill, b, targetEvent, isPlayerTarget) {
	if (skill.damage.elementId <= 0) return damage;

	if (isPlayerTarget) {
		const rate = b.elementRate(skill.damage.elementId);
		CollisionManager.lastImmunity = (rate === 0);
		return damage * rate;
	} else {
		let elementResistanceValue = 1;
		let resistanceFound = false;

		if (targetEvent.databaseActor) {
			if (typeof targetEvent.databaseActor.elementRate === 'function') {
				elementResistanceValue = targetEvent.databaseActor.elementRate(skill.damage.elementId);
				resistanceFound = true;
			} else {
				const actor = targetEvent.databaseActor;
				if (actor.traitObjects) {
					actor.traitObjects().forEach(object => {
						if (object && object.traits) {
							object.traits.forEach(trait => {
								if (trait.code === 11 && trait.dataId === skill.damage.elementId) {
									elementResistanceValue = trait.value;
									resistanceFound = true;
								}
							});
						}
					});
				}
			}
		}
		else if (targetEvent.databaseEnemy?.traits) {
			const trait = targetEvent.databaseEnemy.traits.find(t =>
				t.code === 11 && t.dataId === skill.damage.elementId
			);
			if (trait) {
				elementResistanceValue = trait.value;
				resistanceFound = true;
			}
		}

		if (!resistanceFound && targetEvent.elementalResistances?.length > 0) {
			const resistance = targetEvent.elementalResistances.find(r =>
				r.elementId === skill.damage.elementId
			);
			if (resistance) {
				elementResistanceValue = resistance.value;
				resistanceFound = true;
			}
		}

		if (resistanceFound) {
			CollisionManager.lastImmunity = (elementResistanceValue === 0);
			return elementResistanceValue === 0 ? 0 : damage * elementResistanceValue;
		}

		CollisionManager.lastImmunity = false;
		return damage;
	}
}

Game_Event.prototype.getDamageFromNoteTag = function () {
	const note = this.event().note;
	const match = /<dmg:\s*(.+?)>/i.exec(note);
	if (!match) return 0;

	const damageValue = match[1].trim();
	let damage = 0;

	const skill = $dataSkills.find(s => s && s.name === damageValue);
	if (skill) {
		return 0;
	}

	//<dmg: enemy name>
	const enemy = enemyNameCache[damageValue.toLowerCase()];
	if (enemy) {
		if (!this.databaseEnemy) { this.setupEnemyData(damageValue); }
		damage = enemy.params[2];
		enemy.traits.forEach(trait => {
			if (trait.code === 21 && trait.dataId === 2) {
				damage *= trait.value;
			}
		});
		return damage;
	}

	const variableMatch = /v\[(\d+)\]/i.exec(damageValue);
	if (variableMatch) {
		damage = $gameVariables.value(parseInt(variableMatch[1]));
	} else {
		const rangeMatch = /(\d+)\s*-\s*(\d+)/.exec(damageValue);
		if (rangeMatch) {
			const min = parseInt(rangeMatch[1]);
			const max = parseInt(rangeMatch[2]);
			damage = Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			damage = parseInt(damageValue) || 0;
		}
	}

	return damage;
};

// =========================== Hitbox cache and stuff  ==================================
function _0x5a9064(_0x4bd560,_0x10fde9,_0x5775fd,_0x1fca9a){return _0x31b7(_0x4bd560- -0x188,_0x10fde9);}function _0x2c4c05(_0x9b2cfc,_0x18a7dc,_0x171e46,_0x45b6fe){return _0x31b7(_0x9b2cfc- -0x12a,_0x171e46);}(function(_0x115ac9,_0x52e76d){function _0x23ea9b(_0x171bd3,_0x10a3ed,_0x5d6320,_0x3eb54f){return _0x31b7(_0x3eb54f- -0x178,_0x5d6320);}const _0x127798=_0x115ac9();function _0x403471(_0xf83899,_0x2020d4,_0x5e2483,_0x274871){return _0x31b7(_0x5e2483- -0x12a,_0x2020d4);}while(!![]){try{const _0x6ad01e=-parseInt(_0x23ea9b(0x51,0xc1,0x9a,0x9f))/(-0x1712+0x577+0x119c)+-parseInt(_0x23ea9b(0xbb,0x31,0x74,0x83))/(0x6ea+-0x26c7+0x1fdf)*(-parseInt(_0x23ea9b(0x9a,0x7d,0x25,0x64))/(0x7f*-0x46+-0x1*-0x2417+-0x15a))+-parseInt(_0x23ea9b(0x1f,-0x4f,0xc,-0x1e))/(0xb7d+0x1d*-0x145+0x1958)+parseInt(_0x23ea9b(0x11e,0x97,0xb1,0xb4))/(-0x1*0x21e8+0x3*-0xa02+0x3ff3)*(parseInt(_0x23ea9b(-0x87,-0x8d,0x4,-0x28))/(-0xb55+-0x1b25+0x2680))+-parseInt(_0x403471(0x56,0x68,0x2f,0x78))/(0x1ed*0xd+0x83e+-0x4c0*0x7)+-parseInt(_0x403471(0x15,-0x5,0x53,-0x9))/(-0x3*0x1bf+0x1*0x1935+-0x13f0)+parseInt(_0x23ea9b(-0x31,0x5,0x84,0x16))/(-0xe*0x221+0x2230*-0x1+-0x1bb*-0x25);if(_0x6ad01e===_0x52e76d)break;else _0x127798['push'](_0x127798['shift']());}catch(_0x32c84f){_0x127798['push'](_0x127798['shift']());}}}(_0x12eb,0x3d586+0x8e*0x1+0x1*0xcc8b));const _0x42e054=(function(){let _0x578729=!![];return function(_0x4fca52,_0xc357d8){const _0x274111=_0x578729?function(){function _0x4fe242(_0x240c4a,_0xa89721,_0x4386c4,_0x51cdd5){return _0x31b7(_0x4386c4-0x1ae,_0xa89721);}if(_0xc357d8){const _0x1c1248=_0xc357d8[_0x4fe242(0x3d2,0x379,0x370,0x3de)](_0x4fca52,arguments);return _0xc357d8=null,_0x1c1248;}}:function(){};return _0x578729=![],_0x274111;};}()),_0x1f351c=_0x42e054(this,function(){function _0x53fd3b(_0x60cc00,_0x4c59d7,_0x5cbcf9,_0x7250a1){return _0x31b7(_0x7250a1- -0x306,_0x4c59d7);}const _0x508158={};_0x508158[_0x291847(0x56e,0x5b7,0x539,0x500)]=_0x291847(0x507,0x514,0x52b,0x54c)+'+$';function _0x291847(_0x26f179,_0x186a7a,_0x301660,_0x4224c9){return _0x31b7(_0x26f179-0x34d,_0x4224c9);}const _0x230c0d=_0x508158;return _0x1f351c[_0x291847(0x55b,0x50d,0x588,0x53b)]()[_0x53fd3b(-0x178,-0x11a,-0x184,-0x125)](_0x230c0d['xYrPm'])[_0x291847(0x55b,0x583,0x5a6,0x51a)]()['constructo'+'r'](_0x1f351c)[_0x53fd3b(-0x157,-0x17a,-0x10f,-0x125)](_0x230c0d['xYrPm']);});function _0x31b7(_0x47cdcf,_0x5dd513){_0x47cdcf=_0x47cdcf-(-0x25d6+0x5a0+-0xf5*-0x23);const _0x4d581f=_0x12eb();let _0x178b1b=_0x4d581f[_0x47cdcf];if(_0x31b7['zqFzjN']===undefined){var _0x46df95=function(_0x293219){const _0x1c585a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x386510='',_0x5ac0e6='',_0x1695c9=_0x386510+_0x46df95;for(let _0x52b086=0x1aa+-0xa*-0x349+-0x2284,_0x5d38b3,_0x2f4b96,_0x1813db=-0x237e+-0x2502+0x4880;_0x2f4b96=_0x293219['charAt'](_0x1813db++);~_0x2f4b96&&(_0x5d38b3=_0x52b086%(0x209*-0x5+-0x1194+0x1bc5)?_0x5d38b3*(0x1*-0xe6e+-0x5*-0x4cf+0x95d*-0x1)+_0x2f4b96:_0x2f4b96,_0x52b086++%(0x2435+-0x137d+-0x10b4))?_0x386510+=_0x1695c9['charCodeAt'](_0x1813db+(-0x926*-0x1+-0x823*-0x3+-0x1*0x2185))-(-0x13*-0xae+-0x2*-0x2f+-0xd3e)!==0x7b8+-0x1516*-0x1+-0x1cce?String['fromCharCode'](0x2b0*0x5+-0x22*0x7e+0x44b&_0x5d38b3>>(-(0x1c08+0x5ac+-0x21b2)*_0x52b086&0xb61+-0xba5+-0x4a*-0x1)):_0x52b086:0x1*0x19b7+0x1*0xeef+-0x28a6){_0x2f4b96=_0x1c585a['indexOf'](_0x2f4b96);}for(let _0x15f6aa=-0x360+0x823+0x1*-0x4c3,_0x42ddff=_0x386510['length'];_0x15f6aa<_0x42ddff;_0x15f6aa++){_0x5ac0e6+='%'+('00'+_0x386510['charCodeAt'](_0x15f6aa)['toString'](0x20b8+-0x2337+-0x28f*-0x1))['slice'](-(0x9cf+0x1415+-0x2*0xef1));}return decodeURIComponent(_0x5ac0e6);};_0x31b7['UZosEt']=_0x46df95,_0x31b7['dXLzPZ']={},_0x31b7['zqFzjN']=!![];}const _0x23ac60=_0x4d581f[0x13b1*0x1+0x1*0x1073+-0x2424],_0x21b4cf=_0x47cdcf+_0x23ac60,_0x78344=_0x31b7['dXLzPZ'][_0x21b4cf];if(!_0x78344){const _0x1f16f7=function(_0xcfa283){this['FTNrRO']=_0xcfa283,this['wZhIEh']=[0x11b*-0xe+0x1*-0x1e41+-0x2*-0x16de,0xd01*-0x1+-0x4*0x170+0x12c1,-0x1408*0x1+0x73b*-0x2+0x227e],this['AYOquJ']=function(){return'newState';},this['VLtUtT']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['jhCvDa']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1f16f7['prototype']['FxsSva']=function(){const _0x11806a=new RegExp(this['VLtUtT']+this['jhCvDa']),_0x170f1d=_0x11806a['test'](this['AYOquJ']['toString']())?--this['wZhIEh'][-0x2283+0x71d+-0x131*-0x17]:--this['wZhIEh'][-0x5*0x7bc+-0x1bbd+0x4269];return this['dgdLjL'](_0x170f1d);},_0x1f16f7['prototype']['dgdLjL']=function(_0x57862a){if(!Boolean(~_0x57862a))return _0x57862a;return this['dfgMhM'](this['FTNrRO']);},_0x1f16f7['prototype']['dfgMhM']=function(_0x4c1702){for(let _0x5315c9=-0x1*0x1712+-0xc14*0x2+0x2f3a,_0x33fce4=this['wZhIEh']['length'];_0x5315c9<_0x33fce4;_0x5315c9++){this['wZhIEh']['push'](Math['round'](Math['random']())),_0x33fce4=this['wZhIEh']['length'];}return _0x4c1702(this['wZhIEh'][0x1d0b*-0x1+0x221a+-0x1*0x50f]);},new _0x1f16f7(_0x31b7)['FxsSva'](),_0x178b1b=_0x31b7['UZosEt'](_0x178b1b),_0x31b7['dXLzPZ'][_0x21b4cf]=_0x178b1b;}else _0x178b1b=_0x78344;return _0x178b1b;}_0x1f351c(),Game_Map['prototype'][_0x2c4c05(0x28,0x72,-0x9,0x9b)+_0x5a9064(0x69,0xda,0xbc,0x46)]=function(_0xe27d3c,_0x288a18,_0x31f66c,_0x501db6,_0x547382,_0x3fcbfc,_0xcce649=0xc68*-0x1+0x1bfe*0x1+-0x39*0x46,_0x576238=-0x10ca+-0x1*0x24cd+-0x1*-0x3597){const _0x1132ea={'gMwGQ':function(_0x7ef0f1,_0x4c36ed){return _0x7ef0f1 instanceof _0x4c36ed;},'leNcC':function(_0x4de118,_0x5747a5){return _0x4de118===_0x5747a5;},'iwkbQ':_0x47dd8e(-0x174,-0x172,-0x173,-0x1a7),'BfzyE':function(_0x3c6a02,_0x2dc6f6){return _0x3c6a02!==_0x2dc6f6;},'cpyuh':function(_0x3918cb,_0x5684d1){return _0x3918cb/_0x5684d1;},'geEUn':function(_0x2ccb00,_0x1abb1e){return _0x2ccb00+_0x1abb1e;},'RqatE':function(_0x3feeaa,_0x19f105){return _0x3feeaa-_0x19f105;},'QHjoZ':function(_0x139cb4,_0x4364b0){return _0x139cb4*_0x4364b0;},'LbNDB':function(_0x37cec0,_0x2a0616){return _0x37cec0-_0x2a0616;},'yIcfb':function(_0x43413a,_0x1b29cf){return _0x43413a*_0x1b29cf;},'DjtPJ':function(_0x262780,_0x2a0534){return _0x262780-_0x2a0534;},'UuMpQ':function(_0x4a090e,_0x155530){return _0x4a090e+_0x155530;},'mETBI':function(_0x22ff0a,_0x3f6f52){return _0x22ff0a*_0x3f6f52;},'Jcoge':function(_0x5abc6c,_0x5421d9){return _0x5abc6c+_0x5421d9;},'dcfqw':function(_0x23da45,_0x510823){return _0x23da45+_0x510823;},'GtKrU':function(_0x1821e2,_0x182fe9){return _0x1821e2*_0x182fe9;},'ZIvFS':function(_0x32ffc8,_0x6a62a5){return _0x32ffc8+_0x6a62a5;},'aebFO':function(_0x595e86,_0x50def0){return _0x595e86*_0x50def0;},'YLQLa':function(_0x2f08f2,_0x5cf649){return _0x2f08f2-_0x5cf649;},'idCqq':function(_0x45d4c4,_0x1139ab){return _0x45d4c4*_0x1139ab;},'IBwzN':function(_0x406d97,_0x271a03){return _0x406d97-_0x271a03;},'akQgD':function(_0x2a652b,_0x551290){return _0x2a652b*_0x551290;},'hTzzn':function(_0x2cce05,_0x44bbd5){return _0x2cce05-_0x44bbd5;},'LBudN':function(_0x14e631,_0x54a9bf){return _0x14e631*_0x54a9bf;},'ztVUX':function(_0x247ea0,_0x4bc9c0){return _0x247ea0/_0x4bc9c0;},'wyXuH':function(_0x5b58aa,_0x2bfae9){return _0x5b58aa/_0x2bfae9;},'esQjP':function(_0x285204,_0x1a948f){return _0x285204/_0x1a948f;},'WmBzP':function(_0x5ea16c,_0x2455c7){return _0x5ea16c*_0x2455c7;},'ZHgme':function(_0x18ba89,_0x1727b5){return _0x18ba89<_0x1727b5;},'hxUGi':function(_0x4620ba,_0x2e1557){return _0x4620ba+_0x2e1557;},'bQCMS':function(_0x1cb9af,_0x119e7a){return _0x1cb9af!==_0x119e7a;},'RoXaK':_0x4d5e4c(0x3f4,0x449,0x453,0x401),'TSlDe':function(_0x78c99b,_0x4ae366){return _0x78c99b+_0x4ae366;},'dQegi':function(_0x21a310,_0x3901e7){return _0x21a310+_0x3901e7;},'Rutkv':function(_0x159026,_0x4a2f41){return _0x159026+_0x4a2f41;},'jCinZ':function(_0x5b61ce,_0x5f950b){return _0x5b61ce/_0x5f950b;},'XGNTs':function(_0x182715,_0x2e23f4){return _0x182715+_0x2e23f4;},'edjBe':function(_0x12834a,_0x12f108){return _0x12834a-_0x12f108;},'prOFR':function(_0x2c0f98,_0x26c80e){return _0x2c0f98>_0x26c80e;},'rloCl':function(_0x5cdbcf,_0x10f55d,_0x1f058c,_0x524f87,_0x145804){return _0x5cdbcf(_0x10f55d,_0x1f058c,_0x524f87,_0x145804);},'bVnVy':function(_0x93d0e2,_0x439cb3,_0x1a8fe6,_0x416587,_0x1de3ae){return _0x93d0e2(_0x439cb3,_0x1a8fe6,_0x416587,_0x1de3ae);},'TfWgJ':function(_0x6784bb,_0x2cdd68){return _0x6784bb(_0x2cdd68);},'eZhxE':function(_0x24e8a0,_0x91d47,_0x8470b){return _0x24e8a0(_0x91d47,_0x8470b);},'PHGwe':function(_0x2f97e6,_0x462120){return _0x2f97e6<_0x462120;},'EZFqH':function(_0x4e983,_0x4b8c94){return _0x4e983<_0x4b8c94;}};if(_0xcce649===0x1534+-0x57e+0x2*-0x7db&&_0x1132ea[_0x4d5e4c(0x436,0x462,0x442,0x40e)](_0x576238,-0xf*0x22d+-0x1466+0x3509)){if(_0x1132ea[_0x47dd8e(-0x17e,-0x125,-0x180,-0x14d)](_0x1132ea[_0x47dd8e(-0x121,-0x18d,-0x1aa,-0x162)],_0x1132ea[_0x47dd8e(-0x1ec,-0x18d,-0x13c,-0x195)])){_0x3a3e70[_0x50bb56]=_0x9bff6f;if(_0x1132ea[_0x47dd8e(-0x1ac,-0x154,-0xe0,-0x13c)](_0xa736c2,_0x255f10)){const _0x10b859=_0x4d09d4[_0x4d5e4c(0x450,0x41f,0x4e8,0x491)+_0x47dd8e(-0x121,-0x11d,-0xc7,-0xc4)]();_0x58898e[_0x47dd8e(-0x138,-0x103,-0x141,-0xb1)+'on'](_0x1132ea[_0x47dd8e(-0x12a,-0x19e,-0x148,-0x14b)](_0x4c2cb1,_0x1132ea[_0x47dd8e(-0x1bf,-0x157,-0x142,-0x141)])?-0x83*-0x1d+-0x6b9*0x5+0x12c6:_0x53aa62,_0x10b859);}return!![];}else{const _0x108831=_0x1132ea['TSlDe'](_0xe27d3c-$gameMap[_0x47dd8e(-0x185,-0x1c3,-0x21e,-0x1dc)]()/(-0xc4a+-0xf0c+0x1b58),_0x31f66c[_0x4d5e4c(0x4ad,0x488,0x453,0x440)]),_0x22d263=_0x108831+_0x1132ea['akQgD'](_0x31f66c['width'],$gameMap['tileWidth']()),_0x5c0762=_0x1132ea[_0x47dd8e(-0xdf,-0x13a,-0x104,-0x16d)](_0x288a18-$gameMap[_0x4d5e4c(0x439,0x3c7,0x3ec,0x416)](),_0x31f66c['offsetY']),_0x219f2d=_0x1132ea[_0x4d5e4c(0x410,0x36e,0x416,0x3e2)](_0x5c0762,_0x1132ea[_0x4d5e4c(0x438,0x464,0x4a5,0x49f)](_0x31f66c['height'],$gameMap[_0x47dd8e(-0x1c4,-0x196,-0x1b9,-0x15f)]())),_0x33d34f=_0x1132ea['Rutkv'](_0x501db6-_0x1132ea[_0x4d5e4c(0x479,0x45a,0x421,0x40d)]($gameMap['tileWidth'](),0x1e65+0x25f5+-0x4458),_0x3fcbfc[_0x4d5e4c(0x47a,0x4a3,0x3ee,0x440)]),_0x21dd86=_0x1132ea[_0x47dd8e(-0x170,-0x199,-0x1a3,-0x150)](_0x33d34f,_0x1132ea[_0x4d5e4c(0x42c,0x3e3,0x3c7,0x424)](_0x3fcbfc[_0x47dd8e(-0x15e,-0x171,-0x157,-0x19c)],$gameMap[_0x4d5e4c(0x3eb,0x3b9,0x44b,0x3e9)]())),_0x546327=_0x1132ea['XGNTs'](_0x1132ea[_0x47dd8e(-0x159,-0x14e,-0x12b,-0x1a0)](_0x547382,$gameMap[_0x47dd8e(-0x1ba,-0x196,-0x1d5,-0x1ed)]()),_0x3fcbfc[_0x47dd8e(-0x197,-0x1aa,-0x1ba,-0x218)]),_0x424076=_0x1132ea['UuMpQ'](_0x546327,_0x1132ea[_0x47dd8e(-0x1e1,-0x1a5,-0x1fa,-0x18f)](_0x3fcbfc['height'],$gameMap[_0x47dd8e(-0x15b,-0x196,-0x1fa,-0x199)]()));return _0x1132ea['ZHgme'](_0x108831,_0x21dd86)&&_0x22d263>_0x33d34f&&_0x5c0762<_0x424076&&_0x1132ea[_0x47dd8e(-0x16f,-0x153,-0x167,-0x117)](_0x219f2d,_0x546327);}}const _0x44e529=(_0x204342,_0x43c653,_0x2d59a9,_0xe80143)=>{function _0x2869e9(_0xf80894,_0x5ff1f5,_0x3eae3e,_0x575e39){return _0x47dd8e(_0xf80894,_0x3eae3e-0x25b,_0x3eae3e-0x60,_0x575e39-0x1e6);}let _0x131ea8=_0x43c653,_0x49f52b=_0x43c653;_0x1132ea[_0x4001c0(-0x2a,-0x8,-0x7b,-0x19)](_0xe80143,-0x1cee+0x662+0x168c)&&(_0x131ea8=_0x43c653+_0x1132ea[_0x4001c0(-0xd6,-0xb7,-0xb0,-0x62)]($gameMap[_0x4001c0(-0xff,-0x37,-0xa6,-0x34)](),0x973+-0x1b6+-0x1*0x7bb),_0x49f52b=_0x131ea8);function _0x4001c0(_0x40d6f4,_0x1870ba,_0x3fdeb1,_0x24ec0f){return _0x4d5e4c(_0x40d6f4-0x1f0,_0x1870ba,_0x3fdeb1-0x16d,_0x3fdeb1- -0x4bc);}const _0x15c309={'x':_0x1132ea[_0x2869e9(0x110,0x145,0x10e,0x113)](_0x204342-$gameMap['tileWidth']()/(0x1598+-0x22cf+0xd39),_0x2d59a9[_0x2869e9(0x136,0x14e,0xef,0xc3)]),'y':_0x1132ea[_0x2869e9(0xb1,0xc4,0x10e,0x149)](_0x1132ea[_0x2869e9(0x38,0x8b,0x9e,0xa9)](_0x131ea8,$gameMap['tileHeight']()),_0x2d59a9[_0x2869e9(0xea,0x75,0xb1,0xd8)]),'width':_0x1132ea['QHjoZ'](_0x2d59a9['width'],$gameMap[_0x2869e9(0x6c,0x87,0x98,0x35)]()),'height':_0x2d59a9[_0x2869e9(0xce,0xe6,0x112,0xb2)]*$gameMap[_0x4001c0(-0x93,-0x34,-0xa6,-0x38)]()},_0x2a44f2=_0x204342-_0x15c309['x'],_0x44855c=_0x1132ea[_0x2869e9(0xe2,0x103,0xff,0x12b)](_0x49f52b,_0x1132ea[_0x2869e9(0xe6,0xad,0xbb,0xd6)]($gameMap[_0x4001c0(-0x10a,-0x10a,-0xa6,-0x8b)](),-0x2309+-0x142c+0x3737))-_0x15c309['y'],_0x538787=_0x1132ea[_0x4001c0(-0x82,-0x72,-0xb0,-0x9e)](_0x1132ea[_0x4001c0(-0x72,-0x4a,-0x1d,0x2)](_0xe80143,Math['PI']),0x1272+-0x17f7+0x639),_0x75d93a=Math[_0x4001c0(-0x81,-0x22,-0x68,-0x8e)](_0x538787),_0x1bb804=Math[_0x4001c0(-0xa4,-0xed,-0xa4,-0x33)](_0x538787);return[{'x':_0x1132ea['yIcfb'](-_0x2a44f2,_0x75d93a)+_0x1132ea[_0x2869e9(0x13d,0x111,0xf2,0xcb)](_0x44855c,_0x1bb804)+_0x204342,'y':_0x1132ea[_0x4001c0(-0xcd,-0xa9,-0x5d,-0xb1)](_0x1132ea['DjtPJ'](-_0x2a44f2*_0x1bb804,_0x1132ea[_0x4001c0(-0x65,-0x66,-0x1d,-0x4d)](_0x44855c,_0x75d93a)),_0x49f52b)},{'x':_0x1132ea[_0x2869e9(0xde,0xc3,0x106,0x115)](_0x1132ea['geEUn']((-_0x2a44f2+_0x15c309[_0x4001c0(-0x2e,-0x5e,-0x81,-0x70)])*_0x75d93a,_0x1132ea[_0x4001c0(-0x88,-0x64,-0xb5,-0x87)](_0x44855c,_0x1bb804)),_0x204342),'y':_0x1132ea[_0x2869e9(0x15e,0x13c,0x10e,0xe8)](_0x1132ea[_0x2869e9(0xa0,0x11a,0xff,0xbe)](_0x1132ea['QHjoZ'](_0x1132ea[_0x2869e9(0xc0,0x139,0xe5,0x106)](-_0x2a44f2,_0x15c309[_0x2869e9(0x106,0xb6,0xea,0x13a)]),_0x1bb804),_0x1132ea['mETBI'](_0x44855c,_0x75d93a)),_0x49f52b)},{'x':_0x1132ea['QHjoZ'](_0x1132ea[_0x2869e9(0x2e,0x6b,0x9b,0x8b)](-_0x2a44f2,_0x15c309[_0x2869e9(0x91,0x13a,0xea,0x12e)]),_0x75d93a)+_0x1132ea[_0x2869e9(0x1c5,0x1de,0x16b,0xff)](_0x1132ea['DjtPJ'](_0x44855c,_0x15c309[_0x4001c0(0xe,-0x80,-0x59,-0x3)]),_0x1bb804)+_0x204342,'y':_0x1132ea[_0x4001c0(-0x69,-0xe7,-0xda,-0xef)](_0x1132ea[_0x4001c0(-0xb9,-0x65,-0xcd,-0xc5)](_0x1132ea[_0x4001c0(-0xfc,-0xad,-0xda,-0xd0)](-_0x2a44f2,_0x15c309[_0x2869e9(0x137,0x152,0xea,0xe2)])*_0x1bb804,_0x1132ea[_0x4001c0(-0x48,-0x51,0x7,-0x62)](_0x1132ea[_0x2869e9(0x11a,0x133,0xcb,0xa9)](_0x44855c,_0x15c309['height']),_0x75d93a)),_0x49f52b)},{'x':_0x1132ea[_0x2869e9(0xec,0x87,0xe5,0x113)](_0x1132ea['dcfqw'](_0x1132ea[_0x4001c0(0x29,-0x63,-0x46,-0xa1)](-_0x2a44f2,_0x75d93a),_0x1132ea[_0x4001c0(-0x10e,-0xfa,-0xc5,-0xc8)](_0x44855c,_0x15c309[_0x4001c0(-0x29,-0x12,-0x59,-0x61)])*_0x1bb804),_0x204342),'y':_0x1132ea['dcfqw'](_0x1132ea[_0x2869e9(0x13c,0x10e,0xd8,0x70)](-_0x2a44f2*_0x1bb804,_0x1132ea[_0x4001c0(0x9,-0xc,-0xc,-0x2e)](_0x1132ea[_0x2869e9(0x111,0x2a,0x9e,0x5b)](_0x44855c,_0x15c309[_0x4001c0(-0x75,0xc,-0x59,-0x55)]),_0x75d93a)),_0x49f52b)}];},_0x1aa195=_0x4f6e71=>{const _0x4196a9={'x':_0x1132ea['hTzzn'](_0x4f6e71[-0x628+-0x3*-0x15c+-0x1*-0x215]['x'],_0x4f6e71[-0x16be+0x10af+-0x1*-0x60f]['x']),'y':_0x4f6e71[0xa4*0xd+-0x15d*0x4+-0x2df]['y']-_0x4f6e71[0x7*0x7+0x66*-0x2c+0x1*0x1157]['y']};function _0xd42ba9(_0x53f5c9,_0x4b4df9,_0x6420a6,_0x3dcf0a){return _0x4d5e4c(_0x53f5c9-0x17c,_0x53f5c9,_0x6420a6-0xc1,_0x3dcf0a- -0x5e9);}const _0x4fce41={'x':_0x4f6e71[0xbbf*0x3+0x1f03+-0x223*0x1f]['x']-_0x4f6e71[0x2702*0x1+-0xc3e*0x2+0x1*-0xe86]['x'],'y':_0x1132ea[_0xd42ba9(-0x1bd,-0x1f4,-0x21a,-0x1cd)](_0x4f6e71[0x1*0x1079+-0x4e9*-0x7+-0x8f*0x5b]['y'],_0x4f6e71[-0x742+-0xa3*0x35+-0xdab*-0x3]['y'])},_0x4452ab=Math[_0xd42ba9(-0x227,-0x1c3,-0x20c,-0x1f9)](_0x1132ea[_0xd42ba9(-0x1ab,-0x12a,-0x1be,-0x173)](_0x4196a9['x'],_0x4196a9['x'])+_0x1132ea['akQgD'](_0x4196a9['y'],_0x4196a9['y'])),_0x49b8ae=Math[_0xd42ba9(-0x1f1,-0x199,-0x234,-0x1f9)](_0x1132ea['geEUn'](_0x4fce41['x']*_0x4fce41['x'],_0x1132ea['LBudN'](_0x4fce41['y'],_0x4fce41['y'])));function _0x263058(_0x3823bf,_0x46f5d2,_0x1c6671,_0x19a299){return _0x47dd8e(_0x46f5d2,_0x19a299-0x5ec,_0x1c6671-0x25,_0x19a299-0xaf);}return[{'x':_0x1132ea['ztVUX'](_0x4196a9['x'],_0x4452ab),'y':_0x1132ea[_0xd42ba9(-0x188,-0x1dc,-0x1ed,-0x1b0)](_0x4196a9['y'],_0x4452ab)},{'x':_0x4fce41['x']/_0x49b8ae,'y':_0x1132ea['esQjP'](_0x4fce41['y'],_0x49b8ae)}];},_0x4acb99=(_0x13397e,_0x326700)=>{let _0x1a46e6=_0x1132ea['dcfqw'](_0x1132ea[_0x48262d(0x445,0x450,0x441,0x3f3)](_0x13397e[-0x169*0x7+0xa*-0x2a5+0x2451]['x'],_0x326700['x']),_0x1132ea['mETBI'](_0x13397e[0x20ba+0x1*0x192d+-0x39e7]['y'],_0x326700['y']));function _0x48262d(_0x5ed809,_0x570f8a,_0x574ead,_0x551ceb){return _0x4d5e4c(_0x5ed809-0x196,_0x570f8a,_0x574ead-0x1e3,_0x5ed809-0x3b);}let _0x489ab7=_0x1a46e6;for(let _0x3f7584=0x3*-0x5cf+-0x36e+-0x59*-0x3c;_0x1132ea[_0x48262d(0x4e6,0x520,0x4af,0x481)](_0x3f7584,_0x13397e[_0x43fe61(0x267,0x2a4,0x2c7,0x25d)]);_0x3f7584++){const _0x3c5cc4=_0x1132ea[_0x43fe61(0x202,0x190,0x1b8,0x1b0)](_0x1132ea[_0x43fe61(0x228,0x21e,0x1b1,0x1bf)](_0x13397e[_0x3f7584]['x'],_0x326700['x']),_0x13397e[_0x3f7584]['y']*_0x326700['y']);_0x1a46e6=Math['min'](_0x1a46e6,_0x3c5cc4),_0x489ab7=Math[_0x48262d(0x4a4,0x4fa,0x4e5,0x4a6)](_0x489ab7,_0x3c5cc4);}const _0x47bd94={};_0x47bd94[_0x48262d(0x47a,0x4ec,0x410,0x492)]=_0x1a46e6,_0x47bd94[_0x43fe61(0x1d6,0x1d0,0x234,0x21e)]=_0x489ab7;function _0x43fe61(_0x2d8946,_0x20ace5,_0x2a3a69,_0x5b7247){return _0x4d5e4c(_0x2d8946-0x194,_0x2a3a69,_0x2a3a69-0xa6,_0x5b7247- -0x24b);}return _0x47bd94;};function _0x4d5e4c(_0x170c14,_0x22fb47,_0x269476,_0x59ed13){return _0x5a9064(_0x59ed13-0x420,_0x22fb47,_0x269476-0x39,_0x59ed13-0xf9);}const _0x3a6fda=_0x1132ea[_0x47dd8e(-0xe7,-0xf1,-0xdc,-0x8c)](_0x44e529,_0xe27d3c,_0x288a18,_0x31f66c,_0xcce649),_0x1b27cd=_0x1132ea[_0x47dd8e(-0x17d,-0x1ac,-0x209,-0x18b)](_0x44e529,_0x501db6,_0x547382,_0x3fcbfc,_0x576238);function _0x47dd8e(_0x1f803c,_0x203237,_0x21799c,_0x4a89a8){return _0x5a9064(_0x203237- -0x18c,_0x1f803c,_0x21799c-0x23,_0x4a89a8-0xfb);}const _0x8e10e6=[..._0x1132ea['TfWgJ'](_0x1aa195,_0x3a6fda),..._0x1132ea[_0x47dd8e(-0x1bd,-0x1b0,-0x199,-0x214)](_0x1aa195,_0x1b27cd)];for(const _0x3e6215 of _0x8e10e6){const _0x34a0ec=_0x1132ea['eZhxE'](_0x4acb99,_0x3a6fda,_0x3e6215),_0x6d99c=_0x4acb99(_0x1b27cd,_0x3e6215);if(_0x1132ea['PHGwe'](_0x34a0ec[_0x4d5e4c(0x421,0x423,0x474,0x469)],_0x6d99c['min'])||_0x1132ea['EZFqH'](_0x6d99c[_0x47dd8e(-0xf3,-0x143,-0xea,-0x194)],_0x34a0ec[_0x4d5e4c(0x43d,0x41c,0x47c,0x43f)]))return![];}return!![];},Game_Map[_0x5a9064(0x29,0x6c,0x9a,0x8e)]['initTagInd'+'ex']=function(){function _0x123fa6(_0x4a9dd6,_0xc85572,_0x314dcb,_0x5654b5){return _0x5a9064(_0x314dcb-0x6,_0xc85572,_0x314dcb-0x1cc,_0x5654b5-0x7a);}this[_0x123fa6(0xce,0x8c,0xa6,0xf0)+'s']=new Map();},Game_Map[_0x5a9064(0x29,0x47,0x2f,-0x49)]['buildTagIn'+'dex']=function(){this['initTagInd'+'ex']();function _0x19c142(_0x3b9413,_0x2b3fa7,_0x1cf1aa,_0xf7c042){return _0x2c4c05(_0xf7c042-0xd1,_0x2b3fa7-0x104,_0x2b3fa7,_0xf7c042-0x126);}this[_0x19c142(0xca,0xee,0x14e,0xf3)]()['forEach'](_0x4c42f2=>{function _0x3d8feb(_0x762fbb,_0x46da14,_0x85db83,_0xe2dae3){return _0x19c142(_0x762fbb-0xe5,_0xe2dae3,_0x85db83-0xcf,_0x762fbb-0x102);}function _0x361c1c(_0x381ffa,_0x821915,_0x210ae0,_0x5b6b87){return _0x19c142(_0x381ffa-0x1cf,_0x821915,_0x210ae0-0x7a,_0x5b6b87- -0x8);}_0x4c42f2&&_0x4c42f2[_0x3d8feb(0x1f2,0x21f,0x234,0x243)]&&_0x4c42f2[_0x3d8feb(0x1f2,0x24d,0x1ff,0x1a8)]()&&this[_0x361c1c(0x111,0x1b4,0x169,0x182)+_0x361c1c(0x1e7,0x196,0x170,0x189)](_0x4c42f2);});},Game_Map[_0x5a9064(0x29,-0x3f,0x91,0x1c)][_0x5a9064(0x6b,0x5d,0xd,0x16)+'dex']=function(){function _0x4fe615(_0x277b19,_0x35b21b,_0x206f47,_0x16aa0a){return _0x5a9064(_0x16aa0a-0x81,_0x206f47,_0x206f47-0xf0,_0x16aa0a-0x9);}this[_0x4fe615(0xc1,0x15f,0xee,0x121)+'s']=new Map();},Game_Map[_0x5a9064(0x29,-0x4,0x6b,0x9)]['addEventTo'+_0x5a9064(0x62,0x45,0x25,-0x6)]=function(_0x363cf7){const _0x442264={};_0x442264[_0x4272be(-0x46,-0x3d,-0x96,-0x86)]=function(_0x145baf,_0x1fe101){return _0x145baf===_0x1fe101;},_0x442264[_0x4272be(0x26,0x32,0x58,0x8b)]='WqQof',_0x442264['fcxiF']=_0x4272be(0x82,0x5a,0xc1,0x6e),_0x442264[_0x2a3a3a(0x2b0,0x2ce,0x28d,0x2f4)]=function(_0xd0ef10,_0x33bfab){return _0xd0ef10!==_0x33bfab;};const _0x3c1bed=_0x442264;this[_0x2a3a3a(0x336,0x304,0x2d8,0x36f)+'s']||=new Map();function _0x4272be(_0x253b2e,_0x19c0b0,_0x1195ab,_0x1302a4){return _0x2c4c05(_0x19c0b0- -0xad,_0x19c0b0-0xb8,_0x1195ab,_0x1302a4-0x167);}const _0x16c94b=_0x363cf7[_0x4272be(-0x53,-0x8e,-0xce,-0xa8)]()['note'],_0x19369f=_0x363cf7['event']()[_0x4272be(-0x7b,-0x1e,0x11,-0x41)],_0x294d1c=_0x16c94b[_0x4272be(-0x43,-0xb,0x3c,-0x4f)](/<([^>]+)>/g);function _0x2a3a3a(_0x2dc542,_0x3cdc4d,_0x11c6f0,_0x114995){return _0x2c4c05(_0x3cdc4d-0x206,_0x3cdc4d-0x1a2,_0x11c6f0,_0x114995-0x6c);}if(_0x294d1c){if(_0x3c1bed[_0x2a3a3a(0x26e,0x276,0x2e4,0x262)](_0x3c1bed[_0x4272be(0x84,0x32,-0x18,0x47)],_0x3c1bed[_0x2a3a3a(0x2ab,0x305,0x2c0,0x375)])){const _0x18dbc5=this[_0x4272be(-0xde,-0x6a,-0x5e,-0xcc)](_0x2b322e,_0x362465),_0x2af4e8=this['tilesetFla'+'gs']();return _0x18dbc5['some'](_0x214aef=>{return _0x36c9b3['some'](_0x39ba45=>_0x214aef>=_0x39ba45[-0x26c4+0x264e+-0x76*-0x1]&&_0x214aef<=_0x39ba45[0xd4a+-0xce0+-0x69]&&(_0x2af4e8[_0x214aef]&-0x1258*-0x1+0x1*-0x989+-0x38*0x28)===-0xddb+0x64e+0x79c);});}else for(const _0x5c6e0c of _0x294d1c){const _0x3abaaf=_0x5c6e0c;!this[_0x4272be(0x17,0x51,0x24,0x12)+'s'][_0x4272be(-0xa4,-0x4e,-0xbd,-0x3c)](_0x3abaaf)&&this[_0x4272be(0x81,0x51,-0x1b,0xb6)+'s'][_0x2a3a3a(0x254,0x239,0x1f6,0x24c)](_0x3abaaf,[]);const _0x15787a=this[_0x2a3a3a(0x296,0x304,0x325,0x2d9)+'s'][_0x2a3a3a(0x2d2,0x2ac,0x2a7,0x239)](_0x3abaaf);!_0x15787a[_0x2a3a3a(0x276,0x23a,0x27c,0x2ae)](_0x363cf7)&&_0x15787a[_0x2a3a3a(0x2da,0x2be,0x298,0x265)](_0x363cf7);}}if(_0x19369f&&_0x3c1bed[_0x2a3a3a(0x2dd,0x2ce,0x33c,0x295)](_0x19369f[_0x2a3a3a(0x2c9,0x279,0x23f,0x2a6)](),'')){!this[_0x4272be(0x84,0x51,0x4e,0x24)+'s']['has'](_0x19369f)&&this[_0x2a3a3a(0x344,0x304,0x292,0x296)+'s'][_0x2a3a3a(0x2ab,0x239,0x206,0x25e)](_0x19369f,[]);const _0x37915d=this['tagToEvent'+'s'][_0x2a3a3a(0x30b,0x2ac,0x2ba,0x2b6)](_0x19369f);!_0x37915d['includes'](_0x363cf7)&&_0x37915d['push'](_0x363cf7);}},Game_Map[_0x5a9064(0x29,0x1c,-0x4,0x76)][_0x2c4c05(0x82,0x97,0x39,0xa5)+_0x5a9064(0x4b,0x55,0x2d,0x68)+_0x2c4c05(0x6e,0x6a,0xc7,0x55)]=function(_0x21b85b){function _0x4118bb(_0x3f9829,_0x5d8f6c,_0xb82aa3,_0x24483d){return _0x5a9064(_0x24483d-0x30a,_0x5d8f6c,_0xb82aa3-0x145,_0x24483d-0x1a6);}const _0x361ab1={};_0x361ab1[_0x4118bb(0x37a,0x358,0x38a,0x362)]=function(_0x592603,_0x3b9a8a){return _0x592603>_0x3b9a8a;},_0x361ab1[_0x4118bb(0x2f4,0x305,0x345,0x31d)]=function(_0x34b623,_0x546fbc){return _0x34b623===_0x546fbc;};function _0xda528a(_0x3573f8,_0xc0dc98,_0x499993,_0x589e7c){return _0x2c4c05(_0x499993- -0x216,_0xc0dc98-0x88,_0x3573f8,_0x589e7c-0x96);}const _0x2747ed=_0x361ab1;if(!this['tagToEvent'+'s'])return;for(const [_0xa890c9,_0x21d418]of this['tagToEvent'+'s'][_0x4118bb(0x3b4,0x336,0x329,0x34f)]()){const _0x56450f=_0x21d418['indexOf'](_0x21b85b);_0x2747ed[_0xda528a(-0x119,-0x13d,-0x160,-0x1c9)](_0x56450f,-(-0x19*0x28+0x3f0+-0x7*0x1))&&(_0x21d418['splice'](_0x56450f,0x1949+0x2574+-0x3ebc*0x1),_0x2747ed[_0xda528a(-0x1b1,-0x14c,-0x1a5,-0x1b9)](_0x21d418[_0x4118bb(0x36c,0x387,0x3e8,0x392)],0x173f*-0x1+0xf24+0x81b)&&this['tagToEvent'+'s'][_0x4118bb(0x31f,0x31b,0x317,0x2d1)](_0xa890c9));}},Game_Event['prototype']['checkColli'+_0x2c4c05(0x100,0xde,0xdc,0x103)]=function(){function _0x1e2c6a(_0x23cb78,_0x21747f,_0x11f0e4,_0x3948f3){return _0x5a9064(_0x11f0e4-0x37c,_0x21747f,_0x11f0e4-0x18d,_0x3948f3-0x48);}return this[_0x1e2c6a(0x37f,0x3b3,0x36c,0x337)+'Enabled']!==![];},Game_Map[_0x2c4c05(0x87,0xdf,0x9d,0xd2)][_0x5a9064(0x46,0xa6,0x75,-0x2c)+_0x5a9064(-0x18,-0x46,0x39,-0x5c)+'ngWithTarg'+_0x5a9064(-0x3b,-0x6b,0x22,0x17)]=function(_0x59fd94,_0x4bd2e6,_0x41c0ce=0x24f9+0x3*0x1cd+-0x2a60,_0x13c1d4=-0xbba+-0x20b1+0x2c71){const _0x3fbace={'jKcTm':function(_0xdef4d6,_0x3a10c9){return _0xdef4d6===_0x3a10c9;},'pItnT':function(_0x4ddcc5,_0x551a9c){return _0x4ddcc5+_0x551a9c;},'AMgda':function(_0x52189d,_0x5d6f2a){return _0x52189d+_0x5d6f2a;},'JffKY':function(_0x26bfdd,_0x4e8d99){return _0x26bfdd===_0x4e8d99;},'nXnvL':function(_0x2ea701,_0x296929){return _0x2ea701-_0x296929;},'vNnAl':function(_0x514e21,_0x2534ac){return _0x514e21+_0x2534ac;},'yoBou':function(_0x361841,_0x579046){return _0x361841 instanceof _0x579046;},'xGLLA':function(_0x461a46,_0x2ff868){return _0x461a46(_0x2ff868);},'gbGLM':function(_0x5df5df,_0x462c66){return _0x5df5df instanceof _0x462c66;},'TPGBU':function(_0x29ea28,_0x10b6a7){return _0x29ea28(_0x10b6a7);},'qUNoR':function(_0x576970,_0x350df5){return _0x576970+_0x350df5;},'PWTJJ':function(_0x5d7f7b,_0x483d6a){return _0x5d7f7b===_0x483d6a;},'aeynO':'player','XFVrX':function(_0x583e93,_0x402947){return _0x583e93===_0x402947;},'GRFPU':function(_0x4d678c,_0x5c8446){return _0x4d678c===_0x5c8446;},'nAomA':'cooldown','rBLcR':function(_0x4bcc6e,_0x363f1d){return _0x4bcc6e<=_0x363f1d;},'zmbDl':function(_0x24fe7b,_0x9f16e0){return _0x24fe7b-_0x9f16e0;},'aoREk':function(_0x4233b2,_0x373122){return _0x4233b2===_0x373122;},'RyhFW':function(_0x460a2d,_0x473703){return _0x460a2d instanceof _0x473703;},'xrOOW':function(_0x16e171,_0xf3c942){return _0x16e171===_0xf3c942;},'UGgdC':_0x16facf(0x529,0x565,0x537,0x4eb),'KnSQJ':function(_0x4d06fe,_0x20e22a,_0x2ce9af){return _0x4d06fe(_0x20e22a,_0x2ce9af);},'AIeiE':function(_0x2fb5c0,_0x2ec8e5){return _0x2fb5c0!==_0x2ec8e5;},'shUJS':_0x16facf(0x5b4,0x554,0x59a,0x547),'LtHrQ':function(_0x1a66a4,_0x1f2e88){return _0x1a66a4===_0x1f2e88;},'MdPmg':function(_0x2ff376,_0x4bc18a){return _0x2ff376===_0x4bc18a;},'sUEVo':function(_0x45ee4f,_0x262f88){return _0x45ee4f==_0x262f88;},'iQaTg':function(_0x2b395a,_0x53df38){return _0x2b395a==_0x53df38;},'TyiVo':_0x16facf(0x508,0x501,0x52e,0x4aa),'MLnhq':function(_0x1982c9,_0x3e6a11){return _0x1982c9===_0x3e6a11;},'mVWgO':function(_0x34765c,_0x5f4e28){return _0x34765c(_0x5f4e28);},'RrrQN':function(_0x452d47,_0x37a437){return _0x452d47+_0x37a437;},'tmFQq':function(_0x3ef80f,_0x45fdb3){return _0x3ef80f===_0x45fdb3;},'GBJaa':'-region-','WjgoD':function(_0x5d9430,_0x4ef9eb){return _0x5d9430<=_0x4ef9eb;},'mhlbF':function(_0x36ef22,_0x2bad1b){return _0x36ef22-_0x2bad1b;},'iwttM':function(_0xe9c236,_0x3838ea){return _0xe9c236===_0x3838ea;},'jsOuO':function(_0x418f1e,_0x57c611){return _0x418f1e-_0x57c611;},'UJCTf':function(_0x5b3586,_0x17ffd7){return _0x5b3586*_0x17ffd7;},'zhOLo':function(_0xd8d9a4,_0x144048){return _0xd8d9a4*_0x144048;},'RJhPU':function(_0x2867cc,_0x211565,_0x37d7ce){return _0x2867cc(_0x211565,_0x37d7ce);},'AhRaE':_0x16facf(0x575,0x5b1,0x529,0x534),'GCzzJ':function(_0x330ead,_0x10246a){return _0x330ead-_0x10246a;},'NLKKB':function(_0x25c6c1,_0x31015d){return _0x25c6c1>_0x31015d;},'SoMDK':function(_0x490d80,_0x1d417a){return _0x490d80*_0x1d417a;},'DUQtC':function(_0x5c6842,_0x752156){return _0x5c6842!==_0x752156;},'kzWia':'SYIeK','Yszeh':function(_0x27b7e4,_0x6f5182){return _0x27b7e4!==_0x6f5182;},'AgyQJ':function(_0x59d2ee,_0x53dc45){return _0x59d2ee===_0x53dc45;},'TSrHB':'EqMUz','wZCJb':function(_0x4d9472,_0x34fb5f){return _0x4d9472||_0x34fb5f;},'RiYam':_0x16facf(0x5b7,0x586,0x5df,0x60d),'IcZWG':_0x21aff7(-0x190,-0x1a9,-0x198,-0x134),'JtAlo':function(_0x52f429,_0x25da8,_0xb51c02){return _0x52f429(_0x25da8,_0xb51c02);}};function _0x21aff7(_0x53c019,_0x1a476b,_0x7691b0,_0x23dc47){return _0x5a9064(_0x7691b0- -0x23f,_0x53c019,_0x7691b0-0x127,_0x23dc47-0x1d9);}const _0x3068b3=_0x3fbace[_0x16facf(0x5d0,0x55e,0x5fa,0x596)](_0x59fd94,_0x3fbace[_0x16facf(0x520,0x4b2,0x4d6,0x560)])?$gamePlayer:this[_0x16facf(0x4fb,0x4f8,0x552,0x4ec)](_0x59fd94);if(!_0x3068b3||_0x3fbace[_0x21aff7(-0x2b0,-0x2af,-0x256,-0x25c)](_0x3068b3['_x'],null)||_0x3fbace['iQaTg'](_0x3068b3['_y'],null))return![];const _0x2979ab=_0x3068b3['_x'],_0xee71a7=_0x3068b3['_y'],_0x4274ab=$gameSystem[_0x16facf(0x545,0x597,0x58c,0x4f1)+_0x21aff7(-0x227,-0x22b,-0x1bb,-0x1ee)]||={},_0x397048=$gameSystem['collidedOn'+_0x16facf(0x5b3,0x5ff,0x556,0x5e6)]||={},_0x21b812=Graphics[_0x16facf(0x5e2,0x63e,0x5af,0x629)],_0x3ddac1=_0x13c1d4*_0x13c1d4,_0x5ee9c7=_0x52e880=>{if(!(_0x52e880 instanceof Game_Event))return![];if(_0x52e880[_0x37dfe0(0x4da,0x4a3,0x4be,0x4a7)+_0x38c561(-0x68,-0x37,-0x92,-0x47)]===!![])return![];function _0x37dfe0(_0x5ed33a,_0x506dcf,_0x19b4a2,_0x1350a1){return _0x21aff7(_0x506dcf,_0x506dcf-0x170,_0x19b4a2-0x70d,_0x1350a1-0x1ab);}function _0x38c561(_0x58606a,_0x2d9db7,_0x2a6d30,_0xee7b6e){return _0x21aff7(_0xee7b6e,_0x2d9db7-0x107,_0x2d9db7-0x183,_0xee7b6e-0x8c);}if(_0x3fbace[_0x37dfe0(0x4a9,0x45c,0x4cc,0x4a4)](_0x52e880[_0x38c561(-0xb5,-0xcc,-0x5e,-0x13a)+'Enabled'],![]))return!![];const _0x1e28ce=_0x3fbace[_0x38c561(-0x48,-0x2f,-0xe,-0x15)](_0x3fbace[_0x38c561(-0x4f,-0xb5,-0x6c,-0xc6)](_0x52e880['_eventId'],'-'),_0x52e880[_0x38c561(0x13,-0x45,-0x20,-0xb7)]);this[_0x38c561(-0x10d,-0x9a,-0x7d,-0xd8)+'ionCache']||={};if(_0x3fbace[_0x38c561(-0x3e,-0x5b,-0x68,-0x10)](this[_0x37dfe0(0x484,0x55c,0x4f0,0x522)+_0x38c561(-0x92,-0x5e,-0x8e,0x6)][_0x1e28ce],undefined)){if(_0x52e880['_pageIndex']>=0x79b+0xe82*0x1+-0x161d){const _0x304928=_0x52e880['event']()[_0x37dfe0(0x51d,0x56c,0x56d,0x55a)][_0x52e880['_pageIndex']];_0x304928?.['list']?this[_0x38c561(-0x5f,-0x9a,-0x74,-0xca)+_0x37dfe0(0x534,0x52f,0x52c,0x56f)][_0x1e28ce]=_0x304928[_0x37dfe0(0x4fc,0x543,0x534,0x523)]['some'](_0x9777c1=>_0x9777c1[_0x38c561(-0x91,-0x27,-0x13,0xb)]===-0x589*-0x3+0x35*-0xa9+0x12ce&&_0x9777c1[_0x37dfe0(0x4bb,0x4b2,0x4eb,0x4c5)][0x2b0+0x1*0x225b+-0x250b]===_0x38c561(-0xfe,-0xca,-0x9c,-0x127)+_0x37dfe0(0x51a,0x526,0x525,0x51e)):this[_0x37dfe0(0x52a,0x4e2,0x4f0,0x562)+_0x37dfe0(0x507,0x594,0x52c,0x582)][_0x1e28ce]=![];}else this['skipCollis'+_0x37dfe0(0x4c0,0x544,0x52c,0x4be)][_0x1e28ce]=![];}return this[_0x38c561(-0x30,-0x9a,-0x4f,-0x49)+_0x38c561(-0x35,-0x5e,-0x9,-0x57)][_0x1e28ce];},_0x35d1a9=_0x3fbace[_0x16facf(0x538,0x5a1,0x50f,0x4c4)](typeof _0x4bd2e6,_0x3fbace[_0x16facf(0x518,0x50d,0x51b,0x56f)])?_0x4bd2e6[_0x21aff7(-0x213,-0x251,-0x1fb,-0x1d6)](/^impassable\s+([A-E]+)$/i):null;if(_0x35d1a9){const _0x29463c=_0x35d1a9[-0x36*0xad+0x8*0x108+0x1c3f]['split'](''),_0x25eec6=_0x29463c[_0x16facf(0x599,0x578,0x5c3,0x5f4)](_0x579335=>{const _0x4fb11f={};return _0x4fb11f['A']=[[0x24c2+0x167f+-0x2a41,-0x2619+-0x1302+0x501a],[0x2d43+0x1*-0x25ee+0xfab,-0x1*0x36e+-0x3919+0x38f*0x1a]],_0x4fb11f['B']=[[0x2*0xbff+-0xf*-0xbc+0x2*-0x1181,-0x13*0x1e9+-0x137c+0xa9*0x56]],_0x4fb11f['C']=[[-0x1*0x10a3+-0x1*-0x997+0x80c,-0x2349+-0x28c*-0x5+-0x623*-0x4]],_0x4fb11f['D']=[[-0x2526*0x1+-0x1eae+0x45d4,0x1f2a+-0x1*-0x1d7f+-0x39aa]],_0x4fb11f['E']=[[-0x9fe+0x1*0x1915+0x26b*-0x5,-0x1af8+0x153e+-0x1*-0x9b9]],_0x4fb11f[_0x579335];})[_0x21aff7(-0x1c4,-0x1e1,-0x1ac,-0x174)](),_0x5537db=_0x3068b3['_x'],_0x261443=_0x3068b3['_y'],_0xaeb4fe=[[_0x5537db,_0x261443],[_0x3fbace[_0x21aff7(-0x18b,-0x1c0,-0x1b2,-0x143)](_0x5537db,-0x241e+0xb*-0x15e+0x3329),_0x261443],[_0x3fbace['nXnvL'](_0x5537db,0xc9c+0xf6a+0x31d*-0x9),_0x261443],[_0x5537db,_0x3fbace[_0x16facf(0x577,0x538,0x508,0x508)](_0x261443,-0x2521+0x7e4+0x1d3e)],[_0x5537db,_0x3fbace['zmbDl'](_0x261443,-0x15a*0x3+-0x8*-0x217+-0xca9)]];return _0xaeb4fe[_0x21aff7(-0x1f2,-0x1ec,-0x1d2,-0x238)](([_0x9c6f1,_0x368880])=>{const _0x3676bb=this['allTiles'](_0x9c6f1,_0x368880);function _0x352ab1(_0x135dc1,_0x582803,_0x3215ef,_0x97a4d7){return _0x21aff7(_0x3215ef,_0x582803-0x175,_0x582803-0x57e,_0x97a4d7-0x183);}const _0x456a9b=this[_0xcc34db(0x397,0x3d2,0x3df,0x3e1)+'gs']();function _0xcc34db(_0x164905,_0x5b9685,_0x3ab670,_0x1a4933){return _0x16facf(_0x3ab670- -0x201,_0x5b9685-0x124,_0x3ab670-0xb7,_0x1a4933);}return _0x3676bb[_0x352ab1(0x3d8,0x3ac,0x3ca,0x3ab)](_0xf28bd3=>{function _0x151e0a(_0x1dc7c0,_0x4f3aa6,_0x5e4fc2,_0x5c8d73){return _0x352ab1(_0x1dc7c0-0x9a,_0x1dc7c0- -0x336,_0x5e4fc2,_0x5c8d73-0x79);}return _0x25eec6[_0x151e0a(0x76,0x23,0x67,0xdc)](_0x1196db=>_0xf28bd3>=_0x1196db[0x3*-0x28d+-0x898+0x103f]&&_0xf28bd3<=_0x1196db[0x6a7*-0x1+-0x1d22+-0x6*-0x5f7]&&(_0x456a9b[_0xf28bd3]&0x67*0x27+-0x2540+0x159e)===-0x6c2+0xb69+-0x498);});});}const _0x57e210=_0x3fbace[_0x21aff7(-0x216,-0x247,-0x1f2,-0x1c1)](typeof _0x4bd2e6,_0x3fbace[_0x21aff7(-0x1fe,-0x1ee,-0x261,-0x249)])?_0x4bd2e6[_0x21aff7(-0x18a,-0x18b,-0x1fb,-0x268)](/^region\s+(\d+)$/i):null;if(_0x57e210){const _0x1b96d3=_0x3fbace['mVWgO'](parseInt,_0x57e210[-0xe0a+0x1*0x14b1+-0x1*0x6a6]),_0x3a701b=_0x3fbace[_0x21aff7(-0x200,-0x1fa,-0x248,-0x220)](_0x3fbace[_0x16facf(0x531,0x4f5,0x581,0x50b)](_0x3fbace[_0x16facf(0x5c7,0x5aa,0x61d,0x5da)](_0x3fbace[_0x16facf(0x541,0x565,0x4da,0x53a)](this[_0x21aff7(-0x1e7,-0x19b,-0x1ec,-0x1eb)],'-'),_0x3fbace[_0x21aff7(-0x1c3,-0x1f0,-0x1b8,-0x1b5)](_0x59fd94,_0x3fbace[_0x16facf(0x520,0x4c6,0x542,0x572)])?_0x3fbace[_0x21aff7(-0x252,-0x214,-0x259,-0x217)]:_0x59fd94),_0x3fbace[_0x16facf(0x566,0x58a,0x568,0x578)]),_0x1b96d3),_0x470272=Graphics[_0x16facf(0x5e2,0x602,0x5c6,0x57e)],_0x44d17c=$gameSystem[_0x16facf(0x545,0x553,0x54d,0x584)+'imestamps'][_0x3a701b]||-0x12*0xb7+0xb*-0x1d6+-0x2e*-0xb8;if(_0x3fbace[_0x16facf(0x52b,0x581,0x55a,0x4b9)](_0x3fbace[_0x21aff7(-0x1bb,-0x228,-0x1c9,-0x1de)](_0x470272,_0x44d17c),_0x41c0ce))return![];const _0x4c0324=_0x3068b3['_x'],_0x137268=_0x3068b3['_y'],_0x2a0a12=this['regionId'](_0x4c0324,_0x137268);if(_0x3fbace[_0x16facf(0x5ac,0x589,0x602,0x603)](_0x2a0a12,_0x1b96d3))return $gameSystem[_0x21aff7(-0x24c,-0x20e,-0x234,-0x255)+_0x16facf(0x5be,0x57b,0x5e0,0x566)][_0x3a701b]=_0x470272,!![];return![];}const _0x381ca1=(_0x22cd52,_0x447a35)=>{if(_0x3fbace[_0x1cbc06(-0x1ca,-0x162,-0x16c,-0x12b)](_0x22cd52,Game_Event)){if(_0x3fbace['xGLLA'](_0x5ee9c7,_0x22cd52))return![];if(_0x3fbace[_0x1cbc06(-0xb6,-0x10f,-0x100,-0x117)](_0x3068b3,Game_Event)&&_0x3fbace[_0x1cbc06(-0x193,-0x1df,-0x19f,-0x1cd)](_0x5ee9c7,_0x3068b3))return![];}const _0x4f98d3=_0x3fbace['qUNoR'](_0x3fbace[_0x47cd90(0x1d1,0x1e1,0x1ba,0x1e9)](_0x3fbace['pItnT'](this[_0x47cd90(0x25b,0x22d,0x1ab,0x1fb)],'-')+(_0x3fbace[_0x47cd90(0x21e,0x1a1,0x1e6,0x1b5)](_0x22cd52,$gamePlayer)?_0x3fbace[_0x1cbc06(-0x174,-0x217,-0x1b4,-0x1a8)]:_0x22cd52[_0x1cbc06(-0xf5,-0xda,-0xf5,-0xfb)])+'-',_0x3fbace['XFVrX'](_0x59fd94,_0x3fbace[_0x1cbc06(-0x1a0,-0x18c,-0x1b4,-0x1b0)])?_0x3fbace['aeynO']:_0x59fd94)+'-',_0x447a35);if(_0x3fbace[_0x47cd90(0x2ab,0x231,0x256,0x23e)](_0x41c0ce,0x9b1*0x3+-0xe6*-0x1b+-0x3555)&&_0x397048[_0x4f98d3])return![];let _0x3c63a6=_0x41c0ce;_0x3fbace[_0x47cd90(0x21c,0x1f0,0x196,0x1f6)](_0x41c0ce,_0x3fbace[_0x1cbc06(-0x1b6,-0x1ac,-0x186,-0x1ee)])&&_0x3fbace['yoBou'](_0x22cd52,Game_Event)&&(_0x3c63a6=_0x22cd52[_0x1cbc06(-0x157,-0x1f3,-0x18c,-0x11a)+_0x1cbc06(-0x1f8,-0x17f,-0x192,-0x18e)+'ag']());function _0x47cd90(_0x59f7cc,_0x3665e8,_0xd7146b,_0x3da8f2){return _0x16facf(_0x3da8f2- -0x392,_0x3665e8-0x1c2,_0xd7146b-0x9f,_0xd7146b);}const _0x5d44f6=_0x4274ab[_0x4f98d3]||0xb*-0x327+-0x19ea+-0x3c97*-0x1;if(_0x3fbace[_0x1cbc06(-0x10e,-0x11f,-0x14b,-0x133)](_0x3fbace[_0x47cd90(0x1b4,0x21b,0x16e,0x1de)](_0x21b812,_0x5d44f6),_0x3c63a6))return![];function _0x1cbc06(_0x5c2371,_0x2f8e8e,_0xa8a98b,_0x3554fb){return _0x21aff7(_0x2f8e8e,_0x2f8e8e-0x147,_0xa8a98b-0xa5,_0x3554fb-0x8d);}if(!this[_0x47cd90(0x1d7,0x13b,0x1a9,0x172)+_0x47cd90(0x235,0x1d8,0x1ed,0x211)](_0x22cd52[_0x47cd90(0x21b,0x173,0x1e2,0x1d7)](),_0x22cd52['screenY'](),_0x22cd52['hitboxData'](),_0x3068b3['screenX'](),_0x3068b3[_0x1cbc06(-0x151,-0x1e2,-0x1a1,-0x1ff)](),_0x3fbace['PWTJJ'](_0x59fd94,_0x3fbace[_0x47cd90(0x1f1,0x1ab,0x1ec,0x18e)])?_0x3068b3['hitboxData']():_0x3068b3[_0x1cbc06(-0x232,-0x1d8,-0x1c1,-0x1ab)](),_0x22cd52[_0x1cbc06(-0x1e0,-0x1f2,-0x1bb,-0x154)+_0x47cd90(0x292,0x1c4,0x241,0x228)]?_0x22cd52['_rotation']:-0x9*-0x1df+0xf*-0x73+-0xa1a,_0x3068b3[_0x47cd90(0x166,0x15f,0x154,0x187)+'tionPoint']?_0x3068b3[_0x1cbc06(-0x14a,-0x180,-0x118,-0x10e)]:0x20bc*0x1+0x45c+-0x4*0x946))return![];_0x4274ab[_0x4f98d3]=_0x21b812;if(_0x3fbace[_0x47cd90(0x1eb,0x237,0x222,0x1f8)](_0x41c0ce,-0x763*-0x2+-0x18+0xeae*-0x1))_0x397048[_0x4f98d3]=!![];if(_0x3fbace[_0x1cbc06(-0xf7,-0x12d,-0x158,-0x1c8)](_0x22cd52,Game_Event)){let _0x1bc402=0x860+-0x1*-0x1537+-0x1d97;const _0x1bedfe=_0x22cd52[_0x1cbc06(-0x164,-0x201,-0x1d9,-0x1b7)]()[_0x1cbc06(-0x178,-0x191,-0x1d7,-0x1b7)],_0xeef81f=_0x1bedfe[_0x1cbc06(-0xe2,-0x17b,-0x156,-0xe4)](/<dmg:\s*(.+?)>/i);if(_0xeef81f){CollisionManager[_0x1cbc06(-0x16d,-0x1bd,-0x1a6,-0x15c)+_0x1cbc06(-0x126,-0x1c3,-0x153,-0xf2)]=_0x22cd52['_eventId'];const _0x45f462=_0xeef81f[0xe*0x137+0x6*0x5f7+0x3*-0x1199]['trim'](),_0x485b45=$dataSkills['find'](_0x433144=>_0x433144&&_0x433144[_0x47cd90(0x1b9,0x18d,0x244,0x1d9)]===_0x45f462);if(_0x485b45){const _0x3025c3=new Game_Interpreter(),_0x549ae3=_0x3fbace[_0x1cbc06(-0x136,-0x18e,-0x17e,-0x158)](_0x59fd94,_0x3fbace['aeynO'])||_0x59fd94===0x2*-0x657+-0x3a7+0x1055,_0xb426a6=_0x549ae3?$gamePlayer:_0x3068b3,_0x498987=_0x549ae3||(_0x3068b3['databaseEn'+'emy']||_0x3068b3[_0x47cd90(0x285,0x1a2,0x1ff,0x214)+_0x1cbc06(-0x1c7,-0x1e8,-0x197,-0x1cb)]||_0x3068b3[_0x47cd90(0x164,0x1e8,0x11b,0x185)]);if(_0x498987){if(_0x47cd90(0x1a2,0x1af,0x1d5,0x1ad)===_0x47cd90(0x19d,0x1e3,0x212,0x1ad)){if(!_0x549ae3&&!_0x3068b3[_0x1cbc06(-0x1ea,-0x21e,-0x1d4,-0x1c9)+_0x47cd90(0x1c7,0x1ac,0x14e,0x1aa)]&&!_0x3068b3[_0x1cbc06(-0x175,-0x125,-0x12e,-0x147)+_0x1cbc06(-0x1e7,-0x1c7,-0x197,-0x14c)]&&!_0x3068b3[_0x47cd90(0x13f,0x136,0x1a4,0x185)]){const _0x32943d=_0x3068b3[_0x1cbc06(-0x211,-0x1b7,-0x1d9,-0x1a4)]();_0x32943d[_0x1cbc06(-0x197,-0x16e,-0x169,-0x139)]&&_0x3068b3['setupEnemy'+_0x1cbc06(-0x16d,-0x1ff,-0x1a0,-0x176)](_0x32943d[_0x47cd90(0x173,0x17c,0x1a3,0x1d9)]);}_0x1bc402=_0x3025c3[_0x47cd90(0x253,0x1b3,0x242,0x208)+'amageAgain'+'stEvent'](_0xb426a6,_0x3fbace['UGgdC'],_0x485b45,_0x22cd52[_0x1cbc06(-0x153,-0x85,-0xf5,-0x121)]),CollisionManager['lastEvaded']=_0x1bc402===0xf9d+-0x8f3+0x2*-0x355&&!CollisionManager[_0x1cbc06(-0xb3,-0x144,-0x10c,-0x138)+'ty'],_0x3fbace['KnSQJ'](processStateApplication,_0x22cd52,_0x3fbace[_0x1cbc06(-0x1f6,-0x1e5,-0x18d,-0x13b)](_0x59fd94,_0x3fbace[_0x1cbc06(-0x1e8,-0x19e,-0x1b4,-0x1c4)])?-0x5b8*-0x2+0x3fb*0x7+-0x274d:_0x59fd94);}else this[_0x1cbc06(-0x1d7,-0x1a7,-0x178,-0x1b8)+_0x47cd90(0x267,0x19c,0x1bf,0x206)][_0x3e5050]=![];}else{if(_0x3fbace[_0x47cd90(0x20e,0x18a,0x244,0x1d5)](_0x3fbace[_0x47cd90(0x1a6,0x176,0x216,0x1bf)],_0x3fbace[_0x47cd90(0x200,0x22e,0x226,0x1bf)])){const _0xad29a3=_0x2d25c5[-0x1918+0xede+0x123*0x9]['split'](''),_0x4cc526=_0xad29a3[_0x1cbc06(-0x171,-0x179,-0x13b,-0x194)](_0x3bc8f6=>{const _0x1181a4={};return _0x1181a4['A']=[[0x29e*-0xb+-0x2*-0x125+0x4*0xae0,-0xf6d*-0x1+-0x13c+0x8ce],[0xeb0+0x2b46*-0x1+-0x8e*-0x5d,0x380*-0x8+-0x23fe*-0x1+0x4cd*0x5]],_0x1181a4['B']=[[0x3*-0xce9+-0xec1+-0x2*-0x1abe,-0x1c80+0x23b4+-0xe3*0x7]],_0x1181a4['C']=[[0x1a*0x4d+0x1*-0x25ab+-0x1*-0x1ed9,-0x244+-0x9*0x44d+-0x898*-0x5]],_0x1181a4['D']=[[-0x1*-0xb2d+0xe78+-0x17a5,-0x2609*0x1+-0x44f+0x49*0x9f]],_0x1181a4['E']=[[0xc*-0x31b+0x2681+-0xb*-0x29,0xdbc*0x2+-0x1906+-0x18d*-0x1]],_0x1181a4[_0x3bc8f6];})[_0x47cd90(0x252,0x28c,0x222,0x23b)](),_0x1b4560=_0x31bbbf['_x'],_0x38c9f9=_0x322677['_y'],_0x3e4d74=[[_0x1b4560,_0x38c9f9],[_0x1b4560+(-0x7fb+-0x1dc4+0x25c0),_0x38c9f9],[_0x3fbace[_0x47cd90(0x1d1,0x19d,0x1a3,0x1b9)](_0x1b4560,-0x12a0+-0x20d7+-0x16e*-0x24),_0x38c9f9],[_0x1b4560,_0x3fbace[_0x47cd90(0x1df,0x1a0,0x23d,0x1e9)](_0x38c9f9,-0x8*0x1e2+0x81e*-0x1+0x172f)],[_0x1b4560,_0x38c9f9-(0x69c+-0x19*-0x22+-0x9ed)]];return _0x3e4d74[_0x1cbc06(-0xcb,-0x19c,-0x12d,-0xf7)](([_0x1f7284,_0x1262b3])=>{function _0x4e327b(_0x649f84,_0x171233,_0x21b41a,_0x1d5b47){return _0x47cd90(_0x649f84-0x3b,_0x171233-0x150,_0x21b41a,_0x1d5b47-0x1a8);}const _0x3f9026=this[_0x4e327b(0x32a,0x36e,0x34e,0x335)](_0x1f7284,_0x1262b3);function _0x12afe2(_0x23c300,_0x4bd549,_0x407405,_0xf199b9){return _0x47cd90(_0x23c300-0x1a6,_0x4bd549-0xc8,_0x4bd549,_0x407405-0xfc);}const _0x377b1c=this['tilesetFla'+'gs']();return _0x3f9026[_0x4e327b(0x35c,0x3a9,0x368,0x3bd)](_0x2f5458=>{return _0x4cc526['some'](_0x6985e1=>_0x2f5458>=_0x6985e1[0x1a7a+-0x1c3a+-0x20*-0xe]&&_0x2f5458<=_0x6985e1[-0x1*0x24e1+-0x2466+-0x53c*-0xe]&&(_0x377b1c[_0x2f5458]&-0x117+-0xad5*0x1+0xbfb)===0x1b24+-0x9f+-0x1a76);});});}else _0x1bc402=_0x22cd52[_0x47cd90(0x226,0x216,0x23a,0x219)+'romNoteTag']();}}else _0x1bc402=_0x22cd52[_0x47cd90(0x246,0x238,0x1cc,0x219)+'romNoteTag']();}else _0x1bc402=_0x22cd52[_0x1cbc06(-0x138,-0x134,-0x129,-0x112)+_0x47cd90(0x274,0x23c,0x1f4,0x217)]();CollisionManager[_0x1cbc06(-0x118,-0x103,-0x111,-0xc3)+'on'](_0x3fbace[_0x1cbc06(-0x172,-0x137,-0x15e,-0x1b6)](_0x59fd94,_0x3fbace[_0x1cbc06(-0x228,-0x1be,-0x1b4,-0x1e1)])?-0x2*-0xf1d+0x1*0x5f7+-0x2431:_0x59fd94,_0x1bc402),_0x22cd52[_0x1cbc06(-0x1a1,-0x21c,-0x1d4,-0x167)+_0x1cbc06(-0x18e,-0x1da,-0x198,-0x1d2)]&&_0x22cd52['databaseEn'+_0x1cbc06(-0x1ea,-0x1a5,-0x198,-0x1bb)]['traits']&&processEnemyAttackTraits(_0x22cd52,_0x3fbace[_0x1cbc06(-0x185,-0x1b7,-0x18e,-0x156)](_0x59fd94,_0x3fbace[_0x47cd90(0x179,0x18f,0x1ac,0x18e)])?-0x22d2*0x1+-0x1*0x2596+0x296*0x1c:_0x59fd94);}return!![];};if(_0x4bd2e6===_0x3fbace[_0x16facf(0x520,0x514,0x58d,0x551)]){const _0x3db1a4=Math[_0x21aff7(-0x17a,-0x1b9,-0x1cf,-0x1e1)](_0x3fbace[_0x21aff7(-0x200,-0x1c4,-0x1d1,-0x1f2)]($gamePlayer['_x'],_0x3068b3['_x'])),_0x1e0a2b=Math[_0x16facf(0x5aa,0x5e9,0x538,0x558)](_0x3fbace[_0x16facf(0x5b0,0x57c,0x548,0x5a9)]($gamePlayer['_y'],_0x3068b3['_y']));if(_0x3fbace['rBLcR'](_0x3fbace[_0x21aff7(-0x2a6,-0x283,-0x248,-0x297)](_0x3fbace['UJCTf'](_0x3db1a4,_0x3db1a4),_0x3fbace[_0x21aff7(-0x1d5,-0x192,-0x1da,-0x1c4)](_0x1e0a2b,_0x1e0a2b)),_0x3ddac1))return _0x3fbace['RJhPU'](_0x381ca1,$gamePlayer,_0x3fbace[_0x21aff7(-0x2ca,-0x1fe,-0x259,-0x2b9)]);return![];}this[_0x21aff7(-0x132,-0x15a,-0x19f,-0x130)+'s']||=new Map();const _0x4a2be9=new Set();for(const _0x163936 of Array['isArray'](_0x4bd2e6)?_0x4bd2e6:[_0x4bd2e6]){const _0x54fd9e=this[_0x16facf(0x5da,0x5d2,0x584,0x570)+'s'][_0x16facf(0x582,0x58d,0x573,0x5c1)](_0x163936)||[];for(const _0x1ddf9c of _0x54fd9e){if(_0x3fbace['MLnhq'](_0x3fbace[_0x16facf(0x507,0x4ac,0x507,0x4c0)],_0x3fbace[_0x21aff7(-0x225,-0x295,-0x272,-0x2ce)])){if(!_0x1ddf9c||_0x1ddf9c[_0x21aff7(-0x219,-0x1dc,-0x1a7,-0x13d)]||!$gameMap['_events'][_0x1ddf9c[_0x21aff7(-0x161,-0x170,-0x19a,-0x168)]]||!_0x1ddf9c[_0x16facf(0x4fb,0x556,0x52c,0x4f2)]()){const _0x39a895=_0x54fd9e[_0x16facf(0x562,0x566,0x50d,0x584)](_0x1ddf9c);_0x39a895>-(-0x7b1+0x2541+-0x1d8f)&&_0x54fd9e['splice'](_0x39a895,-0x2392+-0xc44+0x2fd7);continue;}const _0x4898be=_0x3fbace[_0x16facf(0x577,0x5b6,0x54b,0x5c2)](Math[_0x16facf(0x5aa,0x5db,0x566,0x5aa)](_0x1ddf9c['_x']-_0x2979ab),Math[_0x16facf(0x5aa,0x619,0x5c9,0x565)](_0x3fbace[_0x16facf(0x5d7,0x5fa,0x5e9,0x592)](_0x1ddf9c['_y'],_0xee71a7)));if(_0x3fbace[_0x21aff7(-0x270,-0x1e6,-0x215,-0x217)](_0x4898be,_0x3fbace[_0x21aff7(-0x194,-0x1d2,-0x1ae,-0x1df)](_0x13c1d4,-0x267*0x9+0x13b5+-0x52*-0x6)))continue;_0x4a2be9[_0x16facf(0x58f,0x5c5,0x5f6,0x5bf)](_0x1ddf9c);}else{const _0x4cf5a0=_0x55420b;!this[_0x21aff7(-0x16c,-0x1ee,-0x19f,-0x169)+'s']['has'](_0x4cf5a0)&&this['tagToEvent'+'s']['set'](_0x4cf5a0,[]);const _0x1e8975=this[_0x16facf(0x5da,0x634,0x5e7,0x625)+'s']['get'](_0x4cf5a0);!_0x1e8975[_0x16facf(0x510,0x531,0x4e5,0x4c7)](_0x18745b)&&_0x1e8975[_0x21aff7(-0x1e9,-0x23d,-0x1e5,-0x187)](_0x35cba0);}}}for(const _0x5d0c8b of _0x4a2be9){if(_0x3fbace[_0x21aff7(-0x1f2,-0x20d,-0x1cb,-0x1df)](_0x3fbace['kzWia'],_0x21aff7(-0x1ef,-0x1fd,-0x1b5,-0x211)))_0x5b1d67&&_0xe8135e['event']&&_0x5a2ad8[_0x21aff7(-0x20a,-0x234,-0x27e,-0x2b1)]()&&this[_0x16facf(0x595,0x553,0x5ba,0x5fa)+'TagIndex'](_0x2fe4c8);else{if(_0x3fbace['xGLLA'](_0x5ee9c7,_0x5d0c8b))continue;if(_0x3fbace[_0x16facf(0x552,0x58b,0x581,0x54a)](_0x59fd94,_0x3fbace[_0x21aff7(-0x213,-0x288,-0x259,-0x24d)])&&_0x3fbace['AgyQJ'](_0x5d0c8b[_0x16facf(0x5df,0x5fa,0x60c,0x5a2)],_0x59fd94))continue;const _0x7167ab=_0x5d0c8b[_0x21aff7(-0x28b,-0x237,-0x27e,-0x2f1)]()[_0x21aff7(-0x24f,-0x224,-0x27c,-0x2a1)],_0x126b79=_0x5d0c8b['event']()[_0x16facf(0x56b,0x580,0x5d8,0x52b)];let _0x37f60e=null;for(const _0x2c80a9 of Array[_0x21aff7(-0x1dd,-0x1c2,-0x1f5,-0x1ef)](_0x4bd2e6)?_0x4bd2e6:[_0x4bd2e6]){if(_0x3fbace['TSrHB']!==_0x3fbace[_0x16facf(0x544,0x4d3,0x592,0x4f6)]){const _0x4fbb23=_0x157eb6[_0x21aff7(-0x1eb,-0x223,-0x217,-0x24e)](_0x18f35d);_0x4fbb23>-(0x1*0xf4f+-0x1cd9*-0x1+0x7f*-0x59)&&(_0x34e598[_0x16facf(0x5d8,0x5d3,0x637,0x5d7)](_0x4fbb23,0x19*-0xf2+0xe*-0xe3+0x240d),_0x3fbace[_0x21aff7(-0x1f3,-0x202,-0x1de,-0x189)](_0x5067c3[_0x16facf(0x5c2,0x5fc,0x619,0x5f8)],0x848+-0xb*0x146+0x2dd*0x2)&&this[_0x16facf(0x5da,0x629,0x635,0x5fc)+'s'][_0x21aff7(-0x2db,-0x29d,-0x278,-0x29d)](_0x4620b0));}else{const _0x18d7ec=_0x2c80a9['startsWith']('<')&&_0x2c80a9['endsWith']('>'),_0x6cecda=_0x18d7ec&&_0x7167ab[_0x21aff7(-0x25c,-0x2d0,-0x269,-0x2af)](_0x2c80a9),_0x2f4c6d=!_0x18d7ec&&_0x3fbace[_0x16facf(0x547,0x529,0x558,0x556)](_0x126b79,_0x2c80a9);if(_0x3fbace[_0x21aff7(-0x19b,-0x16f,-0x1dc,-0x192)](_0x6cecda,_0x2f4c6d)){if(_0x3fbace['XFVrX'](_0x3fbace['RiYam'],_0x3fbace['IcZWG']))this[_0x21aff7(-0x1e6,-0x1f4,-0x21d,-0x24f)+_0x21aff7(-0x23a,-0x216,-0x1e1,-0x1ca)][_0x2c6f3e]=_0x5bc374[_0x21aff7(-0x18b,-0x1de,-0x1d9,-0x244)]['some'](_0x2d1a9e=>_0x2d1a9e['code']===-0x1b*0x115+0x1*-0x64b+-0x1ff*-0x12&&_0x2d1a9e['parameters'][0x1ac*0x11+-0x716*-0x3+-0x31ae*0x1]==='<skip\x20coll'+'ision>');else{_0x37f60e=_0x2c80a9;break;}}}}if(!_0x37f60e)continue;if(_0x3fbace['JtAlo'](_0x381ca1,_0x5d0c8b,_0x37f60e))return!![];}}function _0x16facf(_0x501307,_0x1c988a,_0x362f23,_0x43dab1){return _0x5a9064(_0x501307-0x53a,_0x43dab1,_0x362f23-0x8,_0x43dab1-0x103);}return![];},Game_Map[_0x5a9064(0x29,0x57,0x20,-0x47)][_0x2c4c05(0x42,0x1a,0x65,0x5f)+_0x2c4c05(0xd3,0xb5,0xa7,0xa8)]=function(_0x3e5834,_0x195bb9,_0x44b8d5=-0x17a2+-0x1*-0x1d91+-0x7*0xd9){const _0x101c63={'enzDl':function(_0x3615ac,_0x17684a,_0x10173b){return _0x3615ac(_0x17684a,_0x10173b);},'wVrSY':function(_0x12643c,_0x2d84ca){return _0x12643c===_0x2d84ca;},'aFcsf':'player','giBNE':function(_0x3ee7cd,_0x3015e1){return _0x3ee7cd+_0x3015e1;},'QdiUJ':function(_0x2c4c45,_0x5bade0){return _0x2c4c45+_0x5bade0;},'TouFz':function(_0x4a003a,_0x4b6e83){return _0x4a003a===_0x4b6e83;},'sSKmZ':function(_0x546650,_0x1cd9c0){return _0x546650>=_0x1cd9c0;},'FTGnP':function(_0x488c8f,_0xc2e9e4){return _0x488c8f!==_0xc2e9e4;},'QzYSL':'AlREs','KlbBF':'(((.+)+)+)'+'+$','HCgPl':function(_0x28241b,_0x77225b){return _0x28241b===_0x77225b;},'yGKtj':_0x590459(0x31e,0x35c,0x37d,0x376),'IMrGt':function(_0x189d64,_0x4d2e4b){return _0x189d64===_0x4d2e4b;},'WEzlf':function(_0x4fa153,_0x1731a0){return _0x4fa153(_0x1731a0);},'MmZXD':function(_0x369e85,_0x316357){return _0x369e85===_0x316357;},'ZAfqY':function(_0x2101cd,_0x2a1298){return _0x2101cd instanceof _0x2a1298;},'sfgNG':function(_0x4f6e53,_0x191ef0){return _0x4f6e53==_0x191ef0;},'PmAwg':function(_0x11c702,_0x3d5422){return _0x11c702===_0x3d5422;},'uGcwu':_0x590459(0x2a4,0x261,0x2b4,0x250),'cgcmI':function(_0x5e0aba,_0x1a60de){return _0x5e0aba<=_0x1a60de;},'aVQLt':function(_0x266236,_0x5a3af8){return _0x266236-_0x5a3af8;},'GrFmh':function(_0x241100,_0x5654ba){return _0x241100===_0x5654ba;},'GuGnN':'iCIdd','Owepi':_0x29ec6b(0x43a,0x3de,0x3ca,0x3fd)};if(!$gameSystem[_0x590459(0x31f,0x2ae,0x2f4,0x2fc)+_0x590459(0x37a,0x382,0x36d,0x335)])$gameSystem[_0x590459(0x297,0x2a5,0x2f4,0x30f)+_0x29ec6b(0x3fc,0x44b,0x418,0x425)]={};const _0x488915=$gameSystem[_0x590459(0x292,0x2af,0x2f4,0x344)+_0x590459(0x2ff,0x3a6,0x36d,0x326)],_0x11edc6=Graphics[_0x590459(0x3a6,0x3e0,0x391,0x402)];function _0x29ec6b(_0x3bf40a,_0x7ef45f,_0x42c5ae,_0x5255d2){return _0x2c4c05(_0x5255d2-0x343,_0x7ef45f-0x1ad,_0x42c5ae,_0x5255d2-0x1d7);}const _0x224a7a=new Set(Array['isArray'](_0x195bb9)?_0x195bb9:[_0x195bb9]),_0x43c3cf=_0x3e5834+'-'+(Array[_0x590459(0x2fe,0x2d6,0x333,0x31b)](_0x195bb9)?_0x195bb9[_0x590459(0x332,0x335,0x36c,0x37b)]('-'):_0x195bb9),_0x4a32b9=_0x488915[_0x43c3cf]||-0x1*-0x168d+-0x12d3+0x1dd*-0x2;function _0x590459(_0xd70739,_0x139dfb,_0x57419d,_0x3b547c){return _0x2c4c05(_0x57419d-0x28b,_0x139dfb-0x1da,_0xd70739,_0x3b547c-0x2e);}const _0x1c225a=_0x101c63['TouFz'](_0x3e5834,_0x101c63[_0x590459(0x2c1,0x360,0x30f,0x35f)])?$gamePlayer:this['event'](_0x3e5834);if(!_0x1c225a||_0x1c225a['_x']==null||_0x101c63[_0x29ec6b(0x45c,0x48a,0x3e6,0x41d)](_0x1c225a['_y'],null))return![];let _0x3329c1=_0x44b8d5;_0x101c63[_0x590459(0x31e,0x34f,0x34d,0x34a)](_0x3329c1,_0x101c63['uGcwu'])&&_0x1c225a instanceof Game_Event&&(_0x3329c1=_0x1c225a['getCooldow'+_0x590459(0x363,0x2f7,0x2f1,0x29a)+'ag']());if(_0x101c63[_0x590459(0x3b5,0x312,0x375,0x340)](_0x101c63['aVQLt'](_0x11edc6,_0x4a32b9),_0x3329c1)){if(_0x101c63['GrFmh'](_0x101c63[_0x590459(0x359,0x30d,0x2e9,0x2d5)],_0x101c63[_0x29ec6b(0x37d,0x3de,0x3c4,0x3f2)]))_0x101c63[_0x590459(0x2f2,0x39c,0x346,0x37c)](_0x35afd9,_0x3ad8b5,_0x101c63[_0x29ec6b(0x43c,0x3c8,0x447,0x3e1)](_0x118027,_0x101c63[_0x590459(0x33e,0x34d,0x30f,0x2f6)])?0x1*0xe15+-0x19e7+0x22*0x59:_0x6fd63d);else return![];}const _0x1d1366=_0x1dc433=>{if(!(_0x1dc433 instanceof Game_Event))return![];if(_0x1dc433[_0x1317ce(0x10e,0x1ae,0x149,0x194)+_0x5893e4(0x5c0,0x63a,0x5e9,0x603)]===!![])return![];function _0x5893e4(_0x1accfa,_0x133430,_0xa69d5,_0x328f84){return _0x590459(_0x328f84,_0x133430-0x13a,_0xa69d5-0x27b,_0x328f84-0x1a8);}function _0x1317ce(_0x13b404,_0x4e399b,_0x26c295,_0x2b69a){return _0x590459(_0x2b69a,_0x4e399b-0x1dc,_0x26c295- -0x190,_0x2b69a-0x1ac);}if(_0x101c63[_0x1317ce(0x1d1,0x19d,0x199,0x153)](_0x1dc433[_0x5893e4(0x5b1,0x53b,0x554,0x4e8)+_0x5893e4(0x64e,0x5c3,0x5e9,0x5e2)],![]))return!![];const _0x57762c=_0x101c63['giBNE'](_0x101c63[_0x1317ce(0x1d6,0x202,0x1d7,0x1fc)](_0x101c63[_0x1317ce(0x185,0x13a,0x18c,0x17e)](this[_0x1317ce(0x16b,0x21d,0x1ac,0x15a)],'-')+_0x1dc433[_0x5893e4(0x637,0x665,0x609,0x654)],'-'),_0x1dc433[_0x1317ce(0x17d,0x201,0x1d0,0x1b9)]);this[_0x5893e4(0x53d,0x536,0x586,0x59b)+_0x5893e4(0x561,0x5a7,0x5c2,0x55b)]||={};if(_0x101c63[_0x5893e4(0x515,0x5a0,0x561,0x5c2)](this[_0x1317ce(0x11b,0x1ae,0x17b,0x1d2)+_0x5893e4(0x5cf,0x61a,0x5c2,0x602)][_0x57762c],undefined)){if(_0x101c63[_0x5893e4(0x4df,0x568,0x54f,0x51a)](_0x1dc433[_0x5893e4(0x590,0x625,0x5db,0x5fe)],0x25a9*0x1+0x16ad+0x2*-0x1e2b)){const _0x1a2917=_0x1dc433[_0x1317ce(0x106,0x18f,0x11a,0xe3)]()[_0x5893e4(0x61a,0x5e8,0x603,0x5a9)][_0x1dc433[_0x1317ce(0x1b0,0x238,0x1d0,0x241)]];if(_0x1a2917?.[_0x1317ce(0x1dd,0x165,0x1bf,0x232)]){if(_0x101c63['FTGnP'](_0x1317ce(0x23e,0x219,0x1eb,0x22c),_0x101c63['QzYSL'])){const _0xed201a=_0x5f0970?function(){if(_0x520a72){const _0x4c15ff=_0x426178['apply'](_0x5d4ce5,arguments);return _0x5be1a8=null,_0x4c15ff;}}:function(){};return _0x4d0846=![],_0xed201a;}else this[_0x5893e4(0x547,0x536,0x586,0x5f6)+'ionCache'][_0x57762c]=_0x1a2917['list'][_0x5893e4(0x5b8,0x5ea,0x5d1,0x589)](_0x3ba266=>_0x3ba266[_0x5893e4(0x658,0x587,0x5f9,0x5c4)]===0x1329+0x94d*0x1+0xc2*-0x25&&_0x3ba266['parameters'][0x78+0x22f6+-0x236e]===_0x1317ce(0xf9,0x173,0x14b,0x1af)+_0x5893e4(0x62e,0x5f0,0x5bb,0x587));}else this[_0x5893e4(0x579,0x5a5,0x586,0x5af)+_0x5893e4(0x5bf,0x5e9,0x5c2,0x568)][_0x57762c]=![];}else this[_0x5893e4(0x53e,0x54e,0x586,0x56d)+'ionCache'][_0x57762c]=![];}return this['skipCollis'+'ionCache'][_0x57762c];},_0x15df69=this[_0x29ec6b(0x31e,0x31a,0x39a,0x365)]()[_0x590459(0x3a1,0x3be,0x356,0x327)](_0x8a3706=>{function _0x4d6a12(_0x39e592,_0x3f09ab,_0xaa2c11,_0x271166){return _0x590459(_0x3f09ab,_0x3f09ab-0x1b4,_0x39e592- -0x51b,_0x271166-0xb2);}function _0x27a856(_0x5749fe,_0x1f72f4,_0x5a9d79,_0x2150c0){return _0x29ec6b(_0x5749fe-0x47,_0x1f72f4-0x12e,_0x5749fe,_0x2150c0- -0x4a9);}if(_0x101c63[_0x4d6a12(-0x20d,-0x1ca,-0x1e2,-0x21b)](_0x101c63[_0x4d6a12(-0x24f,-0x2b5,-0x284,-0x1e4)],_0x27a856(-0x86,-0xc1,-0x11d,-0xbc)))return _0x132ee1[_0x4d6a12(-0x1ac,-0x1f4,-0x15e,-0x1ea)]()['search'](QprKIa[_0x4d6a12(-0x1ba,-0x188,-0x21c,-0x201)])[_0x4d6a12(-0x1ac,-0x1ee,-0x211,-0x179)]()[_0x27a856(-0x1a,-0xe9,-0x22,-0x8d)+'r'](_0x337567)[_0x27a856(-0x114,-0x93,-0x10e,-0xaf)](QprKIa[_0x27a856(-0xc3,-0xed,-0x57,-0x90)]);else{if(_0x101c63[_0x4d6a12(-0x19b,-0x20f,-0x1f9,-0x169)](_0x8a3706,_0x1c225a))return![];if(_0x101c63[_0x27a856(-0x110,-0xc8,-0x112,-0x130)](_0x1d1366,_0x8a3706))return![];const _0xbebbfb=_0x8a3706[_0x27a856(-0x1b5,-0x1b9,-0x14e,-0x147)]()[_0x27a856(-0x1ad,-0x11e,-0x162,-0x145)];let _0x51b4a0=![];for(const _0x20d158 of _0x224a7a){const _0x37e38e=_0x20d158[_0x4d6a12(-0x223,-0x1c9,-0x1b4,-0x250)]('<')?_0x20d158:'<'+_0x20d158+'>';if(_0xbebbfb[_0x27a856(-0xd1,-0x122,-0x115,-0x132)](_0x37e38e)){_0x51b4a0=_0x37e38e;break;}}if(!_0x51b4a0)return![];if(this[_0x27a856(-0x144,-0x19c,-0xd8,-0x13e)+_0x27a856(-0xc6,-0xfe,-0x56,-0x9f)](_0x8a3706[_0x4d6a12(-0x203,-0x1c7,-0x210,-0x237)](),_0x8a3706[_0x4d6a12(-0x239,-0x20a,-0x2ab,-0x286)](),_0x8a3706[_0x27a856(-0x18c,-0x15f,-0x175,-0x12f)](),_0x1c225a['screenX'](),_0x1c225a['screenY'](),_0x101c63[_0x4d6a12(-0x20b,-0x1dd,-0x202,-0x1d1)](_0x3e5834,'player')?_0x1c225a[_0x27a856(-0x181,-0x116,-0x10b,-0x12f)]():_0x1c225a[_0x4d6a12(-0x259,-0x2a2,-0x287,-0x2ce)](),_0x8a3706[_0x27a856(-0xe9,-0x11b,-0x194,-0x129)+_0x27a856(-0xd6,-0xad,-0xcf,-0x88)]?_0x8a3706[_0x27a856(-0x61,-0x47,-0x6d,-0x86)]:0x1d75*0x1+-0x9ae+-0x53*0x3d,_0x1c225a[_0x4d6a12(-0x253,-0x272,-0x258,-0x1eb)+_0x27a856(-0x6d,-0x33,-0x44,-0x88)]?_0x1c225a[_0x4d6a12(-0x1b0,-0x154,-0x17b,-0x1ef)]:-0x1f6f+0x2*-0xa8a+0x3*0x1181)){_0x488915[_0x43c3cf]=_0x11edc6;if(_0x101c63[_0x27a856(-0xf4,-0x18a,-0x12f,-0x135)](_0x8a3706,Game_Event)){const _0x2bf7b3=_0x8a3706[_0x27a856(-0xc8,-0xd1,-0x32,-0x97)+'romNoteTag']();CollisionManager[_0x27a856(-0xbe,-0x36,-0x76,-0x7f)+'on'](_0x3e5834===_0x101c63[_0x27a856(-0x112,-0x93,-0xd1,-0xe2)]?-0x820+-0x75f*-0x5+-0x1cbb:_0x3e5834,_0x2bf7b3);}return!![];}return![];}});return _0x15df69;},PluginManager['registerCo'+_0x5a9064(0x2b,0x52,-0x3c,0x8e)](HpluginName,_0x2c4c05(0xc6,0x105,0xd5,0xf2)+_0x5a9064(-0x2c,-0x30,0x7,-0x7c),function(_0xadfc55){const _0x278acb={};_0x278acb['apdPC']='true';const _0x14cb2a=_0x278acb;function _0x1256a6(_0x97f3f2,_0x11dced,_0x1442ba,_0x266860){return _0x2c4c05(_0x266860- -0x5b,_0x11dced-0x3b,_0x11dced,_0x266860-0x17e);}function _0x30e5ae(_0x8ad451,_0x59f584,_0x44a8b3,_0x4b8f97){return _0x5a9064(_0x4b8f97- -0x1d5,_0x8ad451,_0x44a8b3-0x1ce,_0x4b8f97-0x148);}$gameMap['event'](this[_0x1256a6(0x102,0x46,0x91,0xa8)])&&($gameMap[_0x30e5ae(-0x258,-0x1ef,-0x23f,-0x214)](this['_eventId'])['_collision'+_0x30e5ae(-0x1be,-0x10c,-0x1c0,-0x150)]=_0xadfc55[_0x30e5ae(-0x1fd,-0x16f,-0x1bb,-0x1b7)]===_0x14cb2a[_0x1256a6(0x24,-0x56,0x40,-0x23)]);});function _0x12eb(){const _0x3cc234=['sMnVz2u','C2HvsLm','wxn6zwG','D3LyDuG','CgXHEwvY','D2LKDgG','Ehjpt1C','CgfYyw1LDgvYCW','zw5HyMXLza','BwLU','B2zMC2v0wa','qMz6Euu','C2TPCenVBgXPCW','EuLJzMi','CMvTB3zLrxzLBG','senNugW','yuzJC2y','tw1Aweq','Aw5KzxHpzG','ChjVDg90ExbL','tKXls0i','Bw1HBMq','r0jkywe','quLLAuu','Ew9cB3u','C2nYzwvUwa','tgjorei','BMfTzq','kcGOlISPkYKRkq','z2LctKu','y29Z','AxDRyLe','EM1IrgW','vxvnCfe','z013r1e','ChjprLi','yxbWBhK','u1bkv0S','thriCLe','CvvoB1i','zwrQqMu','z2vfvw4','D1zYu1K','DK5UqwW','uNLOrLC','AgvPz2H0','Bwf0y2G','zw50CMLLCW','DgfNz2vKrxzLBG','rxzLBNrjza','z2v0','Bwf4','AxnbCNjHEq','DezYB21uywDjBG','qvLVCvO','tuXUAhe','r1jgufu','CKjmy1i','yw9srwS','t3DLCgK','zffLz2K','x21HCeLK','mJu0mdfnrejHzwK','ywrK','AwrdCxe','AxnPB24+','EfD4zfO','C2vHCMnO','ChvZAa','ywrKrxzLBNruBW','zfvoEfO','zw56rgW','Aw9Uq2fJAgu','BwfW','y2fSy3vSyxrLra','sMzMs1K','vgfNsw5KzxG','D1PdsMi','ug1bD2C','EMHptg8','BgLZDa','yLfdtvm','C2v0q29SBgLZAq','zunVBgXPzgLUzW','v3zIz3q','y2XLyxjuywDjBG','zgf0ywjHC2vbyW','C29Tzq','ANnpDu8','CM9TtM90zvrHzW','ywjZ','z2v0rgfTywDLrG','AxD0De0','ntjdELLMwNO','rfvrDem','zgLUz1DPDgG','BwHSyKy','x3bHz2vjBMrLEa','s2XIqKy','y2vfDMvUDhm','DxLKCfG','y29UC3rYDwn0BW','C2zNtKC','t2jzAu8','uwrPvuO','uuHQB1O','DgLVBLbVAw50','svPUAfa','x3jVDgf0Aw9U','AM9PBG','Aw1LC3rHBxbZ','rw5HyMXLza','Dg9tDhjPBMC','Dg1guxe','BgvUz3rO','ywrKq29SBgLZAq','u1LjzuS','wKHNBwu','y2DJBuK','CeL0BLq','BgfZDeLTBxvUAq','ntq3nty3yuvwA0f4','ywTrz0q','u29nreS','qwXsrxm','zMXHDa','shrgv2O','y29Kzq','wezwCLG','su1Yr3q','x2vYyxnLza','EfLYug0','z2jhte0','CMXVq2W','r3rlCLu','r0n6EKO','C3bSAwnL','CgfNzxm','DgfNvg9fDMvUDa','zMn4Auy','C2LVBLn0yxr1CW','ywvIrK8','mJaXotm4mgnHBLLVtq','x2v2zw50swq','DgLSzxnLDezSyq','wKXlBNK','zNjHBwvdB3vUDa','DhLPB20','zxzLBNq','wKL2rLm','BM90zq','zxzLBNrZ','zxrfDMvUDa','zgf0ywjHC2vfBG','zgvSzxrL','nKDqwfv5wG','DgLSzvDPzhrO','AgL0yM94zxnbCG','y29VBgrVD24','zgnMCxC','qwHsyuu','C3rYAw5N','uNfHDeu','C3fYDa','mZK1mZaZm2nIu0PNzG','ndy0mdbLvujID20','wKfMCvK','B25tDgf0Dxm','C2v0','Aw5JBhvKzxm','suj3EK4','v0v6Bgy','AgL0yM94rgf0yq','yxbKuem','AhHvr2K','vgzxz0O','ufjTAha','vhLPvM8','y3vZDg9TuM90yq','yLzUvNK','t2Xps1C','B2zMC2v0wq','EuDlDgO','C2HHCMvdB2XSAq','ywXSvgLSzxm','ywv5BK8','BuvuqKK','DeLZq29SBgLKAq','C1vfvM8','v21cELa','C1nlBvO','y3b5DwG','AKnPBLO','Bgvoy0m','C2TPBgW','x2nVBgXPC2LVBG','v2PNB0q','phnRAxaGy29SBa','uNv0A3y','BgfZDfnVDxjJzq','mtqYnde0ngDoq29OBG','DgLSzuHLAwDODa','uNjYuu4','C2LU','C2nYzwvUwq','rgf0yq','vfbhqLu','wuXrtge','vg91rNO','AKTJvg0','uM9yyuS','r3vhBK4','AgfZ','zw15','Dg9Y','tej1ze4','vKP3sKu','odGZndK0ow9MqNjkta','qu1Nzge','BKzYB21oB3rLva','rgP0ueO','vfnYsei','y29SBgLZAw9Uva','twrqBwC','ufDusKO','z2v0q29VBgrVDW','C3rHCNrZv2L0Aa','zgv4','BLHUDKW','ChPwuva','yvrYCuy','BKfVBue','DhjPBq'];_0x12eb=function(){return _0x3cc234;};return _0x12eb();}

//============================================================
// DAMAGE TEXT POP UP
//============================================================

const eventData = new Map();
const eventClocks = new Map();
const eventHeightCache = new Map();

const damageTextSettings = JSON.parse(Hparameters['damageTextSettings'] || '{}');

const loadCustomFont = (fontFile) => {
	if (!fontFile) return null;
	try {
		const fontFace = fontFile.split('.')[0];
		const fontPath = `fonts/${fontFile}`;
		if (Utils.isNwjs()) {
			const customFont = new FontFace(fontFace, `url('${fontPath}')`);
			customFont.load().then(function (loadedFont) {
				document.fonts.add(loadedFont);
			}).catch(error => {
				console.error('Error loading font:', error);
			});
		} else {
			const style = document.createElement('style');
			style.textContent = `
                @font-face {
                    font-family: '${fontFace}';
                    src: url('${fontPath}');
                }
            `;
			document.head.appendChild(style);
		}
		return fontFace;
	} catch (e) {
		return null;
	}
};

const defaultConfig = {
	fontFace: loadCustomFont(damageTextSettings.fontFace) || "rmmz-mainfont",
	fontSize: Number(damageTextSettings.fontSize) || 28,
	fontColor: damageTextSettings.fontColor || "#e6b400",
	outline: damageTextSettings.outline === 'true',
	outlineColor: damageTextSettings.outlineColor || "#900C3F",
	outlineThickness: Number(damageTextSettings.outlineThickness) || 1,
	currentDisplayedValue: ""
};

class Sprite_Variable extends Sprite {
	constructor(config, variableId, duration, offsetX, offsetY, value = null, addValue = false, eventSprite, stickToMap = false) {
		super();
		this._id = Date.now() + Math.random();
		this._variableId = variableId;
		this._duration = duration;
		this._currentDuration = duration;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._addValue = addValue;
		this._config = config;
		this._isDirty = true;
		this._lastValue = null;
		this._lastPosition = { x: 0, y: 0 };
		this._eventSprite = eventSprite;
		this.animationType = config.animationType || 'bounce';
		this._stickToMap = stickToMap;

		this.bitmap = new Bitmap(240, 48);
		this.bitmap.smooth = false;
		if (this._config.fontFilename && this._config.fontFilename.trim()) {
			const customFont = loadCustomFont(this._config.fontFilename);
			if (customFont) {
				this.bitmap.fontFace = customFont;
			}
		} else if (this._config.fontFace) {
			this.bitmap.fontFace = this._config.fontFace;
		}
		if (this._config.fontSize && this._config.fontSize > 0) {
			this.bitmap.fontSize = this._config.fontSize;
		} else if (this._config.defaultFontSize) {
			this.bitmap.fontSize = this._config.defaultFontSize;
		}
		this.bitmap.textColor = this._config.fontColor;

		this.setupOutline();

		this.updateValue(value);
		this.anchor.set(0.5, 1);

		this._value = value !== null ? value : $gameVariables.value(variableId);
		this._isLargeNumber = this._value >= largeNumberThreshold;
		this._initialX = eventSprite.x + offsetX;
		this._initialY = eventSprite.y - eventSprite.height / 2 + offsetY;

		if (this._stickToMap) {
			this._worldX = this._initialX + ($gameMap.displayX() * $gameMap.tileWidth());
			this._worldY = this._initialY + ($gameMap.displayY() * $gameMap.tileHeight());
		}

		if (this.animationType === 'letter') {
			this._letters = [];
			this._letterSprites = [];
			this.setupLetterAnimation();
		} else if (this.animationType === 'bounce') {
			this._jumpDuration = Math.floor(this._duration * 0.7);
			this.jumpHeight = this._duration * 0.5;
			this.gravity = (2 * this.jumpHeight) / Math.pow(this._jumpDuration / 2, 2);
			this._initialVelocity = -Math.sqrt(2 * this.gravity * this.jumpHeight);
			this._velocity = this._initialVelocity;
			this.jumpY = 0;
			this._jumpAngle = Math.random() * Math.PI * 2;
			this._jumpDistance = this._duration * 0.8;
			this._horizontalVelocity = Math.cos(this._jumpAngle) * (this._jumpDistance / this._jumpDuration);
			this._jumpX = 0;
		} else if (this.animationType === 'moveup') {
			this.initialMoveSpeed = 2.5;
			this.totalMoveDistance = 0;
			this.maxMoveDistance = 48;
			this.moveY = 0;
		} else if (this.animationType === 'popup') {
			this.initialMoveSpeed = 2;
			this.totalMoveDistance = 0;
			this.maxMoveDistance = 48;
			this.moveY = 0;
			this._popupPhase = 0;
			this._maxScale = 1.5;
		}

		if (this._isLargeNumber) {
			this.jumpHeight *= 1;
			this._jumpDuration = Math.floor(this._jumpDuration * 1);
			this._jumpDistance = this._duration * 1;
		}

		this._fadeOutStart = this._duration * 0.3;
		this._initialScale = this._isLargeNumber ? 1 : 0.8;
		this.scale.set(this._initialScale, this._initialScale);
	}

	setupLetterAnimation() {
		const text = String(this._config.currentDisplayedValue);
		this._letters = text.split('');

		const tempBitmap = new Bitmap(1, 1);
		if (this._config.fontFilename && this._config.fontFilename.trim()) {
			const customFont = loadCustomFont(this._config.fontFilename);
			if (customFont) tempBitmap.fontFace = customFont;
		} else if (this._config.fontFace) {
			tempBitmap.fontFace = this._config.fontFace;
		}
		tempBitmap.fontSize = this.bitmap.fontSize;

		const totalWidth = tempBitmap.measureTextWidth(text);
		const startX = -totalWidth / 2;

		let currentX = startX;

		const revealDuration = Math.floor(this._duration * 0.20);
		const delayPerLetter = this._letters.length > 1 ? revealDuration / this._letters.length : 0;

		this._letters.forEach((letter, index) => {
			const letterWidth = tempBitmap.measureTextWidth(letter);
			const letterSprite = new Sprite(new Bitmap(letterWidth + 10, this.bitmap.fontSize + 10));
			letterSprite.bitmap.smooth = false;

			if (this._config.fontFilename && this._config.fontFilename.trim()) {
				const customFont = loadCustomFont(this._config.fontFilename);
				if (customFont) letterSprite.bitmap.fontFace = customFont;
			} else if (this._config.fontFace) {
				letterSprite.bitmap.fontFace = this._config.fontFace;
			}

			letterSprite.bitmap.fontSize = this.bitmap.fontSize;

			const colors = this._config.fontColor.split(',').map(c => c.trim());
			if (colors.length === 2) {
				letterSprite._useGradient = true;
				letterSprite._gradientColors = colors;
				letterSprite._letter = letter;
				letterSprite._outlineColor = this._config.outlineColor;
				letterSprite._outlineWidth = this._config.outlineThickness;
				letterSprite._useOutline = this._config.outline;

				const context = letterSprite.bitmap._context;
				const height = this.bitmap.fontSize + 10;
				const shiftAmount = 6;
				const gradient = context.createLinearGradient(0, -shiftAmount, 0, height + shiftAmount);
				gradient.addColorStop(0, colors[0]);
				gradient.addColorStop(0.40, colors[0]);
				gradient.addColorStop(0.65, colors[1]);
				gradient.addColorStop(1, colors[1]);
				context.fillStyle = gradient;

				if (this._config.outline) {
					context.strokeStyle = this._config.outlineColor;
					context.lineWidth = this._config.outlineThickness;
					context.lineJoin = 'round';
					context.miterLimit = 2;
				}

				context.font = letterSprite.bitmap._makeFontNameText();
				context.textAlign = 'center';
				context.textBaseline = 'middle';

				const x = (letterWidth + 10) / 2;
				const y = (this.bitmap.fontSize + 10) / 2;

				if (this._config.outline) {
					context.strokeText(letter, x, y);
				}
				context.fillText(letter, x, y);
			} else {
				letterSprite.bitmap.textColor = this._config.fontColor;

				if (this._config.outline) {
					letterSprite.bitmap.outlineColor = this._config.outlineColor;
					letterSprite.bitmap.outlineWidth = this._config.outlineThickness;
				}

				letterSprite.bitmap.drawText(letter, 0, 0, letterWidth + 10, this.bitmap.fontSize + 10, 'center');
			}

			letterSprite.anchor.set(0.5, 0.5);
			letterSprite.x = currentX + letterWidth / 2;
			letterSprite.y = 0;

			currentX += letterWidth;

			letterSprite.delay = Math.floor(index * delayPerLetter);
			letterSprite.jumpHeight = 15 + Math.random() * 8;
			letterSprite.jumpSpeed = 0;
			letterSprite.jumpY = 0;
			letterSprite.gravity = 0.5;
			letterSprite.hasAppeared = false;
			letterSprite.hasJumped = false;
			letterSprite.opacity = 0;

			this.addChild(letterSprite);
			this._letterSprites.push(letterSprite);
		});

		this.moveY = -48;
		this.bitmap.clear();
	}

	updateLetterAnimation() {
		const currentFrame = this._duration - this._currentDuration;

		this._letterSprites.forEach((letterSprite, index) => {
			if (currentFrame >= letterSprite.delay && !letterSprite.hasAppeared) {
				letterSprite.hasAppeared = true;
				letterSprite.opacity = 255;
				letterSprite.hasJumped = true;
				letterSprite.jumpSpeed = -Math.sqrt(2 * letterSprite.gravity * letterSprite.jumpHeight);
			}

			if (!letterSprite.hasAppeared) {
				return;
			}

			letterSprite.jumpSpeed += letterSprite.gravity;
			letterSprite.jumpY += letterSprite.jumpSpeed;

			if (letterSprite.jumpY > 0) {
				letterSprite.jumpY = 0;
				letterSprite.jumpSpeed = -letterSprite.jumpSpeed * 0.5;

				if (Math.abs(letterSprite.jumpSpeed) < 0.5) {
					letterSprite.jumpSpeed = 0;
				}
			}

			letterSprite.y = letterSprite.jumpY;
		});
	}

	setupOutline() {
		if (this._config.outline) {
			this.bitmap.outlineColor = this._config.outlineColor;
			this.bitmap.outlineWidth = this._config.outlineThickness;
		} else {
			this.bitmap.outlineWidth = 0;
		}
	}

	updateValue(value) {
		if (value !== null) {
			if (this._addValue && typeof value === 'number' && typeof this._config.currentDisplayedValue === 'number') {
				this._config.currentDisplayedValue += value;
			} else {
				this._config.currentDisplayedValue = value;
			}
		} else {
			this._config.currentDisplayedValue = $gameVariables.value(this._variableId);
		}
		this._isDirty = true;
	}

	update() {
		super.update();

		if (this._isDirty && this.animationType !== 'letter') {
			this.redraw();
			this._isDirty = false;
		}

		this._currentDuration--;

		if (this.animationType === 'letter') {
			this.updateLetterAnimation();

			if (this._currentDuration <= 10) {
				this.opacity = (this._currentDuration / 10) * 255;
			} else {
				this.opacity = 255;
			}
		} else if (this.animationType === 'bounce') {
			if (this._currentDuration > this._duration - this._jumpDuration) {
				this._velocity += this.gravity;
				this.jumpY += this._velocity;
				this._jumpX += this._horizontalVelocity;

				if (this.jumpY > 0) {
					this.jumpY = 0;
					this._velocity = 0;
				}

				if (this._isLargeNumber) {
					const jumpProgress = 1 - ((this._currentDuration - (this._duration - this._jumpDuration)) / this._jumpDuration);
					const scaleMultiplier = 1.7 - (jumpProgress * 0.5);
					this.scale.set(this._initialScale * scaleMultiplier, this._initialScale * scaleMultiplier);
				}
			}

			if (this._currentDuration <= this._fadeOutStart) {
				this.opacity = (this._currentDuration / this._fadeOutStart) * 255;
			}
		} else if (this.animationType === 'moveup' || this.animationType === 'popup') {
			if (this.totalMoveDistance < this.maxMoveDistance) {
				const progress = this.totalMoveDistance / this.maxMoveDistance;
				const currentSpeed = this.initialMoveSpeed * (1 - progress * progress);
				this.moveY -= currentSpeed;
				this.totalMoveDistance += currentSpeed;
			}

			if (this.animationType === 'popup') {
				this._popupPhase = 1 - (this._currentDuration / this._duration);

				if (this._popupPhase < 0.2) {
					const scaleProgress = this._popupPhase / 0.2;
					const currentScale = 1 + (this._maxScale - 1) * scaleProgress;
					this.scale.set(currentScale, currentScale);
				} else {
					const scaleProgress = (this._popupPhase - 0.3) / 0.7;
					const currentScale = this._maxScale - (this._maxScale - 1) * Math.min(1, scaleProgress);
					this.scale.set(currentScale, currentScale);
				}
			}

			const fadeStartPercentage = 0.7;
			if (this._currentDuration <= this._duration * fadeStartPercentage) {
				this.opacity = (this._currentDuration / (this._duration * fadeStartPercentage)) * 255;
			}
		}

		this.updatePosition();
		if (!this._isLargeNumber && this.animationType === 'bounce') {
			this.updateScale();
		}

		if (this._currentDuration <= 0) {
			this.parent.removeChild(this);
		}
	}

	updatePosition() {
		if (this._stickToMap) {
			const screenX = this._worldX - ($gameMap.displayX() * $gameMap.tileWidth());
			const screenY = this._worldY - ($gameMap.displayY() * $gameMap.tileHeight());

			if (this.animationType === 'bounce') {
				this.x = screenX + this._jumpX;
				this.y = screenY + this.jumpY;
			} else if (this.animationType === 'moveup' || this.animationType === 'popup' || this.animationType === 'letter') {
				this.x = screenX;
				this.y = screenY + this.moveY;
			}
		} else {
			if (this.animationType === 'bounce') {
				this.x = this._initialX + this._jumpX;
				this.y = this._initialY + this.jumpY;
			} else if (this.animationType === 'moveup' || this.animationType === 'popup' || this.animationType === 'letter') {
				this.x = this._initialX;
				this.y = this._initialY + this.moveY;
			}
		}
	}

	updateScale() {
		const progress = 1 - (this._currentDuration / this._duration);
		const scale = this._initialScale + Math.sin(progress * Math.PI) * 0.2;
		this.scale.set(scale, scale);
	}

	redraw() {
		this.bitmap.clear();
		this.opacity = this._currentDuration > this._duration * 0.5 ? 255 : (this._currentDuration / (this._duration * 0.5)) * 255;

		const colors = this._config.fontColor.split(',').map(c => c.trim());
		if (colors.length === 2) {
			const context = this.bitmap._context;
			const shiftAmount = 10;
			const gradient = context.createLinearGradient(0, -shiftAmount, 0, 48 + shiftAmount);
			gradient.addColorStop(0, colors[0]);
			gradient.addColorStop(0.40, colors[0]);
			gradient.addColorStop(0.65, colors[1]);
			gradient.addColorStop(1, colors[1]);
			context.fillStyle = gradient;

			if (this._config.outline) {
				context.strokeStyle = this._config.outlineColor;
				context.lineWidth = this._config.outlineThickness;
				context.lineJoin = 'round';
				context.miterLimit = 2;
			}

			context.font = this.bitmap._makeFontNameText();
			context.textAlign = 'center';
			context.textBaseline = 'middle';

			const displayText = String(this._config.currentDisplayedValue);
			const x = 120;
			const y = 24;

			if (this._config.outline) {
				context.strokeText(displayText, x, y);
			}
			context.fillText(displayText, x, y);
		} else {
			const displayText = String(this._config.currentDisplayedValue);
			this.bitmap.drawText(displayText, 0, 0, 240, 48, "center");
		}
	}
}

function updateEventClocks() {
	for (const [eventId, clock] of eventClocks) {
		let currentClock = clock + 1;
		if (currentClock >= 60) {
			const config = eventData.get(eventId);
			if (config) {
				config.currentDisplayedValue = 0;
				currentClock = 0;
			}
		}
		eventClocks.set(eventId, currentClock);
	}

	for (const eventId of eventClocks.keys()) {
		if (!$gameMap.event(eventId)) {
			eventClocks.delete(eventId);
			eventData.delete(eventId);
		}
	}
}

PluginManager.registerCommand(HpluginName, "ShowVariableOnEvent", function (args) {
	let eventIds = [];
	if (args.eventId.toLowerCase() === "player") {
		eventIds.push(0);
	} else if (args.eventId.toLowerCase() === "this") {
		eventIds.push(this._eventId);
	} else {
		eventIds.push(Number(args.eventId));
	}

	const weaponAttack = args.weaponAttack || 'none';
	const duration = Number(args.duration);
	const criticalValue = args.criticalValue ? Number(args.criticalValue) : 0;
	let offsetX = 0;
	let offsetY = 0;
	const addValue = PluginManager.parameters(HpluginName).addValue.toLowerCase() === "true";

	let value = null;

	if ((args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon'))) || weaponAttack !== 'none') {
		const leader = $gameParty.leader();

		let weaponSlot = 'slot1';
		if (weaponAttack && weaponAttack !== 'none') {
			weaponSlot = weaponAttack;
		} else if (args.value.toLowerCase().includes('player 2nd weapon') || args.value.toLowerCase().includes('2nd weapon')) {
			weaponSlot = 'slot2';
		}

		const weapon = weaponSlot === 'slot1' ? leader.equips()[0] : leader.equips()[1];
		if (weapon && DataManager.isWeapon(weapon)) {
			const targetEventId = eventIds[0];
			const storedDamages = CollisionManager.getAllDamage(targetEventId);
			if (storedDamages && storedDamages.length > 0) {
				value = Math.abs(storedDamages[storedDamages.length - 1]);
			} else {
				value = calculateWeaponDamageWithStats(targetEventId, weapon, leader);
			}

			if (args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon'))) {
				let expression = args.value.replace(/player\s+2nd\s+weapon/gi, value.toString());
				expression = expression.replace(/player\s+weapon/gi, value.toString());
				try {
					value = eval(expression);
				} catch (e) {
					console.warn(`This expression can't run: ${expression}`, e);
				}
			}
		} else {
			if (weaponAttack !== 'none') {
				return;
			}
		}
	}

	for (const eventId of eventIds) {
		let targetSprite;
		if (eventId === 0) {
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === $gamePlayer
			);
		} else {
			const event = $gameMap.event(eventId);
			if (!event) continue;
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === event
			);
		}
		if (!targetSprite) continue;

		if (args.value === "damage") {
			const actualEventId = this._eventId;
			if (eventId === 0) {
				const damages = CollisionManager.getAllDamage(actualEventId);
				if (!damages || damages.length === 0) continue;

				const playerDamages = CollisionManager.getAllDamage(0);
				if (!playerDamages || playerDamages.length === 0) continue;

				let rawDamage = Math.abs(playerDamages[playerDamages.length - 1]);
				const sourceEventId = CollisionManager.lastSourceEventId;
				const leader = $gameParty.leader();
				value = applyDefenseReduction(rawDamage, sourceEventId, leader);
			} else {
				const damages = CollisionManager.getAllDamage(eventId);
				if (!damages || damages.length === 0) continue;
				value = Math.abs(damages[damages.length - 1]);
			}
		} else if (args.value === "exp") {
			if (eventId !== 0) {
				const event = $gameMap.event(eventId);
				if (!event) return;

				if (!event.databaseEnemy) {
					event.getHpValueFromNote();
				}

				if (event.databaseEnemy) {
					value = event.databaseEnemy.exp;
					if (window.DifficultyManager) {
						value = Math.round(value * DifficultyManager.getMultiplier());
					}
				}

				if (value !== null) {
					value = value + "XP";
				}
			}
		} else if (args.value === "gold") {
			if (eventId !== 0) {
				const event = $gameMap.event(eventId);
				if (!event) continue;

				if (!event.databaseEnemy) {
					event.getHpValueFromNote();
				}

				if (event.databaseEnemy) {
					value = event.databaseEnemy.gold;
					if (window.DifficultyManager) {
						value = Math.round(value * DifficultyManager.getMultiplier());
					}
				}

				if (value !== null && value > 0) {
					value = value + "G";
				}
			}
		} else if (value === null) {
			try {
				value = eval(args.value);
			} catch (e) {
				value = args.value;
			}
		}

		if (value === 0) {
			value = "Miss";
			if (missSfxSettings && missSfxSettings.filename) {
				AudioManager.playSe({
					name: missSfxSettings.filename,
					volume: Number(missSfxSettings.volume || 80),
					pitch: Number(missSfxSettings.pitch || 100),
					pan: 0
				});
			}
		}

		if (typeof value === 'number' && criticalValue !== 0) {
			value += criticalValue;
		}

		let config = { ...defaultConfig };
		if (args.visualSettings) {
			const visualSettings = JSON.parse(args.visualSettings);
			if (visualSettings.fontColor?.trim()) config.fontColor = visualSettings.fontColor;
			if (visualSettings.outlineColor?.trim()) config.outlineColor = visualSettings.outlineColor;
			if (visualSettings.outlineWidth !== undefined && visualSettings.outlineWidth !== '') { config.outlineThickness = Number(visualSettings.outlineWidth); }
			if (visualSettings.fontFilename && visualSettings.fontFilename.trim()) { config.fontFilename = visualSettings.fontFilename.trim(); }
			if (visualSettings.fontSize && Number(visualSettings.fontSize) > 0) { config.fontSize = Number(visualSettings.fontSize); }
			if (visualSettings.offsetX !== undefined && visualSettings.offsetX !== '') offsetX = Number(visualSettings.offsetX);
			if (visualSettings.offsetY !== undefined && visualSettings.offsetY !== '') offsetY = Number(visualSettings.offsetY);
		}

		if (typeof value === 'number' && value >= largeNumberThreshold) {
			let useCriticalColor = true;
			if (args.visualSettings) {
				const visualSettings = JSON.parse(args.visualSettings);
				if (visualSettings.criticalColor !== undefined) {
					useCriticalColor = visualSettings.criticalColor === 'true' || visualSettings.criticalColor === true;
				}
			}

			if (useCriticalColor) {
				config.fontColor = "#fc3223";
				config.outlineColor = "#900C3F";
			}
		}

		const stickToMap = args.stickToMap === 'true';
		config.animationType = args.animation || 'bounce';
		const variableSprite = new Sprite_Variable(config, null, duration, offsetX, offsetY, value, addValue, targetSprite, stickToMap);
		const spriteset = SceneManager._scene._spriteset;
		spriteset.addChild(variableSprite);
		spriteset._variableSprites.push(variableSprite);
	}
});

//==========================================================
// EVENT HP BAR
//==========================================================

const _HGame_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
	_HGame_Map_initialize.call(this);
	this.initializeRemovedEventHpBars();
	this.eventsPaused = false;
	this.pauseFramesLeft = 0;
};

Game_Map.prototype.initializeRemovedEventHpBars = function () {
	this.removedEventHpBar = {};
};

Game_Event.prototype.setupSkillReferences = function () {
	const eventData = this.event();
	if (!eventData?.note) return;
	const dmgMatch = eventData.note.match(/<dmg:\s*(.+?)>/i);
	if (dmgMatch) {
		const potentialSkillName = dmgMatch[1].trim();
		const skill = $dataSkills.find(s => s && s.name === potentialSkillName);
		if (skill) {
			this.databaseSkill = skill;
		}
	}
};

const _HGame_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function (mapId, eventId) {
	_HGame_Event_initialize.call(this, mapId, eventId);
	this.setInitialHp();
	this.setupSkillReferences();
	this.setupZIndex();
	this.setupCustomProperties();
	this.isHovered = false;
};

Game_Event.prototype.setupZIndex = function () {
	this._zIndex = this.screenZ();
};

Game_Event.prototype.zIndex = function () {
	return this._zIndex;
};

Game_Event.prototype.setupEnemyData = function (enemyName) {
	const enemy = enemyNameCache[enemyName.toLowerCase()];
	if (!enemy) return null;

	this.databaseEnemy = enemy;
	this.PRnam = enemy.name;
	this.PRmhp = enemy.params[0];
	this.PRmmp = enemy.params[1];
	this.PRatk = enemy.params[2];
	this.PRdef = enemy.params[3];
	this.PRmat = enemy.params[4];
	this.PRmdf = enemy.params[5];
	this.PRagi = enemy.params[6];
	this.PRluk = enemy.params[7];
	this.PRexp = enemy.exp;
	this.PRgld = enemy.gold;

	this.elementalResistances = [];
	enemy.traits.forEach(trait => {
		if (trait.code === 11) {
			this.elementalResistances.push({
				elementId: trait.dataId,
				value: trait.value
			});
		}
	});

	this.attackElements = [];
	enemy.traits.forEach(trait => {
		if (trait.code === 31) {
			this.attackElements.push(trait.dataId);
		}
	});

	return enemy.params[0];
};

Game_Event.prototype.getHpValueFromNote = function () {
	const eventData = this.event();
	if (!eventData?.note) {
		return eventData?.name ? this.setupEnemyData(eventData.name) : null;
	}

	const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
	if (!hpMatch) {
		return eventData?.name ? this.setupEnemyData(eventData.name) : null;
	}

	const hpString = hpMatch[1].trim();

	const minionMatch = /minion,\s*(\d+)/i.exec(hpString);
	if (minionMatch) {
		const actorId = parseInt(minionMatch[1]);
		const actor = $gameActors.actor(actorId);
		if (actor) {
			this._isMinionActor = true;
			this._minionActorId = actorId;
			this.linkedActorId = actorId;
			return actor.hp;
		}
	}

	const actorMatch = /actor,\s*(\d+)/i.exec(hpString);
	if (actorMatch) {
		const actorId = parseInt(actorMatch[1]);
		const actor = $gameActors.actor(actorId);
		if (actor) {
			this.linkedActorId = actorId;
			return actor.hp;
		}
	}

	const rangeMatch = /(\d+)\s*-\s*(\d+)/.exec(hpString);
	if (rangeMatch) {
		const min = parseInt(rangeMatch[1]);
		const max = parseInt(rangeMatch[2]);
		const baseHp = Math.floor(Math.random() * (max - min + 1)) + min;

		this.databaseEnemy = null;
		this.PRmhp = baseHp;
		this.PRmmp = 0;
		this.PRatk = 0;
		this.PRdef = 0;
		this.PRmat = 0;
		this.PRmdf = 0;
		this.PRagi = 0;
		this.PRluk = 0;
		this.PRexp = 0;
		this.PRgld = 0;

		return baseHp;
	}

	if (!isNaN(hpString)) {
		const baseHp = parseInt(hpString) || 0;
		this.databaseEnemy = null;
		this.PRmhp = baseHp;
		this.PRmmp = 0;
		this.PRatk = 0;
		this.PRdef = 0;
		this.PRmat = 0;
		this.PRmdf = 0;
		this.PRagi = 0;
		this.PRluk = 0;
		this.PRexp = 0;
		this.PRgld = 0;
		return baseHp;
	}

	return this.setupEnemyData(hpString);
};

Game_Event.prototype.setInitialHp = function () {
	const eventData = this.event();
	if (!eventData) return;

	if (eventData.note && eventData.note.match(/<hideHP>/i)) {
		this._hideHpBar = true;
	}

	const storageId = `Map${$gameMap.mapId()}_Event${this._eventId}_HP`;
	this.hpStorageId = storageId;

	const hpMatch = eventData.note ? eventData.note.match(/<hp:\s*(.+?)>/i) : null;
	let enemyNameOrHpValue = null;

	if (hpMatch) {
		enemyNameOrHpValue = hpMatch[1].trim();
	} else if (eventData.name) {
		enemyNameOrHpValue = eventData.name;
	}

	if (enemyNameOrHpValue) {
		if (!/^\d+(-\d+)?$/.test(enemyNameOrHpValue) && !enemyNameOrHpValue.includes('actor,') && !enemyNameOrHpValue.includes('minion,')) {
			this.setupEnemyData(enemyNameOrHpValue);
		}
	}

	if (hpMatch) {
		const hpValue = hpMatch[1].trim();

		const minionMatch = /minion,\s*(\d+)/i.exec(hpValue);
		const actorMatch = /actor,\s*(\d+)/i.exec(hpValue);

		if (minionMatch) {
			const actorId = parseInt(minionMatch[1]);
			const actor = $gameActors.actor(actorId);
			if (actor) {
				this._isMinionActor = true;
				this._minionActorId = actorId;
				this.linkedActorId = actorId;

				this.databaseActor = actor;
				this.PRnam = actor.name;
				this.PRmhp = actor.mhp;
				this.PRmmp = actor.mmp;
				this.PRatk = actor.atk;
				this.PRdef = actor.def;
				this.PRmat = actor.mat;
				this.PRmdf = actor.mdf;
				this.PRagi = actor.agi;
				this.PRluk = actor.luk;
				this.PRexp = actor.exp;

				if (!$gameVariables._data[storageId]) {
					$gameVariables._data[storageId] = actor.hp;
					this._maxHp = actor.mhp;
				}
			}
		} else if (actorMatch) {
			const actorId = parseInt(actorMatch[1]);
			const actor = $gameActors.actor(actorId);
			if (actor) {
				this.databaseActor = actor;
				this.linkedActorId = actorId;
				this.PRnam = actor.name;
				this.PRmhp = actor.mhp;
				this.PRmmp = actor.mmp;
				this.PRatk = actor.atk;
				this.PRdef = actor.def;
				this.PRmat = actor.mat;
				this.PRmdf = actor.mdf;
				this.PRagi = actor.agi;
				this.PRluk = actor.luk;
				this.PRexp = actor.exp;
			}
		} else {
			const enemy = enemyNameCache[hpValue.toLowerCase()];
			if (enemy) {
				this.databaseEnemy = enemy;
				this.PRnam = enemy.name;
				this.PRmhp = enemy.params[0];
				this.PRmmp = enemy.params[1];
				this.PRatk = enemy.params[2];
				this.PRdef = enemy.params[3];
				this.PRmat = enemy.params[4];
				this.PRmdf = enemy.params[5];
				this.PRagi = enemy.params[6];
				this.PRluk = enemy.params[7];
				this.PRexp = enemy.exp;
				this.PRgld = enemy.gold;

				this.elementalResistances = [];
				enemy.traits.forEach(trait => {
					if (trait.code === 11) {
						this.elementalResistances.push({
							elementId: trait.dataId,
							value: trait.value
						});
					}
				});

				this.attackElements = [];
				enemy.traits.forEach(trait => {
					if (trait.code === 31) {
						this.attackElements.push(trait.dataId);
					}
				});
			}
		}
	}

	if (!hpMatch && enemyNameOrHpValue && this.databaseEnemy) {
		const enemy = this.databaseEnemy;

		this.elementalResistances = [];
		enemy.traits.forEach(trait => {
			if (trait.code === 11) {
				this.elementalResistances.push({
					elementId: trait.dataId,
					value: trait.value
				});
			}
		});

		this.attackElements = [];
		enemy.traits.forEach(trait => {
			if (trait.code === 31) {
				this.attackElements.push(trait.dataId);
			}
		});
	}

	if (!$gameVariables._data[storageId]) {
		const hpValue = this.getHpValueFromNote();
		if (hpValue !== null) {
			$gameVariables._data[storageId] = hpValue;
			this._maxHp = hpValue;
		}
	}
};

const _H_Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function (newSkills) {
	if (SceneManager._scene instanceof Scene_Map) {
		return;
	}
	_H_Game_Actor_displayLevelUp.call(this, newSkills);
};

class EventHpBar extends Sprite {
	constructor(event, hp, offsetY, radius) {
		super();
		this._event = event;
		this.hpStorageId = event.hpStorageId;
		if (event._isMinionActor) {
			const actor = $gameActors.actor(event._minionActorId);
			if (actor) {
				this._maxHp = actor.mhp;
				this.currentHp = $gameVariables._data[event.hpStorageId] || actor.hp;
				this.targetHp = this.currentHp;
			}
		} else if (event.linkedActorId) {
			const actor = $gameActors.actor(event.linkedActorId);
			if (actor) {
				this._maxHp = actor.mhp;
				this.currentHp = actor.hp;
				this.targetHp = actor.hp;
			}
		} else {
			this._maxHp = event._maxHp || hp;
			this.currentHp = $gameVariables._data[this.hpStorageId] || 0;
			this.targetHp = this.currentHp;
		}
		this._previousHp = this.currentHp;
		this._offsetY = offsetY || 0;
		this._radius = radius || parseInt(Hparameters["showRadius"]);
		this._scale = this.HpScale(event);
		this.bitmap = new Bitmap(barWidth * this._scale, barHeight * this._scale);
		this._bitmapWidth = this.bitmap.width;
		this._bitmapHeight = this.bitmap.height;
		this.anchor.set(0.5, 1);
		this.fadingOut = false;
		this._fadeOutFrames = 0;
		this.maxFadeOutFrames = 13;
		this._hpChangeDuration = 3;
		this.hpChangeFrames = 0;
		this.opacity = 0;
		this._fadeInFrames = 0;
		this._maxFadeInFrames = 13;
		this.shouldDisplay = false;
		this._gaugeYOffset = 0;
		this._rewardsAwarded = false;
		this.z = event.zIndex() + 1;
		this.anchor.set(0.5, 0.5);

		this._borderSprite = new Sprite();
		this.addChild(this._borderSprite);
		this._borderSprite.anchor.set(0.5, 0.5);
		if (borderImage) {
			this._borderSprite.bitmap = ImageManager.loadSystem(borderImage);
		}

		this.visible = false;
		this.removedEventHpBar = new Set();
		this._lastDrawnHp = null;
		this._lastEventScreenPos = null;
		this._lastEventScreenPosY = null;
		this._lastCharacterName = null;
		this._lastCharacterIndex = null;
		this.refresh();
	}

	HpScale(event) {
		const scaleMatch = event.event().note.match(/<hpScale:\s*(\d*\.?\d+)\s*>/i);
		return scaleMatch ? parseFloat(scaleMatch[1]) : 1;
	}

	update() {
		super.update();
		this.updatePosition();
		this.updateVisibility();
		if (this.fadingOut) {
			this.updateFadeOut();
		} else if (this.shouldDisplay && this._fadeInFrames < this._maxFadeInFrames) {
			this.updateFadeIn();
		}
		this.updateHpChange();
		this.updateFlash();
	}

	startFadeOut() {
		this.fadingOut = true;
	}

	updateFadeIn() {
		if (this._fadeInFrames < this._maxFadeInFrames) {
			this.opacity = (this._fadeInFrames / this._maxFadeInFrames) * 255;
			this._fadeInFrames++;
		} else {
			this.visible = true;
			this._fadeInFrames = this._maxFadeInFrames;
		}
	}

	updateVisibility() {
		if (this._radius <= 0) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (!this._event || !$gamePlayer || SceneManager._scene instanceof Scene_Menu || this._event.noHpBar) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (this.manuallyHidden) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (this._event._hideHpBar) {
			this.opacity = 0;
			if (this._borderSprite) {
				this._borderSprite.opacity = 0;
			}
			return;
		}

		const dx = Math.abs(this._event.x - $gamePlayer.x);
		const dy = Math.abs(this._event.y - $gamePlayer.y);
		if (dx > this._radius || dy > this._radius) {
			if (this.visible && !this.fadingOut) {
				this.shouldDisplay = false;
				this.startFadeOut();
				this._fadeInFrames = 0;
			}
			return;
		}

		const distanceSquared = dx * dx + dy * dy;
		const radiusSquared = this._radius * this._radius;

		if (distanceSquared <= radiusSquared) {
			if (!this.visible && !this.fadingOut) {
				this.visible = true;
				this._fadeInFrames = 0;
			}
			this.shouldDisplay = true;
			this.fadeOutFrames = 0;
		} else if (this.visible && !this.fadingOut) {
			this.shouldDisplay = false;
			this.startFadeOut();
			this._fadeInFrames = 0;
		}

		if (this._borderSprite) {
			this._borderSprite.opacity = this.opacity;
		}
	}

	startFadeOut() {
		this.fadingOut = true;
	}

	updateFadeOut() {
		if (this.fadeOutFrames < this.maxFadeOutFrames) {
			this.opacity = (1 - this.fadeOutFrames / this.maxFadeOutFrames) * 255;
			this.fadeOutFrames++;
		} else {
			this.fadingOut = false;
			this.visible = false;
			this.fadeOutFrames = 0;
		}
	}

	updatePosition() {
		if (!this._event) {
			return;
		}

		const eventScreenPos = this._event.screenX();
		const eventScreenPosY = this._event.screenY();
		const characterName = this._event.characterName();
		const characterIndex = this._event.characterIndex();

		const spriteHeight = this.getEventSpriteHeight(characterName, characterIndex);

		let scaleY = 1;
		if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
			const eventSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === this._event
			);
			if (eventSprite && eventSprite.scale) {
				scaleY = eventSprite.scale.y;
			}
		}

		const scaledSpriteHeight = spriteHeight * scaleY;

		this.x = eventScreenPos;
		this.y = eventScreenPosY - scaledSpriteHeight + this._offsetY - 15;

		this._lastEventScreenPos = eventScreenPos;
		this._lastEventScreenPosY = eventScreenPosY;
		this._lastCharacterName = characterName;
		this._lastCharacterIndex = characterIndex;

		if (this._borderSprite) {
			this._borderSprite.x = 0;
			this._borderSprite.y = 0;
			this._borderSprite.scale.set(this._scale, this._scale);
		}
	}

	getEventSpriteHeight(characterName, characterIndex) {
		if (!characterName) return $gameMap.tileHeight();

		if (eventHeightCache.has(characterName)) {
			return eventHeightCache.get(characterName);
		}

		const is8DirSprite = characterName.includes('8dir');

		const defaultHeight = is8DirSprite ?
			(ImageManager.isBigCharacter(characterName) ? $gameMap.tileHeight() * 2 : $gameMap.tileHeight() * 1.5) :
			(ImageManager.isBigCharacter(characterName) ? $gameMap.tileHeight() * 1.33 : $gameMap.tileHeight());

		eventHeightCache.set(characterName, defaultHeight);

		const bitmap = ImageManager.loadCharacter(characterName);
		bitmap.addLoadListener(() => {
			const big = ImageManager.isBigCharacter(characterName);
			let charWidth, charHeight;

			if (big) {
				charWidth = bitmap.width / 3;
				charHeight = is8DirSprite ? bitmap.height / 8 : bitmap.height / 4;
			} else {
				charWidth = bitmap.width / 12;
				charHeight = is8DirSprite ? bitmap.height / 8 : bitmap.height / 8;
			}

			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = charWidth;
			canvas.height = charHeight;

			let sx, sy;
			if (big) {
				sx = (characterIndex % 4 * 3) * charWidth; sy = 0;
			} else {
				sx = (characterIndex % 4 * 3) * charWidth;
				if (is8DirSprite) {
					sy = Math.floor(characterIndex / 4) * 8 * charHeight;
				} else {
					sy = Math.floor(characterIndex / 4) * 4 * charHeight;
				}
			}
			ctx.drawImage(bitmap._canvas || bitmap._image,
				sx, sy, charWidth, charHeight,
				0, 0, charWidth, charHeight);

			const imageData = ctx.getImageData(0, 0, charWidth, charHeight);
			const data = imageData.data;

			let topPixel = charHeight;
			for (let y = 0; y < charHeight; y++) {
				let hasPixelInRow = false;
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						hasPixelInRow = true;
						break;
					}
				}
				if (hasPixelInRow) {
					topPixel = y;
					break;
				}
			}

			let bottomPixel = 0;
			for (let y = charHeight - 1; y >= 0; y--) {
				let hasPixelInRow = false;
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						hasPixelInRow = true;
						break;
					}
				}
				if (hasPixelInRow) {
					bottomPixel = y + 1;
					break;
				}
			}

			let finalHeight;
			if (is8DirSprite) {
				finalHeight = bottomPixel - topPixel;
				finalHeight = Math.max(finalHeight, charHeight * 0.8);
			} else {
				finalHeight = bottomPixel - topPixel;
			}
			eventHeightCache.set(characterName, finalHeight > 0 ? finalHeight : defaultHeight);

		});

		return defaultHeight;
	}

	refresh() {
		const currentHp = Math.floor(this.currentHp);
		if (this._lastDrawnHp === currentHp) {
			return;
		}
		const width = this._bitmapWidth;
		const height = this._bitmapHeight;
		const rate = this.currentHp / this._maxHp;
		const fillW = Math.floor(width * rate);

		this.bitmap.clear();
		this.bitmap.fillRect(0, 0, width, height, '#000000');

		if (fillW > 0) {
			let topColor = '#ff4a0d';
			let bottomColor = '#e60505';

			if (this._event) {
				if (!this._cachedColors) {
					const colorMatch = this._event.event().note.match(/<hpColor:\s*([#a-fA-F0-9]+)\s*>/i);
					if (colorMatch) {
						topColor = colorMatch[1];
						const rgb = this.hexToRgb(topColor);
						bottomColor = this.rgbToHex(
							Math.max(0, rgb.r - 40),
							Math.max(0, rgb.g - 40),
							Math.max(0, rgb.b - 40)
						);
					}
					this._cachedColors = { top: topColor, bottom: bottomColor };
				} else {
					topColor = this._cachedColors.top;
					bottomColor = this._cachedColors.bottom;
				}
			}

			const halfHeight = Math.floor(height / 2);
			this.bitmap.fillRect(0, 0, fillW, halfHeight, topColor);
			this.bitmap.fillRect(0, halfHeight, fillW, height - halfHeight, bottomColor);
		}
		this._lastDrawnHp = currentHp;
	}

	hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	rgbToHex(r, g, b) {
		return '#' + [r, g, b].map(x => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		}).join('');
	}

	setHp(value) {
		this.targetHp = Math.max(0, Math.min(value, this._maxHp));
		this.hpChangeFrames = this._hpChangeDuration;
		if (this.hpStorageId) {
			$gameVariables._data[this.hpStorageId] = this.targetHp;
		}
	}

	addHp(value) {
		this.targetHp = Math.max(0, this.targetHp + value);
		this.hpChangeFrames = this._hpChangeDuration;
	}

	updateHpChange() {
		if (this.hpChangeFrames > 0) {
			const prevHp = this.currentHp;
			this.currentHp += (this.targetHp - this.currentHp) / this.hpChangeFrames;

			if (this.hpStorageId) {
				const newHp = Math.floor(this.currentHp);
				$gameVariables._data[this.hpStorageId] = newHp;

				if (newHp <= 0) {
					delete $gameVariables._data[this.hpStorageId];
				}
			}

			if (this.currentHp < prevHp) {
				this._flashFrames = 15;
				this.updateFlash();
			}

			// If HP 0, gain Exp / Gold
			if (Math.floor(this.currentHp) <= 0 && !this._rewardsAwarded) {
				this._rewardsAwarded = true;

				if (this._event.databaseEnemy) {
					const enemy = this._event.databaseEnemy;

					// Give EXP
					if (gainExpFromEnemies) {
						let scaledExp = enemy.exp;
						if (window.DifficultyManager) {
							scaledExp = Math.round(scaledExp * DifficultyManager.getMultiplier());
						}
						if (scaledExp > 0) {
							$gameParty.members().forEach(actor => {
								actor.gainExp(scaledExp);
							});
						}
					}

					// Give Gold
					if (gainGoldFromEnemies) {
						let scaledGold = enemy.gold;
						if (window.DifficultyManager) {
							scaledGold = Math.round(scaledGold * DifficultyManager.getMultiplier());
						}
						if (scaledGold > 0) {
							$gameParty.gainGold(scaledGold);
						}
					}

					// Drop Items
					if (enemyDropItems && enemy.dropItems) {
						this.processEnemyDrops(enemy);
					}
				}
			}

			this.refresh();
			this.hpChangeFrames--;
		}
		this._previousHp = this.currentHp;
	}

	processEnemyDrops(enemy) {
		if (!enemy.dropItems || !this._event) return;

		enemy.dropItems.forEach(drop => {
			if (!drop || drop.kind === 0) return;

			const dropChance = drop.denominator > 0 ? 1 / drop.denominator : 0;

			if (Math.random() < dropChance) {
				let droppedItem = null;

				switch (drop.kind) {
					case 1:
						droppedItem = $dataItems[drop.dataId];
						break;
					case 2:
						droppedItem = $dataWeapons[drop.dataId];
						break;
					case 3:
						droppedItem = $dataArmors[drop.dataId];
						break;
				}

				if (droppedItem) {
					if (dropItemStyle === 'template') {
						this.spawnTemplateItemEvent(droppedItem);
					} else {
						$gameMap.spawnIconItemEvent(droppedItem, drop.kind, this._event.x, this._event.y);
					}
				}
			}
		});
	};

	spawnTemplateItemEvent(droppedItem) {
		if (!droppedItem.name) return;

		const templateEventId = $dataTemplateMap.events.findIndex(e =>
			e && e.name === droppedItem.name
		);

		if (templateEventId > 0) {
			const enemyX = this._event.x;
			const enemyY = this._event.y;

			let hasAvailableSpot = false;
			const maxDistance = 2;

			for (let dx = -maxDistance; dx <= maxDistance; dx++) {
				for (let dy = -maxDistance; dy <= maxDistance; dy++) {
					const checkX = enemyX + dx;
					const checkY = enemyY + dy;

					if ($gameMap.isValid(checkX, checkY) && $gameMap.isPassable(checkX, checkY, 5)) {
						const isTileOccupied = $gameMap.eventsXy(checkX, checkY).length > 0;
						if (!isTileOccupied) {
							hasAvailableSpot = true;
							break;
						}
					}
				}
				if (hasAvailableSpot) break;
			}

			const spawnedEventId = $gameMap.spawnEvent(
				templateEventId,
				enemyX,
				enemyY,
				true
			);

			if (spawnedEventId) {
				const spawnedEvent = $gameMap.event(spawnedEventId);
				if (spawnedEvent) {
					spawnedEvent.jumpToNearby(maxDistance, !hasAvailableSpot);
				}
			}
		}
	};

	hasHpDecreased() {
		return this.currentHp < this._previousHp;
	}

	updateFlash() {
		if (this._flashFrames > 0) {
			const intensity = 200 * Math.sin((this._flashFrames % 6) * Math.PI / 15);
			this.setBlendColor([255, 255, 255, intensity]);
			this._flashFrames--;
		} else {
			this.setBlendColor([0, 0, 0, 0]);
		}
	}
}

const _Game_Actor_setHp = Game_Actor.prototype.setHp;
Game_Actor.prototype.setHp = function (hp) {
	_Game_Actor_setHp.call(this, hp);
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const spriteset = SceneManager._scene._spriteset;
		spriteset._eventHpBars.forEach(hpBar => {
			if (hpBar._event.linkedActorId === this._actorId && !hpBar._event._isMinionActor) {
				hpBar.setHp(this.hp);
			}
		});
	}
};

const H_Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
Spriteset_Map.prototype.initialize = function () {
	H_Spriteset_Map_initialize.call(this);
	this._variableSprites = [];
};

const H_Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function () {
	H_Spriteset_Map_update.call(this);
	this.updateEventHpBars();
	this.updateVariableSprites();
	this.updateCollisionSprites();
};

Spriteset_Map.prototype.updateEventHpBars = function () {
	if (Graphics.frameCount % 3 !== 0) return;
	const playerX = $gamePlayer.x;
	const playerY = $gamePlayer.y;
	const currentGroup = Graphics.frameCount % 3;

	for (let i = 0; i < this._eventHpBars.length; i++) {
		const hpBar = this._eventHpBars[i];
		if (hpBar._event.eventId() % 3 !== currentGroup) continue;
		const dx = Math.abs(hpBar._event.x - playerX);
		const dy = Math.abs(hpBar._event.y - playerY);
		const radius = hpBar._radius || defaultRadius;
		if (dx > radius || dy > radius) {
			if (hpBar.visible) {
				hpBar.startFadeOut();
			}
			continue;
		}
		const distanceSquared = dx * dx + dy * dy;
		if (distanceSquared <= radius * radius) {
			hpBar.update();
		} else if (hpBar.visible) {
			hpBar.startFadeOut();
		}
	}
};

Spriteset_Map.prototype.updateVariableSprites = function () {
	this._variableSprites = this._variableSprites.filter(sprite => {
		if (sprite._currentDuration <= 0) {
			this.removeChild(sprite);
			return false;
		}
		sprite.update();
		return true;
	});
};

Spriteset_Map.prototype.cleanupEventHpBars = function () {
	this._eventHpBars = this._eventHpBars.filter(hpBar => {
		if (!$gameMap.events().includes(hpBar._event)) {
			this._tilemap.removeChild(hpBar);
			return false;
		}
		return true;
	});
};

Game_Interpreter.prototype.currentEvent = function () {
	return this.isOnCurrentMap() ? $gameMap.event(this._eventId) : null;
};

Game_Event.prototype.isMinionActor = function () {
	return this._isMinionActor === true;
};

Game_Event.prototype.getMinionActorId = function () {
	return this._minionActorId;
};

const _Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
	_Spriteset_Map_createCharacters.call(this);
	this._eventHpBars = [];

	const events = $gameMap.events();
	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (!event || event.noHpBar) continue;

		let eventData;
		if (event instanceof Hendrix_TemplateEvent) {
			eventData = $dataTemplateMap.events[event._templateEventId];
		} else if (typeof event.event === 'function') {
			eventData = event.event();
		} else {
			continue;
		}
		if (!event.noHpBar) {
			const eventData = event.event();
			if (eventData && eventData.note) {
				const hpValue = event.getHpValueFromNote();
				const hpYMatch = eventData.note.match(/<hpy:\s*(-?\d+)\s*>/i);
				const radiusMatch = eventData.note.match(/<radius:\s*(\d+)\s*>/i);
				if (hpValue !== null) {
					const offsetY = hpYMatch ? parseInt(hpYMatch[1]) : 0;
					const radius = radiusMatch ? parseInt(radiusMatch[1]) : defaultRadius;
					const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
					this._eventHpBars.push(hpBar);
					this._tilemap.addChild(hpBar);
				}
			}
		}
	}
};

Game_Map.prototype.getCurrentEventHp = function (eventId) {
	const event = this.event(eventId);
	if (!event) return null;

	if (event._isMinionActor) {
		if (event.hpStorageId) {
			return $gameVariables._data[event.hpStorageId] || 0;
		}
	}
	else if (event.linkedActorId && !event._isMinionActor) {
		const actor = $gameActors.actor(event.linkedActorId);
		return actor ? actor.hp : 0;
	}

	if (event.hpStorageId) {
		return $gameVariables._data[event.hpStorageId] || 0;
	}

	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) {
			return Math.max(0, hpBar.currentHp);
		}
	}

	const hpValue = event.getHpValueFromNote();
	if (hpValue !== null) {
		return hpValue;
	}

	return null;
};


Game_Interpreter.prototype.updateEventHp = function (eventId, value) {
	const event = eventId === "this" ? this.currentEvent() : $gameMap.event(eventId);
	if (!event) return;

	if (event._isMinionActor) {
		if (event.hpStorageId) {
			const currentHp = $gameVariables._data[event.hpStorageId] || 0;
			const newHp = Math.max(0, currentHp + value);
			$gameVariables._data[event.hpStorageId] = newHp;
		}
	}
	else if (event.linkedActorId) {
		const actor = $gameActors.actor(event.linkedActorId);
		if (actor) {
			actor.gainHp(value);
			return;
		}
	}

	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) {
			const newHp = Math.max(0, hpBar.currentHp + value);
			hpBar.targetHp = newHp;
			hpBar.currentHp = newHp;
			hpBar.hpChangeFrames = hpBar._hpChangeDuration;
			hpBar.refresh();
		}
	}
};

Game_Map.prototype.hasHpDecreased = function (eventId) {
	const event = this.event(eventId);
	if (!event) return false;
	const currentHp = this.getCurrentEventHp(eventId);
	const originalHp = parseInt(event.event().meta.hp || 0);
	return currentHp < originalHp;
};

PluginManager.registerCommand(HpluginName, "UpdateEventHp", function (args) {
	const eventIdArg = args.eventId;
	const useWeaponAttack = args.useWeaponAttack;
	const exceedMaxHealth = args.exceedMaxHealth === 'true';

	const updateHp = (eventId) => {
		let actualEventId = eventId;
		let isPlayerTarget = false;
		let isMinionTarget = false;
		let isActorTarget = false;
		let targetActor = null;

		if (eventId === "player") {
			isPlayerTarget = true;
			targetActor = $gameParty.leader();
		}
		else if (eventId === "this") {
			actualEventId = this._eventId;
			const event = $gameMap.event(actualEventId);

			if (event) {
				if (event._isMinionActor) {
					isMinionTarget = true;
					targetActor = $gameActors.actor(event._minionActorId);
				} else if (event.linkedActorId) {
					isActorTarget = true;
					targetActor = $gameActors.actor(event.linkedActorId);
				}
			}
		}
		else {
			actualEventId = Number(eventId);
			const event = $gameMap.event(actualEventId);

			if (event) {
				if (event._isMinionActor) {
					isMinionTarget = true;
					targetActor = $gameActors.actor(event._minionActorId);
				} else if (event.linkedActorId) {
					isActorTarget = true;
					targetActor = $gameActors.actor(event.linkedActorId);
				}
			}
		}

		let hpChange = 0;

		if (args.value.includes('damage')) {
			let damageEventId;
			if (isPlayerTarget) {
				damageEventId = 0;
			} else if (isMinionTarget || isActorTarget) {
				damageEventId = actualEventId;
			} else {
				damageEventId = actualEventId;
			}

			const damages = CollisionManager.getAllDamage(damageEventId);
			CollisionManager.lastEvaded = false;
			CollisionManager.lastImmunity = false;

			if (damages && damages.length > 0) {
				let baseDamage = Math.abs(damages[damages.length - 1]);

				if (CollisionManager.lastEvaded || (baseDamage === 0 && CollisionManager.lastImmunity)) {
					hpChange = 0;
				} else {
					const sourceEventId = CollisionManager.lastSourceEventId;

					if (targetActor) {
						baseDamage = applyDefenseReduction(baseDamage, sourceEventId, targetActor);
					}

					let expression = args.value.replace(/damage/g, baseDamage.toString());

					try {
						hpChange = eval(expression);
					} catch (e) {
						hpChange = -baseDamage;
					}
				}

				CollisionManager.addCalculatedDamage(damageEventId, hpChange);
			} else {
				const sourceEventId = CollisionManager.lastSourceEventId || this._eventId;

				if (isPlayerTarget) {
					const sourceEvent = $gameMap.event(sourceEventId);
					if (sourceEvent) {
						let skillDamage = sourceEvent.getDamageFromNoteTag();
						if (skillDamage > 0) {
							const trimmedValue = args.value.trim();
							if (trimmedValue.startsWith('+')) {
								hpChange = skillDamage;
							} else {
								hpChange = -skillDamage;
							}
							CollisionManager.addCalculatedDamage(0, hpChange);
						}
					}
				} else {
					const event = $gameMap.event(actualEventId);
					if (event) {
						let skillDamage = event.getDamageFromNoteTag();
						if (skillDamage > 0) {
							const trimmedValue = args.value.trim();
							if (trimmedValue.startsWith('+')) {
								hpChange = skillDamage;
							} else {
								hpChange = -skillDamage;
							}
							CollisionManager.addCalculatedDamage(actualEventId, hpChange);
						}
					}
				}
			}
		}
		else if (args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon') || useWeaponAttack !== 'none')) {
			const leader = $gameParty.leader();
			const equippedWeapons = leader.equips();
			let weaponDamage = 0;

			let weaponSlot = 'slot1';
			if (useWeaponAttack && useWeaponAttack !== 'none') {
				weaponSlot = useWeaponAttack;
			} else if (args.value.toLowerCase().includes('player 2nd weapon') || args.value.toLowerCase().includes('2nd weapon')) {
				weaponSlot = 'slot2';
			}

			let weapon = null;
			if (weaponSlot === 'slot1' && equippedWeapons[0]) {
				weapon = equippedWeapons[0];
			} else if (weaponSlot === 'slot2' && equippedWeapons[1] && DataManager.isWeapon(equippedWeapons[1])) {
				weapon = equippedWeapons[1];
			}

			if (weapon) {
				const targetId = isPlayerTarget ? 0 : actualEventId;
				weaponDamage = calculateWeaponDamageWithStats(targetId, weapon, leader);
				CollisionManager.addCollision(targetId, weaponDamage);
			}

			if (args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon'))) {
				let expression = args.value.replace(/player\s+2nd\s+weapon/gi, weaponDamage.toString());
				expression = expression.replace(/player\s+weapon/gi, weaponDamage.toString());
				try {
					hpChange = eval(expression);
				} catch (e) {
					hpChange = -weaponDamage;
				}
			} else {
				if (weaponDamage > 0) {
					hpChange = -weaponDamage;
				}
			}
		}
		else if (args.value) {
			hpChange = eval(args.value);
		}

		if (hpChange !== 0) {
			if ((isPlayerTarget || isActorTarget) && targetActor) {
				if (hpChange > 0 && !exceedMaxHealth) {
					const currentHp = targetActor.hp;
					const maxHp = targetActor.mhp;
					if (currentHp + hpChange > maxHp) {
						hpChange = maxHp - currentHp;
					}
					if (hpChange <= 0) return;
				}
				targetActor.gainHp(hpChange);
			}
			else {
				if (hpChange > 0 && !exceedMaxHealth) {
					const event = $gameMap.event(actualEventId);
					if (event) {
						const currentHp = $gameMap.getCurrentEventHp(actualEventId) || 0;
						let maxHp;

						if (event._isMinionActor && event.databaseActor) {
							maxHp = event.databaseActor.mhp;
						} else {
							maxHp = event.getHpValueFromNote() || currentHp;
						}

						if (currentHp + hpChange > maxHp) {
							hpChange = maxHp - currentHp;
						}
						if (hpChange <= 0) return;
					}
				}
				this.updateEventHp(actualEventId, hpChange);
			}
		}
	};

	if (eventIdArg === "all") {
		$gameMap.events().forEach((event) => {
			if (event.getHpValueFromNote() !== null) {
				updateHp(event._eventId);
			}
		});
	} else {
		updateHp(eventIdArg);
	}
});

PluginManager.registerCommand(HpluginName, "UpdatePlayerHp", function (args) {
	const updateHp = () => {
		const actualEventId = this._eventId;
		let hpChange = 0;

		if (args.value.includes('damage')) {
			const damages = CollisionManager.getAllDamage(actualEventId);
			if (damages && damages.length > 0) {
				let latestDamage = damages[damages.length - 1];

				// Get target actor
				let targetActor = null;
				if (!args.target || args.target === 'player') {
					targetActor = $gameParty.leader();
				} else if (args.target === 'self') {
					const event = $gameMap.event(actualEventId);
					if (event) {
						const note = event.event().note;
						const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
						if (match) {
							const actorId = parseInt(match[1]);
							targetActor = $gameActors.actor(actorId);
						}
					}
				} else {
					const actorId = parseInt(args.target);
					if (!isNaN(actorId)) {
						targetActor = $gameActors.actor(actorId);
					} else {
						targetActor = $gameActors._data.find(actor =>
							actor && actor._name === args.target
						);
					}
				}

				// Fefense reduction
				if (targetActor) {
					const sourceEventId = CollisionManager.lastSourceEventId;
					latestDamage = applyDefenseReduction(Math.abs(latestDamage), sourceEventId, targetActor);
				}

				let expression = args.value;
				const def = targetActor ? targetActor.def : 0;
				const mdef = targetActor ? targetActor.mdf : 0;

				const parenRegex = /\((.*?)\)/g;
				expression = expression.replace(parenRegex, (match, innerContent) => {
					if (innerContent.includes('damage')) {
						const evalInner = innerContent
							.replace('damage', latestDamage.toString())
							.replace('def', def.toString())
							.replace('mdef', mdef.toString());
						try {
							const innerResult = Math.max(0, eval(evalInner));
							return `(${innerResult})`;
						} catch (e) {
							return `(${latestDamage})`;
						}
					}
					return match;
				});

				expression = expression
					.replace('damage', latestDamage.toString())
					.replace('def', def.toString())
					.replace('mdef', mdef.toString());

				expression = expression.replace(/\s+/g, '');

				try {
					hpChange = eval(expression);
					CollisionManager.addCalculatedDamage(0, hpChange);
				} catch (e) {
					hpChange = latestDamage;
					CollisionManager.addCalculatedDamage(0, hpChange);
				}
			}
		} else {
			hpChange = eval(args.value);
		}

		if (hpChange !== 0) {
			if (!args.target || args.target === 'player') {
				$gameParty.leader().gainHp(hpChange);
			} else if (args.target === 'self') {
				const event = $gameMap.event(actualEventId);
				if (event) {
					const note = event.event().note;
					const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
					if (match) {
						const actorId = parseInt(match[1]);
						const targetActor = $gameActors.actor(actorId);
						if (targetActor) {
							targetActor.gainHp(hpChange);
						}
					}
				}
			} else {
				let targetActor = null;
				const actorId = parseInt(args.target);

				if (!isNaN(actorId)) {
					targetActor = $gameActors.actor(actorId);
				} else {
					targetActor = $gameActors._data.find(actor =>
						actor && actor._name === args.target
					);
				}

				if (targetActor) {
					targetActor.gainHp(hpChange);
				}
			}
		}
	};

	updateHp();
});

Game_Interpreter.prototype.removeEventHpBar = function (eventId) {
	const event = $gameMap.event(eventId);
	if (!event) return;

	const spriteset = SceneManager._scene._spriteset;
	const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);

	if (hpBarIndex > -1) {
		const hpBar = spriteset._eventHpBars[hpBarIndex];
		hpBar.startFadeOut();

		const mapId = $gameMap.mapId();
		if (!Array.isArray($gameMap.removedEventHpBar[mapId])) {
			$gameMap.removedEventHpBar[mapId] = [];
		}
		$gameMap.removedEventHpBar[mapId].push(event._eventId);

		setTimeout(() => {
			const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);
			if (hpBarIndex > -1) {
				spriteset._tilemap.removeChild(hpBar);
				spriteset._eventHpBars.splice(hpBarIndex, 1);
			}
		}, hpBar.maxFadeOutFrames * 1000 / 60);
	}
};

PluginManager.registerCommand(HpluginName, "RemoveEventHpBar", function (args) {
	if (args.eventId === "this") {
		this.removeEventHpBar(this._eventId);
	} else {
		const eventId = parseInt(args.eventId);
		this.removeEventHpBar(eventId);
	}
});

Game_Map.prototype.getCharacterDistance = function (character1, character2) {
	const dx = Math.abs(character1.x - character2.x);
	const dy = Math.abs(character1.y - character2.y);
	return Math.sqrt(dx * dx + dy * dy);
};

Spriteset_Map.prototype.refreshEventHpBars = function () {
	const mapId = $gameMap.mapId();
	const removedEventHpBars = $gameMap.removedEventHpBar[mapId] || [];
	const eventsWithHpBar = new Set(this._eventHpBars.map(hpBar => hpBar._event._eventId));

	$gameMap.events().forEach(event => {
		if (!removedEventHpBars.includes(event._eventId) && !eventsWithHpBar.has(event._eventId)) {
			const hpValue = event.getHpValueFromNote();
			if (hpValue !== null) {
				const eventData = event.event();
				const offsetY = parseInt(eventData.note.match(/<hpy:\s*(-?\d+)\s*>/i)?.[1] || 0);
				const radius = parseInt(eventData.note.match(/<radius:\s*(\d+)\s*>/i)?.[1] || defaultRadius);
				const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
				this._eventHpBars.push(hpBar);
				this._tilemap.addChild(hpBar);
			}
		}
	});
};

PluginManager.registerCommand(HpluginName, 'refreshEventHpBars', () => {
	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

Game_Event.prototype.resetHpToOriginal = function () {
	const originalHp = this.getHpValueFromNote();
	if (originalHp !== null) {
		if (this.hpStorageId) {
			$gameVariables._data[this.hpStorageId] = originalHp;
		}

		let hpBar = SceneManager._scene._spriteset._eventHpBars.find(hpBar => hpBar._event === this);
		if (hpBar) {
			hpBar.setHp(originalHp);
		}
	}
};

PluginManager.registerCommand(HpluginName, "ResetEventHpToOriginal", function (args) {
	const mapId = $gameMap.mapId();
	$gameMap.removedEventHpBar[mapId] = [];
	$gameMap.events().forEach(event => {
		event.resetHpToOriginal();
	});
});

PluginManager.registerCommand(HpluginName, "EventHPBarVisibility", function (args) {
	const status = args.Status === 'true';
	const eventId = args.Target === "this" ? this._eventId : parseInt(args.Target);
	if (!$gameMap.event(eventId)) return;
	if (!SceneManager._scene._spriteset) return;
	const hpBar = SceneManager._scene._spriteset._eventHpBars.find(bar => bar._event === $gameMap.event(eventId));
	if (!hpBar) return;
	hpBar.setVisibility(status);
});

EventHpBar.prototype.setVisibility = function (visible) {
	this.manuallyHidden = !visible;
	this.noHpBar = !visible;
	this.visible = visible;
	this.shouldDisplay = visible;
	if (visible) {
		this._fadeInFrames = 0;
		this.fadingOut = false;
		this.opacity = 255;
	} else {
		this.opacity = 0;
	}
};

const H_Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function () {
	H_Scene_Map_start.call(this);
	passageCache = {};
	$gameMap.clearCustomEventHitboxCaches();
	$gameMap.clearPassageCache();
	$gameMap.initializePassCache();
};

Scene_Map.prototype.clearRemovedEventHpBars = function () {
	const mapId = $gameMap.mapId();
	if (!$gameMap.removedEventHpBar[mapId]) return;
	const existingEventIds = new Set(this._spriteset._eventHpBars.map(hpBar => hpBar._event._eventId));
	for (const eventId in $gameMap.removedEventHpBar[mapId]) {
		if (!existingEventIds.has(parseInt(eventId))) {
			delete $gameMap.removedEventHpBar[mapId][eventId];
			if ($gameMap.event(parseInt(eventId))) {
				$gameMap.event(parseInt(eventId)).setInitialHp();
			}
		}
	}
};

//==========================================================
// EVENT CHILD
//==========================================================

Game_Event.prototype.setupPlayerChild = function () {
	if (!this.page()) return;
	if (this.wasAttached) return;

	const attachComment = this.list().find(command =>
		(command.code === 108 || command.code === 408) &&
		command.parameters[0].match(/<child\s+of:\s*(.+?)>/i)
	);

	if (!attachComment) {
		if (!this.wasAttached) {
			this.isPlayerChild = false;
			this.theParent = null;
		}
		return;
	}

	const [, target] = attachComment.parameters[0].match(/<child\s+of:\s*(.+?)>/i);
	let parentEvent = null;

	if (target.toLowerCase() === 'player') {
		parentEvent = $gamePlayer;
	} else if (target.startsWith('<') && target.endsWith('>')) {
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().note.includes(target)) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	} else if (!isNaN(target)) {
		parentEvent = $gameMap.event(Number(target));
	} else {
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().name === target) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	}

	if (parentEvent) {
		const offsetMatch = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i)
		);

		if (offsetMatch) {
			const [, x, y] = offsetMatch.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i);
			this.childOffsetX = -Number(x);
			this.childOffsetY = -Number(y);
		}

		this.isPlayerChild = parentEvent === $gamePlayer;
		this.theParent = parentEvent;

		if (this.isPlayerChild) {
			this.lastPlayerX = $gamePlayer._realX + this.childOffsetX;
			this.lastPlayerY = $gamePlayer._realY + this.childOffsetY;
		} else {
			this.lastParentX = parentEvent._realX + this.childOffsetX;
			this.lastParentY = parentEvent._realY + this.childOffsetY;
		}

		if (H_DotMoveSystem) {
			const parentPos = parentEvent.positionPoint();
			const eventPos = this.positionPoint();
			this.childOffsetX = eventPos.x - parentPos.x;
			this.childOffsetY = eventPos.y - parentPos.y;
		} else {
			this.childOffsetX = this._realX - parentEvent._realX;
			this.childOffsetY = this._realY - parentEvent._realY;
		}

	} else {
		this.isPlayerChild = false;
		this.theParent = null;
	}
};

PluginManager.registerCommand(HpluginName, "AttachToEvent", function (args) {
	const source = args.child || 'this';
	let sourceEvents = findTargets(source, this);

	if (args.parent === 'none') {
		sourceEvents.forEach(sourceEvent => {
			if (sourceEvent) {
				sourceEvent.isPlayerChild = false;
				sourceEvent.theParent = null;
				sourceEvent.childOffsetX = 0;
				sourceEvent.childOffsetY = 0;
				sourceEvent.wasAttached = false;
			}
		});
		return;
	}

	const attachTo = args.parent || 'this';
	let parentEvents = findTargets(attachTo, this);

	let commandOffsetX = 0, commandOffsetY = 0;
	if (args.offset) {
		const offsetMatch = args.offset.match(/\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*/);
		if (offsetMatch) {
			commandOffsetX = Number(offsetMatch[1]) || 0;
			commandOffsetY = Number(offsetMatch[2]) || 0;
		}
	}

	sourceEvents.forEach(sourceEvent => {
		if (!sourceEvent) return;

		let nearestParent = null;
		let shortestDistance = Infinity;

		parentEvents.forEach(parentEvent => {
			if (!parentEvent || parentEvent === sourceEvent) return;

			const distance = Math.sqrt(
				Math.pow(sourceEvent.x - parentEvent.x, 2) +
				Math.pow(sourceEvent.y - parentEvent.y, 2)
			);

			if (distance < shortestDistance) {
				shortestDistance = distance;
				nearestParent = parentEvent;
			}
		});

		if (nearestParent) {
			sourceEvent.isPlayerChild = (nearestParent === $gamePlayer);
			sourceEvent.theParent = nearestParent;

			if (sourceEvent.isPlayerChild) {
				sourceEvent.lastPlayerX = $gamePlayer._realX;
				sourceEvent.lastPlayerY = $gamePlayer._realY;
			} else {
				sourceEvent.lastParentX = nearestParent._realX;
				sourceEvent.lastParentY = nearestParent._realY;
			}

			if (H_DotMoveSystem) {
				const parentPos = nearestParent.positionPoint();
				const eventPos = sourceEvent.positionPoint();
				sourceEvent.childOffsetX = eventPos.x - parentPos.x;
				sourceEvent.childOffsetY = eventPos.y - parentPos.y;
			} else {
				sourceEvent.childOffsetX = sourceEvent._realX - nearestParent._realX;
				sourceEvent.childOffsetY = sourceEvent._realY - nearestParent._realY;
			}

			if (args.offset) {
				sourceEvent.childOffsetX = commandOffsetX;
				sourceEvent.childOffsetY = commandOffsetY;
			}
			sourceEvent.wasAttached = true;
		}
	});
});

//==========================================================
// PASSIVE COMMON EVENT FOR EVENTS
//==========================================================

let commonEventNameCache = null;
let enemyNameCache = null;

const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
	if (!_DataManager_isDatabaseLoaded.call(this)) return false;
	enemyNameCache = {};
	$dataEnemies.forEach(enemy => {
		if (enemy) enemyNameCache[enemy.name.toLowerCase()] = enemy;
	});
	commonEventNameCache = {};
	$dataCommonEvents.forEach(event => {
		if (event) commonEventNameCache[event.name.toLowerCase()] = event.id;
	});
	return true;
};

Game_Event.prototype.resolveCommonEventId = function (identifier) {
	if (!isNaN(identifier.trim())) {
		return parseInt(identifier.trim());
	}
	const eventName = identifier.trim().toLowerCase();
	return commonEventNameCache[eventName] || 0;
};

const _Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function () {
	const hadPassBefore = this._pageIndex >= 0 &&
		$gameMap._passEvents &&
		$gameMap._passEvents.has(this._eventId);
	this._cachedNoSlidingComment = undefined;
	_Game_Event_setupPage.call(this);
	this._independentCommonEventInterpreters = [];
	this._wasNearScreen = false;
	this._commonEventIds = [];
	this._passiveBlocked = false;
	this.applyCommonEventsFromNotetag();
	this.setupFrameSpeed();
	this.setupPlayerChild();
	this.setupClickable();
	if ($gameMap._passEvents) {
		const hasPassNow = this._pageIndex >= 0 && this.event().note.includes('<pass>');

		if (hasPassNow && !hadPassBefore) {
			$gameMap._passEvents.add(this._eventId);
		} else if (!hasPassNow && hadPassBefore) {
			$gameMap._passEvents.delete(this._eventId);
		}
	}
};

Game_Event.prototype.applyCommonEventsFromNotetag = function () {
	if (!this.event()) return;

	const note = this.event().note;
	const customTagIds = this.extractCommonEventIdsFromCustomTags(note);
	const pageCommonIds = this.extractCommonEventIdsFromPage();

	this._commonEventIds = [...new Set([...customTagIds, ...pageCommonIds])];
	this._passiveBlocked = this.currentPageHasTag("<no passive>");

	if (this.currentPageHasPassiveComment() && $gameSystem.passiveCommonEvents &&
		$gameSystem.passiveCommonEvents[$gameMap.mapId()] &&
		$gameSystem.passiveCommonEvents[$gameMap.mapId()][this._eventId]) {
		const dynamicCommonEventIds = $gameSystem.passiveCommonEvents[$gameMap.mapId()][this._eventId];

		if (Array.isArray(dynamicCommonEventIds)) {
			dynamicCommonEventIds.forEach(id => {
				if (!this._commonEventIds.includes(id)) {
					this._commonEventIds.push(id);
				}
			});
		}
	}

	if (this._commonEventIds.length > 0 && !this._passiveBlocked) {
		if (!limitAreaOfCalling || this.isNearScreen()) {
			this.setupCommonEventInterpreters();
		}
	}
};

Game_Character.prototype.isNearScreen = function () {
	if (!$gameMap._screenTileDimensions) {
		$gameMap._screenTileDimensions = {
			width: Graphics.width / $gameMap.tileWidth(),
			height: Graphics.height / $gameMap.tileHeight()
		};
	}
	const bufferInTiles = 6;
	const minX = $gameMap._displayX - bufferInTiles;
	const maxX = $gameMap._displayX + $gameMap._screenTileDimensions.width + bufferInTiles;
	const minY = $gameMap._displayY - bufferInTiles;
	const maxY = $gameMap._displayY + $gameMap._screenTileDimensions.height + bufferInTiles;
	return this.x >= minX && this.x <= maxX && this.y >= minY && this.y <= maxY;
};

Game_Event.prototype.extractCommonEventIdsFromCustomTags = function (note) {
	return npcTags.reduce((ids, tag) => {
		if (note.includes(tag.Notetag)) {
			ids.push(...tag.CommonEventIds);
		}
		return ids;
	}, []);
};

Game_Event.prototype.extractCommonEventIdsFromPage = function () {
	if (!this.page()) return [];

	const ids = [];
	this.page().list.forEach(command => {
		if (command.code !== 108 && command.code !== 408) return;
		const match = /<passive:\s*(.+?)\s*>/i.exec(command.parameters[0]);
		if (match) {
			const identifiers = match[1].split(',');
			const resolvedIds = identifiers
				.map(id => this.resolveCommonEventId(id))
				.filter(id => id > 0);
			ids.push(...resolvedIds);
		}
	});
	return ids;
};

Game_Event.prototype.currentPageHasTag = function (tag) {
	if (!this.page()) return false;
	return this.page().list.some(command => (command.code === 108 || command.code === 408) && command.parameters[0].includes(tag));
};

Game_Event.prototype.setupCommonEventInterpreters = function () {
	this._independentCommonEventInterpreters = this._commonEventIds
		.filter(id => $dataCommonEvents && $dataCommonEvents[id])
		.map(id => {
			const interpreter = new Game_Interpreter();
			interpreter.setup($dataCommonEvents[id].list, this._eventId);
			return interpreter;
		});
};

Game_System.prototype.cleanupPassiveCommonEvents = function () {
	if (!this.passiveCommonEvents) return;
	for (const mapId in this.passiveCommonEvents) {
		const mapEvents = this.passiveCommonEvents[mapId];
		for (const eventId in mapEvents) {
			if (!mapEvents[eventId] || mapEvents[eventId].length === 0) {
				delete mapEvents[eventId];
			}
		}
		if (Object.keys(mapEvents).length === 0) {
			delete this.passiveCommonEvents[mapId];
		}
	}
};

const H_Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
	if (!$gameMap._events[this._eventId]) return; // Stop update null events, a fix (kind of) for Destroy Event parallel name and notetag
	const shouldUpdate = !$gameMap.eventsPaused || ($gameMap.pausingEvent && this._eventId === $gameMap.pausingEvent);
	if (shouldUpdate) {
		H_Game_Event_update.call(this);
		const mapId = $gameMap.mapId();
		if ($gameSystem.passiveCommonEvents?.[mapId]?.[this._eventId]) {
			const storedStates = $gameSystem.passiveCommonEvents[mapId][this._eventId];

			if (!this.stateInterpreters) {
				this.stateInterpreters = {};
			}

			for (const stateId in storedStates) {
				const commonEventId = storedStates[stateId];

				if (!this.stateInterpreters[stateId]) {
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
					this.stateInterpreters[stateId] = interpreter;
				}
			}
		}

		if (this.stateInterpreters) {
			for (const stateId in this.stateInterpreters) {
				const interpreter = this.stateInterpreters[stateId];
				if (!interpreter.isRunning()) {
					const commonEventId = $gameSystem.passiveCommonEvents?.[mapId]?.[this._eventId]?.[stateId];
					if (commonEventId && $dataCommonEvents[commonEventId]) {
						interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
					}
				}
				interpreter.update();
			}
		}
	}
	if (this.isPlayerChild && $gamePlayer) {
		const deltaX = $gamePlayer._realX - this.lastPlayerX;
		const deltaY = $gamePlayer._realY - this.lastPlayerY;

		if (deltaX !== 0 || deltaY !== 0) {
			const baseX = $gamePlayer._realX + this.childOffsetX;
			const baseY = $gamePlayer._realY + this.childOffsetY;
			const autoX = this._realX - (this.lastPlayerX + this.childOffsetX);
			const autoY = this._realY - (this.lastPlayerY + this.childOffsetY);
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this.lastPlayerX = $gamePlayer._realX;
		this.lastPlayerY = $gamePlayer._realY;
	} else if (this.theParent) {
		if (!this.theParent || this.theParent._erased || !$gameMap._events[this.theParent._eventId]) {
			this.theParent = null;
			this.childOffsetX = 0;
			this.childOffsetY = 0;
			this.wasAttached = false;
			return;
		}
		const deltaX = this.theParent._realX - this.lastParentX;
		const deltaY = this.theParent._realY - this.lastParentY;

		if (deltaX !== 0 || deltaY !== 0) {
			const baseX = this.theParent._realX + this.childOffsetX;
			const baseY = this.theParent._realY + this.childOffsetY;
			const autoX = this._realX - (this.lastParentX + this.childOffsetX);
			const autoY = this._realY - (this.lastParentY + this.childOffsetY);
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this.lastParentX = this.theParent._realX;
		this.lastParentY = this.theParent._realY;
	}
	if (shouldUpdate) {
		if (this._commonEventIds.length === 0 || this._passiveBlocked) return;

		const isNearScreen = (!limitAreaOfCalling || this.isNearScreen());
		if (!this._wasNearScreen && isNearScreen) {
			if (!this._independentCommonEventInterpreters.length) {
				this.setupCommonEventInterpreters();
			}
		}
		this._wasNearScreen = isNearScreen;
		if (isNearScreen) {
			this.updateIndependentCommonEventInterpreters();
		}
	}
};

Game_Event.prototype.updateIndependentCommonEventInterpreters = function () {
	this._independentCommonEventInterpreters.forEach((interpreter, index) => {
		if (!interpreter.isRunning()) {
			const commonEventId = this._commonEventIds[index];
			if (commonEventId && $dataCommonEvents[commonEventId]) {
				interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
			}
		}
		interpreter.update();
	});
};

Game_Event.prototype.currentPageHasPassiveComment = function () {
	const page = this.page();
	if (!page) return false;

	const hasPassiveComment = page.list.some(command =>
		(command.code === 108 || command.code === 408) &&
		command.parameters[0].match(/<passive:/i)
	);

	if (hasPassiveComment) return true;
	const eventNote = this.event().note;
	return npcTags.some(tag => eventNote.includes(tag.Notetag));
};

const _Game_Event_setupCommonEventInterpreters = Game_Event.prototype.setupCommonEventInterpreters;
Game_Event.prototype.setupCommonEventInterpreters = function () {
	if (!this._originalCommonEventIds) {
		this._originalCommonEventIds = [...this._commonEventIds];
	}

	_Game_Event_setupCommonEventInterpreters.call(this);
};

PluginManager.registerCommand(HpluginName, "AssignNewPassive", function (args) {
	const status = args.Status;
	const commonEventIdsOrNames = args.CommonEventId.split(',').map(item => item.trim());
	const targetEventId = this._eventId;
	const targetEvent = $gameMap.event(targetEventId);

	if (!targetEvent) return;

	const hasPassiveCommand = targetEvent.currentPageHasPassiveComment();
	if (!hasPassiveCommand) {
		return;
	}
	if (!targetEvent._commonEventIds) { targetEvent._commonEventIds = []; }
	if (!$gameSystem.passiveCommonEvents) { $gameSystem.passiveCommonEvents = {}; }
	if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) { $gameSystem.passiveCommonEvents[$gameMap.mapId()] = {}; }
	if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId]) { $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = []; }
	for (const idOrName of commonEventIdsOrNames) {
		let commonEventId;
		if (!isNaN(idOrName)) {
			commonEventId = parseInt(idOrName);
		} else {
			commonEventId = commonEventNameCache[idOrName.toLowerCase()];
		}

		if (!commonEventId || !$dataCommonEvents[commonEventId]) {
			continue;
		}
		if (status === 'assign') {
			if (!targetEvent._commonEventIds.includes(commonEventId)) {
				targetEvent._commonEventIds.push(commonEventId);
				if (!targetEvent._independentCommonEventInterpreters) {
					targetEvent._independentCommonEventInterpreters = [];
				}
				const interpreter = new Game_Interpreter();
				interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
				targetEvent._independentCommonEventInterpreters.push(interpreter);
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId].includes(commonEventId)) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId].push(commonEventId);
				}
			}
		} else if (status === 'delete') {
			const index = targetEvent._commonEventIds.indexOf(commonEventId);
			if (index !== -1) {
				targetEvent._commonEventIds.splice(index, 1);
				if (targetEvent._independentCommonEventInterpreters &&
					targetEvent._independentCommonEventInterpreters[index]) {
					targetEvent._independentCommonEventInterpreters.splice(index, 1);
				}
			}

			if ($gameSystem.passiveCommonEvents[$gameMap.mapId()] &&
				$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId]) {
				const persistIndex = $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId].indexOf(commonEventId);
				if (persistIndex !== -1) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId].splice(persistIndex, 1);
				}

				if ($gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId].length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId];
				}
			}
		}
	}
});

//==========================================================
// BREAK ANIMATION
//==========================================================

PluginManager.registerCommand(HpluginName, "BreakCharacter", function () {
	const event = $gameMap.event(this._eventId);
	if (event) {
		createBreakEffect(event);
	}
});

function findEventSprite(event) {
	const spriteset = SceneManager._scene._spriteset;
	return spriteset._characterSprites.find(
		sprite => sprite._character === event
	);
}

function createBreakEffect(event) {
	const sprite = findEventSprite(event);
	if (!sprite) return;

	const initialPos = {
		x: sprite.x,
		y: sprite.y - sprite.height,
		width: sprite.width,
		height: sprite.height
	};

	const gridSize = 5;
	const pieceWidth = initialPos.width / gridSize;
	const pieceHeight = initialPos.height / gridSize;

	const pieces = [];
	const pieceBitmaps = [];
	const bitmap = sprite.bitmap;

	const centerX = initialPos.x;
	const centerY = initialPos.y + initialPos.height / 2;

	for (let y = 0; y < gridSize; y++) {
		for (let x = 0; x < gridSize; x++) {
			const pieceBitmap = new Bitmap(pieceWidth, pieceHeight);
			pieceBitmap.blt(
				bitmap,
				x * pieceWidth,
				y * pieceHeight,
				pieceWidth,
				pieceHeight,
				0,
				0
			);
			pieceBitmaps.push(pieceBitmap);

			pieces.push({
				x: centerX + (x - gridSize / 2) * pieceWidth,
				y: centerY + (y - gridSize / 2) * pieceHeight,
				width: pieceWidth,
				height: pieceHeight,
				index: pieces.length,
				velocity: {
					x: (Math.random() - 0.5) * 8,
					y: (Math.random() - 0.5) * 8
				},
			});
		}
	}

	const extraSpace = Math.max(initialPos.width, initialPos.height) * 3;
	const compositeBitmap = new Bitmap(
		initialPos.width + extraSpace,
		initialPos.height + extraSpace
	);
	const compositeSprite = new Sprite(compositeBitmap);

	compositeSprite.x = centerX - (compositeBitmap.width / 2);
	compositeSprite.y = centerY - (compositeBitmap.height / 2);
	compositeSprite.opacity = 255;

	brokenSprites.set(event.eventId(), {
		sprite: compositeSprite,
		pieces: pieces,
		pieceBitmaps: pieceBitmaps,
		frames: 0,
		maxFrames: 50,
		initialPos: initialPos
	});

	sprite.visible = false;
	SceneManager._scene._spriteset._tilemap.addChild(compositeSprite);
}

function updateBrokenSprites() {
	for (const [eventId, data] of brokenSprites.entries()) {
		data.frames++;
		data.sprite.opacity = Math.max(0, 255 * (1 - data.frames / data.maxFrames));

		const bitmap = data.sprite.bitmap;
		bitmap.clear();

		data.pieces.forEach((piece, index) => {
			piece.x += piece.velocity.x;
			piece.y += piece.velocity.y;

			bitmap.blt(
				data.pieceBitmaps[index],
				0,
				0,
				piece.width,
				piece.height,
				piece.x - data.sprite.x,
				piece.y - data.sprite.y
			);
		});

		if (data.frames >= data.maxFrames) {
			data.pieceBitmaps.forEach(b => b.destroy());
			if (data.sprite.parent) {
				data.sprite.parent.removeChild(data.sprite);
			}
			brokenSprites.delete(eventId);
		}
	}
}

const H_Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function () {
	H_Scene_Map_terminate.call(this);
	brokenSprites.clear();
	activeEffects.clear();
	if (this._spriteset && this._spriteset._eventHpBars) {
		const tilemap = this._spriteset._tilemap;
		if (tilemap) {
			const hpBars = this._spriteset._eventHpBars;
			for (let i = 0; i < hpBars.length; i++) {
				tilemap.removeChild(hpBars[i]);
			}
		}
		this._spriteset._eventHpBars = [];
	}
};

//============================================================
// AUTO-GENERATE DROP ITEM ICON
//============================================================

Game_Map.prototype.spawnIconItemEvent = function (droppedItem, itemKind, x, y) {
	const eventId = this.getNextEventId();
	const event = new Game_IconDropEvent(this._mapId, eventId, x, y, droppedItem, itemKind);
	this._events[eventId] = event;
	this.addEventToTagIndex(event);
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_IconDrop(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}
	event.jumpToNearby(2, false);
	return eventId;
};

function Sprite_IconDrop() {
	this.initialize(...arguments);
}

Sprite_IconDrop.prototype = Object.create(Sprite_Character.prototype);
Sprite_IconDrop.prototype.constructor = Sprite_IconDrop;

Sprite_IconDrop.prototype.initialize = function (character) {
	this._iconBitmapReady = false;
	Sprite_Character.prototype.initialize.call(this, character);
};

Sprite_IconDrop.prototype.setCharacter = function (character) {
	this._character = character;
	if (character && character.isIconDropEvent) {
		this.createIconBitmap();
	}
};

Sprite_IconDrop.prototype.createIconBitmap = function () {
	const iconIndex = this._character._droppedItem.iconIndex;
	const iconBitmap = ImageManager.loadSystem('IconSet');
	const pw = 32;
	const ph = 32;
	if (iconBitmap.isReady()) {
		this.drawIcon(iconBitmap, iconIndex, pw, ph);
	} else {
		iconBitmap.addLoadListener(() => {
			this.drawIcon(iconBitmap, iconIndex, pw, ph);
		});
	}
};

Sprite_IconDrop.prototype.drawIcon = function (iconBitmap, iconIndex, pw, ph) {
	const sx = (iconIndex % 16) * pw;
	const sy = Math.floor(iconIndex / 16) * ph;

	this.bitmap = new Bitmap(pw, ph);
	this.bitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0);
	this.anchor.x = 0.5;
	this.anchor.y = 1;
	this._iconBitmapReady = true;
	this._frame.width = pw;
	this._frame.height = ph;
	this._frame.x = 0;
	this._frame.y = 0;
	this._refresh();
};

Sprite_IconDrop.prototype.update = function () {
	Sprite.prototype.update.call(this);
	if (this._character && this._iconBitmapReady) {
		this.updatePosition();
		this.updateVisibility();
		this.updateOther();
	} else if (this._character && !this._iconBitmapReady) {
		Sprite_Character.prototype.update.call(this);
	}
};

Sprite_IconDrop.prototype.updateFrame = function () {
	if (!this._iconBitmapReady) {
		Sprite_Character.prototype.updateFrame.call(this);
	}
};

Sprite_IconDrop.prototype.characterPatternY = function () {
	return 0;
};

Sprite_IconDrop.prototype.characterPatternX = function () {
	return 0;
};

const _Spriteset_Map_createCharacters_IconDrop = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
	_Spriteset_Map_createCharacters_IconDrop.call(this);
	this._characterSprites.forEach((sprite, index) => {
		if (sprite._character && sprite._character.isIconDropEvent) {
			const character = sprite._character;
			this._tilemap.removeChild(sprite);
			const newSprite = new Sprite_IconDrop(character);
			this._characterSprites[index] = newSprite;
			this._tilemap.addChild(newSprite);
		}
	});
};

function Game_IconDropEvent() {
	this.initialize.apply(this, arguments);
}

Game_IconDropEvent.prototype = Object.create(Game_Event.prototype);
Game_IconDropEvent.prototype.constructor = Game_IconDropEvent;

Game_IconDropEvent.prototype.initialize = function (mapId, eventId, x, y, item, itemKind) {
	this._spawnX = x;
	this._spawnY = y;
	this._droppedItem = item;
	this._itemKind = itemKind;
	this.isIconDropEvent = true;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_IconDropEvent.prototype.event = function () {
	return {
		id: this._eventId,
		name: `Item_${this._droppedItem.id}`,
		note: `<item drop>`,
		meta: {},
		x: this._spawnX,
		y: this._spawnY,
		pages: [{
			conditions: {
				actorId: 1, actorValid: false,
				itemId: 1, itemValid: false,
				selfSwitchCh: "A", selfSwitchValid: false,
				switch1Id: 1, switch1Valid: false,
				switch2Id: 1, switch2Valid: false,
				variableId: 1, variableValid: false,
				variableValue: 0
			},
			image: {
				tileId: 0,
				characterName: "",
				direction: 2,
				pattern: 0,
				characterIndex: 0
			},
			list: [
				{
					code: 355, indent: 0, parameters: [
						`const eventId = ${this._eventId};
                    const event = $gameMap._events[eventId];
                    if (event && event.isIconDropEvent) {
                        const item = event._droppedItem;
                        const kind = event._itemKind;
                        
                        if (kind === 1) {
                            $gameParty.gainItem(item, 1);
                        } else if (kind === 2) {
                            $gameParty.gainItem(item, 1, false);
                        } else if (kind === 3) {
                            $gameParty.gainItem(item, 1, false);
                        }

						AudioManager.playSe({
							name: pickupSFX.sfxFile || 'Item1',
							volume: Number(pickupSFX.volume || 90),
							pitch: Number(pickupSFX.pitch || 100),
							pan: 0
						});
                        
                        if (SceneManager._scene._spriteset) {
                            const spriteIndex = SceneManager._scene._spriteset._characterSprites.findIndex(s => s._character && s._character._eventId === eventId);
                            if (spriteIndex >= 0) {
                                const sprite = SceneManager._scene._spriteset._characterSprites[spriteIndex];
                                SceneManager._scene._spriteset._tilemap.removeChild(sprite);
                                SceneManager._scene._spriteset._characterSprites.splice(spriteIndex, 1);
                            }
                        }
                        
                        $gameMap.removeEventFromTagIndex(event);
                        $gameMap._events[eventId] = null;
                    }`
					]
				},
				{ code: 0, indent: 0, parameters: [] }
			],
			moveFrequency: 3,
			moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
			moveSpeed: 3,
			moveType: 0,
			priorityType: 0,
			stepAnime: false,
			through: true,
			trigger: 2,
			walkAnime: false,
			directionFix: false
		}]
	};
};

Game_IconDropEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

//============================================================
// SPAWN EVENTS
//============================================================

const matchEventIdentifier = (event, identifier) => {
	if (!event || !event.event) return false;
	if (!isNaN(identifier)) {
		return event.eventId() === Number(identifier);
	}

	const eventData = event.event();
	if (identifier.startsWith('<') && identifier.endsWith('>')) {
		return eventData?.note?.includes(identifier);
	}
	return eventData?.name === identifier;
};

const getTargetEventId = (identifier, context) => {
	if (identifier === 'this') {
		return context._eventId || null;
	}
	return Number(identifier) || null;
};

function Hendrix_TemplateEvent() {
	this.initialize.apply(this, arguments);
}

Hendrix_TemplateEvent.prototype = Object.create(Game_Event.prototype);
Hendrix_TemplateEvent.prototype.constructor = Hendrix_TemplateEvent;

Hendrix_TemplateEvent.prototype.initialize = function (mapId, eventId, templateEventId, x, y, saveEvent, startDegree) {
	this._spawnX = x;
	this._spawnY = y;
	this._templateEventId = templateEventId;
	this.isSpawnEvent = true;
	this.isSavedEvent = saveEvent;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
	DataManager.extractMetadata(this.event());
	if (startDegree) {
		this.customRotationPoint = false;
		this.setRotation(Number(startDegree));
	}
};

Hendrix_TemplateEvent.prototype.event = function () {
	return $dataTemplateMap.events[this._templateEventId];
};

Hendrix_TemplateEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

Game_Map.prototype.getNextEventId = function () {
	if (!this._nextEventId) {
		this.resetNextEventId();
	} while (this._events[this._nextEventId] || this.isPermanentEventId(this._nextEventId)) {
		this._nextEventId++;
	}
	return this._nextEventId++;
};

Game_Map.prototype.isPermanentEventId = function (eventId) {
	return $gameSystem._permanentEvents?.[this._mapId]?.[eventId];
};

Game_Map.prototype.resetNextEventId = function () {
	this._nextEventId = 1;

	if (this._events) {
		for (const id in this._events) {
			const numId = Number(id);
			if (!isNaN(numId) && numId >= this._nextEventId) {
				this._nextEventId = numId + 1;
			}
		}
	}

	if ($gameSystem._permanentEvents?.[this._mapId]) {
		for (const id in $gameSystem._permanentEvents[this._mapId]) {
			const numId = Number(id);
			if (!isNaN(numId) && numId >= this._nextEventId) {
				this._nextEventId = numId + 1;
			}
		}
	}
};

Game_Map.prototype.spawnEvent = function (templateEventId, x, y, isPermanent = false, startDegree = null) {
	if (!$dataTemplateMap?.events[templateEventId]) return null;

	const eventId = this.getNextEventId();
	const event = new Hendrix_TemplateEvent(this._mapId, eventId, templateEventId, x, y, isPermanent, startDegree);
	this._events[eventId] = event;

	const eventNote = event.event().note;
	if (eventNote && eventNote.includes('<pass>')) {
		if (!this._passEvents) {
			this.initializePassCache();
		}
		this._passEvents.add(eventId);
		if (this._passEventPositions) {
			this._passEventPositions.add(`${x},${y}`);
		}
		this.clearPassageCacheForPosition(x, y);
	}

	if (isPermanent) {
		if (!$gameSystem._permanentEvents[this._mapId]) {
			$gameSystem._permanentEvents[this._mapId] = {};
		}
		$gameSystem._permanentEvents[this._mapId][eventId] = { templateEventId, x, y, startDegree };
	}

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_Character(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}
	this.addEventToTagIndex(event);
	return eventId;
};

Game_Map.prototype.respawnPermanentEvents = function () {
	const permanentEvents = $gameSystem._permanentEvents[this._mapId];
	if (!permanentEvents) return;

	Object.entries(permanentEvents).forEach(([eventId, eventData]) => {
		const { templateEventId, x, y } = eventData;
		const event = new Hendrix_TemplateEvent(this._mapId, Number(eventId), templateEventId, x, y, true);
		this._events[Number(eventId)] = event;
		this.addEventToTagIndex(event);

		if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
			const sprite = new Sprite_Character(event);
			SceneManager._scene._spriteset._characterSprites.push(sprite);
			SceneManager._scene._spriteset._tilemap.addChild(sprite);
		}
	});
};

Spriteset_Map.prototype.unspawnEvent = function (eventId) {
	const spriteIndex = this._characterSprites.findIndex(sprite =>
		sprite._character instanceof Hendrix_TemplateEvent &&
		sprite._character._eventId === eventId
	);
	if (spriteIndex >= 0) {
		const sprite = this._characterSprites[spriteIndex];
		this._tilemap.removeChild(sprite);
		const currentIndex = this._characterSprites.indexOf(sprite);
		if (currentIndex >= 0) {
			this._characterSprites.splice(currentIndex, 1);
		}
	}
};

Game_Map.prototype.unspawnEvent = function (eventId) {
	const event = this._events[eventId];
	if (!(event instanceof Hendrix_TemplateEvent)) return;

	const eventNote = event.event().note;
	if (eventNote && eventNote.includes('<pass>')) {
		if (this._passEvents) {
			this._passEvents.delete(eventId);
		}
		if (this._passEventPositions) {
			this._passEventPositions.delete(`${event.x},${event.y}`);
		}
		this.clearPassageCacheForPosition(event.x, event.y);
	}

	if (event._characterName) {
		eventHeightCache.delete(event._characterName);
	}
	this.removeEventFromTagIndex(event);

	if ($gameSystem.passiveCommonEvents &&
		$gameSystem.passiveCommonEvents[this._mapId] &&
		$gameSystem.passiveCommonEvents[this._mapId][eventId]) {
		delete $gameSystem.passiveCommonEvents[this._mapId][eventId];
	}

	if (event._independentCommonEventInterpreters) {
		event._independentCommonEventInterpreters = [];
	}

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const spriteset = SceneManager._scene._spriteset;
		const hpBarIndex = spriteset._eventHpBars.findIndex(bar =>
			bar._event && bar._event._eventId === eventId
		);
		if (hpBarIndex > -1) {
			const hpBar = spriteset._eventHpBars[hpBarIndex];
			spriteset._tilemap.removeChild(hpBar);
			spriteset._eventHpBars.splice(hpBarIndex, 1);
		}
	}

	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.unspawnEvent(eventId);
	}

	['A', 'B', 'C', 'D'].forEach(letter => {
		$gameSelfSwitches.setValue([this._mapId, eventId, letter], false);
	});

	if ($dataSystem && $dataSystem.switches) {
		$dataSystem.switches.forEach((switchName, switchId) => {
			if (switchName && switchName.toLowerCase().startsWith('self switch')) {
				$gameSelfSwitches.setValue([this._mapId, eventId, `SW_${switchId}`], false);
			}
		});
	}

	if ($gameSystem._permanentEvents && $gameSystem._permanentEvents[this._mapId]) {
		delete $gameSystem._permanentEvents[this._mapId][eventId];
	}

	const hpStorageKey = `Map${this._mapId}_Event${eventId}_HP`;
	if ($gameVariables._data[hpStorageKey]) {
		delete $gameVariables._data[hpStorageKey];
	}

	// === DOT MOVE SYSTEM CLEANUP ===
	if (H_DotMoveSystem) {
		if ($gameTemp && $gameTemp.mapCharactersCache && $gameTemp.mapCharactersCache()) {
			const mapCache = $gameTemp.mapCharactersCache();

			if (event && event.collisionRect) {
				const rect = event.collisionRect();
				const massRange = DotMoveSystem.MassRange.fromRect(rect);

				for (const massIdx of massRange.masses()) {
					mapCache.removeMapCharactersCache(massIdx, event);
				}
			}

			if (mapCache._cache) {
				for (let i = 0; i < mapCache._cache.length; i++) {
					if (mapCache._cache[i]) {
						mapCache._cache[i].delete(event);
						if (mapCache._cache[i].size === 0) {
							mapCache._cache[i] = null;
						}
					}
				}
			}
		}

		if ($gameTemp && $gameTemp._characterTempDatas && event) {
			$gameTemp._characterTempDatas.delete(event);
		}

		if ($gameTemp && $gameTemp._lastAllCharacters && event) {
			$gameTemp._lastAllCharacters.delete(event);
		}

		if (event) {
			if (event._moverData) {
				event._moverData.targetFar = 0;
				event._moverData.moveDeg = 0;
				event._moverData.stopping = false;
			}

			event._moved = false;
			event._moving = false;
			event._clearMovedFlagRequested = false;

			if (event.dotMoveTempData) {
				const tempData = event.dotMoveTempData();
				if (tempData && tempData.mapCharacterCacheUpdater) {
					tempData.mapCharacterCacheUpdater.removeMapCharactersCache();
					tempData.mapCharacterCacheUpdater._lastRect = null;
				}
			}
		}
	}

	this._events[eventId] = null;
};

// Regular RPG Maker events
Game_Map.prototype.removeDeletedEvents = function () {
	if (!$gameSystem._deletedMapEvents || !$gameSystem._deletedMapEvents[this._mapId]) {
		return;
	}
	$gameSystem._deletedMapEvents[this._mapId].forEach(eventId => {
		if (this._events[eventId]) {
			this._events[eventId] = null;
		}
	});
};

const _Sprite_Animation_targetSpritePosition = Sprite_Animation.prototype.targetSpritePosition;
Sprite_Animation.prototype.targetSpritePosition = function (sprite) {
	if (!sprite || !sprite.parent) {
		return new Point(this._targets[0].x, this._targets[0].y);
	}
	return _Sprite_Animation_targetSpritePosition.call(this, sprite);
};

PluginManager.registerCommand(HpluginName, "spawnEvent", function (args) {
	let eventIdentifier = args.eventId;
	if (eventIdentifier.startsWith('$game')) eventIdentifier = eval(eventIdentifier);
	const id = Number(eventIdentifier) || $dataTemplateMap.events.findIndex(e => e?.name === eventIdentifier);

	if (id <= 0) return;

	const useGridBased = args.gridBased === 'true';
	const spawnInFront = args.spawnInFront === 'true';
	const usePixelMode = H_DotMoveSystem && !useGridBased;

	let xExp, yExp;
	if (args.position !== undefined) {
		const positionParts = args.position.split(',').map(p => p.trim());
		xExp = positionParts[0];
		yExp = positionParts[1] || positionParts[0];
	} else {
		xExp = args.x !== undefined ? args.x : 'this';
		yExp = args.y !== undefined ? args.y : 'this';
	}

	const checkForbiddenTile = (x, y, letters, checkEvents) => {
		const collisionRadius = 0.3;
		const checkPoints = [
			{ x: x, y: y },
			{ x: x - collisionRadius, y: y },
			{ x: x + collisionRadius, y: y },
			{ x: x, y: y - collisionRadius },
			{ x: x, y: y + collisionRadius },
			{ x: x - collisionRadius, y: y - collisionRadius },
			{ x: x + collisionRadius, y: y - collisionRadius },
			{ x: x - collisionRadius, y: y + collisionRadius },
			{ x: x + collisionRadius, y: y + collisionRadius }
		];

		for (const point of checkPoints) {
			const tileX = Math.floor(point.x);
			const tileY = Math.floor(point.y);

			if (checkEvents) {
				if (H_DotMoveSystem) {
					for (const event of $gameMap.events()) {
						if (!event || event.isThrough() || event._priorityType !== 1 || event._erased) {
							continue;
						}

						const eventCenterX = event.x;
						const eventCenterY = event.y;
						const distX = Math.abs(point.x - eventCenterX);
						const distY = Math.abs(point.y - eventCenterY);

						if (distX < 0.4 && distY < 0.4) {
							return true;
						}
					}
				} else {
					const hasImpassableEvent = $gameMap.eventsXy(tileX, tileY).some(event =>
						event._priorityType === 1 && !event.isThrough() && !event._erased
					);
					if (hasImpassableEvent) return true;
				}
			}

			if (letters && letters.length > 0) {
				const tiles = $gameMap.allTiles(tileX, tileY);
				const flags = $gameMap.tilesetFlags();

				const tilesetRanges = {
					'A': [[2048, 2815], [2816, 4351], [4352, 5887], [5888, 8191], [1536, 1663]],
					'A1': [[2048, 2815]],
					'A2': [[2816, 4351]],
					'A3': [[4352, 5887]],
					'A4': [[5888, 8191]],
					'A5': [[1536, 1663]],
					'B': [[0, 255]],
					'C': [[256, 511]],
					'D': [[512, 767]],
					'E': [[768, 1023]]
				};
				// Basically block all A3 A4
				if (letters.includes('A3') || letters.includes('A4')) {
					for (const tileId of tiles) {
						if (letters.includes('A3') && tileId >= 4352 && tileId <= 5887) {
							return true;
						}

						if (letters.includes('A4') && tileId >= 5888 && tileId <= 8191) {
							return true;
						}
					}
				}

				const impassableTiles = tiles.filter(tileId => (flags[tileId] & 0x0f));
				if (impassableTiles.length > 0) {
					const otherLetters = letters.filter(letter => letter !== 'A3' && letter !== 'A4');

					if (otherLetters.length > 0) {
						const isForbidden = impassableTiles.some(tileId =>
							otherLetters.some(letter => {
								const ranges = tilesetRanges[letter];
								if (!ranges) return false;

								return ranges.some(([min, max]) => tileId >= min && tileId <= max);
							})
						);

						if (isForbidden) {
							return true;
						}
					}
				}
			}
		}

		return false;
	};

	const forbiddenSettings = (() => {
		const result = { tiles: [], checkEvents: false };
		const notSpawnMatch = args.notSpawnOn?.toLowerCase()?.trim();

		if (!notSpawnMatch) return result;

		notSpawnMatch.split(/,\s*/).forEach(part => {
			if (part.includes('impassable events')) {
				result.checkEvents = true;
			} else if (part.startsWith('impassable')) {
				const tileLetters = part
					.replace('impassable', '')
					.trim()
					.split(/\s+/)
					.map(tile => tile.toUpperCase())
					.filter(tile => /^[A-E][1-5]?$/.test(tile));

				result.tiles.push(...tileLetters);
			}
		});

		return result;
	})();

	const getDirectionOffset = (direction) => {
		const offsets = {
			1: { x: -1, y: 1 },
			2: { x: 0, y: 1 },
			3: { x: 1, y: 1 },
			4: { x: -1, y: 0 },
			6: { x: 1, y: 0 },
			7: { x: -1, y: -1 },
			8: { x: 0, y: -1 },
			9: { x: 1, y: -1 }
		};
		return offsets[direction] || { x: 0, y: 0 };
	};

	const spawnIfValid = (x, y) => {
		const clampedX = Math.max(0, Math.min(x, $gameMap.width() - 1));
		const clampedY = Math.max(0, Math.min(y, $gameMap.height() - 1));
		if (!checkForbiddenTile(clampedX, clampedY, forbiddenSettings.tiles, forbiddenSettings.checkEvents)) {
			let startDegree = args.startDegree;

			if (startDegree === 'player') {
				let playerX, playerY;
				if (H_DotMoveSystem && $gamePlayer.centerPositionPoint) {
					const playerPos = $gamePlayer.centerPositionPoint();
					playerX = playerPos.x - 0.5;
					playerY = playerPos.y - 0.5;
				} else {
					playerX = $gamePlayer.x;
					playerY = $gamePlayer.y;
				}
				const dx = playerX - clampedX;
				const dy = playerY - clampedY;
				const angleRad = Math.atan2(dx, -dy);
				startDegree = String((angleRad * 180 / Math.PI + 360) % 360);
			} else if (startDegree === 'this') {
				const sourceEvent = $gameMap.event(this._eventId);
				if (sourceEvent) {
					let eventX, eventY;
					if (H_DotMoveSystem && sourceEvent.centerPositionPoint) {
						const eventPos = sourceEvent.centerPositionPoint();
						eventX = eventPos.x - 0.5;
						eventY = eventPos.y - 0.5;
					} else {
						eventX = sourceEvent.x;
						eventY = sourceEvent.y;
					}
					const dx = eventX - clampedX;
					const dy = eventY - clampedY;
					const angleRad = Math.atan2(dx, -dy);
					startDegree = String((angleRad * 180 / Math.PI + 360) % 360);
				}
			} else if (startDegree && startDegree.toLowerCase().includes('mouse or gamepad')) {
				const stickInput = checkGamepadInput();
				let baseDegree = 0;

				if (stickInput) {
					const angle = Math.atan2(stickInput.x, -stickInput.y);
					baseDegree = (angle * 180 / Math.PI);
					baseDegree = (baseDegree + 360) % 360;
				} else {
					const cursorX = $gameMap.canvasToMapX(TouchInput.x);
					const cursorY = $gameMap.canvasToMapY(TouchInput.y);
					const dx = cursorX - clampedX;
					const dy = cursorY - clampedY;
					baseDegree = Math.atan2(dy, dx) * 180 / Math.PI;
					baseDegree = (baseDegree + 90) % 360;
				}

				const operation = startDegree.toLowerCase().replace('mouse or gamepad', '').trim();
				if (operation) {
					startDegree = String(eval(`${baseDegree}${operation}`));
				} else {
					startDegree = String(baseDegree);
				}
			}

			let spawnerEnemyName = null;
			let spawnerActorId = null;
			const spawnerEvent = $gameMap.event(this._eventId);
			if (spawnerEvent) {
				if (!spawnerEvent.databaseEnemy && !spawnerEvent.databaseActor) {
					spawnerEvent.getHpValueFromNote();
				}

				if (spawnerEvent.linkedActorId) {
					spawnerActorId = spawnerEvent.linkedActorId;
				}
				else if (spawnerEvent.databaseEnemy && !spawnerEvent._isMinionActor) {
					spawnerEnemyName = spawnerEvent.databaseEnemy.name;
				}
				else if (spawnerEvent._inheritedActorId) {
					spawnerActorId = spawnerEvent._inheritedActorId;
				}
				else if (spawnerEvent._inheritedEnemyName) {
					spawnerEnemyName = spawnerEvent._inheritedEnemyName;
				}
			}

			const eventId = $gameMap.spawnEvent(id, clampedX, clampedY, args.permanent === 'true', startDegree);

			// Inherit actor data
			if (spawnerActorId && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					const actor = $gameActors.actor(spawnerActorId);
					if (actor) {
						spawnedEvent._inheritedActorId = spawnerActorId;
						spawnedEvent._inheritedActorData = actor;
					}
				}
			}

			// Inherit enemy data
			if (spawnerEnemyName && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					spawnedEvent._inheritedEnemyName = spawnerEnemyName;
					spawnedEvent._inheritedEnemyData = $dataEnemies.find(e => e && e.name === spawnerEnemyName);
				}
			}

			if (startDegree) {
				if (startDegree.toLowerCase() === 'mouse or gamepad') {
					$gameMap.event(eventId).rotateTo(startDegree);
				} else if (startDegree.startsWith('<') && startDegree.endsWith('>')) {
					$gameMap.event(eventId).rotateTo(startDegree);
				} else {
					const event = $gameMap.event(eventId);
					event.setOriginPoint('center');
					event.setCustomRotation(false);
					event.customRotationPoint = true;
					event.setRotation(Number(startDegree));
				}
			}

			// Child and Parent
			const attachTo = args.attachTo || 'none';
			if (attachTo !== 'none' && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					let parentEvent = null;

					if (attachTo === 'this') {
						parentEvent = $gameMap.event(this._eventId);
					} else if (attachTo === 'player') {
						parentEvent = $gamePlayer;
					}

					if (parentEvent) {
						spawnedEvent.isPlayerChild = (parentEvent === $gamePlayer);
						spawnedEvent.theParent = parentEvent;
						spawnedEvent.wasAttached = true;

						if (spawnedEvent.isPlayerChild) {
							spawnedEvent.lastPlayerX = $gamePlayer._realX;
							spawnedEvent.lastPlayerY = $gamePlayer._realY;
						} else {
							spawnedEvent.lastParentX = parentEvent._realX;
							spawnedEvent.lastParentY = parentEvent._realY;
						}

						if (H_DotMoveSystem) {
							const parentPos = parentEvent.positionPoint();
							const eventPos = spawnedEvent.positionPoint();
							spawnedEvent.childOffsetX = eventPos.x - parentPos.x;
							spawnedEvent.childOffsetY = eventPos.y - parentPos.y;
						} else {
							spawnedEvent.childOffsetX = spawnedEvent._realX - parentEvent._realX;
							spawnedEvent.childOffsetY = spawnedEvent._realY - parentEvent._realY;
						}
					}
				}
			}
		}
	};

	if (spawnInFront) {
		if (xExp === 'this' && yExp === 'this') {
			const event = $gameMap.event(this._eventId);
			if (event) {
				const direction = event.direction();
				const offset = getDirectionOffset(direction);
				if (H_DotMoveSystem && !useGridBased) {
					const sourcePoint = event.centerPositionPoint();
					spawnIfValid(sourcePoint.x - 0.5 + offset.x, sourcePoint.y - 0.5 + offset.y);
				} else {
					spawnIfValid(event.x + offset.x, event.y + offset.y);
				}
				return;
			}
		} else if (xExp === 'player' && yExp === 'player') {
			const direction = $gamePlayer.direction();
			const offset = getDirectionOffset(direction);
			if (H_DotMoveSystem && !useGridBased) {
				const sourcePoint = $gamePlayer.centerPositionPoint();
				spawnIfValid(sourcePoint.x - 0.5 + offset.x, sourcePoint.y - 0.5 + offset.y);
			} else {
				spawnIfValid($gamePlayer.x + offset.x, $gamePlayer.y + offset.y);
			}
			return;
		}
	}

	if (xExp === 'cursor' || (typeof xExp === 'string' && xExp.includes('cursor'))) {
		const gridX = $gameMap.canvasToMapX(TouchInput.x);
		const gridY = $gameMap.canvasToMapY(TouchInput.y);

		if (H_DotMoveSystem && !useGridBased) {
			const mapX = TouchInput.x + $gameMap._displayX * $gameMap.tileWidth();
			const mapY = TouchInput.y + $gameMap._displayY * $gameMap.tileHeight();
			const pixelX = mapX / $gameMap.tileWidth();
			const pixelY = mapY / $gameMap.tileHeight();
			spawnIfValid(pixelX - 0.5, pixelY - 0.5);
		} else {
			spawnIfValid(gridX, gridY);
		}
	}
	else if (typeof xExp === 'string' && typeof yExp === 'string' &&
		xExp.match(/region\s+(.+)/i) && yExp.match(/region\s+(.+)/i)) {
		const xMatch = xExp.match(/region\s+(.+)/i);
		const yMatch = yExp.match(/region\s+(.+)/i);

		const RegionExpression = (expr) => {
			const regionMatch = expr.match(/(\d+)/);
			if (!regionMatch) return null;

			const regionId = parseInt(regionMatch[1]);
			const fullExpression = expr.trim();

			return { regionId, expression: fullExpression };
		};

		const xData = RegionExpression(xMatch[1]);
		const yData = RegionExpression(yMatch[1]);

		if (xData && yData && xData.regionId === yData.regionId) {
			const regionId = xData.regionId;

			for (let tileX = 0; tileX < $gameMap.width(); tileX++) {
				for (let tileY = 0; tileY < $gameMap.height(); tileY++) {
					if ($gameMap.regionId(tileX, tileY) === regionId) {
						const regionX = tileX;
						const regionY = tileY;

						let xExpression = xData.expression.replace(/\d+/, regionX.toString());
						let yExpression = yData.expression.replace(/\d+/, regionY.toString());

						const spawnX = eval(xExpression);
						const spawnY = eval(yExpression);

						if (!isNaN(spawnX) && !isNaN(spawnY) &&
							spawnX >= 0 && spawnX < $gameMap.width() &&
							spawnY >= 0 && spawnY < $gameMap.height()) {
							spawnIfValid(spawnX, spawnY);
						}
					}
				}
			}
		}
	}

	else if (typeof xExp === 'string' && typeof yExp === 'string' &&
		xExp.match(/<.*>\s*near:\s*.*/) && yExp.match(/<.*>\s*near:\s*.*/)) {
		const parseArg = (arg) => {
			const match = arg.match(/<(.*)>\s*near:\s*(.*)/);
			return {
				notetag: `<${match[1]}>`,
				source: match[2].trim()
			};
		};

		const xParsed = parseArg(xExp);
		const yParsed = parseArg(yExp);

		if (xParsed.notetag === yParsed.notetag && xParsed.source === yParsed.source) {
			const notetag = xParsed.notetag;
			const source = xParsed.source;

			let sourceX, sourceY;
			if (source === 'player') {
				if (H_DotMoveSystem && !useGridBased) {
					sourceX = $gamePlayer.centerPositionPoint().x - 0.5;
					sourceY = $gamePlayer.centerPositionPoint().y - 0.5;
				} else {
					sourceX = $gamePlayer.x;
					sourceY = $gamePlayer.y;
				}
			} else if (source === 'this') {
				const thisEvent = $gameMap.event(this._eventId);
				if (H_DotMoveSystem && !useGridBased) {
					sourceX = thisEvent.centerPositionPoint().x - 0.5;
					sourceY = thisEvent.centerPositionPoint().y - 0.5;
				} else {
					sourceX = thisEvent.x;
					sourceY = thisEvent.y;
				}
			} else {
				const eventId = Number(source);
				const sourceEvent = $gameMap.event(eventId);
				if (sourceEvent) {
					if (H_DotMoveSystem && !useGridBased) {
						sourceX = sourceEvent.centerPositionPoint().x - 0.5;
						sourceY = sourceEvent.centerPositionPoint().y - 0.5;
					} else {
						sourceX = sourceEvent.x;
						sourceY = sourceEvent.y;
					}
				} else {
					return;
				}
			}

			let closestEvent = null;
			let minDistance = Infinity;

			if (H_DotMoveSystem && !useGridBased) {
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const eventX = event.centerPositionPoint().x - 0.5;
						const eventY = event.centerPositionPoint().y - 0.5;
						const distance = Math.sqrt(
							Math.pow(eventX - sourceX, 2) +
							Math.pow(eventY - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					const spawnX = closestEvent.centerPositionPoint().x - 0.5;
					const spawnY = closestEvent.centerPositionPoint().y - 0.5;
					spawnIfValid(spawnX, spawnY);
				}
			} else {
				// Grid-based
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const distance = Math.sqrt(
							Math.pow(event.x - sourceX, 2) +
							Math.pow(event.y - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					spawnIfValid(closestEvent.x, closestEvent.y);
				}
			}
		}
	}
	else {
		xExp = spawnEventsShorcut(xExp, this._eventId, 'x', usePixelMode);
		yExp = spawnEventsShorcut(yExp, this._eventId, 'y', usePixelMode);

		if (typeof xExp === 'string' && typeof yExp === 'string' &&
			xExp.includes('<') && yExp.includes('<')) {
			const extractNotetag = (expr) => {
				const match = expr.match(/<([^>]+)>/);
				return match ? `<${match[1]}>` : null;
			};

			const xNotetag = extractNotetag(xExp);
			const yNotetag = extractNotetag(yExp);

			if (xNotetag && yNotetag) {
				const target = findTarget(xNotetag);

				if (target) {
					let baseX, baseY;
					if (H_DotMoveSystem && !useGridBased) {
						baseX = target.centerPositionPoint().x - 0.5;
						baseY = target.centerPositionPoint().y - 0.5;
					} else {
						baseX = target.x;
						baseY = target.y;
					}

					xExp = xExp.replace(/<[^>]+>/, baseX);
					yExp = yExp.replace(/<[^>]+>/, baseY);
				} else {
					return;
				}
			}
		}

		const x = eval(xExp);
		const y = eval(yExp);
		spawnIfValid(x, y);
	}

	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

function Game_DynamicEvent() {
	this.initialize.apply(this, arguments);
}

Game_DynamicEvent.prototype = Object.create(Game_Event.prototype);
Game_DynamicEvent.prototype.constructor = Game_DynamicEvent;

Game_DynamicEvent.prototype.initialize = function (mapId, eventId, x, y, note, waitTime, comments) {
	this._spawnX = x;
	this._spawnY = y;
	this._note = note;
	this._waitTime = waitTime;
	this._comments = comments;
	this.isDynamicEvent = true;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_DynamicEvent.prototype.event = function () {
	let eventList = [];

	if (this._comments) {
		eventList.push({ code: 108, indent: 0, parameters: [this._comments] });
	}

	if (this._waitTime) {
		eventList.push({ code: 230, indent: 0, parameters: [Number(this._waitTime)] });
		eventList.push({
			code: 355, indent: 0, parameters: [
				`const thisEventId = ${this._eventId};
                CollisionManager?.clearCollisions(thisEventId);
                $gameMap.removeEventFromTagIndex($gameMap._events[thisEventId]);
                $gameMap._events[thisEventId] = null;`
			]
		});
	}

	eventList.push({ code: 0, indent: 0, parameters: [] });

	return {
		id: this._eventId,
		name: "DynamicHitbox",
		note: this._note || "",
		meta: {},
		x: this._spawnX,
		y: this._spawnY,
		pages: [{
			conditions: {
				actorId: 1, actorValid: false,
				itemId: 1, itemValid: false,
				selfSwitchCh: "A", selfSwitchValid: false,
				switch1Id: 1, switch1Valid: false,
				switch2Id: 1, switch2Valid: false,
				variableId: 1, variableValid: false,
				variableValue: 0
			},
			image: {
				tileId: 0,
				characterName: "",
				direction: 2,
				pattern: 1,
				characterIndex: 0
			},
			list: eventList,
			moveFrequency: 3,
			moveRoute: {
				list: [{ code: 0, parameters: [] }],
				repeat: true,
				skippable: false,
				wait: false
			},
			moveSpeed: 3,
			moveType: 0,
			priorityType: 0,
			stepAnime: false,
			through: true,
			trigger: 4,
			walkAnime: true
		}]
	};
};

Game_DynamicEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

PluginManager.registerCommand(HpluginName, "spawnEventHitbox", function (args) {
	let xExp, yExp;

	if (args.position !== undefined) {
		const positionParts = args.position.split(',').map(p => p.trim());
		if (positionParts.length === 1) {
			xExp = positionParts[0];
			yExp = positionParts[0];
		} else {
			xExp = positionParts[0];
			yExp = positionParts[1] || positionParts[0];
		}
	}
	else if (args.x !== undefined && args.y !== undefined) {
		xExp = args.x;
		yExp = args.y;
	}
	else {
		xExp = 'this';
		yExp = 'this';
	}

	const usePixelMode = H_DotMoveSystem ? true : false;

	// <notetag> near: this/player/eventId
	const nearTagRegex = /<(.+?)>\s*near:\s*(this|player|\d+)/i;
	const xMatch = typeof xExp === 'string' ? xExp.match(nearTagRegex) : null;
	const yMatch = typeof yExp === 'string' ? yExp.match(nearTagRegex) : null;

	if (xMatch && yMatch && xMatch[1] === yMatch[1] && xMatch[2] === yMatch[2]) {
		const notetag = `<${xMatch[1]}>`;
		const sourceType = xMatch[2].toLowerCase();

		let sourceX, sourceY;
		if (sourceType === 'this') {
			const event = $gameMap.event(this._eventId);
			if (H_DotMoveSystem) {
				sourceX = event.centerPositionPoint().x - 0.5;
				sourceY = event.centerPositionPoint().y - 0.5;
			} else {
				sourceX = event.x;
				sourceY = event.y;
			}
		} else if (sourceType === 'player') {
			if (H_DotMoveSystem) {
				sourceX = $gamePlayer.centerPositionPoint().x - 0.5;
				sourceY = $gamePlayer.centerPositionPoint().y - 0.5;
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		} else {
			const eventId = parseInt(sourceType);
			const event = $gameMap.event(eventId);
			if (event) {
				if (H_DotMoveSystem) {
					sourceX = event.centerPositionPoint().x - 0.5;
					sourceY = event.centerPositionPoint().y - 0.5;
				} else {
					sourceX = event.x;
					sourceY = event.y;
				}
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		}

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(notetag)) {
				let eventX, eventY;
				if (H_DotMoveSystem) {
					eventX = event.centerPositionPoint().x - 0.5;
					eventY = event.centerPositionPoint().y - 0.5;
				} else {
					eventX = event.x;
					eventY = event.y;
				}

				const distance = Math.sqrt(
					Math.pow(eventX - sourceX, 2) +
					Math.pow(eventY - sourceY, 2)
				);

				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			if (H_DotMoveSystem) {
				xExp = closestEvent.centerPositionPoint().x - 0.5;
				yExp = closestEvent.centerPositionPoint().y - 0.5;
			} else {
				xExp = closestEvent.x;
				yExp = closestEvent.y;
			}
		}
	} else {
		xExp = spawnEventsShorcut(xExp, this._eventId, 'x', usePixelMode);
		yExp = spawnEventsShorcut(yExp, this._eventId, 'y', usePixelMode);
	}

	const x = eval(xExp);
	const y = eval(yExp);

	let rotationDegree = 0;
	if (args.rotationDegree) {
		if (args.rotationDegree === 'player') {
			let playerX, playerY;
			if (H_DotMoveSystem && $gamePlayer.centerPositionPoint) {
				playerX = $gamePlayer.centerPositionPoint().x - 0.5;
				playerY = $gamePlayer.centerPositionPoint().y - 0.5;
			} else {
				playerX = $gamePlayer.x;
				playerY = $gamePlayer.y;
			}
			const dx = playerX - x;
			const dy = playerY - y;
			const angleRad = Math.atan2(dx, -dy);
			rotationDegree = (angleRad * 180 / Math.PI + 360) % 360;
		} else if (args.rotationDegree === 'this') {
			const sourceEvent = $gameMap.event(this._eventId);
			if (sourceEvent) {
				let eventX, eventY;
				if (H_DotMoveSystem && sourceEvent.centerPositionPoint) {
					const eventPos = sourceEvent.centerPositionPoint();
					eventX = eventPos.x - 0.5;
					eventY = eventPos.y - 0.5;
				} else {
					eventX = sourceEvent.x;
					eventY = sourceEvent.y;
				}

				const dx = eventX - x;
				const dy = eventY - y;
				const angleRad = Math.atan2(dx, -dy);
				rotationDegree = (angleRad * 180 / Math.PI + 360) % 360;
			}
		} else if (args.rotationDegree === 'mouse or gamepad') {
			const stickInput = checkGamepadInput();

			if (stickInput) {
				const angle = Math.atan2(stickInput.x, -stickInput.y);
				rotationDegree = (angle * 180 / Math.PI);
				rotationDegree = (rotationDegree + 360) % 360;
			} else {
				const cursorX = $gameMap.canvasToMapX(TouchInput.x);
				const cursorY = $gameMap.canvasToMapY(TouchInput.y);
				const dx = cursorX - x;
				const dy = cursorY - y;
				rotationDegree = Math.atan2(dy, dx) * 180 / Math.PI;
				rotationDegree = (rotationDegree + 90) % 360;
			}
		} else {
			try {
				rotationDegree = eval(args.rotationDegree);
			} catch (e) {
				rotationDegree = 0;
			}
		}
	}

	let notetags = '';
	if (args.notetag) {
		if (args.notetag.includes('>, ')) {
			notetags = args.notetag.split('>, ')
				.map(tag => tag.trim() + (tag.trim().endsWith('>') ? '' : '>')).join('');
		} else {
			notetags = args.notetag;
		}
	}

	// Inherit stuff
	let spawnerEnemyName = null;
	let spawnerActorId = null;
	const spawnerEvent = $gameMap.event(this._eventId);
	if (spawnerEvent) {
		if (!spawnerEvent.databaseEnemy && !spawnerEvent.databaseActor) {
			spawnerEvent.getHpValueFromNote();
		}

		if (spawnerEvent.linkedActorId) {
			spawnerActorId = spawnerEvent.linkedActorId;
		}
		else if (spawnerEvent.databaseEnemy && !spawnerEvent._isMinionActor) {
			spawnerEnemyName = spawnerEvent.databaseEnemy.name;
		}
		else if (spawnerEvent._inheritedActorId) {
			spawnerActorId = spawnerEvent._inheritedActorId;
		}
		else if (spawnerEvent._inheritedEnemyName) {
			spawnerEnemyName = spawnerEvent._inheritedEnemyName;
		}
	}

	const eventId = $gameMap.getNextEventId();
	const event = new Game_DynamicEvent($gameMap._mapId, eventId, x, y, notetags, args.wait, args.comment);

	if (spawnerActorId) {
		const actor = $gameActors.actor(spawnerActorId);
		if (actor) {
			event._inheritedActorId = spawnerActorId;
			event._inheritedActorData = actor;
		}
	}

	if (spawnerEnemyName) {
		event._inheritedEnemyName = spawnerEnemyName;
		event._inheritedEnemyData = $dataEnemies.find(e => e && e.name === spawnerEnemyName);
	}

	const attachTo = args.attachTo || '';
	if (attachTo !== '' && attachTo.trim() !== '') {
		let parentEvent = null;
		const attachTarget = attachTo.trim();

		if (attachTarget === 'this') {
			parentEvent = $gameMap.event(this._eventId);
		} else if (attachTarget === 'player') {
			parentEvent = $gamePlayer;
		} else if (attachTarget.startsWith('<') && attachTarget.endsWith('>')) {
			let minDistance = Infinity;
			$gameMap.events().forEach(mapEvent => {
				if (mapEvent && mapEvent.event() && mapEvent.event().note.includes(attachTarget)) {
					const distance = Math.abs(mapEvent.x - event.x) + Math.abs(mapEvent.y - event.y);
					if (distance < minDistance) {
						minDistance = distance;
						parentEvent = mapEvent;
					}
				}
			});
		}

		if (parentEvent) {
			event.isPlayerChild = (parentEvent === $gamePlayer);
			event.theParent = parentEvent;
			event.wasAttached = true;

			if (event.isPlayerChild) {
				event.lastPlayerX = $gamePlayer._realX;
				event.lastPlayerY = $gamePlayer._realY;
			} else {
				event.lastParentX = parentEvent._realX;
				event.lastParentY = parentEvent._realY;
			}

			if (H_DotMoveSystem) {
				const parentPos = parentEvent.positionPoint();
				const eventPos = event.positionPoint();
				event.childOffsetX = eventPos.x - parentPos.x;
				event.childOffsetY = eventPos.y - parentPos.y;
			} else {
				event.childOffsetX = event._realX - parentEvent._realX;
				event.childOffsetY = event._realY - parentEvent._realY;
			}
		}
	}

	$gameMap._events[eventId] = event;
	$gameMap.addEventToTagIndex(event);

	if (rotationDegree !== 0) {
		event.setOriginPoint('center');
		event.setCustomRotation(false);
		event.customRotationPoint = true;
		event.setRotation(Number(rotationDegree));
	}

	return eventId;
});

PluginManager.registerCommand(HpluginName, "DestroyDynamicEvent", function (args) {
	const nearTagRegex = /<(.+?)>\s*near:\s*(this|player|\d+)/i;
	const nearMatch = args.notetag.match(nearTagRegex);

	if (nearMatch) {
		const notetag = `<${nearMatch[1]}>`;
		const sourceType = nearMatch[2].toLowerCase();

		let sourceX, sourceY;
		if (sourceType === 'this') {
			const event = $gameMap.event(this._eventId);
			sourceX = event.x;
			sourceY = event.y;
		} else if (sourceType === 'player') {
			sourceX = $gamePlayer.x;
			sourceY = $gamePlayer.y;
		} else {
			const eventId = parseInt(sourceType);
			const event = $gameMap.event(eventId);
			if (event) {
				sourceX = event.x;
				sourceY = event.y;
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		}

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (!event || !event.event()) return;
			if (event.event().name !== "DynamicHitbox") return;
			if (event.event().note.includes(notetag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - sourceX, 2) +
					Math.pow(event.y - sourceY, 2)
				);

				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			const eventId = closestEvent.eventId();

			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset?.unspawnEvent(eventId);
			}

			if (SceneManager._scene._spriteset) {
				const spriteset = SceneManager._scene._spriteset;
				const hpBarIndex = spriteset._eventHpBars?.findIndex(bar =>
					bar._event._eventId === eventId
				);
				if (hpBarIndex > -1) {
					const hpBar = spriteset._eventHpBars[hpBarIndex];
					spriteset._tilemap.removeChild(hpBar);
					spriteset._eventHpBars.splice(hpBarIndex, 1);
				}
			}

			if (CollisionManager) {
				CollisionManager.clearCollisions(eventId);
			}

			$gameMap.removeEventFromTagIndex(closestEvent);
			if ($gameMap.tagToEvents) {
				for (const [tag, eventArray] of $gameMap.tagToEvents.entries()) {
					const index = eventArray.indexOf(closestEvent);
					if (index > -1) {
						eventArray.splice(index, 1);
						if (eventArray.length === 0) {
							$gameMap.tagToEvents.delete(tag);
						}
					}
				}
			}
			setTimeout(() => {
				if ($gameMap._events[eventId]) {
					$gameMap._events[eventId] = null;
				}
				if ($dataMap && $dataMap.events && $dataMap.events[eventId]) {
					$dataMap.events[eventId] = null;
				}
			}, 50);
		}
	} else {
		const notetags = args.notetag.split(',').map(tag => {
			tag = tag.trim();
			if (!tag.startsWith('<')) tag = '<' + tag;
			if (!tag.endsWith('>')) tag = tag + '>';
			return tag;
		});

		$gameMap.events().forEach(event => {
			if (!event || !event.event()) return;

			if (event.event().name !== "DynamicHitbox") return;
			if (notetags.some(tag => event.event().note.includes(tag))) {
				const eventId = event.eventId();


				if (SceneManager._scene instanceof Scene_Map) {
					SceneManager._scene._spriteset?.unspawnEvent(eventId);
				}

				if (SceneManager._scene._spriteset) {
					const spriteset = SceneManager._scene._spriteset;
					const hpBarIndex = spriteset._eventHpBars?.findIndex(bar =>
						bar._event._eventId === eventId
					);
					if (hpBarIndex > -1) {
						const hpBar = spriteset._eventHpBars[hpBarIndex];
						spriteset._tilemap.removeChild(hpBar);
						spriteset._eventHpBars.splice(hpBarIndex, 1);
					}
				}

				if (CollisionManager) {
					CollisionManager.clearCollisions(eventId);
					delete CollisionManager.collisionData[eventId];
				}
				if ($gameSystem.collisionTimestamps) {
					for (const key in $gameSystem.collisionTimestamps) {
						if (key.includes(`-${eventId}-`)) {
							delete $gameSystem.collisionTimestamps[key];
						}
					}
				}
				if ($gameSystem.collidedOnceEvents) {
					for (const key in $gameSystem.collidedOnceEvents) {
						if (key.includes(`-${eventId}-`)) {
							delete $gameSystem.collidedOnceEvents[key];
						}
					}
				}
				$gameMap.removeEventFromTagIndex(event);
				setTimeout(() => {
					if ($gameMap._events[eventId]) {
						$gameMap._events[eventId] = null;
					}
					if ($dataMap && $dataMap.events && $dataMap.events[eventId]) {
						$dataMap.events[eventId] = null;
					}
				}, 50);
			}
		});
	}
});

PluginManager.registerCommand(HpluginName, "DestroyEvent", function (args) {
	const identifier = args.target || 'this';
	const permanent = args.permanent === 'true';
	const destroyNearby = args.destroyNearby || '';
	let sourceEvents = findTargets(identifier, this);

	if (destroyNearby && destroyNearby.trim() !== '') {
		const nearbyEvents = [];

		sourceEvents.forEach(sourceEvent => {
			let closestEvent = null;
			let minDistance = Infinity;
			const sourceX = sourceEvent.x;
			const sourceY = sourceEvent.y;

			$gameMap.events().forEach(otherEvent => {
				if (!otherEvent || otherEvent === sourceEvent) return;
				if (!(otherEvent instanceof Game_Event)) return;

				const matchesNotetag = destroyNearby.startsWith('<') &&
					destroyNearby.endsWith('>') &&
					otherEvent.event().note.includes(destroyNearby);
				const matchesName = otherEvent.event().name === destroyNearby;

				if (matchesNotetag || matchesName) {
					const distance = Math.sqrt(
						Math.pow(otherEvent.x - sourceX, 2) +
						Math.pow(otherEvent.y - sourceY, 2)
					);

					if (distance < minDistance) {
						closestEvent = otherEvent;
						minDistance = distance;
					}
				}
			});

			if (closestEvent && !nearbyEvents.includes(closestEvent)) {
				nearbyEvents.push(closestEvent);
			}
		});

		sourceEvents = nearbyEvents;
	}

	sourceEvents.forEach(event => {
		const eventId = event.eventId();
		const isSpawnedEvent = event instanceof Hendrix_TemplateEvent || event instanceof Game_DynamicEvent;

		if (isSpawnedEvent) {
			// Spawned event
			$gameMap.removeEventFromTagIndex(event);
			if (event._characterName) {
				eventHeightCache.delete(event._characterName);
			}
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(eventId);
			}
			$gameMap.unspawnEvent(eventId);
			this.removeEventHpBar(eventId);
		} else {
			// Regular event
			const hpStorageKey = `Map${$gameMap.mapId()}_Event${eventId}_HP`;
			if ($gameVariables._data[hpStorageKey]) {
				delete $gameVariables._data[hpStorageKey];
			}

			if (permanent) {
				if (!$gameSystem._deletedMapEvents) {
					$gameSystem._deletedMapEvents = {};
				}
				if (!$gameSystem._deletedMapEvents[$gameMap._mapId]) {
					$gameSystem._deletedMapEvents[$gameMap._mapId] = [];
				}
				if (!$gameSystem._deletedMapEvents[$gameMap._mapId].includes(eventId)) {
					$gameSystem._deletedMapEvents[$gameMap._mapId].push(eventId);
				}
			}

			if (SceneManager._scene instanceof Scene_Map) {
				const spriteset = SceneManager._scene._spriteset;
				for (let i = spriteset._characterSprites.length - 1; i >= 0; i--) {
					const sprite = spriteset._characterSprites[i];
					if (sprite._character === event) {
						spriteset._tilemap.removeChild(sprite);
						spriteset._characterSprites.splice(i, 1);
						if (sprite.bitmap) {
							sprite.bitmap = null;
						}
						sprite._character = null;
					}
				}
			}

			['A', 'B', 'C', 'D'].forEach(letter => {
				$gameSelfSwitches.setValue([$gameMap._mapId, eventId, letter], false);
			});
			this.removeEventHpBar(eventId);
			if (typeof CollisionManager !== 'undefined') {
				CollisionManager.clearCollisions(eventId);
			}
			if (typeof LocalVarManager !== 'undefined' && LocalVarManager.clearEventVars) {
				LocalVarManager.clearEventVars($gameMap._mapId, eventId);
			}
			$gameMap.removeEventFromTagIndex(event);
			event.erase();
			$gameMap._events[eventId] = null;
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyEvent", function (args) {
	const targetId = getTargetEventId(args.identifier, this);

	if (targetId !== null) {
		if ($gameMap._events[targetId]) {
			const event = $gameMap._events[targetId];
			$gameMap.removeEventFromTagIndex(event);
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(targetId);
			}
			$gameMap.unspawnEvent(targetId);
			this.removeEventHpBar(targetId);
		}
		return;
	}

	$gameMap.events().forEach(event => {
		if (!event || !(event instanceof Game_Event)) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const eventId = event.eventId();
			$gameMap.removeEventFromTagIndex(event);
			if (event._characterName) {
				eventHeightCache.delete(event._characterName);
			}
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(eventId);
			}
			$gameMap.unspawnEvent(eventId);
			this.removeEventHpBar(eventId);
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyRegularEvent", function (args) {
	const identifier = args.target;
	const permanent = args.permanent === 'true';
	const targetEvents = findTargets(identifier, this).filter(event =>
		!(event instanceof Hendrix_TemplateEvent)
	);

	targetEvents.forEach(event => {
		const eventId = event.eventId();
		const hpStorageKey = `Map${$gameMap.mapId()}_Event${eventId}_HP`;
		if ($gameVariables._data[hpStorageKey]) {
			delete $gameVariables._data[hpStorageKey];
		}

		if (permanent) {
			if (!$gameSystem._deletedMapEvents) {
				$gameSystem._deletedMapEvents = {};
			}

			if (!$gameSystem._deletedMapEvents[$gameMap._mapId]) {
				$gameSystem._deletedMapEvents[$gameMap._mapId] = [];
			}

			if (!$gameSystem._deletedMapEvents[$gameMap._mapId].includes(eventId)) {
				$gameSystem._deletedMapEvents[$gameMap._mapId].push(eventId);
			}
		}

		if (SceneManager._scene instanceof Scene_Map) {
			const spriteset = SceneManager._scene._spriteset;
			for (let i = spriteset._characterSprites.length - 1; i >= 0; i--) {
				const sprite = spriteset._characterSprites[i];
				if (sprite._character === event) {
					spriteset._tilemap.removeChild(sprite);
					spriteset._characterSprites.splice(i, 1);
					if (sprite.bitmap) {
						sprite.bitmap = null;
					}
					sprite._character = null;
				}
			}
		}

		['A', 'B', 'C', 'D'].forEach(letter => {
			$gameSelfSwitches.setValue([$gameMap._mapId, eventId, letter], false);
		});
		this.removeEventHpBar(eventId);
		if (typeof CollisionManager !== 'undefined') {
			CollisionManager.clearCollisions(eventId);
		}
		if (typeof LocalVarManager !== 'undefined' && LocalVarManager.clearEventVars) {
			LocalVarManager.clearEventVars($gameMap._mapId, eventId);
		}
		$gameMap.removeEventFromTagIndex(event);
		event.erase();
		$gameMap._events[eventId] = null;

	});
});

PluginManager.registerCommand(HpluginName, "destroyEventNear", function (args) {
	const sourceEventId = getTargetEventId(args.eventId, this);
	const sourceEvent = $gameMap.event(sourceEventId);

	if (!sourceEvent) return false;

	let nearestEventId = null;
	let minDistance = Number.MAX_VALUE;

	$gameMap.events().forEach(event => {
		if (!event || event.eventId() === sourceEventId) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const distance = Math.sqrt(
				Math.pow(event.x - sourceEvent.x, 2) +
				Math.pow(event.y - sourceEvent.y, 2)
			);

			if (distance < minDistance) {
				minDistance = distance;
				nearestEventId = event.eventId();
			}
		}
	});

	if (nearestEventId !== null) {
		if (SceneManager._scene instanceof Scene_Map) {
			SceneManager._scene._spriteset.unspawnEvent(nearestEventId);
		}
		$gameMap.unspawnEvent(nearestEventId);
		this.removeEventHpBar(nearestEventId);

		return true;
	}
	return false;
});

DataManager.loadTemplateMapData = function () {
	if (templateMapId > 0) {
		this.loadDataFile('$dataTemplateMap', 'Map%1.json'.format(templateMapId.padZero(3)));
	}
};

DataManager.loadTemplateMapData();

const H_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	H_Game_System_initialize.call(this);
	this.collisionTimestamps = {};
	this._playerHitboxCollisions = {};
	this._permanentEvents = {};
	this._deletedMapEvents = {};
	this._gunData = this._gunData || {};
	this._playerPassThroughEvents = [];
};

const H_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (mapId) {
	this.eventsPaused = false;
	this.pausingEvent = null;
	passageCache = {};
	this.clearTagIndex();
	this.initializePassCache();
	this.clearCustomEventHitboxCaches();
	H_Game_Map_setup.call(this, mapId);
	this.resetNextEventId();
	this.platformCache = null;
	this.lastPlatformCache = 0;
	this.respawnPermanentEvents();
	this.removeDeletedEvents();
	if (this._events) {
		this._events.forEach(event => {
			if (event && !event.noHpBar) {
				event.setInitialHp();
			}
		});
	}
	if (spawnActorsAtStart) {
		setTimeout(() => {
			$gameParty.members().forEach(actor => {
				const actorName = actor.name();
				const id = $dataTemplateMap.events.findIndex(e => e?.name === actorName);
				if (id > 0) {
					$gameMap.spawnEvent(id, $gamePlayer.x, $gamePlayer.y, false);
				}
			});
		}, 50);
	}

	eventsToSpawn.forEach(identifier => {
		const idNum = Number(identifier);
		const id = !isNaN(idNum) ? idNum :
			$dataTemplateMap.events.findIndex(e => e?.name === identifier);

		if (id > 0) {
			$gameMap.spawnEvent(id, 0, 0, false);
		}
	});
	this.buildTagIndex();
	for (const key in lastHpDecrease) {
		delete lastHpDecrease[key];
	}
	const platforms = this.getPlatforms();
	platforms.forEach(platform => {
		platform.H_lastPosition = null;
		platform.attachedCharacters = new Map();
	});

	this.skipCollisionCache = {};

	if ($gameSystem.collisionTimestamps) {
		$gameSystem.collisionTimestamps = {};
	}
	if ($gameSystem.collidedOnceEvents) {
		$gameSystem.collidedOnceEvents = {};
	}
	if ($gamePlayer) {
		$gamePlayer.cachedShouldCheckFlip = undefined;
		$gamePlayer.cachedNamedEvent = undefined;
	}
	$gameMap.events().forEach(event => {
		event.cachedShouldCheckFlip = undefined;
		event.cachedNamedEvent = undefined;
	});
	this.buildPassEventPositions();
};

const H_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
	const contents = H_DataManager_makeSaveContents.call(this);
	contents.eventHpData = {};
	for (const key in $gameVariables._data) {
		if (key.startsWith('Map') && key.includes('_Event') && key.endsWith('_HP')) {
			contents.eventHpData[key] = $gameVariables._data[key];
		}
	}
	contents.gunData = $gameSystem._gunData;
	return contents;
};

const H_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
	H_DataManager_extractSaveContents.call(this, contents);
	if (contents.eventHpData) {
		for (const key in contents.eventHpData) {
			$gameVariables._data[key] = contents.eventHpData[key];
		}
	}
	if ($gameMap) {
		$gameMap.clearPassageCache();
	}
	LocalVarManager.loadLocalVars();
	if (contents.gunData) {
		$gameSystem._gunData = contents.gunData;

		for (const weaponId in $gameSystem._gunData) {
			const gunData = $gameSystem._gunData[weaponId];
			if (gunData.ammoItemId) {
				gunData.ammoItem = $dataItems[gunData.ammoItemId];
			}
		}
	} else {
		$gameSystem._gunData = {};
	}
};

const H_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function () {
	H_Scene_Map_onMapLoaded.call(this);
	if ($gameMap && $gameMap.buildTagIndex) {
		$gameMap.buildTagIndex();
	}
	if (isBeatEmUp) {
		if ($gamePlayer._direction === 2 || $gamePlayer._direction === 8) {
			$gamePlayer._direction = 6;
		}
	}
};

//============================================================
// DETECTION AND CUSTOM MOVEMENT
//============================================================

//Path finding, override default moveTowardPlayer
Game_Character.prototype.moveTowardPlayer = function () {
	const d = this.findDirectionTo($gamePlayer.x, $gamePlayer.y);
	if (d === 0) return;

	let horz = 0;
	let vert = 0;

	switch (d) {
		case 1: horz = 4; vert = 2; break;
		case 2: vert = 2; break;
		case 3: horz = 6; vert = 2; break;
		case 4: horz = 4; break;
		case 6: horz = 6; break;
		case 7: horz = 4; vert = 8; break;
		case 8: vert = 8; break;
		case 9: horz = 6; vert = 8; break;
	}

	if (horz !== 0) {
		this.setDirection(horz);
	} else {
		this.setDirection(vert);
	}

	if (horz !== 0 && vert !== 0) {
		this.moveDiagonally(horz, vert);
	} else {
		this.moveStraight(d);
	}
};

Game_Event.prototype.searchLimit = function () {
	return 10;
};

//------------------------ CHECK IN RANGE FEATURE ----------------------------------------------

const getVisionConePoints = (x, y, direction, range, fov) => {
	const tileWidth = $gameMap.tileWidth();
	const tileHeight = $gameMap.tileHeight();
	const pixelSourceX = (x + 0.5) * tileWidth;
	const pixelSourceY = (y + 0.5) * tileHeight;
	const baseAngle = (direction === 2) ? 90 : (direction === 4) ? 180 : (direction === 6) ? 0 : 270;
	const startAngle = ((baseAngle - fov / 2) * Math.PI / 180);
	const endAngle = ((baseAngle + fov / 2) * Math.PI / 180);
	const pixelRange = range * tileWidth;

	getVisionConePoints.isInCone = (targetX, targetY) => {
		const pixelTargetX = (targetX + 0.5) * tileWidth;
		const pixelTargetY = (targetY + 0.5) * tileHeight;
		const dx = pixelTargetX - pixelSourceX;
		const dy = pixelTargetY - pixelSourceY;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > pixelRange) return false;
		let pointAngle = Math.atan2(dy, dx);
		if (pointAngle < 0) pointAngle += Math.PI * 2;
		let normalizedStartAngle = startAngle;
		if (normalizedStartAngle < 0) normalizedStartAngle += Math.PI * 2;
		let normalizedEndAngle = endAngle;
		if (normalizedEndAngle < 0) normalizedEndAngle += Math.PI * 2;
		if (normalizedStartAngle > normalizedEndAngle) {
			return pointAngle >= normalizedStartAngle || pointAngle <= normalizedEndAngle;
		} else {
			return pointAngle >= normalizedStartAngle && pointAngle <= normalizedEndAngle;
		}
	};

	const points = [];
	points.push({
		x: pixelSourceX,
		y: pixelSourceY
	});
	const segments = 32;
	for (let i = 0; i <= segments; i++) {
		const currentAngle = startAngle + (endAngle - startAngle) * (i / segments);
		const x = pixelSourceX + Math.cos(currentAngle) * pixelRange;
		const y = pixelSourceY + Math.sin(currentAngle) * pixelRange;
		points.push({
			x: x,
			y: y
		});
	}

	return points;
};

window.hasLineOfSight = function (x0, y0, x1, y1, blockRegion) {
	if (blockRegion <= 0) return true;

	let dx = Math.abs(x1 - x0);
	let dy = Math.abs(y1 - y0);
	let x = x0;
	let y = y0;
	let n = 1 + dx + dy;
	let x_inc = (x1 > x0) ? 1 : -1;
	let y_inc = (y1 > y0) ? 1 : -1;
	let error = dx - dy;
	dx *= 2;
	dy *= 2;

	for (; n > 0; --n) {
		if ($gameMap.regionId(x, y) === blockRegion) {
			return false;
		}
		if (error > 0) {
			x += x_inc;
			error -= dy;
		} else {
			y += y_inc;
			error += dx;
		}
	}
	return true;
};

Game_System.prototype.checkInRange = function (source, range, target, eyes = 0, blockRegion = 0, exception = null) {
	let sourceX, sourceY, sourceDirection;
	let sourceEvent;

	if (source === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		sourceDirection = $gamePlayer.direction();
		sourceEvent = $gamePlayer;
	} else {
		sourceEvent = $gameMap.event(source);
		if (!sourceEvent) return false;
		sourceX = sourceEvent.x;
		sourceY = sourceEvent.y;
		sourceDirection = sourceEvent.direction();
	}

	if (sourceEvent) {
		sourceEvent._lastCheckRange = {
			range: range,
			eyes: eyes,
			blockRegion: blockRegion
		};
	}

	// Case 1: Player target
	if (target === "player") {
		const dx = Math.abs(sourceX - $gamePlayer.x);
		const dy = Math.abs(sourceY - $gamePlayer.y);
		if (dx > range || dy > range) return false;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > range) return false;
		if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, $gamePlayer.x, $gamePlayer.y, blockRegion))
			return false;
		if (!eyes || eyes === 0) return true;
		getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
		return getVisionConePoints.isInCone($gamePlayer.x, $gamePlayer.y);
	}
	// Case 2: This event target
	else if (target === 'this') {
		const event = $gameMap.event(this._eventId);
		if (!event) return false;
		const dx = Math.abs(sourceX - event.x);
		const dy = Math.abs(sourceY - event.y);
		if (dx > range || dy > range) return false;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > range) return false;
		if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, event.x, event.y, blockRegion))
			return false;
		if (!eyes || eyes === 0) return true;

		getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
		return getVisionConePoints.isInCone(event.x, event.y);
	}
	// Case 3: Region target
	else if (typeof target === 'string' && target.startsWith('region ')) {
		const regionId = parseInt(target.split(' ')[1]);
		if (isNaN(regionId)) return false;

		const searchStartX = Math.max(0, sourceX - range);
		const searchEndX = Math.min($gameMap.width() - 1, sourceX + range);
		const searchStartY = Math.max(0, sourceY - range);
		const searchEndY = Math.min($gameMap.height() - 1, sourceY + range);

		for (let x = searchStartX; x <= searchEndX; x++) {
			for (let y = searchStartY; y <= searchEndY; y++) {
				if ($gameMap.regionId(x, y) !== regionId) continue;

				const dx = Math.abs(sourceX - x);
				const dy = Math.abs(sourceY - y);
				if (dx > range || dy > range) continue;

				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance > range) continue;

				if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, x, y, blockRegion))
					continue;

				if (eyes && eyes > 0) {
					getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes);
					if (!getVisionConePoints.isInCone(x, y)) continue;
				}

				return true;
			}
		}

		return false;
	}
	// Case 3: Tagged events
	else {
		const taggedEvents = $gameMap.events().filter(event =>
			event && event.event() && event.event().note.includes(target));

		for (const otherEvent of taggedEvents) {
			// Prevent self-detection when source is this._eventId
			if (source === otherEvent.eventId()) {
				continue;
			}
			if (exception && otherEvent.event().note.includes(exception)) {
				const currentPage = otherEvent.page();
				const hasAttackNotetag = currentPage && currentPage.list.some(command =>
					command.code === 108 && command.parameters[0].includes('<detectable>')
				);

				if (!hasAttackNotetag) continue;
			}

			const dx = Math.abs(sourceX - otherEvent.x);
			const dy = Math.abs(sourceY - otherEvent.y);
			if (dx > range || dy > range) continue;

			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance > range) continue;

			if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, otherEvent.x, otherEvent.y, blockRegion))
				continue;

			if (!eyes || eyes === 0) {
				return true;
			}

			getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
			if (getVisionConePoints.isInCone(otherEvent.x, otherEvent.y)) {
				return true;
			}
		}

		return false;
	}
};

Game_System.prototype.isTargetInRangeAndVisible = function (sourceX, sourceY, sourceDirection, targetX, targetY, range, eyes) {
	const dx = Math.abs(targetX - sourceX);
	const dy = Math.abs(targetY - sourceY);
	if (dx > range || dy > range) return false;
	const distance = Math.sqrt(dx * dx + dy * dy);
	if (distance > range) return false;
	if (eyes) {
		switch (sourceDirection) {
			case 2:
				return targetY >= sourceY;
			case 4:
				return targetX <= sourceX;
			case 6:
				return targetX >= sourceX;
			case 8:
				return targetY <= sourceY;
		}
	}
	return true;
};

// Movement -------------------------------------------------------

Game_System.prototype.moveAroundEvent = function (eventId, notetag, maxDistance, minDistance) {
	const event = $gameMap.event(eventId);
	if (!event) return;

	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		const closestEvent = findNearestTarget(notetag, event.x, event.y);
		if (!closestEvent) return;
		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY, distanceToNew;

	do {
		const angle = Math.random() * 2 * Math.PI;
		newX = targetX + Math.round(maxDistance * Math.cos(angle));
		newY = targetY + Math.round(maxDistance * Math.sin(angle));
		distanceToNew = Math.sqrt(Math.pow(newX - targetX, 2) + Math.pow(newY - targetY, 2));
	} while (distanceToNew < minDistance || (newX === targetX && newY === targetY) || (newX === event.x && newY === event.y));

	const horz = newX > event.x ? 6 : newX < event.x ? 4 : 0;
	const vert = newY > event.y ? 2 : newY < event.y ? 8 : 0;

	if (horz && vert) {
		event.moveDiagonally(horz, vert);
	} else if (horz) {
		event.moveStraight(horz);
	} else if (vert) {
		event.moveStraight(vert);
	}
};

Game_Character.prototype.shareDirection = function (target) {
	if (target === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		this.setDirection(playerTarget.direction());
		return;
	}

	if (target === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		this.setDirection(eventTarget.direction());
		return;
	}

	const targetChar = findNearestTarget(target, this.x, this.y);
	if (targetChar) {
		this.setDirection(targetChar.direction());
	}
};

// TELEPORT -------------------------------------------------------------------

Game_Character.prototype.isValidPosition = function (x, y) {
	if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
		return false;
	}

	return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
		$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
};

Game_Character.prototype.findNearestValidPosition = function (startX, startY) {
	if (this.isValidPosition(startX, startY)) {
		return { x: startX, y: startY };
	}

	for (let radius = 1; radius < Math.max($gameMap.width(), $gameMap.height()); radius++) {
		for (let dx = -radius; dx <= radius; dx++) {
			for (let dy = -radius; dy <= radius; dy++) {
				const newX = startX + dx;
				const newY = startY + dy;
				if (this.isValidPosition(newX, newY)) {
					return { x: newX, y: newY };
				}
			}
		}
	}
	return null;
};

Game_Character.prototype.teleportTo = function (notetag, minDistance = null, maxDistance = null) {
	const isValidForTeleport = (x, y, forbiddenTiles) => {
		if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
			return false;
		}

		if (!forbiddenTiles) {
			return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
				$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
		}

		const tilesetRanges = forbiddenTiles.split(' ').map(letter => {
			return {
				'A1': [[2048, 2815]],
				'A2': [[2816, 4351]],
				'A3': [[4352, 5887]],
				'A4': [[5888, 8191]],
				'A5': [[1536, 1663]],
				'B': [[0, 255]],
				'C': [[256, 511]],
				'D': [[512, 767]],
				'E': [[768, 1023]]
			}[letter];
		}).filter(range => range);

		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		return !tiles.some(tileId => {
			return tilesetRanges.some(ranges => {
				return ranges.some(([min, max]) =>
					tileId >= min && tileId <= max && (flags[tileId] & 0x0f)
				);
			});
		});
	};

	if (notetag === 'forward' && typeof minDistance === 'number') {
		let dx = 0;
		let dy = 0;

		if (this === $gamePlayer) {
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				// Virtual stick
				let degree = $virtualStickController.deg();
				this.setDirection(this.convertAngleToDirection(degree));
				let rad = (degree - 90) * Math.PI / 180;
				dx = Math.sign(Math.cos(rad));
				dy = Math.sign(Math.sin(rad)) * -1;
				if (dx === 0 && dy === 0) return;

			} else {
				// Keyboard
				const isUp = Input.isPressed('up');
				const isDown = Input.isPressed('down');
				const isLeft = Input.isPressed('left');
				const isRight = Input.isPressed('right');

				if (isUp && isRight) {
					dx = 1; dy = -1;
					this.setDirection(6);
				} else if (isUp && isLeft) {
					dx = -1; dy = -1;
					this.setDirection(4);
				} else if (isDown && isRight) {
					dx = 1; dy = 1;
					this.setDirection(6);
				} else if (isDown && isLeft) {
					dx = -1; dy = 1;
					this.setDirection(4);
				} else if (isUp) {
					dy = -1;
					this.setDirection(8);
				} else if (isDown) {
					dy = 1;
					this.setDirection(2);
				} else if (isLeft) {
					dx = -1;
					this.setDirection(4);
				} else if (isRight) {
					dx = 1;
					this.setDirection(6);
				} else {
					switch (this.direction()) {
						case 8: dy = -1; break;
						case 2: dy = 1; break;
						case 4: dx = -1; break;
						case 6: dx = 1; break;
					}
				}
			}
		} else {
			switch (this.direction()) {
				case 8: dy = -1; break;
				case 2: dy = 1; break;
				case 4: dx = -1; break;
				case 6: dx = 1; break;
			}
		}

		if (dx !== 0 || dy !== 0) {
			let validX = this.x;
			let validY = this.y;

			for (let i = 1; i <= minDistance; i++) {
				const nextX = this.x + (dx * i);
				const nextY = this.y + (dy * i);

				if (isValidForTeleport(nextX, nextY, maxDistance)) {
					validX = nextX;
					validY = nextY;
				} else {
					break;
				}
			}

			if (validX !== this.x || validY !== this.y) {
				this.setPosition(validX, validY);
			}
		}
		return;
	}

	if (notetag === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		const validPos = this.findNearestValidPosition(playerTarget.x, playerTarget.y);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (notetag === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		const validPos = this.findNearestValidPosition(eventTarget.x, eventTarget.y);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (typeof notetag === 'number' && typeof minDistance === 'number') {
		const validPos = this.findNearestValidPosition(notetag, minDistance);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (minDistance === null && maxDistance === null) {
		const target = findTarget(notetag);
		if (target && this.isValidPosition(target.x, target.y)) {
			this.setPosition(target.x, target.y);
		}
		return;
	}

	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		const closestEvent = findNearestTarget(notetag, this.x, this.y);
		if (!closestEvent) return;
		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY;
	let attempts = 50;

	do {
		const angle = Math.random() * 2 * Math.PI;
		const distance = minDistance + Math.random() * (maxDistance - minDistance);
		newX = Math.round(targetX + distance * Math.cos(angle));
		newY = Math.round(targetY + distance * Math.sin(angle));
		attempts--;
	} while (!this.isValidPosition(newX, newY) && attempts > 0);

	if (this.isValidPosition(newX, newY)) {
		this.setPosition(newX, newY);
	}
};

// Same as move to Position but this one doesn't move using Dot Move System and support perfect pathfinding
Game_Character.prototype.moveToClosest = function (notetag, perfectPathfinding = false, waitTillFinish = false, exception = null) {
	const x1 = this.x;
	const y1 = this.y;
	let closestEvent = null;
	let minDistance = Infinity;

	if (notetag === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		closestEvent = playerTarget;
		minDistance = Math.sqrt(Math.pow(playerTarget.x - x1, 2) + Math.pow(playerTarget.y - y1, 2));
	} else if (notetag === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		closestEvent = eventTarget;
		minDistance = Math.sqrt(Math.pow(eventTarget.x - x1, 2) + Math.pow(eventTarget.y - y1, 2));
	} else {
		let targets = findTargets(notetag);
		if (exception) {
			targets = targets.filter(otherEvent => {
				const currentPage = otherEvent.page();
				const hasAttackNotetag = currentPage && currentPage.list.some(command =>
					command.code === 108 && command.parameters[0].includes('<ignore>')
				);
				return !(otherEvent.event().note.includes(exception) && !hasAttackNotetag);
			});
		}

		closestEvent = findNearestTarget(notetag, this.x, this.y);
		if (closestEvent) {
			minDistance = Math.sqrt(Math.pow(closestEvent.x - x1, 2) + Math.pow(closestEvent.y - y1, 2));
		}
	}

	if (closestEvent) {
		if (waitTillFinish) {
			const dx = Math.abs(closestEvent.x - this.x);
			const dy = Math.abs(closestEvent.y - this.y);
			const steps = Math.max(dx, dy);

			const route = {
				list: [],
				repeat: this._moveRoute ? this._moveRoute.repeat : false,
				skippable: this._moveRoute ? this._moveRoute.skippable : true,
				wait: this._moveRoute ? this._moveRoute.wait : true
			};

			for (let i = 0; i < steps; i++) {
				route.list.push({
					code: 45,
					parameters: [`this.moveToClosest('${notetag}', ${perfectPathfinding})`]
				});
			}
			route.list.push({ code: 0 });

			this._moveRoute = route;
			this._moveRouteIndex = 0;
			this._moveRouteForcing = true;
		} else {
			if (perfectPathfinding) {
				const d = this.findDirectionTo(closestEvent.x, closestEvent.y);
				if (d === 0) return;

				let horz = 0;
				let vert = 0;

				switch (d) {
					case 1: horz = 4; vert = 2; break;
					case 2: vert = 2; break;
					case 3: horz = 6; vert = 2; break;
					case 4: horz = 4; break;
					case 6: horz = 6; break;
					case 7: horz = 4; vert = 8; break;
					case 8: vert = 8; break;
					case 9: horz = 6; vert = 8; break;
				}

				if (horz !== 0) {
					this.setDirection(horz);
				} else {
					this.setDirection(vert);
				}

				if (horz !== 0 && vert !== 0) {
					this.moveDiagonally(horz, vert);
				} else {
					this.moveStraight(d);
				}
			} else {
				const horz = closestEvent.x > this.x ? 6 : closestEvent.x < this.x ? 4 : 0;
				const vert = closestEvent.y > this.y ? 2 : closestEvent.y < this.y ? 8 : 0;
				if (horz && vert) {
					this.moveDiagonally(horz, vert);
				} else if (horz) {
					this.moveStraight(horz);
				} else if (vert) {
					this.moveStraight(vert);
				}
			}
		}
	}
};

// A versatile move feature. Can move to anywhere or any notetag using Dot Move System (pixel movement)
Game_Character.prototype.moveToPosition = function (targetX, targetY, rotate = false) {
	if (typeof targetY === 'boolean') {
		rotate = targetY;
		targetY = undefined;
	}

	if (targetX === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = playerTarget.x;
			targetPoint.y = playerTarget.y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetSingleStep(playerTarget.x, playerTarget.y);
		return;
	}

	if (targetX === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = eventTarget.x;
			targetPoint.y = eventTarget.y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetSingleStep(eventTarget.x, eventTarget.y);
		return;
	}

	// Case X: Comment search case
	if (typeof targetX === 'string' && targetX.startsWith('comment:')) {
		const searchComment = targetX.slice(8).trim();
		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (!event || !event.page()) return;
			const hasComment = event.list().some(command =>
				(command.code === 108 || command.code === 408) &&
				command.parameters[0].includes(searchComment)
			);

			if (hasComment) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);
				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = this.positionPoint();
				targetPoint.x = closestEvent.x;
				targetPoint.y = closestEvent.y;
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			this.moveToTargetContinous(closestEvent.x, closestEvent.y);
			return;
		}
		return;
	}

	if (targetX === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();

		if (stickInput || checkGamepad()) {
			if (stickInput) {
				const angle = Math.atan2(stickInput.x, -stickInput.y);
				let degrees = (angle * 180 / Math.PI);
				degrees = (degrees + 360) % 360;

				if (rotate) {
					this.setOriginPoint('center');
					this.setCustomRotation(false);
					this.customRotationPoint = true;
					this.setRotation(degrees);
				}

				this.dotMoveByDeg(degrees);
			}
		} else {
			// cursor when no gamepad is connected
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = cursorX;
			targetPoint.y = cursorY;

			const targetDeg = startPoint.calcDeg(targetPoint).value;

			if (rotate) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				this.setRotation(targetDeg);
			}

			const dx = targetPoint.x - startPoint.x;
			const dy = targetPoint.y - startPoint.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > 1) {
				this.dotMoveByDeg(targetDeg);
			}
		}
		return;
	}

	// Case 2: Move forward in current rotation direction
	if (targetX === 'forward' && targetY === 'tile') {
		const currentRotation = this._rotation || 0;
		const currentPos = this.positionPoint();
		const radians = ((currentRotation - 90) * Math.PI) / 180;

		const targetX = currentPos.x + Math.cos(radians);
		const targetY = currentPos.y + Math.sin(radians);

		this.moveToTargetContinous(targetX, targetY);
		return;
	}
	if (targetX === 'forward') {
		const currentRotation = this._rotation || 0;
		this.dotMoveByDeg(currentRotation);
		return;
	}

	// Case 3: Move to player
	if (targetX === 'player' && targetY === undefined) {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = $gamePlayer.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		const playerPos = $gamePlayer.positionPoint();
		this.moveToTargetSingleStep(playerPos.x, playerPos.y);
		return;
	}

	// Case 3.5: Move to a player cordination
	if (typeof targetX === 'string' && targetX.includes('player') &&
		typeof targetY === 'string' && targetY?.includes('player')) {

		const finalX = eval(targetX.replace('player', $gamePlayer.centerPositionPoint().x - 0.5));
		const finalY = eval(targetY.replace('player', $gamePlayer.centerPositionPoint().y - 0.5));

		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = finalX;
			targetPoint.y = finalY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}

		this.moveToTargetContinous(finalX, finalY);
		return;
	}

	// Case 4: Move to event with notetag
	if (typeof targetX === 'string' && targetX !== 'mouse or gamepad' && targetX !== 'player') {
		const closestEvent = findNearestTarget(targetX, this.x, this.y);
		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = closestEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			const targetPos = closestEvent.positionPoint();
			this.moveToTargetContinous(targetPos.x, targetPos.y);
		}
		return;
	}

	// Case 5: Coordinate-based movement
	if (typeof targetX === 'number' && typeof targetY === 'number') {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = targetX;
			targetPoint.y = targetY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetContinous(targetX, targetY);
		return;
	}
};

Game_Character.prototype.rotateTo = function (x, y) {
	if (x === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		x = playerTarget.x;
		y = playerTarget.y;
	}

	if (x === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		x = eventTarget.x;
		y = eventTarget.y;
	}

	if (x === 'mouse or gamepad') {
		if (H_DotMoveSystem) {
			const stickInput = checkGamepadInput();

			if (stickInput || checkGamepad()) {
				if (stickInput) {
					// right stick
					const angle = Math.atan2(stickInput.x, -stickInput.y);
					let degrees = (angle * 180 / Math.PI);
					degrees = (degrees + 360) % 360;

					this.setOriginPoint(y || 'center');
					this.setCustomRotation(false);
					this.customRotationPoint = true;
					this.setRotation(degrees);
				}
			} else {
				// cursor
				const characterScreenX = this.screenX();
				const characterScreenY = this.screenY();
				const dx = TouchInput.x - characterScreenX;
				const dy = TouchInput.y - characterScreenY;

				const radians = Math.atan2(dy, dx);
				let degrees = (radians * 180 / Math.PI + 90) % 360;
				if (degrees < 0) degrees += 360;

				this.setOriginPoint(y || 'center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				this.setRotation(degrees);
			}
			return;
		}
	}
	// Case: rotateTo('left joystick') - Rotate to left joystick direction only
	if (x === 'left joystick') {
		if (H_DotMoveSystem) {
			this.setOriginPoint(y || 'center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;

			if (navigator.getGamepads && navigator.getGamepads()[0]) {
				const gamepad = navigator.getGamepads()[0];
				const leftStickX = gamepad.axes[0];
				const leftStickY = gamepad.axes[1];
				const power = Math.sqrt(leftStickX * leftStickX + leftStickY * leftStickY);

				if (power > 0.1) {
					const rad = Math.atan2(leftStickX, -leftStickY);
					let degree = rad * 180 / Math.PI;
					if (degree < 0) degree += 360;

					this.setRotation(degree);
					return;
				}
			}

			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				let degree = $virtualStickController.deg();
				if (degree !== null) {
					this.setRotation(degree);
					return;
				}
			}
		}
		return;
	}
	// Case: rotateTo('player moving direction') - Rotate to player's movement direction
	if (x === 'player moving direction') {
		if (H_DotMoveSystem) {
			this.setOriginPoint(y || 'center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;

			let hasActiveInput = false;

			// Left stick gamepad
			if (typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
				const [rad, power] = Input.leftStick;

				if (power > 0.1) {
					hasActiveInput = true;
					const degree = AnalogStickUtils.rad2deg(rad);
					const direction = this.convertAngleToDirection(degree);
					this.setDirection(direction);
					this.setRotation(degree);
					return;
				}
			}

			// If gamepad isn't being used or has low input power, check for virtual stick controller
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				let degree = $virtualStickController.deg();
				if (degree !== null) {
					hasActiveInput = true;
					const direction = this.convertAngleToDirection(degree);
					this.setDirection(direction);
					this.setRotation(degree);
					return;
				}
			}

			// Keyboard
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');

			if (isUp || isDown || isLeft || isRight) {
				hasActiveInput = true;
				let degree = 0;

				if (isUp && isRight) degree = 45;
				else if (isUp && isLeft) degree = 315;
				else if (isDown && isRight) degree = 135;
				else if (isDown && isLeft) degree = 225;
				else if (isUp) degree = 0;
				else if (isRight) degree = 90;
				else if (isDown) degree = 180;
				else if (isLeft) degree = 270;

				let direction = this.convertAngleToDirection(degree);

				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(direction);
				} else {
					if (degree >= 315 || degree < 45) this.setDirection(8);
					else if (degree >= 45 && degree < 135) this.setDirection(6);
					else if (degree >= 135 && degree < 225) this.setDirection(2);
					else this.setDirection(4);
				}

				this.setRotation(degree);
			}

			return;
		}
		else {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');

			if (isUp || isDown || isLeft || isRight) {
				let direction = 0;
				let degree = 0;

				if (isUp && isRight) {
					direction = 9;
					degree = 45;
				} else if (isUp && isLeft) {
					direction = 7;
					degree = 315;
				} else if (isDown && isRight) {
					direction = 3;
					degree = 135;
				} else if (isDown && isLeft) {
					direction = 1;
					degree = 225;
				} else if (isUp) {
					direction = 8;
					degree = 0;
				} else if (isDown) {
					direction = 2;
					degree = 180;
				} else if (isLeft) {
					direction = 4;
					degree = 270;
				} else if (isRight) {
					direction = 6;
					degree = 90;
				}

				this.setDirection(direction);
				this._rotation = degree;
			}

			return;
		}
	}

	// Case 1: rotateTo(x, y)
	if (typeof x === 'number' && typeof y === 'number') {
		if (H_DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = x;
			targetPoint.y = y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		return;
	}

	// Case 2: rotateTo(eventId)
	if (typeof x === 'number' && y === undefined) {
		const targetEvent = $gameMap.event(x);
		if (targetEvent) {
			if (H_DotMoveSystem) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = targetEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
		}
		return;
	}

	// Case 3: rotateTo(notetag, range) - Rotate to nearest notetag within range
	if (typeof x === 'string' && x !== 'player' && x !== 'mouse or gamepad') {
		const closestEvent = findNearestTarget(x, this.x, this.y, y);
		if (closestEvent) {
			if (H_DotMoveSystem) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = closestEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
		}
		return;
	}

	// Case 4: rotateTo('player')
	if (x === 'player') {
		if (H_DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = $gamePlayer.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		return;
	}
};

Game_Character.prototype.turnToward = function (target, forceDirection = false, maxDistance = null) {
	const originalDirectionFix = this.isDirectionFixed();
	if (forceDirection && originalDirectionFix) {
		this.setDirectionFix(false);
	}

	if (target === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) {
			if (forceDirection) this.setDirectionFix(originalDirectionFix);
			return;
		}
		target = playerTarget.eventId();
	}

	if (target === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) {
			if (forceDirection) this.setDirectionFix(originalDirectionFix);
			return;
		}
		target = eventTarget.eventId();
	}

	if (target === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();
		if (stickInput || checkGamepad()) {
			if (stickInput) {
				if (Math.abs(stickInput.x) > 0.1 || Math.abs(stickInput.y) > 0.1) {
					if (this.is8DirSprite && this.is8DirSprite()) {
						const angle = Math.atan2(stickInput.y, stickInput.x) * 180 / Math.PI;
						const normalizedAngle = (angle + 360) % 360;
						if (normalizedAngle >= 337.5 || normalizedAngle < 22.5) {
							this.setDirection(6);
						} else if (normalizedAngle >= 22.5 && normalizedAngle < 67.5) {
							this.setDirection(3);
						} else if (normalizedAngle >= 67.5 && normalizedAngle < 112.5) {
							this.setDirection(2);
						} else if (normalizedAngle >= 112.5 && normalizedAngle < 157.5) {
							this.setDirection(1);
						} else if (normalizedAngle >= 157.5 && normalizedAngle < 202.5) {
							this.setDirection(4);
						} else if (normalizedAngle >= 202.5 && normalizedAngle < 247.5) {
							this.setDirection(7);
						} else if (normalizedAngle >= 247.5 && normalizedAngle < 292.5) {
							this.setDirection(8);
						} else if (normalizedAngle >= 292.5 && normalizedAngle < 337.5) {
							this.setDirection(9);
						}
					} else if ((Math.abs(stickInput.x) > Math.abs(stickInput.y))) {
						this.setDirection(stickInput.x > 0 ? 6 : 4);
					} else {
						this.setDirection(stickInput.y > 0 ? 2 : 8);
					}
				}
			}
		} else {
			// cursor when no gamepad
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			if (maxDistance) {
				const distance = Math.sqrt(
					Math.pow(cursorX - this.x, 2) +
					Math.pow(cursorY - this.y, 2)
				);
				if (distance > maxDistance) {
					if (forceDirection) {
						this.setDirectionFix(originalDirectionFix);
					}
					return;
				}
			}

			const dx = cursorX - this.x;
			const dy = cursorY - this.y;

			if (this.is8DirSprite && this.is8DirSprite()) {
				const angle = Math.atan2(dy, dx) * 180 / Math.PI;
				const normalizedAngle = (angle + 360) % 360;

				if (normalizedAngle >= 337.5 || normalizedAngle < 22.5) {
					this.setDirection(6);
				} else if (normalizedAngle >= 22.5 && normalizedAngle < 67.5) {
					this.setDirection(3);
				} else if (normalizedAngle >= 67.5 && normalizedAngle < 112.5) {
					this.setDirection(2);
				} else if (normalizedAngle >= 112.5 && normalizedAngle < 157.5) {
					this.setDirection(1);
				} else if (normalizedAngle >= 157.5 && normalizedAngle < 202.5) {
					this.setDirection(4);
				} else if (normalizedAngle >= 202.5 && normalizedAngle < 247.5) {
					this.setDirection(7);
				} else if (normalizedAngle >= 247.5 && normalizedAngle < 292.5) {
					this.setDirection(8);
				} else if (normalizedAngle >= 292.5 && normalizedAngle < 337.5) {
					this.setDirection(9);
				}
			} else {
				if (Math.abs(dx) > Math.abs(dy)) {
					this.setDirection(dx > 0 ? 6 : 4);
				} else {
					this.setDirection(dy > 0 ? 2 : 8);
				}
			}
		}
	} // Event ID
	else if (!isNaN(target)) {
		const eventId = Number(target);
		const event = $gameMap.event(eventId);
		if (event) {
			const distance = Math.sqrt(
				Math.pow(event.x - this.x, 2) +
				Math.pow(event.y - this.y, 2)
			);
			if (!maxDistance || distance <= maxDistance) {
				const dx = event.x - this.x;
				const dy = event.y - this.y;

				if (this.is8DirSprite && this.is8DirSprite()) {
					if (dx > 0) {
						if (dy < 0) this.setDirection(9);
						else if (dy > 0) this.setDirection(3);
						else this.setDirection(6);
					} else if (dx < 0) {
						if (dy < 0) this.setDirection(7);
						else if (dy > 0) this.setDirection(1);
						else this.setDirection(4);
					} else {
						if (dy < 0) this.setDirection(8);
						else if (dy > 0) this.setDirection(2);
					}
				} else {
					if (Math.abs(dx) > Math.abs(dy)) {
						this.setDirection(dx > 0 ? 6 : 4);
					} else {
						this.setDirection(dy > 0 ? 2 : 8);
					}
				}
			}
		}
	}
	// Notetag
	else {
		const closestEvent = findNearestTarget(target, this.x, this.y, maxDistance);

		if (closestEvent) {
			const dx = closestEvent.x - this.x;
			const dy = closestEvent.y - this.y;

			if (this.is8DirSprite && this.is8DirSprite()) {
				if (dx > 0) {
					if (dy < 0) this.setDirection(9);
					else if (dy > 0) this.setDirection(3);
					else this.setDirection(6);
				} else if (dx < 0) {
					if (dy < 0) this.setDirection(7);
					else if (dy > 0) this.setDirection(1);
					else this.setDirection(4);
				} else {
					if (dy < 0) this.setDirection(8);
					else if (dy > 0) this.setDirection(2);
				}
			} else {
				if (Math.abs(dx) > Math.abs(dy)) {
					this.setDirection(dx > 0 ? 6 : 4);
				} else {
					this.setDirection(dy > 0 ? 2 : 8);
				}
			}
		}
	}

	if (forceDirection) {
		this.setDirectionFix(true);
	}
	else if (originalDirectionFix) {
		this.setDirectionFix(true);
	}
};

Game_Character.prototype.sucking = function (notetag, range, speedBoost = 4.5) {
	if (notetag === 'player') {
		const dx = $gamePlayer.x - this.x;
		const dy = $gamePlayer.y - this.y;

		if (Math.abs(dx) <= range && Math.abs(dy) <= range) {
			const distanceSquared = dx * dx + dy * dy;
			if (distanceSquared <= range * range) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					$gamePlayer.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					$gamePlayer.moveStraight(d4);
				} else if (dy !== 0) {
					$gamePlayer.moveStraight(d8);
				}
			}
		}
		return;
	}

	const events = notetag === 'all' ? $gameMap.events() : findTargets(notetag);

	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		const dx = event.x - this.x;
		const dy = event.y - this.y;

		if (Math.abs(dx) > range || Math.abs(dy) > range) continue;

		const distanceSquared = dx * dx + dy * dy;
		if (distanceSquared <= range * range) {
			const baseSpeed = event.moveSpeed();
			let speedMultiplier = 1;
			if (baseSpeed === 1) speedMultiplier = 4;
			else if (baseSpeed === 2) speedMultiplier = 3;
			else if (baseSpeed === 3) speedMultiplier = 2;

			const extraMoves = Math.floor((speedBoost * speedMultiplier) / 2);

			for (let j = 0; j <= extraMoves; j++) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					event.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					event.moveStraight(d4);
				} else if (dy !== 0) {
					event.moveStraight(d8);
				}
			}
		}
	}
};

Game_Character.prototype.jumpToNearby = function (maxDistance, jumpOnOtherEvent = false) {
	let passableTiles = [];
	for (let dx = -maxDistance; dx <= maxDistance; dx++) {
		for (let dy = -maxDistance; dy <= maxDistance; dy++) {
			const newX = this.x + dx;
			const newY = this.y + dy;

			if ($gameMap.isValid(newX, newY) && $gameMap.isPassable(newX, newY, 5)) {
				const isTileOccupied = $gameMap.eventsXy(newX, newY).length > 0;
				if (jumpOnOtherEvent || !isTileOccupied) {
					passableTiles.push({ x: newX, y: newY });
				}
			}
		}
	}

	if (passableTiles.length > 0) {
		const randomTile = passableTiles[Math.floor(Math.random() * passableTiles.length)];
		const jumpX = randomTile.x - this.x;
		const jumpY = randomTile.y - this.y;
		this.jump(jumpX, jumpY);
	}
};

Game_Character.prototype.jumpTo = function (x, y) {
	const isBlockedTile = (tileX, tileY) => {
		if (!$gameMap.isValid(tileX, tileY)) return true;

		const tiles = $gameMap.allTiles(tileX, tileY);
		const isA3A4Tile = tiles.some(tileId =>
			(tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)
		);

		// Basically disallow to jump to tile A3A4 ONLY if character's current position isn't A3 A4
		const currentTiles = $gameMap.allTiles(this.x, this.y);
		const isCurrentlyOnA3A4 = currentTiles.some(tileId =>
			(tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)
		);

		if (isA3A4Tile && !isCurrentlyOnA3A4) {
			return true;
		}

		if (this.isThrough()) {
			return !$gameMap.checkPassage(tileX, tileY, 0x0f);
		}

		if (!$gameMap.isPassable(tileX, tileY, 2) ||
			!$gameMap.isPassable(tileX, tileY, 4) ||
			!$gameMap.isPassable(tileX, tileY, 6) ||
			!$gameMap.isPassable(tileX, tileY, 8)) {
			return true;
		}

		const eventsAtTile = $gameMap.eventsXy(tileX, tileY);
		return eventsAtTile.some(event =>
			event._priorityType === 1 &&
			!event.isThrough() &&
			!event.event().note.includes('<pass>')
		);
	};

	const findNearestJumpablePosition = (targetX, targetY) => {
		if (!isBlockedTile(targetX, targetY)) {
			return { x: targetX, y: targetY };
		}

		for (let radius = 1; radius <= 5; radius++) {
			const positions = [];

			for (let dx = -radius; dx <= radius; dx++) {
				positions.push({ x: targetX + dx, y: targetY - radius });
				positions.push({ x: targetX + dx, y: targetY + radius });
			}
			for (let dy = -radius + 1; dy <= radius - 1; dy++) {
				positions.push({ x: targetX - radius, y: targetY + dy });
				positions.push({ x: targetX + radius, y: targetY + dy });
			}
			positions.sort((a, b) => {
				const distA = Math.abs(a.x - targetX) + Math.abs(a.y - targetY);
				const distB = Math.abs(b.x - targetX) + Math.abs(b.y - targetY);
				return distA - distB;
			});
			for (const pos of positions) {
				if ($gameMap.isValid(pos.x, pos.y) && !isBlockedTile(pos.x, pos.y)) {
					return pos;
				}
			}
		}

		return { x: targetX, y: targetY };
	};

	// Case 0: jump to locked target
	if (x === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		x = playerTarget.x;
		y = playerTarget.y;
	}
	if (x === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		x = eventTarget.x;
		y = eventTarget.y;
	}

	// Case 0.1: jump to cursor position
	if (x === 'cursor') {
		const gridX = $gameMap.canvasToMapX(TouchInput.x);
		const gridY = $gameMap.canvasToMapY(TouchInput.y);
		const jumpPos = findNearestJumpablePosition(gridX, gridY);

		const xDist = jumpPos.x - this.x;
		const yDist = jumpPos.y - this.y;
		this.jump(xDist, yDist);
		return;
	}

	// Case 0.2: jumpTo('right stick', distance)
	if (x === 'right stick' && typeof y === 'number') {
		const stickInput = checkGamepadInput();

		if (stickInput) {
			const angle = Math.atan2(stickInput.y, stickInput.x);
			const degrees = (angle * 180 / Math.PI + 360) % 360;

			const distance = y;
			const radians = (degrees * Math.PI) / 180;
			const jumpX = Math.round(Math.cos(radians) * distance);
			const jumpY = Math.round(Math.sin(radians) * distance);

			const targetX = this.x + jumpX;
			const targetY = this.y + jumpY;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const adjustedJumpX = jumpPos.x - this.x;
			const adjustedJumpY = jumpPos.y - this.y;

			this.jump(adjustedJumpX, adjustedJumpY);
		}
		return;
	}

	// Case 0.3: jumpTo('player moving direction', distance)
	if (x === 'player moving direction' && typeof y === 'number') {
		let degree = null;
		let hasActiveInput = false;

		if (!playerMovementDisabled && typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
			const [rad, power] = Input.leftStick;
			if (power > 0.1) {
				hasActiveInput = true;
				degree = AnalogStickUtils.rad2deg(rad);
			}
		}

		if (!hasActiveInput && typeof $virtualStickController !== 'undefined' && $virtualStickController &&
			typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
			const virtualDeg = $virtualStickController.deg();
			if (virtualDeg !== null) {
				hasActiveInput = true;
				degree = virtualDeg;
			}
		}

		if (!hasActiveInput) {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');

			if (isUp || isDown || isLeft || isRight) {
				hasActiveInput = true;

				if (isUp && isRight) degree = 45;
				else if (isUp && isLeft) degree = 315;
				else if (isDown && isRight) degree = 135;
				else if (isDown && isLeft) degree = 225;
				else if (isUp) degree = 0;
				else if (isRight) degree = 90;
				else if (isDown) degree = 180;
				else if (isLeft) degree = 270;
			}
		}

		if (hasActiveInput && degree !== null) {
			const distance = y;
			const radians = ((degree - 90) * Math.PI) / 180;
			const jumpX = Math.round(Math.cos(radians) * distance);
			const jumpY = Math.round(Math.sin(radians) * distance);

			const targetX = this.x + jumpX;
			const targetY = this.y + jumpY;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const adjustedJumpX = jumpPos.x - this.x;
			const adjustedJumpY = jumpPos.y - this.y;

			this.jump(adjustedJumpX, adjustedJumpY);
		}
		return;
	}

	// Case 1: jumpTo(eventId)
	if (typeof x === 'number' && y === undefined) {
		const targetEvent = $gameMap.event(x);
		if (targetEvent) {
			const targetX = targetEvent.x;
			const targetY = targetEvent.y;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 2: jumpTo(x, y)
	if (typeof x === 'number' && typeof y === 'number') {
		if (x >= 0 && x < $gameMap.width() && y >= 0 && y < $gameMap.height()) {
			const jumpPos = findNearestJumpablePosition(x, y);

			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 3: jumpTo('player')
	if (x === 'player') {
		const targetX = $gamePlayer.x;
		const targetY = $gamePlayer.y;
		const jumpPos = findNearestJumpablePosition(targetX, targetY);

		let xDist = jumpPos.x - this.x;
		let yDist = jumpPos.y - this.y;
		if (typeof y === 'number') {
			const distance = Math.sqrt(xDist * xDist + yDist * yDist);
			if (distance > y) {
				const scale = y / distance;
				const limitedXDist = Math.round(xDist * scale);
				const limitedYDist = Math.round(yDist * scale);
				this.jump(limitedXDist, limitedYDist);
				return;
			}
		}

		this.jump(xDist, yDist);
		return;
	}

	// Case 4: jumpTo('forward'/'backward'/'away', distance)
	if ((x === 'forward' || x === 'backward' || x === 'away') && typeof y === 'number') {
		const direction = this.direction();
		let jumpX = 0;
		let jumpY = 0;

		if (x === 'away') {
			const playerX = $gamePlayer.x;
			const playerY = $gamePlayer.y;
			const deltaX = this.x - playerX;
			const deltaY = this.y - playerY;

			if (Math.abs(deltaX) > Math.abs(deltaY)) {
				jumpX = deltaX > 0 ? y : -y;
			} else {
				jumpY = deltaY > 0 ? y : -y;
			}

			const newDirection = Math.abs(deltaX) > Math.abs(deltaY)
				? (deltaX > 0 ? 4 : 6)
				: (deltaY > 0 ? 8 : 2);
			this.setDirection(newDirection);
		} else {
			switch (direction) {
				case 2:
					jumpY = x === 'forward' ? y : -y;
					break;
				case 4:
					jumpX = x === 'forward' ? -y : y;
					break;
				case 6:
					jumpX = x === 'forward' ? y : -y;
					break;
				case 8:
					jumpY = x === 'forward' ? -y : y;
					break;
			}
		}

		const targetX = this.x + jumpX;
		const targetY = this.y + jumpY;
		const jumpPos = findNearestJumpablePosition(targetX, targetY);
		const adjustedJumpX = jumpPos.x - this.x;
		const adjustedJumpY = jumpPos.y - this.y;

		this.jump(adjustedJumpX, adjustedJumpY);
		this.setDirection(direction);
		return;
	}

	// Case 5: jumpTo('region X')
	if (typeof x === 'string' && x.match(/^region\s+(\d+)$/i)) {
		const regionMatch = x.match(/^region\s+(\d+)$/i);
		const regionId = parseInt(regionMatch[1]);

		let nearestRegionTile = null;
		let minDistance = Infinity;

		for (let mapX = 0; mapX < $gameMap.width(); mapX++) {
			for (let mapY = 0; mapY < $gameMap.height(); mapY++) {
				if ($gameMap.regionId(mapX, mapY) === regionId) {
					const distance = Math.sqrt(
						Math.pow(mapX - this.x, 2) +
						Math.pow(mapY - this.y, 2)
					);

					if (distance < minDistance) {
						minDistance = distance;
						nearestRegionTile = { x: mapX, y: mapY };
					}
				}
			}
		}

		if (nearestRegionTile) {
			const jumpPos = findNearestJumpablePosition(nearestRegionTile.x, nearestRegionTile.y);
			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 5: jumpTo(notetag, range)
	if (typeof x === 'string' && (y === undefined || typeof y === 'number')) {
		const closestEvent = findNearestTarget(x, this.x, this.y, y);

		if (closestEvent) {
			const jumpPos = findNearestJumpablePosition(closestEvent.x, closestEvent.y);
			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}
};

//============================================================
// HUD ELEMENTS
//============================================================

let HUDs = JSON.parse(Hparameters['HUDs'] || '[]').map(hud => {
	const parsed = JSON.parse(hud);
	if (parsed.additionalLayers) {
		parsed.additionalLayers = JSON.parse(parsed.additionalLayers || '[]').map(layer => JSON.parse(layer));
	}
	return parsed;
});

const HUDcustomFont = loadCustomFont(Hparameters['customFontFile']);

class HHUDSpriteSheetSprite extends Sprite {
	initialize(bitmap, row, column, fps) {
		super.initialize();
		this._row = Number(row) || 1;
		this._column = Number(column) || 1;
		this._fps = Number(fps) || 60;
		this._frameIndex = 0;
		this._maxFrame = this._row * this._column;
		this._frameDelay = Math.round(60 / this._fps);
		this._frameCount = 0;
		this._frameWidth = 0;
		this._frameHeight = 0;
		this._isReady = false;
		if (bitmap) {
			this.bitmap = bitmap;
			bitmap.addLoadListener(() => {
				this._frameWidth = Math.floor(bitmap.width / this._column);
				this._frameHeight = Math.floor(bitmap.height / this._row);
				this._isReady = true;
				this._updateFrame();
			});
		}
	}

	_updateFrame() {
		if (!this._isReady) return;

		const col = this._frameIndex % this._column;
		const row = Math.floor(this._frameIndex / this._column);

		const sx = col * this._frameWidth;
		const sy = row * this._frameHeight;

		this.setFrame(sx, sy, this._frameWidth, this._frameHeight);
	}
}

function evaluatePosition(expression) {
	if (typeof expression !== 'string') return Number(expression);
	let processedExpression = expression
		.replace(/\bplayer\.x\b/g, '$gamePlayer.screenX()')
		.replace(/\bplayer\.y\b/g, '$gamePlayer.screenY()');

	const result = eval(processedExpression);
	return result;
}

class Hendrix_HUD {
	constructor(hudData, index) {
		this.switchID = Number(hudData.switchID);
		this.index = index;
		this.useAs = hudData.useAs || 'variable';
		this.eventHpTag = hudData.eventHpTag || '';
		this.variableID = Number(hudData.variableID);
		this.maxVariableValue = Number(hudData.maxVariableValue);
		this.currentValue = this.getCurrentValue();
		this.displayValue = this.currentValue;
		const [width, height, x, y] = (hudData.sizeAndPosition || "100, 20, 0, 0")
			.split(',')
			.map(val => val.trim());

		this.width = Number(width);
		this.height = Number(height);
		this.xExpression = x;
		this.yExpression = y;
		this.lastValidPosition = null;
		this.originalX = this.evaluateX();
		this.originalY = this.evaluateY();

		if (window.$hudPositions && window.$hudPositions[index]) {
			this.x = window.$hudPositions[index].x;
			this.y = window.$hudPositions[index].y;
		} else {
			this.x = this.originalX;
			this.y = this.originalY;
		}

		this.frameImageBack = hudData.frameImageBack;
		this.frameImage = hudData.frameImage;
		this.barColor = hudData.barColor || '#ff0000';
		this.barImage = hudData.barImage;
		this._messageFadeOpacity = 255;
		this._previousMessageState = false;
		this._fadeDuration = 15;

		this.flashDuration = 0;
		this.flashIntensity = 0;
		this.flashWhenMax = hudData.flashWhenMax === 'true';
		this.barDirection = hudData.barDirection || 'leftToRight';

		this.additionalLayers = hudData.additionalLayers || [];
		this.additionalSprites = [];

		this.displayTextType = hudData.displayTextType || 'none';
		const fontSettings = hudData.fontSettings ? JSON.parse(hudData.fontSettings) : {};
		this.variableTextSize = Number(fontSettings.size) || 0;
		this.variableTextColor = fontSettings.color || '';
		this.variableTextOutline = fontSettings.outline !== 'false';
		this.variableTextOutlineColor = fontSettings.outlineColor || '';
		this.variableTextOffsetX = Number(fontSettings.offsetX) || 0;
		this.variableTextOffsetY = Number(fontSettings.offsetY) || 0;

		this._isDragging = false;
		this._dragOffsetX = 0;
		this._dragOffsetY = 0;
		this.originalX = this.x;
		this.originalY = this.y;

		this.createHUD();
		this.updateVisibility();
	}

	evaluateX() {
		return evaluatePosition(this.xExpression);
	}

	evaluateY() {
		return evaluatePosition(this.yExpression);
	}

	getCurrentValue() {
		switch (this.useAs) {
			case 'hp':
				return $gameParty.leader() ? $gameParty.leader().hp : 0;
			case 'mp':
				return $gameParty.leader() ? $gameParty.leader().mp : 0;
			case 'exp':
				return $gameParty.leader() ? $gameParty.leader().currentExp() - $gameParty.leader().currentLevelExp() : 0;
			case 'eventhp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				return targetEvent ? $gameMap.getCurrentEventHp(targetEvent._eventId) : 0;
			default:
				return $gameVariables.value(this.variableID);
		}
	}

	getMaxValue() {
		switch (this.useAs) {
			case 'hp':
				return $gameParty.leader() ? $gameParty.leader().mhp : 1;
			case 'mp':
				return $gameParty.leader() ? $gameParty.leader().mmp : 1;
			case 'exp':
				return $gameParty.leader() ? $gameParty.leader().nextLevelExp() - $gameParty.leader().currentLevelExp() : 1;
			case 'eventhp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				if (!targetEvent) return 1;
				const initialHp = targetEvent.getHpValueFromNote();
				return initialHp !== null ? initialHp : 1;
			default:
				return $gameVariables.value(this.maxVariableValue);
		}
	}

	usesDynamicPosition = function () {
		const xStr = String(this.xExpression);
		const yStr = String(this.yExpression);
		return xStr.includes('player') || yStr.includes('player') ||
			xStr.includes('$game') || yStr.includes('$game');
	};

	createHUD() {
		this.container = new PIXI.Container();
		this.container.x = this.x;
		this.container.y = this.y;
		SceneManager._scene.addChild(this.container);

		const frameBackSprite = new Sprite();
		frameBackSprite.bitmap = ImageManager.loadPicture(this.frameImageBack);
		frameBackSprite.anchor.x = 0.5;
		frameBackSprite.anchor.y = 0.5;
		this.container.addChild(frameBackSprite);
		this.frameBackSprite = frameBackSprite;

		const barBitmap = new Bitmap(this.width, this.height);
		const barSprite = new Sprite(barBitmap);
		barSprite.anchor.x = 0.5;
		barSprite.anchor.y = 0.5;
		this.container.addChild(barSprite);
		this.barSprite = barSprite;

		if (this.flashWhenMax) {
			const flashSprite = new Sprite(new Bitmap(this.width, this.height));
			flashSprite.anchor.x = 0.5;
			flashSprite.anchor.y = 0.5;
			flashSprite.blendMode = PIXI.BLEND_MODES.ADD;
			this.container.addChild(flashSprite);
			this.flashSprite = flashSprite;
		}

		const frameSprite = new Sprite();
		frameSprite.bitmap = ImageManager.loadPicture(this.frameImage);
		frameSprite.anchor.x = 0.5;
		frameSprite.anchor.y = 0.5;
		this.container.addChild(frameSprite);
		this.frameSprite = frameSprite;

		if (this.additionalLayers.length > 0) {
			this.createAdditionalLayers();
		}

		if (this.displayTextType !== 'none') {
			const textSprite = new Sprite(new Bitmap(this.width, this.height));
			textSprite.anchor.x = 0.5;
			textSprite.anchor.y = 0.5;
			textSprite.x = this.variableTextOffsetX;
			textSprite.y = this.variableTextOffsetY;
			this.container.addChild(textSprite);
			this.textSprite = textSprite;
		}
	}

	createAdditionalLayers() {
		this.additionalSprites = [];

		for (const layerData of this.additionalLayers) {
			if (!layerData || !layerData.image) continue;

			const row = Number(layerData.row || 0);
			const column = Number(layerData.column || 0);
			const fps = Number(layerData.fps || 60);
			const isSpritesheetAnimation = row > 0 && column > 0;

			const bitmap = ImageManager.loadPicture(layerData.image);

			let sprite;
			if (isSpritesheetAnimation) {
				sprite = new HHUDSpriteSheetSprite();
				sprite.initialize(bitmap, row, column, fps);
			} else {
				sprite = new Sprite();
				sprite.bitmap = bitmap;
			}

			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0.5;
			sprite.layerData = layerData;

			sprite._isDragging = false;
			sprite._dragOffsetX = 0;
			sprite._dragOffsetY = 0;
			sprite._originalXOffset = Number(layerData.xOffset) || 0;
			sprite._originalYOffset = Number(layerData.yOffset) || 0;

			sprite._canDragAndDrop = layerData.dragAndDrop === 'true' || layerData.dragAndDrop === true;

			if (window.$hudPositions &&
				window.$hudPositions.additionalLayers &&
				window.$hudPositions.additionalLayers[this.index + '_' + layerData.image]) {
				const savedPos = window.$hudPositions.additionalLayers[`${this.index}_${layerData.image}`];
				layerData.xOffset = savedPos.xOffset;
				layerData.yOffset = savedPos.yOffset;
			}

			this.container.addChild(sprite);
			this.additionalSprites.push(sprite);
		}

		this.updateAdditionalLayerPositions();
	}

	updateAdditionalLayerPositions() {
		for (const sprite of this.additionalSprites) {
			if (!sprite || !sprite.layerData) continue;

			const xOffset = isNaN(sprite.layerData.xOffset) ?
				eval(sprite.layerData.xOffset) :
				Number(sprite.layerData.xOffset);

			const yOffset = isNaN(sprite.layerData.yOffset) ?
				eval(sprite.layerData.yOffset) :
				Number(sprite.layerData.yOffset);

			sprite.x = xOffset;
			sprite.y = yOffset;
		}
	}

	isPlayerBehind = function () {
		if (!smartHUDVisibility) return false;
		const playerSprite = SceneManager._scene._spriteset._characterSprites.find(
			sprite => sprite._character === $gamePlayer
		);
		if (!playerSprite) return false;
		const playerWidth = playerSprite.patternWidth ? playerSprite.patternWidth() : $gameMap.tileWidth();
		const playerHeight = playerSprite.patternHeight ? playerSprite.patternHeight() : $gameMap.tileHeight();

		const playerScreenX = $gamePlayer.screenX();
		const playerScreenY = $gamePlayer.screenY();

		const playerLeft = playerScreenX - playerWidth / 2;
		const playerRight = playerScreenX + playerWidth / 2;
		const playerTop = playerScreenY - playerHeight;
		const playerBottom = playerScreenY;

		const hudLeft = this.container.x - this.width / 2;
		const hudRight = hudLeft + this.width;
		const hudTop = this.container.y - this.height / 2;
		const hudBottom = hudTop + this.height;

		return (
			playerRight > hudLeft &&
			playerLeft < hudRight &&
			playerBottom > hudTop &&
			playerTop < hudBottom
		);
	};

	updateVisibility() {
		if (this.switchID > 0) {
			const isVisible = $gameSwitches.value(this.switchID);
			this.container.visible = isVisible;
		}
	}

	updatePosition(visibleHUDs) {
		if (SceneManager._scene._isVarBarDragMode ||
			(window.$hudPositions && window.$hudPositions[this.index])) return;

		const newX = this.evaluateX();
		const newY = this.evaluateY();

		if (newX !== 0 || newY !== 0 || !this.lastValidPosition) {
			this.lastValidPosition = {
				x: newX,
				y: newY
			};
		}

		this.originalX = newX;
		this.originalY = newY;

		let offset = 0;
		for (let i = 0; i < this.index; i++) {
			if (visibleHUDs[i] &&
				visibleHUDs[i].originalX === this.originalX &&
				visibleHUDs[i].originalY === this.originalY &&
				visibleHUDs[i].height === this.height) {
				offset += 20;
			}
		}

		this.x = this.originalX;
		this.y = this.originalY - offset;
		this.container.x = this.x;
		this.container.y = this.y;
	}

	updateDrag() {
		if (!SceneManager._scene._isVarBarDragMode ||
			!Utils.isOptionValid('test')) return;

		if (!this._isDragging) {
			for (const sprite of this.additionalSprites) {
				if (!sprite._isDragging && sprite._canDragAndDrop && TouchInput.isTriggered()) {
					const touchX = TouchInput.x;
					const touchY = TouchInput.y;
					const width = sprite._frameWidth || sprite.width;
					const height = sprite._frameHeight || sprite.height;

					const rect = new Rectangle(
						this.container.x + sprite.x - width / 2,
						this.container.y + sprite.y - height / 2,
						width,
						height
					);

					if (touchX >= rect.x && touchX <= rect.x + rect.width &&
						touchY >= rect.y && touchY <= rect.y + rect.height) {
						sprite._isDragging = true;
						sprite._dragOffsetX = sprite.x - (touchX - this.container.x);
						sprite._dragOffsetY = sprite.y - (touchY - this.container.y);
						return;
					}
				}
			}
		}

		if (!this._isDragging && TouchInput.isTriggered()) {
			const touchX = TouchInput.x;
			const touchY = TouchInput.y;
			const rect = new Rectangle(
				this.container.x - this.width / 2,
				this.container.y - this.height / 2,
				this.width,
				this.height
			);

			if (touchX >= rect.x && touchX <= rect.x + rect.width &&
				touchY >= rect.y && touchY <= rect.y + rect.height) {
				this._isDragging = true;
				this._dragOffsetX = this.container.x - touchX;
				this._dragOffsetY = this.container.y - touchY;
			}
		}

		if (this._isDragging) {
			if (TouchInput.isPressed()) {
				this.container.x = TouchInput.x + this._dragOffsetX;
				this.container.y = TouchInput.y + this._dragOffsetY;

				this.container.x = Math.max(this.width / 2, Math.min(Graphics.width - this.width / 2, this.container.x));
				this.container.y = Math.max(this.height / 2, Math.min(Graphics.height - this.height / 2, this.container.y));

				this.x = this.container.x;
				this.y = this.container.y;
			} else {
				this._isDragging = false;
				window.$hudPositions = window.$hudPositions || {};
				window.$hudPositions[this.index] = {
					x: this.x,
					y: this.y
				};
				saveUIPositions(window.$hudPositions);
			}
		}

		for (const sprite of this.additionalSprites) {
			if (sprite._isDragging && sprite._canDragAndDrop) {
				if (TouchInput.isPressed()) {
					sprite.x = TouchInput.x - this.container.x + sprite._dragOffsetX;
					sprite.y = TouchInput.y - this.container.y + sprite._dragOffsetY;

					sprite.layerData.xOffset = sprite.x;
					sprite.layerData.yOffset = sprite.y;
				} else {
					sprite._isDragging = false;
					window.$hudPositions = window.$hudPositions || {
						additionalLayers: {}
					};
					if (!window.$hudPositions.additionalLayers) {
						window.$hudPositions.additionalLayers = {};
					}

					window.$hudPositions.additionalLayers[`${this.index}_${sprite.layerData.image}`] = {
						xOffset: sprite.x,
						yOffset: sprite.y
					};
					saveUIPositions(window.$hudPositions);
				}
			}
		}
	}

	getDisplayText() {
		switch (this.displayTextType) {
			case 'none':
				return '';
			case 'variable':
				return `${Math.round(this.displayValue)}`;
			case 'variableMax':
				return `${Math.round(this.displayValue)}/${this.getMaxValue()}`;
			case 'playerHp':
				const leader = $gameParty.leader();
				return leader ? `${leader.hp}` : '0';
			case 'playerHpMax':
				const leaderHp = $gameParty.leader();
				return leaderHp ? `${leaderHp.hp}/${leaderHp.mhp}` : '0/0';
			case 'playerMp':
				const leaderMp = $gameParty.leader();
				return leaderMp ? `${leaderMp.mp}` : '0';
			case 'playerMpMax':
				const leaderMpMax = $gameParty.leader();
				return leaderMpMax ? `${leaderMpMax.mp}/${leaderMpMax.mmp}` : '0/0';
			case 'playerExp':
				const leaderExp = $gameParty.leader();
				return leaderExp ? `${leaderExp.currentExp() - leaderExp.currentLevelExp()}` : '0';
			case 'playerExpMax':
				const leaderExpMax = $gameParty.leader();
				return leaderExpMax ? `${leaderExpMax.currentExp() - leaderExpMax.currentLevelExp()}/${leaderExpMax.nextLevelExp() - leaderExpMax.currentLevelExp()}` : '0/0';
			case 'eventHp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				const eventHp = targetEvent ? $gameMap.getCurrentEventHp(targetEvent._eventId) : 0;
				return `${eventHp}`;
			case 'eventHpMax':
				let targetEventMax = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				if (!targetEventMax) return '0/0';
				const currentEventHp = $gameMap.getCurrentEventHp(targetEventMax._eventId) || 0;
				const maxEventHp = targetEventMax.getHpValueFromNote() || 1;
				return `${currentEventHp}/${maxEventHp}`;
			default:
				return `${Math.round(this.displayValue)}/${this.getMaxValue()}`;
		}
	}

	updateText() {
		if (!this.textSprite || this.displayTextType === 'none') return;

		const bitmap = this.textSprite.bitmap;
		bitmap.clear();

		bitmap.smooth = false;

		if (HUDcustomFont) {
			bitmap.fontFace = HUDcustomFont;
		}
		if (this.variableTextSize > 0) {
			bitmap.fontSize = this.variableTextSize;
		}
		if (this.variableTextColor) {
			bitmap.textColor = this.variableTextColor;
		}
		if (this.variableTextOutline) {
			bitmap.outlineWidth = 4;
			if (this.variableTextOutlineColor) {
				bitmap.outlineColor = this.variableTextOutlineColor;
			}
		}

		const text = this.getDisplayText();
		bitmap.drawText(text, 0, 0, this.width, this.height, 'center');
	}

	updateHUD() {
		this.updateAdditionalLayerPositions();
		for (const sprite of this.additionalSprites) {
			if (!(sprite instanceof HHUDSpriteSheetSprite) || !sprite._isReady) continue;

			sprite._frameCount++;
			if (sprite._frameCount >= sprite._frameDelay) {
				sprite._frameCount = 0;
				sprite._frameIndex = (sprite._frameIndex + 1) % sprite._maxFrame;
				sprite._updateFrame();
			}
		}
		let prevValue = this.currentValue;
		this.currentValue = Math.min(
			this.getCurrentValue(),
			this.getMaxValue()
		);
		this.displayValue = this.interpolate(this.displayValue, this.currentValue, 0.3);
		let barWidth = (this.width * this.displayValue) / this.getMaxValue();
		this.barSprite.bitmap.clear();

		if (this.barImage && barWidth > 0) {
			let img = ImageManager.loadPicture(this.barImage);
			if (this.barDirection === 'rightToLeft') {
				const xOffset = this.width - barWidth;
				this.barSprite.bitmap.blt(img, img.width - barWidth, 0, barWidth, img.height, xOffset, 0, barWidth, this.height);
			} else {
				this.barSprite.bitmap.blt(img, 0, 0, img.width, img.height, 0, 0, barWidth, this.height);
			}
		} else {
			if (this.barDirection === 'rightToLeft') {
				const xOffset = this.width - barWidth;
				this.barSprite.bitmap.fillRect(xOffset, 0, barWidth, this.height, this.barColor);
			} else {
				this.barSprite.bitmap.fillRect(0, 0, barWidth, this.height, this.barColor);
			}
		}
		if (this.currentValue === this.getMaxValue() && prevValue !== this.currentValue) {
			this.startFlash();
		}
		this.updateFlash();
		this.updateVisibility();
		if (this.usesDynamicPosition()) {
			const newX = this.evaluateX();
			const newY = this.evaluateY();

			if (this.container.x !== newX || this.container.y !== newY) {
				this.container.x = newX;
				this.container.y = newY;
				this.x = newX;
				this.y = newY;
			}
		}
		if (hideHUDDuringMessages) {
			const isMessageVisible = $gameMessage.isBusy();
			if (this._previousMessageState !== isMessageVisible) {
				this._previousMessageState = isMessageVisible;
				if (!isMessageVisible && (this.switchID <= 0 || $gameSwitches.value(this.switchID))) {
					this.container.visible = true;
				}
			}
			const fadeStep = 255 / this._fadeDuration;

			if (isMessageVisible) {
				this._messageFadeOpacity -= fadeStep;
				if (this._messageFadeOpacity < 0) this._messageFadeOpacity = 0;
			} else {
				this._messageFadeOpacity += fadeStep;
				if (this._messageFadeOpacity > 255) this._messageFadeOpacity = 255;
			}
			if (this._messageFadeOpacity <= 0) {
				this.container.visible = false;
			}
		} else {
			this._messageFadeOpacity = 255;
		}
		if (this.container.visible) {
			const isBehindPlayer = this.isPlayerBehind();
			const messageFadeAlpha = this._messageFadeOpacity / 255;

			if (isBehindPlayer) {
				const targetAlpha = Math.min(0.3, messageFadeAlpha);
				this.container.alpha = Math.max(targetAlpha, this.container.alpha - 0.1);
			} else {
				this.container.alpha = Math.min(messageFadeAlpha, this.container.alpha + 0.1);
			}
		}
		if (this.displayTextType !== 'none') {
			this.updateText();
		}
	}

	interpolate(current, target, speed) {
		if (current < target) {
			return Math.min(current + speed * (target - current), target);
		} else {
			return Math.max(current - speed * (current - target), target);
		}
	}

	startFlash() {
		this.flashDuration = 10;
		this.flashIntensity = 180;
	}

	updateFlash() {
		if (this.flashWhenMax) {
			if (this.flashDuration > 0) {
				this.flashDuration--;
				this.flashIntensity = Math.floor((this.flashDuration / 15) * 255);

				this.flashSprite.bitmap.clear();
				this.flashSprite.bitmap.fillAll(`rgba(255, 255, 255, ${this.flashIntensity / 255})`);
			} else {
				this.flashSprite.bitmap.clear();
			}
		}
	}
}

const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function () {
	_Scene_Map_createAllWindows.call(this);
	this._isVarBarDragMode = false;
	this.createHUDResetButton();
	this.createHuds();
};

function readUIPositions() {
	if (Utils.isNwjs()) {
		const fs = require('fs');
		const path = require('path');
		const filePath = path.join(process.mainModule.filename, '..', 'js', 'variableBarPosition.json');
		if (fs.existsSync(filePath)) {
			try {
				const data = fs.readFileSync(filePath, 'utf8');
				return JSON.parse(data);
			} catch (e) {
				console.error('Error reading variableBarPosition.json:', e);
				return {
					additionalLayers: {}
				};
			}
		}
	}
	return {
		additionalLayers: {}
	};
}

function saveUIPositions(positions) {
	if (Utils.isNwjs()) {
		const fs = require('fs');
		const path = require('path');
		const filePath = path.join(process.mainModule.filename, '..', 'js', 'variableBarPosition.json');
		fs.writeFileSync(filePath, JSON.stringify(positions, null, 2));
	}
}

function loadPositionsFromFile() {
	if (!Utils.isNwjs()) {
		fetch('js/variableBarPosition.json')
			.then(response => response.json())
			.then(data => {
				window.$hudPositions = data;
				localStorage.setItem('HendrixVariableBarPositions', JSON.stringify(data));
				if (SceneManager._scene && SceneManager._scene._variableBars) {
					SceneManager._scene._variableBars.refresh();
				}
			})
			.catch(error => {
				window.$hudPositions = { additionalLayers: {} };
			});
	}
}

window.$hudPositions = readUIPositions();
if (!Utils.isNwjs()) {
	setTimeout(loadPositionsFromFile, 500);
}

Scene_Map.prototype.createHuds = function () {
	this.hendrixHuds = HUDs.map((hudData, index) => {
		const hud = new Hendrix_HUD(hudData, index);

		if (window.$hudPositions && window.$hudPositions[index]) {
			hud.x = window.$hudPositions[index].x;
			hud.y = window.$hudPositions[index].y;
			hud.container.x = hud.x;
			hud.container.y = hud.y;
		}

		return hud;
	});

	this.updateHudPositions();
};

Scene_Map.prototype.updateHudPositions = function () {
	const visibleHUDs = this.hendrixHuds.filter(hud => hud.container.visible);
	visibleHUDs.forEach(hud => hud.updatePosition(visibleHUDs));
};

Scene_Map.prototype.createHUDResetButton = function () {
	this._resetButton = new Sprite();
	this._resetButton.bitmap = new Bitmap(100, 40);
	this._resetButton.x = (Graphics.width - 100) / 2;
	this._resetButton.y = 20;
	this._resetButton.bitmap.fillRect(0, 0, 100, 40, '#666666');
	this._resetButton.bitmap.fontSize = 20;
	this._resetButton.textColor = '#ffffff';
	this._resetButton.bitmap.drawText('RESET', 0, 0, 100, 40, 'center');
	this._resetButton.visible = false;
	this.addChild(this._resetButton);
};

Scene_Map.prototype.toggleHUDDragMode = function () {
	if (!Utils.isOptionValid('test')) return;

	this._isVarBarDragMode = !this._isVarBarDragMode;
	this._resetButton.visible = this._isVarBarDragMode;

	if (!this._isVarBarDragMode && this.hendrixHuds) {
		const positions = {};
		this.hendrixHuds.forEach(hud => {
			positions[hud.index] = {
				x: hud.x,
				y: hud.y
			};

			if (!positions.additionalLayers) positions.additionalLayers = {};
			hud.additionalSprites.forEach(sprite => {
				if (sprite.layerData) {
					positions.additionalLayers[`${hud.index}_${sprite.layerData.image}`] = {
						xOffset: sprite.x,
						yOffset: sprite.y
					};
				}
			});
		});
		window.$hudPositions = positions;
		saveUIPositions(positions);
	}
};

Scene_Map.prototype.resetHUDPositions = function () {
	if (this.hendrixHuds) {
		this.hendrixHuds.forEach(hud => {
			const newX = hud.evaluateX();
			const newY = hud.evaluateY();

			hud.x = newX;
			hud.y = newY;
			hud.container.x = newX;
			hud.container.y = newY;

			hud.originalX = newX;
			hud.originalY = newY;

			hud.additionalSprites.forEach(sprite => {
				sprite.x = sprite._originalXOffset;
				sprite.y = sprite._originalYOffset;
				sprite.layerData.xOffset = sprite._originalXOffset;
				sprite.layerData.yOffset = sprite._originalYOffset;
			});
		});

		window.$hudPositions = {
			additionalLayers: {}
		};
		saveUIPositions(window.$hudPositions);
	}
};

Scene_Map.prototype.updateHUDResetButton = function () {
	if (!this._isVarBarDragMode || !this._resetButton) return;

	if (TouchInput.isTriggered()) {
		const x = TouchInput.x;
		const y = TouchInput.y;
		if (x >= this._resetButton.x && x <= this._resetButton.x + 100 &&
			y >= this._resetButton.y && y <= this._resetButton.y + 40) {
			this.resetHUDPositions();
		}
	}
};

//============================================================
// DOT MOVE ADD-ON FEATURES
//============================================================

if (H_DotMoveSystem) {
	function settingPlayerCollisionRect(paramString) {
		const values = paramString.split(',').map(val => parseFloat(val.trim()));
		const width = values[0] || 1;
		const height = values[1] || 1;
		const userOffsetX = values[2] || 0;
		const userOffsetY = values[3] || 0;
		const autoCenterX = (width - 1) / 2;
		const autoCenterY = (height - 1) / 2;

		return {
			width: width,
			height: height,
			offsetX: autoCenterX - userOffsetX,
			offsetY: autoCenterY - userOffsetY
		};
	}

	const playerCollisionData = settingPlayerCollisionRect(playerCollisionRect);
	Game_Player.prototype.width = function () {
		return this._width == null ? playerCollisionData.width : this._width;
	};

	Game_Player.prototype.height = function () {
		return this._height == null ? playerCollisionData.height : this._height;
	};

	Game_Player.prototype.offsetX = function () {
		if (this._offsetX != null) return this._offsetX;
		if (this._width != null) {
			return (this._width - 1) / 2;
		}
		return playerCollisionData.offsetX;
	};

	Game_Player.prototype.offsetY = function () {
		if (this._offsetY != null) return this._offsetY;
		if (this._height != null) {
			return (this._height - 1) / 2;
		}
		return playerCollisionData.offsetY;
	};

	DotMoveSystem.CharacterDotMoveProcess.prototype.dotMoveByDeg = function (deg, dpf) {
		this._dpf = dpf;
		const distance = this.calcDistance(deg);
		const realPoint = this._character.positionPoint();

		if (this._character instanceof Game_Event) {
			const hasNoSlidingComment = this.checkNoSlidingComment();

			if (hasNoSlidingComment || !eventSliding) {
				const targetX = realPoint.x + distance.x;
				const targetY = realPoint.y + distance.y;

				let movedPoint = this.calcMovedPoint(deg.toDirection8(), distance);
				const canReachTarget = (Math.abs(movedPoint.x - targetX) < 0.01 && Math.abs(movedPoint.y - targetY) < 0.01);

				if (canReachTarget) {
					movedPoint.x = $gameMap.roundX(movedPoint.x);
					movedPoint.y = $gameMap.roundY(movedPoint.y);
					this._character.setPositionPoint(movedPoint);
					return true;
				} else {
					return false;
				}
			}
		}

		let movedPoint = this.calcMovedPoint(deg.toDirection8(), distance);
		const margin = dpf / DotMoveSystem.DotMoveUtils.MOVED_MARGIN_UNIT;
		let moved = !this.reachPoint(realPoint, movedPoint, margin);
		movedPoint.x = $gameMap.roundX(movedPoint.x);
		movedPoint.y = $gameMap.roundY(movedPoint.y);
		this._character.setPositionPoint(movedPoint);
		return moved;
	}

	DotMoveSystem.CharacterDotMoveProcess.prototype.checkNoSlidingComment = function () {
		if (!(this._character instanceof Game_Event)) { return false; }
		if (this._character._cachedNoSlidingComment !== undefined) { return this._character._cachedNoSlidingComment; }

		const page = this._character.page();
		if (!page) {
			this._character._cachedNoSlidingComment = false;
			return false;
		}

		const hasNoSlidingComment = page.list.some(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].toLowerCase().includes('<no sliding>')
		);

		this._character._cachedNoSlidingComment = hasNoSlidingComment;
		return hasNoSlidingComment;
	};
}

Game_Character.prototype.dash = function (steps) {
	if (H_DotMoveSystem) {
		// Left stick
		if (typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
			const [rad, power] = Input.leftStick;

			if (power > 0.1) {
				const degree = AnalogStickUtils.rad2deg(rad);
				const direction = this.convertAngleToDirection(degree);
				this.setDirection(direction);
				const distance = steps * this.distancePerFrame() * 3;
				const deg = new DotMoveSystemClassAlias.Degree(degree);
				this.mover().startContinuousMove(distance, deg);
				return;
			}
		}

		if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
			typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
			let degree = $virtualStickController.deg();
			const direction = this.convertAngleToDirection(degree);
			this.setDirection(direction);
			let rad = (degree - 90) * Math.PI / 180;
			let x = Math.cos(rad);
			let y = -Math.sin(rad);

			if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = new DotMoveSystemClassAlias.Degree(degree);
				this.mover().startContinuousMove(distance, deg);
			} else {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
				this.mover().startContinuousMove(distance, deg);
			}
		}
		// Keyboard
		else {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');
			let direction = null;

			if (isUp && isRight) {
				direction = 9;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(9);
				} else {
					this.setDirection(6);
				}
			} else if (isUp && isLeft) {
				direction = 7;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(7);
				} else {
					this.setDirection(4);
				}
			} else if (isDown && isRight) {
				direction = 3;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(3);
				} else {
					this.setDirection(6);
				}
			} else if (isDown && isLeft) {
				direction = 1;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(1);
				} else {
					this.setDirection(4);
				}
			} else if (isUp) {
				direction = 8;
				this.setDirection(8);
			} else if (isDown) {
				direction = 2;
				this.setDirection(2);
			} else if (isLeft) {
				direction = 4;
				this.setDirection(4);
			} else if (isRight) {
				direction = 6;
				this.setDirection(6);
			} else {
				direction = this.direction();
			}

			if (direction !== null) {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
				this.mover().startContinuousMove(distance, deg);
			}
		}
	} else { return }
};

Game_Character.prototype.convertAngleToDirection = function (angle) {
	angle = ((angle % 360) + 360) % 360;
	if (Imported.Hendrix_Animation_Solution && this.is8DirSprite && this.is8DirSprite()) {
		if (angle >= 337.5 || angle < 22.5) return 8;
		if (angle >= 22.5 && angle < 67.5) return 9;
		if (angle >= 67.5 && angle < 112.5) return 6;
		if (angle >= 112.5 && angle < 157.5) return 3;
		if (angle >= 157.5 && angle < 202.5) return 2;
		if (angle >= 202.5 && angle < 247.5) return 1;
		if (angle >= 247.5 && angle < 292.5) return 4;
		if (angle >= 292.5 && angle < 337.5) return 7;
	} else {
		if (angle >= 340 || angle < 30) return 8;
		if (angle >= 30 && angle < 150) return 6;
		if (angle >= 150 && angle < 210) return 2;
		if (angle >= 210 && angle < 340) return 4;
	}

	return 2;
};

const _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function () {
	_Scene_Map_updateScene.call(this);
	if (Input.isTriggered(debugCollisionRectButton) && Utils.isOptionValid('test')) {
		showCollisionAreas = !showCollisionAreas;
	}
};

const _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function () {
	_Spriteset_Map_createLowerLayer.call(this);
	this.createCollisionSprites();
};

Spriteset_Map.prototype.createCollisionSprites = function () {
	this._collisionContainer = new PIXI.Container();
	this._collisionSprites = [];
	this._tilemap.addChild(this._collisionContainer);
};

Spriteset_Map.prototype.updateCollisionSprites = function () {
	if (!this._collisionContainer) return;
	for (const sprite of this._collisionSprites) {
		this._collisionContainer.removeChild(sprite);
	}
	this._collisionSprites = [];

	if (!showCollisionAreas) return;

	for (const character of $gameMap.allCharacters()) {
		if (character instanceof Game_Follower) continue;

		const rect = character.collisionRect();
		if (!rect) continue;

		const sprite = new PIXI.Graphics();
		sprite.beginFill(0x00FF00, 0.5);

		const x = $gameMap.adjustX(rect.x) * $gameMap.tileWidth();
		const y = $gameMap.adjustY(rect.y) * $gameMap.tileHeight();
		const width = rect.width * $gameMap.tileWidth();
		const height = rect.height * $gameMap.tileHeight();

		sprite.drawRect(0, 0, width, height);
		sprite.endFill();

		sprite.x = x;
		sprite.y = y;

		this._collisionSprites.push(sprite);
		this._collisionContainer.addChild(sprite);

		if (character instanceof Game_Event) {
			const areaSprite = new PIXI.Graphics();
			areaSprite.beginFill(0x0000FF, 0.3);

			const centerX = x + width / 2;
			const centerY = y + height / 2;
			const areaWidth = character.widthArea() * $gameMap.tileWidth();
			const areaHeight = character.heightArea() * $gameMap.tileHeight();

			areaSprite.drawRect(centerX - areaWidth, centerY - areaHeight, areaWidth * 2, areaHeight * 2);
			areaSprite.endFill();

			this._collisionSprites.push(areaSprite);
			this._collisionContainer.addChild(areaSprite);
		}
	}
};

//============================================================
// SELF SWITCH
//============================================================

const processSelSwitch = function (state, comment, eventId, sourceInterpreter) {
	const mapId = $gameMap.mapId();

	// nearby <notetag>
	if (typeof eventId === 'string' && eventId.startsWith('nearby ')) {
		const tag = eventId.slice(7);
		const sourceEvent = $gameMap.event(sourceInterpreter._eventId);
		if (!sourceEvent) return;
		const nearestEvent = findNearestTarget(tag, sourceEvent.x, sourceEvent.y);
		if (nearestEvent && nearestEvent !== sourceEvent) {
			processEvent(nearestEvent, comment, state, mapId);
		}
	}
	else if (typeof eventId === 'string' && eventId.startsWith('<') && eventId.endsWith('>')) {
		$gameMap.events().forEach(event => {
			if (event && event.event().note.includes(eventId)) {
				processEvent(event, comment, state, mapId);
			}
		});
	}
	else {
		const event = $gameMap.event(eventId);
		if (event) {
			processEvent(event, comment, state, mapId);
		}
	}
};

const processEvent = function (event, comment, state, mapId) {
	const eventData = event.event();

	for (let i = 0; i < eventData.pages.length; i++) {
		const page = eventData.pages[i];
		const hasComment = page.list.some(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].includes(comment)
		);

		if (hasComment) {
			// Check if page uses a switch named "self switch X"
			if (page.conditions.switch1Valid) {
				const switchName = $dataSystem.switches[page.conditions.switch1Id];
				if (switchName?.toLowerCase().startsWith('self switch')) {
					$gameSelfSwitches.setValue([mapId, event.eventId(),
						`SW_${page.conditions.switch1Id}`], state);
					event.refresh();
					return;
				}
			}

			// Check abcd self switch
			if (page.conditions.selfSwitchValid) {
				$gameSelfSwitches.setValue([mapId, event.eventId(),
					page.conditions.selfSwitchCh], state);
				event.refresh();
				return;
			}
		}
	}
};

PluginManager.registerCommand(HpluginName, "ControlSelfSwitch", function (args) {
	const eventId = args.eventId === '' || args.eventId === '0' ? this.eventId() : args.eventId;
	const state = args.state === 'true';
	processSelSwitch(state, args.comment, eventId, this);
});

const H_Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function (key, value) {
	const switchId = key[2];

	if (switchId.startsWith('SW_')) {
		const actualSwitchId = parseInt(switchId.replace('SW_', ''));
		if (!isNaN(actualSwitchId)) {
			$gameSwitches.setValue(actualSwitchId, value);
		}
	}

	H_Game_SelfSwitches_setValue.call(this, key, value);
};

const H_Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function (page) {
	const c = page.conditions;
	if (c.switch1Valid) {
		const switchName = $dataSystem.switches[c.switch1Id];
		if (switchName && switchName.toLowerCase().startsWith('self switch')) {
			const key = [$gameMap.mapId(), this._eventId, `SW_${c.switch1Id}`];
			if (!$gameSelfSwitches.value(key)) {
				return false;
			}
			const modifiedPage = {
				...page,
				conditions: {
					...c,
					switch1Valid: false
				}
			};
			return H_Game_Event_meetsConditions.call(this, modifiedPage);
		}
	}
	return H_Game_Event_meetsConditions.call(this, page);
};

//============================================================
// SELF VARIABLES
//============================================================

var LocalVarManager = LocalVarManager || {};
LocalVarManager.localVars = {};
window.LocalVarManager = LocalVarManager;

PluginManager.registerCommand(HpluginName, "SetValue", function (args) {
	const eventId = `${$gameMap.mapId()}_${this._eventId}`;
	const id = args.id || 'default';
	const valueStr = String(args.valueToSet);
	const randomMax = args.randomMax;

	LocalVarManager.localVars[eventId] = LocalVarManager.localVars[eventId] || {};

	let newValue;

	if (randomMax && randomMax.trim() !== '') {
		const min = Number(valueStr);
		const max = Number(randomMax);
		newValue = Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		const isPlainString = !/[+\-*/()$=<>!&|]/.test(valueStr) &&
			isNaN(Number(valueStr)) &&
			!valueStr.includes('Math.') &&
			!valueStr.includes('true') &&
			!valueStr.includes('false');

		if (isPlainString) {
			newValue = valueStr;
		} else {
			const currentValue = LocalVarManager.localVars[eventId][id] || 0;
			const startsWithOperator = /^[+\-*/]/.test(valueStr.trim());

			if (startsWithOperator) {
				const expression = `${currentValue}${valueStr}`;
				newValue = eval(expression);
			} else {
				newValue = eval(valueStr);
			}
		}
	}

	LocalVarManager.localVars[eventId][id] = newValue;
	LocalVarManager.saveLocalVars();
});

PluginManager.registerCommand(HpluginName, "ResetMapValues", function () {
	const currentMapId = $gameMap.mapId();
	const mapPrefix = `${currentMapId}_`;
	for (const key in LocalVarManager.localVars) {
		if (key.startsWith(mapPrefix)) {
			LocalVarManager.localVars[key] = {};
		}
	}
	LocalVarManager.saveLocalVars();
});

LocalVarManager.saveLocalVars = function () {
	if ($gameVariables) {
		$gameVariables.setValue(9999, JSON.stringify(LocalVarManager.localVars));
	}
};

LocalVarManager.loadLocalVars = function () {
	if ($gameVariables) {
		const savedData = $gameVariables.value(9999);
		LocalVarManager.localVars = savedData ? JSON.parse(savedData) : {};
	}
};

window.localVariable = function (eventId, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const varName = typeof id === 'number' ? String(id) : id;
	return LocalVarManager.localVars[uniqueId] ? (LocalVarManager.localVars[uniqueId][varName] || 0) : 0;
};

window.eventLocalVariable = function (eventId, id = 'default', direction = null) {
	let sourceX, sourceY;

	if (eventId === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch ($gamePlayer.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch ($gamePlayer.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else if (typeof eventId === 'string' && eventId.startsWith('<')) {
		const nearestEvent = findNearestTarget(eventId, $gamePlayer.x, $gamePlayer.y);
		if (!nearestEvent) return undefined;
		sourceX = nearestEvent.x;
		sourceY = nearestEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (nearestEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (nearestEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else {
		const sourceEvent = $gameMap.event(eventId);
		if (!sourceEvent) return undefined;
		sourceX = sourceEvent.x;
		sourceY = sourceEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (sourceEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (sourceEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	}

	const eventsAtPosition = $gameMap.eventsXy(sourceX, sourceY);

	const otherEvents = typeof eventId === 'number' ?
		eventsAtPosition.filter(event => event.eventId() !== eventId) :
		eventsAtPosition;

	for (const event of otherEvents) {
		const uniqueId = `${$gameMap.mapId()}_${event.eventId()}`;
		const localVarValue = LocalVarManager.localVars[uniqueId] ?
			LocalVarManager.localVars[uniqueId][id] :
			undefined;

		if (localVarValue !== undefined) {
			return localVarValue;
		}
	}

	return undefined;
};

window.localPercentage = function (eventId, percentage) {
	if (eventId === 'player') {
		return Math.random() * 100 < percentage;
	}

	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const randomValue = Math.random() * 100;

	LocalVarManager.localVars[uniqueId] = LocalVarManager.localVars[uniqueId] || {};
	LocalVarManager.localVars[uniqueId]['percentageValue'] = randomValue;

	return randomValue < percentage;
};

window.localVar = function (eventId, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	return LocalVarManager.localVars[uniqueId] ? LocalVarManager.localVars[uniqueId][id] || 0 : 0;
};

PluginManager.registerCommand(HpluginName, "QuickSwitchVariableReset", function (args) {
	const target = args.target || 'both';
	const keyword = args.keyword?.trim() || '';

	if (!keyword) {
		return;
	}

	let switchesReset = 0;
	let variablesReset = 0;

	if (target === 'switch' || target === 'both') {
		for (let i = 1; i < $dataSystem.switches.length; i++) {
			const switchName = $dataSystem.switches[i];
			if (switchName && switchName.toLowerCase().includes(keyword.toLowerCase())) {
				$gameSwitches.setValue(i, false);
				switchesReset++;
			}
		}
	}

	if (target === 'variable' || target === 'both') {
		for (let i = 1; i < $dataSystem.variables.length; i++) {
			const variableName = $dataSystem.variables[i];
			if (variableName && variableName.toLowerCase().includes(keyword.toLowerCase())) {
				$gameVariables.setValue(i, 0);
				variablesReset++;
			}
		}
	}

	if (Utils.isOptionValid('test')) {
		console.log(`Quick Reset completed: ${switchesReset} switches, ${variablesReset} variables reset with keyword "${keyword}"`);
	}
});

//============================================================
// WEAPON SWING
//============================================================

PluginManager.registerCommand(HpluginName, "SwingWeapon", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : args.eventId === 'player' ? 0 : parseInt(args.eventId);
	const source = eventId === 0 ? $gamePlayer : $gameMap.event(eventId);
	if (!source) return;

	let [offsetX, offsetY] = args.offset.split(',').map(v => parseInt(v.trim()) || 0);
	const speed = parseInt(args.speed) || 20;
	const zIndex = args.zIndex || 'same';
	const style = args.style || 'clockwise';

	const visualSettings = args.visualSettings ? JSON.parse(args.visualSettings) : {};
	const traitEffect = visualSettings.traitEffect === 'true' || visualSettings.traitEffect === true;
	const traitColor = visualSettings.traitColor || '';
	const traitBlend = visualSettings.traitBlend || 'screen';
	const traitOrder = visualSettings.traitOrder || 'below';

	const sprite = new Sprite_WeaponSwing(args.weaponSprite, source, offsetX, offsetY, speed, zIndex, style, traitEffect, traitColor, traitBlend, traitOrder);
	if (SceneManager._scene._spriteset && SceneManager._scene._spriteset._tilemap) {
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	} else {
		SceneManager._scene._spriteset.addChild(sprite);
	}
});

class Sprite_WeaponSwing extends Sprite {
	constructor(weaponImage, source, offsetX, offsetY, duration, zIndex, style, traitEffect, traitColor, traitBlend, traitOrder) {
		super();
		this.bitmap = ImageManager.loadPicture(weaponImage);
		this._source = source;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._duration = duration;
		this._totalDuration = duration;
		this._zIndexMode = zIndex || 'same';
		this._style = style || 'clockwise';

		this._traitEffect = traitEffect !== false;
		this._traitColor = traitColor || '';
		this._traitBlend = this.getBlendMode(traitBlend || 'screen');
		this._traitOrder = traitOrder || 'below';

		this.anchor.x = 0;
		this.anchor.y = 0.5;
		this.x = source.screenX() + offsetX;
		this.y = source.screenY() + offsetY;

		this._trailSprites = [];
		this.setupTrail(duration);
		this._lastTrailRotation = null;
		this._lastTrailX = null;
		this._lastTrailY = null;

		this._frameCounter = 0;
		this.updateZIndex();
		this.setupAnimationStyle();
	}

	getBlendMode(blendName) {
		const blendModes = {
			'normal': 0,
			'add': 1,
			'multiply': 2,
			'screen': 3
		};
		return blendModes[blendName] || 0;
	}

	setupTrail(duration) {
		if (duration <= 10) {
			this._maxTrails = 100;
		} else if (duration <= 20) {
			this._maxTrails = 100;
		} else if (duration <= 40) {
			this._maxTrails = 35;
		} else {
			this._maxTrails = 20;
		}

		this._trailOpacity = 170;
		this._trailFadeSpeed = 25;
	}

	updateZIndex() {
		const sourceZ = this._source.screenZ();
		switch (this._zIndexMode) {
			case 'below':
				this.z = sourceZ - 1;
				break;
			case 'above':
				this.z = sourceZ + 1;
				break;
			case 'same':
			default:
				this.z = sourceZ;
				break;
		}
	}

	setupAnimationStyle() {
		const direction = this._source.direction();
		const toRadians = angle => (angle * Math.PI) / 180;

		if (this._style === 'thrust') {
			this.setupThrustStyle(direction, toRadians);
		} else {
			this.setupRotationStyle(direction, toRadians);
		}
	}

	setupRotationStyle(direction, toRadians) {
		let startAngle, endAngle;

		switch (direction) {
			case 2:
				startAngle = 0;
				endAngle = 180;
				break;
			case 4:
				startAngle = 270;
				endAngle = 90;
				break;
			case 6:
				this.scale.x = -1;
				startAngle = 90;
				endAngle = 270;
				break;
			case 8:
				startAngle = 180;
				endAngle = 360;
				break;
		}

		switch (this._style) {
			case 'counterclockwise':
				[startAngle, endAngle] = [endAngle, startAngle];
				break;
			case 'fullcircle':
				if (direction === 4) {
					endAngle = startAngle - 360;
				} else {
					endAngle = startAngle + 360;
				}
				break;
			case 'clockwise':
			default:
				break;
		}

		this._startAngle = toRadians(startAngle);
		this._endAngle = toRadians(endAngle);
		this.rotation = this._startAngle;
	}

	setupThrustStyle(direction, toRadians) {
		switch (direction) {
			case 2:
				this.rotation = toRadians(90);
				this._thrustDirection = { x: 0, y: 1 };
				break;
			case 4:
				this.rotation = toRadians(180);
				this._thrustDirection = { x: -1, y: 0 };
				break;
			case 6:
				this.rotation = toRadians(0);
				this._thrustDirection = { x: 1, y: 0 };
				break;
			case 8:
				this.rotation = toRadians(270);
				this._thrustDirection = { x: 0, y: -1 };
				break;
		}

		this._thrustDistance = $gameMap.tileWidth() / 1.5;
		this._startX = this._source.screenX() + this._offsetX;
		this._startY = this._source.screenY() + this._offsetY;
	}

	update() {
		super.update();
		if (this._duration > 0) {
			this._duration--;
			const progress = (this._totalDuration - this._duration) / this._totalDuration;

			if (this._style === 'thrust') {
				this.updateThrustAnimation(progress);
			} else {
				this.updateRotationAnimation(progress);
			}

			this.updateZIndex();
			this.updateMotionBlur();
		} else if (this._duration === 0) {
			if (this._style === 'thrust') {
				this.updateThrustAnimation(1.0);
			} else {
				this.rotation = this._endAngle;
				const screenX = this._source.screenX() + this._offsetX;
				const screenY = this._source.screenY() + this._offsetY;
				this.x = screenX;
				this.y = screenY;
			}

			this.updateZIndex();
			this.updateMotionBlur();
			this._duration = -1;
			this.clearMotionBlur();
			this.parent.removeChild(this);
		}
	}

	updateMotionBlur() {
		if (!this._traitEffect) return;

		this._frameCounter++;
		let trailsToCreate = 1;

		if (this._lastTrailRotation !== null) {
			const rotationDiff = Math.abs(this.rotation - this._lastTrailRotation);
			const dx = this.x - this._lastTrailX;
			const dy = this.y - this._lastTrailY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const rotationTrails = Math.ceil(rotationDiff / 0.05);
			const positionTrails = Math.ceil(distance / 2);
			trailsToCreate = Math.max(1, rotationTrails, positionTrails);
			trailsToCreate = Math.min(trailsToCreate, 10);
		}

		for (let i = 0; i < trailsToCreate; i++) {
			const t = (i + 1) / (trailsToCreate + 1);

			const trail = new Sprite();
			trail.bitmap = this.bitmap;
			trail.anchor.x = this.anchor.x;
			trail.anchor.y = this.anchor.y;

			if (this._lastTrailRotation !== null) {
				trail.x = this._lastTrailX + (this.x - this._lastTrailX) * t;
				trail.y = this._lastTrailY + (this.y - this._lastTrailY) * t;
				trail.rotation = this._lastTrailRotation + (this.rotation - this._lastTrailRotation) * t;
			} else {
				trail.x = this.x;
				trail.y = this.y;
				trail.rotation = this.rotation;
			}

			trail.scale.x = this.scale.x;
			trail.scale.y = this.scale.y;

			if (this._traitOrder === 'above') {
				trail.z = this.z + 0.1;
			} else {
				trail.z = this.z - 0.1;
			}

			trail.opacity = this._trailOpacity * (1 - t * 0.3);
			trail.blendMode = this._traitBlend;
			if (this._traitColor) {
				trail.setColorTone(this.hexToColorTone(this._traitColor));
			}
			trail._fadeSpeed = this._trailFadeSpeed;

			this._trailSprites.push(trail);
			this.parent.addChild(trail);

			while (this._trailSprites.length > this._maxTrails) {
				const oldTrail = this._trailSprites.shift();
				this.parent.removeChild(oldTrail);
			}
		}

		this._lastTrailRotation = this.rotation;
		this._lastTrailX = this.x;
		this._lastTrailY = this.y;

		for (let i = this._trailSprites.length - 1; i >= 0; i--) {
			const trail = this._trailSprites[i];

			if (this._traitOrder === 'above') {
				trail.z = this.z + 0.1;
			} else {
				trail.z = this.z - 0.1;
			}

			trail.opacity -= trail._fadeSpeed;

			if (trail.opacity <= 0) {
				this.parent.removeChild(trail);
				this._trailSprites.splice(i, 1);
			}
		}
	}

	hexToColorTone(hex) {
		hex = hex.replace('#', '');
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		return [(r - 128) * 2, (g - 128) * 2, (b - 128) * 2, 0];
	}

	clearMotionBlur() {
		for (const trail of this._trailSprites) {
			if (trail.parent) {
				trail.parent.removeChild(trail);
			}
		}
		this._trailSprites = [];
	}

	updateRotationAnimation(progress) {
		this.rotation = this._startAngle + (this._endAngle - this._startAngle) * progress;

		const screenX = this._source.screenX() + this._offsetX;
		const screenY = this._source.screenY() + this._offsetY;
		this.x = screenX;
		this.y = screenY;
	}

	updateThrustAnimation(progress) {
		let thrustProgress;

		if (progress < 0.33) {
			thrustProgress = -(progress / 0.33) * 0.5;
		} else if (progress < 0.66) {
			const phase2Progress = (progress - 0.33) / 0.33;
			thrustProgress = -0.5 + (phase2Progress * 1.5);
		} else {
			const phase3Progress = (progress - 0.66) / 0.34;
			thrustProgress = 1.0 - (phase3Progress * 1.0);
		}

		const screenX = this._source.screenX() + this._offsetX;
		const screenY = this._source.screenY() + this._offsetY;

		this.x = screenX + (this._thrustDirection.x * this._thrustDistance * thrustProgress);
		this.y = screenY + (this._thrustDirection.y * this._thrustDistance * thrustProgress);
	}
}

//============================================================
// GUN AMMO SYSTEM
//============================================================

Game_System.prototype.getGunData = function (weaponId) {
	if (!this._gunData[weaponId]) {
		const weapon = $dataWeapons[weaponId];
		if (!weapon) return null;

		const capacityMatch = weapon.note.match(/<capacity:\s*(.+?)>/i);
		const ammoItemMatch = weapon.note.match(/<ammo item:\s*(.+?)>/i);
		const startingAmmoMatch = weapon.note.match(/<starting ammo:\s*(.+?)>/i);

		if (!capacityMatch || !ammoItemMatch) return null;

		const capacityStr = capacityMatch[1].trim();
		const maxCapacity = capacityStr.includes('$game') ? eval(capacityStr) : parseInt(capacityStr);

		let startingAmmo = 0;
		if (startingAmmoMatch) {
			const startingStr = startingAmmoMatch[1].trim();
			startingAmmo = startingStr.includes('$game') ? eval(startingStr) : parseInt(startingStr);
		}

		const ammoIdentifier = ammoItemMatch[1].trim();
		let ammoItem = null;

		if (!isNaN(ammoIdentifier)) {
			ammoItem = $dataItems[parseInt(ammoIdentifier)];
		} else {
			ammoItem = $dataItems.find(item => item && item.name === ammoIdentifier);
		}

		if (!ammoItem) return null;

		this._gunData[weaponId] = {
			currentAmmo: Math.min(startingAmmo, maxCapacity),
			maxCapacity: maxCapacity,
			ammoItemId: ammoItem.id,
			ammoItem: ammoItem
		};
	}

	return this._gunData[weaponId];
};

Game_System.prototype.setGunAmmo = function (weaponId, ammo) {
	const gunData = this.getGunData(weaponId);
	if (gunData) {
		gunData.currentAmmo = Math.max(0, Math.min(ammo, gunData.maxCapacity));
	}
};

Game_System.prototype.setGunCapacity = function (weaponId, capacity) {
	const gunData = this.getGunData(weaponId);
	if (gunData) {
		gunData.maxCapacity = Math.max(1, capacity);
		gunData.currentAmmo = Math.min(gunData.currentAmmo, gunData.maxCapacity);
	}
};

PluginManager.registerCommand(HpluginName, "GunAmmoControl", function (args) {
	const slotIndex = parseInt(args.slot || '0');
	const target = args.target || 'ammo';
	const valueExpr = args.value || '0';

	const weapon = $gameParty.leader().equips()[slotIndex];
	if (!weapon || !DataManager.isWeapon(weapon)) return;

	const gunData = $gameSystem.getGunData(weapon.id);
	if (!gunData) return;

	let value = 0;
	value = eval(valueExpr);

	if (target === 'ammo') {
		if (value > 0) {
			const ammoNeeded = Math.min(value, gunData.maxCapacity - gunData.currentAmmo);
			const ammoAvailable = $gameParty.numItems(gunData.ammoItem);
			const ammoToAdd = Math.min(ammoNeeded, ammoAvailable);

			if (ammoToAdd > 0) {
				$gameParty.loseItem(gunData.ammoItem, ammoToAdd);
				$gameSystem.setGunAmmo(weapon.id, gunData.currentAmmo + ammoToAdd);
			}
		} else if (value < 0) {
			const ammoToRemove = Math.min(Math.abs(value), gunData.currentAmmo);
			$gameSystem.setGunAmmo(weapon.id, gunData.currentAmmo - ammoToRemove);
		}
	} else if (target === 'capacity') {
		const newCapacity = gunData.maxCapacity + value;
		$gameSystem.setGunCapacity(weapon.id, newCapacity);
	}
});

PluginManager.registerCommand(HpluginName, "GunReload", function (args) {
	const slotIndex = parseInt(args.slot || '0');
	const weapon = $gameParty.leader().equips()[slotIndex];
	if (!weapon || !DataManager.isWeapon(weapon)) return;
	performGunReload(weapon.id);
});

function performGunReload(weaponId) {
	const gunData = $gameSystem.getGunData(weaponId);
	if (!gunData) {
		console.log("Gun Reload: No gun data found for weapon ID (You need to add note to database weapon like <ammo item: x> <capacity: x> or <starting ammo: x>", weaponId);
		return false;
	}

	if (gunData.currentAmmo >= gunData.maxCapacity) {
		return false;
	}

	const ammoNeeded = gunData.maxCapacity - gunData.currentAmmo;
	const ammoAvailable = $gameParty.numItems(gunData.ammoItem);

	if (ammoAvailable <= 0) {
		return false;
	}

	const ammoToLoad = Math.min(ammoNeeded, ammoAvailable);
	$gameParty.loseItem(gunData.ammoItem, ammoToLoad);
	$gameSystem.setGunAmmo(weaponId, gunData.currentAmmo + ammoToLoad);

	return true;
}

window.gunAmmo = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	return gunData ? gunData.currentAmmo : 0;
};

window.gunCapacity = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	return gunData ? gunData.maxCapacity : 0;
};

window.gunAmmoInInventory = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	if (!gunData || !gunData.ammoItem) return 0;
	return $gameParty.numItems(gunData.ammoItem);
};

Game_System.prototype.gunAmmo = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	return gunData ? gunData.currentAmmo : 0;
};

Game_System.prototype.gunCapacity = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	return gunData ? gunData.maxCapacity : 0;
};

Game_System.prototype.gunAmmoInInventory = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	if (!gunData || !gunData.ammoItem) return 0;
	return $gameParty.numItems(gunData.ammoItem);
};

//============================================================
// STATES
//============================================================

function processStateApplication(sourceEvent, targetEventId) {
	if (CollisionManager.lastEvaded || CollisionManager.lastImmunity) {
		return;
	}
	if (!sourceEvent || !sourceEvent.event) return;

	const eventNote = sourceEvent.event().note;
	const dmgMatch = eventNote.match(/<dmg:\s*(.+?)>/i);
	if (!dmgMatch) return;

	const skillName = dmgMatch[1].trim();
	const skill = $dataSkills.find(s => s && s.name === skillName);
	if (!skill || !skill.effects) return;

	skill.effects.forEach(effect => {
		if (effect.code === Game_Action.EFFECT_ADD_STATE) {
			const stateId = effect.dataId;
			const baseRate = effect.value1;
			const { stateRate, hasStateResist } = checkStateResistance(targetEventId, stateId, baseRate);

			if (hasStateResist) return;

			if (Math.random() < stateRate) {
				const state = $dataStates[stateId];
				if (!state) return;

				const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
				if (!commonEventMatch) return;

				const commonEventIdentifier = commonEventMatch[1].trim();
				let commonEventId;

				if (!isNaN(commonEventIdentifier)) {
					commonEventId = parseInt(commonEventIdentifier);
				} else {
					commonEventId = commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
				}

				if (!commonEventId) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const actor = $gameParty.leader();
					if (actor) {
						actor.addState(stateId);
						if (!$gameSystem.passiveCommonEvents) {
							$gameSystem.passiveCommonEvents = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = {};
						}

						if (!$gamePlayer.stateInterpreters) {
							$gamePlayer.stateInterpreters = {};
						}

						if ($gamePlayer.stateInterpreters[stateId]) {
							const interpreter = $gamePlayer.stateInterpreters[stateId];
							if (interpreter && interpreter.isRunning()) {
								return;
							}
						}

						$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
						const interpreter = new Game_Interpreter();
						interpreter.setup($dataCommonEvents[commonEventId].list, 0);
						$gamePlayer.stateInterpreters[stateId] = interpreter;
					}
				} else {
					const targetEvent = $gameMap.event(targetEventId);
					if (targetEvent) {
						if (!$gameSystem.passiveCommonEvents) {
							$gameSystem.passiveCommonEvents = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = {};
						}

						if (!targetEvent.stateInterpreters) {
							targetEvent.stateInterpreters = {};
						}

						if (targetEvent.stateInterpreters[stateId]) {
							const interpreter = targetEvent.stateInterpreters[stateId];
							if (interpreter && interpreter.isRunning()) {
								return;
							}
						}

						$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
						const interpreter = new Game_Interpreter();
						interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
						targetEvent.stateInterpreters[stateId] = interpreter;
					}
				}
			}
		}
	});
}

function checkStateResistance(targetEventId, stateId, baseRate = 1.0) {
	let stateRate = baseRate;
	let hasStateResist = false;

	if (targetEventId === 0 || targetEventId === 'player') {
		const actor = $gameParty.leader();
		if (actor) {
			const actorStateRate = actor.stateRate ? actor.stateRate(stateId) : 1.0;
			stateRate = baseRate * actorStateRate;
			hasStateResist = actor.traitObjects().some(obj =>
				obj?.traits?.some(trait => trait.code === 14 && trait.dataId === stateId)
			);
		}
	} else {
		const targetEvent = $gameMap.event(targetEventId);
		if (targetEvent) {
			if (targetEvent.databaseActor) {
				if (typeof targetEvent.databaseActor.stateRate === 'function') {
					const actorStateRate = targetEvent.databaseActor.stateRate(stateId);
					stateRate = baseRate * actorStateRate;
				}
				if (targetEvent.databaseActor.traitObjects) {
					hasStateResist = targetEvent.databaseActor.traitObjects().some(obj =>
						obj?.traits?.some(trait => trait.code === 14 && trait.dataId === stateId)
					);
				}
			} else if (targetEvent.databaseEnemy?.traits) {
				const rateTrait = targetEvent.databaseEnemy.traits.find(
					t => t.code === 13 && t.dataId === stateId
				);
				if (rateTrait) {
					stateRate = baseRate * rateTrait.value;
				} else {
					stateRate = baseRate;
				}

				hasStateResist = targetEvent.databaseEnemy.traits.some(
					t => t.code === 14 && t.dataId === stateId
				);
			}
		}
	}

	return { stateRate, hasStateResist };
}

function processEnemyAttackTraits(sourceEvent, targetEventId) {
	if (!sourceEvent.databaseEnemy || !sourceEvent.databaseEnemy.traits) return;
	const enemy = sourceEvent.databaseEnemy;

	enemy.traits.forEach(trait => {
		if (trait.code === 32) {
			const stateId = trait.dataId;
			const stateChance = trait.value;
			const { stateRate, hasStateResist } = checkStateResistance(targetEventId, stateId, stateChance);

			if (hasStateResist) return;

			if (Math.random() < stateRate) {
				const state = $dataStates[stateId];
				if (!state) return;

				const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
				if (!commonEventMatch) return;

				const commonEventIdentifier = commonEventMatch[1].trim();
				let commonEventId = !isNaN(commonEventIdentifier) ?
					parseInt(commonEventIdentifier) :
					commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;

				if (!commonEventId) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const actor = $gameParty.leader();
					if (actor) {
						actor.addState(stateId);
						$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] || {};
						$gamePlayer.stateInterpreters = $gamePlayer.stateInterpreters || {};

						if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
							const interpreter = new Game_Interpreter();
							interpreter.setup($dataCommonEvents[commonEventId].list, 0);
							$gamePlayer.stateInterpreters[stateId] = interpreter;
						}
					}
				}
				else {
					const targetEvent = $gameMap.event(targetEventId);
					if (targetEvent) {
						$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] || {};
						targetEvent.stateInterpreters = targetEvent.stateInterpreters || {};

						if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
							const interpreter = new Game_Interpreter();
							interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
							targetEvent.stateInterpreters[stateId] = interpreter;
						}
					}
				}
			}
		}
	});
}

PluginManager.registerCommand(HpluginName, "AddState", function (args) {
	const stateId = parseInt(args.stateId);
	if (!stateId || !$dataStates[stateId]) return;

	const state = $dataStates[stateId];
	const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);

	let commonEventId = null;
	if (commonEventMatch) {
		const commonEventIdentifier = commonEventMatch[1].trim();
		if (!isNaN(commonEventIdentifier)) {
			commonEventId = parseInt(commonEventIdentifier);
		} else {
			commonEventId = commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
		}
	}

	const target = args.target || 'this';
	const targets = findTargets(target, this);
	const targetCharacters = targets.map(char => ({
		id: char === $gamePlayer ? 0 : char.eventId(),
		character: char,
		actor: char === $gamePlayer ? $gameParty.leader() : null
	}));

	targetCharacters.forEach(targetData => {
		const targetId = targetData.id;
		const { stateRate, hasStateResist } = checkStateResistance(targetId, stateId);

		if (hasStateResist) return;
		if (Math.random() >= stateRate) return;

		if (targetId === 0) {
			const actor = $gameParty.leader();
			if (actor && commonEventId) {
				actor.addState(stateId);

				if (!$gameSystem.passiveCommonEvents) {
					$gameSystem.passiveCommonEvents = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = {};
				}

				if (!$gamePlayer.stateInterpreters) {
					$gamePlayer.stateInterpreters = {};
				}

				if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, 0);
					$gamePlayer.stateInterpreters[stateId] = interpreter;
				}
			}
		} else {
			const targetEvent = $gameMap.event(targetId);
			if (targetEvent && commonEventId) {
				if (!$gameSystem.passiveCommonEvents) {
					$gameSystem.passiveCommonEvents = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId] = {};
				}

				if (!targetEvent.stateInterpreters) {
					targetEvent.stateInterpreters = {};
				}

				if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId][stateId] = commonEventId;
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, targetId);
					targetEvent.stateInterpreters[stateId] = interpreter;
				}
			}
		}
	});
});

PluginManager.registerCommand(HpluginName, "RemoveState", function (args) {
	const stateId = parseInt(args.stateId);
	if (!stateId || !$dataStates[stateId]) return;

	const state = $dataStates[stateId];
	const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
	if (!commonEventMatch) return;

	const commonEventIdentifier = commonEventMatch[1].trim();
	let commonEventId;

	if (!isNaN(commonEventIdentifier)) {
		commonEventId = parseInt(commonEventIdentifier);
	} else {
		commonEventId = commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
	}

	if (!commonEventId) return;

	const callingEventId = this._eventId;

	// See who called this common event
	if (!callingEventId || callingEventId === 0) {
		// Player
		const actor = $gameParty.leader();
		if (actor && actor.isStateAffected(stateId)) {
			actor.removeState(stateId);

			if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.['player']?.[stateId]) {
				delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId];

				if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']).length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'];
				}
			}

			if ($gamePlayer.stateInterpreters?.[stateId]) {
				delete $gamePlayer.stateInterpreters[stateId];
			}
		}
	} else {
		// Event
		const targetEvent = $gameMap.event(callingEventId);
		if (targetEvent) {
			if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.[callingEventId]?.[stateId]) {
				delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId][stateId];

				if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId]).length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId];
				}
			}

			if (targetEvent.stateInterpreters?.[stateId]) {
				delete targetEvent.stateInterpreters[stateId];
			}
		}
	}
});

//============================================================
// KNOCKBACK
//============================================================

PluginManager.registerCommand(HpluginName, "Knockback", function (args) {
	const whoToKnockback = args.character || 'this';
	const target = args.from || 'player';
	const distance = Number(args.distance) || 1;
	const durationPower = args.durationPower || '30, 2';
	const waitToComplete = args.wait === 'true';
	const style = args.style || 'push';
	const parts = durationPower.split(',').map(s => s.trim());
	const duration = Number(parts[0]) || 30;
	const decelPower = Number(parts[1]) || 2;

	const characters = findTargets(whoToKnockback, this);
	if (characters.length === 0) return;

	characters.forEach(character => {
		let targetX, targetY;

		if (target === 'playerLockedTarget') {
			const playerTarget = $gamePlayer.getLockedTarget();
			if (!playerTarget) return;
			targetX = playerTarget.x;
			targetY = playerTarget.y;
		}
		else if (target === 'eventLockedTarget') {
			const eventTarget = character.getLockedTarget();
			if (!eventTarget) return;
			targetX = eventTarget.x;
			targetY = eventTarget.y;
		}
		else if (target === 'player') {
			const playerPos = $gamePlayer.positionPoint();
			targetX = playerPos.x;
			targetY = playerPos.y;
		}
		else if (!isNaN(target)) {
			const event = $gameMap.event(Number(target));
			if (!event) return;
			const eventPos = event.positionPoint();
			targetX = eventPos.x;
			targetY = eventPos.y;
		}
		else if (typeof target === 'string') {
			const searchTag = target.startsWith('<') ? target : `<${target}>`;
			let closestEvent = null;
			let minDistance = Infinity;

			$gameMap.events().forEach(event => {
				if (event.event().note.includes(searchTag)) {
					const eventPos = event.positionPoint();
					const thisPos = character.positionPoint();
					const dist = Math.sqrt(
						Math.pow(eventPos.x - thisPos.x, 2) +
						Math.pow(eventPos.y - thisPos.y, 2)
					);

					if (dist < minDistance) {
						closestEvent = event;
						minDistance = dist;
					}
				}
			});

			if (!closestEvent) return;
			const eventPos = closestEvent.positionPoint();
			targetX = eventPos.x;
			targetY = eventPos.y;
		}

		const thisPos = character.positionPoint();
		const dx = thisPos.x - targetX;
		const dy = thisPos.y - targetY;

		const radians = Math.atan2(dy, dx);
		let moveDegrees = (radians * 180 / Math.PI + 90) % 360;
		if (moveDegrees < 0) moveDegrees += 360;

		if (style === 'jump') {
			let jumpX = 0;
			let jumpY = 0;
			const dist = Math.round(distance);

			if (moveDegrees >= 337.5 || moveDegrees < 22.5) {
				// Up
				jumpY = -dist;
			} else if (moveDegrees >= 22.5 && moveDegrees < 67.5) {
				// Up-Right
				jumpX = dist;
				jumpY = -dist;
			} else if (moveDegrees >= 67.5 && moveDegrees < 112.5) {
				// Right
				jumpX = dist;
			} else if (moveDegrees >= 112.5 && moveDegrees < 157.5) {
				// Down-Right
				jumpX = dist;
				jumpY = dist;
			} else if (moveDegrees >= 157.5 && moveDegrees < 202.5) {
				// Down
				jumpY = dist;
			} else if (moveDegrees >= 202.5 && moveDegrees < 247.5) {
				// Down-Left
				jumpX = -dist;
				jumpY = dist;
			} else if (moveDegrees >= 247.5 && moveDegrees < 292.5) {
				// Left
				jumpX = -dist;
			} else if (moveDegrees >= 292.5 && moveDegrees < 337.5) {
				// Up-Left
				jumpX = -dist;
				jumpY = -dist;
			}

			character.jump(jumpX, jumpY);
		}
		else if (H_DotMoveSystem) {
			if (!character.knockback) {
				character.knockback = {};
			}

			const velocityMultiplier = decelPower + 1;
			const initialVelocity = (distance * velocityMultiplier) / duration;
			character.knockback.deg = moveDegrees;
			character.knockback.initialVelocity = initialVelocity;
			character.knockback.duration = duration;
			character.knockback.decelPower = decelPower;
			character.knockback.frame = 0;
			character.knockback.active = true;
			character.knockback.originalDirFixed = character.isDirectionFixed();
		}
	});

	if (waitToComplete && characters.length > 0) {
		const hasActiveKnockback = characters.some(char => char.knockback && char.knockback.active);
		if (hasActiveKnockback) {
			this.setWaitMode('knockback');
			this.knockbackWait = characters;
		}
	}
});

const _Game_Character_update_knockback = Game_Character.prototype.update;
Game_Character.prototype.update = function () {
	_Game_Character_update_knockback.call(this);
	this.updateLockIn();
	this.updateJumpPhysics();
	if (this.knockback && this.knockback.active && H_DotMoveSystem) {
		const data = this.knockback;
		const progress = data.frame / data.duration;
		const remainingRatio = (1 - progress);
		const dpf = data.initialVelocity * Math.pow(remainingRatio, data.decelPower);
		if (dpf > 0.003 && data.frame < data.duration) {
			const deg = new DotMoveSystem.Degree(data.deg);
			const moveProcess = new DotMoveSystem.CharacterDotMoveProcess(this);
			moveProcess.dotMoveByDeg(deg, dpf);
			data.frame++;
		} else {
			this.setDirectionFix(data.originalDirFixed);
			if (data.interpreter) {
				data.interpreter.setWaitMode('');
			}
			data.active = false;
			this.knockback = null;
		}
	}
};

//============================================================
// MINOR STUFF
//============================================================

if (disableAutoGameOver) {
	Game_Party.prototype.isAllDead = function () {
		return false;
	};
}

if (soloPlayerMenu) {
	const H_Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
	Scene_Item.prototype.onItemOk = function () {
		H_Scene_Item_onItemOk.call(this);
		if ($gameParty.battleMembers().length >= 1) {
			this.onActorOk();
			this.onActorCancel();
		}
	};

	const H_Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
	Scene_Skill.prototype.onItemOk = function () {
		H_Scene_Skill_onItemOk.call(this);
		if ($gameParty.battleMembers().length >= 1) {
			this.onActorOk();
			this.onActorCancel();
		}
	};
}

PluginManager.registerCommand(HpluginName, "DynamicPassable", function (args) {
	const target = args.target || 'this';
	const status = args.status || 'Normal';
	const targetEvents = findTargets(target, this);

	if (!$gameSystem._playerPassThroughEvents) {
		$gameSystem._playerPassThroughEvents = [];
	}

	targetEvents.forEach(event => {
		const eventId = event.eventId();
		if (status === 'Passable') {
			if (!$gameMap._passEvents) {
				$gameMap.initializePassCache();
			}
			$gameMap.addPassEvent(eventId, event.x, event.y);
			if (!$gameSystem._playerPassThroughEvents.includes(eventId)) {
				$gameSystem._playerPassThroughEvents.push(eventId);
			}
		} else {
			if ($gameMap._passEvents) {
				$gameMap.removePassEvent(eventId, event.x, event.y);
			}
			const index = $gameSystem._playerPassThroughEvents.indexOf(eventId);
			if (index > -1) {
				$gameSystem._playerPassThroughEvents.splice(index, 1);
			}
		}
	});
});

if (H_DotMoveSystem) {
	Game_Player.prototype.checkCollisionTargetEvent = function (x, y, d, event) {
		if ($gameSystem._playerPassThroughEvents &&
			$gameSystem._playerPassThroughEvents.includes(event.eventId())) {
			return false;
		}
		if (!event.isNormalPriority()) {
			return false;
		}
		if (this.isThrough() || event.isThrough()) {
			return false;
		}
		return true;
	};
}

PluginManager.registerCommand(HpluginName, "StopQueue", function () {
	const event = this.character(0);
	if (event && event instanceof Game_Event) {
		event.stopQueue();
		if (this._eventId > 0) {
			this.waitMode = '';
		}
		event._waitCount = 0;
	}
});

Game_Event.prototype.stopQueue = function () {
	this._moveRouteForcing = false;
	this._moveRoute = null;
	this._moveRouteIndex = 0;
	this.clearMovementWait();
};

Game_Event.prototype.clearMovementWait = function () {
	this._waitCount = 0;
	this._moving = false;
	this.resetStopCount();
	this.straighten();
};

PluginManager.registerCommand(HpluginName, "CycleWeapon", function (args) {
	const direction = String(args.direction || "next");
	const slotId = Number(args.slot || 0);
	const leader = $gameParty.leader();

	const items = $gameParty.allItems().filter(item => 
		leader.canEquip(item) && leader.equipSlots()[slotId] === item.etypeId
	);

	if (items.length === 0) return;
	
	const currentItem = leader.equips()[slotId];

	let nextItem;
	if (!currentItem) {
		nextItem = items[0];
	} else {
		const currentIndex = items.indexOf(currentItem);
		if (currentIndex === -1) {
			nextItem = items[0];
		} else {
			if (direction === "next") {
				nextItem = items[(currentIndex + 1) % items.length];
			} else {
				nextItem = items[(currentIndex - 1 + items.length) % items.length];
			}
		}
	}

	if (nextItem) {
		leader.changeEquip(slotId, nextItem);
	}
});

PluginManager.registerCommand(HpluginName, "CameraUpdate", function (args) {
	const pauseCamera = args.pauseCamera === 'true';

	if (pauseCamera) {
		$gameMap.scrollDown = function (distance) { return; };
		$gameMap.scrollLeft = function (distance) { return; };
		$gameMap.scrollRight = function (distance) { return; };
		$gameMap.scrollUp = function (distance) { return; };
	} else {
		$gameMap.scrollDown = Game_Map.prototype.scrollDown;
		$gameMap.scrollLeft = Game_Map.prototype.scrollLeft;
		$gameMap.scrollRight = Game_Map.prototype.scrollRight;
		$gameMap.scrollUp = Game_Map.prototype.scrollUp;

		const targetX = $gamePlayer.x - $gameMap.screenTileX() / 2;
		const targetY = $gamePlayer.y - $gameMap.screenTileY() / 2;
		const duration = 15;
		const dx = (targetX - $gameMap._displayX) / duration;
		const dy = (targetY - $gameMap._displayY) / duration;

		let count = 0;
		const smoothScroll = () => {
			if (count < duration) {
				$gameMap.setDisplayPos($gameMap._displayX + dx, $gameMap._displayY + dy);
				count++;
				requestAnimationFrame(smoothScroll);
			}
		};
		smoothScroll();
	}
});

if (removeFormation) {
	Window_MenuCommand.prototype.addFormationCommand = function () {
	};
}

const dashSpeedMultiplier = Number(Hparameters.dashSpeedMultiplier || 3.0);
const _Game_CharacterBase_realMoveSpeed = Game_CharacterBase.prototype.realMoveSpeed;
Game_CharacterBase.prototype.realMoveSpeed = function () {
	const originalSpeed = _Game_CharacterBase_realMoveSpeed.call(this);

	if (this instanceof Game_Player && this.isDashing()) {
		return originalSpeed * dashSpeedMultiplier / 2;
	}

	return originalSpeed;
};

Sprite_Character.prototype.showEventIdAndName = function () {
	if (this._debugText) {
		if (this._debugText.parent) {
			this._debugText.parent.removeChild(this._debugText);
		}
		this._debugText = null;
	}
	if (showHitboxes && this._character instanceof Game_Event) {
		if (!this._debugText) {
			const event = this._character;
			const eventId = event.eventId();
			const eventName = event.event().name;
			const labelText = `#${eventId}: ${eventName}`;

			const labelBitmap = new Bitmap(200, 20);
			labelBitmap.fontSize = 14;
			labelBitmap.textColor = '#FFFFFF';
			labelBitmap.outlineWidth = 3;
			labelBitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';
			labelBitmap.drawText(labelText, 0, 0, 200, 20, 'center');

			this._debugText = new Sprite(labelBitmap);
			this._debugText.anchor.x = 0.5;
			this._debugText.y = -this.patternHeight() - 12;
			this._debugText.z = 9999;
			this.addChild(this._debugText);
		}
	}
};

//============================================================
// SOUND DETECTION
//============================================================

window.activeSounds = new Map();

const H_AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function (se) {
	if (se) {
		const eventId = $gameMap._interpreter ? $gameMap._interpreter._eventId : null;
		if (eventId) {
			window.activeSounds.set(eventId, {
				volume: se.volume,
				timestamp: Graphics.frameCount
			});
		}
	}
	H_AudioManager_playSe.call(this, se);
};

const cleanupOldSounds = () => {
	const currentFrame = Graphics.frameCount;
	for (const [eventId, soundData] of window.activeSounds.entries()) {
		if (currentFrame - soundData.timestamp > 2) {
			window.activeSounds.delete(eventId);
		}
	}
};

window.checkSound = function (listenerEventId, volumeThreshold, maxRange) {
	cleanupOldSounds();
	const listenerEvent = $gameMap.event(listenerEventId);
	if (!listenerEvent) return false;
	const listenerScreenX = listenerEvent.screenX();
	const listenerScreenY = listenerEvent.screenY() - $gameMap.tileHeight() / 2;
	const maxRangeInPixels = maxRange * $gameMap.tileWidth();

	if (showHitboxes) {
		listenerEvent._lastSoundCheck = {
			centerX: listenerScreenX,
			centerY: listenerScreenY,
			radius: maxRangeInPixels,
			threshold: volumeThreshold,
			detectedSounds: []
		};
	}

	let soundDetected = false;

	for (const [sourceEventId, soundData] of window.activeSounds.entries()) {
		if (soundData.volume < volumeThreshold) continue;

		const sourceEvent = $gameMap.event(sourceEventId);
		if (!sourceEvent) continue;

		const sourceScreenX = sourceEvent.screenX();
		const sourceScreenY = sourceEvent.screenY() - $gameMap.tileHeight() / 2;

		const dx = sourceScreenX - listenerScreenX;
		const dy = sourceScreenY - listenerScreenY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= maxRangeInPixels) {
			soundDetected = true;

			if (showHitboxes && listenerEvent._lastSoundCheck) {
				listenerEvent._lastSoundCheck.detectedSounds.push({
					x: sourceScreenX,
					y: sourceScreenY,
					volume: soundData.volume
				});
			}
		}
	}

	return soundDetected;
};

//============================================================
// EVENT EFFECTS
//============================================================

class Sprite_EventEffect extends Sprite {
	constructor(character, effect, duration, intensity, origin = 'center') {
		super();
		this._character = character;
		this._effectType = effect;
		this._duration = duration;
		this._maxDuration = duration;
		this._intensity = intensity;
		this._origin = origin;
		this._targetSprite = null;
		this._originalValues = {};
		this._rotationSprite = null;
		this._bounceSprite = null;
		this._shakeSprite = null;
		this._isSetupComplete = false;
		this.setup();
	}

	setup() {
		if (!(SceneManager._scene instanceof Scene_Map)) return;
		const spriteset = SceneManager._scene._spriteset;
		this._targetSprite = spriteset._characterSprites.find(
			sprite => sprite._character === this._character
		);

		if (!this._targetSprite) {
			this._needsRetrySetup = true;
			return;
		}

		this._isSetupComplete = true;

		this._originalValues = {
			visible: this._targetSprite.visible,
			opacity: this._targetSprite.opacity,
			x: this._targetSprite.x,
			y: this._targetSprite.y,
			scaleX: this._targetSprite.scale.x,
			scaleY: this._targetSprite.scale.y
		};

		if (this._effectType === 'spin') {
			this.setupSpinEffect();
		}
	}

	setupSpinEffect() {
		if (!this._targetSprite || !this._targetSprite.bitmap) {
			this._needsRetrySetup = true;
			return;
		}
		this._targetSprite.opacity = 0;
		this._rotationSprite = new Sprite();
		this._rotationSprite.bitmap = this._targetSprite.bitmap;

		this._rotationSprite.anchor.x = 0.5;
		switch (this._origin) {
			case 'top':
				this._rotationSprite.anchor.y = 0;
				break;
			case 'bottom':
				this._rotationSprite.anchor.y = 1;
				break;
			default:
				this._rotationSprite.anchor.y = 0.5;
		}

		this.updateFrame();
		this.updatePosition();

		const tilemap = SceneManager._scene._spriteset._tilemap;
		tilemap.addChild(this._rotationSprite);
		this.sortRotationSprite();

		this._rotationRate = 360 / this._maxDuration * this._intensity / 5;
		this._currentRotation = 0;
	}


	updateFrame(sprite) {
		if (!sprite || !this._targetSprite) return;

		const pw = this._targetSprite.patternWidth();
		const ph = this._targetSprite.patternHeight();
		const sx = this._targetSprite.characterBlockX() + this._targetSprite.characterPatternX() * pw;
		const sy = this._targetSprite.characterBlockY() + this._targetSprite.characterPatternY() * ph;

		sprite.setFrame(sx, sy, pw, ph);
	}

	updatePosition(sprite) {
		if (!sprite || !this._targetSprite) return;
		sprite.x = this._targetSprite.x;
		if (this._origin === 'center') {
			sprite.y = this._targetSprite.y - this._targetSprite.patternHeight() / 2;
		} else if (this._origin === 'top') {
			sprite.y = this._targetSprite.y - this._targetSprite.patternHeight();
		} else if (this._origin === 'bottom') {
			sprite.y = this._targetSprite.y;
		}
	}

	update() {
		if (!this._targetSprite) return false;
		if (this._duration > 0) {
			this._duration--;
			const progress = (this._maxDuration - this._duration) / this._maxDuration;

			switch (this._effectType) {
				case 'spin':
					this.updateSpinEffect();
					break;
				case 'scale':
					this.updateScaleEffect(progress);
					break;
				case 'shake':
					this.updateShakeEffect(progress);
					break;
				case 'bounce':
					this.updateBounceEffect(progress);
					break;
				case 'flash':
					this.updateFlashEffect(progress);
					break;
				case 'fade':
					this.updateFadeEffect(progress);
					break;
			}
			return true;
		} else {
			this.cleanupEffect();
			return false;
		}
	}

	updateSpinEffect() {
		if (!this._rotationSprite) return;
		this._targetSprite.opacity = 0;
		this.updateFrame(this._rotationSprite);
		this.updatePosition(this._rotationSprite);
		this.sortRotationSprite();

		this._currentRotation += this._rotationRate;
		this._rotationSprite.rotation = (this._currentRotation * Math.PI) / 180;
	}

	sortRotationSprite() {
		if (!this._rotationSprite || !this._rotationSprite.parent) return;

		const tilemap = this._rotationSprite.parent;
		const children = tilemap.children;
		const characterY = this._character.screenY();

		const rotationIndex = children.indexOf(this._rotationSprite);
		if (rotationIndex !== -1) {
			children.splice(rotationIndex, 1);
		}

		let insertIndex = children.length;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child._character && child._character.screenY() > characterY) {
				insertIndex = i;
				break;
			}
		}

		children.splice(insertIndex, 0, this._rotationSprite);
	}

	updateShakeEffect(progress) {
		if (!this._targetSprite) return;
		const remaining = 1 - progress;
		const amplitude = this._intensity * remaining;
		const shake = Math.sin(progress * 20) * amplitude;
		this._character._shakeOffsetX = shake;
		this._character._shakeOffsetY = 0;
	}

	updateBounceEffect(progress) {
		if (!this._targetSprite) return;
		const bounce = Math.abs(Math.sin(progress * Math.PI * 2)) * this._intensity;
		this._character._bounceOffsetY = -bounce;
	}

	updateFlashEffect(progress) {
		const flashIntensity = Math.sin(progress * Math.PI * 5) * (1 - progress) * 255;
		this._targetSprite.setBlendColor([255, 255, 255, flashIntensity]);
	}

	updateFadeEffect(progress) {
		let opacity = this._originalValues.opacity;

		if (progress < 0.5) {
			opacity = this._originalValues.opacity * (1 - progress * 2);
		} else {
			opacity = this._originalValues.opacity * ((progress - 0.5) * 2);
		}

		this._character.setOpacity(Math.round(opacity));
	}

	updateScaleFrame() {
		if (!this._scaleSprite || !this._targetSprite) return;
		const pw = this._targetSprite.patternWidth();
		const ph = this._targetSprite.patternHeight();
		const sx = this._targetSprite.characterBlockX() + this._targetSprite.characterPatternX() * pw;
		const sy = this._targetSprite.characterBlockY() + this._targetSprite.characterPatternY() * ph;
		this._scaleSprite.setFrame(sx, sy, pw, ph);
	}

	updateScalePosition() {
		if (!this._scaleSprite || !this._targetSprite) return;
		this._scaleSprite.x = this._targetSprite.x;
		if (this._origin === 'center') {
			this._scaleSprite.y = this._targetSprite.y - this._targetSprite.patternHeight() / 2;
		} else if (this._origin === 'top') {
			this._scaleSprite.y = this._targetSprite.y - this._targetSprite.patternHeight();
		} else if (this._origin === 'bottom') {
			this._scaleSprite.y = this._targetSprite.y;
		}
	}

	updateScaleEffect(progress) {
		if (!this._targetSprite) return;
		const scale = 1 + Math.sin(progress * Math.PI) * (this._intensity / 10);
		this._targetSprite.scale.x = scale;
		this._targetSprite.scale.y = scale;
	}

	cleanupEffect() {
		if (!this._targetSprite) return;
		if (this._effectType === 'fade') {
			this._character.setOpacity(this._originalValues.opacity);
			return;
		}
		if (this._effectType === 'shake') {
			this._character._shakeOffsetX = 0;
			this._character._shakeOffsetY = 0;
			return;
		}
		if (this._effectType === 'bounce') {
			this._character._bounceOffsetY = 0;
			return;
		}
		if (this._effectType === 'scale') {
			this._targetSprite.scale.x = this._originalValues.scaleX;
			this._targetSprite.scale.y = this._originalValues.scaleY;
			return;
		}
		if (this._effectType === 'flash') {
			this._targetSprite.setBlendColor([0, 0, 0, 0]);
		}
		if (this._effectType === 'spin') {
			if (this._rotationSprite && this._rotationSprite.parent) {
				this._rotationSprite.parent.removeChild(this._rotationSprite);
			}
			this._targetSprite.opacity = this._originalValues.opacity;
			return;
		}
	}
}

Scene_Map.prototype.updateEventEffects = function () {
	const effectsToRemove = [];
	activeEffects.forEach((effectData, characterId) => {
		const isComplete = !effectData.effect.update();
		if (isComplete) {
			effectsToRemove.push(characterId);
			if (effectData.interpreter && effectData.wait) {
				effectData.interpreter.waitMode = '';
			}
		}
	});
	effectsToRemove.forEach(id => activeEffects.delete(id));
};

PluginManager.registerCommand(HpluginName, "EventEffect", function (args) {
	const target = args.target;
	const effect = args.effect;
	const duration = parseInt(args.duration) || 60;
	const intensity = parseInt(args.intensity) || 5;
	const wait = args.wait === 'true';
	const origin = args.origin || 'center';
	const targetCharacters = findTargets(target, this);

	targetCharacters.forEach(character => {
		const characterId = character === $gamePlayer ? 'player' : character.eventId();
		if (activeEffects.has(characterId)) {
			activeEffects.get(characterId).effect.cleanupEffect();
			activeEffects.delete(characterId);
		}
		const effectSprite = new Sprite_EventEffect(character, effect, duration, intensity, origin);
		activeEffects.set(characterId, {
			effect: effectSprite,
			interpreter: this,
			wait: wait
		});
	});
	if (wait && targetCharacters.length > 0) {
		this.waitMode = 'effect';
	}
});

const H_Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function () {
	if (this.waitMode === 'effect') {
		const stillWaiting = Array.from(activeEffects.values()).some(
			effectData => effectData.interpreter === this && effectData.wait
		);
		if (!stillWaiting) {
			this.waitMode = '';
			return false;
		}
		return true;
	}
	if (this.waitMode === 'knockback') {
		if (this.knockbackWait) {
			const stillActive = this.knockbackWait.some(char =>
				char.knockback && char.knockback.active
			);
			if (!stillActive) {
				this.waitMode = '';
				this.knockbackWait = null;
				return false;
			}
			return true;
		}
		this.waitMode = '';
		return false;
	}
	return H_Game_Interpreter_updateWaitMode.call(this);
};

Game_Event.prototype.setupCustomProperties = function () {
	this._customHue = Number(this.event().meta.hue) || 0;
};

Sprite_Character.prototype.updateCustomProperties = function () {
	if (this._character._customHue !== undefined) {
		this.setHue(this._character._customHue);
	}
};

Sprite_Character.prototype.setHue = function (hue) {
	hue = ((hue % 360) + 360) % 360;
	if (hue > 180) hue -= 360;
	this.setColorTone([0, 0, 0, 0]);
	this._hue = hue;
	this._updateColorFilter();
};

//============================================================
// DOT MOVE ADD ON
//============================================================

const H_Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function () {
	H_Game_CharacterBase_initMembers.call(this);
	this._rotation = 0;
	this._originPoint = "center";
	this._useCustomRotation = false;
	this.lockInEnabled = false;
	this.lockInNotetag = null;
	this.lockInRange = 0;
	this.lockInTarget = null;
	this.lockInPreviousTarget = null;
	this.lockInSwitchTarget = false;
	this.lockInRunFreely = true;
	this.lockInTargetImage = '';
	this.lockInSprite = null;
	this.lockIndicatorAnim = 'pulse';
	this.lockIndicatorPos = 'above';
	this.lockInMemoryEventId = null;
	this._hasRotationCapability = false;
};

Game_CharacterBase.prototype.rotation = function () {
	if (this._useCustomRotation) {
		return this._rotation;
	}
	return this._rotation;
};

Game_CharacterBase.prototype.setRotation = function (deg) {
	const hadRotationCapability = this._hasRotationCapability;
	this._rotation = deg;
	this._hasRotationCapability = true;
	if (!hadRotationCapability && this._hasRotationCapability) {
		this._realY -= 0.5;  // Move up half tile when first rotated to avoid some bug I forgot about
	}
};

Game_CharacterBase.prototype.originPoint = function () {
	return this._originPoint;
};

Game_CharacterBase.prototype.setOriginPoint = function (origin) {
	this._originPoint = origin;
};

Game_CharacterBase.prototype.setCustomRotation = function (enabled) {
	this._useCustomRotation = enabled;
};

const H_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function () {
	// Shake fix for diagonal movement
	if (fixShakyEvents && this._character && !this._character.customRotationPoint) {
		const tw = $gameMap.tileWidth();
		const th = $gameMap.tileHeight();
		const newX = this._character.scrolledX() * tw + tw / 2;
		const newY = this._character.scrolledY() * th + th - (this._character.isJumping() ? this._character.jumpHeight() : 0);

		if (!this._lastSpriteX || !this._lastSpriteY ||
			Math.abs(newX - this._lastSpriteX) >= 0.01 ||
			Math.abs(newY - this._lastSpriteY) >= 0.01) {

			this._lastSpriteX = newX;
			this._lastSpriteY = newY;
			this.x = Math.round(newX);
			this.y = Math.round(newY);
			this.z = this._character.screenZ();
		}
	} else {
		H_Sprite_Character_updatePosition.call(this);
	}

	if (this._character === $gamePlayer && (playerGraphicalOffsetX !== 0 || playerGraphicalOffsetY !== 0)) {
		this.x += playerGraphicalOffsetX;
		this.y += playerGraphicalOffsetY;
	}

	if (this._character instanceof Game_Event) {
		const event = this._character.event();
		if (event.meta && event.meta['sprite offset']) {
			if (event._cachedSpriteOffsetX === undefined) {
				const offsetString = event.meta['sprite offset'];
				const offsetMatch = offsetString.match(/(-?\d+)\s*,\s*(-?\d+)/);

				if (offsetMatch) {
					const offsetX = parseInt(offsetMatch[1]);
					const offsetY = parseInt(offsetMatch[2]);

					event._cachedSpriteOffsetX = !isNaN(offsetX) ? offsetX : 0;
					event._cachedSpriteOffsetY = !isNaN(offsetY) ? offsetY : 0;
				} else {
					event._cachedSpriteOffsetX = 0;
					event._cachedSpriteOffsetY = 0;
				}
			}

			this.x += event._cachedSpriteOffsetX;
			this.y += event._cachedSpriteOffsetY;
		}
	}

	if (this._character && this._character.customRotationPoint) {
		this.rotation = (this._character.rotation() * Math.PI) / 180;
		const origin = this._character.originPoint();

		if (this._character.cachedShouldCheckFlip === undefined) {
			this._character.cachedShouldCheckFlip = origin === 'player' ||
				(!isNaN(origin)) ||
				origin.startsWith('<') ||
				$gameMap.events().some(event => event.event().name === origin);
		}

		if (this._character.cachedShouldCheckFlip) {
			let currentAngle = this._character.rotation() % 360;
			if (currentAngle < 0) currentAngle += 360;

			this.scale.x = (currentAngle >= 179 && currentAngle <= 359) ? -1 : 1;
		}

		if (origin === 'player') {
			this.x = $gamePlayer.screenX();
			this.y = $gamePlayer.screenY() - 24;
		} else if (!isNaN(origin)) {
			const event = $gameMap.event(Number(origin));
			if (event) {
				this.x = event.screenX();
				this.y = event.screenY() - 24;
			}
		} else if (origin.startsWith('<')) {
			const nearest = findNearestTarget(origin, this._character.x, this._character.y);
			if (nearest) {
				this.x = nearest.screenX();
				this.y = nearest.screenY() - 24;
			}
		} else {
			if (this._character.cachedNamedEvent === undefined) {
				this._character.cachedNamedEvent = $gameMap.events().find(event => event.event().name === origin) || null;
			}
			const namedEvent = this._character.cachedNamedEvent;
			if (namedEvent) {
				this.x = namedEvent.screenX();
				this.y = namedEvent.screenY() - 24;
			} else {
				switch (origin) {
					case "top-left":
						this.anchor.x = 0;
						this.anchor.y = 0;
						break;
					case "top":
						this.anchor.x = 0.5;
						this.anchor.y = 0;
						break;
					case "top-right":
						this.anchor.x = 1;
						this.anchor.y = 0;
						break;
					case "right":
						this.anchor.x = 1;
						this.anchor.y = 0.5;
						break;
					case "bottom-right":
						this.anchor.x = 1;
						this.anchor.y = 1;
						break;
					case "bottom":
						this.anchor.x = 0.5;
						this.anchor.y = 1;
						break;
					case "bottom-left":
						this.anchor.x = 0;
						this.anchor.y = 1;
						break;
					case "left":
						this.anchor.x = 0;
						this.anchor.y = 0.5;
						break;
					case "center":
					default:
						this.anchor.x = 0.5;
						this.anchor.y = 0.5;
						break;
				}
			}
		}
	} else {
		this.rotation = 0;
	}

	if (this._character._shakeOffsetX !== undefined) {
		this.x += this._character._shakeOffsetX;
	}
	if (this._character._shakeOffsetY !== undefined) {
		this.y += this._character._shakeOffsetY;
	}
	if (this._character._bounceOffsetY !== undefined) {
		this.y += this._character._bounceOffsetY;
	}
};

if (H_DotMoveSystem) {
	//Game_CharacterBase.prototype.collisionRect = function () {
	//	const width = this.width();
	//	const height = this.height();
	//	const offsetX = (width - 1) / 2;
	//	const offsetY = (height - 1) / 2;
	//	return new DotMoveSystem.DotMoveRectangle(
	//		this._realX - offsetX,
	//		this._realY - offsetY,
	//		width,
	//		height
	//	);
	//};
	DotMoveSystem.DotMoveUtils.direction2Axis = function (direction) {
		if (direction === 4 || direction === 6) {
			return "x";
		}
		else if (direction === 8 || direction === 2) {
			return "y";
		}
		else if (direction === 9 || direction === 3 || direction === 7 || direction === 1) {
			return "y";
		}
		else {
			throw new Error(`${direction} is not found`);
		}
	};

	DotMoveSystem.CharacterMover.prototype.moveToTargetSingleStep = function (targetPoint) {
		const fromPoint = this._character.positionPoint();
		const deg = fromPoint.calcDeg(targetPoint);
		const dir = deg.toDirection4(this._character.direction());
		this.setDirection(dir);

		// Single step movement (no continuous movement)
		const moved = this.createDotMoveProcess().dotMoveByDeg(deg, this._character.distancePerFrame());
		this._character.moveCallback(moved, this._character.distancePerFrame());
	};

	// Default MoveToPlayer like Dot Move which use continous movement
	DotMoveSystem.CharacterMover.prototype.moveToTargetContinous = function (targetPoint) {
		const fromPoint = this._character.positionPoint();
		const deg = fromPoint.calcDeg(targetPoint);
		const dir = deg.toDirection4(this._character.direction());
		this.setDirection(dir);
		const targetFar = fromPoint.calcFar(targetPoint);
		this.startContinuousMove(targetFar, deg);
	};

	Game_Character.prototype.moveToTargetSingleStep = function (x, y) {
		this.mover().moveToTargetSingleStep(new DotMoveSystem.DotMovePoint(x, y));
	};

	Game_Character.prototype.moveToTargetContinous = function (x, y) {
		this.mover().moveToTargetContinous(new DotMoveSystem.DotMovePoint(x, y));
	};

	// Comment support <collisionRect: width, height, offset x, offset y>
	DotMoveSystem.EventDotMoveTempData.prototype.initialize = function (character) {
		DotMoveSystem.CharacterDotMoveTempData.prototype.initialize.call(this, character);
		const values = character.getAnnotationValues(0);

		if (values.collisionRect != null) {
			const parts = values.collisionRect.split(',').map(part => parseFloat(part.trim()));
			if (parts.length >= 2) {
				this._width = parts[0];
				this._height = parts[1];
				this._offsetX = parts.length >= 3 ? parts[2] : 0;
				this._offsetY = parts.length >= 4 ? parts[3] : 0;
			}
		} else {
			this._width = values.width != null ? parseFloat(values.width) : 1;
			this._height = values.height != null ? parseFloat(values.height) : 1;
			this._offsetX = values.offsetX != null ? parseFloat(values.offsetX) : 0;
			this._offsetY = values.offsetY != null ? parseFloat(values.offsetY) : 0;
		}

		this._widthArea = values.widthArea != null ? parseFloat(values.widthArea) : 0.5;
		this._heightArea = values.heightArea != null ? parseFloat(values.heightArea) : 0.5;
		this._slideLengthX = values.slideLengthX != null ? parseFloat(values.slideLengthX) : 0.5;
		this._slideLengthY = values.slideLengthY != null ? parseFloat(values.slideLengthY) : 0.5;
		this._eventTouchToPlayer = false;
	};

	Game_Map.prototype.allCharacters = function () {
		return new Set([$gamePlayer, ...this.events(), ...$gamePlayer.followers().data()]);
	};

	Game_Player.prototype.checkCollisionTargetCharacter = function (x, y, d, character) {
		if (character instanceof Game_Event) {
			return this.checkCollisionTargetEvent(x, y, d, character);
		}
		return false;
	};

	Game_CharacterBase.prototype.updateMapCharactersCache = function () {
		if (this instanceof Game_Vehicle) {
			return;
		}
		this.dotMoveTempData().mapCharacterCacheUpdater.updateMapCharactersCache();
	};

	// Fix issue player can trigger both event if they're standing next to each other
	Game_Player.prototype.startMapEventFront = function (x, y, d, triggers, normal, isTouch) {
		if ($gameMap.isEventRunning())
			return;
		if (isTouch && (this.isThrough() || this.isDebugThrough()))
			return;
		const dpf = this.distancePerFrame();
		// Make player only trigger the closest event to him
		const results = this.mover().checkHitCharactersStepDir(x, y, d, Game_Event);

		if (results.length > 1) {
			results.sort((a, b) => {
				const distA = this.calcFar(a.targetObject);
				const distB = this.calcFar(b.targetObject);
				return distA - distB;
			});
		}

		for (const result of results) {
			const event = result.targetObject;
			const axis = DotMoveSystem.DotMoveUtils.direction2Axis(d);
			const otherAxis = axis === "y" ? "x" : "y";

			const otherAxisLen = isTouch ? dpf * 0.75 : 0;
			if (result.getCollisionLength(otherAxis) > 0 && result.getCollisionLength(axis) >= otherAxisLen) {
				if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
					if (isTouch && event.isThrough())
						continue;
					event.start();
					break;
				}
			}
		}
	};
	Game_Player.prototype.startMapEvent = function (x, y, triggers, normal) {
		if ($gameMap.isEventRunning())
			return;
		const tempData = this.dotMoveTempData();
		const hasDecideTrigger = triggers.includes(0);
		for (const result of this.mover().checkHitCharacters(x, y, this._direction, Game_Event)) {
			const event = result.targetObject;
			const eventId = event.eventId();
			if (!hasDecideTrigger) {
				if (tempData.collideTriggerEventIds.includes(eventId))
					continue;
			}
			if (result.collisionLengthX() > 0 && result.collisionLengthY() > 0) {
				if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
					if (!hasDecideTrigger) {
						if (!tempData.collideTriggerEventIds.includes(eventId)) {
							tempData.collideTriggerEventIds.push(eventId);
						}
					}
					event.start();
					break;
				}
			}
		}
	};

	// Fix issue related to if player and event size too small (below 0.5) then trigger won't happen. Basically, removing the threshold in Dot Move
	//Game_Player.prototype.startMapEventFront = function (x, y, d, triggers, normal, isTouch) {
	//	if ($gameMap.isEventRunning())
	//		return;
	//	if (isTouch && (this.isThrough() || this.isDebugThrough()))
	//		return;
	//	const dpf = this.distancePerFrame();
	//	for (const result of this.mover().checkHitCharactersStepDir(x, y, d, Game_Event)) {
	//		const event = result.targetObject;
	//		const axis = DotMoveSystem.DotMoveUtils.direction2Axis(d);
	//		const otherAxis = axis === "y" ? "x" : "y";

	//		const otherAxisLen = isTouch ? dpf * 0.75 : 0;
	//		if (result.getCollisionLength(otherAxis) > 0 && result.getCollisionLength(axis) >= otherAxisLen) {
	//			if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
	//				if (isTouch && event.isThrough())
	//					continue;
	//				event.start();
	//			}
	//		}
	//	}
	//};
	//Game_Player.prototype.startMapEvent = function (x, y, triggers, normal) {
	//	if ($gameMap.isEventRunning())
	//		return;
	//	const tempData = this.dotMoveTempData();
	//	const hasDecideTrigger = triggers.includes(0);
	//	for (const result of this.mover().checkHitCharacters(x, y, this._direction, Game_Event)) {
	//		const event = result.targetObject;
	//		const eventId = event.eventId();
	//		if (!hasDecideTrigger) {
	//			if (tempData.collideTriggerEventIds.includes(eventId))
	//				continue;
	//		}
	//		if (result.collisionLengthX() > 0 && result.collisionLengthY() > 0) {
	//			if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
	//				if (!hasDecideTrigger) {
	//					if (!tempData.collideTriggerEventIds.includes(eventId)) {
	//						tempData.collideTriggerEventIds.push(eventId);
	//					}
	//				}
	//				event.start();
	//			}
	//		}
	//	}
	//};
};

//============================================================
// PLAYER MOVEMENT (BLOCK OR UNBLOCK)
//============================================================

let playerMovementDisabled = false;
const movementKeys = ["left", "up", "right", "down", "downLeft", "downRight", "upLeft", "upRight"];

const H_Input_isPressed = Input.isPressed;
Input.isPressed = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isPressed.call(this, keyName);
};

const H_Input_isRepeated = Input.isRepeated;
Input.isRepeated = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isRepeated.call(this, keyName);
};

const H_Input_isLongPressed = Input.isLongPressed;
Input.isLongPressed = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isLongPressed.call(this, keyName);
};

const H_Input_pollGamepads = Input._pollGamepads;
Input._pollGamepads = function () {
	if (playerMovementDisabled) return;
	H_Input_pollGamepads.call(this);
};

PluginManager.registerCommand(HpluginName, "ControlPlayerMovement", args => {
	playerMovementDisabled = !(args.allowMovement === 'true');
	if (playerMovementDisabled) {
		Input._currentState = {};
		if (typeof AnalogStickExPluginName !== 'undefined' && Input._analogStickState) {
			Input._analogStickState = {};
		}
	}
});
//============================================================
// PASSABLE TILES AND EVENTS
//============================================================

let passageCache = {};

function generateCacheKey(x, y, bit) {
	return `${x},${y},${bit}`;
}

Game_Map.prototype.initializePassCache = function () {
	if (!(this._passEvents instanceof Set)) {
		this._passEvents = new Set(Array.isArray(this._passEvents) ? this._passEvents : []);
	}
	if (!(this._allowRegions instanceof Set)) {
		this._allowRegions = new Set(Array.isArray(this._allowRegions) ? this._allowRegions : []);
	}
	if (!(this._blockRegions instanceof Set)) {
		this._blockRegions = new Set(Array.isArray(this._blockRegions) ? this._blockRegions : []);
	}
	if (!(this._passEventPositions instanceof Set)) {
		this._passEventPositions = new Set(Array.isArray(this._passEventPositions) ? this._passEventPositions : []);
	}

	if (allowRegionID > 0) { this._allowRegions.add(allowRegionID); }
	if (blockRegionID > 0) { this._blockRegions.add(blockRegionID); }

	this.events().forEach(event => {
		if (event && event.event() && event.event().note && event.event().note.includes('<pass>')) {
			this._passEvents.add(event.eventId());
			this._passEventPositions.add(`${event.x},${event.y}`);
		}
	});
};

Game_Map.prototype.hasPassEventAt = function (x, y) {
	if (!this._passEventPositions?.has) {
		this.buildPassEventPositions();
	}
	if (passableSwitch > 0 && !$gameSwitches.value(passableSwitch)) {
		return false;
	}
	return this._passEventPositions.has(`${x},${y}`);
};

Game_Map.prototype.buildPassEventPositions = function () {
	this._passEventPositions = new Set();

	if (!this._passEvents) {
		this.initializePassCache();
	}

	for (const eventId of this._passEvents) {
		const event = this.event(eventId);
		if (event && event._pageIndex >= 0) {
			this._passEventPositions.add(`${event.x},${event.y}`);
		}
	}
};

Game_Map.prototype.clearPassageCacheForPosition = function (x, y) {
	for (let bit = 1; bit <= 15; bit++) {
		const cacheKey = generateCacheKey(x, y, bit);
		delete passageCache[cacheKey];
	}
};

Game_Map.prototype.addPassEvent = function (eventId, x, y) {
	if (!this._passEvents) {
		this.initializePassCache();
	}
	this._passEvents.add(eventId);
	if (!this._passEventPositions) {
		this._passEventPositions = new Set();
	}
	this._passEventPositions.add(`${x},${y}`);
	this.clearPassageCacheForPosition(x, y);
};

Game_Map.prototype.removePassEvent = function (eventId, x, y) {
	if (this._passEvents) {
		this._passEvents.delete(eventId);
	}
	if (this._passEventPositions) {
		this._passEventPositions.delete(`${x},${y}`);
	}
	this.clearPassageCacheForPosition(x, y);
};

const H_Game_Event_setPosition = Game_Event.prototype.setPosition;
Game_Event.prototype.setPosition = function (x, y) {
	const passOldX = this._x;
	const passOldY = this._y;
	H_Game_Event_setPosition.call(this, x, y);
	if ($gameMap._passEvents && $gameMap._passEvents.has(this._eventId)) {
		if ($gameMap._passEventPositions) {
			$gameMap._passEventPositions.delete(`${passOldX},${passOldY}`);
			$gameMap._passEventPositions.add(`${x},${y}`);
		}
		$gameMap.clearPassageCacheForPosition(passOldX, passOldY);
		$gameMap.clearPassageCacheForPosition(x, y);
	}
};

const allowRegionID = Number(Hparameters['Allow Region ID'] || 0);
Game_Map.prototype.checkPassage = function (x, y, bit) {
	const cacheKey = generateCacheKey(x, y, bit);

	if (passageCache.hasOwnProperty(cacheKey)) {
		return passageCache[cacheKey];
	}

	if (this._allowRegions?.has(this.regionId(x, y))) {
		passageCache[cacheKey] = true;
		return true;
	}

	if (this.hasPassEventAt(x, y)) {
		passageCache[cacheKey] = true;
		return true;
	}

	const flags = this.tilesetFlags();
	const tiles = this.allTiles(x, y);

	if (passageType === 'action') {
		for (const tileId of tiles) {
			const flag = flags[tileId];
			if ((flag & 0x10) !== 0) continue;

			if ((flag & bit) === bit) {
				passageCache[cacheKey] = false;
				return false;
			}
		}

		passageCache[cacheKey] = true;
		return true;
	} else {
		for (const tileId of tiles) {
			const flag = flags[tileId];
			if ((flag & 0x10) !== 0) continue;

			if ((flag & bit) === 0) {
				passageCache[cacheKey] = true;
				return true;
			}
			if ((flag & bit) === bit) {
				passageCache[cacheKey] = false;
				return false;
			}
		}

		passageCache[cacheKey] = true;
		return true;
	}
};

const blockRegionID = Number(Hparameters['Block Region ID'] || 0);
const buildingWallBlock = (Hparameters['Building & Wall Block'] || 'false') === 'true';
const blockTarget = String(Hparameters['blockTarget'] || 'both');

const H_Game_Map_isPassable = Game_Map.prototype.isPassable;
Game_Map.prototype.isPassable = function (x, y, d) {
	if (!this._allowRegions) this.initializePassCache();
	if (this._allowRegions && this._allowRegions.has(this.regionId(x, y))) {
		return true;
	}
	if (this.hasPassEventAt(x, y)) {
		return true;
	}
	const isPlayer = this._interpreter ? this._interpreter._eventId === 0 : false;
	if (shouldBlockPassage(x, y, isPlayer)) {
		return false;
	}
	return H_Game_Map_isPassable.call(this, x, y, d);
};

function shouldBlockPassage(x, y, isPlayer) {
	if ((isPlayer && blockTarget === 'events') || (!isPlayer && blockTarget === 'player')) {
		return false;
	}

	if (blockRegionID > 0 && $gameMap.regionId(x, y) === blockRegionID) {
		return true;
	}
	if (buildingWallBlock) {
		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		for (const tileId of tiles) {
			if ((tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)) {
				if (flags[tileId] & 0x0f) {
					return true;
				}
			}
		}
	}
	return false;
}

const H_Game_CharacterBase_isThrough = Game_CharacterBase.prototype.isThrough;
Game_CharacterBase.prototype.isThrough = function () {
	const isNormallyThrough = H_Game_CharacterBase_isThrough.call(this);
	if (this instanceof Game_Event && this._through) {
		return true;
	}
	if (isNormallyThrough && (blockRegionID > 0 || buildingWallBlock)) {
		const isPlayer = this === $gamePlayer;
		if ((isPlayer && blockTarget === 'events') || (!isPlayer && blockTarget === 'player')) {
			return isNormallyThrough;
		}
		const d = this.direction();
		const x2 = $gameMap.roundXWithDirection(this.x, d);
		const y2 = $gameMap.roundYWithDirection(this.y, d);
		if (shouldBlockPassage(x2, y2, isPlayer)) {
			return false;
		}
	}
	return isNormallyThrough;
};

if (H_DotMoveSystem) {
	const H_Game_CharacterBase_isMapPassable = Game_CharacterBase.prototype.isMapPassable;
	Game_CharacterBase.prototype.isMapPassable = function (x, y, d) {
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);

		if ($gameMap._allowRegions && $gameMap._allowRegions.has($gameMap.regionId(x2, y2))) {
			return true;
		}

		if ($gameMap.hasPassEventAt(x2, y2)) {
			return true;
		}

		const isPlayer = this === $gamePlayer;
		if (shouldBlockPassage(x2, y2, isPlayer)) {
			return false;
		}

		return H_Game_CharacterBase_isMapPassable.call(this, x, y, d);
	};

	// This causes performance drop
	const H_CharacterCollisionChecker_checkPassMass = DotMoveSystem.CharacterCollisionChecker.prototype.checkPassMass;
	DotMoveSystem.CharacterCollisionChecker.prototype.checkPassMass = function (ix, iy, d) {
		if ($gameMap._allowRegions && $gameMap._allowRegions.has($gameMap.regionId(ix, iy))) {
			return true;
		}

		if ($gameMap.hasPassEventAt(ix, iy)) {
			return true;
		}

		const isPlayer = this._character === $gamePlayer;
		if (shouldBlockPassage(ix, iy, isPlayer)) {
			return false;
		}

		return H_CharacterCollisionChecker_checkPassMass.call(this, ix, iy, d);
	};
}

Game_Map.prototype.clearPassageCache = function () {
	passageCache = {};
};

//============================================================
// EVENT FRAME ANIMATION SPEED
//============================================================

const _Game_Event_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function () {
	_Game_Event_initMembers.call(this);
	this._frameASpeed = null;
	this.isPlayerChild = false;
	this.childOffsetX = 0;
	this.childOffsetY = 0;
};

Game_Event.prototype.setupFrameSpeed = function () {
	if (this.page()) {
		const frameSpeed = this.extractFrameSpeedFromComment();
		this._frameASpeed = frameSpeed !== null ? frameSpeed : null;
	}
};

Game_Event.prototype.extractFrameSpeedFromComment = function () {
	const list = this.list();
	for (const command of list) {
		if (command.code === 108 || command.code === 408) {
			const regex = /<stepping speed:\s*(\d+)>/i;
			const match = regex.exec(command.parameters[0]);
			if (match) {
				return parseInt(match[1]);
			}
		}
	}
	return null;
};

Game_Event.prototype.customAnimationWait = function () {
	if (this._frameASpeed !== null) {
		return this._frameASpeed;
	} else {
		return null;
	}
};

const _Sprite_Character_updatePattern = Sprite_Character.prototype.updatePattern;
Sprite_Character.prototype.updatePattern = function () {
	if (this._character instanceof Game_Event && this._character.customAnimationWait() !== null) {
		const frameSpeed = this._character.customAnimationWait();
		this._patternCounter = (this._patternCounter + 1) % frameSpeed;
		if (this._patternCounter === 0) {
			this._character.setPattern((this._character.pattern() + 1) % this._character.maxPattern());
		}
	} else {
		_Sprite_Character_updatePattern.call(this);
	}
};

const _Game_CharacterBase_animationWait = Game_CharacterBase.prototype.animationWait;
Game_CharacterBase.prototype.animationWait = function () {
	if (this instanceof Game_Event && this.customAnimationWait() !== null) {
		return this.customAnimationWait();
	} else {
		return _Game_CharacterBase_animationWait.call(this);
	}
};

//=============================================================================
// Clickable Events with Outline Effect
//=============================================================================

window._eventsWithOutline = new Map();

const H_Sprite_Character_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function (character) {
	H_Sprite_Character_initialize.call(this, character);
	this._outlineSprite = new Sprite();
	this._outlineSprite.visible = false;
	this._outlineSprite.alpha = 0.8;
	if (this._character instanceof Game_Event) {
		this.updateCustomProperties();
	}
	this.addChild(this._outlineSprite);
};

Sprite_Character.prototype.createEventOutline = function () {
	if (!this.bitmap?.isReady()) return;

	const pw = this.patternWidth();
	const ph = this.patternHeight();
	const sx = this.characterBlockX() + this.characterPatternX() * pw;
	const sy = this.characterBlockY() + this.characterPatternY() * ph;

	const thickness = 2;
	const padding = thickness * 2;
	const tempCanvas = document.createElement('canvas');
	const tempCtx = tempCanvas.getContext('2d');
	[tempCanvas.width, tempCanvas.height] = [pw + padding, ph + padding];

	tempCtx.drawImage(this.bitmap._canvas || this.bitmap._image,
		sx, sy, pw, ph,
		padding / 2, padding / 2, pw, ph);

	const pixels = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;
	const outlineData = tempCtx.createImageData(tempCanvas.width, tempCanvas.height);

	for (let y = 0; y < tempCanvas.height; y++) {
		for (let x = 0; x < tempCanvas.width; x++) {
			const i = (y * tempCanvas.width + x) * 4;
			if (pixels[i + 3] < 128) {
				const hasNonTransparentNeighbor = Array.from({ length: thickness }, (_, d) => d + 1).some(d => {
					const positions = [
						[x + d, y], [x - d, y],
						[x, y + d], [x, y - d],
						[x + d, y + d], [x - d, y - d],
						[x + d, y - d], [x - d, y + d]
					];

					return positions.some(([checkX, checkY]) => {
						const validX = checkX >= 0 && checkX < tempCanvas.width;
						const validY = checkY >= 0 && checkY < tempCanvas.height;
						if (!validX || !validY) return false;
						const checkI = (checkY * tempCanvas.width + checkX) * 4;
						return pixels[checkI + 3] >= 128;
					});
				});

				if (hasNonTransparentNeighbor) {
					outlineData.data.set([255, 255, 0, 255], i);
				}
			}
		}
	}

	const outlineBitmap = new Bitmap(tempCanvas.width, tempCanvas.height);
	outlineBitmap.context.putImageData(outlineData, 0, 0);
	this._outlineSprite.bitmap = outlineBitmap;

	this._outlineSprite.anchor.x = this.anchor.x;
	this._outlineSprite.anchor.y = this.anchor.y;
	this._outlineSprite.x = 0;
	this._outlineSprite.y = 2;
	this._outlineSprite.scale.x = this.scale.x;
	this._outlineSprite.scale.y = this.scale.y;
};

Sprite_Character.prototype.updateEventOutline = function () {
	if (!(this._character instanceof Game_Event)) return;
	if (Graphics.frameCount % 4 !== 0) return;

	const shouldShow = this.shouldHaveEventOutline() && this.isEventHovered();

	if (shouldShow && (!this._outlineSprite.bitmap ||
		this._character._pattern !== this._lastOutlinePattern ||
		this._character._direction !== this._lastOutlineDirection)) {

		this.createEventOutline();
		this._lastOutlinePattern = this._character._pattern;
		this._lastOutlineDirection = this._character._direction;
	}

	this._outlineSprite.visible = shouldShow;
};

Sprite_Character.prototype.shouldHaveEventOutline = function () {
	if (!this._character?.event) return false;

	const eventId = this._character.eventId();
	const checkInRange = (id, range) => {
		if (range === Infinity) return true;
		const dx = Math.abs(this._character.x - $gamePlayer.x);
		const dy = Math.abs(this._character.y - $gamePlayer.y);
		return dx <= range && dy <= range;
	};

	if (window._eventsWithOutline.has(eventId)) {
		return checkInRange(eventId, window._eventsWithOutline.get(eventId));
	}

	return false;
};

Sprite_Character.prototype.isEventHovered = function () {
	if (navigator.getGamepads && navigator.getGamepads()[0]) {
		const event = this._character;
		const range = window._eventsWithOutline.get(event._eventId) || 1;

		const dx = Math.abs(event.x - $gamePlayer.x);
		const dy = Math.abs(event.y - $gamePlayer.y);
		return dx <= range && dy <= range;
	}

	const screenX = this._character.screenX();
	const screenY = this._character.screenY();
	const hitbox = this._character.hitboxData();

	return TouchInput.x >= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX &&
		TouchInput.x <= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX + hitbox.width * $gameMap.tileWidth() &&
		TouchInput.y >= screenY - $gameMap.tileHeight() + hitbox.offsetY &&
		TouchInput.y <= screenY - $gameMap.tileHeight() + hitbox.offsetY + hitbox.height * $gameMap.tileHeight();
};

Game_Event.prototype.isBeingHovered = function () {
	const screenX = this.screenX();
	const screenY = this.screenY();
	const hitbox = this.hitboxData();

	const left = screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX;
	const top = screenY - $gameMap.tileHeight() + hitbox.offsetY;
	const right = left + hitbox.width * $gameMap.tileWidth();
	const bottom = top + hitbox.height * $gameMap.tileHeight();

	let range = 1;
	if (window._eventsWithOutline.has(this._eventId)) {
		range = window._eventsWithOutline.get(this._eventId);
	}
	const dx = Math.abs(this.x - $gamePlayer.x);
	const dy = Math.abs(this.y - $gamePlayer.y);
	const inRange = dx <= range && dy <= range;

	const isOver = TouchInput.x >= left && TouchInput.x <= right &&
		TouchInput.y >= top && TouchInput.y <= bottom;

	return inRange && isOver;
};

Game_Event.prototype.setupClickable = function () {
	if (this.page()) {
		const clickableComment = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			const match = clickableComment.parameters[0].match(/<clickable(?::\s*(\d+))?>/i);
			const range = match[1] ? Number(match[1]) : 1;
			window._eventsWithOutline.set(this._eventId, range);
			this.hasOutline = true;
		} else {
			window._eventsWithOutline.delete(this._eventId);
			this.hasOutline = false;
		}
	}
}

Scene_Map.prototype.checkClickableEvents = function () {
	if ($gameMap.isEventRunning()) {
		return;
	}
	$gameMap.events().forEach(event => {
		if (!event || !event.page()) return;

		const clickableComment = event.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			event.isHovered = event.isBeingHovered();
			if (TouchInput.isTriggered() && event.isHovered) {
				event.start();
			}
		}
	});
};

const H_Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function () {
	H_Sprite_Character_update.call(this);
	if (this._character.hasOutline) {
		this.updateEventOutline();
	}
	this.showEventIdAndName();
};

//============================================================
// PLATFORM
//============================================================

Game_Map.prototype.platformCache = null;
Game_Map.prototype.lastPlatformCache = 0;

const H_Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function (sceneActive) {
	H_Game_Map_update.call(this, sceneActive);
	this.updatePlatforms();
	this.updatePauseState();
};

Game_Map.prototype.getPlatforms = function () {
	const currentFrame = Graphics.frameCount;
	if (!this.platformCache || currentFrame - this.lastPlatformCache >= 4) {
		this.platformCache = this.events().filter(event => {
			const note = event?.event().note;
			return note.includes('<platform');
		}).map(event => {
			const note = event.event().note;
			let size = $gameMap.tileWidth();

			if (note.match(/<platform:\s*(\d+)>/i)) {
				size = parseInt(RegExp.$1);
			}
			event.platformSize = size;
			return event;
		});
		this.lastPlatformCache = currentFrame;
	}
	return this.platformCache;
};

Game_Map.prototype.getNearestPlatform = function (character) {
	if (this.getPlatforms().length <= 0) return null;

	const distances = this.getPlatforms().map(platform => {
		const deltaX = platform._realX - character._realX;
		const deltaY = platform._realY - character._realY;
		const platformRange = platform.platformSize / $gameMap.tileWidth();
		const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

		return {
			platform: platform,
			distance: distance,
			inRange: distance <= platformRange
		};
	});

	const inRange = distances.filter(d => d.inRange);
	if (inRange.length === 0) return null;

	return inRange.reduce((a, b) => a.distance < b.distance ? a : b).platform;
};

Game_Map.prototype.updatePlatforms = function () {
	this.getPlatforms().forEach(platform => {
		if (!platform.lastX) {
			platform.lastX = platform._realX;
			platform.lastY = platform._realY;
			return;
		}

		const deltaX = platform._realX - platform.lastX;
		const deltaY = platform._realY - platform.lastY;

		if (deltaX !== 0 || deltaY !== 0) {
			const characters = [$gamePlayer, ...this.events()];

			characters.forEach(char => {
				if (char !== platform) {
					if (this.getNearestPlatform(char) === platform) {
						char._realX += deltaX;
						char._realY += deltaY;
						char._x = Math.round(char._realX);
						char._y = Math.round(char._realY);

						if (char === $gamePlayer) {
							const mapWidth = this.width();
							const mapHeight = this.height();
							const screenWidth = this.screenTileX();
							const screenHeight = this.screenTileY();

							if (mapWidth > screenWidth) {
								this._displayX += deltaX;
								this._displayX = Math.max(0, Math.min(this._displayX, mapWidth - screenWidth));
							}

							if (mapHeight > screenHeight) {
								this._displayY += deltaY;
								this._displayY = Math.max(0, Math.min(this._displayY, mapHeight - screenHeight));
							}
						}
					}
				}
			});
		}

		platform.lastX = platform._realX;
		platform.lastY = platform._realY;
	});
};

window.onPlatform = function (identifier) {
	let character;
	if (identifier === 'player') {
		character = $gamePlayer;
	} else if (identifier === 'this') {
		const interpreter = $gameMap._interpreter;
		if (!interpreter) return false;
		character = $gameMap.event(interpreter._eventId);
	} else if (typeof identifier === 'string' && identifier.startsWith('<')) {
		character = findNearestTarget(identifier, $gamePlayer.x, $gamePlayer.y);
	} else {
		character = $gameMap.event(identifier);
	}

	if (!character) return false;

	for (const platform of $gameMap.getPlatforms()) {
		const deltaX = character._realX - platform._realX;
		const deltaY = character._realY - platform._realY;
		const platformRange = platform.platformSize / $gameMap.tileWidth();

		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		if (distance <= platformRange) {
			return true;
		}
	}

	return false;
};

// ================================================================
// 8 DIR - ANIMATION SOLUTION
// ================================================================

if (!Imported.Hendrix_Animation_Solution) {
	const spriteTypeCache = new Map();

	Game_CharacterBase.prototype.is8DirSprite = function () {
		if (!this._characterName) return false;
		if (spriteTypeCache.has(this._characterName)) {
			return spriteTypeCache.get(this._characterName);
		}
		const result = this._characterName.includes('8dir');
		spriteTypeCache.set(this._characterName, result);
		return result;
	};

	const _Game_CharacterBase_setDirection = Game_CharacterBase.prototype.setDirection;
	Game_CharacterBase.prototype.setDirection = function (d) {
		if (this.is8DirSprite()) {
			if ([1, 3, 7, 9].includes(d)) {
				this._direction = d;
				return;
			}
		}
		_Game_CharacterBase_setDirection.call(this, d);
	};

	if (H_DotMoveSystem) {
		const _Game_Character_dotMoveByDeg = Game_Character.prototype.dotMoveByDeg;
		Game_Character.prototype.dotMoveByDeg = function (deg) {
			_Game_Character_dotMoveByDeg.call(this, deg);
			if (this.is8DirSprite()) {
				const dir8 = (new DotMoveSystem.Degree(deg)).toDirection8();
				this.setDirection(dir8);
			}
		};

		const _CharacterMover_dotMoveByDirection = DotMoveSystem.CharacterMover.prototype.dotMoveByDirection;
		DotMoveSystem.CharacterMover.prototype.dotMoveByDirection = function (direction, dpf) {
			_CharacterMover_dotMoveByDirection.call(this, direction, dpf);

			const character = this._character;
			if (character && character.is8DirSprite()) {
				character.setDirection(direction);
			}
		};
	} else {
		const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
		Game_Player.prototype.getInputDirection = function () {
			if (this.is8DirSprite()) {
				return Input.dir8;
			} else {
				return _Game_Player_getInputDirection.call(this);
			}
		};

		const _Game_Player_executeMove = Game_Player.prototype.executeMove;
		Game_Player.prototype.executeMove = function (direction) {
			if (!this.is8DirSprite() || direction % 2 === 0) {
				_Game_Player_executeMove.call(this, direction);
			} else {
				let horz, vert;
				switch (direction) {
					case 7: horz = 4; vert = 8; break;
					case 9: horz = 6; vert = 8; break;
					case 1: horz = 4; vert = 2; break;
					case 3: horz = 6; vert = 2; break;
				}
				this.moveDiagonally(horz, vert);
			}
		};

		const _Game_CharacterBase_moveDiagonally = Game_CharacterBase.prototype.moveDiagonally;
		Game_CharacterBase.prototype.moveDiagonally = function (horz, vert) {
			_Game_CharacterBase_moveDiagonally.call(this, horz, vert);

			if (this.is8DirSprite()) {
				if (horz === 4 && vert === 8) this.setDirection(7);
				if (horz === 6 && vert === 8) this.setDirection(9);
				if (horz === 4 && vert === 2) this.setDirection(1);
				if (horz === 6 && vert === 2) this.setDirection(3);
			}
		};
	}

	const H_Sprite_Character_characterPatternY = Sprite_Character.prototype.characterPatternY;
	Sprite_Character.prototype.characterPatternY = function () {
		if (this._character && this._character.is8DirSprite()) {
			switch (this._character.direction()) {
				case 2: return 0;
				case 1: return 1;
				case 3: return 2;
				case 4: return 3;
				case 6: return 4;
				case 8: return 5;
				case 7: return 6;
				case 9: return 7;
				default: return 0;
			}
		} else {
			return H_Sprite_Character_characterPatternY.call(this);
		}
	};

	const H_Sprite_Character_patternHeight = Sprite_Character.prototype.patternHeight;
	Sprite_Character.prototype.patternHeight = function () {
		if (this._tileId > 0) {
			return $gameMap.tileHeight();
		} else if (this._character && this._character.is8DirSprite()) {
			return this.bitmap.height / 8;
		} else {
			return H_Sprite_Character_patternHeight.call(this);
		}
	};

	window.checkDirection = function (target, direction) {
		let character = null;
		if (target.toLowerCase() === 'player') {
			character = $gamePlayer;
		}
		if (!character) return false;
		return character.direction() === direction;
	};

	window.getDirection = function (target) {
		let character = null;
		if (target.toLowerCase() === 'player') {
			character = $gamePlayer;
		}
		if (!character) {
			return -1;
		}
		return character.direction();
	};
}

if (isBeatEmUp) {
	const Hen_Game_CharacterBase_setDirection = Game_CharacterBase.prototype.setDirection;
	Game_CharacterBase.prototype.setDirection = function (d) {
		if (isBeatEmUp) {
			this._originalDirection = d;
			switch (d) {
				case 1: case 4: case 7:
					d = 4;
					break;
				case 2: case 8:
					d = (this._direction === 4) ? 4 : 6;
					break;
				case 3: case 6: case 9:
				default:
					d = 6;
					break;
			}
		}
		Hen_Game_CharacterBase_setDirection.call(this, d);
	};

	const Hen_Game_Player_executeMove = Game_Player.prototype.executeMove;
	Game_Player.prototype.executeMove = function (direction) {
		if (isBeatEmUp) {
			const currentFacing = this._direction;
			Hen_Game_Player_executeMove.call(this, direction);

			switch (direction) {
				case 1: case 4: case 7:
					this._direction = 4;
					break;
				case 3: case 6: case 9:
					this._direction = 6;
					break;
				case 2: case 8:
					this._direction = (currentFacing === 4 || currentFacing === 6) ? currentFacing : 6;
					break;
			}
		} else {
			Hen_Game_Player_executeMove.call(this, direction);
		}
	};

	const Hen_Game_CharacterBase_moveStraight = Game_CharacterBase.prototype.moveStraight;
	Game_CharacterBase.prototype.moveStraight = function (direction) {
		Hen_Game_CharacterBase_moveStraight.call(this, direction);

		if (isBeatEmUp) {
			switch (direction) {
				case 1:
				case 4:
				case 7:
					this._direction = 4;
					break;
				case 3:
				case 6:
				case 9:
					this._direction = 6;
					break;
				case 2:
				case 8:
					if (this._direction !== 4 && this._direction !== 6) {
						this._direction = 6;
					}
					break;
			}
		}
	};

	const Hen_Game_CharacterBase_moveDiagonally = Game_CharacterBase.prototype.moveDiagonally;
	Game_CharacterBase.prototype.moveDiagonally = function (horz, vert) {
		Hen_Game_CharacterBase_moveDiagonally.call(this, horz, vert);

		if (isBeatEmUp) {
			if (horz === 4) {
				this._direction = 4;
			} else if (horz === 6) {
				this._direction = 6;
			}
		}
	};
}

//============================================================
// JUMP
//============================================================

const jumpStateCache = new Map();

const _Game_CharacterBase_screenY = Game_CharacterBase.prototype.screenY;
Game_CharacterBase.prototype.screenY = function () {
	return _Game_CharacterBase_screenY.call(this) + (this.jumpY || 0);
};

const H_Game_Player_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function () {
	H_Game_Player_initMembers.call(this);
	this._jumping = false;
	this._jumpVelocity = 0;
	this._jumpGravity = 0.4;
	this.jumpY = 0;
	this._maxJumpHeight = 0;
};

Game_CharacterBase.prototype.setupJumpProperties = function () {
	if (this.jumpY === undefined) {
		this._jumping = false;
		this._jumpVelocity = 0;
		this._jumpGravity = 0.4;
		this.jumpY = 0;
		this._maxJumpHeight = 0;
	}
};

Game_CharacterBase.prototype.updateJumpPhysics = function () {
	if (!this._jumping || this.jumpY === undefined) {
		return;
	}

	this._jumpVelocity += this._jumpGravity;
	this.jumpY += this._jumpVelocity;

	// If at peak height the change sprite priority to above player
	if (Math.abs(this.jumpY) > this._maxJumpHeight / 3) {
		this.setPriorityType(3);
	}

	// Landing
	if (this.jumpY >= 0) {
		this._jumping = false;
		this.jumpY = 0;
		this._jumpVelocity = 0;
		this.setPriorityType(this._originalPriorityType || 1);
	}
};

Game_CharacterBase.prototype.startJump = function (height, power) {
	this.setupJumpProperties();
	if (this._jumping) return;

	this._jumping = true;
	this._maxJumpHeight = height;
	this._jumpGravity = 0.4 * (power / 12);
	this._jumpVelocity = -Math.sqrt(2 * this._jumpGravity * height);
	this.jumpY = 0;

	this._originalPriorityType = this._priorityType || 1;
};

PluginManager.registerCommand(HpluginName, "PlayerJump", function (args) {
	const height = parseInt(args.height) || 30;
	const power = parseInt(args.power) || 12;
	const target = args.target || 'player';

	const targetCharacters = findTargets(target, this);
	targetCharacters.forEach(character => {
		if (character) {
			character.startJump(height, power);
		}
	});
});

let previousJumpState = false;

window.checkJump = function (target, status) {
	const targetCharacters = findTargets(target);
	return targetCharacters.some(character => {
		const characterId = character === $gamePlayer ? 'player' : character.eventId();
		const isJumping = character._jumping === true;

		let previousState = false;
		if (jumpStateCache.has(characterId)) {
			previousState = jumpStateCache.get(characterId);
		}
		jumpStateCache.set(characterId, isJumping);
		switch (status.toLowerCase()) {
			case 'jumping':
				return isJumping;

			case 'startedjump':
				return isJumping && !previousState;

			case 'landed':
				return !isJumping && previousState;

			default:
				return false;
		}
	});
};

window.playerJumping = function () {
	return $gamePlayer._jumping;
};

window.playerStartedJump = function () {
	const currentlyJumping = window.playerJumping();
	const justStarted = currentlyJumping && !previousJumpState;
	previousJumpState = currentlyJumping;
	return justStarted;
};

window.playerLanded = function () {
	const currentlyJumping = window.playerJumping();
	const justLanded = !currentlyJumping && previousJumpState;
	previousJumpState = currentlyJumping;
	return justLanded;
};

//============================================================
// BACKEND MOVEMENT ROUTE COMMAND
//============================================================

const _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (command) {
	if (command.code === Game_Character.ROUTE_SCRIPT) {
		const script = command.parameters[0];
		if (script.match(/^(selfSwitch|dash|turnToward|rotateTo|setMoveSpeed|jumpToNearby|teleportTo|moveToPosition|jumpTo|dotMoveByDeg|playFrames|toFrame|shareDirection|sucking|moveToClosest|moveToTarget|lockTarget|switchLockTarget)/)) {
			eval(`this.${script}`);
			return;
		}
	}
	_Game_Character_processMoveCommand.call(this, command);
};

//============================================================
// COMMANDS CHECK
//============================================================

window.gotHit = function (eventId) {
	const damages = CollisionManager.getAndClearDamage(eventId);
	return damages && damages.length > 0;
}

window.HP = function (eventId) {
	if (eventId === 'player') {
		const leader = $gameParty.leader();
		return leader ? leader.hp : 0;
	}
	return $gameMap.getCurrentEventHp(eventId) || 0;
};

window.hpDecreased = function (eventId) {
	const currentHp = $gameMap.getCurrentEventHp(eventId);
	if (currentHp === null) {
		return false;
	}
	if (lastHpDecrease[eventId] === undefined) {
		lastHpDecrease[eventId] = currentHp;
		return false;
	}
	if (currentHp < lastHpDecrease[eventId]) {
		lastHpDecrease[eventId] = currentHp;
		return true;
	}
	if (currentHp > lastHpDecrease[eventId]) {
		lastHpDecrease[eventId] = currentHp;
	}
	return false;
};

window.checkCollide = function (targetId, tags, collisionCooldownInFrames = 0, collisionRange = 6) {
	return $gameMap.taggedEventIsCollidingWithTargetEvent(targetId, tags, collisionCooldownInFrames, collisionRange);
};

window.shareCollide = function (targetId, tags, collisionCooldownInFrames = 0) {
	return $gameMap.shareCollidingWith(targetId, tags, collisionCooldownInFrames);
};

window.checkRange = function (source, range, target, eyes = 0, blockRegion = 0, exception = null) {
	return $gameSystem.checkInRange(source, range, target, eyes, blockRegion, exception);
};

//============================================================
// FREEZE TIME
//============================================================

PluginManager.registerCommand(HpluginName, "pauseEvent", function (args) {
	if (args.pause === 'true') {
		$gameMap.pausingEvent = this._eventId;
		$gameMap.eventsPaused = true;
	} else {
		$gameMap.eventsPaused = false;
		$gameMap.pausingEvent = null;
	}
});

PluginManager.registerCommand(HpluginName, "PauseThenResume", args => {
	$gameMap.eventsPaused = true;
	$gameMap.pauseFramesLeft = parseInt(args.frames) || 60;
});

const H_Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function (sceneActive) {
	if (!$gameMap.eventsPaused) {
		H_Game_Player_update.call(this, sceneActive);
	}

	const mapId = $gameMap.mapId();
	if ($gameSystem.passiveCommonEvents?.[mapId]?.['player']) {
		const storedStates = $gameSystem.passiveCommonEvents[mapId]['player'];

		if (!this.stateInterpreters) {
			this.stateInterpreters = {};
		}

		for (const stateId in storedStates) {
			const commonEventId = storedStates[stateId];

			if (!this.stateInterpreters[stateId]) {
				const interpreter = new Game_Interpreter();
				interpreter.setup($dataCommonEvents[commonEventId].list, 0);
				this.stateInterpreters[stateId] = interpreter;
			}
		}
	}

	if (this.stateInterpreters) {
		for (const stateId in this.stateInterpreters) {
			const interpreter = this.stateInterpreters[stateId];
			if (!interpreter.isRunning()) {
				const commonEventId = $gameSystem.passiveCommonEvents?.[mapId]?.['player']?.[stateId];
				if (commonEventId && $dataCommonEvents[commonEventId]) {
					interpreter.setup($dataCommonEvents[commonEventId].list, 0);
				}
			}
			interpreter.update();
		}
	}
};

Game_Map.prototype.updatePauseState = function () {
	if (this.pauseFramesLeft > 0) {
		this.pauseFramesLeft--;
		if (this.pauseFramesLeft === 0) {
			$gameMap.eventsPaused = false;
		}
	}
};

//============================================================
// TARGET LOCK
//============================================================

PluginManager.registerCommand(HpluginName, "LockInTarget", function (args) {
	const lockCommand = args.lockCommand || 'enable';
	let notetag = args.notetag || '<enemy>';
	if (notetag.includes('$game')) {
		notetag = eval(notetag);
	}
	const range = parseInt(args.range) || 5;
	const autoSwitchTarget = args.autoSwitchTarget !== 'false';
	const runFreely = args.runFreely !== 'false';
	const targetImage = args.targetImage || '';
	const indicatorAnimation = args.indicatorAnimation || 'pulse';
	const indicatorPosition = args.indicatorPosition || 'above';

	const character = $gamePlayer;
	if (!character) return;

	if (lockCommand === 'disable') {
		if (character.lockInTarget) {
			character.lockInMemoryEventId = character.lockInTarget.eventId();
		}
		if (character.lockInSprite) {
			if (character.lockInSprite.parent) {
				character.lockInSprite.parent.removeChild(character.lockInSprite);
			}
			character.lockInSprite = null;
		}

		character.lockInEnabled = false;
		character.lockInTarget = null;
		character.lockInPreviousTarget = null;
		character.lockInNotetag = null;
		character.lockInRange = 0;
		character.lockInAutoSwitch = false;
		character.lockInTargetImage = '';
		character.lockInRunFreely = true;
		return;
	}

	if (lockCommand === 'switch') {
		if (!character.lockInEnabled) return;

		if (character.lockInTarget) {
			character.lockInPreviousTarget = character.lockInTarget;
			character.lockInTarget = null;
		}
		return;
	}

	if (lockCommand === 'enable') {
		character.lockInNotetag = notetag;
		character.lockInRange = range;
		character.lockInAutoSwitch = autoSwitchTarget;
		character.lockInRunFreely = runFreely;
		character.lockInTargetImage = targetImage;
		character.lockIndicatorAnim = indicatorAnimation;
		character.lockIndicatorPos = indicatorPosition;
		character.lockInEnabled = true;
		character.lockInTarget = null;
		character.lockInPreviousTarget = null;

		if (character.lockInMemoryEventId) {
			const rememberedEvent = $gameMap.event(character.lockInMemoryEventId);

			if (rememberedEvent &&
				rememberedEvent.event() &&
				rememberedEvent.event().note.includes(notetag)) {
				const dx = Math.abs(rememberedEvent.x - character.x);
				const dy = Math.abs(rememberedEvent.y - character.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance <= range) {
					character.lockInTarget = rememberedEvent;
				}
			}
			character.lockInMemoryEventId = null;
		}
	}
});

Game_CharacterBase.prototype.getLockedTarget = function () {
	if (!this.lockInEnabled || !this.lockInTarget) {
		return null;
	}
	if (this.lockInTarget !== $gamePlayer && (!this.lockInTarget.event || !this.lockInTarget.event())) {
		this.lockInTarget = null;
		return null;
	}
	return this.lockInTarget;
};

Game_CharacterBase.prototype.findLockInTarget = function () {
	if (!this.lockInEnabled || !this.lockInNotetag) return null;
	let currentNotetag = this.lockInNotetag;

	if (this.lockInOriginalTarget) {
		const target = eval(this.lockInOriginalTarget);
		currentNotetag = target === 'player' ? 'player' : (target.startsWith('<') && target.endsWith('>') ? target : `<${target}>`);
	}

	if (this.lockInTarget) {
		if (this.lockInTarget === $gamePlayer) {
			const dx = Math.abs($gamePlayer.x - this.x);
			const dy = Math.abs($gamePlayer.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > this.lockInRange) {
				this.lockInTarget = null;
			} else if (!this.lockInAutoSwitch) {
				return this.lockInTarget;
			}
		} else {
			const targetStillExists = $gameMap.event(this.lockInTarget.eventId());
			if (!targetStillExists) {
				this.lockInTarget = null;
				if (this.lockInSprite) {
					if (this.lockInSprite.parent) {
						this.lockInSprite.parent.removeChild(this.lockInSprite);
					}
					this.lockInSprite = null;
				}
			} else {
				const dx = Math.abs(this.lockInTarget.x - this.x);
				const dy = Math.abs(this.lockInTarget.y - this.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance > this.lockInRange ||
					!this.lockInTarget.event() ||
					!this.lockInTarget.event().note.includes(currentNotetag)) {
					this.lockInTarget = null;
				}
				else if (!this.lockInAutoSwitch) {
					return this.lockInTarget;
				}
			}
		}
	}

	const validTargets = [];

	if (currentNotetag === 'player') {
		const dx = Math.abs($gamePlayer.x - this.x);
		const dy = Math.abs($gamePlayer.y - this.y);
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= this.lockInRange) {
			validTargets.push({
				target: $gamePlayer,
				distance: distance
			});
		}
	} else {
		const targets = findTargets(currentNotetag);
		targets.forEach(event => {
			if (event === this) return;

			const dx = Math.abs(event.x - this.x);
			const dy = Math.abs(event.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance <= this.lockInRange) {
				validTargets.push({
					target: event,
					distance: distance
				});
			}
		});
	}

	validTargets.sort((a, b) => a.distance - b.distance);

	if (this.lockInPreviousTarget) {
		let currentIndex = -1;

		if (this.lockInPreviousTarget === $gamePlayer) {
			currentIndex = validTargets.findIndex(t => t.target === $gamePlayer);
		} else {
			currentIndex = validTargets.findIndex(t =>
				t.target !== $gamePlayer &&
				t.target.eventId() === this.lockInPreviousTarget.eventId()
			);
		}

		if (currentIndex !== -1) {
			const nextIndex = (currentIndex + 1) % validTargets.length;
			this.lockInPreviousTarget = null;
			return validTargets[nextIndex].target;
		}
		this.lockInPreviousTarget = null;
	}

	return validTargets.length > 0 ? validTargets[0].target : null;
};

Game_CharacterBase.prototype.updateLockIn = function () {
	if (!this.lockInEnabled) return;

	const target = this.findLockInTarget();
	const previousTarget = this.lockInTarget;
	this.lockInTarget = target;

	if (target && this.lockInTargetImage) {
		if (!this.lockInSprite || target !== previousTarget) {
			this.createTargetIndicator(target);
		}
		this.updateTargetIndicator();
	} else {
		if (this.lockInSprite) {
			if (this.lockInSprite.parent) {
				this.lockInSprite.parent.removeChild(this.lockInSprite);
			}
			this.lockInSprite = null;
		}
	}

	const shouldSkipLocking = this.lockInRunFreely &&
		this === $gamePlayer &&
		this.isDashing();

	const shouldFaceTarget = target && !shouldSkipLocking && (
		this.isMoved() || this.lockInFaceWhenIdle
	);

	if (shouldFaceTarget) {
		const targetX = target === $gamePlayer ? $gamePlayer.x : target.x;
		const targetY = target === $gamePlayer ? $gamePlayer.y : target.y;
		const dx = targetX - this.x;
		const dy = targetY - this.y;

		let newDirection = this.direction();

		if (Math.abs(dx) > Math.abs(dy)) {
			newDirection = dx > 0 ? 6 : 4;
		} else if (Math.abs(dy) > Math.abs(dx)) {
			newDirection = dy > 0 ? 2 : 8;
		} else if (dx !== 0 && dy !== 0) {
			if (this.is8DirSprite && this.is8DirSprite()) {
				if (dx > 0 && dy > 0) newDirection = 3;
				else if (dx > 0 && dy < 0) newDirection = 9;
				else if (dx < 0 && dy > 0) newDirection = 1;
				else if (dx < 0 && dy < 0) newDirection = 7;
			} else {
				newDirection = dx > 0 ? 6 : 4;
			}
		}

		if (newDirection !== this.direction()) {
			this.setDirection(newDirection);
		}
	}
};

Game_Character.prototype.lockTarget = function (target, range = 10, autoSwitch = true, faceWhenIdle = true, runFreely = true, targetImage = '', indicatorPosition = 'above', indicatorAnimation = 'pulse') {
	if (!target || target === '' || target === 'none') {
		if (this.lockInTarget) {
			this.lockInMemoryEventId = this.lockInTarget === $gamePlayer ? 'player' : this.lockInTarget.eventId();
		}
		if (this.lockInSprite) {
			if (this.lockInSprite.parent) {
				this.lockInSprite.parent.removeChild(this.lockInSprite);
			}
			this.lockInSprite = null;
		}

		this.lockInEnabled = false;
		this.lockInTarget = null;
		this.lockInPreviousTarget = null;
		this.lockInNotetag = null;
		this.lockInRange = 0;
		this.lockInAutoSwitch = false;
		this.lockInTargetImage = '';
		this.lockInRunFreely = true;
		this.lockInFaceWhenIdle = false;
		return;
	}

	if (typeof target === 'string' && target.includes('$game')) {
		this.lockInOriginalTarget = target;
		target = eval(target);
	}

	this.lockInNotetag = target === 'player' ? 'player' : (target.startsWith('<') && target.endsWith('>') ? target : `<${target}>`);
	this.lockInRange = Math.max(1, parseInt(range) || 5);
	this.lockInAutoSwitch = autoSwitch !== false;
	this.lockInRunFreely = runFreely !== false;
	this.lockInTargetImage = targetImage || '';
	this.lockIndicatorAnim = indicatorAnimation || 'pulse';
	this.lockIndicatorPos = indicatorPosition || 'above';
	this.lockInFaceWhenIdle = faceWhenIdle === true;
	this.lockInEnabled = true;
	this.lockInTarget = null;
	this.lockInPreviousTarget = null;

	if (this.lockInMemoryEventId) {
		if (this.lockInMemoryEventId === 'player' && this.lockInNotetag === 'player') {
			const dx = Math.abs($gamePlayer.x - this.x);
			const dy = Math.abs($gamePlayer.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance <= this.lockInRange) {
				this.lockInTarget = $gamePlayer;
			}
		} else if (this.lockInNotetag !== 'player') {
			const rememberedEvent = $gameMap.event(this.lockInMemoryEventId);
			if (rememberedEvent &&
				rememberedEvent.event() &&
				rememberedEvent.event().note.includes(this.lockInNotetag)) {

				const dx = Math.abs(rememberedEvent.x - this.x);
				const dy = Math.abs(rememberedEvent.y - this.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance <= this.lockInRange) {
					this.lockInTarget = rememberedEvent;
				}
			}
		}
		this.lockInMemoryEventId = null;
	}
};

Game_Character.prototype.switchLockTarget = function () {
	if (!this.lockInEnabled) return;

	if (this.lockInTarget) {
		this.lockInPreviousTarget = this.lockInTarget;
		this.lockInTarget = null;
	}
};

Game_CharacterBase.prototype.createTargetIndicator = function (target) {
	if (this.lockInSprite) {
		if (this.lockInSprite.parent) {
			this.lockInSprite.parent.removeChild(this.lockInSprite);
		}
	}

	this.lockInSprite = new Sprite();
	this.lockInSprite.bitmap = ImageManager.loadPicture(this.lockInTargetImage);
	this.lockInSprite.anchor.x = 0.5;
	this.lockInSprite.anchor.y = 0.5;
	this.lockInSprite.z = 9999;
	this.lockInSprite._animationFrame = 0;
	this.lockInSprite._animationSpeed = 3;
	this.lockInSprite._minScale = 0.7;
	this.lockInSprite._maxScale = 1.2;
	this.lockInSprite._baseY = 0;
	this.lockInSprite._moveRange = 10;

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		SceneManager._scene._spriteset._tilemap.addChild(this.lockInSprite);
	}
};

Game_CharacterBase.prototype.updateTargetIndicator = function () {
	if (!this.lockInSprite || !this.lockInTarget) return;
	if (!this.lockInSprite.parent) {
		this.lockInSprite = null;
		return;
	}

	const baseX = this.lockInTarget.screenX();
	let baseY;
	let spriteHeight = $gameMap.tileHeight();

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const targetSprite = SceneManager._scene._spriteset._characterSprites.find(
			sprite => sprite._character === this.lockInTarget
		);

		if (targetSprite) {
			spriteHeight = targetSprite.patternHeight ? targetSprite.patternHeight() : spriteHeight;
		}
	}

	const position = this.lockIndicatorPos || 'above';
	switch (position) {
		case 'above':
			baseY = this.lockInTarget.screenY() - spriteHeight - 20;
			break;
		case 'middle':
			baseY = this.lockInTarget.screenY() - spriteHeight / 2;
			break;
		case 'foot':
			baseY = this.lockInTarget.screenY();
			break;
		default:
			baseY = this.lockInTarget.screenY() - spriteHeight - 20;
	}

	this.lockInSprite.x = baseX;

	const animationType = this.lockIndicatorAnim || 'pulse';
	if (animationType === 'static') {
		this.lockInSprite.y = baseY;
		this.lockInSprite.scale.x = 1;
		this.lockInSprite.scale.y = 1;
	} else {
		this.lockInSprite._animationFrame += this.lockInSprite._animationSpeed;
		const progress = Math.sin(this.lockInSprite._animationFrame * 0.1) * 0.5 + 0.5;

		if (animationType === 'pulse') {
			this.lockInSprite.y = baseY;
			const currentScale = this.lockInSprite._minScale +
				(this.lockInSprite._maxScale - this.lockInSprite._minScale) * progress;
			this.lockInSprite.scale.x = currentScale;
			this.lockInSprite.scale.y = currentScale;
		} else if (animationType === 'updown') {
			const currentY = baseY + (progress - 0.5) * this.lockInSprite._moveRange * 1.5;
			this.lockInSprite.y = currentY;
			this.lockInSprite.scale.x = 1;
			this.lockInSprite.scale.y = 1;
		}
	}
};

window.isLockingATarget = function (target) {
	const character = findTarget(target);
	return character ? (character.lockInEnabled && character.lockInTarget !== null) : false;
};


window.isBeingTargetLocked = function (targetEventId) {
	// See if target is being target locked by something
	if ($gamePlayer.lockInEnabled && $gamePlayer.lockInTarget) {
		if (targetEventId === 'player' && $gamePlayer.lockInTarget === $gamePlayer) {
			return true;
		}
		if ($gamePlayer.lockInTarget !== $gamePlayer &&
			$gamePlayer.lockInTarget.eventId &&
			$gamePlayer.lockInTarget.eventId() === targetEventId) {
			return true;
		}
	}

	return $gameMap.events().some(event => {
		if (!event || !event.lockInEnabled || !event.lockInTarget) return false;

		if (targetEventId === 'player' && event.lockInTarget === $gamePlayer) {
			return true;
		}

		if (event.lockInTarget !== $gamePlayer &&
			event.lockInTarget.eventId &&
			event.lockInTarget.eventId() === targetEventId) {
			return true;
		}

		return false;
	});
};

// ========================================================================
// WEAPON CHECKS
// ========================================================================
const getSlotIndex = (slot = 1) => {
	if (slot === 2) return 1;
	return 0;
};

window.equippedWeapon = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;
	return !isNaN(search) ? weapon.id === Number(search) : weapon.name === search;
};

window.equippedWeaponDmg = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	return weapon ? weapon.params[2] : null;
};

window.equippedWeaponType = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;

	const wtypeId = weapon.wtypeId;
	if (!isNaN(search)) {
		return wtypeId === Number(search);
	}
	const weaponTypes = $dataSystem.weaponTypes;
	return weaponTypes[wtypeId] === search;
};

window.equippedWeaponNotetag = function (notetag, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const regex = new RegExp(`<${notetag}:\\s*(.+?)\\s*>`, 'i');
	const match = weapon.note.match(regex);

	if (match) {
		const value = match[1];
		return isNaN(value) ? value : Number(value);
	}
	return null;
};

window.equippedWeaponParam = function (param, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const paramMap = {
		'mhp': 0, 'hp': 0, 'maxhp': 0,
		'mmp': 1, 'mp': 1, 'maxmp': 1,
		'atk': 2, 'attack': 2,
		'def': 3, 'defense': 3,
		'mat': 4, 'matk': 4, 'magic': 4,
		'mdf': 5, 'mdef': 5,
		'agi': 6, 'spd': 6, 'speed': 6,
		'luk': 7, 'luck': 7
	};

	const paramIndex = paramMap[param.toLowerCase()];
	return paramIndex !== undefined ? weapon.params[paramIndex] : null;
};

window.equippedShield = function () {
	const shield = $gameParty.leader().equips()[1];
	if (!shield) return false;
	return shield.etypeId === 2;
};

window.equippedArmor = function (search) {
	const leader = $gameParty.leader();
	if (!leader) return false;
	const allArmors = leader.equips().slice(1);
	return allArmors.some(armor => {
		if (!armor) return false;
		return !isNaN(search) ? armor.id === Number(search) : armor.name === search;
	});
};

window.learnedSkill = function (actorIdentifier, skillIdentifier) {
	let actor;
	if (actorIdentifier === 'player') {
		actor = $gameParty.leader();
	} else if (typeof actorIdentifier === 'number') {
		actor = $gameActors.actor(actorIdentifier);
	} else if (typeof actorIdentifier === 'string') {
		actor = $gameActors._data.find(a => a && a._name === actorIdentifier);
	}

	if (!actor) return false;

	let skillId;
	if (typeof skillIdentifier === 'number') {
		skillId = skillIdentifier;
	} else if (typeof skillIdentifier === 'string') {
		const skill = $dataSkills.find(s => s && s.name === skillIdentifier);
		skillId = skill ? skill.id : null;
	}

	if (!skillId) return false;
	return actor.isLearnedSkill(skillId);
};

// ========================================================================
window.amount = function (type, identifier) {
	if (!['item', 'weapon', 'armor'].includes(type)) return 0;

	let item;
	if (typeof identifier === 'number') {
		switch (type) {
			case 'item':
				item = $dataItems[identifier];
				break;
			case 'weapon':
				item = $dataWeapons[identifier];
				break;
			case 'armor':
				item = $dataArmors[identifier];
				break;
		}
	} else {
		const database = type === 'item' ? $dataItems :
			type === 'weapon' ? $dataWeapons : $dataArmors;

		item = Object.values(database).find(i => i && i.name === identifier);
	}

	return item ? $gameParty.numItems(item) : 0;
};


window.notetag = function (eventIdOrTag, notetagParam) {
	// Case 1: Event with this notetag on map?
	if (typeof eventIdOrTag === 'string' && notetagParam === undefined) {
		return findTargets(eventIdOrTag).length > 0;
	}

	// Case 2: Notetag stand on top of another notetag
	if (typeof eventIdOrTag === 'string' && typeof notetagParam === 'string') {
		let searchTag = eventIdOrTag;

		if (notetagParam === 'player') {
			const eventsAtPosition = $gameMap.eventsXy($gamePlayer.x, $gamePlayer.y);
			return findTargets(searchTag).some(event => eventsAtPosition.includes(event));
		}

		const targetEvents = findTargets(notetagParam);
		const searchEvents = findTargets(searchTag);

		return targetEvents.some(targetEvent => {
			const eventsAtPosition = $gameMap.eventsXy(targetEvent.x, targetEvent.y);
			return searchEvents.some(searchEvent =>
				searchEvent !== targetEvent && eventsAtPosition.includes(searchEvent)
			);
		});
	}

	// Case 3: Event with notetag at eventId's position
	if (typeof eventIdOrTag === 'string' && (typeof notetagParam === 'number' || notetagParam === 'player')) {
		const targetChar = findTarget(notetagParam);
		if (!targetChar) return false;

		const eventsAtPosition = $gameMap.eventsXy(targetChar.x, targetChar.y);
		return findTargets(eventIdOrTag).some(event => eventsAtPosition.includes(event));
	}

	// Case 4: An event has notetag?
	const event = findTarget(eventIdOrTag);
	if (!event || !event.event()) return false;

	let searchTag = notetagParam;
	if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
	if (!searchTag.endsWith('>')) searchTag = searchTag + '>';

	return event.event().note.includes(searchTag);
};

window.setSelfSwitch = function (eventId, letter, value) {
	const actualEventId = eventId === 'this' ? this._eventId : eventId;

	if (['A', 'B', 'C', 'D'].includes(letter)) {
		$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, letter], value);
	} else {
		const switchId = $dataSystem.switches.findIndex(name =>
			name?.toLowerCase() === `self switch ${letter.toLowerCase()}`
		);

		if (switchId > 0) {
			$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, `SW_${switchId}`], value);
		}
	}
};

window.sucking = function (eventId, type, range = 15, speed = 5.4) {
	const target = findTarget(eventId);
	if (target && target.sucking) {
		target.sucking(type, range, speed);
	}
};

window.checkGamepad = function () { return navigator.getGamepads && navigator.getGamepads()[0] !== null; };

window.checkGamepadInput = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
			return { x: rightX, y: rightY };
		}
	}
	return null;
};

window.isRightStickPushed = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		return Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1;
	}
	return false;
};

Game_CharacterBase.prototype.selfSwitch = function (letter, value) { $gameSelfSwitches.setValue([$gameMap.mapId(), this._eventId, letter.toUpperCase()], value); }

window.inViewport = function (eventId, pixelRange = 5) {
	if (!$gameMap.event(eventId)) return false;
	const screenX = Math.round($gameMap.event(eventId).screenX());
	const screenY = Math.round($gameMap.event(eventId).screenY());
	return screenX >= -pixelRange &&
		screenY >= -pixelRange &&
		screenX <= Graphics.width + pixelRange &&
		screenY <= Graphics.height + pixelRange;
};

window.checkLevelUp = function () {
	if (!$gameParty.leader()) return false;
	if (lastLeaderLevel === null) {
		lastLeaderLevel = $gameParty.leader().level;
		return false;
	}
	if ($gameParty.leader().level > lastLeaderLevel) {
		lastLeaderLevel = $gameParty.leader().level;
		return true;
	}
	lastLeaderLevel = $gameParty.leader().level;
	return false;
};

window.partyLeader = function (identifier) {
	if (typeof identifier === 'number') { return $gameActors.actor(identifier); }
	return $gameActors._data.find(actor => actor && actor._name === identifier) || null;
};

window.inFrontIsImpassable = function (identifier) {
	const character = findTarget(identifier);
	if (!character) return false;
	const x2 = $gameMap.roundXWithDirection(character.x, character.direction());
	const y2 = $gameMap.roundYWithDirection(character.y, character.direction());
	if (!$gameMap.isPassable(x2, y2, character.reverseDir(character.direction()))) {
		return true;
	}
	const events = $gameMap.eventsXy(x2, y2);
	return events.some(event =>
		event._priorityType === 1 &&
		!event.isThrough() &&
		!event.event().note.includes('<pass>')
	);
};

window.checkName = function (eventId) { return $gameMap.event(eventId).event().name; };
window.checkNameOnMap = function (name) { return findTargets(name).length > 0; };

window.leftStickDegree = function () {
	const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
	if (!gamepad || !gamepad.connected) {
		return null;
	}
	const leftX = gamepad.axes[0];
	const leftY = gamepad.axes[1];
	if (Math.abs(leftX) < 0.1 && Math.abs(leftY) < 0.1) {
		return null;
	}
	const angle = Math.atan2(leftY, leftX);
	let degrees = (angle * 180 / Math.PI);
	degrees = (degrees + 360) % 360;
	return degrees;
};

window.isLeftStickDegree = function (targetDegree, tolerance = 0) {
	const currentDegree = window.leftStickDegree();
	if (currentDegree === null) {
		return false;
	}
	targetDegree = ((targetDegree % 360) + 360) % 360;
	let diff = Math.abs(currentDegree - targetDegree);
	if (diff > 180) {
		diff = 360 - diff;
	}
	return diff <= tolerance;
};

window.isOnTileId = function (target, tileId) {
	const character = findTarget(target);
	if (!character) return false;
	const x = character.x;
	const y = character.y;
	const tiles = $gameMap.allTiles(x, y);
	return tiles.includes(tileId);
};

window.mapCount = function (target) {
	if (!target) return 0;
	return findTargets(target).length;
};

// Convert this._eventId to this and stuff
if (easyConditionalBranch) {
	const HtranslateThis = function (script) {
		if (typeof script !== 'string') return script;
		let result = '';
		let i = 0;
		while (i < script.length) {
			const char = script[i];
			if (char === '"' || char === "'") {
				const quote = char;
				result += char; i++;
				while (i < script.length) {
					const innerChar = script[i];
					result += innerChar;
					if (innerChar === '\\' && i + 1 < script.length) { i++; result += script[i]; i++; continue; }
					if (innerChar === quote) { i++; break; } i++;
				}
			} else {
				let token = '';
				while (i < script.length && script[i] !== '"' && script[i] !== "'") { token += script[i]; i++; }
				token = token.replace(/\bthis\b(?!\s*\.)/g, 'this._eventId');
				result += token;
			}
		}

		// to quote
		result = result.replace(/(?<!['"'])(<[a-zA-Z_][a-zA-Z0-9_]*>)(?!['"'])/g, "'$1'"); // <notetag>
		result = result.replace(/(?<!['"'])\bplayer\b(?!['"'])/g, "'player'"); // player

		return result;
	};

	// Just in Conditional Branch
	const H_Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
	Game_Interpreter.prototype.command111 = function (params) {
		let result = false;
		switch (params[0]) {
			case 12:
				const script = HtranslateThis(params[1]);
				result = !!eval(script);
				break;
			default:
				return H_Game_Interpreter_command111.call(this, params);
		}
		this._branch[this._indent] = result;
		if (this._branch[this._indent] === false) {
			this.skipBranch();
		}
		return true;
	};
}