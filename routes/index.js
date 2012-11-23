var http = require("http");
var xml2js = require("xml2js");
var TextBlock = require("../modules/infoProvider").InfoProvider;

var infoProvider = new InfoProvider();
var statList;

//Main page - no form submission
exports.index = function(req, res){
	console.log(res);
	infoProvider.getList(function(err, list){
		statList = list;
		//Fill the object that will be used to populate the dropdown
		if(statList != 'object'){
			infoProvider.fillList(function(err, data){
				if (err){
					res.render('error', { title: 'Error', e: err });
				}else{
					var stnAbrv = '12TH'
					statList =  data;
					infoProvider.getStationInfo(stnAbrv, function(err, data){
						res.render('index', { title: 'Bike BART', stations: statList , destinations: data, selected: stnAbrv });
					});
				}	
			});
		}else{
			//If statList already filled, just render index
			var data = infoProvider.stationList;
			res.render('index', { title: 'Bike BART', stations: data, destinations: '' });
		}
	})
	
		
};

exports.getInfo = function(req, res){
	var	stnAbrv = req.body.stn;
	//Run query for new station. Render index with new information
	infoProvider.getStationInfo(stnAbrv, function(err, data){
		if (err){
			res.render('error', { title: 'Error', e: err });
		}else{
			res.render('index', { title: 'Bike BART', stations: statList , destinations: data, selected: stnAbrv });
		}
	});
};