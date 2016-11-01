"use strict";
var greeter_1 = require("./greeter");
var Main = (function () {
    function Main() {
        this.greeter = new greeter_1.Greeter("world!");
    }
    Main.prototype.sayHello = function () {
        this.greeter.sayHello();
        document.getElementById("greeting").innerHTML = "<h1>" + this.greeter.greetingMessage + "/</h1>";
    };
    Object.defineProperty(Main.prototype, "greetingMessage", {
        get: function () {
            return this.greeter.greetingMessage;
        },
        enumerable: true,
        configurable: true
    });
    return Main;
}());
exports.Main = Main;
var m = new Main();
m.sayHello();
console.log(m.greetingMessage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiJDOi9LaWV0L3Rlc3QvQ2hvSHlWb25nL3NyYy9hcHAvIiwic291cmNlcyI6WyJtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQ0FBbUM7QUFDbkM7SUFLSTtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCx1QkFBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO0lBQ3JHLENBQUM7SUFDRCxzQkFBSSxpQ0FBZTthQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUN4QyxDQUFDOzs7T0FBQTtJQUNMLFdBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBYkssb0JBQUk7QUFlVixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JlZXRlciB9IGZyb20gXCIuL2dyZWV0ZXJcIlxyXG5leHBvcnQgLyoqXHJcbiAqIE1haW5cclxuICovXHJcbmNsYXNzIE1haW4ge1xyXG4gICAgcHJpdmF0ZSBncmVldGVyOiBHcmVldGVyO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ncmVldGVyID0gbmV3IEdyZWV0ZXIoXCJ3b3JsZCFcIik7XHJcbiAgICB9XHJcbiAgICBzYXlIZWxsbygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncmVldGVyLnNheUhlbGxvKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmVldGluZ1wiKS5pbm5lckhUTUwgPSBcIjxoMT5cIiArIHRoaXMuZ3JlZXRlci5ncmVldGluZ01lc3NhZ2UgKyBcIi88L2gxPlwiOyBcclxuICAgIH1cclxuICAgIGdldCBncmVldGluZ01lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmVldGVyLmdyZWV0aW5nTWVzc2FnZTtcclxuICAgIH1cclxufVxyXG5cclxudmFyIG0gPSBuZXcgTWFpbigpO1xyXG5tLnNheUhlbGxvKCk7XHJcbmNvbnNvbGUubG9nKG0uZ3JlZXRpbmdNZXNzYWdlKTtcclxuIl19