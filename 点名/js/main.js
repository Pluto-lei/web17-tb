 /**
 设置全局变量
 **/

//设置点名时长
var timer = 2000;
//设置颜色
var runColor="#f00";

 /**
  创造虚拟后台数据
*/
var arrs = ["陈文杰","李星","邓鑫","刘杰","谢钦","欧威志","欧丽","朱其武","颜颖超","蒋敦丞","袁恒",
    "毛宇鹏","姚磊","李良雄","陈汉龙","占琳","高俊","刘聪","刘黉钦","唐嘉骏","周佳贝","汤智超",
    "黄章俊","雷国梁","李林峰","周冬","曾令宝","李海坤","曾佳豪","王奇","颜家琪","邱逸","邓志帅",
    "易豪","毛宁","樊美君","罗杰","黄爱华","周亚兰","曾文杰","胡伟男"];
/*
创建随机位置
*/

var elemStyles=[];
//获取可视区域的宽高
var winWidth=document.body.clientWidth;
var winHeight=document.body.clientHeight;
contentWidth=parseInt(winWidth/2-135);
//获取父元素
var boxNode = document.getElementById("box");
var retName = document.getElementById("retName");
for (var i = 0; i < arrs.length; i++) {
    //创建新元素
    var divNode = document.createElement("div");
    divNode.innerHTML=arrs[i];
    divNode.className="name";
    boxNode.appendChild(divNode);
}
//随机打乱位置
 for(var i =0;i<arrs.length;i++){
     var x = parseInt(Math.random()*(winHeight-210));
     var y = parseInt(Math.random()*(winWidth-200));
     animate(boxNode.children[i],{'top':x,'left':y});
 }
//点名
var btn= document.getElementById("btn");
var fn = true;
random = null;
btn.onclick = function () {
    if(fn){
       effects();
        fn=false;
        //定时
        timeId=setInterval(move,50);
        //设置定时器
        setTimeout(function(){
            fn=true;
            if(random==2 || random == 3 || random == 4 ){
            	boxNode.children[random].style.background="#5e068c";
            	if(random%3==0){
            		random=5;
            	}else{
            		random=parseInt(Math.random()*arrs.length);
            	}
            }
            boxNode.children[random].style.background="#5e068c";
            clearInterval(timeId);
            animate(boxNode.children[random],{"left":contentWidth,'width':300,'height':170,'zIndex':2,"lineHeight":170,"fontSize":30
                ,"top":100});
            clearInterval(antime)
        },timer);
    }
}

function move(){
     //清空所有样式
        for (var j = 0; j < arrs.length; j++) {
            boxNode.children[j].style.background="";
            boxNode.children[j].style.width="";
            boxNode.children[j].style.height="";
            boxNode.children[j].style.lineHeight="";
            boxNode.children[j].style.fontSize="";
            boxNode.children[j].style.zIndex="";

        }
        //留下当前颜色
        random = parseInt(Math.random()*arrs.length);
        boxNode.children[random].style.background=runColor;
}

function effects(){
    //随机打乱位置
    antime=setInterval(function () {
        for(var i =0;i<arrs.length;i++){
            var x = parseInt(Math.random()*(winHeight-210));
            var y = parseInt(Math.random()*(winWidth-200));
            animate(boxNode.children[i],{'top':x,'left':y});
        }
    },1000)

}

