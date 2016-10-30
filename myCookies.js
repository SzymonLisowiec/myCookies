/*****************************************************
 Name: myCookies
 Version: 3.0
 Author: Szymon Lisowiec
 Github: https://github.com/SzymonLisowiec/myCookies
 License: MIT
*****************************************************/
function myCookies(expanded, domain, path){
	
	var self = {
		domain: (typeof domain != 'undefined' && domain != null)?domain:window.location.hostname,
		path: (typeof path != 'undefined' && path != null)?path:'/',
		expanded: (typeof expanded != 'undefined' && expanded != null)?expanded:false,
		
		setCookie: function(name, value, expire, domain, path){
			if(typeof name != 'undefined' && typeof value != 'undefined'){
				
				var date = new Date();
				switch(typeof expire){
					case 'object': date = expire; break;
					case 'undefined': date.setTime(date.getTime()+86400000); break;
					default: date.setTime(expire); break;
				}
				
				domain = ((typeof domain != 'undefined')?domain:this.domain);
				path = ((typeof path != 'undefined')?path:this.path);
				
				if(this.expanded) value = btoa(value+'|'+btoa(date.getTime()+'|'+domain+'|'+path));
				
				document.cookie = name+'='+value+';expires='+date.toUTCString()+';domain='+domain+';path='+path;
				
				return true;
			}
			return false;
		},
		
		setExpire: function(name, expire){
			if(this.expanded){
				var cookie = this.getCookie(name);
				this.setCookie(cookie.name, cookie.value, expire, cookie.domain, cookie.path);
				return true;
			}else console.error('Method setExpire() is only available in expanded mode!');
			return false;
		},
		
		setDomain: function(name, domain){
			if(this.expanded){
				var cookie = this.getCookie(name);
				this.setCookie(cookie.name, cookie.value, cookie.expire, domain, cookie.path);
				return true;
			}else console.error('Method setDomain() is only available in expanded mode!');
			return false;
		},
		
		setPath: function(name, path){
			if(this.expanded){
				var cookie = this.getCookie(name);
				this.setCookie(cookie.name, cookie.value, cookie.expire, cookie.domain, path);
				return true;
			}else console.error('Method setPath() is only available in expanded mode!');
			return false;
		},
		
		cookieValue: function(name){
			if(typeof name != 'undefined'){
				try {
					document.cookie.split(';').forEach(function(cookie){
						cookie = cookie.trim();
						if(cookie.match(new RegExp(name+"\=(.*?)", "i"))){
							cookie = cookie.substr((name+'=').length);
							if(self.expanded) cookie = atob(cookie).split('|')[0];
							throw cookie;
						}
					});
				}catch(cookie){
					return cookie;
				}
			}
			return false;
		},
		
		cookieName: function(value){
			if(typeof value != 'undefined'){
				var names = [];
				document.cookie.split(';').forEach(function(cookie){
					cookie = cookie.trim();
					if(self.expanded){
						try{
							if(value == atob(cookie.slice(cookie.indexOf('=')+1,cookie.length)).split('|')[0])
								names.push(cookie.split('=')[0]);
						}catch(e){}
					}else{
						cookie = cookie.match(new RegExp("(.*?)\="+value, "i"));
						if(cookie) names.push(cookie[1].trim());
					}
				});
				if(names.length > 0)
					return names;
			}
			return false;
		},
		
		getCookie: function(name){
			if(this.expanded){
				if(typeof name != 'undefined'){
					try {
						document.cookie.split(';').forEach(function(cookie){
							cookie = cookie.trim();
							if(cookie.match(new RegExp(name+"\=(.*?)", "i"))){
								var r = { name: name };
								try {
									cookie = atob(cookie.substr((r.name+'=').length)).split('|');
									r.value = cookie[0];
									cookie = atob(cookie[1]).split('|');
									r.expire = new Date().setTime(cookie[0]);
									r.domain = cookie[1];
									r.path = cookie[2];
								}catch(e){
									r.value = cookie.substr((name+'=').length);
								}
								throw r;
							}
						});
					}catch(cookie){
						return cookie;
					}
				}
			}else console.error('Method getCookie() is only available in expanded mode!');
			return false;
		},
		
		getCookies: function(){
			var cookies = {};
			if(document.cookie != ''){
				document.cookie.split(';').forEach(function(cookie){
					cookie = cookie.trim();
					var r = { name: cookie.split('=')[0] };
					try {
						cookie = atob(cookie.substr((r.name+'=').length)).split('|');
						r.value = cookie[0];
						cookie = atob(cookie[1]).split('|');
						r.expire = new Date().setTime(cookie[0]);
						r.domain = cookie[1];
						r.path = cookie[2];
					}catch(e){
						r.value = cookie.substr((name+'=').length);
					}
					cookies[r.name] = r;
				});
			}
			return cookies;
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
				self.setCookie(name, '', 0);
				return true;
			}
			return false;
		},
		
		destroyCookies: function(){
			var removed = 0;
			var cookies = self.getCookies();
			for(var name in cookies){
				if(this.removeCookie(name))
					removed++;
			}
			return (removed)?removed:false;
		}
		
	};
	
	return self;
	
}