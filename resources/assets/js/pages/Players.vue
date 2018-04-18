<template>
  <div>
    <h1>Player1</h1>
  </div>
</template>

<script>
  export default {
    mounted(){
          var url_stringArray = window.location.pathname.split( '/' );
          var searchedPlayer = url_stringArray[2]
          console.log(searchedPlayer)

          var xhttp = new XMLHttpRequest();
          xhttp.open("GET", "https://playoverwatch.com/it-it/search/account-by-name/BestOfThePro", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send();
          var response = JSON.parse(xhttp.responseText);
          console.log("JSON " + response)
    }
  }
</script>