function main() {
    var N = parseInt(readLine());
    
    let print = '';
    
    if (N %2 !== 0)
    {
        print = 'Weird';
    }
    else if (N > 20 || N %2 == 0 && N < 6 )
    {
        print = 'Not Weird';
    }
    else if (N %2 == 0 && N <= 20 && N > 5)
    {
        print = 'Weird';
    }
    
    console.log(print);
}