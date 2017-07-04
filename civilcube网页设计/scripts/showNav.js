window.onload=function(){
    var hide_category=document.getElementById("categr");
    hide_category.setAttribute("class","hide")
}

function state(lal){
    var ul=document.getElementById("container-nav");
    var li=ul.getElementsByTagName("li");
    var img_all=document.getElementById("img-all");
    //IE8以上以及GoogleChrome、opera等浏览器下使用childNodes会把回车符、空格符当作text节点不会过滤掉；
    //所以这里的img_all.childNodes的长度为7个，如果把元素节点之间的空格以及换行符全部删除长度会变成3个；
    if(img_all.childNodes.length==7){
        var div=new Array();
        div=[img_all.childNodes[1],img_all.childNodes[3],img_all.childNodes[5]];
    }else{
        var div=new Array();
        div=img_all.childNodes;
    }
    //li的长度为4，div的长度为3；
    for(var i=0;i<li.length;i++){
        li[i].childNodes[0].setAttribute("class","n-style");
        if(li[0]==lal.parentNode){
            for(var j=0;j<div.length;j++){
                div[j].className="";
            }
        }else{
            for(var j=0;j<div.length;j++){
                div[j].className="hide";
                if(li[j+1]==lal.parentNode){
                    div[j].className="";
                }
            }
        }
    }
    lal.setAttribute("class","nav-style");
    // alert(li.length);
}

function jumpDetail(TT){
    var hide_ctn=document.getElementById("container");
    var hide_category=document.getElementById("categr");
    hide_ctn.setAttribute("class","hide");
    hide_category.setAttribute("class","");
    var d1=document.getElementById("d1");
    var d2=document.getElementById("d2");
    var d3=document.getElementById("d3");
    var d4=document.getElementById("d4");
    var d5=document.getElementById("d5");
    var d6=document.getElementById("d6");
    var d7=document.getElementById("d7");
    var d8=document.getElementById("d8");
    var d9=document.getElementById("d9");
    var T_T=TT.parentNode;
    
    var intro=document.getElementById("intro");
    var intro_p=intro.getElementsByTagName("p");
    var cost=document.getElementById("cost");
    var cost_p=cost.getElementsByTagName("p");
    var review=document.getElementById("review");
    var review_p=review.getElementsByTagName("p");

    var span1=document.getElementById("span1");
    var which_img=document.getElementById("images");
    var bigImg=document.getElementById("bigImg");

    if(d1==T_T){
        var text1=document.createTextNode("01");
        which_img.setAttribute("src","images2/design-1.jpg");
        bigImg.setAttribute("src","images2/design-1.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===0){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d2==T_T){
        var text1=document.createTextNode("02");
        which_img.setAttribute("src","images2/design-2.jpg");
        bigImg.setAttribute("src","images2/design-2.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===1){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d3==T_T){
        var text1=document.createTextNode("03");
        which_img.setAttribute("src","images2/design-3.jpg");
        bigImg.setAttribute("src","images2/design-3.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===2){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d4==T_T){
        var text1=document.createTextNode("04");
        which_img.setAttribute("src","images2/design-4.jpg");
        bigImg.setAttribute("src","images2/design-4.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===3){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d5==T_T){
        var text1=document.createTextNode("05");
        which_img.setAttribute("src","images2/design-5.jpg");
        bigImg.setAttribute("src","images2/design-5.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===4){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d6==T_T){
        var text1=document.createTextNode("06");
        which_img.setAttribute("src","images2/design-6.jpg");
        bigImg.setAttribute("src","images2/design-6.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===5){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d7==T_T){
        var text1=document.createTextNode("07");
        which_img.setAttribute("src","images2/design-7.jpg");
        bigImg.setAttribute("src","images2/design-7.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===6){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d8==T_T){
        var text1=document.createTextNode("08");
        which_img.setAttribute("src","images2/design-8.jpg");
        bigImg.setAttribute("src","images2/design-8.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===7){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }else if(d9==T_T){
        var text1=document.createTextNode("09");
        which_img.setAttribute("src","images2/design-9.jpg");
        bigImg.setAttribute("src","images2/design-9.jpg");
        for(var k=0;k<intro_p.length;k++){
            if(k===8){
                intro_p[k].setAttribute("class","");
                cost_p[k].setAttribute("class","");
                review_p[k].setAttribute("class","");
            }else{
                intro_p[k].setAttribute("class","hide");
                cost_p[k].setAttribute("class","hide");
                review_p[k].setAttribute("class","hide");
            }
        }
    }
    span1.appendChild(text1);
}

window.onload=function(){
    var box = document.getElementById("box");
    var smallBox = document.getElementById("smallBox");
    var bigBox = document.getElementById("bigBox");
    var bigImg = document.getElementById("bigImg");
    var mask = document.getElementById("mask");
    //1.鼠标经过小盒子 显示遮罩和大盒子 鼠标离开后隐藏
    smallBox.onmouseover = function() {
        mask.style.display = "block";
        bigBox.style.display = "block";
    };
    smallBox.onmouseout = function() {
        mask.style.display = "none";
        bigBox.style.display = "none";
    };
    smallBox.onmousemove = function(event) {
        var event = event || window.event;
        //event.clientX/Y表示鼠标相对于浏览器窗口可视区域X，Y(窗口坐标)，可视区域不包括工具栏和滚动条。
        //event.pageX/Y类似于event.clientX/Y，但它们使用的是文档坐标而非窗口坐标，
        //event.pageX/Y这两个属性不是标准属性，但得到了广泛的支持。IE事件中没有这2个属性。
        //scrollLeft/Top:设置或获取位于对象左边界和窗口中目前可见内容的最左端/最顶端之间的距离。
        //offsetLef/Top:获取指定对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧/顶端位置。
        var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
        var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
        var targetX = pageX - box.offsetLeft;
        var targetY = pageY - box.offsetTop;
        var maskX = targetX - mask.offsetWidth / 2;
        var maskY = targetY - mask.offsetHeight / 2;
        //if条件语句是为了限定mask的移动范围超过box的范围
        if (maskX < 0) {maskX = 0;}
        if (maskX > smallBox.offsetWidth - mask.offsetWidth) {
            maskX = smallBox.offsetWidth - mask.offsetWidth;
        }
        if (maskY < 0) {maskY = 0;}
        if (maskY > smallBox.offsetHeight - mask.offsetHeight) {
            maskY = smallBox.offsetHeight - mask.offsetHeight;
        }
        mask.style.left = maskX + "px";
        mask.style.top = maskY + "px";
        var bigToMove = bigImg.offsetWidth - bigBox.offsetWidth;
        var maskToMove = smallBox.offsetWidth - mask.offsetWidth;
        var rate = bigToMove / maskToMove;
        bigImg.style.left = -rate * maskX + "px";
        bigImg.style.top = -rate * maskY + "px";
        //以下为坐标测试用
        //var detection=document.getElementById("detection");
        //detection.setAttribute("value",pageX+"||"+targetX+"||"+pageY+"||"+targetY);
    };
}