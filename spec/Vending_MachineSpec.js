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

describe("Test Vending Machine features", function() {
  var vm;
  beforeEach(function() {
    vm = new VendingMachine();
  });

  describe("Vending Machine is initialized", function() {
    it("instruct user to insert coins", function(){
      expect(vm.init()).toEqual("Please insert coins");
    });
    it("initial inserted coin should be zero", function(){
      expect(vm.inserted).toEqual(0);
    });
    it("initial returned coin should be zero", function(){
      expect(vm.returned).toEqual(0);
    });
  });
  describe("Vending Machine should accept valid coins and reject invalid coins", function() {
    describe("Inserted Nickel", function () {
      var nickel;
      beforeEach(function () {
        nickel = new Coin("nickel");
        vm.acceptCoins(nickel);
      });
      it("Vending Machine should accept nickel", function () {
        expect(vm.inserted).toEqual(0.05);
      });
      it("Vending Machine should not return nickel", function () {
        expect(vm.returned).toEqual(0);
      });
    });

    describe("Inserted Dime", function () {
      var dime;
      beforeEach(function () {
        dime = new Coin("dime");
        vm.acceptCoins(dime);
      });
      it("Vending Machine should accept dime", function () {
        expect(vm.inserted).toEqual(0.1);
      });
      it("Vending Machine should not return dime", function () {
        expect(vm.returned).toEqual(0);
      });
    });
  });
  describe("Inserted Quarter", function () {
    var quarter;
    beforeEach(function () {
      quarter = new Coin("quarter");
      vm.acceptCoins(quarter);
    });
    it("Vending Machine should accept quarter", function () {
      expect(vm.inserted).toEqual(0.25);
    });
    it("Vending Machine should not return quarter", function () {
      expect(vm.returned).toEqual(0);
    });
  });
  describe("Inserted Penny", function () {
    var penny;
    beforeEach(function () {
      penny = new Coin("penny");
      vm.acceptCoins(penny);
    });
    it("Vending Machine should reject penny", function () {
      expect(vm.inserted).toEqual(0);
      expect(vm.returned).toEqual(0.01);
    });
  });
  describe("Vending Machine has products", function() {
    beforeEach(function () {
      spyOn(console, 'log');
    });
    it("contains three products", function(){
      expect(Object.keys(vm.products).length).toEqual(3);
    });
    it("cola for 1 dollar", function(){
      vm.selectProduct("cola");
      expect(console.log).toHaveBeenCalledWith(1);
    });
    it("chips for 0.5 dollar", function(){
      vm.selectProduct("chips");
      expect(console.log).toHaveBeenCalledWith(0.5);
    });
    it("candy for 0.65 dollar", function(){
      vm.selectProduct("candy");
      expect(console.log).toHaveBeenCalledWith(0.65);
    });
  });

  describe("Vending Machine select product with one dollar", function() {
    beforeEach(function () {
      spyOn(console, 'log');
      var quarter = new Coin("quarter");
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
    });
    it("customer selects cola should return no money ", function(){
      vm.selectProduct("cola");
      expect(vm.inserted).toEqual(0);
      expect(vm.returned).toEqual(0);
      expect(console.log).toHaveBeenCalledWith("Thank You");
    });
    it("customer selects chips should return 0.5 dollar ", function(){
      vm.selectProduct("chips");
      expect(vm.inserted).toEqual(0);
      expect(vm.returned).toEqual(0.5);
      expect(console.log).toHaveBeenCalledWith("Thank You");
    });
    it("customer selects candy should return 0.35 dollar ", function(){
      vm.selectProduct("candy");
      expect(vm.inserted).toEqual(0);
      expect(vm.returned).toEqual(0.35);
      expect(console.log).toHaveBeenCalledWith("Thank You");
    });
  });

  describe("Vending Machine returns correct change to customer", function() {
    beforeEach(function () {
      spyOn(console, 'log');
      var quarter = new Coin("quarter");
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
      vm.acceptCoins(quarter);
      vm.selectProduct("candy");
    });
    it("customer should receive 0.35 as change", function(){
      expect(vm.inserted).toEqual(0);
      expect(vm.returned).toEqual(0.35);
      expect(vm.returnCoins()).toEqual(0.35);
      expect(vm.returned).toEqual(0);
      expect(console.log).toHaveBeenCalledWith("Insert Coins");
    });
  });



});



