function main() {
    
    let calcFromPerc = function(val) {
        return val / 100;
    };
    
    let total = 0;
    let tip = mealCost * calcFromPerc(tipPercent);
    let tax = mealCost * calcFromPerc(taxPercent);
    total = Math.round(mealCost + tip + tax);
    let message = `The total meal cost is ${total} dollars.`;
    console.log(message);
}