!function(){
	var $c = {}, $w = window;
	$c.m = {
		iN : 'Init',
		iD : 'InitDone',
		uP : 'UpdateProperty',
		WL : 'WindowLoad',
		wL : 'WebviewLoad',
		wR : 'WebviewReady',
		hM : 'HandleMsg',
		eX : 'Expand',
		cL : 'Collapse',
		sC : 'stateChange',
		cT : 'clickThrough'
	}
	$w.$container = $w.$container || {},
	$w.$container.m = $c.m
}();