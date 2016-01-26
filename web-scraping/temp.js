var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://crossorigin.me/http://menu.ha.ucla.edu/foodpro/";

var d = new Date(); 
var isWeekend = (d.getDay() + 1) % 7 == 0;
var hour = d.getHours();
var weekdaybreakfast;
var weekdaylunchdinner;

if (isWeekend && (hour <= 14) && (hour >= 9)){
	document.getElementById("menu-title").innerHTML = "Weekend Brunch";
}else if (isWeekend && (hour <= 21) && (hour >= 17)){
	document.getElementById("menu-title").innerHTML = "Weekend Dinner";
}else if (!isWeekend && (hour <= 11) && (hour >= 7)){
	weekdaybreakfast=true;
	document.getElementById("menu-title").innerHTML = "Breakfast";
}else if (!isWeekend && (hour <= 14) && (hour >= 11)){
	weekdaylunchdinner=true;
	document.getElementById("menu-title").innerHTML = "Lunch";
}else if (!isWeekend && (hour <= 21) && (hour >= 17)){
	weekdaylunchdinner=true;
	document.getElementById("menu-title").innerHTML = "Dinner";
}else{
	document.getElementById("menu-title").innerHTML = "No Dining Halls Open :(";
}

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
	    	document.getElementById("bplate").innerHTML = bplatemenu_breakfast;
	    }

	    //weekday lunch
	  //   if(!weekdaylunchdinner)
	  //   {
	  //   	$('.menugridcell ul li a, .menu_split').each(function() 
	  //   	{
			// 	if($(this).attr('class') == ".menusplit")
			// 	{
			// 		$('.menugridcell_last ul li a, .divider_menu').each(function()
			// 		{
			// 			if($(this).attr('class') == "divider_menu")
			// 			{
			// 				return false;
			// 			}
			// 			bplatemenu_breakfast = bplatemenu_breakfast.concat( ($(this).text()) + "\n" );
			// 		});
			// 		return false;
			// 	}
			// 	denevemenu_breakfast=denevemenu_breakfast.concat( ($(this).text()) + "\n" );
			// });
			// document.getElementById("deneve").innerHTML = denevemenu_breakfast;
	  //   	document.getElementById("bplate").innerHTML = bplatemenu_breakfast;
	  //   }
	    
	}

	else{
	    console.log("We've encountered an error: " + error);
	}
    });
