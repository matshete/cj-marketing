$(document).ready(function(){
	var name     = "";
	var duration    = "";
	var rating = "";
	
	var duration_reg =/^[0-9:?=.* a-zA-Z]+$/i;
    var name_reg = /^[a-zA-Z 0-9]+$/i;
    var rating_reg = /^[0-9 ]+$/i;

	 // === Movie Name Validations === 
	$("#movie_title").focusout(function(){
	var store = $.trim($("#movie_title").val());
	if(store.length == ""){
	$(".title-error").html("Name is required!");
	$("#movie_title").addClass("border-red");
	$("#movie_title").removeClass("border-green");
	name = "";
	}else if(name_reg.test(store)){
	$(".title-error").html("");
	$("#movie_title").addClass("border-green");
	$("#movie_title").removeClass("border-red");
	name = store;	
	}else{
	$(".title-error").html("Integer is not allowed!");
	$("#movie_title").addClass("border-red");
	$("#movie_title").removeClass("border-green");
	name = "";	
	}

	})	//Close Name Validations

     // === Movie Name Validations === 
    $("#movie_duration").focusout(function(){
    var store1 = $.trim($("#movie_duration").val());
    if(store1.length == ""){
    $(".duration-error").html("Movie Duration is required!");
    $("#movie_duration").addClass("border-red");
    $("#movie_duration").removeClass("border-green");
    duration = "";
    }else if(duration_reg.test(store1)){
    $(".duration-error").html("");
    $("#movie_duration").addClass("border-green");
    $("#movie_duration").removeClass("border-red");
    duration = store1;   
    }else{
    $(".duration-error").html("Integer is not allowed!");
    $("#movie_duration").addClass("border-red");
    $("#movie_duration").removeClass("border-green");
    duration = "";  
    }

    })  //Close Name Validations


   
    // * === Submit the form === *
	$("#submit").click(function(){
    var rating = $.trim($("#movie_rating").val());
         alert(rating);

    if(name.length == ""){
    $(".title-error").html("Movie Name is required!");
	$("#movie_title").addClass("border-red");
	$("#movie_title").removeClass("border-green");
	name = "";	
    }

    if(duration.length == ""){
    $(".duration-error").html("Movie Duration is required!");
    $("#movie_duration").addClass("border-red");
    $("#movie_duration").removeClass("border-green");
    duration = "";  
    }

    if(rating.length == ""){
    $(".rating-error").html("Movie Rating is required!");
    $("#movie_rating").addClass("border-red");
    $("#movie_rating").removeClass("border-green");
    rating= "";  
    }

   

    if(name.length != "" && duration.length != "" && rating.length != ""){
    	$.ajax({
    		type : 'POST',
    		url  : 'ajax/profile.php?submit_movie=true',
    		data : {'name': name,'duration': duration,'rating':rating},
    		dataType : 'JSON',
    		beforeSend : function(){
            $(".show-progress").addClass('progress')
    		},
    		success : function(feedback){
    			setTimeout(function(){
               if(feedback['error'] == "success"){
    			    
                        swal({
                          type: "success",
                          title: "The Movie has been saved",
                          showConfirmButton: true,
                          confirmButtonText: "Close"
                          }).then(function(result){
                                    if (result.value) {

                                    location = 'index.php';

                                    }
                                })	
    			}
    			},3000)
    		}
    	})
    }
	})

})