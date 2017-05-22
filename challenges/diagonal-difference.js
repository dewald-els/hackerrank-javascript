function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    let counterIndex = a.length-1;
    let mSum = 0, bSum = 0;;
    
    a.map((val, i, arr)=>{        
        mSum += arr[i][i];
        bSum += arr[i][counterIndex];
        counterIndex--;
    });
    
    console.log(Math.abs(mSum - bSum));
    
}