function processData(input) {
    
    let inputs = input.split('\n');
    let lines = inputs[0];
    
    for (let i = 1; i <= lines; i++)
    {
        let word = inputs[i];
        // Initialize words. 0 is always even.
        let even = word[0];
        let odd = "";
       
        for (let j = 1;j < word.length; j++)
        {
            if (j % 2 == 0)
            {
                even += word[j];
            }
            if (j % 2 != 0)
            {
                odd += word[j];
            }
        }
        
        console.log(`${even} ${odd}`);
    } 
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
