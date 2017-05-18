function main() {
    var m_temp = readLine().split(' ');
    var mWordCount = parseInt(m_temp[0]);
    var nWordCount = parseInt(m_temp[1]);
    mWords = readLine().split(' ');
    nWords = readLine().split(' ');

    /**
    console.log(mWordCount);
    console.log(nWordCount);
    console.log(mWords);
    console.log(nWords);
    */
   
    let result = 'Maybe';
    
    if (mWordCount < nWordCount){
        result = 'No';
    } 
    else 
    {      
        result = nWords.map((word)=>{
            let i = mWords.indexOf(word);
            if (i !== false) mWords.splice(i,1);            
            return i !== -1;
        }).join(',');
        result = result.indexOf('false') > -1 ? 'No' : 'Yes';
    }
    console.log(result);
}