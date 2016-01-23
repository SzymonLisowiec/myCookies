# myCookies
Library for support cookies.

## Example
```JavaScript
var myCookies = new myCookies();
myCookies.setCookie('MyExampleCookie', 'Cookie value for example.'); //saving cookie on 24 hours; return: true
myCookies.cookieValue('MyExampleCookie'); //get cookie value; return: Cookie value for example.
myCookies.cookieName('Cookie value for example.'); //get cookie name; return: MyExampleCookie
myCookies.cookieExists('MyExampleCookie'); //checking cookie exists; return: true
myCookies.removeCookie('MyExampleCookie'); //removing cookie; return: true

myCookies.cookieValue('MyExampleCookie'); //return: false
myCookies.cookieName('Cookie value for example.'); //return: false
myCookies.cookieExists('MyExampleCookie'); //return: false
myCookies.removeCookie('MyExampleCookie'); //return: false
```

### Methods
1. setCookie(name, value[, expire]);
name - cookie name (string)
value - cookie value (string)
expire - expire unix timestamp (integer)
return: boolean
2. cookieValue(value);
value - cookie value (string)
return: string or false
3. cookieName(name);
name - cookie name (string)
return: string or false
4. cookieExists(name);
name - cookie name (string)
return: boolean
5. removeCookie(name);
name - cookie name (string)
return: boolean
