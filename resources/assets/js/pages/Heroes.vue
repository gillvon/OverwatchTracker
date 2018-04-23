<template>
  <div>
    <header>
        <div class="video-wrapper">
          <video loop autoplay>
            <source :src="'/images/Heroes-Abilities/Genji/video-ability.webm'" type="video/webm">
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="hero-abilities">
          <ul>
            <li>
              <img src="/images/Heroes-Abilities/Genji/icon-right-menu.png" />
            </li>
          </ul>
        </div>

    </header>
    <main>
        
    </main>
  </div> 
</template>

<script>
  export default {
    mounted(){
          var url_stringArray = window.location.pathname.split( '/' );
          var searchedHero = url_stringArray[2]
          console.log(searchedHero)
    }
  }
</script>


<style lang="sass" scoped>
  @import '../../sass/sass/heroes.sass'
</style>

