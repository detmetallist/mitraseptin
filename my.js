$(document).ready(function(){
	var mode="standart";
	$('a[href="#night"]').click(function(){
		if(mode=="standart"||mode=="contrast"){
			mode="night";
			$('body').addClass("nightmode").removeClass("contrast_mode");
		} else {
			mode="standart";
			$('body').removeClass("nightmode");
		}
		return false;
	})
	$('a[href="#contrast"]').click(function(){
		if(mode=="standart"||mode=="night"){
			mode="contrast";
			$('body').addClass("contrast_mode").removeClass("nightmode");
		} else {
			mode="standart";
			$('body').removeClass("contrast_mode");
		}
		return false;
	})
	var section=0;
	if($(document).width()>1020){
		load_img('animation','alpha');
	} else if($(document).width()>560){
		load_img('mobile-h','alpha');
	} else {
		load_img('mobile-v','640x960');
	}
	window.addEventListener("orientationchange", function() {
		if($(document).width()<1020){
			if(window.orientation==0){
				load_img('mobile-v','640x960');
		    } else {
		    	load_img('mobile-h','alpha');
		    }
		    wheel_top();
		}
	}, false);
	function load_img(folder,slovo){
		var img_html="";
		for(i=0; i<=3; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_0000'+i+'.png">';
		}
		$(".img_section2_1").html(img_html);
		img_html="";
		for(i=4; i<=9; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_0000'+i+'.png">';
		}
		for(i=10; i<=45; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_000'+i+'.png">';
		}
		$(".img_section2_2").html(img_html);
		img_html="";
		for(i=46; i<=75; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_000'+i+'.png">';
		}
		$(".img_section2_3").html(img_html);
		img_html="";
		for(i=76; i<=78; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_000'+i+'.png">';
		}
		$(".img_section3_1").html(img_html);
		img_html="";
		for(i=79; i<=99; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_000'+i+'.png">';
		}
		for(i=100; i<=101; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section3_2").html(img_html);
		img_html="";
		for(i=102; i<=110; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section3_3").html(img_html);
		img_html="";
		for(i=120; i<=148; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section4_1").html(img_html);
		img_html="";
		for(i=160; i<=167; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section5_1").html(img_html);
		img_html="";
		for(i=168; i<=186; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section5_2").html(img_html);
		img_html="";
		for(i=187; i<=210; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section5_3").html(img_html);
		img_html="";
		for(i=3; i<=9; i++){
			img_html+='<img src="img/'+folder+'/Spray_seq0'+i+'.png">';
		}
		for(i=10; i<=14; i++){
			img_html+='<img src="img/'+folder+'/Spray_seq'+i+'.png">';
		}
		$(".img_section_spray").html(img_html);
		img_html="";
		for(i=220; i<=261; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section6_1").html(img_html);
		img_html="";
		for(i=262; i<=275; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section6_2").html(img_html);
		img_html="";
		for(i=281; i<=296; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section6_3").html(img_html);
		img_html="";
		for(i=297; i<=310; i++){
			img_html+='<img src="img/'+folder+'/mitraseptin_'+slovo+'_00'+i+'.png">';
		}
		$(".img_section6_4").html(img_html);
	}
	$(".section1 .img_container").removeClass("load");
	$(".section1 .aerozol_kapli").removeClass("load");
	setTimeout(function() {
		$(".section1 .screen_text h1").removeClass("load");
	}, 1000);
	setTimeout(function() {
		$(".section1 .screen_text h2").removeClass("load");
		section=1;
	}, 1500);
	$(window).on('wheel', function(e){
		if(e.originalEvent.deltaY < 0) {
			wheel_bottom();
		} else {
			wheel_top();
		}
	})
	$("body").swipe( {
	    swipeUp:wheel_top,
	    swipeDown:wheel_bottom,
	    threshold:0
	});
	function wheel_bottom(){
		if(section==2){
			section2_vverh();
		} else if(section==3){
			section3_vverh();
		} else if(section==4){
			section4_vverh();
		} else if(section==5){
			section5_vverh();
		} else if(section==6){
			section6_vverh();
		} else if(section==7){
			section7_vverh();
		} else if(section==81){
			section81_vverh();
		} else if(section==82){
			section82_vverh();
		} else if(section==9){
			section9_vverh();
		}
	}
	function wheel_top(){
		if(section==1){
			section1_vniz();
		} else if(section==2){
			section2_vniz();
		} else if(section==3){
			section3_vniz();
		} else if(section==4){
			section4_vniz();
		} else if(section==5){
			section5_vniz();
		} else if(section==6){
			section6_vniz();
		} else if(section==7){
			section7_vniz();
		} else if(section==81){
			if($(document).width()>560){
				section81_vniz();
			} else {
				section82_vniz();
			}
		} else if(section==82){
			section82_vniz();
		}
	}
	function section1_vniz(){
		section=0;
		$(".screen_text h1").addClass("load");
		$(".screen_text h2").addClass("load");
		$(".section1 .aerozol_kapli").addClass("load").addClass("top");
		$(".img_section1 img").removeClass("img_visible");
		img_visible('.img_section2_1',0,3,33);
	}
	function section2_vniz(){
		section=0;
		$(".img_section2_3 img").removeClass("img_visible");
		$(".section2 h2").addClass("afterload");
		img_visible('.img_section3_1',0,2,33);
	}
	function section2_vverh(){
		section=0;
		$(".img_section2_3 img").removeClass("img_visible");
		$(".img_section3_1 img").removeClass("img_visible");
		$(".section2 h2").addClass("load");
		scroll_vverh('.img_section2_3',29,33);
	}
	function section3_vniz(){
		section=0;
		$(".img_section3_3 img").removeClass("img_visible");
		$(".section3 h2").addClass("afterload");
		$(".img_section4_1").addClass("bottom");
		img_visible('.img_section4_1',0,28,33);
	}
	function section3_vverh(){
		section=0;
		$(".img_section3_3 img").removeClass("img_visible");
		$(".img_section4_1 img").removeClass("img_visible");
		$(".section3 h2").addClass("load");
		scroll_vverh('.img_section3_3',8,33);
	}
	function section4_vniz(){
		section=0;
		$(".background4, .section4 h2, .section4 p").addClass("afterload");
		$(".img_section4_1 img").removeClass("img_visible");
		$(".img_section_spray img").removeClass("img_visible");
		img_visible('.img_section5_1',0,7,33);
	}
	function section4_vverh(){
		section=0;
		$(".background4, .section4 h2, .section4 p").addClass("load");
		$(".img_section4_1 img").removeClass("img_visible");
		$(".img_section5_1 img").removeClass("img_visible");
		$(".img_section_spray img").removeClass("img_visible");
		scroll_vverh('.img_section4_1',28,33);
	}
	function section5_vniz(){
		section=0;
		$(".section5 h2").addClass('afterload');
		$(".background4").addClass('load').removeClass('afterload');
		setTimeout(function() {
			$('.img_section5_3 img').removeClass('img_visible');
			img_visible('.img_section6_1',0,41,33);
		}, 500);
	}
	function section5_vverh(){
		section=0;
		$(".section5 h2").addClass('load');
		$(".img_section5_3 img").removeClass("img_visible");
		$(".img_section6_1 img").removeClass("img_visible");
		scroll_vverh('.img_section5_3',23,33);
	}
	function section6_vniz(){
		section=0;
		$(".section6 .container_1440.container4, .section4 .container_1440.container4").addClass('afterload');
		$(".section7").removeClass('load');
		setTimeout(function() {
			$(".section7 span").removeClass('load');
			section=7;
		}, 2000);
	}
	function section6_vverh(){
		section=0;
		$(".section6 h2").addClass('load');
		$(".section6 p").addClass('load');
		$(".img_section6_4 img").removeClass("img_visible");
		scroll_vverh('.img_section6_4',13,33);
	}
	function section7_vniz(){
		section=0;
		$(".section7").addClass('afterload');
		$(".section8").removeClass('load');
		setTimeout(function() {
			$(".section8 li").eq(0).removeClass('load');
		}, 2000);
		setTimeout(function() {
			$(".section8 li").eq(1).removeClass('load');
		}, 2500);
		setTimeout(function() {
			$(".section8 li").eq(2).removeClass('load');
			section=81;
		}, 3000);
	}
	function section7_vverh(){
		section=0;
		$(".section6 .container_1440.container4, .section4 .container_1440.container4").removeClass('afterload');
		$(".section7").addClass('load');
		$(".section7 span").addClass('load');
		setTimeout(function() {
			section=6;
		}, 1500);
	}
	function section81_vniz(){
		section=0;
		$(".section8 .container_1440").addClass('scroll');
		setTimeout(function() {
			$(".section8 li").eq(3).removeClass('load');
		}, 500);
		setTimeout(function() {
			$(".section8 li").eq(4).removeClass('load');
			section=82;
		}, 1000);
	}
	function section81_vverh(){
		section=0;
		$(".section8 li").addClass('load');
		$(".section8").addClass('load');
		$(".section7").removeClass('afterload');
		setTimeout(function() {
			section=7;
		}, 1500);
	}
	function section82_vniz(){
		section=0;
		$(".section8").addClass('afterload');
		$(".section9").removeClass('load');
		setTimeout(function() {
			$(".section9 h2").removeClass('load');
		}, 1500);
		setTimeout(function() {
			$(".section9 .container_9 a").removeClass('load');
			section=9;
		}, 2000);
	}
	function section82_vverh(){
		section=0;
		$(".section8 .container_1440").removeClass('scroll');
		$(".section8 li").eq(3).addClass('load');
		$(".section8 li").eq(4).addClass('load');
		setTimeout(function() {
			section=81;
		}, 1000);
	}
	function section9_vverh(){
		section=0;
		$(".section8").removeClass('afterload');
		$(".section9").addClass('load');
		$(".section9 .container_9 a").addClass('load');
		$(".section9 h2").addClass('load');
		setTimeout(function() {
			if($(document).width()>560){
				section=82;
			} else {
				section=81;
			}
		}, 1500);
	}
	function img_visible(container,i,kol,delay){
		$(container+" img").eq(i).addClass('img_visible');
		$(container+" img").eq(i-1).removeClass('img_visible');
		i++;
		if(container=='.img_section2_3'&&i==19){
			$('.section2 h2').removeClass('load');
		}
		if(container=='.img_section3_3'&&i==2){
			$('.section3 h2').removeClass('load');
		}
		if(container=='.img_section4_1'&&i==16){
			$(".screen1_bg").fadeOut(200);
			$(".background4").removeClass('load');
			$(".section4 .container_1440, .section5 .container_1440, .section6 .container_1440").addClass('container4');
		}
		if(container=='.img_section5_3'&&i==15){
			$(".section5 h2").removeClass('load');
		}
		if(container=='.img_section6_1'&&i==27){
			$(".background4").removeClass('load');
		}
		if(container=='.img_section6_4'&&i==8){
			$('.section6 h2').removeClass('load');
		}
		if(i<=kol){
			setTimeout(function() {
				img_visible(container,i,kol,delay);
			}, delay);
		} else {
			if(container=='.img_section2_1'){
				$(".img_section2_1 img").removeClass("img_visible");
				img_visible('.img_section2_2',0,41,delay);
				$('.section1 .img_container').addClass('left');
			} else if(container=='.img_section2_2'){
				$(".img_section2_2 img").removeClass("img_visible");
				img_visible('.img_section2_3',0,29,delay)
			} else if(container=='.img_section2_3'){
				section=2;
			} else if(container=='.img_section3_1'){
				$(".img_section3_1 img").removeClass("img_visible");
				img_visible('.img_section3_2',0,22,delay)
			} else if(container=='.img_section3_2'){
				$(".img_section3_2 img").removeClass("img_visible");
				img_visible('.img_section3_3',0,8,delay)
			} else if(container=='.img_section3_3'){
				section=3;
			} else if(container=='.img_section4_1'){
				$(".section4 h2").removeClass('load');
				$(".section4 p").removeClass('load');
				img_visible('.img_section_spray',0,11,delay);
			} else if(container=='.img_section_spray'){
				section=4;
			} else if(container=='.img_section5_1'){
				$(".img_section5_1 img").removeClass("img_visible");
				img_visible('.img_section5_2',0,18,delay);
			} else if(container=='.img_section5_2'){
				$(".img_section5_2 img").removeClass("img_visible");
				img_visible('.img_section5_3',0,23,delay);
			} else if(container=='.img_section5_3'){
				section=5;
			} else if(container=='.img_section6_1'){
				$(".img_section6_1 img").removeClass("img_visible");
				img_visible('.img_section6_2',0,13,delay);
			} else if(container=='.img_section6_2'){
				$(".img_section6_2 img").removeClass("img_visible");
				img_visible('.img_section6_3',0,15,delay);
			} else if(container=='.img_section6_3'){
				$(".img_section6_3 img").removeClass("img_visible");
				img_visible('.img_section6_4',0,13,delay);
			} else if(container=='.img_section6_4'){
				$('.section6 p').removeClass('load');
				section=6;
			}
		} 
	}
	function scroll_vverh(container,i,delay){
		$(container+" img").eq(i).addClass('img_visible');
		$(container+" img").eq(i+1).removeClass('img_visible');
		i--;
		if(i>=0){
			setTimeout(function() {
				scroll_vverh(container,i,delay);
			}, delay);
		} else {
			if(container=='.img_section2_3'){
				$(".img_section2_3 img").removeClass("img_visible");
				$('.section1 .img_container').removeClass('left');
				scroll_vverh('.img_section2_2',41,delay);
			}
			else if(container=='.img_section2_2'){
				$(".img_section2_2 img").removeClass("img_visible");
				scroll_vverh('.img_section2_1',3,delay);
			} else if(container=='.img_section2_1'){
				$(".section1 .screen_text h1").removeClass("load");
				$(".section1 .screen_text h2").removeClass("load");
				$(".section1 .aerozol_kapli").removeClass("load").removeClass("top");
				section=1;
			} else if(container=='.img_section3_3'){
				$(".img_section3_3 img").removeClass("img_visible");
				scroll_vverh('.img_section3_2',22,delay);
			} else if(container=='.img_section3_2'){
				$(".img_section3_2 img").removeClass("img_visible");
				scroll_vverh('.img_section3_1',2,delay);
			} else if(container=='.img_section3_1'){
				$('.section2 h2').removeClass('afterload');
				section=2;
			} else if(container=='.img_section4_1'){
				$(".section3 h2").removeClass("afterload");
				section=3;
			} else if(container=='.img_section5_3'){
				$(".img_section5_3 img").removeClass("img_visible");
				$(".section4 .background4").removeClass("afterload").removeClass("load");
				scroll_vverh('.img_section5_2',18,delay);
			} else if(container=='.img_section5_2'){
				$(".img_section5_2 img").removeClass("img_visible");
				scroll_vverh('.img_section5_1',7,delay);
			} else if(container=='.img_section5_1'){
				img_visible('.img_section_spray',0,11,delay);
				$(".section4 h2").removeClass("afterload");
				$(".section4 p").removeClass("afterload");
				section=4;
			} else if(container=='.img_section6_4'){
				$(".img_section6_4 img").removeClass("img_visible");
				scroll_vverh('.img_section6_3',15,delay);
			} else if(container=='.img_section6_3'){
				$(".background4").addClass('load');
				$(".img_section6_3 img").removeClass("img_visible");
				scroll_vverh('.img_section6_2',13,delay);
			} else if(container=='.img_section6_2'){
				$(".img_section6_2 img").removeClass("img_visible");
				scroll_vverh('.img_section6_1',41,delay);
			} else if(container=='.img_section6_1'){
				$(".section5 h2").removeClass('afterload');
				section=5;
			}
		}  
	}
	$("a[href='#menu_open']").click(function(){
		$(this).fadeOut(200);
		$("a[href='#menu_close']").fadeIn(200);
		$(".mobile_menu").fadeIn(200);
		return false;
	})
	$("a[href='#menu_close']").click(function(){
		$(this).fadeOut(200);
		$("a[href='#menu_open']").fadeIn(200);
		$(".mobile_menu").fadeOut(200);
		return false;
	})
});