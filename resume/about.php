<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Omi | Full Stack Web Developer</title>
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,500" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Overlock:400,700' rel='stylesheet' type='text/css'>
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
    <link href="css/style-about.css" rel="stylesheet">
    <link href="css/device-control.css" rel="stylesheet">
    <link href="css/device-control-about.css" rel="stylesheet">
    <script src="js/pace.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
  
   <div class="preloader">
  		<img src="img/ring-alt.svg" alt="Loading" width="200px" height="200px">
      	<p>Loading...</p>
   </div>
  	<div class="container-fluid about-page">
		<div class="row">
			<div class="col-md-12">
            	<?php include_once("inc/navigation-about.php");?>
			</div>
		</div>
	</div>
    
    <div class="my-detail">
    	<?php include_once("inc/my-detail.php");?>
    </div>
	
  

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>-->
    
    <!-- JQuery offline version in development stage-->
    <script src="js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
    <script src="omicv/js/script.js"></script>
  </body>
</html>