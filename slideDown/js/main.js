define(function(require,exports,module){
	var $=require('jquery');
	
	require('slidedown')($);
	
	var aLi=$('.nav>li');
	var aLiWrap=$('.navWrap>li');
	var aLiWrapBox=$('.navWrapBox>li');
	aLi.slidedown({
		
	});
	
	aLiWrapBox.slidedown({
		'child':'.nav-item',
		'delay':80
	});
	
	
	aLiWrap.slidedown({
		'child':'.nav-item',
		'event':'click'
	});
	
	
});