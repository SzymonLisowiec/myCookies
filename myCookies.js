var myCookies = function(){
	
	return {
		
		setCookie: function(name, value, expire, date){
			if(name != undefined && value != undefined){
				date = new Date();
				if(expire != undefined){
					date.setTime(expire);
				}else{
					date.setTime(date.getTime()+86400000);
				}
				expire = date.toUTCString();
				document.cookie = name+'='+value+';expires='+expire;
				return true;
			}else return false;
		},

		cookieValue: function(name, cookies, foundcookie, match){
			foundcookie = false;
			cookies = document.cookie.split(';');
			cookies.forEach(function(cookie){
				cookie = cookie.trim();
				if(cookie.match(new RegExp(name+"\=(.*?)", "i"))){
					foundcookie = cookie.substr((name+'=').length);
				}
			});
			if(foundcookie){
				return foundcookie;
			}else return false;
		},
		
		cookieName: function(value, cookies, foundcookie, match){
			cookies = document.cookie.split(';');
			cookies.forEach(function(cookie){
				match = cookie.match(new RegExp("(.*?)\="+value, "i"));
				if(match){
					foundcookie = match[1].trim();
				}
			});
			if(foundcookie != undefined){
				return foundcookie;
			}else return false;
		},
		
		cookieExists: function(name, cookies, foundcookie){
			foundcookie = false;
			cookies = document.cookie.split(';');
			cookies.forEach(function(cookie){
				cookie = cookie.trim();
				if(cookie.match(new RegExp(name+"\=(.*?)", "i"))){
					foundcookie = true;
				}
			});
			return foundcookie;
		},
		
		removeCookie: function(name){
			if(name != undefined){
				document.cookie = name+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
				return true;
			}else return false;
		}
		
	};
	
}
