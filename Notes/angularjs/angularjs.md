<!-- TOC insertAnchor:true orderedList:true -->

1. [Something to start:](#something-to-start)
2. [root component](#root-component)
3. [bootstrapping](#bootstrapping)
4. [other component ( <> rootcomponent)](#other-component-rootcomponent)
5. [work with values:](#work-with-values)

<!-- /TOC -->


<a id="markdown-something-to-start" name="something-to-start"></a>
## Something to start:
    https://cli.angular.io/
    
    install it:
    npm install -g angular-cli

I have errors, so I do this (do this again!)

    npm uninstall -g angular-cli    
    npm install -g angular-cli

<a id="markdown-root-component" name="root-component"></a>
## root component 
    = Contain Directive
    is app.component.ts

<a id="markdown-bootstrapping" name="bootstrapping"></a>
## bootstrapping
    1. index.html to host app
    2. module loader: System.import('app/main');
    3. bootstrapper: main.ts

<a id="markdown-other-component-rootcomponent" name="other-component-rootcomponent"></a>
## other component ( <> rootcomponent) 
    = Directive Component
    hints: using directives
    3 steps:
    
    1. add html tag of directive component into contain component
    2. add directives property into app module # changes
    3. add import  

<a id="markdown-work-with-values" name="work-with-values"></a>
## work with values:
    1. interpolation  with template expression {{ pageTitle }} : 1 way binding (read only data)
    2. pre-defined directives:
    structural
        *ngIf
        *ngFor
            let: local variable in the template
    3. events:

        example:
            <h1>{{pageTitle}}</h1>
            <img [src]='product.imageUrl' >
            <button (click)='toggleImage()' >
        
    4. ngModel directive: 2 way binding
        <input [(ngModel)]='listFilter'>

    note: use this in app.module.ts
        import { FormsModule }   from '@angular/forms';

        and 
        @NgModule({
              imports: [ BrowserModule, FormsModule ],
              declarations: [ AppComponent, ProductListComponent ],
              bootstrap: [ AppComponent ]
            })

    5. transform data by using pipe
        
        {{ product.productCode | lowercase }}

        <<img [src]='product.imageUrl'
              [title]='product.productName | uppercase' >

        {{ product.price | currency | lowercase }

        {{ product.price | currency:'USD':true: '1.2-2' }} //2 decimal places

    6. interface : only at development time
        export interface IProduct{
        
        }
