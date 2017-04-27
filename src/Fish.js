/**
* name 
*/

(function () {
    function Fish(){
        Fish.__super.call(this);
        this.init();
    }
    
    //链接到内部引擎
    Laya.class(Fish, "Fish", laya.display.Sprite);


    Fish.prototype.init=function(){
        this.fishsLayer=new Laya.Sprite();
        this.addChild(this.fishsLayer);
        this.addTime = 0;
        //增加鱼方法
        var name = Math.round(Math.random()*7)
        // Laya.timer.frameLoop(60,this,this.addFish(name));
        this.addFish(name);
        //循环计时器
        Laya.timer.frameLoop(1,this,this.onRun);
    }

    Fish.prototype.addFish = function(index){
        var self = this;
        //实例动画模板
        this.Fishs = new Laya.Animation();
        index=index-0+1;
        // 根据index来判断要放入那一条鱼
        this.Fishs.loadAtlas( "../bin/res/atlas/comp/anima/fish"+index+".json");
        this.Fishs.name = "fish"+index;
        
        this.Fishs.play();//鱼动画播放
        this.Fishs.autoSize = true;//自动获取鱼的大小
        this.Fishs.interval = 160;//鱼的动画播放间隔
        this.Fishs.pos(-60,600) //鱼的初始位置
        this.fishsLayer.addChild(this.Fishs); //把鱼添加到舞台
    }

    Fish.prototype.onRun = function(){
        var s = this;
        //  间隔100时执行this.addFish(name) 增加一条鱼
        this.addTime++;
        if(this.addTime>=100){
            this.addTime=0;
            name = Math.round(Math.random()*7)
            this.addFish(name)
        }
        for(key in s.fishsLayer._childs){ //找到所有的鱼
            if(s.fishsLayer._childs[key].index>=3){ 
                s.fishsLayer._childs[key].index=0;
            }
            //鱼的移动轨迹
            s.fishsLayer._childs[key].x+= 0.5*2;
            s.fishsLayer._childs[key].y+= -0.2;
            //判断鱼是否超出屏幕，超出则移除
            if(s.fishsLayer._childs[key].y<=-s.fishsLayer._childs[key].height || s.fishsLayer._childs[key].x<=-s.fishsLayer._childs[key].width){
                s.fishsLayer._childs[key].removeSelf()
               
            }
        }
    }
})();