What is false
===========

What and who is false?  
Get a list of most significant JavaScript primitives, values and objects compared with false.

Table of Contents
-----------------

* [Usage](#usage)
* [Example](#example)
* [API](#api)

Usage
-----

Node.js

```js
var WhatIsFalse = require('what-is-false');
```

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
  "result": false
 },
 "UNDEFINED": {
  "name": "Undefined",
  "itemAsString": "undefined",
  "comparison": "== false",
  "result": false
 },
 "NAN": {
  "name": "NaN",
  "itemAsString": "NaN",
  "item": null,
  "comparison": "== false",
  "result": false
 },
 "TRUE": {
  "name": "True",
  "itemAsString": "true",
  "item": true,
  "comparison": "== false",
  "result": false
 },
 "FALSE": {
  "name": "False",
  "itemAsString": "false",
  "item": false,
  "comparison": "== false",
  "result": true
 },
 "ARRAYS": [
  {
   "name": "Empty array",
   "itemAsString": "[]",
   "item": [],
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Array with 0",
   "itemAsString": "[ 0 ]",
   "item": [
    0
   ],
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Array with 0.1",
   "itemAsString": "[ 0.1 ]",
   "item": [
    0.1
   ],
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Array with empty object",
   "itemAsString": "[ {} ]",
   "item": [
    {}
   ],
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Array with 0 and 0",
   "itemAsString": "[ 0 , 0 ]",
   "item": [
    0,
    0
   ],
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Array with string 0",
   "itemAsString": "[ '0' ]",
   "item": [
    "0"
   ],
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Array with two string 0 elements",
   "itemAsString": "[ '0' , '0' ]",
   "item": [
    "0",
    "0"
   ],
   "comparison": "== false",
   "result": false
  }
 ],
 "NUMBERS": [
  {
   "name": "Number 0",
   "itemAsString": "0",
   "item": 0,
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Number -0",
   "itemAsString": "-0",
   "item": 0,
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Number +0",
   "itemAsString": "+0",
   "item": 0,
   "comparison": "== false",
   "result": true
  },
  {
   "name": "Number 1",
   "itemAsString": "1",
   "item": 1,
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Number -1",
   "itemAsString": "-1",
   "item": -1,
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Number 0.1",
   "itemAsString": "0.1",
   "item": 0.1,
   "comparison": "== false",
   "result": false
  },
  {
   "name": "Number -0.1",
   "itemAsString": "-0.1",
   "item": -0.1,
   "comparison": "== false",
   "result": false
  }
 ],
 "STRINGS": [
  {
   "name": "Empty String",
   "itemAsString": "''",
   "item": "",
   "comparison": "== false",
   "result": true
  },
  {
   "name": "String with 0",
   "itemAsString": "'0'",
   "item": "0",
   "comparison": "== false",
   "result": true
  },
  {
   "name": "String with double 0",
   "itemAsString": "'00'",
   "item": "00",
   "comparison": "== false",
   "result": true
  },
  {
   "name": "String with -0",
   "itemAsString": "'-0'",
   "item": "-0",
   "comparison": "== false",
   "result": true
  },
  {
   "name": "String with +0",
   "itemAsString": "'+0'",
   "item": "+0",
   "comparison": "== false",
   "result": true
  },
  {
   "name": "String with 0.1",
   "itemAsString": "'0.1'",
   "item": "0.1",
   "comparison": "== false",
   "result": false
  },
  {
   "name": "String with 1",
   "itemAsString": "'1'",
   "item": "1",
   "comparison": "== false",
   "result": false
  },
  {
   "name": "String with true",
   "itemAsString": "'true'",
   "item": "true",
   "comparison": "== false",
   "result": false
  },
  {
   "name": "String with false",
   "itemAsString": "'false'",
   "item": "false",
   "comparison": "== false",
   "result": false
  }
 ]
}
```

API
---
TODO
