var http = require("http");
var xml2js = require("xml2js");
var	apiKey = '6AHS-YID5-Y456-RIK8'

InfoProvider = function(){};

InfoProvider.prototype.stationList = '';

InfoProvider.prototype.getList = function(callback){
	callback(null, this.stationList);
};

//Fill our list of stations
InfoProvider.prototype.fillList = function(callback){
	console.log('fillList is running!');
	
	var options = {
	  host: 'api.bart.gov',
	  path: '/api/stn.aspx?cmd=stns&key='+apiKey
	};
	
	http.get(options, function(jres) {
        var data = '',
		parser =  new xml2js.Parser();
		
	    jres.on('data', function (chunk){
	        data += chunk;
	    });
	
	    jres.on('end', function (){
		parser.parseString(data, function (err, result){
			data = result.root.stations[0].station;
			this.stationList = data;
			callback(null, this.stationList);
		});
	   
   	  });
	}).on('error', function(e) {
	  console.log('ERROR: ' + e.message);	
   	  callback(e, null);
	});
	
};

//Run query for station info
InfoProvider.prototype.getStationInfo = function(arg, callback){
	var options = {
	  host: 'api.bart.gov',
	  path: '/api/etd.aspx?cmd=etd&orig='+arg+'&key='+apiKey
	};

	http.get(options, function(jres) {
		var data = '',
		parser =  new xml2js.Parser();
	  jres.on('data', function (chunk){
	        data += chunk;
	   });
	  jres.on('end', function (){
		parser.parseString(data, function (err, result){
			data = result.root.station[0].etd;
			callback(null, data);
		});
	   
   	  });
	  
	}).on('error', function(e) {
		console.log('ERROR: ' + e.message);
		callback(e, null);
	});
};

exports.InfoProvider = InfoProvider;