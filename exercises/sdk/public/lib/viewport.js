;!function(){
	'use strict';
	var $w = window,
	wa = $w.addEventListener,
	$c = {}
	$c.p = [
		['pointA',['left','top']], ['pointB',['right','top']], ['pointC',['right','bottom']], ['pointD',['left','bottom']]
	];
	$c.iP = function(a){
		var b = a[1],
		c = document, 
		d = c.body || c.getElementsByTagName('body')[0],
		e = 'style',
		f = c.createElement('div');
		f[e].position = 'fixed',
		f[e].width = '1px',
		f[e].height = '1px',
		f[e].visibility = 'hidden',
		f.id = a[0];
		for(var g in b)
			f[e][b[g]] = 0;
		d.appendChild(f)
		return f
	};
	$c.i = function(){
		$c.iP($c.p[0]), 
		$c.iP($c.p[1]), 
		$c.iP($c.p[2]), 
		$c.iP($c.p[3]);
	};
	$c.g = function(){
		try{
			var a = document, 
			b = a.getElementById,
			c = b.apply(a, [$c.p[1][0]]).getBoundingClientRect(),
			d = b.apply(a, [$c.p[3][0]]).getBoundingClientRect()
			return {
				width : c.left + 1,
				height : d.top + 1
			}
		}catch(e){
			return null
		}
	};
	$w.viewport = {
		'g' : $c.g
	}
	wa('load', $c.i, false);
}()