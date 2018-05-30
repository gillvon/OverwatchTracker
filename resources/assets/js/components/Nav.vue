<template>
    <div>
    <nav class="navbar navbar-default">
        <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/">
                <img alt="Brand" src="../../img/logo.png">
            </router-link>
        </div>
    
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            
            <form class="navbar-form navbar-right search" role="search" @submit.prevent="onSubmit" v-click-outside="reset">
                <div class="form-group has-feedback">
                    <input name="searchHero" ref="test" type="text" class="form-control" placeholder="Search Hero..." autocomplete="off" 
                        v-model="search"
                        @input="onChange"
                        @keydown.up="up"
                        @keydown.down="down">
                    <i class="fas fa-search form-control-feedback"></i>
                </div>
                <ul class="search-suggestions" v-show="isOpen">
                    <li class="search-suggestion" 
                        v-for="(item, index) in results.slice(0, 5)"
                        v-bind:class="{'active': isActive(index)}"
                        @click="confirm(item.name)">
                        <img :src="'/images/Heroes/' + item.img"  />
                        <span>{{ item.name }}</span>  
                    </li>
                </ul>
                <ul class="search-suggestions" v-show="noresults">
                    <li class="search-suggestion">
                        <i>?</i>
                        <small>We couldn't find that hero..</small>
                    </li>
                </ul>
            </form>
            

            <ul class="nav navbar-nav navbar-right">
            <li><a id="esportsData" data-toggle="popover" data-trigger="hover" data-content="Coming Soon!" rel="popover" data-placement="bottom" href="#">Esports</a></li> 
            <li><router-link to="/Hero/">Heroes</router-link></li>
            </ul> 
        </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
    </div>
</template>

<script>
    import Vue from 'vue';
    
    export default {
        data() {
            return {
                items: this.$store.getters.getHeroes,
                search: '',
                results: [],
                noresults: false,
                isOpen: false,
                current: 0
            }
        },
        
        mounted() {
            $('#esportsData').popover();      
        },

        methods: {
            onSubmit(){
                this.$router.push('/Hero/' + this.search);
                this.reset();
                this.search = "";
            },

            onChange() {
                this.isOpen = true;
                this.current = 0;
       
                if(this.search.length == 0){
                    this.results = [];
                    this.noresults = false;
                } else if(this.search.length >= 1) {
                    this.filterResults();
                    this.noresults = false;                                        
                }

                if(this.search.length >= 2 && this.results.length == 0){
                    this.noresults = true;
                }

            },

            filterResults() {
                // var test = this.items.filter(item => item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
                this.results = this.items.filter(item => item.name.toLowerCase().startsWith(this.search.toLowerCase()) == true || item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
            },

            isActive(index) {
                return index === this.current;
            },

            up() {
                if(this.current > 0){
                    this.current--
                    this.search = this.results[this.current].name;
                }
            },
            down() {
                if(this.current < 5 - 1){
                    this.current++
                    this.search = this.results[this.current].name;                    
                }                
            },

            confirm(name){
                this.search = name;
                this.onSubmit();
            },

            reset: function(){
                this.isOpen = false;
                this.noresults = false;
            }
        }
    }
</script>