/// <reference path="../Scripts/jquery-2.1.4.js" />
$(document).ready(function () {
    $(".level1>a").click(function () {
        $(this).addClass("current") //给当前元素添加current样式
        .next().show() //下一个元素显示
        .parent().siblings().children("a").removeClass("current")
        //父元素的同辈元素的子元素<a>移除current样式
        //它们的下一个元素隐藏
        .next().hide();
        return false;
    });
});
