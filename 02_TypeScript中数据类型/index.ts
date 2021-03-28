/*=== 布尔类型 (boolean) true false ===*/
let flag:boolean = true
//console.log(`status is ${flag}`)

/*=== 字符串类型 (string) ===*/
let str:string = 'wuhao'
//console.log(`my name is ${str}`)

/*=== 数字类型 (number) 包含整数和浮点数 ===*/
let num:number = 12
//console.log(`当前数值为${num}`)
num = 12.34
//console.log(`当前数值为${num}`)

/*=== 数组类型 （array） ts 中定义数组三种方式 ===*/
let arr:number[] = [1,2,4,6,4,2]
// arr.forEach((item,index)=>{
// console.log(`数组中第${index}个元素是${item}`)
// })
// 泛型形式定义
let arr1:Array<string> = ['js','ts','java','c++','c','c#','python','golang','php']
// arr1.forEach((item,index)=>{
//     console.log(`数组中第${index}个元素是${item}`)
// })
let arr2:any[] = ['2501','wuhao',343,true]
// arr2.forEach((item,index)=>{
//     console.log(`数组中第${index}个元素是${item}`)
// })

/*=== 元组类型（tuple） 属于数组的一种 ===*/
let arr3:[string,number,boolean] = ['ts',3434,false]
// arr3.forEach((item,index) => {
//     console.log(`数组中第${index}个元素是${item}`)
// })

/*=== 枚举类型 （enum） 主要用来定义标识符 ===*/
enum Flag {
    success=1,
    error=-1
}
let stu:Flag = Flag.success
//console.log(`Message:${stu}`)
enum Color {
    red,
    black=5,
    blue
}
let col:Color = Color.blue
 // 没有值，则打印出对应索引值,若前一个有值，后一个在前一个值上+1
//console.log(`Message:${col}`)

/*=== 任意类型（any）===*/
let a:any = true
//console.log(`Message:${a}`)
//a = 123
//console.log(`Message:${a}`)

/*=== null 和 undefined 是其他 (never) 数据类型的子类型===*/
let num1:number | undefined
// console.log(num1)
// num1 = 123
// console.log(num1)
let test1:null
// test1 = null
// console.log(test1)

/*=== void 类型 ，表示没有任何类型，一般用于定义方法的时候方法没有返回值 ===*/
function run ():void{
    console.log('正在跑步中。。。')
}
run()



/* never 类型，是其他类型（包括 null 和 undefined）的子类型，代表从不会出现的值 */
let w:never
w = (() => {
    throw new Error('错误!!!')
})()
