$(function(){
	var line1=$(".line1");
    var line2=$(".line2");
    var five1=$(".fivebg");
    var logo=$(".logo");
    five1.hover(function(){
        var index=five1.index(this);
        line1.css({top:"59%",opacity:0});
        line2.css({top:"49%",opacity:0});
        line1.eq(index).animate({top:"100%",opacity:1},300,"linear");
        line2.eq(index).animate({top:"10%",opacity:1},300,"linear");
        logo.eq(index).css({transform:"scale(1,1)"})
    },function(){
        var index=five1.index(this);
        line1.eq(index).animate({top:"59%",opacity:0},300,"linear");
        line2.eq(index).animate({top:"49%",opacity:0},300,"linear");
        logo.eq(index).css({transform:"scale(0,0)"})
    });

    /*my works*/
    $(".fivebg").mouseover(function(){
        var index=$(".fivebg").index(this);
        $(".five1").css({transform:"scale(1,1)"}).eq(index).css({transform:"scale(1.3,1.3)",transition:"transform .3s linear"});
        $(".fivebg").css({transform:"scale(1,1)",opacity:0}).eq(index).css({transform:"scale(1.3,1.3)",transition:"transform .3s linear",opacity:1})
    });
    $(".fivebg").mouseout(function(){
        $(".five1").css({transform:"scale(1,1)"});
        $(".fivebg").css({transform:"scale(1,1)",opacity:0});
    });


    $(window).scroll(function(){
    	if($(window).scrollTop()>200){
         	$(".ping2 .tit").animate({marginTop:"7%",opacity:1},800,"linear");
     	}

     	if($(window).scrollTop()>300){
        	$(".person").animate({marginTop:0,opacity:1},800,'linear')
        	$(".info").animate({marginTop:0,opacity:1},2000,'linear')
    	}

    	// if($(window).scrollTop()>900){
     //    	$(".ping3 .tit").css({transform:"translate(0,0)",opacity:1})
    	// }

    	if($(window).scrollTop()>900){
        	$(".ping4 .tit").css({transform:"translate(0,0)",opacity:1})
    	}

    	if($(window).scrollTop()>1000){
        	$(".f1").css({transform:"translate(0,0)",opacity:1});
        	$(".f2").css({transform:"translate(0,0)",opacity:1});
        	$(".f3").css({transform:"translate(0,0)",opacity:1});
        	$(".f4").css({transform:"translate(0,0)",opacity:1});
    	}
    	if($(window).scrollTop()>1400){
        	$(".f5").css({transform:"translate(0,0)",opacity:1});
        	$(".f6").css({transform:"translate(0,0)",opacity:1});
        	$(".f7").css({transform:"translate(0,0)",opacity:1});
        	$(".f8").css({transform:"translate(0,0)",opacity:1});
    	}

    	if($(window).scrollTop()>1900){
    		$(".ping5 .tit").css({transform:"translate(0,0)",opacity:1})
    		$(".fiveone").css({transform:"scale(1,1)",opacity:1});
    		$(".fivetwo").css({transform:"scale(1,1)",opacity:1});
    		$(".fivethree").css({transform:"scale(1,1)",opacity:1});
    		$(".fivefour").css({transform:"scale(1,1)",opacity:1});
            $(".fivefive").css({transform:"scale(1,1)",opacity:1});
            $(".fivesix").css({transform:"scale(1,1)",opacity:1});
            $(".fiveseven").css({transform:"scale(1,1)",opacity:1});
            $(".fiveeight").css({transform:"scale(1,1)",opacity:1});
    	}

    	if($(window).scrollTop()>3000){
        	$(".ping6 .tit").css({transform:"translate(0,0)",opacity:1})
    	}

    	if($(window).scrollTop()>3300){
        	$(".ping6 li").css({transform:"translate(0,0)",opacity:1})
    	}
    })
})