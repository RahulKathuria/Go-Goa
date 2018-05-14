
var map_location = [
  {
    name : 'Casino Royale',
    location : [15.501766065222494,73.82690138182622],
    id : "4e64c921aeb7360315e8c0af",
    type : "Casino",
    show: true
  },
  {
    name : 'Casino Pride',
    location : [15.501886770599752,73.8277801725433],
    id : "4e07b2b652b165b7d7b03d63",
    type : "Casino",
    show: true
  },
  {
    name : 'Deltin Royale',
    location : [15.500657379996996,73.8311574495556],
    id : "53cd6412498e4047bd6577f8",
    type : "Casino",
    show: true
  },
  {
    name : 'Deltin Jaqk',
    location : [15.502119885335803,73.82737338175467],
    id : "526b2d0111d20543a7e35ae0",
    type : "Casino",
    show: true
  },
  {
    name : 'Anjuna Beach',
    location : [15.576338710218398,73.7406748636064],
    id : "4bd2e62fcaff95210094d3f0",
    type : "Beach",
    show: true
  },
  {
    name : 'Baga Beach',
    location : [15.557166506557026,73.75152344495682],
    id : "4b9f686bf964a520ce2037e3",
    type : "Beach",
    show: true
  },
  {
    name : 'Calangute Beach',
    location : [15.544955805642918,73.7573152442135],
    id : "4b9f686bf964a520ce2037e3",
    type : "Beach",
    show: true
  },
  {
    name : 'Candolim Beach',
    location : [15.517358733772253,73.76487650815488],
    id : "4b9f686bf964a520ce2037e3",
    type : "Beach",
    show: true
  }];

  var markerdisplay = function(){
    
  }







function initMap() {
        var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 13,
          center: {
            lat:15.496777,
            lng:73.827827
          }
        });

        var marker = new google.maps.Marker({
          position: {
            lat:15.496777,
            lng:73.827827
          },
          map: map
        });
}

