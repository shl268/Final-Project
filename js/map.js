   //Width and height
    let w = 1050;
    let h = 700;

    //Define map projection
    let projection = d3.geo.mercator()
    .center([ 132, -28 ])
    .translate([ w/2, h/2 ])
    .scale(1000);

    //Define path generator
    let path = d3.geo.path()
    .projection(projection);

    let color = d3.scale.ordinal()
    .range(['#D2E190','#909090','#636363','#81A140','#74923A','#617B30','#3B5c0A','#046307','#1E5631']);

    //Create SVG
    let svg = d3.select("#chart-area3")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

    //Load in GeoJSON data
    d3.json("../data/aust.json", function(json) {

    //Bind data and create one path per GeoJSON feature
    svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke", "dimgray")
        .attr("fill", function(d, i) {return color(i)});

    //States
    svg.selectAll("map-labels")
        .attr("class","map-labels")
        .data(json.features)
        .enter()
        .append("text")
        .attr("fill", "black")
        .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text(function(d) {
            return d.properties.STATE_NAME;
            });
    });


   //Legend
   svg.append("rect")
       .attr("fill","#636363")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",50);
   
   svg.append("rect")
       .attr("fill","#909090")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",70);
   
   svg.append("rect")
       .attr("fill","#D2E190")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",90);

   svg.append("rect")
       .attr("fill","#81A140")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",110);

   svg.append("rect")
       .attr("fill","#3B5c0A")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",130);

   svg.append("rect")
       .attr("fill","#046307")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",150);

   svg.append("rect")
       .attr("fill","#1E5631")
       .attr("width",30)
       .attr("height",10)
       .attr("x",w-240)
       .attr("y",170);

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",57)
       .text("Renewables planned for <10% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",77)
       .text("Renewables planned for <20% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",97)
       .text("Renewables planned for <40% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",117)
       .text("Renewables planned for ~50% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",137)
       .text("Renewables planned for ~75% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",157)
       .text("Renewables planned for 90% Total Load");

   svg.append("text")
       .attr("class","legend-labels")
       .attr("x",w-200)
       .attr("y",177)
       .text("Renewables planned for 100% Total Load");


