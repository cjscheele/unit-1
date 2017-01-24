//initialize function called when the script loads
function initialize(){
    cities();
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
};


//call the initialize function when the document has loaded
$(document).ready(initialize);