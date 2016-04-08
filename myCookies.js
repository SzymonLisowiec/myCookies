/*****************************************************
 Name: myCookies
 Version: 2.0
 Author: Szymon Lisowiec
 Github: https://github.com/SzymonLisowiec/myCookies
 License: MIT
*****************************************************/
function myCookies(domain, path){
	
	return {
		domain: (typeof domain != 'undefined')?domain:window.location.hostname,
		path: (typeof path != 'undefined')?path:'/',
		
		setCookie: function(name, value, expire, domain, path){
			if(typeof name != 'undefined' && typeof value != 'undefined'){
				var date = new Date();
				date.setTime((typeof expire != 'undefined')?expire:date.getTime()+86400000);
				expire = date.toUTCString();
				document.cookie = name+'='+value+';expires='+expire+';domain='+((typeof domain != 'undefined')?domain:this.domain)+';path='+((typeof path != 'undefined')?path:this.path);
				return true;
			}
			return false;
		},
		
		cookieValue: function(name){
			if(typeof name != 'undefined'){
				try {
					document.cookie.split(';').forEach(function(cookie){
						cookie = cookie.trim();
						if(cookie.match(new RegExp(name+"\=(.*?)", "i")))
							throw cookie.substr((name+'=').length);;
					});
				}catch(cookie){ return cookie; }
            		}
			return false;
		},
		
		cookieName: function(value){
			if(typeof value != 'undefined'){
				var names = [];
				document.cookie.split(';').forEach(function(cookie){
					cookie = cookie.match(new RegExp("(.*?)\="+value, "i"));
					if(cookie) names.push(cookie[1].trim());
				});
				if(names.length > 0)
					return names;
			}
			return false;
		},
		
		allCookies: function(){
			var cookie_value;
			var cookies = {
				length: 0
			};
			document.cookie.split(';').forEach(function(cookie){
				cookie = cookie.split('=');
				cookie_value = cookie[cookie.length-1].trim();
				delete cookie[cookie.length-1];
				cookie = cookie.join('=').trim();
				cookies[cookie.substr(0, cookie.length-1)] = cookie_value;
				cookies.length++;
			});
			if(typeof cookies[''] != 'undefined' && cookies.length == 1) cookies.length--;
			if(cookies.length > 0){
				delete cookies.length;
				return cookies;
			}
			return false;
		},
		
		cookieExists: function(name){
			if(typeof name != 'undefined'){
				try {
					document.cookie.split(';').forEach(function(cookie){
						cookie = cookie.trim();
						if(cookie.match(new RegExp(name+"\=(.*?)", "i")))
							throw true;
					});
				}catch(exists){ return true; }
			}
			return false;
		},
		
		removeCookie: function(name){
			if(typeof name != 'undefined'){
				document.cookie = name+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
				return true;
			}
			return false;
		},
		
		destroyCookies: function(){
			var removed = 0;
			var cookies = this.allCookies();
			for(var name in cookies){
				if(this.removeCookie(name))
					removed++;
			}
			return (removed)?removed:false;
		}
		
	};
	
}
