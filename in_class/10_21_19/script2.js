class Person2 {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this._firstName + "*";
    }

    set firstName(fName){
        this._firstName = fName + "!";
    }
}

me = new Person2("Amy", "Smith");
me.firstName = "Bobby"; //me.setFirstName("Bobby")
console.log(me.firstName);  //me.getFirstName()