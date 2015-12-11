describe("Test Coins", function() {
  var penny;
  var nickel;
  var dime;
  var quarter;

  beforeEach(function() {
    penny = new Coin("penny");
    nickel = new Coin("nickel");
    dime = new Coin("dime");
    quarter = new Coin("quarter");

  });
  it("test coins' weight", function(){
    expect(penny.weight).toEqual(0.1);
    expect(nickel.weight).toEqual(0.5);
    expect(dime.weight).toEqual(1);
    expect(quarter.weight).toEqual(2);

  });
  it("test coins' size", function(){
    expect(penny.size).toEqual(0.5);
    expect(nickel.size).toEqual(1);
    expect(dime.size).toEqual(1.5);
    expect(quarter.size).toEqual(2.5);

  });
  it("identify coins' value", function(){
    expect(penny.value).toEqual(0.01);
    expect(nickel.value).toEqual(0.05);
    expect(dime.value).toEqual(0.1);
    expect(quarter.value).toEqual(0.25);

  });

});

