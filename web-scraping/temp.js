var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://menu.ha.ucla.edu/foodpro/";

request(url, function(error, response, body){
	if(!error) {
	    var $ = cheerio.load(body);
	    var covel = [];
	    var deneve=[];
	    var feast = [];
	    var bplate = [];
	    var count = 0;

	    //prints out Covel
		$('.menugridcell:first-of-type ul li a, .menulocheader:first-of-type a').each(function() {
		    	console.log($(this).html());
		    	// $("#covel-menu").html("Hello World");

		});

	}

	else{
	    console.log("We've encountered an error: " + error);
	}
    });

$(document).ready(function(){
    $('#covel-menu').html('hello worl');
});