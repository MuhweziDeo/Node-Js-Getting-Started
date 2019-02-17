const person={
	name:"dee",
	age:25
};

class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	greeting(){
		console.log(`iam ${this.name} and ${this.age}`)
	}
}
module.exports=Person;