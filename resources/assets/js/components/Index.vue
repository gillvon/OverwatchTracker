<template>
    <div>
        <div id="blur-top-left"></div>
        <div id="blur-bottom-right"></div>

        <div id="small-logo-container" >
            <img id="small-logo" src="../../img/small-logo.png">
            <img id="small-logo-black" src="../../img/small-logo-black.png">
        </div>
        <div id="search-label-container">
            <h3 id="search-label">Overwatch Statistics & Leaderboards</h3>
        </div>
        <div id="search-input-container">
            <form id="search-form" method="get" action="">
                <div class="form-group has-feedback">
                    <input type="text" id="search-form-input" name="searchPlayer" class="form-control" placeholder="Search Player...">
                    <i class="fas fa-search form-control-feedback"></i>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
         mounted() {
            
        }
    }
</script>

<style>
@import 'index.scss';
</style>

