function main() {
    var n_temp = readLine().split(' ');
    var size = parseInt(n_temp[0]);
    var rotate = parseInt(n_temp[1]);
    a = readLine().split(' ');

    let result = a.map((value, index)=>{
        let indexToDisplay = index + rotate;
        if (indexToDisplay > size -1) {
            indexToDisplay = indexToDisplay - size;
        }
        return a[indexToDisplay];
    }).join(' ');
    console.log(result);
}