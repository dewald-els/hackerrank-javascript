function solve(alice, bob){
    let bobPoints = 0;
    let alicePoints = 0;
    alice.map((val, i)=>{
        if (parseInt(val) > parseInt(bob[i])) alicePoints++;
        else if (parseInt(val) < parseInt(bob[i])) bobPoints++
    });
    return [alicePoints, bobPoints];
}

function main() {
    var alice = readLine().split(' ');
    var bob = readLine().split(' ');
    var result = solve(alice, bob);
    console.log(result.join(" "));
}