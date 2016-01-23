var request = require("request"),
    cheerio = require("cheerio"),
    url = "http://menu.ha.ucla.edu/foodpro/";
var menu="";
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
		    	menu= menu.concat( ($(this).html()) ).concat("\n");
		    	console.log($(this).html());
		});

	}

	else{
	    console.log("We've encountered an error: " + error);
	}
    });
