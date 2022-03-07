let numlist:number[]=new Array(10);
// let numlist:any[]=new Array(10);//anyにすれば色々な型で入れれる

for (let i = 0; i < numlist.length; i++) {
    numlist[i]=i;
    // numlist[i]=`${i}`;
    
}

console.log(numlist);