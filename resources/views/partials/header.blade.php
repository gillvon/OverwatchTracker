<nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand " href="#"><img alt="Brand" src="{{ asset('images/logo.png') }}"></a>
      </div>
  
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-right" role="search">
          <div class="form-group has-feedback">
            <input type="text" class="form-control">
            <i class="fas fa-search form-control-feedback"></i>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a id="esportsData" data-trigger="hover" data-content="Coming Soon!" rel="popover" data-placement="bottom" href="#">Esports</a></li>  
          <li><a href="#">Heroes</a></li>
        </ul> 
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>

  <script>
      $('#esportsData').popover();
  </script>