;!function(){
	'use strict';
	var $w = window, 
	$c = {}, 
	$d = {},
	wa = $w.addEventListener;
	$d.u = 	util;
	$c.c = function(a, b, c){
		var d = document, 
		e = d.createElement, 
		f = e.apply(d, ['div']),
		g = 'style';
		f[g].width = $d.u.f('{0}px', a[3]),
		f[g].height = $d.u.f('{0}px', a[4]),
		f.id = a[0],
		$c.p(f, a[1], a[2], a[3], a[4]),		
		$c.i(f, b, c);
		return f
 	};
 	$c.p = function(a, b, c, d, e){
 		var f = 'style', 
 		g = 'position',
 		h = 'absolute',
 		i = 'relative',
 		j = 'fixed',
 		k = 'center',
 		l = 'left',
 		m = 'right',
 		n = 'top',
 		o = 'bottom',
 		p = 'margin-top',
 		q = 'margin-left',
 		r = 'fullscreen',
 		s = 'width',
 		t = 'height'; 		
 		if(b != r)
	 		b && (
	 			(b == k && (a[f][l] = '50%', a[f][q] = $d.u.f('-{0}px', (d/2)))) ||
	 			(b == l && (a[f][l] = 0)) || 
	 			(b == m && (a[f][m] = 0))
	 		), c && (
	 			(c == k && (a[f][n] = '50%', a[f][p] = $d.u.f('-{0}px', (e/2)))) ||
	 			(c == n && (a[f][n] = 0)) || 
	 			(c == o && (a[f][o] = 0))
	 		), (b == m || c == o && (a[f][g] = j)) || (a[f][g] = i), (a[f][s] = $d.u.f('{0}px', d), a[f][t] = $d.u.f('{0}px', e))	 		
	 	else (a[f][g] = h, a[f][s] = '100%', a[f][t] = '100%', a[f][p] = 0, a[f][q] = 0, a[f][l] = 0, a[f][l] = 0)
 	};
 	$c.i = function(a, b, c){
 		var d = 'appendChild',
 		e = 'insertBefore';
 		c == 2 && b.parentNode[e].apply(b.parentNode, [a, b]) || b[d](a);
 	};
	$w.divhelper = {};
	$w.divhelper.c = function(a, b, d){
		return $c.c(a, b, d);
	},
	$w.divhelper.p = function(a, b, c, d, e){
		return $c.p(a, b, c, d, e);
	},
	$w.divhelper.i = function(a, b, c){
		return $c.i(a, b, c);
	}
}()