<template>
  <div>
    <header>
        <div class="video-wrapper">
          <video loop autoplay>
            <source :src="'/images/Heroes-Abilities/Genji/video-ability.webm'" type="video/webm">
            Your browser does not support the video tag.
          </video>
        </div>

        <div class="header-bottom">
          <div class="hero-information">
            <img :src="'/images/Heroes/genji_icon.png'"  />
            <h1>Genji Shimada</h1>
          </div>
          <div class="hero-abilities">
            <ul>
              <li>
                <img src="/images/Heroes-Abilities/Genji/icon-right-menu.png" />
              </li>
              <li>
                <img src="/images/Heroes-Abilities/Genji/icon-ability.png" />
              </li>
              <li>
                <img src="/images/Heroes-Abilities/Genji/icon-ability (1).png" />
              </li>
              <li>
                <img src="/images/Heroes-Abilities/Genji/icon-ability (2).png" />
              </li> 
              <li>
                <img src="/images/Heroes-Abilities/Genji/icon-ability (3).png" />
              </li> 
            </ul>
          </div>
        </div>
    </header>
    <main>

      <div class="container">
        <div class="row">
          <div class="col-md-6 top-players">
            
            <div class="top-players-title">
              <h1>Top Genji Players</h1>
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

      <!-- - name
      - punten
      - rank
      - win%

      - kd
      - region
      - platform
      - timeplayed
         -->
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

</style>

