function hello(name:string):string{
    return `Hello,${name}`
}

console.log(hello('World'))

function addzero(text:string):string{
    if (text.length<3) {
        return `0${text}`
    }
    return text
}

//九九表
for (let i = 1; i <= 9; i++) {

    let text:string=''
    for (let j = 1; j <= 9; j++) {
        text+=addzero(`${i * j} `)
    }
    console.log(text)
    
}

window.addEventListener('load',()=>{
    document.getElementById('tbox')?.addEventListener('change',(e)=>{
        // console.log(`Hello ${e}`)
        let target = e.target as HTMLInputElement;
        console.log(target.value)
    })
    let count:number=0;
    document.getElementById('countbtn')?.addEventListener('click',(e)=>{
        count++;
        console.log(count);

        let ele = document.getElementById('view') as HTMLElement
        ele.innerHTML=`${count}`
        
    })
})