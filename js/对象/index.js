/*
 * @Author: darry
 * @Date: 2021-06-07 14:25:27
 * @LastEditTime: 2021-06-07 17:51:10
 * @LastEditors: darry
 * @Description: 
 * @FilePath: \FE\js\对象\index.js
 */
var book = {}
Object.defineProperties(book, {
    price: {
        value: 28
    },
    _name: {
        value: 'javascript 高级程序设计'
    },
    name: {
        get: function() {
            return this._name
        },
        set: function(v) {
            this._name = this._name + v
        },
        
    }
})

var descriptory = Object.getOwnPropertyDescriptor(book, '_name')
console.log('descriptory: ', descriptory)

var descriptory1 = Object.getOwnPropertyDescriptor(book, 'name')
console.log('descriptory1: ', descriptory1)