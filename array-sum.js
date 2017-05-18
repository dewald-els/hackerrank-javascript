function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(arr.reduce((sum, val)=>{ return sum + val}));
}