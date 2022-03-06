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