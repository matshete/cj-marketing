function add_bio(bio){
	var bio = $.trim(bio);
	if(bio.length == ""){
		$(".bio-error").html("Bio is required");
	} else {
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?bio=true',
			data : {'bio' : bio},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == 'success'){
					location = 'index.php';
				}
			}
		})
	}
}

function add_facebook_account(facebook_val){
	var facebook_val = $.trim(facebook_val);
	var facebook_url = /^(http|https)\:(\/\/)(www)\.facebook\.com(\/)[a-zA-Z0-9]+$/;
	if(facebook_val.length == ""){
		$(".facebook-error").html('Facebook Field is required');
		$("#add_facebook").css("border-color","red");
	} else if(facebook_url.test(facebook_val)){
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?add_facebook=true',
			data : {'facebook_val': facebook_val},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == 'success'){
					location = 'index.php';
				}
			}
		})

	} else {
		$(".facebook-error").html('Invalid Facebook URL');
		$("#add_facebook").css("border-color","red");
	}
}


// === Add Linkedin ===  
function add_linkedin_url(linkedin_val){
	var linkedin_val = $.trim(linkedin_val);
	var linkedin_url = /^(http|https)\:(\/\/)(www)\.linkedin\.com(\/)[a-zA-Z0-9]+$/;
	if(linkedin_val.length == ""){
		$(".linkedin-error").html('Linkedin Field is required');
		$("#add_linkedin").css("border-color","red");
	} else if(linkedin_url.test(linkedin_val)){
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?add_linkedin=true',
			data : {'linkedin_val': linkedin_val},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == 'success'){
					location = 'index.php';
				}
			}
		})

	} else {
		$(".linkedin-error").html('Invalid Linkedin URL');
		$("#add_linkedin").css("border-color","red");
	}
}


function change_password(current_pwd, new_pwd){
	var current_pwd = $.trim(current_pwd);
	var new_pwd     = $.trim(new_pwd);
	if(current_pwd.length == ""){
		$(".current-error").html("Current Password is required");
		$("#current").css("border-color", "red");
	} else {
		$(".current-error").html("");
		$("#current").css("border-color", "green");
	}

	if(new_pwd.length == ""){
		$(".new-error").html("New Password is required");
		$("#new_password").css("border-color", "red");
	} else {
		$(".new-error").html("");
		$("#new_password").css("border-color", "green");
	}

	if(current_pwd.length != "" && new_pwd.length != ""){
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?password=true',
			data : {'current_password': current_pwd, 'new_password': new_pwd},
			dataType : 'JSON',
			success : function(feedback){
				// alert(feedback);
              if(feedback['error'] == 'success'){
              	location = "index.php";
              } else if(feedback['error'] == "pattren"){
              	$(".new-error").html(feedback['msg']);
              	$("#new_password").css('border-color',"red");
              } else if(feedback['error'] == "current_password_wrong"){
              	$(".current-error").html(feedback['msg']);
              	$("#current").css("border-color","red");
              }
			}
		})

	}

}


function change_name(name){
	var name = $.trim(name);
	if(name.length == ""){
		$('.name-error').html('Name is required');
		$("#update_name").css('border-color',"red");
	} else {
		$('.name-error').html('');
		$("#update_name").css('border-color',"green");
	}
	if(name.length != ""){
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?change_name=true',
			data : {'change_name' :name},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == 'success'){
					location = "index.php";
				} else if(feedback['error'] == 'pattren'){
					$('.name-error').html(feedback['msg']);
		$("#update_name").css('border-color',"red");
				}
			}

		})
	}
}

function add_address(address) {
	var address = $.trim(address);
	if(address.length == ""){
		$(".address-error").html("Address is required");
		$("#autocomplete").css("border-color","red");
	} else {
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?address=true',
			data : {'add_address': address},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == "success"){
					location = "index.php";
				}
			}

		})
	}
}


/*=============================================
DELETE MOVIE
=============================================*/
$(".btnDeleteMovie").click(function(){ 


	var MovieId = $(this).attr("movieId");

		swal({
        title: '¿Are you sure you want to delete this customer?',
        text: "¡If you're not you can cancel the action!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'cancel',
        confirmButtonText: 'Yes, delete Customer!'
      }).then(function(result){
        if (result.value) {
          
	           $.ajax({
				type : 'POST',
				url  : 'ajax/profile.php?delete=true',
				data : {'MovieId': MovieId,'action': 'delete'},
				dataType : 'JSON',
				success : function(feedback){
					if(feedback['error'] == "success"){
					alert("Movie Deleted");
					location = "index.php";
					}
	              }
				})
        }

  		})
	
	})

/*=============================================
EDIT MOVIE
=============================================*/

$(".btnEditMovie").click(function(){ 

	var movieId = $(this).attr("movieId");
	//alert(movieId);

	var datum = new FormData();
    datum.append("movieId", movieId);

    $.ajax({

      url  : 'ajax/profile.php?action=fetch',
      method: "POST",
      data: datum,
      cache: false,
      contentType: false,
      processData: false,
      dataType:"json",
      success:function(answer){
     
     	$("#movieId").val(answer["id"]);
		$("#edit_title").val(answer["title"]);
	    $("#edit_duration").val(answer["duration"]);
	    $("#edit_rating").val(answer["rating"]);
	      
	  }

  	})

})

function update_movie(movieId,title,duration,rating){

	var movieId = $.trim(movieId);
	var title = $.trim(title);
	var duration = $.trim(duration);
	var rating = $.trim(rating);

	if(title.length == ""){
		$('.title-error').html('Movie Title is required');
		$("#edit_duration").css('border-color',"red");
	} else {
		$('.title-error').html('');
		$("#edit_duration").css('border-color',"green");
	}
	if(title.length != ""){
		$.ajax({
			type : 'POST',
			url  : 'ajax/profile.php?update_movie=true',
			data : {'movieId':movieId,'title' :title,'duration':duration, 'rating':rating},
			dataType : 'JSON',
			success : function(feedback){
				if(feedback['error'] == 'success'){
					alert("Movie Updated");
					location = "index.php";
				} else if(feedback['error'] == 'pattren'){
					$('.title-error').html(feedback['msg']);
					$("#edit_title").css('border-color',"red");
				}
			}

		})
	}
}

/*=============================================
VALIDATE IF MOVIE ALREADY EXISTS
=============================================*/

$("#movie_title").change(function(){

	$(".alert").remove();
	

	var name = $(this).val();
	

	var data = new FormData();
 	data.append("name", name);

  	$.ajax({

	  url:"ajax/profile.php?check=true",
	  method: "POST",
	  data: data,
	  cache: false,
      contentType: false,
      processData: false,
      dataType: "json",
      success : function(feedback){

      	if(feedback['error'] == "success"){

      		$("#movie_title").parent().after('<div class="alert alert-warning">This Movie Already Exist!</div>');
      		
      		$("#movie_title").val('');
      	}

      }

    });

});

