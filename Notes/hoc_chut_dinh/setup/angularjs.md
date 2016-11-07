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
    11. [install webpack](#install-webpack)
    12. [list npm user-installed packages](#list-npm-user-installed-packages)
    13. [where npm packages installed](#where-npm-packages-installed)
    14. [then install at local:](#then-install-at-local)
        1. [add main.ts](#add-maints)
    15. [config webpack to have an entry point](#config-webpack-to-have-an-entry-point)
    16. [install a nice console emulator](#install-a-nice-console-emulator)
    17. [we can stop the typescript watch loader too and use webpack !!!!](#we-can-stop-the-typescript-watch-loader-too-and-use-webpack-)
    18. [explore webpack](#explore-webpack)
        2. [Aurelia](#aurelia)

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

<a id="markdown-install-webpack" name="install-webpack"></a>
## install webpack
for loader (main entry)
npm install webpack -g 

<a id="markdown-list-npm-user-installed-packages" name="list-npm-user-installed-packages"></a>
## list npm user-installed packages
from http://stackoverflow.com/questions/17937960/how-to-list-npm-user-installed-packages
I do
npm list -g --depth=0

<a id="markdown-where-npm-packages-installed" name="where-npm-packages-installed"></a>
## where npm packages installed
npm root -g

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

before working on webpack, export keyword
export is for other to use symbols (class, variable, function)
export is to access scope

bootstrap == main == entry point in other C language
appjs, aurelia for bootstrap
we usually rely on systemjs, requirejs implementation
so we use webpack to have the loader for the entry point!

<a id="markdown-add-maints" name="add-maints"></a>
### add main.ts 

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

<a id="markdown-config-webpack-to-have-an-entry-point" name="config-webpack-to-have-an-entry-point"></a>
## config webpack to have an entry point
run this command
webpack ./wwwroot/app/main.js ./wwwroot/app/bundle.js

<a id="markdown-install-a-nice-console-emulator" name="install-a-nice-console-emulator"></a>
## install a nice console emulator
http://cmder.net/

after that clean up index.html and then modify in the script section
<script src="/app/bundle.js"></script>

<a id="markdown-we-can-stop-the-typescript-watch-loader-too-and-use-webpack-" name="we-can-stop-the-typescript-watch-loader-too-and-use-webpack-"></a>
## we can stop the typescript watch loader too and use webpack !!!!

<a id="markdown-explore-webpack" name="explore-webpack"></a>
## explore webpack 
webpack --help

add new file: webpack.config.js on the root

and search in chrome: awesome typescript loader
npm install awesome-typescript-loader --save-dev

then copy this to webpack.config.js

module.exports = {
    entry: "./src/app/main.ts",
    output: {
        path: __dirname + "/wwwroot/app",
        filename: "bundle.js" 
    },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  // Add the loader for .ts files.
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};

then in the tsconfig.json, we need to change to this
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        //"inlineSourceMap": true, //for debug
        "sourceMap": true,
        // "inlineSources": true,
        "sourceRoot": "src/app",
        "outDir": "wwwroot/app"

    }
}

<a id="markdown-aurelia" name="aurelia"></a>
### Aurelia 
I "download the Skeletons" from aurelia.io website

in video https://www.youtube.com/watch?v=mfbVRKuGhxw part 4
says that copy aurelia Skeleton navigation
https://github.com/aurelia/skeleton-navigation 

copy typescript webpack
(not with aspnet)


Downloading aurelia skeleton navigation
After that copy four folders controllers properties views WWW route  
And docker file, Project json ,program ,read me ,start up
And inside not VS code, launch, tasks
Done and now we can run the program by command line
Npm install
Now we can copy greeter

Easy web pack
If greater JS is a viewmodel, we need a view in html, so we create a new file

Use Emmet template div h1 input type text

Use string interpolation with $bracket

Bootstrap 
1. Use declarative to body tag with aurelia-app
2. Programmatic api
Modify main.ts 

Aurelia fetch api for rest

They are running on different ports, domains so we use cors

Modify project.jaon
Add "Microsoft.aspnet.cors"

And startup.cs with
Services.addcors($

And app.usecors(builder=>builder.withorigins("localhost:9000")
.allpwanyheader().allowanymethod());

Aurelia has di injector
Insert these lines in greeter.js
import {inject} from 'aurelia-framework ';
Import {HttpCluent} from 'aurelia-fetch-client'}

And then decorate this
@inject(HttpClient)











