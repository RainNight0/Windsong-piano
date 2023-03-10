var audioName = {
	0: "do",
	1: "re",
	2: "mi",
	3: "fa",
	4: "so",
	5: "la",
	6: "ti"
}

var clickCode = {
	1: {
		0: "q",
		1: "w",
		2: "e",
		3: "r",
		4: "t",
		5: "y",
		6: "u"
	},
	2: {
		0: "a",
		1: "s",
		2: "d",
		3: "f",
		4: "g",
		5: "h",
		6: "j"
	},
	3: {
		0: "z",
		1: "x",
		2: "c",
		3: "v",
		4: "b",
		5: "n",
		6: "m"
	}
}

var keyBoardCode = {
	65: "a",
	66: "b",
	67: "c",
	68: "d",
	69: "e",
	70: "f",
	71: "g",
	72: "h",
	74: "j",
	77: "m",
	78: "n",
	81: "q",
	82: "r",
	83: "s",
	84: "t",
	85: "u",
	86: "v",
	87: "w",
	88: "x",
	89: "y",
	90: "z"
}

let audio = {};

//放置Piano Key
$(() => {
	if (i = 1) {
		for (let o = 0; o < 7; o++) {
			$(".row-1").append(
				`<div class="pianoKeyContainer">
					<div id="key_${clickCode[i][o]}" onclick="sing(${i},${o});" class="pianoKey" style="background-image: url('images/piano_key/${audioName[o]}.png');"></div>
					<div id="circle${clickCode[i][o]}" class="pianoKeyCircle"></div>
				</div>`
			);
			audio[clickCode[i][o]] = new Audio();
			audio[clickCode[i][o]].src = `audio/${clickCode[i][o]}.ogg`;
		}
	}
});
$(() => {
	if (i = 2) {
		for (let o = 0; o < 7; o++) {
			$(".row-2").append(
				`<div class="pianoKeyContainer">
					<div id="key_${clickCode[i][o]}" onclick="sing(${i},${o});" class="pianoKey" style="background-image: url('images/piano_key/${audioName[o]}.png');"></div>
					<div id="circle${clickCode[i][o]}" class="pianoKeyCircle"></div>
				</div>`
			);
			audio[clickCode[i][o]] = new Audio();
			audio[clickCode[i][o]].src = `audio/${clickCode[i][o]}.ogg`;
		}
	}
});
$(() => {
	if (i = 3) {
		for (let o = 0; o < 7; o++) {
			$(".row-3").append(
				`<div class="pianoKeyContainer">
					<div id="key_${clickCode[i][o]}" onclick="sing(${i},${o});" class="pianoKey" style="background-image: url('images/piano_key/${audioName[o]}.png');"></div>
					<div id="circle${clickCode[i][o]}" class="pianoKeyCircle"></div>
				</div>`
			);
			audio[clickCode[i][o]] = new Audio();
			audio[clickCode[i][o]].src = `audio/${clickCode[i][o]}.ogg`;
		}
	}
});
let keyAnimateArr = new Array();
$(() => {
	for (let i in keyBoardCode) {
		keyAnimateArr[keyBoardCode[i]] = {
			bool: false
		}
	}
});
function sing(i, o) {
	playAudio(clickCode[i][o]);
}
$(document).keydown((event) => {
	if (keyBoardCode[event.keyCode] != undefined) {
		playAudio(keyBoardCode[event.keyCode]);
	}
});
//播放声音
function playAudio(key) {
	console.log(key);
	if (key != "-") {
		keyAnimate(key);
		let music = new Audio();
		music.src = audio[key].src;
		music.play();
	}
}
//琴键动画
function keyAnimate(key) {
	if (!keyAnimateArr[key]["bool"]) {
		keyAnimateArr[key]["bool"] = true;
	}
	else {
		$(`#circle${key}`).toggleClass("pianoKeyCircleActive");
		$(`#key_${key}`).toggleClass("pianoKeyDownActive");
	}
	setTimeout(() => {
		$(`#circle${key}`).toggleClass("pianoKeyCircleActive");
		$(`#key_${key}`).toggleClass("pianoKeyDownActive");
	}, 100);
}

/*
function requestFullScreen(element) {
	var de = document.querySelector(element) || document.documentElement;
	if (de.requestFullscreen) {
		document.getElementById("FullScreen").onclick = exitFullScreen;
		document.getElementById("FullScreen").id = "ExitFullScreen";
		de.requestFullscreen();
	} else if (de.mozRequestFullScreen) {
		de.mozRequestFullScreen();
	} else if (de.webkitRequestFullScreen) {
		de.webkitRequestFullScreen();
	}
}
//退出全屏
function exitFullScreen(element) {
	var de = document.querySelector(element) || document.documentElement;
	if (de.exitFullscreen) {
		de.exitFullscreen();
	} else if (de.mozCancelFullScreen) {
		de.mozCancelFullScreen();
	} else if (de.webkitCancelFullScreen) {
		de.webkitCancelFullScreen();
	}
}
*/

//全屏按钮点击事件
var $fullScreen = document.getElementById("FullScreen");
if ($fullScreen) {
	$fullScreen.addEventListener("click", function () {
		var de = document.documentElement;
		if (de.requestFullscreen) {
			de.requestFullscreen();
		}
		else if (de.msRequestFullscreen) {
			de.msRequestFullscreen();
		}
		else if (de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		}
		else if (de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
	}, false);
}
//退出全屏按钮点击事件
var $cancelFullScreen = document.getElementById("ExitFullScreen");
if ($cancelFullScreen) {
	$cancelFullScreen.addEventListener("click", function () {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
		else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
		else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		}
		else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}, false);
}
//监听window是否全屏
window.onresize = function() {
	var isFull = !!(
	document.fullscreenElement ||
	document.msFullscreenElement ||
	document.mozFullScreen ||
	document.webkitIsFullScreen
	);
	if (isFull == false) {
		$("#ExitFullScreen").css("display", "none");
		$("#FullScreen").css("display", "");
	} else {
		$("#ExitFullScreen").css("display", "");
		$("#FullScreen").css("display", "none");
	}
}


/*
var $cancelFullScreen = document.getElementsByClassName("ExitFullScreen");
if ($cancelFullScreen) {
	$cancelFullScreen.addEventListener("click", function () {
		if (document.exitFullscreen) {
			document.getElementsByClassName("ExitFullScreen").class = "FullScreen";
			document.exitFullscreen();
		}
		else if (document.msExitFullscreen) {
			document.getElementsByClassName("ExitFullScreen").class = "FullScreen";
			document.msExitFullscreen();
		}
		else if (document.mozCancelFullScreen) {
			document.getElementsByClassName("ExitFullScreen").class = "FullScreen";
			document.mozCancelFullScreen();
		}
		else if (document.webkitCancelFullScreen) {
			document.getElementsByClassName("ExitFullScreen").class = "FullScreen";
			document.webkitCancelFullScreen();
		}
	}, false);
}
*/

//声明 按钮点击事件
/*var $openStatementWindow = document.getElementById("statement_botton");
if ($openStatementWindow) {
	$openStatementWindow.addEventListener("click", function () {
		document.getElementById("statement_window_box").style.display = "block";
	});
}
var $openStatementWindow = document.getElementById("exit_statement_window");
if ($openStatementWindow) {
	$openStatementWindow.addEventListener("click", function () {
		document.getElementById("statement_window_box").style.display = "none";
	});
}*/

var eID_about_button = document.getElementById("about_botton");
var eID_exit_about_window = document.getElementById("exit_about_window");
if (eID_about_button) {
	eID_about_button.addEventListener("click", open = () => {
		document.getElementById("about_window_box").style.display = "block";
	})
}
if (eID_exit_about_window) {
	eID_exit_about_window.addEventListener("click", open = () => {
		document.getElementById("about_window_box").style.display = "none";
	})
}
