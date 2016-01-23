var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://menu.ha.ucla.edu/foodpro/";

request(url, function(error, response, body){
	if(!error) {
	    var $ = cheerio.load(body);

		$('.itemlink, .itemlinkt').each(function() {
		    console.log($(this).html());
		});

	}
	else{
	    console.log("We've encountered an error: " + error);
	}
    });