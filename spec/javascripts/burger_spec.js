describe("closestBurgerTo", function() {
  it("returns Bunsen when in Edinburgh", function() {
    var pos = { coords: { latitude: 56, longitude: -3 } };
    expect(closestBurgerTo(pos).name).toBe("Bunsen");
  });

  it("returns Inglewood when in Geneva", function() {
    var pos = { coords: { latitude: 46, longitude: 6 } };
    expect(closestBurgerTo(pos).name).toBe("Inglewood");
  });

  it("returns Burger Joint when in NYC", function() {
    var pos = { coords: { latitude: 40, longitude: -74 } };
    expect(closestBurgerTo(pos).name).toBe("Burger Joint");
  });

  it("returns Rockwell and Sons when in down under", function() {
    var pos = { coords: { latitude: -37, longitude: 144 } };
    expect(closestBurgerTo(pos).name).toBe("Rockwell and Sons");
  });
});

