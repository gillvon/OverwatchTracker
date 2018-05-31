<template>
    <div style="overflow: hidden">
        <div class="video-container">
            <video loop muted autoplay style="height: 1080px; width: 1920px;">
                <source :src="''" type="video/mp4" id="videoSrc">
                Your browser does not support the video tag.
            </video>
        </div>
        <!-- <div id="blur-top-left"></div>
        <div id="blur-bottom-right"></div> -->

        <div class="index">
            <img id="small-logo" :src="'images/small-logo.png'">
            <h3 id="search-label">Overwatch Statistics & Leaderboards</h3>
            <form id="search-form" role="search" method="POST" @submit.prevent="onSubmit"  v-click-outside="reset">
                <div class="form-group has-feedback">
                    <div class="playerSearch-wrapper" > <!-- t zelfde stylens als de input -->
                        <input type="text" id="search-form-input" name="searchPlayer" class="form-control searchPlayer" placeholder="Search Player..." autocomplete="off"  
                        v-model="search" 
                        @input="onChange"
                        @click="resetRegionPlatform"
                        @keydown.up="up"
                        @keydown.down="down"
                       >
                        <div id="searchIcon-wrapper">
                            <i class="fas fa-search searchPlayer-icon"></i>
                            <span class="regionPlatform-button" v-on:click="switchRegion" >{{ region }} / {{ platform }}</span>
                        </div>
                        <!-- search suggestions here  -->
                        <ul class="search-suggestions" v-show="isOpenPlayer">
                            <li style="display: none;" v-bind:class="{'active': isActive(0)}">
                            <li v-for="(item, index) in results.slice(0, 8)"
                                v-bind:class="{'active': isActive(index+1)}"
                                @click="confirm(item.name)">
                               <span>{{ item.name }} </span>                              
                            </li>
                        </ul>
                        <ul class="search-suggestions" v-show="noresults">
                            <li>
                                <i>?</i>
                                <small>We couldn't find that player..</small>
                            </li>
                        </ul>
                        <ul class="search-suggestions" v-show="loading">
                            <li>
                                <small>Loading...</small>
                            </li>
                        </ul>
                        <div class="regionPlatform-control" v-show="false">
                            <ul class="region-list">
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">EU</span></li>
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">US</span></li>
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">ASIA</span></li>
                            </ul>
                            <div class="vertical-hr-wrapper"><span class="vertical-hr"></span></div>
                            <ul class="platform-list">
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setPlatform">PC</span></li>
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setPlatform">PS</span></li>
                                <li class="list-button"><span class="regionPlatform-button" v-on:click="setPlatform">XBOX</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: '',
                oldSearch: '',
                api: '',
                isOpen: false,
                isOpenPlayer: false,
                current: 0,
                results: [],
                loading: false,
                total: 0,
                noresults: false,
                region: 'EU',
                platform: 'PC',
                axios: require('axios')
            }
        },

         mounted() {
            // focus maken voor speler search form
             $('#search-form-input').focus(function(){
                    $(this).parent('div').toggleClass('playerSearch-wrapper-focus')
                }).blur(function(){
                    $(this).parent('div').toggleClass('playerSearch-wrapper-focus')
            });

            // Video background randomizen
            var videos       = ['/vid/ana.webm', '/vid/genji.webm', '/vid/mercy.webm', '/vid/pharah.webm', '/vid/sombra.webm'];
            var randomNumber = Math.floor(Math.random() * videos.length);
            var newVidSrc    = videos[randomNumber];
            var seenVideos   = randomNumber;
            var videoCookie  = getCookie("video");

            if(checkCookie){
                if(videoCookie == randomNumber) {
                    var newNumber = randomNumber + 1;
                    if(newNumber == 5) {
                        newNumber = 0
                    } 
                    $('#videoSrc').attr('src', videos[newNumber]);
                    document.cookie  = 'video = '+newNumber+'; 3600; path=/';
                } else {
                    $('#videoSrc').attr('src', videos[randomNumber]);  
                    document.cookie  = 'video = '+randomNumber+'; 3600; path=/';                    
                }
            } else {
                document.cookie  = 'video = '+seenVideos+'; 3600; path=/';
            }

            function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i <ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }

            function checkCookie() {
                var username = getCookie("video");
                if (username != "") {
                    return true;
                } else {     
                    return false;
                }
            }
        },

        methods: {
            onSubmit() {
                this.$router.push('/Player/'+this.region+'/'+this.platform+'/'+this.search);
            },

            onChange() {
                var _this = this;
                this.isOpenPlayer = true;
                this.current = 0;
                this.api = 'https://playoverwatch.com/it-it/search/account-by-name/' + this.search;

                this.getData();
            },

            switchRegion() {
                this.isOpen = !this.isOpen; 
                if(this.isOpen == true) {
                    $('.regionPlatform-control').css('display','block');
                } else {
                    $('.regionPlatform-control').css('display','none');
                }
            },

            // Region stuff
            setRegion(e) {
                this.region = e.target.innerHTML;
            },

            setPlatform(e) {
                this.platform = e.target.innerHTML;
            },

            isActive(index) {
                return index === this.current;
            },

            up() {
                if(this.current > 1){
                    this.current--
                    this.search = this.results[this.current-1].name;
                }
            },

            down() {
                if(this.current < 9 - 1){
                    this.current++
                    this.search = this.results[this.current-1].name;                    
                }                
            },

            confirm(name) {
                this.search = name;
                this.onSubmit();
            },

           fetchData() {
                this.results = [];
               return new Promise(resolve => {
                   setTimeout(() => resolve(''),1000);
               })
           },

            async getData() {
                try {
                    // Reset results
                    this.results = [];
                    this.noresults = false;
                    if(this.search.length >= 3) { this.loading = true; }
                    const names = await this.fetchData();
                    const wes = await this.axios("api/getData/"+this.search);
                    // Results results again, cuz for some reason it doesn't work otherwise :thinking:
                    this.results = [];
                    this.noresults = false;
                    // Filter by given platform
                    switch(this.platform) {
                        case 'PC':
                            wes.data = wes.data.filter(x => x.platform === 'pc');
                            break;
                        case 'XBOX':
                            wes.data = wes.data.filter(x => x.platform === 'xbl');
                            break;
                        case 'PS':
                            wes.data = wes.data.filter(x => x.platform === 'psn');
                            break;                        
                    }
                    // Filter through array and show matching results with the search keyword
                    wes.data = wes.data.filter(x => x.name.toLowerCase().match(this.search.toLowerCase()));
                    // Filter array by name asc
                    wes.data = lodash.orderBy(wes.data, ['name', 'asc']);
                    // Chech when the results need to be displayed
                    if(this.search.length == 0) {
                        this.results = [];
                        this.noresults = false;
                    } else if(this.search.length >= 3) {
                        if(wes.data.length == 0) {
                            this.loading = false;
                            console.log(wes.data);
                            console.log(this.search);
                            this.noresults = true;
                        } else {
                            this.noresults = false;
                            this.results = wes.data;
                            console.log(wes.data);
                        }
                    }
                    this.loading = false;
                } catch (err) {
                    console.log(err);
                }
            },



            // Search suggestion resets
            reset(){
                if(this.isOpen == true) {
                    this.isOpen = false;
                    $('.regionPlatform-control').css('display','none'); 
                } else if(this.isOpenPlayer == true ) {
                    this.isOpenPlayer = false;
                    this.noresults = false;
                }
            },

            resetRegionPlatform() {
                 if(this.isOpen == true) {
                    this.isOpen = false; 
                    $('.regionPlatform-control').css('display','none'); 
                } 
            },

            resetPlayer() {
                if(this.isOpenPlayer == true) {
                    this.isOpenPlayer = false;                    
                }
            }
        },
    }
</script>

<style lang="sass" scoped>
    @import "../../sass/sass/index.sass"
</style>
