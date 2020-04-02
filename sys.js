window._config_ = {
	devStuff: true,
	historyApi: true,
	errorHndl: true
};
function 获取网址参数(参数) {
    return new URL(window.location.href).searchParams.get(参数);
}
function appendParamToUrlString(name, cnt, url = window.location.href){
	var fussyURL = new URL(url);
	if (!fussyURL.searchParams.has(name)) {
		fussyURL.searchParams.append(name, cnt);
	} else {
		fussyURL.searchParams.set(name, cnt);
	}
	return fussyURL.href;
}
window.$ = function (selector) {
    return document.querySelector(selector);
}
if(!window.bullshitClass) window.bullshitClass = new(window.bullshit)(); // allow hijacking
function _dev_initByCfg(cfg = window._config_){
	if (cfg.devStuff){
		var _devHelp = `_dev_customRng(rngFuncWrp, fussado = window.bullshitClass): define rng (used when LCG is enabled, else please inject Math.random)`;
		window._dev_stuff_help = function (){
			console.info(_devHelp);
		}
		window._dev_customRng = function (rngFuncWrp, fussado = window.bullshitClass){
			fussado.LCG = { 来个小小数: rngFuncWrp };
		}
	}
}
function wArtAppender(文章){
	for (i in 文章){
		let newOwn = document.createElement('div');
		newOwn.innerHTML = 文章[i];
		$('#文章').appendChild(newOwn);
	}
}
function _gen_wrapper(__主题){
	try {
		if (__主题) $('#主题 input').value = __主题;
		var 主题 = $('#主题 input').value;
		var 文章, 错误围绕;
		文章 = window.bullshitClass.生成(主题).split("\n");
		if(错误围绕) $('#文章').classList.add("有错误");
		wArtAppender(文章);
		var composedTitle = document.title += " - 主题：" + 主题 + " - 请勿将生成的文章用于正规用途";
		if (window._config_.historyApi) {
			var elState = { 主题: 主题 };
			history.pushState(elState, document.title, appendParamToUrlString("主题", 主题));
		}
	} catch (ex) {
		if (window._config_.errorHndl){
			错误围绕 = true;
			文章 = (ex.message + "\n\n" + (ex.stack || ex.stacktrace || "[无法获取堆栈跟踪]")).split("\n");
		}
		console.error(ex);
		try { wArtAppender(文章); } catch (e) { console.error(e); }
	}
}
if (( _主题 = 获取网址参数('主题'))) {
    window.onload = () => _gen_wrapper(_主题);
}