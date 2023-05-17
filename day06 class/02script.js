//Ans 2,
class circle{
    constructor(radius,color){
    this.radius=radius
    this.color=color
    }
    getarea(){
       return Math.PI * this.radius * this.radius;
    }
    getcircumferance(){
       return 2 * Math.PI * this.radius;
    }
}
var result= new circle(5,"red")
console.log(result.getarea())
console.log(result.getcircumferance())
console.log(result.color)