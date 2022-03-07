"use strict";
function hello(name) {
    return `Hello,${name}`;
}
console.log(hello('World'));
function addzero(text) {
    if (text.length < 3) {
        return `0${text}`;
    }
    return text;
}
//九九表
for (let i = 1; i <= 9; i++) {
    let text = '';
    for (let j = 1; j <= 9; j++) {
        text += addzero(`${i * j} `);
    }
    console.log(text);
}
// input:textのvalueが取得できない…
// window.addEventListener('load',()=>{
//     <HTMLInputElement>document.getElementById('tbox')?.addEventListener('change',(e)=>{
//         // console.log(`Hello ${e}`)
//         console.log(e)
//     })
// })
//# sourceMappingURL=index.js.map