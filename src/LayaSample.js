
var WIN_W = 600;
var WIN_H = 966;   
var backLayer,gameLayer,playGameLayer; 
var RunGame;
var runGameMain;
var scoreFun;
var isStopTime = false;
    var lodaTextTip,heroRun,ziDanLayers;
    (function GameInit(){
        Laya.init(WIN_W,WIN_H,Laya.WebGL);
        Laya.Stat.show(0,0); //显示帧数
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_TOP;
        Laya.stage.scaleMode = 'showall';
        Laya.stage.screenMode = "none";
        Laya.stage.bgColor = "#000000";
        backLayer = new Laya.Sprite();
        backLayer.width = WIN_W;
        backLayer.height = WIN_H;
        backLayer.pos(0,0)
        Laya.stage.addChild(backLayer);
        loadUI();
    })()

    function loadUI(){
        var imgArray = [
           //预加载图片资源
            {url:"../bin/res/atlas/comp/static.json",type:Laya.Loader.ATLAS},
            {url:"../bin/res/atlas/comp/static/cannon.json",type:Laya.Loader.ATLAS},
            {url:"../bin/res/atlas/comp/static/bullet.json",type:Laya.Loader.ATLAS},
            {url:"../bin/res/atlas/comp/anima/bottom.json",type:Laya.Loader.ATLAS}
        ]
        Laya.loader.load(imgArray,Laya.Handler.create(this,onLoadUI),Laya.Handler.create(this,onProgress,null,false));
        lodaTextTip = new Laya.Text();
        lodaTextTip.text = "正在加载中...";
        lodaTextTip.color = "#ffffff";
        lodaTextTip.fontSize = 30;
        lodaTextTip.pos((WIN_W-lodaTextTip.width)/2,WIN_H/2);
        backLayer.addChild(lodaTextTip);
    }
    function onProgress(progress){
        lodaTextTip.text = "";
       lodaTextTip.text = "正在加载中..."+Math.floor(progress*100)+"%"

    }
    function onLoadUI(){
        backLayer.addChild(new Cannon());
        backLayer.addChild(new Fish());
    }



