isPalindrome=(str)=>{
    const reversArray=[];
    const len=str.length;
   
    if(typeof str!=='string'){
        return 'not valid';
    }
    
    for(let i=len;i>=0;i--){
        reversArray.push(str[i]);
    }
    
    if(str === reversArray.join('')){
            return 1;   
    }else{
        return 0;
    }
}

let str =['mom','tom','nitin','aja'];
for(let st of str){
console.log(". ",st,isPalindrome(st));
}