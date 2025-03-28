import {add,multiply} from './mathOperations.js'
import userIformation from './user.js'
import { userinfo } from './user.js'
import { PI as pie ,E as ee,G as g} from './constants.js'
import * as myModule from "./indexx.js"
console.log("addition of two arguments "+add(29,3))
console.log('multiply of two numbers '+multiply(2,3))

//2q)
console.log(userIformation)
console.log(userinfo)
//3q)
console.log(pie)
console.log(ee)
console.log(g)

//4q)
function loadModule(){
    import('./greetings.js')
    .then((module)=>{
        console.log(module.sayHello())
    })
}

loadModule()

//5q
console.log(myModule.add(2,9))
console.log(myModule.subtract(9,8))
myModule.areaOfCircle
