// ES5 中函数的定义
// 函数声明法
function runES5(){
    console.log('running')
}
// 匿名函数
var fun2ES5 = function(){
    return 1314
}

// TypeScript 中函数的定义
// 函数声明法
function run():string{
    return 'running...'
}
console.log(run())
// 匿名函数
let fun2 = function():number{
    return 12;
}
console.log(fun2())
// ts 中定义方法传参
function getInfo(name:string,age:number):string{
    return `姓名：${name},年龄：${age}`
}
console.log(getInfo('王倩',19))
let getInfo1 = function (name:string,age:number):string{
    return `姓名：${name},年龄：${age}`
}
console.log(getInfo1('周霞',29))

// ts 中方法的可选参数 （注意：可选参数必须配置到参数的后面）
function getInfo2(name:string,age?:number):string{
   return age ? `姓名：${name},年龄：${age}` : `姓名：${name},年龄:未知`
}
console.log( getInfo2('wuhao',24))
console.log( getInfo2('lijun'))

// ts 中默认参数
function getInfo3(name:string,age:number=20):string{
    return age ? `姓名：${name},年龄：${age}` : `姓名：${name},年龄:未知`
 }
 console.log( getInfo3('lijun'))
 console.log( getInfo3('wuhao',24))

 // ts 中剩余参数
 function sum(a:number,b:number,c:number,d:number):string{
    let num:number = a+b+c+d
    return `num:${num}`
 }
 console.log(sum(1,2,3,4))

 // 三点运算符接受形参传过来的值
 function sum1(...result:number[]):string{
    let num:number = 0
    result.forEach((item) => {
        num += item
    })
    return `num:${num}`
 }
 console.log(sum1(1,2,3,4,5,6))
 function sum2(a:number,...result:number[]):string{
    let num:number = a
    result.forEach((item) => {
        num += item
    })
    return `num:${num}`
 }
 console.log(sum2(1,2,3,4,5,6))
 
 // ts 中函数的重载，通过为同一个函数提供多个函数类型定义来达到多种功能的目的
 function getInfoNew(name:string):string
 function getInfoNew(age:number):string
 function getInfoNew(str:any):any{
    return typeof str === 'string' ? `姓名：${str}` : `年龄：${str}`
 }
 console.log(getInfoNew('wuhao'))
 console.log(getInfoNew(24))
 function getInfoNew1(name:string):string
 function getInfoNew1(name:string,age:number):string
 function getInfoNew1(name:any,age?:any):any{
    return age  ? `姓名：${name},年龄：${age}` : `姓名：${name}`
 }
 console.log(getInfoNew1('wuhao'))
 console.log(getInfoNew1('lijun',24))


