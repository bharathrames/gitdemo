class Person {
    constructor(firstName, lastName, age, place, hobbies, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.place=place
      this.hobbies = hobbies;
      this.occupation = occupation;
    }
  
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    }
    
    fulldetails() {
      return `Hi, my name is ${this.fullname()} and I am a ${this.age} year old.Iam from ${this.place} 
      My hobbies are ${this.hobbies}.Iam working as a ${this.occupation} in a private company .`;
    }
  
  }
  var result= new Person("bharth","kumar","21","mamallapuram","cooking, playing games etc...","software engineer")
  console.log(result.fullname())
  console.log(result.age)
  console.log(result.place)
  console.log(result.hobbies)
  console.log(result.occupation)
  console.log(result.fulldetails())