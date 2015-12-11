function Coin(name){
    var coins = {
        "penny": [0.1, 0.5, 0.01],
        "nickel": [0.5, 1, 0.05],
        "dime": [1, 1.5, 0.1],
        "quarter": [2, 2.5 ,0.25]
    }
    this.name = name;
    this.weight = coins[name][0];
    this.size = coins[name][1];
    this.value = coins[name][2];
}

function VendingMachine(){
    this.inserted = 0;
    this.returned = 0;
    this.coins = {
        "nickel": 0,
        "dime": 0,
        "quarter": 0
    }
    this.products = {
        "cola": 1,
        "chips": 0.5,
        "candy": 0.65
    }
}

VendingMachine.prototype.init = function(){
    return "Please insert coins";
}

VendingMachine.prototype.acceptCoins = function(coin){
   coin.weight > 0.1 && coin.size > 0.5 ? this.inserted += coin.value : this.returned += coin.value;

}

VendingMachine.prototype.selectProduct = function(name){
    var price = this.products[name];
    if(price){
        if(this.inserted < price){
            console.log(price);
            console.log("Insert Coins");
        }
        else{
            this.returned = this.inserted - price;
            this.inserted = 0;
            console.log("Thank You");
        }
    }
    else{
        console.log("Sold Out");
        console.log("Remainding Balance is " + this.inserted + " dollar");
    }

}

VendingMachine.prototype.returnCoins = function(){
    var change = this.returned;
    //this.returned = 0;
    var returnCoins = {"quarter": 0, "nickel": 0, "dime": 0};
    if(change % 0.25 === 0){
        returnCoins["quarter"] = Math.floor(change / 0.25);
    }
    else{
        returnCoins["quarter"] = Math.floor(change / 0.25);
        change = Math.round((change - returnCoins["quarter"] * 0.25)*100) / 100;
        if(change % 0.1 === 0){
            returnCoins["dime"] = Math.floor(change / 0.1);
        }
        else{
            returnCoins["dime"] = Math.floor(change / 0.1);
            change = Math.ceil((change - returnCoins["dime"] * 0.1) * 100) / 100;
            returnCoins["nickel"] = Math.floor(change / 0.05);
        }
    }
    this.returned = 0;
    console.log("Insert Coins");
    return returnCoins;
}

