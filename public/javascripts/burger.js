function closestBurgerTo(myPosition) {
  var burgers = [
    { name: "Bunsen",            latitude: 53.3478,  longitude: -6.2597},
    { name: "Burger Joint",      latitude: 40.7641,  longitude: -73.9784},
    { name: "Inglewood",         latitude: 46.2000,  longitude: 6.1500},
    { name: "Rockwell and Sons", latitude: -37.8005, longitude: 144.9842}
  ];

  function dist(x, y) {
    const radiansPerDegree = Math.PI / 180;
    function sin(theta) { return(Math.sin(theta * radiansPerDegree)); }
    function cos(theta) { return(Math.cos(theta * radiansPerDegree)); }
    const deltaLambda = Math.abs(x.longitude - y.longitude);
    return(Math.acos(sin(x.latitude) * sin(y.latitude) + cos(x.latitude) * cos(y.latitude) * cos(deltaLambda)));
  }

  var minDist = 1.0;
  var closestBurger = undefined;
  for (var i = 0; i < burgers.length; i++) {
    var thisDist = dist(myPosition.coords, burgers[i]);
    if (thisDist < minDist) {
      minDist = thisDist;
      closestBurger = burgers[i];
    }
  }

  return(closestBurger);
};

