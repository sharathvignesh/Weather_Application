var city_name
$(document).ready(function() {
    $(".form").hide();
});
var box ;
var flag = 0
function show_func(citybox) {
	box = citybox;
    if(flag == 0)
    {
        $("#"+citybox).hide();
        $("#f"+citybox).show();
        flag = 1;
    }
}

var c1;
function my_func()
{
 city_name = document.getElementById('c'+box).value;
 var city = city_name,appid = '3b9e1db3910b15d7b07b333cc2b30d22';
 //alert(city);
		$.ajax({
				type: "GET",
				url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid,
				async : "true",
				dataType : 'json',
				success: function(result) {
						//alert("Hi");
              			$("#"+box).empty();
						pic = result.weather[0].icon;
                        
						//$("#pic").append("<img src='http://openweathermap.org/img/w/"+pic+".png'/>");
                        if(city_name.toLowerCase() == result.name.toLowerCase()) {
                        $("#"+box).append("<img class='ico' width='90px' height='90px' src='http://openweathermap.org/img/w/"+pic+".png'/>");
            
						$("#"+box).append("<p id='name'>"+result.name+"</p>");
                            
                        var celsius = (result.main.temp - 273).toFixed(1);
                        $("#"+box).append("<p id='celc'>"+celsius+"ºC</p>");
                            
                        var myString = result.weather[0].description;
                        var tail = myString.substring( 1 );
                        $("#"+box).append("<p class='desc'>"+myString[0].toUpperCase()+tail+"</p>");
                        $("#"+box).append("<p class='title'>Humidity</p><p class='desc'>"+result.main.humidity+"</p>");
                            
                        var temp_min = (result.main.temp_min - 273).toFixed(1);
                        var temp_max = (result.main.temp_max - 273).toFixed(1);
                        $("#"+box).append("<p class='title'>Min Temperature</p><p class='desc'>"+temp_min+"</p>");
                        $("#"+box).append("<p class='title'>Max Temperature</p><p class='desc'>"+temp_max+"</p>");
                            
                        $("#f"+box).hide();
						$("#"+box).show();
                        c1 = city_name;
                    } 
                    
                        else 
                        {
                            
                        $("#"+box).append("<p id='name'>Error</p></br><p id='name'>Please enter a valid City name</p>");
                        $("#f"+box).hide();
						$("#"+box).show();
                        
                        }
						flag = 0;
                        //localStorage.setItem(box, )
				  }
		});
}


