//Ans 1,
class movie{
    constructor(title,studio,rating){
    this.title=title
    this.studio=studio
    this.rating=rating
    }
    printrating(){
        return this.rating
    }
    }
    var m1=new movie("Casino Royale","Eon Productions","PG-13")
     console.log(m1.title)
     console.log(m1.studio)
     console.log(m1.printrating())
