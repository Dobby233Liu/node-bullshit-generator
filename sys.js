function 获取网址参数(参数) {
    return new URL(window.location.href).searchParams.get(参数)
}
window.$ = function (selector) {
    return document.querySelector(selector);
}
function _gen_wrapper(){
	var libBullshit = window.bullshit;// require();
	var 主题 = $('input').value;
	var 文章 = libBullshit(主题);
	let 排版 = '<div>' + 文章.join('</div><div>') + '</div>';
    $('#文章').innerHTML = 排版;
}
if (获取网址参数('主题')) {
    _gen_wrapper();
}