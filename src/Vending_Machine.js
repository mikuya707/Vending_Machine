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
}

VendingMachine.prototype.init = function(){
    return "Please insert coins";
}

VendingMachine.prototype.acceptCoins = function(coin){
   coin.weight > 0.1 && coin.size > 0.5 ? this.inserted += coin.value : this.returned += coin.value;

}
