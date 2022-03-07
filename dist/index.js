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
window.addEventListener('load', () => {
    var _a, _b;
    (_a = document.getElementById('tbox')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (e) => {
        // console.log(`Hello ${e}`)
        let target = e.target;
        console.log(target.value);
    });
    let count = 0;
    (_b = document.getElementById('countbtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => {
        count++;
        console.log(count);
    });
});
//# sourceMappingURL=index.js.map