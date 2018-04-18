//Importing components
import NavBar  from './../components/Nav';
import Index   from './../pages/Index.vue';
import Players from './../pages/Players.vue';
import Heroes  from './../pages/Heroes.vue';

//Exporting router to the router.js
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
        path: '/Player/:playerQuery',
        name: 'player',
        components: {
            default: Players,
            Nav: NavBar
        } 
    },
    {
        path: '/Hero/:heroQuery?',
        name: 'hero',
        components: { 
            default: Heroes,
            Nav: NavBar
        }
    },      
]
