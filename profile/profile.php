<?php include 'functions/func.php'; ?>
<?php if(!isset($_SESSION['user_id'])): ?>
	<?php $_SESSION['unutherrized'] = "Please Enter Email & Password"; ?>
	<?php header("location:../index.php"); ?>
	<?php endif; ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CJ Marketing:Profile</title>
	<link rel="stylesheet" href="../assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="../assets/css/style.css">
	<link rel="stylesheet" href="../assets/font-awesome/css/font-awesome.min.css">
	<link rel="stylesheet" href="../assets/css/profile.css">
    <script type="text/javascript" src="../assets/plugins/sweetalert2/sweetalert2.all.js"></script>
</head>
<body>
	<?php include '../parts/nav.php'; ?>
   
    <div class="container contents">
    	<div class="row">
    		<div class="col-md-3">
    			<div class="left-area">
    				<?php links(); ?>
    			</div><!-- left-area -->
    		</div><!-- col -->
    		<div class="col-md-9">
    			<div class="right-area">

                <?php user_info(); ?>
                               
                
                    
                 <?php include 'parts/add_movies.php'; ?>
                 <?php include 'parts/bio.php'; ?>
                 <?php include 'parts/facebook.php'; ?>
                 <?php include 'parts/linkedin.php'; ?>
                 <?php include 'parts/name.php'; ?>
                 <?php include 'parts/change_password.php'; ?>

    			</div><!-- right-area -->
    		</div><!-- col -->
    	</div><!-- row -->
    </div><!-- container -->

	<script type="text/javascript" src="../assets/js/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
	<script type="text/javascript" src="../assets/js/bootstrap.min.js"></script>
     <script type="text/javascript" src="js/profile.js"></script>
    <script type="text/javascript" src="js/movies.js"></script>
    
    <script type="text/javascript">
    $(document).ready(function(){
        setTimeout(function(){
        $(".all-msg").fadeOut("slow");
        },2000);
    })
</script>
</body>
</html>