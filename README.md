# myCookies
Library for support cookies.

## Example
```JavaScript
var myCookies = new myCookies();
myCookies.setCookie('MyExampleCookie', 'Cookie value for example.'); //saving cookie on 24 hours; return boolean: true
myCookies.cookieValue('MyExampleCookie'); //get cookie value; return string: 'Cookie value for example.'
myCookies.cookieName('Cookie value for example.'); //get cookies name by value; return array: ['MyExampleCookie']
myCookies.cookieExists('MyExampleCookie'); //checking cookie exists; return bolean: true
myCookies.removeCookie('MyExampleCookie'); //removing cookie; return boolean: true
myCookies.allCookies(); //return object: {'MyExampleCookie': 'Cookie value for example.'}

myCookies.cookieValue('MyExampleCookie'); //return boolean: false
myCookies.cookieName('Cookie value for example.'); //return boolean: false
myCookies.cookieExists('MyExampleCookie'); //return boolean: false
myCookies.removeCookie('MyExampleCookie'); //return boolean: false
myCookies.allCookies(); //return boolean: false

myCookies.setCookie('MyExampleCookie', 'Cookie value for example.'); //saving cookie on 24 hours; return boolean: true
myCookies.destroyCookies(); //remove all cookies; return integer: 1
myCookies.destroyCookies(); //return boolean: false
```
## Constructor
```JavaScript
myCookies([domain, path]);
```
* **domain** - [optional][string] - your domain name - Default: result of *window.location.hostname*
* **path** - [optional][string] - your path to save cookie - Default: /

## Methods
##### setCookie
```JavaScript
setCookie(name, value[, expire, domain, path]);
```
* **name** - [string] - cookie name
* **value** - [string] - cookie value
* **expire** - [integer] - cookie time expire in milliseconds - Default: result of *date.getTime()* + 24 hours
* **domain** - [optional][string] - your domain name - Default: result of *window.location.hostname*
* **path** - [optional][string] - your path to save cookie - Default: /
* **return**: boolean

##### cookieValue
```JavaScript
cookieValue(name);
```
* **name** - [string] - cookie name
* **return**: string or false

##### cookieName
```JavaScript
cookieName(value);
```
* **value** - [string] - cookie value
* **return**: array of names or false

---
```JavaScript
cookieExists(name);
```
* **name** - [string] - cookie name
* **return**: boolean (true or false)

##### removeCookie
```JavaScript
removeCookie(name);
```
* **name** - [string] - cookie name
* **return**: boolean (true or false)

##### allCookies
```JavaScript
allCookies();
```
* **return**: array of cookies (names and values) or false

##### destroyCookies
```JavaScript
destroyCookies();
```
* **return**: integer (number of removed cookies) or false

## License
MIT License

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
