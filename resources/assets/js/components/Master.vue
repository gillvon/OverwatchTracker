<template>
    <div>
        <router-view name="Nav" id="navRouter"></router-view>       
        <transition name="page" mode="out-in">               
            <router-view id="appRouter"></router-view>
        </transition>
        <div class="loading"></div>
    </div>
</template>

<style>

    .page-enter-active, .page-leave-active {
        transition: opacity 1s, transform 1s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
    }

    .loading{
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid transparent;
        border-top-color:white;
        border-radius: 100%;
        animation: spin 1.6s linear infinite;
        z-index: -10
    }

    @keyframes spin{
        0%{
            transform: translate(-50%, -50%) rotate(0);
        }
        100%{
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }


</style>


<script>
    export default {
    }
</script>