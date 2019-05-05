'use strict';

let s = 'hello'
let s1 = 'GoodBye'


module.exports = {
    greet: function greet(name) {
        console.log(s + ',' + name + '!')
    },
    goodBye: function goodBye(name) {
        console.log(s1 + ',' + name + '!')
    }
}