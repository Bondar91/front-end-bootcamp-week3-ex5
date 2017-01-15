import Person from "./Person";

class Programmer extends Person {
	constructor(firstName, lastName, lang = "JavaScript") {
		super(firstName, lastName);
		this.lang = lang;
	}

	work() {
		this.sayHello();
		console.log(`Piszę własnie kod w moim ulubionym języku, którym jest ${this.lang}!`);
	}
}

export default Programmer;
