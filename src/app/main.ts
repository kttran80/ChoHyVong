import { Greeter } from "./greeter"
export /**
 * Main
 */
class Main {
    private greeter: Greeter;
    constructor() {
        this.greeter = new Greeter("world!");
    }
    sayHello()
    {
        this.greeter.sayHello();
        document.getElementById("greeting").innerHTML = "<h1>" + this.greeter.greetingMessage + "/</h1>"; 
    }
    get greetingMessage(): string {
        return this.greeter.greetingMessage;
    }
}

var m = new Main();
m.sayHello();
console.log(m.greetingMessage);
