;!function(){
	'use strict';
	var $c = {}, $s, $w = window;
	$c.m = function(w){
		$s = this;
		$s.w = w;
	}
	$c.m.prototype = {
		s : function(d){
			$s.w && $s.w.postMessage(JSON.stringify(d), '*')
		}
	}
	$w.Messenger = $c.m;
}()