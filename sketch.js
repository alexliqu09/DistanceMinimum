var cities = [];

var totalCities=10;

var tsp;

var recordDistancia;

var bestEver;

function setup(){

  createCanvas(700,600);

  for (var i=0;i<totalCities;i++){

    cities[i] =createVector(random(width),random(height));

  }

  bestEver=cities;

  tsp= new Tsp(cities,totalCities);

  recordDistancia = tsp.cal_Distance(cities);



}


function draw(){

 tsp.crear_vertices(10,10);

 tsp.edge(0,205,0,4,cities);

 tsp.edge(205,204,0,4,bestEver);

  var i=floor(random(cities.length));

  var j=floor(random(cities.length));

  swap(cities,i,j);

  var distancia = tsp.cal_Distance(cities);

  if(distancia<recordDistancia){

    recordDistancia=distancia;

    bestEver=cities.slice();

    console.log("La mínima distancia es: " + recordDistancia);

  }

}



function swap(a,i,j){

  var aux=a[i];

  a[i]=a[j];

  a[j]=aux;

}

class Tsp {

//cities = [];

 //totalCities;


    constructor(cities,totalCities) {

      this.cities=cities;

      this.totalCities=totalCities;

  }

  cal_Distance(points){

    var suma=0;

    for (var i=0;i<points.length-1;i++){

        var d = dist(points[i].x,points[i].y,points[i+1].x,points[i+1].y);

        suma+=d;

    }

    return suma;

  }

  edge(i,j,k,l,vec){

    stroke(i,j,k);

    strokeWeight(l);

    beginShape();

    for (var i=0;i<cities.length;i++){

      vertex(vec[i].x,vec[i].y);

    }
    vertex(vec[0].x,vec[0].y);

    endShape();

  }

  crear_vertices(a,b){

    background(0);

    fill(255, 204, 0);

    noFill();

    for (var i=0;i<cities.length;i++){

      ellipse(cities[i].x,cities[i].y,a,b);

    }

  }

}
