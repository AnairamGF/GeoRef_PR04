var map = new maplibregl.Map({
    container: 'map', 
    style:'https://api.maptiler.com/maps/toner-v2/style.json?key=v8Wa450Znk0GRb3HpQnr', 
    //style: 'https://api.maptiler.com/maps/hybrid/style.json?key=v8Wa450Znk0GRb3HpQnr',
    //center: [-101.6313894764541, 21.166128124361702], 
    center: [-0.11,51.49], 
    zoom: 15 
});

var london = new maplibregl.Marker() 
.setLngLat([-0.11,51.49]) 
//.setLngLat([-101.6313894764541, 21.166128124361702]) 
.addTo(map);