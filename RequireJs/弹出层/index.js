/**
 * Created by xuejinku on 2018/5/20.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog'],function ($,Dialog) {
    $('.btn').on('click',function () {
       var dialog1 = new Dialog({
            width:300,
            height:300,
            title:'登陆',
            content:'text.html'
        });
       dialog1.open();
        });
    $('body').on('click','.confirm-btn',function () {
        // dialog.close();
        var dialog2 = new Dialog({
            width:200,
            height:100,
            title:'请输入用户名',
            content:'username.html'
        });
        dialog2.open();
    });
});