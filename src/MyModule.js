import { MyOtherClass } from "./MyOtherModule";

export class MyClass {
	constructor() {
		console.info("ES6 class in a ES6 module.");
	}
	
	createMyOtherModule() {
		var myOtherClass = new MyOtherClass();
		
		myOtherClass.callTheUtilityFunction();
	}
}
