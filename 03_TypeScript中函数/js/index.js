"use strict";
// ES5 中函数的定义
// 函数声明法
function runES5() {
    console.log('running');
}
// 匿名函数
var fun2ES5 = function () {
    return 1314;
};
// TypeScript 中函数的定义
// 函数声明法
function run() {
    return 'running...';
}
console.log(run());
// 匿名函数
var fun2 = function () {
    return 12;
};
console.log(fun2());
// ts 中定义方法传参
function getInfo(name, age) {
    return "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + age;
}
console.log(getInfo('王倩', 19));
var getInfo1 = function (name, age) {
    return "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + age;
};
console.log(getInfo1('周霞', 29));
// ts 中方法的可选参数 （注意：可选参数必须配置到参数的后面）
function getInfo2(name, age) {
    return age ? "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + age : "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84:\u672A\u77E5";
}
console.log(getInfo2('wuhao', 24));
console.log(getInfo2('lijun'));
// ts 中默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 20; }
    return age ? "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + age : "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84:\u672A\u77E5";
}
console.log(getInfo3('lijun'));
console.log(getInfo3('wuhao', 24));
// ts 中剩余参数
function sum(a, b, c, d) {
    var num = a + b + c + d;
    return "num:" + num;
}
console.log(sum(1, 2, 3, 4));
// 三点运算符接受形参传过来的值
function sum1() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var num = 0;
    result.forEach(function (item) {
        num += item;
    });
    return "num:" + num;
}
console.log(sum1(1, 2, 3, 4, 5, 6));
function sum2(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var num = a;
    result.forEach(function (item) {
        num += item;
    });
    return "num:" + num;
}
console.log(sum2(1, 2, 3, 4, 5, 6));
function getInfoNew(str) {
    return typeof str === 'string' ? "\u59D3\u540D\uFF1A" + str : "\u5E74\u9F84\uFF1A" + str;
}
console.log(getInfoNew('wuhao'));
console.log(getInfoNew(24));
function getInfoNew1(name, age) {
    return age ? "\u59D3\u540D\uFF1A" + name + ",\u5E74\u9F84\uFF1A" + age : "\u59D3\u540D\uFF1A" + name;
}
console.log(getInfoNew1('wuhao'));
console.log(getInfoNew1('lijun', 24));
