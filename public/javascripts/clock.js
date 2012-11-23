$(function(){
	var date = new Date(),
	hour,
	minute;
	
	Date.prototype.formatHours = function(){
		var hour = this.getHours();
		if(hour > 12){
			hour = hour - 12;
		}
		else if(hour == 0){
			hour = 12;
		}
		return hour;
	};
	
	Date.prototype.formatMinutes = function(){
		var minute = this.getMinutes();
		if(minute < 10){
			minute  = '0'+minute;
		}
		return minute;
	};
	
	Date.prototype.getPeriod = function(){
		var period,
		hour = this.getHours();
		if(hour < 12){
			period = 'AM';
		}else{
			period = 'PM'
		}
		return period;
	};
	
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
	