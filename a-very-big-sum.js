function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    let sum = arr.reduce((sum,val)=>{
        return sum + val;
    });
    console.log(sum)
}