$(function(){
	var winH=$(window).innerHeight();
	var winW=$(window).innerWidth();
	var vidH=$('#mainVideo').innerHeight();
	var vidW=$('#mainVideo').innerWidth();
	var videoPlay='on';
	var soundMuted='off';
	
	$('.playPuaseIconBt').on({click:function(){
		if(videoPlay==='on'){
			videoPlay='off';
			$('#mainVideo').get(0).pause(); //정지
			$(this).find('i').attr('class','fas fa-play');
		}else{
			videoPlay='on';
			$('#mainVideo').get(0).play();
			$(this).find('i').attr('class','fas fa-pause');
			}
		}
    });

	$('.mutedIconBt').on({click:function(){
		if(soundMuted==='off'){
			soundMuted='on';
			$('#mainVideo').get(0).muted=false; //소리 켜기
			$(this).find('i').attr('class','fas fa-volume-up');//이미지 바뀌는거
			
		}else{
			soundMuted='off';
			$('#mainVideo').get(0).muted=true; //소리 끄기
			$(this).find('i').attr('class','fas fa-volume-mute');//이미지 바뀌는거
			}
		}
	});
	
	$('#mainVideo').get(0).autoplay=true;
	$('#mainVideo').get(0).loop =1;
	$('#mainVideo').get(0).playbackRate=1;
	$('#mainVideo').get(0).muted=true;
	
	setInterval(videoResizeFn,100);
	$(window).resize(function(){
		videoResizeFn();
	});

	function videoResizeFn(){
		winH=$(window).innerHeight();
		winW=$(window).innerWidth();
		vidH=$('#mainVideo').innerHeight();
		vidW=$('#mainVideo').innerWidth();

		//console.log(winH);
		//console.log(vidH);
		$('.section-main-video').css({width:100+'%', height: winH});
		if(winH>vidH){
			$('#mainVideo').css({width:'auto', height:winH});
		}
		if(winW>vidW){
			$('#mainVideo').css({width:winW, height:'auto'});
		}
	}
});