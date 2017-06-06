;!function(){
	'use strict';
	var $c = {}, $s, $w = window;
	$c.e = function(){
		$s = this;
		$s.s = {}
	};
	$c.e.prototype = {
		e : function(e){
			return $s.s.hasOwnProperty(e) && typeof $s.s[e] == 'object'
		},
		i : function(e){
			for(var a in e)
				$s.s[e[a]] = new Array;			
		},
		a : function(e, c, s){
			!$s.e(e) && ($s.s[e] = new Array)
			$s.s[e].push({
				c : c, 
				s : s
			});
		},
		r : function(e, c){
			if(!$s.e(e))
				return;
			for(var a in $s.s[e])
				if(c == $s.s[e][a].c)
					$s.s[e][a] = void 0;		
		},
		d : function(e, a){
			if(!$s.e(e))
				return;
			for(var b in $s.s[e])
				if($s.s[e][b])
					$s.s[e][b].s ? $s.s[e][b].c.apply($s.s[e][b].s, [a]) : $s.s[e][b].c(a);
		}
	}
	$w.EventMgr = $c.e;
}()