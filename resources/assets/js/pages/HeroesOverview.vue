<template>
  <div>
    <main>

        <div class="Hero" v-for="i in allHeroes">
            <img :src="path + '/' + i.img">
        </div>
        
    </main>

  </div> 
</template>

<script>
    export default {
        
        data(){
            return{
                allHeroes: this.$store.getters.getHeroes,
                path: this.$store.getters.getHeroesPath
            }
        },

        mounted(){
            console.log(this.path);
        }
        
    }
</script>


<style lang="sass" scoped>
  @import '../../sass/sass/heroes.sass'
</style>

