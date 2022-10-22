sumElement=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

let arr=new Array(1,2,3);
console.log(sumElement(arr));