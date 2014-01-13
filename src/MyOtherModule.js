import { usefulFunction } from "./UtilityModule";

export class MyOtherClass {
	constructor() {
		console.info("MyOtherClass has been created");
	}
	
	callTheUtilityFunction() {
		usefulFunction("MyOtherModule");
	}
}
