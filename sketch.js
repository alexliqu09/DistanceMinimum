var cities = [];

var totalCities=12;

let tsp;

var recordDistancia;

var bestEver;

function setup(){

  createCanvas(700,600);

  for (var i=0;i<totalCities;i++){

    cities[i] =createVector(random(width),random(height));

  }

  bestEver=cities;

  tsp= new Tsp(cities,totalCities,recordDistancia,bestEver);

  var d = tsp.cal_Distance(cities);

  recordDistancia=d;

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

    console.log(recordDistancia);

  }

}



function swap(a,i,j){

  var aux=a[i];

  a[i]=a[j];

  a[j]=aux;

}
