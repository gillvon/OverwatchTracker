<template>
    <div style="overflow: hidden">
         <video loop autoplay style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.2) ; height: 100vh; width: 100vw;">
            <source :src="'/vid/ana.mp4'" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- <div id="blur-top-left"></div>
        <div id="blur-bottom-right"></div> -->

        <div class="index">
            <img id="small-logo" src="../../img/small-logo.png">
            <h3 id="search-label">Overwatch Statistics & Leaderboards</h3>
            <form id="search-form" role="search" method="POST" @submit.prevent="onSubmit">
                <div class="form-group has-feedback">
                    <div class="playerSearch-wrapper"> <!-- t zelfde stylens als de input -->
                        <input type="text" id="search-form-input" name="searchPlayer" class="form-control searchPlayer" placeholder="Search Player..."  v-model="search">
                        <div id="searchIcon-wrapper">
                            <i class="fas fa-search searchPlayer-icon"></i>
                            <span class="regionPlatform-button" v-on:click="switchRegion">{{ region }} / {{ platform }}</span>
                        </div>
                        <div class="regionPlatform-control" v-show="false">
                                <ul class="region-list">
                                    <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">EU</span></li>
                                    <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">US</span></li>
                                    <li class="list-button"><span class="regionPlatform-button" v-on:click="setRegion">ASIA</span></li>
                                </ul>
                                <ul class="platform-list">
                                    <li class="list-button"><span class="regionPlatform-button" v-on:click="setPlatform">PC</span></li>
                                    <li class="list-button"><span class="regionPlatform-button" v-on:click="setPlatform">PSN</span></li>
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
                isOpen: false,
                region: 'EU',
                platform: 'PC'
            }
        },

         mounted() {
             // focus maken voor speler search form
             $('input').focus(function(){
                    $(this).parent('div').toggleClass('playerSearch-wrapper-focus')
                }).blur(function(){
                    $(this).parent('div').toggleClass('playerSearch-wrapper-focus')
            });
        },

        methods: {
            onSubmit() {
                this.$router.push('/Player/'+this.search);
            },

            switchRegion() {
                this.isOpen = !this.isOpen
                if(this.isOpen == true) {
                    $('.regionPlatform-control').css('display','block')
                } else {
                    $('.regionPlatform-control').css('display','none')
                }
            },

            setRegion(e) {
                this.region = e.target.innerHTML;
            },

            setPlatform(e) {
                this.platform = e.target.innerHTML;
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../sass/sass/index.sass"
</style>
