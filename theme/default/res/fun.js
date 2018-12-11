$(".ctrl_menu").click(function(){
	$(".mpanel").toggleClass("menu_show");
});
$(".ctrl_search").click(function(){
	$(".mpanel").toggleClass("search_show");
});

/*首页顶部*/

// $(".pub_catalogue li").click(function(){
// 	$(this).addClass("selected").siblings().removeClass("selected");
// });
$(".pub_catalogue li:first").click();
/*about 集团简介*/

$(".join_jobs").click(function(){
		var num = $(".join_jobs").index($(this));
		$(this).toggleClass("selected").siblings(".join_jobs").removeClass("selected");
		$(".join_jobs").eq(num).next(".join_qualification").slideToggle(400);
		$(".join_jobs").eq(num).siblings(".join_jobs").next(".join_qualification").slideUp(400);
	});
$(".join_jobs").eq(0).click();
/*join 人才招聘*/

$(".cm_input_interest").click(function(){
	$(".cm_input_interest").toggleClass("selected");
	$(".interest_list").fadeToggle(400);
	$(".interest_list li").click(function(){
		var Opt = $(this).text();
		$(".inp_interest").val(Opt);
	});
});
$(".contact_submit").click(function(){
	$(".submit_success").fadeIn(400);
	$(".submit_success h4").click(function(){$(".submit_success").fadeOut(400);});
});
/*contact 联系我们*/