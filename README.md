What is false
===========

What and who is false?  
Get a list of most significant JavaScript primitives, values and objects compared with *false*.

Table of Contents
-----------------

* [Usage](#usage)
* [Example](#example)
* [API](#api)
  - [Constansts](#constants)
  - [Static Methods](#static-methods)
  - [Instance Methods](#instance-methods)

Usage
-----

Node.js

```js
var WhatIsFalse = require('what-is-false');
```

Summary table
-------------

| | ==false | ==true | if(*item*)
--- | --- | --- | ---
**undefined** | false | false | false
**null** | false | false | false
**NaN** | false | false | false
**true** | false | true | true
**false** | true | false | false
**[]** | true | false | true
**[ 0 ]** | true | false | true
**[ 0.1 ]** | false | false | true
**[ {} ]** | false | false | true
**[ 0 , 0 ]** | false | false | true
**[ '0' ]** | true | false | true
**[ '0' , '0' ]** | false | false | true
**0** | true | false | false
**-0** | true | false | false
**+0** | true | false | false
**1** | false | true | true
**-1** | false | false | true
**0.1** | false | false | true
**-0.1** | false | false | true
**''** | true | false | false
**'0'** | true | false | true
**'00'** | true | false | true
**'-0'** | true | false | true
**'+0'** | true | false | true
**'0.1'** | false | false | true
**'1'** | false | true | true
**'true'** | false | false | true
**'false'** | false | false | true

Example
-------

Basic usage.

```js
var wif = new WhatIsFalse();

console.log(wif.toString());
```

```
----------------------
Comparison with: false
----------------------
_Undefined
    undefined == false --> false
_Null
    null == false --> false
_NaN
    NaN == false --> false
_True
    true == false --> false
_False
    false == false --> true
_Empty array
    [] == false --> true
_Array with 0
    [ 0 ] == false --> true
_Array with 0.1
    [ 0.1 ] == false --> false
_Array with empty object
    [ {} ] == false --> false
_Array with 0 and 0
    [ 0 , 0 ] == false --> false
_Array with string 0
    [ '0' ] == false --> true
_Array with two string 0 elements
    [ '0' , '0' ] == false --> false
_Number 0
    0 == false --> true
_Number -0
    -0 == false --> true
_Number +0
    +0 == false --> true
_Number 1
    1 == false --> false
_Number -1
    -1 == false --> false
_Number 0.1
    0.1 == false --> false
_Number -0.1
    -0.1 == false --> false
_Empty String
    '' == false --> true
_String with 0
    '0' == false --> true
_String with double 0
    '00' == false --> true
_String with -0
    '-0' == false --> true
_String with +0
    '+0' == false --> true
_String with 0.1
    '0.1' == false --> false
_String with 1
    '1' == false --> false
_String with true
    'true' == false --> false
_String with false
    'false' == false --> false
```

Passing *option* parameter to constructor.

```js
const option = {
    operand : false,
    result : WhatIsFalse.ALL,
    output : WhatIsFalse.JSON
};

var wif = new WhatIsFalse(option);

console.log(wif.toString());
```

```
{
 "NULL": {
  "name": "Null",
  "itemAsString": "null",
  "item": null,
  "comparison": "== false",
  "result": false,
  "IFresult": false
 },
 "UNDEFINED": {
  "name": "Undefined",
  "itemAsString": "undefined",
  "comparison": "== false",
  "result": false,
  "IFresult": false
 },
 "NAN": {
  "name": "NaN",
  "itemAsString": "NaN",
  "item": null,
  "comparison": "== false",
  "result": false,
  "IFresult": false
 },
 "TRUE": {
  "name": "True",
  "itemAsString": "true",
  "item": true,
  "comparison": "== false",
  "result": false,
  "IFresult": true
 },
 "FALSE": {
  "name": "False",
  "itemAsString": "false",
  "item": false,
  "comparison": "== false",
  "result": true,
  "IFresult": false
 },
 "ARRAYS": [
  {
   "name": "Empty array",
   "itemAsString": "[]",
   "item": [],
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "Array with 0",
   "itemAsString": "[ 0 ]",
   "item": [
    0
   ],
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "Array with 0.1",
   "itemAsString": "[ 0.1 ]",
   "item": [
    0.1
   ],
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Array with empty object",
   "itemAsString": "[ {} ]",
   "item": [
    {}
   ],
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Array with 0 and 0",
   "itemAsString": "[ 0 , 0 ]",
   "item": [
    0,
    0
   ],
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Array with string 0",
   "itemAsString": "[ '0' ]",
   "item": [
    "0"
   ],
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "Array with string 0 and string 0",
   "itemAsString": "[ '0' , '0' ]",
   "item": [
    "0",
    "0"
   ],
   "comparison": "== false",
   "result": false,
   "IFresult": true
  }
 ],
 "NUMBERS": [
  {
   "name": "Number 0",
   "itemAsString": "0",
   "item": 0,
   "comparison": "== false",
   "result": true,
   "IFresult": false
  },
  {
   "name": "Number -0",
   "itemAsString": "-0",
   "item": 0,
   "comparison": "== false",
   "result": true,
   "IFresult": false
  },
  {
   "name": "Number +0",
   "itemAsString": "+0",
   "item": 0,
   "comparison": "== false",
   "result": true,
   "IFresult": false
  },
  {
   "name": "Number 1",
   "itemAsString": "1",
   "item": 1,
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Number -1",
   "itemAsString": "-1",
   "item": -1,
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Number 0.1",
   "itemAsString": "0.1",
   "item": 0.1,
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "Number -0.1",
   "itemAsString": "-0.1",
   "item": -0.1,
   "comparison": "== false",
   "result": false,
   "IFresult": true
  }
 ],
 "STRINGS": [
  {
   "name": "Empty String",
   "itemAsString": "''",
   "item": "",
   "comparison": "== false",
   "result": true,
   "IFresult": false
  },
  {
   "name": "String with 0",
   "itemAsString": "'0'",
   "item": "0",
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "String with double 0",
   "itemAsString": "'00'",
   "item": "00",
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "String with -0",
   "itemAsString": "'-0'",
   "item": "-0",
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "String with +0",
   "itemAsString": "'+0'",
   "item": "+0",
   "comparison": "== false",
   "result": true,
   "IFresult": true
  },
  {
   "name": "String with 0.1",
   "itemAsString": "'0.1'",
   "item": "0.1",
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "String with 1",
   "itemAsString": "'1'",
   "item": "1",
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "String with true",
   "itemAsString": "'true'",
   "item": "true",
   "comparison": "== false",
   "result": false,
   "IFresult": true
  },
  {
   "name": "String with false",
   "itemAsString": "'false'",
   "item": "false",
   "comparison": "== false",
   "result": false,
   "IFresult": true
  }
 ]
}
```

API
---
### Constants

* `WhatIsFalse.ALL` = 'all'
* `WhatIsFalse.TRUE` = 'true'
* `WhatIsFalse.FALSE` = 'false'
* `WhatIsFalse.JSON` = 'json'

### Static Methods

#### WhatIsFalse

See: `WhatIsFalse.factory` for details on instantiation.

#### WhatIsFalse.factory([options])

WhatIsFalse instance creator

* `options` - options (optional)
  - `operand` - boolean used for comparison (default *false*)
  - `result` - string *WhatIsFalse.FALSE* or *WhatIsFalse.TRUE* or *WhatIsFalse.ALL* (default): only *true*, *false* or *all* comparison results with *operand* will be displayed, respectively.
  - `output` - string *WhatIsFalse.JSON* or empty (defalut)
  
### Instance Methods

#### instance.toString()

See: `instance.compare` for details.

#### instance.compare()

Make the comparison and return the result as string.

#### instance.eq2(item)

Compare item to *false* (or *true* if *operand* option is *true*) and return the comparison result.
