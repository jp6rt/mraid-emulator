;!function(){
	'use strict';
	var $w = window, 
	$c = {};
	$c.o = function(a){
		var b = new Array;
		for(var c in a){
			b.push(a[c]);
		}
		return b;
	};
	$c.f = function(){
		var a, b;
		(typeof arguments[0] == 'object') ? (a = arguments[0][0], b = arguments[0]) : (a = arguments[0], b = arguments);	
		if(b.length > 1 && !a.match(/{\d}/g)){
			n.o(b).join(' ');
		}
		a = a.replace(/{\d}/g, function(s){
			var k = (1 * s.match(/\d/)[0]) + 1;
			return typeof b[k] !== 'undefined' ? b[k] : s
		});
		return a
	};
	$c.i = function(a, b){
		var c = !1;		
		for(var d in b){
			if(a == b[d])
				c = !0;
		}
		return c
	};
	$c.e = function(a, b){
		for(var c in a.prototype){				
			if(a.prototype.hasOwnProperty(c) && !b.prototype[c]){
					b.prototype[c] = a.prototype[c];
			}
		}
		b.prototype.super = function(d){
			a.prototype.constructor.apply(d, []);
		}
	};
	$w.util = {
		'f' : $c.f,
		'i' : $c.i,
		'e' : $c.e
	};
}()