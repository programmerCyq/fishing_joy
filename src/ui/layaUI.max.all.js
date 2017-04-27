var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var fishingUI=(function(_super){
		function fishingUI(){
			
		    this.fish_home_bg=null;
		    this.can_bg=null;
		    this.can_1=null;
		    this.can_2=null;
		    this.can_3=null;
		    this.can_4=null;
		    this.can_5=null;
		    this.can_6=null;
		    this.can_7=null;
		    this.can_add=null;
		    this.can_dw=null;

			fishingUI.__super.call(this);
		}

		CLASS$(fishingUI,'ui.fishingUI',_super);
		var __proto__=fishingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(fishingUI.uiView);
		}

		STATICATTR$(fishingUI,
		['uiView',function(){return this.uiView={"type":"View","props":{"width":600,"name":"home_bg","height":980},"child":[{"type":"Image","props":{"y":0,"x":0,"width":600,"var":"fish_home_bg","skin":"comp/static/game_bg_2_hd.jpg","name":"fish_home_bg","height":980}},{"type":"Image","props":{"y":895,"x":-5,"width":600,"var":"can_bg","skin":"comp/static/bottom_bg.png","name":"can_bg"}},{"type":"Image","props":{"y":913,"x":333,"width":86,"var":"can_1","skin":"comp/static/cannon/cannon1.png","pivotY":53,"pivotX":43,"name":"can_1","height":106}},{"type":"Image","props":{"y":913,"x":331,"width":86,"visible":false,"var":"can_2","skin":"comp/static/cannon/cannon2.png","pivotY":53,"pivotX":43,"name":"can_2","height":106}},{"type":"Image","props":{"y":913,"x":331,"width":86,"visible":false,"var":"can_3","skin":"comp/static/cannon/cannon3.png","pivotY":53,"pivotX":43,"name":"can_3","height":106}},{"type":"Image","props":{"y":913,"x":335,"width":86,"visible":false,"var":"can_4","skin":"comp/static/cannon/cannon4.png","pivotY":53,"pivotX":43,"name":"can_4","height":106}},{"type":"Image","props":{"y":913,"x":333,"width":86,"visible":false,"var":"can_5","skin":"comp/static/cannon/cannon5.png","pivotY":53,"pivotX":43,"name":"can_5","height":106}},{"type":"Image","props":{"y":913,"x":333,"width":86,"visible":false,"var":"can_6","skin":"comp/static/cannon/cannon6.png","pivotY":53,"pivotX":43,"name":"can_6","height":106}},{"type":"Image","props":{"y":940,"x":333,"width":86,"visible":false,"var":"can_7","skin":"comp/static/cannon/cannon7.png","pivotY":80,"pivotX":43,"name":"can_7","height":106}},{"type":"Button","props":{"y":930,"x":365,"width":50,"var":"can_add","stateNum":"2","skin":"comp/anima/bottom/button_add.png","name":"can_add","height":30}},{"type":"Button","props":{"y":930,"x":245,"width":50,"var":"can_dw","stateNum":"2","skin":"comp/anima/bottom/button_rm.png","name":"can_dw","height":30}}]};}
		]);
		return fishingUI;
	})(View);