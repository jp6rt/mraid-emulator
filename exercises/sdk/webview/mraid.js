!function(){
	'use strict';
	var $c = {},
	$s,
	$w = window, 
	$d = {
		u : util, 
		m : Messenger,
		e : EventMgr
	};
	$c.c = $w.$container || {},
	$c.w = $w.$webview || {};
	$c.cC = function(){
		$s = this;
		$s.p = {},
		$s.e = new $d.e,
		$s.e.i($c.c.m),
		$s.iE(),
		$s.lM(),
		$s.pm = new $d.m($w.parent);
	}
	$c.cC.prototype = {
		iE : function(){
			var a = 'message', b = 'addEventListener';
			$w[b].apply($w, [a, function(e){
				$s.e.d($c.c.m.hM, e)
			}, !1])
		},
		lM : function(){
			$s.e.a($c.c.m.hM, $s.hM, $s)			
		},
		hM : function(e){
			var a = JSON.parse(e.data);
			if(!a)
				return;
			switch(a.type){
				case $c.c.m.iD:
				case $c.c.m.uP:
					a.data && ($s.p = a.data)
				default:
					$d.u.i(a.type, $c.c.m) && $s.e.d(a.type, a.data)
			}
		},
		cT : function(a){
			$s.pm.s({	
				type : $c.c.m.cT,
				data : a
			});
		},
		eX : function(){
			$s.pm.s({	
				type : $c.c.m.eX
			});
		},
		cL : function(){
			$s.pm.s({	
				type : $c.c.m.cL
			});
		}
	}
	$c.cc = new $c.cC;

	var mraidMethods = [
		'addEventListener',
		'createCalendarEvent',
		'close',
		'expand',
		'getCurrentPosition',
		'getDefaultPosition',
		'getExpandProperties',
		'getMaxSize',
		'getPlacementType',
		'getResizeProperties',
		'getScreenSize',
		'getState',
		'getVersion',
		'isViewable',
		'open',
		'playVideo',
		'removeEventListener',
		'resize',
		'setExpandProperties',
		'setResizeProperties',
		'setOrientationProperties',
		'getOrientationProperties',
		'storePicture',
		'supports',
		'useCustomClose'
	], mraidEvents = [
		'error', 'ready', 'sizeChange', 'stateChange', 'viewableChange'
	], mraidStates = [
		'loading', 'default', 'expanded', 'resized', 'hidden'
	], mraidSupportedFeatures = [
		'inlineVideo'
	]
	var IMRAID = function(){
		this.state = 'loading'
		this.events = mraidEvents;
		this.states = mraidStates;
		this.features = mraidSupportedFeatures;
		this.subscriptions = {};
		for(var e in this.events){
			this.subscriptions[this.events[e]] = new Array
		}
	};
	
	for(var method in mraidMethods){
		IMRAID.prototype[mraidMethods[method]] = function(){}
	};
	
	IMRAID.prototype.dispatchEvent = function(e, d){
		for(var a in this.subscriptions[e]){
			if(this.subscriptions[e][a])
				this.subscriptions[e][a].scope ? this.subscriptions[e][a].callback.apply(this.subscriptions[e][a].scope, [d]) : this.subscriptions[e][a].callback(d);
		}
	}

	var MRAIDV2 = function(){
		this.super(this);		
		$c.cc.e.a($c.c.m.iD, function(){
			this.state = 'default'; 		
			this.dispatchEvent('stateChange', 'default')
			this.dispatchEvent('ready');		
		}, this);
		$c.cc.e.a($c.c.m.sC, function(a){
			this.dispatchEvent('stateChange', a)
			this.state = a;
		}, this);
		$c.cc.pm.s({	
			type : $c.c.m.iN
		});
	};
	
	MRAIDV2.prototype = {
		getVersion : function(){
			return 2
		},
		getState : function(){
			return this.state
		},
		addEventListener : function(e, c, s){
			this.subscriptions[e].push({
				callback : c, 
				scope : s
			});
		},
		removeEventListener : function(e, c){
			for(var a in this.subscriptions[e]){
				if(c == this.subscriptions[e][a].callback){
					this.subscriptions[e][a] = void 0
				}
			}
		},
		isViewable : function(){
			return !0;
		},
		open : function(url){
			return $c.cc.cT(url);
		},
		getPlacementType : function(){
			return $c.cc.p.pT;
		},
		getMaxSize : function(){
			return $c.cc.p.mS;
		},
		getCurrentPosition : function(){
			return $c.cc.p.cP;
		},
		getScreenSize : function(){
			return $c.cc.p.sS;
		},
		getFeatures : function(){

		},
		isViewable : function(){

		},
		expand : function(){
			return $c.cc.eX();
		},
		close : function(){
			return $c.cc.cL();
		},
		getResizeProperties : function(){
			return $c.cc.p.rP;
		},
		getDefaultPosition : function(){
			return $c.cc.p.dP;
		},
		getExpandProperties : function(){
			return $c.cc.p.eP;
		},
		supports : function(feature){
			var supported = !1;
			for(var a in this.features){
				if(feature == this.features[a])
					supported = !0;
			}
			return supported;
		}
	}		
	$d.u.e(IMRAID, MRAIDV2)
	$w.mraid = new MRAIDV2
}()