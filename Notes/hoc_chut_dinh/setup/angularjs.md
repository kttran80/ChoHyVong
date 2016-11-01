<!-- TOC insertAnchor:true orderedList:true -->

1. [setup angular js with mvc](#setup-angular-js-with-mvc)
    1. [create scaffoler for angular js](#create-scaffoler-for-angular-js)
    2. [empty out the layout](#empty-out-the-layout)
    3. [add angular js to aspnet project](#add-angular-js-to-aspnet-project)
    4. [add angulart to bower.json and then run bower install](#add-angulart-to-bowerjson-and-then-run-bower-install)
    5. [8 powerful extensions](#8-powerful-extensions)
    6. [Bundle together](#bundle-together)
2. [Steps](#steps)
    7. [create a empty web app using yo asp](#create-a-empty-web-app-using-yo-asp)
    8. [fix warning with "pdb" file:](#fix-warning-with-pdb-file)
    9. [adding new controller:](#adding-new-controller)
    10. [intall typescript by npm](#intall-typescript-by-npm)
    11. [list npm user-installed packages](#list-npm-user-installed-packages)
    12. [then install at local:](#then-install-at-local)

<!-- /TOC -->

<a id="markdown-setup-angular-js-with-mvc" name="setup-angular-js-with-mvc"></a>
# setup angular js with mvc

<a id="markdown-create-scaffoler-for-angular-js" name="create-scaffoler-for-angular-js"></a>
## create scaffoler for angular js
yo aspnet

<a id="markdown-empty-out-the-layout" name="empty-out-the-layout"></a>
## empty out the layout
@{
    Layout = null;
}

<a id="markdown-add-angular-js-to-aspnet-project" name="add-angular-js-to-aspnet-project"></a>
## add angular js to aspnet project
from here https://www.pluralsight.com/blog/software-development/angularjs-for-asp-net-applications
use

<a id="markdown-add-angulart-to-bowerjson-and-then-run-bower-install" name="add-angulart-to-bowerjson-and-then-run-bower-install"></a>
## add angulart to bower.json and then run bower install

<a id="markdown-8-powerful-extensions" name="8-powerful-extensions"></a>
## 8 powerful extensions
from here: http://www.hongkiat.com/blog/visual-studio-code-extensions/

<a id="markdown-bundle-together" name="bundle-together"></a>
## Bundle together
https://www.youtube.com/watch?v=wQaAACHj7w8

<a id="markdown-steps" name="steps"></a>
# Steps

<a id="markdown-create-a-empty-web-app-using-yo-asp" name="create-a-empty-web-app-using-yo-asp"></a>
## create a empty web app using yo asp

<a id="markdown-fix-warning-with-pdb-file" name="fix-warning-with-pdb-file"></a>
## fix warning with "pdb" file:
by modify the project.json with buildoption
add "debugType": "portable" to it

<a id="markdown-adding-new-controller" name="adding-new-controller"></a>
## adding new controller:
by using yo subgenerator:
 yo aspnet --help

add a Controllers, Views/Home folder
add HomeController.cs, Index.cshtml using yo
modify the project.json to have MVC in dependencies
 "Microsoft.AspNetCore.Mvc":"1.0.1",
modify Startup.cs in configureservice
    services.AddMvc();
and then add 

    app.UseMvc(routes => {
        routes.MapRoute(
            name:"default",
            template:"{controller=Home}/{action=Index}/{id?}"
        );
    });

    // app.Run(async (context) =>
    // {
    //     await context.Response.WriteAsync("Hello World!");
    // });

and then add WebAPI GreetingsController to the project using yo
and delete everything else except the Get method that returns a string

<a id="markdown-intall-typescript-by-npm" name="intall-typescript-by-npm"></a>
## intall typescript by npm
npm install typescript@next -g 

install typings tool (replaced tsd)
npm install typings -g 


<a id="markdown-list-npm-user-installed-packages" name="list-npm-user-installed-packages"></a>
## list npm user-installed packages
from http://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages
I do
npm list -g --depth=0

<a id="markdown-then-install-at-local" name="then-install-at-local"></a>
## then install at local:
npm install typescript@next --save-dev

it will be an error because we don't have package.json yet
so we need to do 
npm init

--save-dev // for development environment

Now look at the folder structures:
wwwroot : dotnet core Kestral will use to serve as client

let's create folder
src/app
then add greeter.ts file

add these lines:

/**
 * Greeter
 */
class Greeter {
    constructor(private message: string) {
        
    }
    sayHello(){
        console.log(`Hello ${this.message} from typescript`);
    }
    get greetingMessage(): string {
        return `Hello ${this.message} from typescript`
    }
}

add tsconfig.json file to the root
and these lines
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "inlineSourceMap": true, //for debug
        "inlineSources": true,
        "sourceRoot": "src/app",
        "outDir": "wwwroot/app"

    }
}

and then we traspile at command lines

tsc -watch // everytime we save it will compile

and then we create a index.html under wwwroot folder

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome to ASPNET Core 1.0</title>
    <script src="app/greeter.js"></script>
</head>
<body>
    <div id="greeting">
    </div>
    <script>
        var greeterObj = new Greeter("World");
        document.getElementByID("greeting").innerHTML = "<h1>" + greeterObj.greetingMessage() + "/</h1>";
    </script>
</body>
</html>

add app.UseStaticFiles(); to startup.cs file

and modify the project.json file
"Microsoft.AspNetCore.StaticFiles":"1.0.0",


