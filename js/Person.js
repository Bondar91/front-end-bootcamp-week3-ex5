class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	sayHello() {
		console.log(`Cześć nazwyam się ${this.firstName} ${this.lastName}!`);
	}
}

export default Person;