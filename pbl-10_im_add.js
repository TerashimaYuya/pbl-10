window.addEventListener('load', function() {
	var kokki_num = parseInt(window.innerWidth / 200);
	console.log(kokki_num);
	var img = "<img src=\"https://raw.githubusercontent.com/TerashimaYuya/pbl-10/master/usa.jpg\" width=\"" + (100 / kokki_num) + "%\">";
	var div = document.getElementById("pbl-10_im_add");
	var text = "";
	for (var i = 0; i < kokki_num; ++i) {
		text += img;
	}
	div.innerHTML = text;
});
