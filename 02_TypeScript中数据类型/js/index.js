"use strict";
/*=== 布尔类型 (boolean) true false ===*/
var flag = true;
//console.log(`status is ${flag}`)
/*=== 字符串类型 (string) ===*/
var str = 'wuhao';
//console.log(`my name is ${str}`)
/*=== 数字类型 (number) 包含整数和浮点数 ===*/
var num = 12;
//console.log(`当前数值为${num}`)
num = 12.34;
//console.log(`当前数值为${num}`)
/*=== 数组类型 （array） ts 中定义数组三种方式 ===*/
var arr = [1, 2, 4, 6, 4, 2];
// arr.forEach((item,index)=>{
// console.log(`数组中第${index}个元素是${item}`)
// })
// 泛型形式定义
var arr1 = ['js', 'ts', 'java', 'c++', 'c', 'c#', 'python', 'golang', 'php'];
// arr1.forEach((item,index)=>{
//     console.log(`数组中第${index}个元素是${item}`)
// })
var arr2 = ['2501', 'wuhao', 343, true];
// arr2.forEach((item,index)=>{
//     console.log(`数组中第${index}个元素是${item}`)
// })
/*=== 元组类型（tuple） 属于数组的一种 ===*/
var arr3 = ['ts', 3434, false];
// arr3.forEach((item,index) => {
//     console.log(`数组中第${index}个元素是${item}`)
// })
/*=== 枚举类型 （enum） 主要用来定义标识符 ===*/
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var stu = Flag.success;
//console.log(`Message:${stu}`)
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["black"] = 5] = "black";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
var col = Color.blue;
// 没有值，则打印出对应索引值,若前一个有值，后一个在前一个值上+1
//console.log(`Message:${col}`)
/*=== 任意类型（any）===*/
var a = true;
//console.log(`Message:${a}`)
//a = 123
//console.log(`Message:${a}`)
/*=== null 和 undefined 是其他 (never) 数据类型的子类型===*/
var num1;
// console.log(num1)
// num1 = 123
// console.log(num1)
var test1;
// test1 = null
// console.log(test1)
/*=== void 类型 ，表示没有任何类型，一般用于定义方法的时候方法没有返回值 ===*/
function run() {
    console.log('正在跑步中。。。');
}
run();
/* never 类型，是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值 */
var w;
w = (function () {
    throw new Error('错误!!!');
})();
