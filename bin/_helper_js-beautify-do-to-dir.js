/** @license Anti-996 License 1.0 **/
var replace = true, direntHandle = -255, dirA = "lib/";
var beautify = require('js-beautify').js,
    fs = require('fs');
function getFnames(dir = dirA){
	var myDir = fs.opendirSync(dir);
	var iHadLunch = {};
	var sliy = 0;
	for (const dirent of dir) {
		if (dirent == null) break;
		iHadLunch[sliy] = dirent.name;
		sliy ++;
	}
	dir.closeSync();
	return iHadLunch;
}
var beaut_short = (data) => beautify(data, {
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "-1",
  "preserve_newlines": false,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "keep",
  "brace_style": "none",
  "space_before_conditional": false,
  "unescape_strings": true,
  "jslint_happy": true,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": true,
  "indent_empty_lines": false
}));
var mainDirectorys = getFnames();
var handlerPerDirectory = function(fnames){
	for(i_ in fnames){
		var i = dirA+"/"+fnames[i_];
		if (fs.existsSync(i)) {
			var stat = fs.statSync(i);
			if (stat.isDirectory()) {
				handlerPerDirectory(getFnames(i));
			} else if (stat.isFile()) {
				var _thisDone = false;
				fs.readFile(i, (err, data) => {
					if (err) throw err;
					fs.writeFileSync(i, beaut_short(data), { mode: '0' + (stat.mode & parseInt('777', 8)).toString(8) });
					console.log("done for: ",i);
					_thisDone = true;
				});
				while(!_thisDone){}
			} else {
				console.error("invaild file:", stat);
				throw new Error("unwanted file. see console.");
			}
		} else {
			throw new Error("file not found: "+i);
		}
	}
}
handlerPerDirectory(mainDirectorys);