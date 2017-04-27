/**
* name 
*/

(function () {
   function Cannon(){
       //修改cannon的原型，指向laya对象
       Cannon.__super.call(this);
       this.init();
       var s=this;
   }
   //链接到内部引擎
   Laya.class(Cannon, "Cannon", laya.display.Sprite);

   //初始化炮弹层
   Cannon.prototype.init=function(){  
        //实例化主页画布
        this.home_bg=new fishingUI();
        //创建炮弹画布
        this._cannon=new Laya.Sprite();
        //创建子弹画布
        this._bullet=new Laya.Sprite();
        //把主页画布添加到底层画布
        this.addChild(this.home_bg);
        //把炮弹画布添加到主页画布
        this.home_bg.addChild(this._cannon);
        this.home_bg.addChild(this._bullet);
        //执行事件绑定方法
        this._on();
        //将所有炮台合并成一个炮台数组类
        this.cannons=[this.home_bg.can_1,
                    this.home_bg.can_2,
                    this.home_bg.can_3,
                    this.home_bg.can_4,
                    this.home_bg.can_5,
                    this.home_bg.can_6,
                    this.home_bg.can_7,
                ];
        
        //定义一个lv值，后面通过lv值判断子弹和炮台的等级
        this.lv=1;

        this.nowCan=this.home_bg.can_1;
   };

  
   //给元素添加事件
   Cannon.prototype._on=function(){
       
        //给 + 按钮绑定事件
        this.home_bg.can_add.on(Laya.Event.MOUSE_DOWN,this,this.way.up);
        //给 - 按钮绑定事件
        this.home_bg.can_dw.on(Laya.Event.MOUSE_DOWN,this,this.way.dw);

        //给屏幕点击添加事件
        this.home_bg.fish_home_bg.on(Laya.Event.MOUSE_DOWN,this,this.way.send)
   }

   //事件的执行方法
   Cannon.prototype.way={
       //升级炮台的方法
    //    _this:this,
       up:function(){
           //当lv大于或等于7的时候，直接return
           if(this.lv>=7){
               return;
           }
            //当点击 + 就初始化所有的炮台visible为false  隐藏
            this.lv++;
            this.way.init_can(this);
            //再通过lv显示所需要的炮台
            this.way.show_can(this);
            // console.log(this)
            
       },

       //降级炮台的方法
       dw:function(){
           //当lv小于或等于1的时候，直接return
           if(this.lv<=1){
               return;
           }
            //当点击 + 就初始化所有的炮台visible为false  隐藏
            this.lv--;
            this.way.init_can(this);
            //再通过lv显示所需要的炮台
            this.way.show_can(this);
       },

       //显示炮台的方法
       show_can:function(_this){
           //通过lv显示炮台的等级
            _this.cannons.forEach(function(val,i){
                if(i+1==_this.lv){
                    val.visible=true;
                    _this.nowCan=val;
                }
            })
       },

       //初始化炮台显示的方法
       init_can:function(_this){
           console.log(_this)
            for(var i=0,len=_this.cannons.length;i<len;i++){

                _this.cannons[i].visible=false;
            }
       },

       //发射炮弹和改变炮台角度的方法
       send:function(e){
           var angle=this._util.get_angle(e);
            //创建子弹
            this.way.addBullet(this,this.lv,angle);
            //发射子弹
            Laya.timer.frameLoop(1,this,this._util.onFrame)
            //改变炮台角度
            this.nowCan.rotation=-angle;
       },

       //添加子弹
       addBullet:function(s,index,angle){
            s.ape = new Laya.Sprite();
            s.ape.loadImage("../laya/assets/comp/static/bullet/bullet_"+index+".png");
            s.ape.moveSeep = 0.2;//每个子弹移动的步数
            s.ape.pivotX = 18;//设置旋转X中心点
            s.ape.pivotY = 18;//设置旋转Y中心点
            s.ape.pos(330,890);//子弹起始位置
            s.ape._angle = angle;
            s.ape.rotation = -angle-6;//子弹旋转角度
            s._bullet.addChild(s.ape);//往子弹层添加子弹
        },
   };

   //工具方法
   Cannon.prototype._util={
       //获取角度方法
       get_angle:function(e){
           if(e.stageY>=WIN_H-100) return;
            //角度计算
            var height =  350 - e.stageX; //获取起点到终点之间的高度 
            var width =   900 - e.stageY;  //获取起点到终点之间的宽度 
            var angle = Math.atan2(height,width); //角度计算
            var _angle = angle * 180 / Math.PI; //计算con值
            return _angle;
       },
       //子弹移动定时器
       onFrame:function(){
            var s = this;
            for(key in s._bullet._childs){
                // 子弹移动位置
                s._bullet._childs[key].x+= -1*(Math.sin(s._bullet._childs[key]._angle * Math.PI / 180)*6);
                s._bullet._childs[key].y+= -1*(Math.cos(s._bullet._childs[key]._angle * Math.PI / 180)*6);
                // 子弹超出屏幕时，移除子弹
                if(s._bullet._childs[key].y<=-s._bullet._childs[key].height || s._bullet._childs[key].x<=-s._bullet._childs[key].width){
                    s._bullet._childs[key].removeSelf()//如果自己超出时，移除自己
                }
            }
       }
   }



})();