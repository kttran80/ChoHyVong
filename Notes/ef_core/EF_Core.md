EF Core:

A.  Reference:

<!-- -->

1.  Documents: <https://docs.efproject.net/en/latest/>

2.  Code First example: <https://www.youtube.com/watch?v=gvYis93MU6s>

3.  With VS code: <https://www.youtube.com/watch?v=TZF46oPBHPc>

4.  CRUD: <https://www.youtube.com/watch?v=K4x6eoG7hwY>

5.  Repository pattern:
    <http://www.franksworld.com/2016/10/16/repository-pattern-with-c-and-entity-framework/>

6.  MSDN Magazine data points:
    <https://social.msdn.microsoft.com/Search/en-US/magazine?query=data%20points%20ado.net&pgArea=header&Refinement=118&emptyWatermark=true&ac=4>

7.  Sqlite on windows ef core
    <https://docs.efproject.net/en/latest/providers/sqlite/>

8.  Install Db browser for Sqlite on mac <http://sqlitebrowser.org/>
9.  From this blog: http://www.hanselman.com/blog/ExploringAMinimalWebAPIWithASPNETCore.aspx

<!-- -->

A.  Steps:

<!-- -->

1.  Modify project.json:

    a.  In “dependencies” section:

###  "Microsoft.EntityFrameworkCore.Sqlite": "1.0.0",

###  "Microsoft.EntityFrameworkCore.Design": {

###  "version": "1.0.0-preview2-final",

###  "type": "build" 

###  }

a.  “tools”:

> "tools": {
>
> "Microsoft.EntityFrameworkCore.Tools": "1.0.0-preview2-final"
>
> }

1.  install new package: dotnet restore (mac) nugget restore (win)

2.  verify EF already installed: dotnet ef –help

3.  create models by adding new class:

> **public** **class** **BloggingContext** : DbContext
>
> {
>
> **public** DbSet&lt;Blog&gt; Blogs { **get**; **set**; }
>
> **public** DbSet&lt;Post&gt; Posts { **get**; **set**; }
>
> **protected** **override** **void**
> **OnConfiguring**(DbContextOptionsBuilder optionsBuilder)
>
> {
>
> optionsBuilder.UseSqlite("Filename=./blog.db");
>
> }
>
> }

1.  compile the project: dotnet build

2.  generate migration: dotnet ef migrations add MyFirstMigration or
    Add-Migration MyFirstMigration (package manager console)

3.  create database files: dotnet ef database update or Update-Database
    (package manager console)

4.  now, use it to add and retrieve db:

**public** **static** **void** **Main**()

> {
>
> **using** (**var** db = **new** BloggingContext())
>
> {
>
> db.Blogs.Add(**new** Blog { Url = "http://blogs.msdn.com/adonet" });
>
> **var** count = db.SaveChanges();
>
> Console.WriteLine("{0} records saved to database", count);
>
> Console.WriteLine();
>
> Console.WriteLine("All blogs in database:");
>
> **foreach** (**var** blog **in** db.Blogs)
>
> {
>
> Console.WriteLine(" - {0}", blog.Url);
>
> }
>
> }
>
> }

5. we can create dbcontext and model from dbfirst approach: 
    dotnet ef dbcontext scaffold "connection string" Microsoft.EntityFrameworkCore.SqlServer --output-dir Models

1.  start app: dotnet run

2.  with aspnet, register DI (dependency injection) in startup.cs

> **using** EFGetStarted.AspNetCore.NewDb.Models;
>
> **using** Microsoft.EntityFrameworkCore;
>
> **public** **void** **ConfigureServices**(IServiceCollection services)
>
> {
>
> **var** connection =
> @"Server=(localdb)\\mssqllocaldb;Database=EFGetStarted.AspNetCore.NewDb;Trusted\_Connection=True;";
>
> services.AddDbContext&lt;BloggingContext&gt;(options =&gt;
> options.UseSqlServer(connection));

1.  We now add a controller by select a template

> **private** BloggingContext \_context;
>
> **public** **BlogsController**(BloggingContext context)
>
> {
>
> \_context = context;
>
> }

(can use yo with sub generator)

1.  And add a view:

2.  If we already have a database, here it is:

> Scaffold-DbContext
> "Server=(localdb)\\mssqllocaldb;Database=Blogging;Trusted\_Connection=True;"
> Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

1.  Create a model:

    a.  By fluent api

> **class** **MyContext** : DbContext
>
> {
>
> **public** DbSet&lt;Blog&gt; Blogs { **get**; **set**; }
>
> **protected** **override** **void** **OnModelCreating**(ModelBuilder
> modelBuilder)
>
> {
>
> modelBuilder.Entity&lt;Blog&gt;()
>
> .Property(b =&gt; b.Url)
>
> .IsRequired();
>
> }
>
> }

a.  By data annotation

> **public** **class** **Blog**
>
> {
>
> **public** **int** BlogId { **get**; **set**; }
>
> \[Required\]
>
> **public** **string** Url { **get**; **set**; }
>
> }

a.  Example:

> **class** **MyContext** : DbContext
>
> {
>
> **public** DbSet&lt;Blog&gt; Blogs { **get**; **set**; }
>
> **protected** **override** **void** **OnModelCreating**(ModelBuilder
> modelBuilder)
>
> {
>
> modelBuilder.Entity&lt;AuditEntry&gt;();
>
> }
>
> }
>
> **public** **class** **Blog**
>
> {
>
> **public** **int** BlogId { **get**; **set**; }
>
> **public** **string** Url { **get**; **set**; }
>
> **public** List&lt;Post&gt; Posts { **get**; **set**; }
>
> }
>
> **public** **class** **Post**
>
> {
>
> **public** **int** PostId { **get**; **set**; }
>
> **public** **string** Title { **get**; **set**; }
>
> **public** **string** Content { **get**; **set**; }
>
> **public** Blog Blog { **get**; **set**; }
>
> }
>
> **public** **class** **AuditEntry**
>
> {
>
> **public** **int** AuditEntryId { **get**; **set**; }
>
> **public** **string** Username { **get**; **set**; }
>
> **public** **string** Action { **get**; **set**; }
>
> }

a.  Relationship:


