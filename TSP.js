
class Tsp {

  cities = [];

  totalCities;

  recordDistancia;

  bestEver;

    constructor(cities,totalCities,recordDistancia,bestEver) {

      this.cities=cities;

      this.totalCities=totalCities;

      this.recordDistancia=recordDistancia;

      this.bestEver=bestEver;

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
