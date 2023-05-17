//ANS 4,
class uber{
    constructor(name,km,locationstarts,locationends){
    this.name=name
    this.km=km
    this.locationstarts=locationstarts
    this.locationends=locationends
    }
    price(){
        return this.km*20
    }
}
var uber1=new uber("bharath",55,"chennai","mamallapuram")
cconsole.log(uber1.name)
console.log(uber1.price())
console.log(uber1.locationstarts)
console.log(uber1.locationends)
