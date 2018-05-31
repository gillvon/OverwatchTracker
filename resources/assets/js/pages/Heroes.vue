<template>
  <div>
    <main>
        <div class="video-wrapper">
          <video id="start" class="video0" autoplay="autoplay" style="opacity: 1" @ended="nextVid(0)">
            <source :src="path + hero.passive_path" type="video/webm">
            Your browser does not support the video tag.
          </video>
          <script type="javascript">
            $('start').get(0).play();
          </script>
          <video v-for="i in hero.ability_count" :class="'video' + i" @ended="nextVid(i)">
            <source :src="path + hero['ability' + i + '_path'] + '/video-ability.webm'" type="video/webm">
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="header-bottom">
          <div class="hero-information">
            <div class="test">
              <img :src ="path + hero.img"  />
            </div>
            <h1>{{ hero.name }}</h1>
          </div>
          <div class="hero-abilities">
            <ul>
              <li @click="playVid(0)">
                <img :src="path + '/' + hero.name.toLowerCase() + '/icon-right-menu.png'" />
                <div class="ability-desc">
                  <header>
                    <h2>{{ hero['name'] }}</h2>
                    <div>
                      <i class="fas fa-star" v-for="i in hero.difficulty"></i>
                      <i class="far fa-star" v-if="hero.difficulty < 3"></i>
                      <i class="far fa-star" v-if="hero.difficulty < 2"></i>
                      <i class="far fa-star" v-if="hero.difficulty < 1"></i>                      
                    </div>
                  </header>
                  <hr>
                  <p>{{ hero['passive_name'] }}</p>
                </div>            
              </li>
              <li v-for="i in hero.ability_count" @click="playVid(i)">
                <img :src="path + hero['ability' + i + '_path'] + '/icon-ability.png'" />
                <div class="ability-desc">
                  <header>
                    <h2>{{ hero['ability' + i + '_name'] }}</h2>
                  </header>
                  <hr>
                  <p>{{ hero['ability' + i + '_desc'] }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </main>

    <!-- <main>
      <div class="container">
        <div class="row">
          <div class="col-md-6 top-players">
            
            <div class="top-players-title">
              <h1>Top {{ hero.name }} Players</h1>
            </div>
            <ul>
              <li>
                <div class="top-player">
                  <div class="top-player-bg" style="width: 40%"></div>
                  <ul class="top-player-extras">
                    <li>K/D</li>
                    <li>Winrate</li>
                    <li>Score</li>
                  </ul>
                  <div class="player-info">
                    <div class="player-info-extra">
                      <span>#1</span>
                      BestOfThePro
                    </div>
                    EU / PC 3000
                  </div>
                  <div class="player-stats">
                    23400
                  </div>
                </div>
              </li>
           
            </ul>
          </div>
        </div>
      </div>
    </main> -->
  </div> 
</template>

<script>
  export default {
    data() {
        return {
          hero: '',
          heroname: '',
          path: this.$store.getters.getHeroesPath,

          currentVid: 0,
        }
    },

    mounted(){
          var url_stringArray = window.location.pathname.split( '/' );
          var searchedHero = url_stringArray[2]
          console.log(searchedHero);

          var store = this.$store.getters.getHeroes;
          for(var i in store){
            if(store[i].name == searchedHero){
              this.hero = store[i];
              this.currentVid = 0;
              console.log(this.hero);
            }
          }

        $("video").preload = "auto";
    },

    methods: {
      playVid(a){
        this.resetVid();
        $(".video" + a).css('opacity', 1);
        $(".video" + a).get(0).currentTime = 0;        
        $(".video" + a).get(0).play();
        this.currentVid = a;
        console.log(this.currentVid);
      },

      nextVid(a){
        this.resetVid();
        // Ability limit
        if(this.currentVid + 1 > this.hero.ability_count){
          this.currentVid = -1;
        }
        this.playVid(++this.currentVid);
      },

      resetVid(){
        $("video").css('opacity', 0);        
        $("video").get(0).pause();
      }
    },

  }
</script>


<style lang="sass" scoped>

</style>

