export function areaOfCircle(){
    return Math.PI*Math.pow(radius,2)
}
const radius=5;
const area=areaOfCircle(radius)
console.log(`the area of circle with  radius ${radius} is ${area}`)