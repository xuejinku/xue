/**
 * Created by xuejinku on 2018/5/16.
 */
//轮播图
var count = 0;
var timer;
$('.btn-box a').on('mouseover',function () {
    change($(this).index());
    count = $(this).index();
});
run();
$('#jnImageroll').on('mouseover',function () {
    clearInterval(timer);
}).on('mouseout',function () {
    run();
});
//定时器
function run() {
    timer = setInterval(function () {
        count++;
        if(count == $('#JS_imgWrap img').length){
            count = 0;
        }
        change(count);
    },2000);
}

function change(idx) {
    $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
}


//换肤
/*
$('#skin li').on('click',function(){
    $(this).addClass('selected').siblings().removeClass();
    $('.mainNav').attr('class','skin'+$(this).index());
    setCookie('skin',$(this).index(),7);
});
var index = getCookie('skin');
$('#skin li').eq(index).trigger('click');*/
$(function(){
    var $li =$("#skin li");
    $li.click(function(){
        switchSkin( this .id );
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if (cookie_skin) {
        switchSkin( cookie_skin );
    }
});
function switchSkin(skinName){
    $("#"+skinName).addClass("selected")                //当前<li>元素选中
        .siblings().removeClass("selected");  //其他同辈<li>元素的选中去掉
    $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //设置不同皮肤
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}


//搜索框得到失去焦点
$(':input').on('focus',function(){
    $(this).addClass('focus');
    if(this.value == this.defaultValue){
        this.value = '';
    }
}).on('blur',function(){
    $(this).removeClass('focus');
    if(this.value == ''){
        this.value = this.defaultValue;
    }
});


//轮播图1
$(function(){
    $('#jnBrandTab li a').click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx = $('#jnBrandTab li a').index(this);
        showBrandList(idx);
        return false;
    }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
    var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}


//放大镜
$(function(){
    $("#jnBrandList li").each(function(index){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    });
    $("#jnBrandList").delegate(".imageMask", "hover", function(){
        $(this).toggleClass("imageOver");
    });

    /*
     $("#jnBrandList").find(".imageMask").live("hover", function(){
     $(this).toggleClass("imageOver");
     });
     */
});



/*最新动态开始*/
var $title = '';

$('#jnNoticeInfo li a').on('mouseover',function(e){
    //$title = $(this).attr('title');
    this.myTitle = $(this).attr('title');
    $('<div class="tip">'+this.myTitle+'</div>').appendTo('body').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('.tip').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
}).on('mouseout',function(){
    $('.tip').remove();
    //$(this).attr('title',$title);
    $(this).attr('title',this.myTitle);

});

/*最新动态结束*/

