# AngularFundamentals

### TypeScript concepts that we are going to use in this course
- **Static typing**: declaring variables / adding data types; **interfaces** to enforce shape of objects.
- **Class properties**
- **Private and Public accessibility**

### Angular JS (1.x) vs Angular (2 +)
1 - template  control
2 - component based

### Angular conceptual view
- Root component.
- Tree based routing
- Angular modules help in grouping to handle complexity: only modules user accesses are loaded.
- Angular service, module, pipe, component.

### What we are going to be building
- App that display and allows users to create tech events.

### Angular CLI 
-  used for creating angular projects and adding in some additional features

#### selector
what to use to access the html template


### Modules
- declarations: components
- imports: other modules are put here
- providers: services and put here


### Accessing static files.


## Module 2 
### Creating and communincating bewtwween components
- inline template
- using external template
- inter-component commmunication
- styling components
- style encapsulation

## Passing data from parent to child component
- In the parent coponent <child-component-selector [event]="data-object"></child-component-selector>
- In the child: declare @Input()  event:any (in the constructor, import Input from angular/core) then use event(data)



## styling 
- ngClass => calls a method which returns css classes to apply to the component
` <div [ngClass]="getStartTimeClass()" [ngSwitch]="event.time">
   </div>`

   method called 
   `  getStartTimeClass()
 {
  
  if( this.event && this.event.time === '8:00 am')
     return ['green bold']
   return ['']
 }`

-ngStyle
: style binding 
, 
similar to 
ngClass thou ngStyle and return values are key pair (object)
- ` <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event.time">`
- `
  getStartTimeStyle() :any{
  //  const isEarlyStart = this.event && this.event.time === '8:00 am';
  //  return {green: isEarlyStart, bold: isEarlyStart}
  if( this.event && this.event.time === '8:00 am')
     return {color:'#003300', 'font-weight': 'bold'}
   return {}
 }
`

## Services // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).// Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).// Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).

