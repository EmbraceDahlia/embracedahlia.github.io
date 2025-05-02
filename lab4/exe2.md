CODE 1

1. GEC Creation
Outer: null
LE: [{a:undefined,b:undefined,c:undefined}]
TDZ {x}

2. GEC Execution
Outer: null
LE:[{a:5,b:10,c:fn(a,b,c),x:undefined}]
TDZ {}

3. c FEC Creation
Outer: Global
LE: [{arguments:obj,f:undefined,x:undefined}]
TDZ {}
Heap {arguments:[0:8,1:9,2:10]}

4. c FEC Execution
Outer: Global
LE: [{arguments:obj,f:fn(a,b,c),x:10}]
TDZ {}
Heap {arguments:[0:8,1:9,2:10]}

5. f FEC Creation
Outer: c
LE: [{arguments:obj,x:undefined}]
TDZ {}
Heap {arguments:[0:8,1:9,2:10]}

6. f FEC Execution
Outer: c
LE: [{arguments:obj,x:5}]
TDZ {}
Heap {arguments:[a:8,b:10,c:10]}

---------------------------------------

CODE 2

1. GEC Creation
Outer: null
LE: [{x:undefined,myFunction:fn}]
TDZ {}

2. GEC Execution
Outer: null
LE: [{x:5,myFunction:fn}]
TDZ {}

3. myFunction FEC 1 Creation
Outer: Global
LE: [{arguments:obj}]
TDZ {}
Heap {arguments:[]}

4. myFunction FEC 1 Execution
Outer: GLobal
LE: [{arguments:obj}]
TDZ {}
Heap {arguments:[]}

5. myFunction FEC 2 Creation
Outer: Global
LE: [{arguments:obj}]
TDZ {}
Heap {arguments:[]}

6. myFunction FEC 2 Execution
Outer: GLobal
LE: [{arguments:obj}]
TDZ {}
Heap {arguments:[]}

---------------------------------------

CODE 3

1. GEC Creation
Outer: null
LE: [{foo:undefined,bar:fn}]
TDZ {}

2. GEC Execution
Outer: null
LE: [{foo:1,bar:fn}]
TDZ {}

3. bar FEC Creation
Outer: Global
LE: [{arguments:obj,foo:undefined}]
TDZ {}
Heap {arguments:[]}

4. bar FEC Execution
Outer: GLobal
LE: [{arguments:obj,foo:10}]
TDZ {}
Heap {arguments:[]}