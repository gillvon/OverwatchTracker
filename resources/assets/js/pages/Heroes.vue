<template>
    <div>
      <header>
        <img :src="'/images/Wallpapers/hanamura-screenshot-003.jpg'" />

        <h1>SomePlayer</h1>

      </header>
      <main>
        
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