var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://crossorigin.me/http://menu.ha.ucla.edu/foodpro/";

var d = new Date(); 
var isWeekend = (d.getDay() + 1) % 7 == 0;
var hour = d.getHours();
var weekdaybreakfast = true;
var weekendbreakfast;
var weekdaylunch;
var weekendlunch;

// if (isWeekend && (hour <= 14) && (hour >= 9)){
// 	document.getElementById("menu-title").innerHTML = "Weekend Brunch";
// 	weekendlunch=true; //no feast
// }else if (isWeekend && (hour <= 21) && (hour >= 17)){
// 	document.getElementById("menu-title").innerHTML = "Weekend Dinner";
// 	weekendlunch=true; //no feast
// }else if (!isWeekend && (hour <= 11) && (hour >= 7)){
// 	weekdaybreakfast=true;
// 	document.getElementById("menu-title").innerHTML = "Breakfast";
// }else if (!isWeekend && (hour <= 14) && (hour >= 11)){
// 	weekdaylunch=true;
// 	document.getElementById("menu-title").innerHTML = "Lunch";
// }else if (!isWeekend && (hour <= 20) && (hour >= 17)){
// 	weekdaylunch=true;
// 	document.getElementById("menu-title").innerHTML = "Dinner";
// }else{
// 	document.getElementById("menu-title").innerHTML = "Tomorrow's Breakfast";
// 	if (d.getDay() == 5){
// 		weekendbreakfast=true;
// 	}else{
// 		weekdaybreakfast=true;
// 	}
// }

//only show first two dining halls for now... 

request(url, function(error, response, body){
	if(!error) {
	    var $ = cheerio.load(body);
	    var covelmenu_breakfast="";
	    var covelmenu="";
	    var denevemenu = "";
	    var denevemenu_breakfast="";
	    var feastmenu = "";
	    var bplatemenu = "";
	    var bplatemenu_breakfast="";

	    //weekday breakfast only deneve and bplate
	    if(weekdaybreakfast)
	    {
	    	$('.menugridcell ul li a, .divider_menu').each(function() 
	    	{
				if($(this).attr('class') == "divider_menu")
				{
					$('.menugridcell_last ul li a, .divider_menu').each(function()
					{
						if($(this).attr('class') == "divider_menu")
						{
							return false;
						}
						bplatemenu_breakfast = bplatemenu_breakfast.concat( ($(this).text()) + "\n" );
					});
					return false;
				}
				denevemenu_breakfast=denevemenu_breakfast.concat( ($(this).text()) + "\n" );
			});
			document.getElementById("deneve").innerHTML = denevemenu_breakfast;
	    	document.getElementById("covel").innerHTML = bplatemenu_breakfast;
	    	return true;
	    }
	}

	else{
	    console.log("We've encountered an error: " + error);
	}
    });
