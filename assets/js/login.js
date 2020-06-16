$(function(){
    // 控制表单的提交
    $('.layui-form').submit(function(e){
        // 阻止跳转
        e.preventDefault()
        // 获取表单信息
        var formData = $(this).serialize()
        $.post('http://ajax.frontend.itheima.net/api/login',formData,function(data){
            if(data.status === 0){
                location.href = './index.html'
            }
        })
    })
})