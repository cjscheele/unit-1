//initialize functions called when the script loads
function initialize(){
    cities();
    loadMegaCities()
    debugAjax()
};

//function to create a table with cities and their populations
function cities(){
    //define array of city/pop objects
    var cityPop = [
        { 
            city: 'Shanghai',
            population: 24256800
        },
        {
            city: 'Karachi',
            population: 23500000
        },
        {
            city: 'Beijing',
            population: 21516000
        },
        {
            city: 'Delhi',
            population: 16787941
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    //Call add columns and add events
    addColumns(cityPop)
    addEvents()
};

//This function adds a city size column and labels the city based on population
function addColumns(cityPop){
    
    //Loop through each row
    $('tr').each(function(i){

        //Add header to first row
        if (i == 0){

            $(this).append('<th>City Size</th>');
        } else {

            //Determine the appropriate label based on city size
            var citySize;

            if (cityPop[i-1].population < 100000){
                citySize = 'Small';

            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';

            } else {
                citySize = 'Large';
            };

            //Add the label to the column
            $(this).append('<td>' + citySize + '</td>');
        };
    });
};

//This function adds a couple of event functions to the page
function addEvents(){

    //This event randomly changes the table text color on the mouseover event
    $('table').mouseover(function(){
        //Start the rgb string
        var color = "rgb(";
        
        //Loop 3 times adding a value between 0-255 to the rgb string
        for (var i=0; i<3; i++){

            var random = Math.round(Math.random() * 255);

            color += random;

            if (i<2){
                color += ",";
            
            } else {
                color += ")";
            };
        };

        //Change text color
        $(this).css('color', color);
    });

    //This function alerts the user when clicking the table
    function clickme(){

        alert('Hey, you clicked me!');
    };

    $('table').on('click', clickme);
};

//load the MegaCities geojson file
function loadMegaCities(){
	//Get the geojson file and display in console
    $.get("data/MegaCities.geojson",function(data){
    	var myData = data;
    	console.log(myData);
    });
    //Incorrectly call data outside the callback function
    //console.log(myData);
}

//MODULE 3 ASSIGNMENT
//Add the contents of the geojson to the div
function debugCallback(response){
	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(response));
};

//Use AJAX call to load Megacities geojson
function debugAjax(){
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
			//Call the callback function
			debugCallback(response);
		}
	});	
};

//call the initialize function when the document has loaded
$(document).ready(initialize);