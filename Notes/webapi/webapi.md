<!-- TOC insertAnchor:true orderedList:true -->

1. [Read this Understanding ASP.NET Core 1.0 (ASP.NET 5) and why it will replace Classic ASP.NET](#read-this-understanding-aspnet-core-10-aspnet-5-and-why-it-will-replace-classic-aspnet)
2. [1. yo aspnet](#1-yo-aspnet)
3. [2. modify project.json to add](#2-modify-projectjson-to-add)
4. [3. create dbcontext and model from dbfirst approach:](#3-create-dbcontext-and-model-from-dbfirst-approach)
5. [4. modify startup](#4-modify-startup)
6. [5. add a webapi controller by using yeoman](#5-add-a-webapi-controller-by-using-yeoman)
7. [6. add Controllers folder](#6-add-controllers-folder)
8. [7. routing table](#7-routing-table)
9. [8. help page](#8-help-page)
10. [9. Check this also](#9-check-this-also)
11. [10. aha dotnet watch](#10-aha-dotnet-watch)
12. [11. to support other app](#11-to-support-other-app)
13. [12. json formatter](#12-json-formatter)

<!-- /TOC -->
<a id="markdown-read-this-understanding-aspnet-core-10-aspnet-5-and-why-it-will-replace-classic-aspnet" name="read-this-understanding-aspnet-core-10-aspnet-5-and-why-it-will-replace-classic-aspnet"></a>
## Read this Understanding ASP.NET Core 1.0 (ASP.NET 5) and why it will replace Classic ASP.NET
https://dusted.codes/understanding-aspnet-core-10-aka-aspnet-5-and-why-it-will-replace-classic-aspnet

<a id="markdown-1-yo-aspnet" name="1-yo-aspnet"></a>
## 1. yo aspnet
<a id="markdown-2-modify-projectjson-to-add" name="2-modify-projectjson-to-add"></a>
## 2. modify project.json to add

    "Microsoft.EntityFrameworkCore.SqlServer": "1.0.0",
    "Microsoft.EntityFrameworkCore.SqlServer.Design": "1.0.0",
    "Microsoft.EntityFrameworkCore.Design": {
      "version":"1.0.0-preview2-final",
      "type": "build"
    },    
    "Microsoft.AspNetCore.Mvc": "1.0.0",

    and
    "tools":
    
        "Microsoft.EntityFrameworkCore.Tools":"1.0.0-preview2-final"

<a id="markdown-3-create-dbcontext-and-model-from-dbfirst-approach" name="3-create-dbcontext-and-model-from-dbfirst-approach"></a>
## 3. create dbcontext and model from dbfirst approach: 
    dotnet ef dbcontext scaffold "connection string" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models

<a id="markdown-4-modify-startup" name="4-modify-startup"></a>
## 4. modify startup    
    services.AddMvc();
    
<a id="markdown-5-add-a-webapi-controller-by-using-yeoman" name="5-add-a-webapi-controller-by-using-yeoman"></a>
## 5. add a webapi controller by using yeoman

<a id="markdown-6-add-controllers-folder" name="6-add-controllers-folder"></a>
## 6. add Controllers folder

<a id="markdown-7-routing-table" name="7-routing-table"></a>
## 7. routing table
check this: http://www.koderdojo.com/blog/asp-net-core-routing-and-routehandler-tutorial

and https://stormpath.com/blog/routing-in-asp-net-core

from https://docs.microsoft.com/en-us/aspnet/core/fundamentals/routing

and this https://docs.microsoft.com/en-us/aspnet/core/migration/webapi

and https://www.asp.net/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2

and https://www.asp.net/web-api/overview/web-api-routing-and-actions/routing-and-action-selection

and https://radu-matei.github.io/blog/aspnet-core-routing/

new route? http://stephenwalther.com/archive/2015/02/07/asp-net-5-deep-dive-routing

with key words: RouteBuilder dotnet core

So I do this

MVC

    add this "Microsoft.AspNetCore.Routing": <current version>

    and services.AddRouting();

    routes.MapRoute(
        name: "default",
        template: "{controller=Home}/{action=Index}/{id?}");

    another example
    routes.MapRoute(
        name: "default",
        template: "{controller=Home}/{action=Index}/{id:int}");
    
or 

    routeBuilder.MapRoute(
            "Track Package Route",
            "package/{operation:regex(^track|create|detonate$)}/{id:int}");
or 

    routeBuilder.MapGet("", context => context.Response.WriteAsync("Hello from root!"));
    routeBuilder.MapGet("hello", context => context.Response.WriteAsync("Hello from /hello"));
    routeBuilder.MapGet("hello/{name}", context => context.Response
                                                              .WriteAsync($"Hello, {context.GetRouteValue("name")}"));

    routeBuilder.MapGet("square/{number:int}", context =>
    {
        int number = Convert.ToInt32(context.GetRouteValue("number"));
        return context.Response.WriteAsync($"The square of {number} is {number * number}");
    });

    routeBuilder.MapPost("post", context => context.Response.WriteAsync("Posting!"));

or
    http://www.inversionofcontrol.co.uk/asp-net-core-1-0-routing-under-the-hood/                

from old project:            

    config.Routes.MapHttpRoute(
            name: """",
            routeTemplate: "api/{controller}/{action}/{id}",
            defaults: new { id = RouteParameter.Optional },
            constraints: new { Controller = @"^[a-zA-Z]\w*$", action = @"^[a-zA-Z]\w*$" }
        );    

    config.Routes.MapHttpRoute(
        name: "DefaultApi",
        routeTemplate: "api/{controller}/{id}",
        defaults: new { id = RouteParameter.Optional }
    );    

and then
 
    var routes = routeBuilder.Build();
    app.UseRouter(routes);

at last I found out:

app.UseMvc(routes =>
            {
                {
                    // api route
                    routes.MapRoute(
                            name: "default-api",
                            template: "api/{controller}/{action}/{id?}");
                };

                {
                    routes.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                };
                    
            }       
            
            );    
          
<a id="markdown-8-help-page" name="8-help-page"></a>
##8. help page
https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger          

<a id="markdown-9-check-this-also" name="9-check-this-also"></a>
##9. Check this also
app.UseMvcWithDefaultRoute();

<a id="markdown-10-aha-dotnet-watch" name="10-aha-dotnet-watch"></a>
## 10. aha dotnet watch
https://docs.microsoft.com/en-us/aspnet/core/tutorials/dotnet-watch
 "Microsoft.DotNet.Watcher.Tools":"1.0.0-preview2-final"
 
simply add this Microsoft.DotNet.Watcher.Tools to tools section

and then dotnet watch run

it can use to publish too

<a id="markdown-11-to-support-other-app" name="11-to-support-other-app"></a>
## 11. to support other app 
https://docs.microsoft.com/en-us/aspnet/core/mobile/native-mobile-backend

<a id="markdown-12-json-formatter" name="12-json-formatter"></a>
## 12. json formatter
services.AddMvc().AddJsonOptions(options =>
                {
                    options.SerializerSettings.Formatting = Formatting.Indented;
                });
from http://stackoverflow.com/questions/39099601/how-can-i-configure-asp-net-core-web-api-json-format-indents
                
