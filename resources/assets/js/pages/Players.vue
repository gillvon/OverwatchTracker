<template>

</template>

<script>
export default {
  mounted(){
    var url_stringArray = window.location.pathname.split( '/' );
    var searchedPlayer  = url_stringArray[2];
    var api             = 'https://playoverwatch.com/it-it/search/account-by-name/' + searchedPlayer;
    axios.get(api).then(response => {
      console.log(response);
      console.log(response.data);
      var apiStats = 'https://ow-api.com/v1/stats/'+ response.data[0].platform +'/global/'+ response.data[0].platformDisplayName +'/complete';
      console.log(apiStats);
      // Haal alle data op van de speler
      axios.get(apiStats).then(response => {
        console.log(response.data);
      });
    });
  }
}
</script>