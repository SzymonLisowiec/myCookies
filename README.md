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
cookieValue(value);
```
