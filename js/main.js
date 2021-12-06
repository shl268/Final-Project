


// Load CSV file
// d3.csv("./data/state_emissions.csv", (row) => {
//	
// 	// convert
// 	// 	row.2018_Emissions = parseFloat(row.2018_Emissions);
// 	// 	row.2030_Budget = parseFloat(row.2030_Budget);
// 	// 	row.2030_Projection = parseFloat(row.2030_Projection);
// 	// 	row.Variance = parseFloat(row.Variance);
//	
// 	return row;
//	
// }).then( d => {
// 	drawChart(d)
// })
//
// function drawChart(data){

	//Setup SVGs
	
	let width1 = 800,
		height1 = 600;
	
	//Append SVG
	let svg1 = d3.select("#chart-area1")
		.append("svg").attr("width", width1).attr("height", height1);
	
	let width2 = 1500,
		height2 = 400;
	
	let svg2 = d3.select("#chart-area2")
		.append("svg").attr("width", width2).attr("height", height2);


	//VISUALISATION 1
	
	//Background circles
	svg1.append("circle")
		.attr("cx",300)
		.attr("cy",250)
		.attr("r",50)
		.attr("fill", "#343d46");

	svg1.append("circle")
		.attr("cx",550)
		.attr("cy",140)
		.attr("r",50)
		.attr("fill", "#343d46");

	svg1.append("circle")
		.attr("cx",630)
		.attr("cy",260)
		.attr("r",70)
		.attr("fill", "#343d46");

	svg1.append("circle")
		.attr("cx",125)
		.attr("cy",571)
		.attr("r",25)
		.attr("fill", "#343d46");
	
	svg1.append("circle")
		.attr("cx",115)
		.attr("cy",600)
		.attr("r",10)
		.attr("fill", "#343d46");
	
	//QLD
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",190)
		.attr("cy",400)
		.attr("r",171)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd")
		.on("mouseover", function(){
			svg1.append("text")
				.text("171.7 MT")
				.attr("x",135)
				.attr("y",440)
				.attr("fill","darkred")
				.attr("font-size",30)
		})
		.on("click", function(){
			svg2.append("rect")
				.attr("x",65)
				.attr("y",60)
				.attr("height",320)
				.attr("width",250)
				.attr("stroke","#343d46")
				.attr("stroke-width",2)
				.attr("fill","none")
		})
		.on("mouseout", function(){
			svg2.append("rect")
				.attr("x",65)
				.attr("y",60)
				.attr("height",320)
				.attr("width",250)
				.attr("stroke","white")
				.attr("stroke-width",2)
				.attr("fill","none")
});

	svg1.append("text")
		.attr("class","emissions-label")
		.attr("x", 190)
		.attr("y", 400)
		.text("QLD")
		.attr("fill", "#343d46");
	

	//NSW
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",455)
		.attr("cy",250)
		.attr("r",131)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd")
		.on("mouseover", function() {
			svg1.append("text")
				.text("132.7 MT")
				.attr("x", 415)
				.attr("y", 280)
				.attr("fill", "darkred")
				.attr("font-size", 20)
		})
		.on("click", function(){
			svg2.append("rect")
				.attr("x",330)
				.attr("y",60)
				.attr("height",320)
				.attr("width",200)
				.attr("stroke","#343d46")
				.attr("stroke-width",2)
				.attr("fill","none")
		})
		.on("mouseout", function(){
			svg2.append("rect")
				.attr("x",330)
				.attr("y",60)
				.attr("height",320)
				.attr("width",200)
				.attr("stroke","white")
				.attr("stroke-width",2)
				.attr("fill","none")
		});

	svg1.append("text")
		.attr("class","emissions-label")
		.attr("x", 455)
		.attr("y", 250)
		.text("NSW")
		.attr("fill", "#343d46");

	//VIC
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",670)
		.attr("cy",150)
		.attr("r",102)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd")
		.on("mouseover", function(){
			svg1.append("text")
				.text("102.2 MT")
				.attr("x",640)
				.attr("y",170)
				.attr("fill","darkred")
				.attr("font-size",15)})
		.on("click", function(){
			svg2.append("rect")
				.attr("x",545)
				.attr("y",60)
				.attr("height",320)
				.attr("width",150)
				.attr("stroke","#343d46")
				.attr("stroke-width",2)
				.attr("fill","none")
		})
		.on("mouseout", function(){
			svg2.append("rect")
				.attr("x",545)
				.attr("y",60)
				.attr("height",320)
				.attr("width",150)
				.attr("stroke","white")
				.attr("stroke-width",2)
				.attr("fill","none")
		});

	svg1.append("text")
		.attr("class","emissions-label")
		.attr("x", 670)
		.attr("y", 150)
		.text("VIC")
		.attr("fill", "#343d46");

	//WA
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",255)
		.attr("cy",145)
		.attr("r",91)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd")
		.on("mouseover", function(){
			svg1.append("text")
				.text("91.5 MT")
				.attr("x",230)
				.attr("y",165)
				.attr("fill","darkred")
				.attr("font-size",15)});

	svg1.append("text")
		.attr("class","emissions-label")
		.attr("x", 255)
		.attr("y", 145)
		.text("WA")
		.attr("fill", "#343d46");

	//SA
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",540)
		.attr("cy",100)
		.attr("r",24)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd");

	svg1.append("text")
		.attr("class","emissions-label")
		.attr("x", 540)
		.attr("y", 105)
		.text("SA")
		.attr("fill", "#343d46")
		.style("font-size", "medium");

	//NT
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",620)
		.attr("cy",300)
		.attr("r",17)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 15)
		.attr("fill", "#dddddd");

	//TAS
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",620)
		.attr("cy",350)
		.attr("r",2)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	//ACT
	svg1.append("circle")
		.attr("class","state-circle")
		.attr("cx",650)
		.attr("cy",300)
		.attr("r",2)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");


	//VISUALISATION 2

	//QLD
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",190)
		.attr("cy",200)
		.attr("r",171/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");

	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",190)
		.attr("cy",200)
		.attr("r",80)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");

	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",190)
		.attr("cy",200)
		.attr("r",171/4)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");

	svg2.append("text")
		.attr("class","variance-label")
		.attr("x", 190)
		.attr("y", 150)
		.text("68MT")
		.attr("fill", "black");

	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 190)
		.attr("y", 350)
		.text("QLD")
		.attr("fill", "#343d46");

//NSW
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",430)
		.attr("cy",200)
		.attr("r",131/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",430)
		.attr("cy",200)
		.attr("r",50)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",430)
		.attr("cy",200)
		.attr("r",171/4)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","variance-label")
		.attr("x", 430)
		.attr("y", 148)
		.text("6MT")
		.attr("fill", "black");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 430)
		.attr("y", 350)
		.text("NSW")
		.attr("fill", "#343d46");

	//VIC
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",620)
		.attr("cy",200)
		.attr("r",102/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",620)
		.attr("cy",200)
		.attr("r",60)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",620)
		.attr("cy",200)
		.attr("r",102/4)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","variance-label")
		.attr("x", 620)
		.attr("y", 168)
		.text("11MT")
		.attr("fill", "black");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 620)
		.attr("y", 350)
		.text("VIC")
		.attr("fill", "#343d46");

	//WA
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",785)
		.attr("cy",200)
		.attr("r",92/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",785)
		.attr("cy",200)
		.attr("r",20)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",785)
		.attr("cy",200)
		.attr("r",25)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","variance-label")
		.attr("x", 785)
		.attr("y", 150)
		.text("")
		.attr("fill", "white");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 785)
		.attr("y", 350)
		.text("WA")
		.attr("fill", "#343d46");

//SA
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",900)
		.attr("cy",200)
		.attr("r",24/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",900)
		.attr("cy",200)
		.attr("r",12)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",900)
		.attr("cy",200)
		.attr("r",12)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 900)
		.attr("y", 350)
		.text("SA")
		.attr("fill", "#343d46");

//NT
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",960)
		.attr("cy",200)
		.attr("r",16/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 5)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",960)
		.attr("cy",200)
		.attr("r",8)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",960)
		.attr("cy",200)
		.attr("r",8)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 960)
		.attr("y", 350)
		.text("NT")
		.attr("fill", "#343d46");

//ACT
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",1010)
		.attr("cy",200)
		.attr("r",10/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 3)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",1010)
		.attr("cy",200)
		.attr("r",4)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",1010)
		.attr("cy",200)
		.attr("r",5)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 1010)
		.attr("y", 350)
		.text("ACT")
		.attr("fill", "#343d46");

//TAS
	svg2.append("circle")
		.attr("class","current")
		.attr("cx",1060)
		.attr("cy",200)
		.attr("r",5/3*2)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 2)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("circle")
		.attr("class","actual")
		.attr("cx",1060)
		.attr("cy",200)
		.attr("r",2)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("circle")
		.attr("class","budget")
		.attr("cx",1060)
		.attr("cy",200)
		.attr("r",3)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","budget-label")
		.attr("x", 1060)
		.attr("y", 350)
		.text("TAS")
		.attr("fill", "#343d46");

	//Legend
	svg2.append("rect")
		.attr("width",50)
		.attr("height",20)
		.attr("x",250)
		.attr("y",20)
		.attr("stroke", "#343d46")
		.attr("stroke-dasharray", 2)
		.attr("stroke-width", 2)
		.attr("fill", "white");
	
	svg2.append("text")
		.attr("class","legend1-labels")
		.attr("x",315)
		.attr("y",35)
		.text("Current Emissions");

	svg2.append("rect")
		.attr("width",50)
		.attr("height",20)
		.attr("x",500)
		.attr("y",20)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#dddddd");
	
	svg2.append("text")
		.attr("class","legend1-labels")
		.attr("x",565)
		.attr("y",35)
		.text("Budget Emissions");

	svg2.append("rect")
		.attr("width",50)
		.attr("height",20)
		.attr("x",750)
		.attr("y",20)
		.attr("stroke", "#343d46")
		.attr("stroke-width", 2)
		.attr("fill", "#a70000");
	
	svg2.append("text")
		.attr("class","legend1-labels")
		.attr("x",815)
		.attr("y",35)
		.text("Emissions Variance");

//Linked view and Interaction


