$(function(){
	var date = new Date(),
	hour,
	minute;
	
	//Call getSetTime to start the cycle
	getSetTime();

	function getSetTime(){
		hour = date.getHours();
		minute = date.getMinutes();
		
		if(hour > 12){
			hour = hour-12;
			minute = minute+'PM'
		}else{
			minute = minute+'AM';
		}
		$('#hour').replaceWith('<span id="hour" class="time">'+hour+'</span>')
		$('#minute').replaceWith('<span id="minute" class="time">'+minute+'</span>')
		
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
	