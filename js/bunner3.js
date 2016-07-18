$(function(){
	var timer=null;
	var index=1;
	var oldindex=0;
	$($('#u1 li')[oldindex]).css('z-index','100');
	timer=setInterval(function(){
		action();
		index=index==4?0:index+1;
	},2000);
	$('#ul2 li').mouseover(function(){
		index=$(this).index();
		action();
		index++;
		if(index<4){
			index=index;
		}else{
			index=0;
		}
	});
	$('#bunner').mouseover(function () {
		clearInterval(timer);
		timer=null;
	});
	$('#bunner').mouseout(function () {
		timer=setInterval(function(){
			action();
			index=index==4?0:index+1;
		},2000);
	});
	function action () {
		$('#u1 li').css('z-index','0');
		$('#ul2 li').attr('class','');
		$($('#ul2 li')[index]).attr('class','cursor');
		$($('#u1 li')[index]).css({'top':'250px','z-index':'100'});
		$($('#u1 li')[oldindex]).css('z-index','50');
		$($('#u1 li')[index]).animate({top:'0'},500);
		oldindex=index;
	}
});