<template>
    <div>
        <router-view name="Nav" id="navRouter"></router-view>          
        <transition name="fade">
            <router-view id="appRouter"></router-view>
        </transition>
    </div>
</template>
<script>
    export default {}
</script>

<style lang="sass" scoped>
    .fade-enter-active, .fade-leave-active
        transition: all .6s
    .fade-enter, .fade-leave-to
        opacity: 0
</style>