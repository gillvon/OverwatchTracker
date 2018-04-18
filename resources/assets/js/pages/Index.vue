<template>
    <div style="overflow: hidden">
        <video loop autoplay style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(1.1) ; height: 100vh; width: 100vw;">
            <source :src="'/vid/genji.mp4'" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <!-- <div id="blur-top-left"></div> -->
        <!-- <div id="blur-bottom-right"></div> -->

        <div class="index">
            <img id="small-logo" src="../../img/small-logo.png">
            <h3 id="search-label">Overwatch Statistics & Leaderboards</h3>
            <form id="search-form" role="search" method="POST" @submit.prevent="onSubmit">
                <div class="form-group has-feedback">
                    <input type="text" id="search-form-input" name="searchPlayer" class="form-control" placeholder="Search Player..."  v-model="search">
                    <i class="fas fa-search form-control-feedback"></i>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return{
                search: ''
            }
        },

        mounted() {
             $('#esportsData').popover();
        },

        methods: {
            onSubmit(){
                this.$router.push('/Player/' + this.search);
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../../sass/sass/index.sass"
</style>
