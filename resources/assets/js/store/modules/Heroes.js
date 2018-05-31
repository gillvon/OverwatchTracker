const state = { 
    heroes: [
        {   img: "/ana/icon-portrait.png",           
            name: 'Ana',

            ability1_name: 'Biotic Rifle', 
            ability2_name: 'Sleep Dart', 
            ability3_name: 'Biotic Grenade', 
            ability4_name: 'Nano Boost',
            
            passive_name:  'Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.',
            ability1_desc: 'Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.',
            ability2_desc: 'Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).',
            ability3_desc: 'Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments.',
            ability4_desc: 'After Ana hits one of her allies with a combat boost, they deal more damage, and take less damage from enemies’ attacks.',
            
            passive_path:  '/ana/intro-video.webm',
            ability1_path: '/ana/ability-biotic-rifle',
            ability2_path: '/ana/ability-sleep-dart',
            ability3_path: '/ana/ability-biotic-grenade',
            ability4_path: '/ana/ability-stim-boost',
            
            ability_count: 4,
            difficulty: 3,
            role: 'Support'
        }, 
        {   img: "/bastion/icon-portrait.png",
            name: 'Bastion',

            ability1_name: 'Configuration: Recon', 
            ability2_name: 'Configuration: Sentry', 
            ability3_name: 'Reconfigure', 
            ability4_name: 'Self-Repair',
            ability5_name: 'Configuration: Tank',
            
            passive_name:  'Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.',
            ability1_desc: 'In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.',
            ability2_desc: 'In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun\'s aim can be "walked" across multiple targets, dealing devastating damage at short to medium range.',
            ability3_desc: 'Bastion transforms between its two primary combat modes to adapt to battlefield conditions.',
            ability4_desc: 'Bastion restores its health; it cannot fire weapons while the repair process is in effect.',
            ability5_desc: 'In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.',
            
            passive_path:  '/bastion/intro-video.webm',
            ability1_path: '/bastion/ability-config-recon',
            ability2_path: '/bastion/ability-config-sentry',
            ability3_path: '/bastion/ability-reconfigure',
            ability4_path: '/bastion/ability-self-repair',
            ability5_path: '/bastion/ability-config-tank',
            
            ability_count: 5,
            difficulty: 1,
            role: 'Defense'
        },
        {   img: "/dva/diva_icon.png",
            name: 'Diva',
        
            ability1_name: 'Fusion Cannons', 
            ability2_name: 'Light Gun', 
            ability3_name: 'Boosters', 
            ability4_name: 'Defense Matrix',
            ability5_name: 'Micro Missiles',
            ability6_name: 'Self Destruct',
            ability7_name: 'Call Mech',
            
            passive_name:  'D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.',
            ability1_desc: 'D.Va\'s mech is equipped with twin short-range rotating cannons. They lay down continuous, high-damage fire without needing to reload, but slow D.Va’s movement while they’re active.',
            ability2_desc: 'While outside of her mech, D.Va can continue the fight with a mid-range automatic blaster.',
            ability3_desc: 'D.Va’s mech launches into the air, her momentum carrying her forward. She can turn and change directions or barrel through her enemies, knocking them back.',
            ability4_desc: 'D.Va can maintain this forward-facing targeting array for a short period of time; while active, it\'ll stop incoming projectiles.',
            ability5_desc: 'D.Va launches a volley of explosive rockets.',
            ability6_desc: 'D.Va ejects from her mech and sets its reactor to explode, dealing massive damage to nearby opponents.',
            ability7_desc: 'If her armored battle suit is destroyed, D.Va can call down a fresh mech and return to the fray.',
            
            passive_path:  '/dva/intro-video.webm',
            ability1_path: '/dva/ability-fusion-cannons',
            ability2_path: '/dva/ability-light-gun',
            ability3_path: '/dva/ability-boosters',
            ability4_path: '/dva/ability-defense-matrix',
            ability5_path: '/dva/ability-micro-missiles',
            ability6_path: '/dva/ability-self-destruct',
            ability7_path: '/dva/ability-call-mech',
            
            ability_count: 7,
            difficulty: 1,
            role: 'Tank'
        }, 
        {   img: "/doomfist/icon-portrait.png",
            name: 'Doomfist',

            ability1_name: 'Hand Cannon', 
            ability2_name: 'Seismic Slam', 
            ability3_name: 'Rising Uppercut', 
            ability4_name: 'Rocket Punch',
            ability5_name: 'Meteor Strike',
            
            passive_name:  'Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike.',
            ability1_desc: 'Doomfist fires a short-range burst from the knuckles of his fist. Its ammunition is automatically regenerated over a short time.',
            ability2_desc: 'Doomfist leaps forward and smashes into the ground, knocking nearby enemies toward him.',
            ability3_desc: 'Doomfist uppercuts enemies in front of him into the air.',
            ability4_desc: 'After charging up, Doomfist lunges forward and knocks an enemy back, dealing additional damage if they impact a wall.',
            ability5_desc: 'Doomfist leaps into the sky, then crashes to the ground, dealing significant damage.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-hand-cannon',
            ability2_path: '/hero/ability-seismic-slam',
            ability3_path: '/hero/ability-rising-uppercut',
            ability4_path: '/hero/ability-rocket-punch',
            ability5_path: '/hero/ability-meteor-strike',

            ability_count: 5,
            difficulty: 3,
            role: 'Offensive'
        },
        {   img: "/genji/icon-portrait.png",
            name: 'Genji',
        
            ability1_name: 'Shuriken', 
            ability2_name: 'Deflect', 
            ability3_name: 'Swift Strike', 
            ability4_name: 'Dragonblade',
            
            passive_name:  'Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.',
            ability1_desc: 'Genji looses three deadly throwing stars in quick succession. Alternatively, he can throw three shuriken in a wider spread.',
            ability2_desc: 'With lightning-quick swipes of his sword, Genji reflects an oncoming projectile and sends it rebounding towards his opponent.',
            ability3_desc: 'Genji darts forward, slashing with his katana and passing through foes in his path. If Genji eliminates a target, he can instantly use this ability again.',
            ability4_desc: 'Genji brandishes his katana for a brief period of time. Until he sheathes his sword, Genji can deliver killing strikes to any targets within his reach.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-shuriken',
            ability2_path: '/hero/ability-deflect',
            ability3_path: '/hero/ability-swift-strike',
            ability4_path: '/hero/ability-dragonblade',
            
            ability_count: 4,
            difficulty: 3,
            role: 'Offensive'
        }, 
        {   img: "/hanzo/icon-portrait.png",         
            name: 'Hanzo',

            ability1_name: 'Storm Bow', 
            ability2_name: 'Sonic Arrow', 
            ability3_name: 'Storm Arrows', 
            ability4_name: 'Lunge',
            ability5_name: 'Dragonstrike',
            
            passive_name:  'Hanzo’s versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.',
            ability1_desc: 'Hanzo nocks and fires an arrow at his target.',
            ability2_desc: 'Hanzo launches an arrow that contains a sonar tracking device. Any enemy within its detection radius is visibly marked, making them easier for Hanzo and his allies to hunt down.',
            ability3_desc: 'Hanzo’s next several arrows fire instantly, but at reduced damage.',
            ability4_desc: 'Hanzo can double jump, allowing him to change direction mid-jump.',
            ability5_desc: 'Hanzo summons a Spirit Dragon which travels through the air in a line. It passes through walls in its way, devouring any enemies it encounters.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-storm-bow',
            ability2_path: '/hero/ability-sonic-arrow',
            ability3_path: '/hero/ability-storm-arrows',
            ability4_path: '/hero/ability-lunge',
            ability5_path: '/hero/ability-dragonstrike',
            
            ability_count: 5,
            difficulty: 3,
            role: 'Defense'
        },
        {   img: "/junkrat/icon-portrait.png",
            name: 'Junkrat',

            ability1_name: 'Frag Launcher', 
            ability2_name: 'Concussion Mine', 
            ability3_name: 'Steel Trap', 
            ability4_name: 'Total Mayhem',
            ability5_name: 'Rip-Tire',
            
            passive_name:  'Junkrat’s area-denying armaments include a Frag Launcher that lobs bouncing grenades, Concussion Mines that send enemies flying, and Steel Traps that stop foes dead in their tracks.',
            ability1_desc: 'Junkrat\'s Frag Launcher lobs grenades a significant distance. They bounce to reach their destination, and blow up when they strike an enemy.',
            ability2_desc: 'After placing one of his homemade Concussion Mines, Junkrat can trigger it to damage enemies and send them flying... or propel himself through the air.',
            ability3_desc: 'Junkrat tosses out a giant, metal-toothed trap. Should an enemy wander too close to the trap, it clamps on, injuring and immobilizing them.',
            ability4_desc: 'Junkrat\'s deranged sense of humor persists past his death. If killed, he drops several live grenades.',
            ability5_desc: 'Junkrat revs up a motorized tire bomb and sends it rolling across the battlefield, climbing over walls and obstacles. He can remotely detonate the RIP-Tire to deal serious damage to enemies caught in the blast, or just wait for it to explode on its own.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-frag-launcher',
            ability2_path: '/hero/ability-concussion-mine',
            ability3_path: '/hero/ability-steel-trap',
            ability4_path: '/hero/ability-total-mayhem',
            ability5_path: '/hero/ability-rip-tire',
            
            ability_count: 5,
            difficulty: 2,
            role: 'Defense'
        }, 
        {   img: "/lucio/icon-portrait.png",         
            name: 'Lucio',

            ability1_name: 'Sonic Amplifier', 
            ability2_name: 'Crossfade', 
            ability3_name: 'Amp It Up', 
            ability4_name: 'Sound Barrier',
            
            passive_name:  'On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.',
            ability1_desc: 'Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound.',
            ability2_desc: 'Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health.',
            ability3_desc: 'Lúcio increases the volume on his speakers, boosting the effects of his songs.',
            ability4_desc: 'Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-sonic-amplifier',
            ability2_path: '/hero/ability-crossfade',
            ability3_path: '/hero/ability-amp-it-up',
            ability4_path: '/hero/ability-sound-barrier',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Support'
        },
        {   img: "/mccree/icon-portrait.png",        
            name: 'Mccree',

            ability1_name: 'PeaceKeeper', 
            ability2_name: 'Combat Roll', 
            ability3_name: 'Flashbang', 
            ability4_name: 'Deadeye',
            
            passive_name:  'Armed with his Peacekeeper revolver, McCree takes out targets with deadeye precision and dives out of danger with eagle-like speed.',
            ability1_desc: 'McCree fires off a round from his trusty six-shooter. He can fan the Peacekeeper’s hammer to swiftly unload the entire cylinder.',
            ability2_desc: 'McCree dives in the direction he’s moving, effortlessly reloading his Peacekeeper in the process.',
            ability3_desc: 'McCree heaves a blinding grenade that explodes shortly after it leaves his hand. The blast staggers enemies in a small radius.',
            ability4_desc: 'Focus. Mark. Draw. McCree takes a few precious moments to aim; when he’s ready to fire, he shoots every enemy in his line of sight. The weaker his targets are, the faster he’ll line up a killshot.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-peacekeeper',
            ability2_path: '/hero/ability-combat-roll',
            ability3_path: '/hero/ability-flashbang',
            ability4_path: '/hero/ability-deadeye',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Offensive'
        }, 
        {   img: "/mei/icon-portrait.png",           
            name: 'Mei',

            ability1_name: 'Endothermic Blaster', 
            ability2_name: 'Cryo-Freeze', 
            ability3_name: 'Ice Wall', 
            ability4_name: 'Blizzard',
            
            passive_name:  'Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team\'s movements with an Ice Wall.',
            ability1_desc: 'Mei’s blaster unleashes a concentrated, short-range stream of frost that damages, slows, and ultimately freezes enemies in place. Mei can also use her blaster to shoot icicle-like projectiles at medium range.',
            ability2_desc: 'Mei instantly surrounds herself with a block of thick ice. She heals and ignores damage while encased, but cannot move or use abilities.',
            ability3_desc: 'Mei generates an enormous ice wall that obstructs lines of sight, stops movement, and blocks attacks.',
            ability4_desc: 'Mei deploys a weather-modification drone that emits gusts of wind and snow in a wide area. Enemies caught in the blizzard are slowed and take damage; those who linger too long are frozen solid.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-endothermic-blaster',
            ability2_path: '/hero/ability-cryo-freeze',
            ability3_path: '/hero/ability-ice-wall',
            ability4_path: '/hero/ability-blizzard',
            
            ability_count: 4,
            difficulty: 3,
            role: 'Defense'
        },
        {   img: "/mercy/icon-portrait.png",         
            name: 'Mercy',

            ability1_name: 'Caduceus Staff', 
            ability2_name: 'Caduceus Blaster', 
            ability3_name: 'Guardian Angel', 
            ability4_name: 'Resurrect',
            ability5_name: 'Angelic Descent',
            ability6_name: 'Valkyrie',
            
            passive_name:  'Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.',
            ability1_desc: 'Mercy engages one of two beams that connect to an ally. By maintaining the beams, she can either restore that ally’s health or increase the amount of damage they deal.',
            ability2_desc: 'Mercy shoots a round from her sidearm.',
            ability3_desc: 'Mercy flies towards a targeted ally, allowing her to reach them quickly and provide assistance in crucial moments.',
            ability4_desc: 'Mercy brings a dead ally back into the fight with full health.',
            ability5_desc: 'Propelled by her Valkyrie suit, Mercy slows the speed of her descent from great heights.',
            ability6_desc: 'Gain the ability to fly. Mercy’s abilities are enhanced.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-caduceus-staff',
            ability2_path: '/hero/ability-caduceus-blaster',
            ability3_path: '/hero/ability-guardian-angel',
            ability4_path: '/hero/ability-resurrect',
            ability5_path: '/hero/ability-angelic-descent',
            ability6_path: '/hero/ability-valkyrie',
            
            ability_count: 6,
            difficulty: 1,
            role: 'Support'
        }, 
        {   img: "/moira/icon-portrait.png",         
            name: 'Moira',

            ability1_name: 'Biotic Grasp', 
            ability2_name: 'Biotic Orb', 
            ability3_name: 'Fade', 
            ability4_name: 'Coalescence',
            
            passive_name:  'Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies.',
            ability1_desc: 'Using her left hand, Moira expends biotic energy to heal allies in front of her. Her right hand fires a long-range beam weapon that saps enemies’ health, healing Moira and replenishing her biotic energy.',
            ability2_desc: 'Moira launches a rebounding biotic sphere; she can choose between a regeneration effect that heals the allies it passes through, or a decay effect that deals damage to enemies.',
            ability3_desc: 'Moira quickly teleports a short distance.',
            ability4_desc: 'Moira channels a long-range beam that both heals allies and bypasses barriers to damage her enemies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-biotic-grasp',
            ability2_path: '/hero/ability-biotic-orb',
            ability3_path: '/hero/ability-fade',
            ability4_path: '/hero/ability-coalescence',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Support'
        },
        {   img: "orisa_icon.png",         
            name: 'Orisa',

            ability1_name: 'Fusion Driver', 
            ability2_name: 'Fortify', 
            ability3_name: 'Halt!', 
            ability4_name: 'Protective Barrier',
            ability5_name: 'Supercharger',
            
            passive_name:  'Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.',
            ability1_desc: 'Orisa’s automatic projectile cannon delivers sustained damage, but slows her movement while she fires it.',
            ability2_desc: 'Orisa temporarily reduces damage she takes, and cannot be affected by action-impairing effects. ',
            ability3_desc: 'Orisa launches a graviton charge which she can detonate, slowing nearby enemies and pulling them towards the explosion.',
            ability4_desc: 'Orisa throws out a stationary barrier that can protect her and her allies from enemy fire.',
            ability5_desc: 'Orisa deploys a device to increase damage inflicted by allies within her line of sight.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-fusion-driver',
            ability2_path: '/hero/ability-fortify', 
            ability3_path: '/hero/ability-halt',
            ability4_path: '/hero/ability-protective-barrier',
            ability5_path: '/hero/ability-supercharger',
            
            ability_count: 5,
            difficulty: 2,
            role: 'Tank'
        }, 
        {   img: "pharah_icon.png",        
            name: 'Pharah',

            ability1_name: 'Rocket Launcher', 
            ability2_name: 'Jump Jet', 
            ability3_name: 'Concussive Blast', 
            ability4_name: 'Barrage',
            
            passive_name:  'Soaring through the air in her combat armor, and armed with a launcher that lays down high-explosive rockets, Pharah is a force to be reckoned with.',
            ability1_desc: 'Pharah’s primary weapon launches rockets that deal significant damage in a wide blast radius.',
            ability2_desc: 'Propelled by her suit’s thrusters, Pharah soars high into the air.',
            ability3_desc: 'Pharah looses a wrist rocket that knocks back any enemies it strikes.',
            ability4_desc: 'Pharah directs a continuous salvo of mini-rockets to destroy groups of enemies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-rocket-launcher',
            ability2_path: '/hero/ability-jump-jet',
            ability3_path: '/hero/ability-concussive-blast',
            ability4_path: '/hero/ability-barrage',
            
            ability_count: 4,
            difficulty: 1,
            role: 'Offensive'
        },        
           
        {   img: "reaper_icon.png",        
            name: 'Reaper',

            ability1_name: 'HELLFIRE SHOTGUNS', 
            ability2_name: 'WRAITH FORM', 
            ability3_name: 'SHADOW STEP', 
            ability4_name: 'DEATH BLOSSOM',
            
            passive_name:  'Hellfire Shotguns, the ghostly ability to become immune to damage, and the power to step between shadows make Reaper one of the deadliest beings on Earth.',
            ability1_desc: 'Reaper tears enemies apart with twin shotguns.',
            ability2_desc: 'Reaper becomes a shadow for a short period of time. While in this form, he takes no damage and is able to pass through enemies, but cannot fire his weapons or use other abilities.',
            ability3_desc: 'After marking a destination, Reaper disappears and reappears at that location.',
            ability4_desc: 'In a blur of motion, Reaper empties both Hellfire Shotguns at breakneck speed, dealing massive damage to all nearby enemies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-hellfire-shotguns',
            ability2_path: '/hero/ability-wraith-form',
            ability3_path: '/hero/ability-shadow-step',
            ability4_path: '/hero/ability-death-blossom',
            
            ability_count: 4,
            difficulty: 1,
            role: 'Offense'
        }, 
            
        {   img: "reinhard_icon.png",      
            name: 'Reinhard',

            ability1_name: 'ROCKET HAMMER', 
            ability2_name: 'BARRIER FIELD', 
            ability3_name: 'CHARGE', 
            ability4_name: 'FIRE STRIKE',
            ability5_name: 'EARTHSHATTER',

            passive_name:  'Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.',
            ability1_desc: 'Reinhardt’s Rocket Hammer is an exemplary melee weapon, able to deal punishing damage in a wide arc with every swing.',
            ability2_desc: 'Reinhardt projects a broad, forward-facing energy barrier, which can absorb substantial damage before it is destroyed. Though Reinhardt can protect himself and his companions behind the barrier, he cannot attack while sustaining it.',
            ability3_desc: 'Reinhardt charges forth in a straight line, pinning the first enemy in his path and knocking others aside. If he collides with a wall, the foe he’s carrying suffers extreme damage.',
            ability4_desc: 'By whipping his Rocket Hammer forward, Reinhardt slings a flaming projectile which pierces and damages any enemies it touches.',
            ability5_desc: 'Reinhardt forcefully slams his Rocket Hammer into the ground, knocking down and damaging all enemies in front of him.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-rocket-hammer',
            ability2_path: '/hero/ability-barrier-field',
            ability3_path: '/hero/ability-charge',
            ability4_path: '/hero/ability-fire-strike',
            ability5_path: '/hero/ability-earthshatter',
            
            ability_count: 5,
            difficulty: 1,
            role: 'Tank'
        },
            
        {   img: "roadhog_icon.png",       
            name: 'Roadhog',

            ability1_name: 'SCRAP GUN', 
            ability2_name: 'TAKE A BREATHER', 
            ability3_name: 'CHAIN HOOK', 
            ability4_name: 'WHOLE HOG',
            
            passive_name:  'Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.',
            ability1_desc: 'Roadhog\'s Scrap Gun fires short-range blasts of shrapnel with a wide spread. Alternatively, it can launch a shrapnel ball that detonates farther away, scattering metal fragments from the point of impact.',
            ability2_desc: 'Roadhog restores a chunk of his health over a brief period of time.',
            ability3_desc: 'Roadhog hurls his chain at a target; if it catches, he yanks them into close range.',
            ability4_desc: 'After cramming a top-loader onto his Scrap Gun, Roadhog pours in ammo. For a short time, he can crank out a stream of shrapnel that knocks back enemies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-scrap-gun',
            ability2_path: '/hero/ability-take-a-breather',
            ability3_path: '/hero/ability-chain-hook',
            ability4_path: '/hero/ability-whole-hog',
            
            ability_count: 4,
            difficulty: 1,
            role: 'Tank'
        }, 
            
        {   img: "soldier_icon.png",       
            name: 'Soldier 76',

            ability1_name: 'HEAVY PULSE RIFLE', 
            ability2_name: 'HELIX ROCKETS', 
            ability3_name: 'SPRINT', 
            ability4_name: 'BIOTIC FIELD',
            ability5_name: 'TACTICAL VISOR',
            
            passive_name:  'Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.',
            ability1_desc: 'Soldier: 76’s rifle remains particularly steady while unloading fully-automatic pulse fire.',
            ability2_desc: 'Tiny rockets spiral out of Soldier: 76’s Pulse Rifle in a single burst. The rockets’ explosion damages enemies in a small radius.',
            ability3_desc: 'Whether he needs to evade a firefight or get back into one, Soldier: 76 can rush ahead in a burst of speed. His sprint ends if he takes an action other than charging forward.',
            ability4_desc: 'Soldier: 76 plants a biotic emitter on the ground. Its energy projection restores health to 76 and any of his squadmates within the field.',
            ability5_desc: 'Soldier: 76’s pinpoint targeting visor “locks” his aim on the threat closest to his crosshairs. If an enemy leaves his line of sight, Soldier: 76 can quickly switch to another target.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-heavy-pulse-rifle',
            ability2_path: '/hero/ability-helix-rockets',
            ability3_path: '/hero/ability-sprint',
            ability4_path: '/hero/ability-biotic-field',
            ability5_path: '/hero/ability-tactical-visor',
            
            ability_count: 5,
            difficulty: 1,
            role: 'Offense'
        },
            
        {   img: "sombra_icon.png",        
            name: 'Sombra',

            ability1_name: 'MACHINE PISTOL', 
            ability2_name: 'HACK', 
            ability3_name: 'STEALTH', 
            ability4_name: 'TRANSLOCATOR',
            ability5_name: 'EMP',
            
            passive_name:  'Stealth and debilitating attacks make Sombra a powerful infiltrator. Her hacking can disrupt her enemies, ensuring they\'re easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra’s ability to Translocate and camouflage herself makes her a hard target to pin down.',
            ability1_desc: 'Sombra’s fully-automatic machine pistol fires in a short-range spread.',
            ability2_desc: 'Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.',
            ability3_desc: 'Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage.',
            ability4_desc: 'Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).',
            ability5_desc: 'Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-machine-pistol',
            ability2_path: '/hero/ability-hack',
            ability3_path: '/hero/ability-stealth',
            ability4_path: '/hero/ability-translocator',
            ability5_path: '/hero/ability-emp',
            
            ability_count: 5,
            difficulty: 3,
            role: 'Offense'
        }, 
            
        {   img: "symmetra_icon.png",      
            name: 'Symmetra',

            ability1_name: 'PHOTON PROJECTOR', 
            ability2_name: 'SENTRY TURRET', 
            ability3_name: 'PHOTON BARRIER', 
            ability4_name: 'TELEPORTER',
            ability5_name: 'SHIELD GENERATOR',
            
            passive_name:  'Symmetra utilizes her light-bending Photon Projector to dispatch adversaries, shield her associates, construct teleportation pads and deploy particle-blasting Sentry Turrets.',
            ability1_desc: 'Symmetra’s weapon emits a short-range beam that homes in on a nearby enemy, dealing continuous damage that increases the longer it is connected. The projector can also release a charged energy ball that deals high damage.',
            ability2_desc: 'Symmetra sets up a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Several turrets can be built on the battlefield at once.',
            ability3_desc: 'Symmetra projects a moving barrier that absorbs damage as it travels forward.',
            ability4_desc: 'Symmetra places a teleporter exit pad at her current location, and connects it to a teleporter entry pad at her team’s starting point. Allies can travel through the entry pad to the exit pad instantly, enabling them to return to the fight swiftly after being defeated.',
            ability5_desc: 'Symmetra deploys a wide-radius generator that provides increased shielding to her entire team.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-photon-projector',
            ability2_path: '/hero/ability-sentry-turret',
            ability3_path: '/hero/ability-photon-barrier',
            ability4_path: '/hero/ability-teleporter',
            ability5_path: '/hero/ability-shield-generator',
            
            ability_count: 5,
            difficulty: 2,
            role: 'Support'
        },
            
        {   img: "torbjorn_icon.png",      
            name: 'Torbjorn',

            ability1_name: 'RIVET GUN', 
            ability2_name: 'FORGE HAMMER', 
            ability3_name: 'BUILD TURRET', 
            ability4_name: 'ARMOR PACK',
            ability5_name: 'MOLTEN CORE',
            
            passive_name:  'Torbjörn’s extensive arsenal includes a rivet gun and hammer, as well as a personal forge that he can use to build upgradeable turrets and dole out protective armor packs.',
            ability1_desc: 'Torbjörn fires rivets at long range, or ejects molten metal from his gun in a short, close-range burst.',
            ability2_desc: 'Torbjörn uses his multipurpose hammer to build, upgrade and repair turrets. In a pinch, it can also be swung as a weapon.',
            ability3_desc: 'Torbjörn constructs an enemy-tracking autocannon. He can use his Forge Hammer to repair or upgrade it, increasing its health and adding a second cannon barrel and a rocket launcher.',
            ability4_desc: 'Torbjörn deploys an armor upgrade; either he or his allies can pick it up to absorb some damage.',
            ability5_desc: 'After overheating his personal forge, Torbjörn gains a significant amount of armor and scrap. He also attacks (and builds and repairs turrets) far faster than normal.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-rivet-gun',
            ability2_path: '/hero/ability-forge-hammer',
            ability3_path: '/hero/ability-build-turret',
            ability4_path: '/hero/ability-armor-pack',
            ability5_path: '/hero/ability-molten-core',
            
            ability_count: 5,
            difficulty: 2,
            role: 'Defense'
        },
            
        {   img: "tracer_icon.png",        
            name: 'Tracer',

            ability1_name: 'PULSE PISTOLS', 
            ability2_name: 'BLINK', 
            ability3_name: 'RECALL', 
            ability4_name: 'PULSE BOMB',
            
            passive_name:  'Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to "blink" through space and rewind her personal timeline as she battles to right wrongs the world over.',
            ability1_desc: 'Tracer rapid-fires both of her pistols.',
            ability2_desc: 'Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.',
            ability3_desc: 'Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.',
            ability4_desc: 'Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-pulse-pistols',
            ability2_path: '/hero/ability-blink',
            ability3_path: '/hero/ability-recall',
            ability4_path: '/hero/ability-pulse-bomb',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Offense'
        },
            
        {   img: "widowmaker_icon.png",    
            name: 'Widowmaker',

            ability1_name: 'WIDOW’S KISS', 
            ability2_name: 'GRAPPLING HOOK', 
            ability3_name: 'VENOM MINE', 
            ability4_name: 'INFRA-SIGHT',
            
            passive_name:  'Widowmaker equips herself with whatever it takes to eliminate her targets, including mines that dispense poisonous gas, a visor that grants her squad infra-sight, and a powerful sniper rifle that can fire in fully-automatic mode.',
            ability1_desc: 'Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets. Should targets close to medium range, the rifle can also be fired in fully-automatic mode.',
            ability2_desc: 'Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.',
            ability3_desc: 'Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.',
            ability4_desc: 'Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-widows-kiss',
            ability2_path: '/hero/ability-grappling-hook',
            ability3_path: '/hero/ability-venom-mine',
            ability4_path: '/hero/ability-infra-sight',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Defense'
        },
            
        {   img: "winston_icon.png",       
            name: 'Winston',

            ability1_name: 'TESLA CANNON', 
            ability2_name: 'JUMP PACK', 
            ability3_name: 'BARRIER PROJECTOR', 
            ability4_name: 'PRIMAL RAGE',
            
            passive_name:  'Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.',
            ability1_desc: 'Winston’s weapon fires a short-range electric barrage for as long as he holds down the trigger.',
            ability2_desc: 'Assisted by his energy pack, Winston lunges through the air, dealing significant damage and staggering nearby enemies when he lands.',
            ability3_desc: 'Winston’s barrier projector extends a bubble-shaped field that absorbs damage until it\'s destroyed. Allies protected by the barrier can return fire from within it.',
            ability4_desc: 'Winston embraces his animal nature, significantly boosting his health and making him very difficult to kill, strengthening his melee attack, and allowing him to use his Jump Pack ability more frequently. While raging, Winston can only make melee and Jump Pack attacks.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-tesla-cannon',
            ability2_path: '/hero/ability-jump-pack',
            ability3_path: '/hero/ability-barrier-projector',
            ability4_path: '/hero/ability-primal-rage',
            
            ability_count: 4,
            difficulty: 2,
            role: 'Tank'
        },
            
        {   img: "zarya_icon.png",         
            name: 'Zarya',

            ability1_name: 'PARTICLE CANNON', 
            ability2_name: 'PARTICLE BARRIER', 
            ability3_name: 'PROJECTED BARRIER', 
            ability4_name: 'GRAVITON SURGE',
            
            passive_name:  'Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.',
            ability1_desc: 'Zarya’s mighty Particle Cannon unleashes a short-range beam of destructive energy. Alternatively, Zarya can lob an explosive charge to strike multiple opponents.',
            ability2_desc: 'The Particle Cannon can emit a personal barrier that shields Zarya against incoming attacks, redirecting their energy to enhance her weapon’s damage and the width of its beam.',
            ability3_desc: 'Zarya surrounds one of her teammates with an energy barrier that simultaneously absorbs fire and boosts the power of her Particle Cannon.',
            ability4_desc: 'Zarya launches a gravity bomb that draws in enemy combatants and deals damage while they’re trapped.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-particle-cannon',
            ability2_path: '/hero/ability-particle-barrier',
            ability3_path: '/hero/ability-projected-barrier',
            ability4_path: '/hero/ability-gravition-surge',
            
            ability_count: 4,
            difficulty: 3,
            role: 'Tank'
        },
            
        {   img: "zenyatta_icon.png",      
            name: 'Zenyatta',

            ability1_name: 'ORB OF DESTRUCTION', 
            ability2_name: 'ORB OF HARMONY', 
            ability3_name: 'ORB OF DISCORD', 
            ability4_name: 'TRANSCENDENCE',
            
            passive_name:  'Zenyatta calls upon orbs of harmony and discord to heal his teammates and weaken his opponents, all while pursuing a transcendent state of immunity to damage.',
            ability1_desc: 'Zenyatta projects his destructive energy orbs either individually, or in a rapid-fire volley after a few seconds spent gathering power.',
            ability2_desc: 'Zenyatta casts an orb over the shoulder of a targeted ally. So long as Zenyatta maintains line of sight, the orb slowly restores health to his ally. Only one ally can receive the orb\'s benefit at a time.',
            ability3_desc: 'Attaching the orb of discord to an opponent amplifies the amount of damage they receive for as long as Zenyatta maintains line of sight. Only one opponent can suffer the orb\'s effects at a time.',
            ability4_desc: 'Zenyatta enters a state of heightened existence for a short period of time. While transcendent, Zenyatta cannot use abilities or weapons, but is immune to damage and automatically restores his health and that of nearby allies.',
            
            passive_path:  '/hero/intro-video.webm',
            ability1_path: '/hero/ability-orb-of-destruction',
            ability2_path: '/hero/ability-orb-of-harmony',
            ability3_path: '/hero/ability-orb-of-discord',
            ability4_path: '/hero/ability-transcendence',
            
            ability_count: 4,
            difficulty: 3,
            role: 'Support'
        },  
    ],
    heroes_path: 'https://d1u1mce87gyfbn.cloudfront.net/hero',
    test: {}
}

const getters = {
    getHeroes: (state) => { 
        return state.heroes;
    },

    getHeroesPath: (state) => { 
        return state.heroes_path;
    }
}

export default{
    state: state,
    getters
}   