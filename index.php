<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Omi | Full Stack Web Developer</title>
    <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:400,500" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="css/font-awesome.min.css" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
    <link href="css/device-control.css" rel="stylesheet">
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
  	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3 col-sm-5">
				<?php include_once("inc/about-box.php");?>
			</div>
			
			<div class="col-md-9 col-sm-7 sp_target_c1">
            	<?php include_once("inc/navigation.php");?>
                
                <div class="page-wrapper">
                	<?php include_once("inc/projects.php");?>
                </div>
				
			</div>
		</div>
	</div>
	
  

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>-->
    
    <!-- JQuery offline version in development stage-->
    <script src="js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
  </body>
</html>