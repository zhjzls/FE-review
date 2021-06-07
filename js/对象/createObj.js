/*
 * @Author: darry
 * @Date: 2021-06-07 14:44:21
 * @LastEditTime: 2021-06-07 17:34:25
 * @LastEditors: darry
 * @Description: 
 * @FilePath: \FE\js\对象\createObj.js
 */

// 工厂模式创建对象

// function createObj(name, age, desc) {
//     var o = new Object()
//     o.name = name;
//     o.age = age;
//     o.desc = desc;
//     o.sayName = function() {
//         alert(this.name)
//     }

//     return o 
// }

// var o1 = createObj('dary', 24, '工厂模式1号')
// var o2 = createObj('dary2', 27, '工厂模式2号')

// 构造函数创建对象
// function Person(name, age, desc) {
//     this.name = name;
//     this.age = age; 
//     this.desc = desc;
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }

// var p1 = new Person('dary', 24, '构造函数1号')
// var p1 = new Person('dary', 28, '构造函数2号')

// console.log(p1 instanceof Person)
// console.log(p1 instanceof Object)

// 原型模式
// console.log('Pperson', Pperson)
// function Pperson() {
//     this.name = "原型name"
// }
// var friend = new Pperson()
// Pperson.prototype.sayName = function () {
//     console.log(49, this.name)
// }
// Pperson.prototype = {
//     name: "原型name",
//     sayName: function() {
//         console.log(49, this.name)
//     }
// }
// friend.sayName()

// 组合使用 构造函数和原型模式

function Screen(brand, size, computers) {
    this.brand = brand;
    this.size = size,
    this.computers = computers
}
Screen.prototype = {
    constructor: Screen,
    showBrand: function() {
        console.log(this.brand)
        return this.brand
    }
}
Object.defineProperty(Screen.prototype, 'constructor', {
    enumerable: false,
    value: Screen
})

var SC1 = new Screen('lenovo', 21, ['酷冷至尊', '联想'])
var SC2 = new Screen('AOC', 24, ['apple', 'huawei'])

SC1.computers.push('小米')
SC2.computers.push('荣耀')
console.log('SC1.showBrand', SC1.showBrand());
console.log('SC2.showBrand', SC2.showBrand());
console.log('SC1.computers', SC1.computers);
console.log('SC2.computers', SC2.computers);
console.log('SC2.showBrand === SC1.showBrand', SC1.showBrand === SC2.showBrand);

// 动态原型模式

function Keyboard(size, brand, keys) {
    this.size = size;
    this.brand = brand;
    this.keys = keys;
    if(typeof this.showKeysNum != 'function') {
        Keyboard.prototype.showKeysNum = function() {
            return this.keys.length;
        }
    }
}