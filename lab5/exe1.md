a.

Greetings, John
hi undefined
hello Smith

---------------------------------------

b.

1. GEC Creation
Outer: null
this: window
LE: [{ show:fn }]
TDZ {str,user}

2. GEC Execution
Outer: null
this: window
LE:[ show: fn, {str: "Greetings, ", user: { firstName: "John", lastname: "Smith", display: fn } }]
TDZ {}

3. display FEC Creation
Outer: global
this: user
LE: [{arguments:obj}]
TDZ: {}

4. display FEC Execution
Outer: global
this: user
LE: [{arguments:obj}]
TDZ: {}

5. show FEC Creation
Outer: global
this: window
LE: [{ arguments:obj, msg: "hi" }]
TDZ: {}

6. show FEC Execution
Outer: global
this: window
LE: [{ arguments:obj, msg: "hi" }]
TDZ: {}

7. show.call() FEC Creation
Outer: global
this: user
LE: [{ arguments:obj, msg: "hello" }]
TDZ: {}

8. show.call() FEC Execution
Outer: global
this: user
LE: [{ arguments:obj, msg: "hello" }]
TDZ: {}