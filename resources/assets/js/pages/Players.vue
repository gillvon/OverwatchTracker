<template><div>
<div id="players-body">
    <div id="background">
      <div id="icon-container">
        <img :src="results.icon" class="img-fluid" id="player-icon" /> 
      </div>
      <div id="name-container">
        <p id="name">{{ results.name }}</p>
        <p id="update-time">UPDATED: 4 HOURS AGO</p>
        <div id="level-id-container">
          <div id="level"><p>{{ results.level }}</p> 
            <div id="star-container">
              <i class="fas fa-star" v-for="i in results.prestige"></i>
            </div>
          </div>
          <p id="id">{{ displayId }}</p>
        </div>
      </div>
      <div id="rank-container">
        <img v-if="results.ratingIcon.length != 0"  :src="results.ratingIcon" id="rank-img" />
        <p id="rank-number">{{ results.rating }}</p>
      </div>
      <div id="tab-hero-container">
        <div id="hero-alter">
          <div id="hero-part1" class="hero-parts"><p>#1 &nbsp; Hanzo</p></div>
          <div id="hero-part2" class="hero-parts"></div>
          <div id="hero-img-container">
            <img :src="'../../../images/Hero-Models/Hanzo.png'" id="hero-img" />
          </div>
        </div>
        <div id="pull-tab-container">
          <span id="pull-tab">
            <span class="line-long"></span>
            <span class="line-long"></span>
            <span id="line-short"></span>
          </span>
        </div>
      </div>

    </div>

    <div class="container">
      <div id="buttons-container">
        <span id="refresh-button" class="button" @click="refresh()"><p id="refresh-loader-text" v-show="showText">Refresh</p><img id="refresh-loader" :src="'../../../temp/5.svg'" v-show="isLoading"/></span>
        <span id="real-rank-button" class="button">Real Rank</span>
      </div>

  
      <div id="stats-container">
        <p>Featured stats</p>
        <div id="kills-wrapper" class="stats">
          <img :src="'../../../images/Player-Page-Icons/kills.png'" id="kills-img" class="stats-img"/>
          <p class="stats-number" >{{ results.competitiveStats.careerStats.allHeroes.combat.eliminations }}</p>
          <p class="stats-info">Eliminations</p>
        </div>
        <div id="deaths-wrapper" class="stats">
          <img :src="'../../../images/Player-Page-Icons/deaths.png'" id="deaths-img" class="stats-img"/>
          <p class="stats-number">{{ results.competitiveStats.careerStats.allHeroes.combat.deaths }}</p>
          <p  class="stats-info">Deaths</p>
        </div>
        <div id="damage-wrapper" class="stats">
          <img :src="'../../../images/Player-Page-Icons/damage.png'" id="damage-img" class="stats-img"/>
          <p class="stats-number">{{ results.competitiveStats.careerStats.allHeroes.combat.damageDone }}</p>
          <p  class="stats-info">Damage Done</p>
        </div>
        <div id="healing-wrapper" class="stats">
          <img :src="'../../../images/Player-Page-Icons/heal.png'" id="heal-img" class="stats-img"/>
          <p class="stats-number">{{ healing }}</p>
          <p  class="stats-info">Healing Done</p>
        </div>
      </div>

      <div id="hero-container">
        <p>Hero Comparison</p>
        <ul id="hero-comparison">
          <li v-for="(hero, index) in timePlayedHeroes.slice(1,6)" >
            <div class="hero-comparison-name-wrapper">
              <p class="hero-comparison-name">{{ hero.name }}</p>   
            </div>
            <img class="hero-comparison-img"  />
            <div class="progress">
              <div class="progress-bar hero-comparison-bar"  role="progressbar" aria-valuenow="70" :id="'HEROTHING_' + index"
              aria-valuemin="0" aria-valuemax="100">
            </div>
            </div>
          </li>
          <li id="view-more"><p>View More</p></li>
        </ul>
      </div>
    </div>



    <div id="overview-container">
      <div id="roles-container">
        <ul id="roles">
            <li class="title"><div id="roles-title"><p>Roles</p></div></li>
            <li class="role-info"><img :src="'../../../images/Player-Page-Icons/offensive.png'" class="role-icons" />Offense</li>
            <li class="role-info"><img :src="'../../../images/Player-Page-Icons/defense.png'" class="role-icons" />Defense</li>
            <li class="role-info"><img :src="'../../../images/Player-Page-Icons/tank.png'" class="role-icons" />Tank</li>
            <li class="role-info"><img :src="'../../../images/Player-Page-Icons/support.png'" class="role-icons" />Support</li>
        </ul>
          
        <ul id="role-stats">
            <li class="role-stats-games">500 Games Played</li>
            <li class="role-stats-winrate">79.08% Winrate</li>

            <li class="role-stats-games">98 Games Played</li>
            <li class="role-stats-winrate">49.23% Winrate</li>

            <li class="role-stats-games">67 Games Played</li>
            <li class="role-stats-winrate">34.99% Winrate</li>

            <li class="role-stats-games">124 Games Played</li>
            <li class="role-stats-winrate">56.18% Winrate</li>
        </ul>
      </div>

      <div id="game-stats-container">
        <ul id="game-stats">
            <li class="title"><div id="game-stats-title"><p>Overall Game Stats</p></div></li>
            <li class="stats-info-li"><p class="stats-info">Time Played</p></li>
            <li class="stats-info-li"><p class="stats-info">GamesPlayed</p></li>
            <li class="stats-info-li"><p class="stats-info">Games Won</p></li>
            <li class="stats-info-li"><p class="stats-info">Games Tied</p></li>
            <li class="stats-info-li"><p class="stats-info">Games Lost</p></li>
        </ul>
        <ul id="stats-time">
            <li class="stats-time-played">{{ results.competitiveStats.careerStats.allHeroes.game.timePlayed }}</li>
            <li class="stats-time-played">{{ results.competitiveStats.careerStats.allHeroes.game.gamesPlayed }} Games</li>
            <li class="stats-time-played">{{ results.competitiveStats.careerStats.allHeroes.game.gamesWon }} Games</li>
            <li class="stats-time-played">{{ results.competitiveStats.careerStats.allHeroes.game.gamesPlayed - results.competitiveStats.careerStats.allHeroes.game.gamesLost - results.competitiveStats.careerStats.allHeroes.game.gamesWon }} Games</li>
            <li class="stats-time-played">{{ results.competitiveStats.careerStats.allHeroes.game.gamesLost }} Games</li>
        </ul>
      </div>
    </div>
</div>
</div></template>

<script>
export default {
  data(){
    return {
      results: [],
      region: '',
      platform: '',
      player: '',
      hash: '',
      api: '',
      displayId: '',
      isLoading: false,
      showText: true,
      healing: 0,
      timePlayedHeroes: [],
    }
  },

  mounted() {
    this.region   = this.$route.params.region;
    this.platform = this.$route.params.platform;
    this.player   = this.$route.params.player;
    this.hash     = this.$route.hash;
    this.api      = 'https://playoverwatch.com/it-it/search/account-by-name/' + this.player;

    switch (this.platform) {
      case "XBOX":
          this.platform = "XBL";
          break;
      case "PS":
          this.platform = "PSN";
          break;
      case "PC":
          this.platform = "PC";
          break;
    }    
    this.getData();
  },

  methods: {
    refresh() {
      var _this = this;
      this.showText  = false;
      this.isLoading = true;
      setTimeout(function() {
        _this.showText  = true;
        _this.isLoading = false;
      }, 2000);
    },

    getData() {
      this.displayId = this.hash;
      var displayName =  this.hash.replace('#','-');
      this.platform = this.platform.toLowerCase();
      if(this.platform == "xbl" || this.platform == "psn") {
        var apiStats = 'https://ow-api.com/v1/stats/'+ this.platform +'/GLOBAL/'+ this.player + displayName +'/complete';
      } else {
        var apiStats = 'https://ow-api.com/v1/stats/'+ this.platform +'/'+ this.region +'/'+ this.player + displayName +'/complete';
      }
      // Haal alle data op van de speler
      apiStats = apiStats.split('/').join('_'); 
      console.log(apiStats)
      axios.get("/api/getCompleteData/"+apiStats).then(response =>  {
        console.log(response);
        this.results = response.data;
        this.checkStars();
        this.calcAvgHeal();
        this.calcTimePlayed();
      });
    },

    checkStars() {
      if(this.results.prestige > 17) {
        $('#star-container').addClass('platinum');
      } else if(this.results.prestige > 12) {
        $('#star-container').addClass('gold');
      } else if(this.results.prestige > 6) {
        $('#star-container').addClass('silver');
      }
    },  

    calcAvgHeal() {
      for(var key in this.results.competitiveStats.careerStats){
        if(isNaN(this.results.competitiveStats.careerStats[key].heroSpecific.selfHealing)) {
          if(isNaN(this.results.competitiveStats.careerStats[key].assists.healingDone)) {
              // nothing
          } else {
            this.healing += this.results.competitiveStats.careerStats[key].assists.healingDone
          }
        } else if(!isNaN(this.results.competitiveStats.careerStats[key].assists.healingDone)) {
          this.healing += this.results.competitiveStats.careerStats[key].assists.healingDone + this.results.competitiveStats.careerStats[key].heroSpecific.selfHealing;
        } else {
          this.healing += this.results.competitiveStats.careerStats[key].heroSpecific.selfHealing;
        }
      }
    },

    calcTimePlayed() {
      var _this = this;
      for(var key in this.results.competitiveStats.careerStats) {
        if(this.results.competitiveStats.careerStats[key].game.timePlayed.includes("minut") || this.results.competitiveStats.careerStats[key].game.timePlayed.includes("minuts")) {
          this.timePlayedHeroes.push({"name": key, "time": Number(this.results.competitiveStats.careerStats[key].game.timePlayed.replace(/\D/g,'')) / 60});
        } else if(this.results.competitiveStats.careerStats[key].game.timePlayed.includes("seconds")){
          console.log(this.results.competitiveStats.careerStats[key].game.timePlayed.replace(/[^\d.-]/g, ''));
          this.timePlayedHeroes.push({"name": key, "time": Number(this.results.competitiveStats.careerStats[key].game.timePlayed.replace(/[^\d.-]/g, '')) / 3600 });
        } else {
          this.timePlayedHeroes.push({"name": key, "time": Number(this.results.competitiveStats.careerStats[key].game.timePlayed.replace(/\D/g,''))});
        }
      }


      this.timePlayedHeroes = lodash.orderBy(this.timePlayedHeroes, ['time'], ['desc']);

      setTimeout(() => {
        for(var hero in _this.timePlayedHeroes) {
          var test = this.timePlayedHeroes[hero].time / _this.timePlayedHeroes[0].time * 100 + '%';
          $("#HEROTHING_" + hero).css('width', test);
        }
      }, 100)
    },

    getWidth(time) {
      var _this = this;
      var _time = time
        return time / this.timePlayedHeroes[0].time * 100;
    }
  }
} 
</script>

<style lang="sass" scoped>
  @import "../../sass/sass/player.sass"
</style>

