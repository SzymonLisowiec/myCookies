# myCookies
Library created to make using cookies easier.
 
## New Version 3.0
- Extended mode - allows you to check the path, domain and expiration time of a cookie
- Other fixes
 
## Example
```JavaScript
var myCookies = myCookies(true);
myCookies.setCookie('SimpleCookie', 'xyz');
var cookies = myCookies.getCookies();
console.log(cookies);
/*return
{
    "SimpleCookie": {
        "name": "SimpleCookie",
        "value": "xyz",
        "domain": "kysune.me",
        "expire": 1477936667864,
        "path": "/"
    }
}
*/
```
 
## Constructor
```JavaScript
var myCookies = myCookies([extended, domain, path])
```
- **extended** - Set the value to TRUE to enable the extended mode (Extended mode allows you to check the path, domain and expiration time of a cookie). [boolean] [Default: false]
- **domain** - your domain name [string] [Default: value of window.location.hostname]
- **path** - path of location to store cookies [string] [Default: /]
 
## Methods
### setCookie(name, value[, expire, domain, path])
- **name** - cookie name [string]
- **value** - cookie value [string]
- **expire** - expiration time [integer (milliseconds) or Date() object] [Default: current time+24h]
- **domain** - your domain name [string] [Default: domain from constructor]
- **path** - path of location to store cookies [string] [Default: path from constructor]

Create and save a new cookie.
 
### cookieValue(name)
- **name** - cookie name [string]

Returns the cookie value, searching by name.
 
### cookieName(value)
- **value** - cookie value [string]

Returns the cookie name, searching by value.
 
### cookieExists(name)
- **name** - cookie name [string]

Returns true if cookie exists.
 
### removeCookie(name)
- **name** - cookie name [string]

Removes a cookie.
 
### destroyCookies()
Removes all cookies.
 
### getCookies()
Return all cookies (cookie name and value, __in extended mode: name, value, expiration time, domain and path__).
 
## Methods in extended mode
### getCookie(name)
- **name** - cookie name [string]

Returns all information about a cookie (name, value, expiration time, domain and path). When can't be get all information, return only name and value.
 
### setExpire(name, expire)
- **name** - cookie name [string]
- **expire** - expiration time  [integer (milliseconds) or Date() object]

Change cookie's expiration time.
 
### setDomain(name, domain)
- **name** - cookie name [string]
- **domain** - your domain name [string]

Change cookie's domain.
 
### setPath(name, path)
- **name** - cookie name [string]
- **path** - path of location to store cookies [string]

Change cookie's path.
 
## License
MIT License
 
Copyright (c) 2016
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.