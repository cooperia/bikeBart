$(function(){
  
	var date = new Date(),
	hour,
	minute;
	
	
	//Call getSetTime to start the cycle
	getSetTime();

	function getSetTime(){
		hour = date.formatHours();
		minute = date.formatMinutes();
		period = date.getPeriod();
		
		
		$('#hour').replaceWith('<span id="hour" class="time">'+hour+'</span>')
		$('#minute').replaceWith('<span id="minute" class="time">'+minute+'</span>')
		$('#period').replaceWith('<span id="period" class="time">'+period+'</span>')
		//Colon blink
		if($('#colon').hasClass('hidden')){
			$('#colon').removeClass('hidden');
		}else{
			$('#colon').addClass('hidden');
		}
		
		//Bike change
		if($('#bike').hasClass('bike1')){
			$('#bike').removeClass('bike1').addClass('bike2');
		}else{
			$('#bike').removeClass('bike2').addClass('bike1');
		}
		
		//Call again in a second
		setTimeout(getSetTime, 1000);
	};
});
	
