var map, infoWindow;

function initMap() {
  
  //markers array
  

 var starting = 
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 	29.749907, lng: -95.358421 },
    zoom: 10,
  });

  infoWindow = new google.maps.InfoWindow;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (p){
      var clientL = {lat: p.coords.latitude, lng: p.coords.longitude} //get client location
       map.setCenter(clientL);
  var iconC = {
    url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png", // url
    scaledSize: new google.maps.Size(25, 25), // scaled size
    origin: new google.maps.Point(0,0), // o
    anchor: new google.maps.Point(0, 0) // anchor
  };

      const current = new google.maps.Marker({
      position: clientL,
      icon: iconC,
      map: map,
    });
        infoWindow.setPosition(clientL);
        infoWindow.setContent("Your Location");
        infoWindow.open(map);
       
    }, function(){
      noLocation("No location available", map.center());
      }

    )
  }
  else{
    noLocation("No location available", map.center());
  }
  var markers = [{
    coords:{lat:29.619678,lng:-95.634949},
    iconI: 'images/worldwide.png',
     content:
'<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"><div class="card" style="width: 30rem; height:15rem;"> <center><img src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1064,w_1596,x_0,y_0/c_limit,dpr_3.0,f_auto,fl_lossy,q_80,w_500/SLTS_Nighttime_kdd8vq.jpg" class="card-img-top" style ="width: 245px; height:195px; border-radius: 10px;"alt="sugarland"></center><div class="card-body"><center><h4>77498</h4></center><h5 class="card-title1">SugarLand, Texas </h5><h6><pre class ="tab2">Danger Level <span class="avgs">Medium</span></pre><pre class ="tab2">Avg Flood Damages Cost<span class="avgs">$10k</span></pre><pre class = "tab2">Flood Assistance <span class="avgs">No</span></pre></div> <b><center>Total Population: 118,600</center></b><br><p class="card-text"> The Houston Museum of Natural Science at Sugar Land features a salt water aquarium and a digital dome theater. Fort Bend Children\'s Discovery Center offers interactive exhibits, including a child-size city called Kidtropolis. In the south, trails wind through Sugar Land Memorial Park and Brazos River Corridor. Oyster Creek Park includes a rose garden and a pond.</p><center><b>Average in damages </b></center><b<span class="avgs"></span><span class = "icon2"></span><br><div class="charity-icon" style="margin:0 15px 15px 0"><a href="https://www.houstonfoodbank.org/"><img class="rounded-circle-map" alt="100x100" src="https://images.vexels.com/media/users/3/157343/isolated/preview/fa058a304813b6d204d29253f5cb90d4-flat-home-house-icon-by-vexels.png" data-holder-rendered="true"><div class="left"></div></a>  <a href="https://www.redcross.org/local/texas/gulf-coast/about-us/locations/houston.html"> <img class="rounded-circle-map" alt="100x100" src="https://www.freeiconspng.com/thumbs/car-icon-png/black-car-icons-9.png" data-holder-rendered="true"><div class="left"></div></a><a href="https://www.houstonspca.org/"><img class="rounded-circle-map" alt="100x100" src="https://image.flaticon.com/icons/png/128/3749/3749828.png" data-holder-rendered="true"> <div class="left"></div></a></div><div class="resources"><center><b>Additional Resources</b></center><br><div class="btn-group-md" role="group" aria-label="Basic example"><button type="button" class="btn btn-primary">Resource 1</button>&nbsp<button type="button" class="btn btn-primary">Resource 2</button>&nbsp<button type="button" class="btn btn-primary">Resource 3</button></div></div><br><center><a href="https://en.wikipedia.org/wiki/Sugar_Land,_Texas" class="btn btn-primary">Wikipedia Page</a></center></div></div><br> '
      },
      {
    coords:{lat:29.9717,lng:-95.6938},
    iconI: 'images/worldwide.png',
     content: '<h1>Cypress</h1>'
      },
      {
    coords:{lat:29.7058,lng:-95.4588},
    iconI: 'images/worldwide.png',
     content: '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"><div class="card" style="width: 30rem; height:15rem;"> <center><img src="https://365thingsinhouston.com/wp-content/uploads/2016/06/5-must-do-things-in-chinatown-houston-2016-1.jpg" class="card-img-top" style ="width: 245px; height:195px; border-radius: 10px;"alt="Bellaire"></center><div class="card-body"><center><h4>77498</h4></center><h5 class="card-title1">Bellaire, Texas </h5><h6><pre class ="tab2">Danger Level <span class="avgs">High</span></pre><pre class ="tab2">Avg Flood Damages Cost<span class="avgs">$20k</span></pre><pre class = "tab2">Flood Assistance <span class="avgs">No</span></pre></div> <b><center>Total Population: 18,966</center></b><br><p class="card-text"> As of the 2010 U.S. Census, the city population was 16,855. It is surrounded by the cities of Houston and West University Place. Bellaire is known as the "City of Homes," owing to its mostly residential character; however, there are offices along the 610 Loop within the city limits. It is also known for its verity of places to eat.</p><center><b>Average in damages </b></center><b<span class="avgs"></span><span class = "icon2"></span><br><div class="charity-icon" style="margin:0 15px 15px 0"><a href="https://www.houstonfoodbank.org/"><img class="rounded-circle-map" alt="100x100" src="https://images.vexels.com/media/users/3/157343/isolated/preview/fa058a304813b6d204d29253f5cb90d4-flat-home-house-icon-by-vexels.png" data-holder-rendered="true"><div class="left"></div></a>  <a href="https://www.redcross.org/local/texas/gulf-coast/about-us/locations/houston.html"> <img class="rounded-circle-map" alt="100x100" src="https://www.freeiconspng.com/thumbs/car-icon-png/black-car-icons-9.png" data-holder-rendered="true"><div class="left"></div></a><a href="https://www.houstonspca.org/"><img class="rounded-circle-map" alt="100x100" src="https://image.flaticon.com/icons/png/128/3749/3749828.png" data-holder-rendered="true"> <div class="left"></div></a></div><div class="resources"><center><b>Additional Resources</b></center><br><div class="btn-group-md" role="group" aria-label="Basic example"><button type="button" class="btn btn-primary">Resource 1</button>&nbsp<button type="button" class="btn btn-primary">Resource 2</button>&nbsp<button type="button" class="btn btn-primary">Resource 3</button></div></div><br><center><a href="https://en.wikipedia.org/wiki/Sugar_Land,_Texas" class="btn btn-primary">Wikipedia Page</a></center></div></div><br>'
      },
      {
    coords:{lat:29.9014,lng:-95.4001},
    iconI: 'images/worldwide.png',
     content: '<h1>Aldine</h1>'
      },
      {
    coords:{lat:29.7408,lng:-95.3756},
    iconI: 'images/worldwide.png',
     content: '<h1>Midtown!</h1>'
      },
      {
    coords:{lat:29.691063,lng:-95.209099},
    iconI: 'images/worldwide.png',
     content: '<h1>Pasadena!</h1>'
      }
    ]
    
// const markerr = new google.maps.Marker({
//       position: markers[0].coords,
//       icon: markers[0].iconI,
//       map: map,
//     });
//     iWindow = new google.maps.InfoWindow;
//     iWindow.setPosition({lat:29.619678, lng:-95.634949});
//     iWindow.setContent("Sugarland");
//     iWindow.open(map);

  for(var x =0 ; x<markers.length; x++){
    addMarker(markers[x]);
   // addInfo(); seperate function to add window 
  }

  function addMarker(marks){
    var marker = new google.maps.Marker({
      position: marks.coords,
      map:map
    })
    if(marks.iconI){
      marker.setIcon(marks.iconI);
    }
    if(marks.content){
      var info = new google.maps.InfoWindow({
        content: marks.content
      })
      marker.addListener('click', function(){
        info.open(map,marker)
      })
    }
  }
  var cypress = [
    { lat: 29.952194, lng: -95.585936 },
    { lat: 29.951004, lng: -95.605678 },
    { lat: 29.946305, lng: -95.608484 },
    { lat: 29.945246, lng: -95.627885 },
    { lat: 29.923706, lng: -95.628650 },
    { lat: 29.983234, lng: -95.727363 },
    { lat: 30.000550, lng: -95.724767 },
    { lat: 29.997964, lng: -95.709187 },
    { lat: 30.001113, lng: -95.708928 },
    { lat: 30.001225, lng: -95.712044 },
    { lat: 30.005160, lng: -95.711914 },
    { lat: 30.004935, lng: -95.706591 },
    { lat: 30.013030, lng: -95.705942 },
    { lat: 30.013367, lng: -95.697633 },
    { lat: 30.052931, lng: -95.647259 },
    { lat: 30.045401, lng: -95.645052 },
    { lat: 30.045401, lng: -95.637652 },
    { lat: 30.027531, lng: -95.635964 },
    { lat: 30.019550, lng: -95.632070 },
    { lat: 30.013817, lng: -95.617269 },
    { lat: 30.008645, lng: -95.622982 },
    { lat: 29.996952, lng: -95.602988 },
    { lat: 29.987732, lng: -95.615841 },
    { lat: 29.966927, lng: -95.586370 },
    { lat: 29.952194, lng: -95.585936 }
    ];
    var cypressPoly = new google.maps.Polygon({
    paths: cypress,
    strokeColor: "#52bfbc",
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: "#52bfbc",
    fillOpacity: 0.3,
    });
    cypressPoly.setMap(map);

    var sugarland = [
    { lat: 29.660644, lng: -95.598229 },
    { lat: 29.632186, lng: -95.597070 },
    { lat: 29.631682, lng: -95.583161 },
    { lat: 29.566930, lng: -95.582002 },
    { lat: 29.566930, lng: -95.589247 },
    { lat: 29.552310, lng: -95.588957 },
    { lat: 29.524074, lng: -95.603445 },
    { lat: 29.526848, lng: -95.617934 },
    { lat: 29.547269, lng: -95.633871 },
    { lat: 29.541219, lng: -95.641116 },
    { lat: 29.543235, lng: -95.675888 },
    { lat: 29.551302, lng: -95.696172 },
    { lat: 29.561637, lng: -95.685740 },
    { lat: 29.564661, lng: -95.698200 },
    { lat: 29.599689, lng: -95.698200 },
    { lat: 29.604476, lng: -95.673860 },
    { lat: 29.633697, lng: -95.675308 },
    { lat: 29.645031, lng: -95.651837 },
    { lat: 29.645283, lng: -95.639956 },
    { lat: 29.657118, lng: -95.639377 },
    { lat: 29.656615, lng: -95.628655 },
    { lat: 29.661651, lng: -95.619962 },
    { lat: 29.660644, lng: -95.598229 }
    ];
    var sugarPoly = new google.maps.Polygon({
    paths: sugarland,
    strokeColor: "#49c236",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#49c236",
    fillOpacity: 0.31,
    });
    sugarPoly.setMap(map);

 var aldine = [
    { lat: 29.936829, lng: -95.354803 },
    { lat: 29.894766, lng: -95.354803 },
    { lat: 29.890345, lng: -95.365597 },
    { lat: 29.893145, lng: -95.378600 },
    { lat: 29.891966, lng: -95.383445 },
    { lat: 29.892335, lng: -95.397383 },
    { lat: 29.897032, lng: -95.409687 },
    { lat: 29.915302, lng: -95.408895 },
    { lat: 29.915989, lng: -95.394632 },
    { lat: 29.931921, lng: -95.394315 },
    { lat: 29.933294, lng: -95.381796 },
    { lat: 29.938376, lng: -95.380845 },
    { lat: 29.936829, lng: -95.354803 }
    ];
    var aldinePoly = new google.maps.Polygon({
    paths: aldine,
    strokeColor: "#4d36c2",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#4d36c2",
    fillOpacity: 0.31,
    });
    aldinePoly.setMap(map);

    var jersey = [
    { lat: 29.903153, lng: -95.604057 },
    { lat: 29.891434, lng: -95.587148 },
    { lat: 29.885443, lng: -95.586933 },
    { lat: 29.885369, lng: -95.585088 },
    { lat: 29.881663, lng: -95.584571 },
    { lat: 29.881663, lng: -95.586618 },
    { lat: 29.880493, lng: -95.586594 },
    { lat: 29.880535, lng: -95.582235 },
    { lat: 29.883584, lng: -95.582211 },
    { lat: 29.883668, lng: -95.580741 },
    { lat: 29.885422, lng: -95.580717 },
    { lat: 29.885443, lng: -95.578839 },
    { lat: 29.880556, lng: -95.571685 },
    { lat: 29.880765, lng: -95.570240 },
    { lat: 29.872327, lng: -95.558992 },
    { lat: 29.873205, lng: -95.556439 },
    { lat: 29.874541, lng: -95.556246 },
    { lat: 29.879345, lng: -95.554127 },
    { lat: 29.880410, lng: -95.554175 },
    { lat: 29.880514, lng: -95.549912 },
    { lat: 29.886193, lng: -95.550240 },
    { lat: 29.896085, lng: -95.550362 },
    { lat: 29.895711, lng: -95.561040 },
    { lat: 29.895304, lng: -95.562063 },
    { lat: 29.895763, lng: -95.562991 },
    { lat: 29.895607, lng: -95.567218 },
    { lat: 29.897743, lng: -95.567337 },
    { lat: 29.898871, lng: -95.567951 },
    { lat: 29.899288, lng: -95.568481 },
    { lat: 29.899124, lng: -95.578307 },
    { lat: 29.902570, lng: -95.578292 },
    { lat: 29.902517, lng: -95.584437 },
    { lat: 29.902123, lng: -95.584467 },
    { lat: 29.902016, lng: -95.590235 },
    { lat: 29.900856, lng: -95.590245 },
    { lat: 29.900922, lng: -95.593332 },
    { lat: 29.902513, lng: -95.593256 },
    { lat: 29.904113, lng: -95.594722 },
    { lat: 29.906316, lng: -95.592651 },
    { lat: 29.906997, lng: -95.60308 },
    { lat: 29.905936, lng: -95.602466 },
    { lat: 29.904095, lng: -95.603174 },
    { lat: 29.903202, lng: -95.603968 }
    ];
    var jerseyPoly = new google.maps.Polygon({
    paths: jersey,
    strokeColor: "#c24436",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#c24436",
    fillOpacity: 0.31,
    });
    jerseyPoly.setMap(map);

var pasadena = [
    { lat: 29.728038, lng: -95.139706 },
    { lat: 29.711458, lng: -95.139359 },
    { lat: 29.710554, lng: -95.143871 },
    { lat: 29.678290, lng: -95.142483 },
    { lat: 29.667734, lng: -95.131722 },
    { lat: 29.663210, lng: -95.112284 },
    { lat: 29.644206, lng: -95.10916 },
    { lat: 29.596227, lng: -95.025158 },
    { lat: 29.583247, lng: -95.055010 },
    { lat: 29.578116, lng: -95.066465 },
    { lat: 29.565738, lng: -95.059523 },
    { lat: 29.558794, lng: -95.075143 },
    { lat: 29.570266, lng: -95.085903 },
    { lat: 29.570266, lng: -95.085903 },
    { lat: 29.578418, lng: -95.103953 },
    { lat: 29.607394, lng: -95.114367 },
    { lat: 29.629724, lng: -95.124086 },
    { lat: 29.628552, lng: -95.20864 },
    { lat: 29.668549, lng: -95.209763 },
    { lat: 29.668224, lng: -95.229219 },
    { lat: 29.688379, lng: -95.23445 },
    { lat: 29.716979, lng: -95.229594 },
    { lat: 29.738749, lng: -95.183945 },
    { lat: 29.721204, lng: -95.182449 },
    { lat: 29.727481, lng: -95.169389 },
    { lat: 29.738273, lng: -95.168860 }
    ];

    var katy = [
    { lat: 29.764342, lng: -95.844626 },
    { lat: 29.749141, lng: -95.844368 },
    { lat: 29.749439, lng: -95.837330 },
    { lat: 29.753069, lng: -95.835387 },
    { lat: 29.753572, lng: -95.836511 },
    { lat: 29.754370, lng: -95.836511 },
    { lat: 29.754518, lng: -95.840054 },
    { lat: 29.757135, lng: -95.840003 },
    { lat: 29.757001, lng: -95.836139 },
    { lat: 29.757970, lng: -95.836032 },
    { lat: 29.756237, lng: -95.832555 },
    { lat: 29.771233, lng: -95.815675 },
    { lat: 29.763298, lng: -95.806534 },
    { lat: 29.767136, lng: -95.802114 },
    { lat: 29.768663, lng: -95.801470 },
    { lat: 29.768439, lng: -95.800784 },
    { lat: 29.771829, lng: -95.797050 },
    { lat: 29.773416, lng: -95.797084 },
    { lat: 29.773475, lng: -95.801958 },
    { lat: 29.801514, lng: -95.801999 },
    { lat: 29.801504, lng: -95.809143 },
    { lat: 29.816931, lng: -95.809018 },
    { lat: 29.816921, lng: -95.806194 },
    { lat: 29.831308, lng: -95.806112 },
    { lat: 29.831401, lng: -95.816824 },
    { lat: 29.836093, lng: -95.816803 },
    { lat: 29.836075, lng: -95.819224 },
    { lat: 29.831273, lng: -95.819203 },
    { lat: 29.831490, lng: -95.831214 },
    { lat: 29.816914, lng: -95.831305 },
    { lat: 29.816961, lng: -95.849719 },
    { lat: 29.812475, lng: -95.849780 },
    { lat: 29.812393, lng: -95.850489 },
    { lat: 29.807292, lng: -95.850536 },
    { lat: 29.807176, lng: -95.856105 },
    { lat: 29.785665, lng: -95.856352 },
    { lat: 29.785715, lng: -95.867284 },
    { lat: 29.786107, lng: -95.877241 },
    { lat: 29.788253, lng: -95.877441 },
    { lat: 29.788402, lng: -95.889977 },
    { lat: 29.786188, lng: -95.890072 },
    { lat: 29.785961, lng: -95.918524 },
    { lat: 29.777759, lng: -95.918335 },
    { lat: 29.777759, lng: -95.918335 },
    { lat: 29.785633, lng: -95.914696 },
    { lat: 29.785746, lng: -95.901763 },
    { lat: 29.775458, lng: -95.901627 },
    { lat: 29.776670, lng: -95.898766 },
    { lat: 29.776729, lng: -95.884800 },
    { lat: 29.775547, lng: -95.882177 },
    { lat: 29.777071, lng: -95.871795 },
    { lat: 29.770156, lng: -95.871599 },
    { lat: 29.769861, lng: -95.884961 },
    { lat: 29.761784, lng: -95.865926 },
    { lat: 29.770366, lng: -95.865798 },
    { lat: 29.770380, lng: -95.870001 },
    { lat: 29.777042, lng: -95.870080 },
    { lat: 29.776908, lng: -95.850368 },
    { lat: 29.773429, lng: -95.850368 },
    { lat: 29.764321, lng: -95.844739 },
    { lat: 29.748957, lng: -95.844559 }
    ];
    var katyPoly = new google.maps.Polygon({
    paths: katy,
    strokeColor: "#c28336",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#c28336",
    fillOpacity: 0.31,
    });
    katyPoly.setMap(map);

var pasadenaPoly = new google.maps.Polygon({
    paths: pasadena,
    strokeColor: "#c2a836",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#c2a836",
    fillOpacity: 0.31,
    });
    pasadenaPoly.setMap(map);

    var houstonPoly = new google.maps.Polygon({
    paths: houston,
    strokeColor: "#b6c236",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#b6c236",
    fillOpacity: 0.31,
    });
    houstonPoly.setMap(map);

    var houston = [
    { lat: 29.582913, lng: -95.508454 },
    { lat: 29.641597, lng: -95.509825 },
    { lat: 29.648759, lng: -95.553771 },
    { lat: 29.660693, lng: -95.622435 },
    { lat: 29.671432, lng: -95.623122 },
    { lat: 29.680978, lng: -95.608016 },
    { lat: 29.737038, lng: -95.623122 },
    { lat: 29.707819, lng: -95.717879 },
    { lat: 29.718554, lng: -95.743285 },
    { lat: 29.779361, lng: -95.686980 },
    { lat: 29.781149, lng: -95.781050 },
    { lat: 29.803197, lng: -95.767317 },
    { lat: 29.831370, lng: -95.647403},
    { lat: 29.879566, lng: -95.646135 },
    { lat: 29.839026, lng: -95.642469 },
    { lat: 29.839822, lng: -95.565020 },
    { lat: 29.877182, lng: -95.566853 },
    { lat: 29.863670, lng: -95.524233 },
    { lat: 29.866452, lng: -95.502694 },
    { lat: 29.915322, lng: -95.509109 },
    { lat: 29.913336, lng: -95.494903 },
    { lat: 29.877182, lng: -95.488945 },
    { lat: 29.897048, lng: -95.430743 },
    { lat: 29.900624, lng: -95.418828 },
    { lat: 29.937524, lng: -95.417228 },
    { lat: 29.940499, lng: -95.450702 },
    { lat: 29.993887, lng: -95.424609 },
    { lat: 29.952547, lng: -95.414653 },
    { lat: 29.947624, lng: -95.362112 },
    { lat: 29.916086, lng: -95.392668 },
    { lat: 29.915491, lng: -95.407774 },
    { lat: 29.877989, lng: -95.407774 },
    { lat: 29.873624, lng: -95.247012 },
    { lat: 29.859701, lng: -95.248212},
    { lat: 29.856760, lng: -95.229112 },
    { lat: 29.841750, lng: -95.228771 },
    { lat: 29.838244, lng: -95.234256 },
    { lat: 29.817957, lng: -95.230503 },
    { lat: 29.822716, lng: -95.202788 },
    { lat: 29.791152, lng: -95.204520 },
    { lat: 29.788555, lng: -95.182950 },
    { lat: 29.772077, lng: -95.181317 },
    { lat: 29.771900, lng: -95.153554 },
    { lat: 29.767647, lng: -95.166415 },
    { lat: 29.767717, lng: -95.188630 },
    { lat: 29.758946, lng: -95.190939},
    { lat: 29.759698, lng: -95.222119 },
    { lat: 29.773230, lng: -95.232223 },
    { lat: 29.773732, lng: -95.259361 },
    { lat: 29.714826, lng: -95.246081 },
    { lat: 29.717584, lng: -95.227315 },
    { lat: 29.669182, lng: -95.229625 },
    { lat: 29.669934, lng: -95.248968 },
    { lat: 29.653126, lng: -95.248679 },
    { lat: 29.650868, lng: -95.208261 },
    { lat: 29.632300, lng: -95.186898 },
    { lat: 29.633304, lng: -95.121363 },
    { lat: 29.559752, lng: -95.075171 },
    { lat: 29.524337, lng: -95.149655 },
    { lat: 29.592894, lng: -95.232512 },
    { lat: 29.602685, lng: -95.234533 },
    { lat: 29.598919, lng: -95.249545 },
    { lat: 29.592894, lng: -95.244349},
    { lat: 29.586367, lng: -95.253876 },
    { lat: 29.590384, lng: -95.260227 },
    { lat: 29.598417, lng: -95.332113 },
    { lat: 29.585614, lng: -95.351456 },
    { lat: 29.602182, lng: -95.354632 },
    { lat: 29.612044, lng: -95.355479 },
    { lat: 29.612399, lng: -95.380588 },
    { lat: 29.599442, lng: -95.380180 },
    { lat: 29.598200, lng: -95.446526 },
    { lat: 29.581868, lng: -95.446117 },
    { lat: 29.579928, lng: -95.519671 },
    { lat: 29.591728, lng: -95.520826 },
    { lat: 29.592481, lng: -95.508701 },
    /*{ lat: 29.641171, lng: -95.508123 }, DONT TOUCH PLZ
    { lat: 29.641924, lng: -95.551139 },
    { lat: 29.648448, lng: -95.552872 },
    { lat: 29.656978, lng: -95.586649 }
    { lat: 29.662442, lng: -95.623128 },
    { lat: 29.671995, lng: -95.622873},
    { lat: 29.675792, lng: -95.609521 },
    { lat: 29.692032, lng: -95.608065 },
    { lat: 29.693086, lng: -95.619960 },
    { lat: 29.712275, lng: -95.620446 },
    { lat: 29.712697, lng: -95.626758 } */

    
    ];
    var houstonPoly = new google.maps.Polygon({
    paths: houston,
    strokeColor: "#7ec236",
    strokeOpacity: 0.6,
    strokeWeight: 3,
    fillColor: "#7ec236",
    fillOpacity: 0.31,
    });
    houstonPoly.setMap(map);
}
function noLocation(content, position){
  infoWindow.setPosition(position);
  infoWindow.setContent(content);
  infoWindow.open(map);
}