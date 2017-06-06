!function(){
	'use strict';
	var $c = {},
	$s,
	$w = window, 	
	$d = {
		u : util, 
		v : viewport,
		m : Messenger,
		e : EventMgr,
		d : divhelper
	};	
	$c.c = $w.$container || {};
	$c.cM = function(a, b, c){
		$s = this;
		$s.wR = !1, 
		$s.p = {},
		$s.p.pT = a,
		$s.w = b,
		$s.h = c,
		$s.e = new $d.e,
		$s.e.i($c.c.m),
		$s.iE(),
		$s.lM();	
	}
	$c.cM.prototype = {
		iE : function(){
			var a = 'load', b = 'message', c = 'resize', d = 'addEventListener';
			$w[d].apply($w, [a, function(e){
				$s.e.d($c.c.m.WL)
			}, !1])
			$w[d].apply($w, [b, function(e){
				$s.e.d($c.c.m.hM, e)
			}, !1])
			$w[d].apply($w, [c, function(e){
				$s.e.d($c.c.m.uP)
			}, !1])
		},
		lM : function(){
			$s.e.a($c.c.m.WL, $s.iW, $s)
			$s.e.a($c.c.m.hM, $s.hM, $s)
			$s.e.a($c.c.m.wL, $s.hWL, $s)
			$s.e.a($c.c.m.uP, $s.hUP, $s)
			$s.e.a($c.c.m.eX, $s.hE, $s)
			$s.e.a($c.c.m.cL, $s.hC, $s)
			$s.e.a($c.c.m.iN, $s.sIM, $s)
			$s.e.a($c.c.m.sC, $s.hSC, $s)
			$s.e.a($c.c.m.cT, $s.hCT, $s)
		},
		iW : function(){
			var a = document,
			b = a.getElementsByTagName,
			c = a.createElement,
			d = 'http://localhost:9002/sdk/webview/index.html',
			e = 'style',
			f = 'width',
			g = 'height',
			h = 'border',
			i = 'margin',
			j = 'marginheight',
			k = 'marginwidth',
			l = 'frameborder',
			m = 'scrolling',
			n = 'webviewIfrm',
			q = [h, i],
			r = [j, k, l],
			s = [f, g];
			$s.wV = $d.d.c(['webview', 'center', 'bottom', $s.w, $s.h], (b.apply(a, ['body']))[0].firstChild, 2)
			$s.wVI = c.apply(a, ['iframe']),
			$s.wVI.src = d,
			$s.wVI.id = n;
			for(var o = 0, p = 0, t = 0; o < q.length, p < r.length, t < s.length; o++, p++, t++)
				try{
					$s.wVI.setAttribute(r[p], 0)
					$s.wVI[e][q[o]] = 0, 					
					$s.wVI[e][s[t]] = '100%'
				}catch($e){

				}
			$s.wVI.setAttribute(m, 'no')
			$s.wVI.onload = function(){
				$s.e.d($c.c.m.wL)
			}
			$d.d.i($s.wVI, $s.wV);
		},
		hM : function(e){
			var a = JSON.parse(e.data);			
			if(!a)
				return;
			switch(a.type){
				default:
					$d.u.i(a.type, $c.c.m) && $s.e.d(a.type, a.data)
			}
		},		
		hWL : function(){
			$s.pm = new $d.m($s.wVI.contentWindow),
			$s.iuP(),
			$s.e.d($c.c.m.wR),
			$s.wR = !0;
			$s.e.d($c.c.m.sC, 'default');
		},
		sIM : function(){
			var a = function(){
				$s.pm.s({
					type : $c.c.m.iD,
					data : $s.p
				})
			}
			$s.wR ? a() : $s.e.a($c.c.m.wR, a);
		},
		hUP : function(){
			$s.iuP(),
			$s.pm.s({
				type : $c.c.m.uP,
				data : $s.p
			})
		},
		hE : function(){			
			$d.d.p($s.wV, 'fullscreen');
			$s.e.d($c.c.m.uP);
			$s.e.d($c.c.m.sC, 'expanded');
		},
		hC : function(){
			$d.d.p($s.wV, 'center', 'bottom', $s.w, $s.h);
			$s.e.d($c.c.m.uP);
			$s.e.d($c.c.m.sC, 'default');
		},
		hSC : function(a){
			$s.pm.s({
				type : $c.c.m.sC,
				data : a
			})
		},
		hCT : function(a){			
			$w.open(a)
		},
		iuP : function(){
			var a = $d.v.g(),
			b = $s.wV.getBoundingClientRect();
			$s.p.dP = {
				width : $s.w, height : $s.h, x : b.left, y : b.top
			}
			$s.p.mS = {
				width : a.width, height: a.height
			}
			$s.p.cP = {
				width : $s.w, height : $s.h, x : b.left, y : b.top
			}
			$s.p.sS = {
				width : a.width, height: a.height
			}
			$s.p.rP = {
				width : 0, height : 0, offsetX : 0, offsetY : 0, customClosePosition : "top-right", allowOffscreen : true
			}
			$s.p.eP = {
				width : a.width, height : a.height, useCustomClose : true, isModal : true
			}
		}
	}
	$w.$container.cM = $c.cM
}()