
require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView, WebMap)
   {
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap:"satellite"});
    let map3 = new Map({basemap:"osm"});
    let mapContainer = new MapView({
    container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
    map: map1, zoom:12, center: [23.4161600,50.4476700]
 });
}) 

