/**
 * Created by xuejinku on 2018/5/20.
 */
/*define(function () {

    var dialog = {

        open:function (obj) {
            var html = '<div class="dialog-btn" >'+
                             '<div class="dialog-box">'+
                                 '<div class="dialog-title">'+
                                     '<h2>弹出框标题</h2>'+
                                     '<span class="dialog-close">×</span>'+
                                 '</div>'+
                                 '<div class="dialog-content">'+
                                 '<span>感谢你的购买</span></div>'+
                             '</div>'+
                        '</div>';
            $('body').append(html);
            $('.dialog-box').css({
                width:obj.width,
                height:obj.height
            });
            $('.dialog-title h2').html(obj.title);
            $('.dialog-content').load(obj.content);
            $('.dialog-close').on('click',function () {
                $('.dialog-btn').remove();
            })
        },
        close:function () {
            $('.dialog-btn').remove();
        }
    };
    return dialog;
});*/

define(function () {
    function Dialog(obj) {
        var _this = this;
        this.$dialogMask = $('<div class="dialog-mask"></div>');
        this.$dialogBox = $('<div class="dialog-box"></div>').css({
            width: obj.width,
            height: obj.height
        });
        this.$dialogTitle = $('<div class="dialog-title"></div>');
        this.$dialogContent = $('<div class="dialog-content"> </div>').load(obj.content);
        this.$dialogH2 = $('<h2>我是标题</h2>').html(obj.title);
        this.$dialogClose = $('<span class="dialog-close">×</span>').on('click', function () {
            _this.$dialogMask.remove();
            //this.close
        });
    }

    Dialog.prototype.open = function () {
        this.$dialogMask.append(this.$dialogBox);
        this.$dialogBox.append(this.$dialogTitle).append(this.$dialogContent);
        this.$dialogTitle.append(this.$dialogH2).append(this.$dialogClose);
        $('body').append(this.$dialogMask);
    };
    Dialog.prototype.close = function () {
        this.$dialogMask.remove();
    };
    return Dialog;
})