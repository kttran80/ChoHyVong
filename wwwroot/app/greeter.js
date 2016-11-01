w/**
 * Greeter
 */
var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hello " + this.message + " from typescript");
    };
    Object.defineProperty(Greeter.prototype, "greetingMessage", {
        get: function () {
            return "Hello " + this.message + " from typescript";
        },
        enumerable: true,
        configurable: true
    });
    return Greeter;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2lldHRyYW4vRGV2ZWxvcG1lbnQvQ3NoYXJwL0Nob0h5Vm9uZy9zcmMvYXBwLyIsInNvdXJjZXMiOlsiZ3JlZXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNIO0lBQ0ksaUJBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBRW5DLENBQUM7SUFDRCwwQkFBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLElBQUksQ0FBQyxPQUFPLHFCQUFrQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNELHNCQUFJLG9DQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLFdBQVMsSUFBSSxDQUFDLE9BQU8scUJBQWtCLENBQUE7UUFDbEQsQ0FBQzs7O09BQUE7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEdyZWV0ZXJcbiAqL1xuY2xhc3MgR3JlZXRlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHNheUhlbGxvKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGBIZWxsbyAke3RoaXMubWVzc2FnZX0gZnJvbSB0eXBlc2NyaXB0YCk7XG4gICAgfVxuICAgIGdldCBncmVldGluZ01lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBIZWxsbyAke3RoaXMubWVzc2FnZX0gZnJvbSB0eXBlc2NyaXB0YFxuICAgIH1cbn0iXX0=