$(function(){
	//nav
	$('#nav>ul').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});
   
	var swiper = new Swiper(".mySwiper", {
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: true,
		},
	});
	  
	//모바일 nav
	$('.hamburger-button').click(function(ev){
		ev.preventDefault();
		$(this).toggleClass('active2');
		$('.overlay').toggleClass('visible');
	});
	
	//탭
	var tab=$('.tab li');
	var contents=$('.tab_content>div');

	contents.hide().eq(0).show();
	tab.click(function(){
		var tg=$(this);
		var i=tg.index();
		tab.removeClass('active3');
		tg.addClass('active3');
		contents.css('display','none');
		contents.eq(i).css('display','block');
		return false;
	});
	
	//footer-family site
	var family=true;
	$('.family button').click(function(){
		family=!family; //부정연산자(not)을 변수값 앞에 붙여서 클릭할때마다 true, false가 되게함.
  
		if(family==true){
			$('.family .family_list').hide();
		} else {
			$('.family .family_list').show();
		}
	});
	
	//top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500){ //스크롤 위치에 따라 화면에서 맨 위로 올라가는 버튼 나타내고, 사라지도록 설정
			$('#move-top-btn').fadeIn();
		}else{
			$('#move-top-btn').fadeOut();
		}
	});
	
	$("#move-top-btn").click(function(){ //버튼 클릭 이벤트
		$('html, body').animate({ //animation을 걸어서 화면 맨 위로 이동하도록 설정
			scrollTop:0
		},400);
		return false;
	});
});