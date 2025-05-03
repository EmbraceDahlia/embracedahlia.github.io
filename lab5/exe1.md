a.

Greetings, John
hi undefined
hello Smith

---------------------------------------

b.

1. GEC Creation
Outer: null
this: Window
LE: [{}]
TDZ {str,user,show:fn}

2. GEC Execution
Outer: null
this: Window
LE:[{str: "Greetings, ", user: { firstName: "John", lastname: "Smith", display: fn }, show: fn }]
TDZ {}

3. display FEC Creation
Outer: Global
this: user
LE: [{arguments:obj}]
TDZ: {}

4. display FEC Execution
Outer: Global
this: user
LE: [{arguments:obj}]
TDZ: {}

5. show FEC Creation
Outer: Global
this: Window
LE: [{ arguments:obj, msg: "hi" }]
TDZ: {}

6. show FEC Execution
Outer: Global
this: Window
LE: [{ arguments:obj, msg: "hi" }]
TDZ: {}

7. show.call() FEC Creation
Outer: Globals
this: user
LE: [{ arguments:obj, msg: "hello" }]
TDZ: {}

8. show.call() FEC Execution
Outer: Global
this: user
LE: [{ arguments:obj, msg: "hello" }]
TDZ: {}