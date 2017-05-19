function processData(input) {    
    let _input = input.split('\n');
    let size = _input[0];
    let a = _input[1].split(' ');
    
    for (let i = size; i > 0; i--)
    {
        let sortValue = a[i-1];
        let insertIntoIndex = i-1;

        while (insertIntoIndex > 0 && parseInt(sortValue) < parseInt(a[insertIntoIndex-1]))
        {
            a[insertIntoIndex] = a[insertIntoIndex-1];
            insertIntoIndex--;
            // Current sort
            console.log(a.join(' '));       
        }
        a[insertIntoIndex] = sortValue;
    }
    // Answer
    console.log(a.join(' '));    
} 