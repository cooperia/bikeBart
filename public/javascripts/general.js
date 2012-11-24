$(function(){
  
	var date = new Date(),
	hour,
	minute;

  $('#time_wrapper').click(function(){
		hour = date.formatHours();
		minute = date.formatMinutes();
		period = date.getPeriod();
    $(this).html("<input type='text' id='time_input' value='"+hour+":"+minute+" "+period+"'></input>"); 
  });

  $('#time_wrapper').mouseover(function(){
    $(this).css('cursor','pointer'); 
  }).mouseout(function(){
    $(this).css('cursor','auto');
  });

});



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
