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
            ability3_name: 'Boostser', 
            ability4_name: 'Defense Matrix',
            ability5_name: 'Micro Missiles',
            
            passive_name:  'Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.',
            ability1_desc: 'In Recon mode, Bastion is fully mobile, outfitted with a submachine gun that fires steady bursts of bullets at medium range.',
            ability2_desc: 'In Sentry mode, Bastion is a stationary powerhouse equipped with a gatling gun capable of unleashing a hail of bullets. The gun\'s aim can be "walked" across multiple targets, dealing devastating damage at short to medium range.',
            ability3_desc: 'Bastion transforms between its two primary combat modes to adapt to battlefield conditions.',
            ability4_desc: 'Bastion restores its health; it cannot fire weapons while the repair process is in effect.',
            ability5_desc: 'In Tank mode, Bastion extends wheeled treads and a powerful long-range cannon. The cannon’s explosive shells demolish targets in a wide blast radius, but Bastion can only remain in this mode for a limited time.',
            
            passive_path:  '/dva/intro-video.webm',
            ability1_path: '/dva/ability-fusion-cannons',
            ability2_path: '/dva/ability-defense-matrix',
            ability3_path: '/dva/ability-micro-missiles',
            ability4_path: '/dva/ability-light-gun',
            ability5_path: '/dva/ability-boosters',
            ability6_path: '/dva/ability-self-destruct',
            ability7_path: '/dva/ability-call-mech',
            
            ability_count: 7,
            difficulty: 1,
            role: 'Defense'
        }, 
        {img: "doomfist_icon.png",      name: 'Doomfist'},
        {img: "genji_icon.png",         name: 'Genji'}, 
        {img: "hanzo_icon.png",         name: 'Hanzo'},
        {img: "junkrat_icon.png",       name: 'Junkrat'}, 
        {img: "lucio_icon.png",         name: 'Lucio'},
        {img: "mccree_icon.png",        name: 'Mccree'}, 
        {img: "mei_icon.png",           name: 'Mei'},
        {img: "mercy_icon.png",         name: 'Mercy'}, 
        {img: "moira_icon.png",         name: 'Moira'},
        {img: "orisa_icon.png",         name: 'Orisa'}, 
        {img: "pharah_icon.png",        name: 'Pharah'},
        {img: "reaper_icon.png",        name: 'Reaper'}, 
        {img: "reinhard_icon.png",      name: 'Reinhard'},
        {img: "roadhog_icon.png",       name: 'Roadhog'}, 
        {img: "soldier_icon.png",       name: 'Soldier 76'},
        {img: "sombra_icon.png",        name: 'Sombra'}, 
        {img: "symmetra_icon.png",      name: 'Symmetra'},
        {img: "torbjorn_icon.png",      name: 'Torbjorn'},
        {img: "tracer_icon.png",        name: 'Tracer'},
        {img: "widowmaker_icon.png",    name: 'Widowmaker'},
        {img: "winston_icon.png",       name: 'Winston'},
        {img: "zarya_icon.png",         name: 'Zarya'},
        {img: "zenyatta_icon.png",      name: 'Zenyatta'},
        ],
    heroes_path: 'https://d1u1mce87gyfbn.cloudfront.net/hero'
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