// Importing components
import NavBar   from './../components/Nav';
import Index    from './../pages/Index.vue';
import Players  from './../pages/Players.vue';
import Heroes   from './../pages/Heroes.vue';
import HeroesOverview   from './../pages/HeroesOverview.vue';
import notFound from './../pages/notFound.vue';

// Exporting router to the router.js
export default [
    {
        path: '/',
        name: 'home',
        components: {
            default: Index,
            Nav: NavBar
        }
    },
    {
        path: '/Player/:region/:platform/:player',
        name: 'player',
        components: {
            default: Players,
            Nav: NavBar
        } 
    },
    {
        path: '/Hero/:hero',
        name: 'hero',
        components: { 
            default: Heroes,
            Nav: NavBar
        }
    },  
    {
        path: '/Hero',
        name: 'heroOverview',
        components: { 
            default: HeroesOverview,
            Nav: NavBar
        }
    },  
     { path: '*', component: notFound },
]
