define(function(require,exports,module){
	
	return function(jquery){
	
		;(function($){
		
			var Slidedown=function(element,options){
				this.element=$(element);
				this.options=options;
				this.settings=$.extend({},Slidedown.defaults,this.options);
				this.timer=null;
				//this.iStop=true;
				this.init();
			}
			
			Slidedown.prototype={
				init:function(){
					var that=this;
					this.element.on(that.settings.event,function(){
						var _this=$(this);
						_this.addClass(that.settings.on);
						if(that.settings.event=="mouseenter"){
						
								clearTimeout(that.timer);
								
								that.timer=setTimeout(function(){
							
										_this.find(that.settings.child).slideDown(that.settings.time);
									
								},that.settings.delay);
						
						}else if(that.settings.event=="click"){
								_this.find(that.settings.child).slideDown(that.settings.time);	
						}
					}).on('mouseleave',function(){
					
							var _this=$(this);
							_this.removeClass(that.settings.on);
							clearTimeout(that.timer);
							that.timer=setTimeout(function(){
								_this.find(that.settings.child).delay(that.settings.delay).slideUp(100);
							},that.settings.delay);
						
					});
				}
			}
			
			Slidedown.defaults={
				'child':'.nav-item-container',
				'event':'mouseenter',
				'delay':150,
				'time':200,
				'on':'on'
				
			}
			
			$.fn.slidedown=function(options){
				return this.each(function () {
					new Slidedown(this,options);
				})
			}
			
		})(jQuery);

	}
	
});

