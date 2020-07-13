function add_im() {
	var kokki_num = window.innerWidth / 200;
	var img = "<img src=\"https://cdn.pixabay.com/photo/2017/10/25/05/47/usa-2887014_960_720.png\" width=\"" + (100 / kokki_num) + "%\"> ";
	var div = document.getElementById("pbl-10_im_add");
	var text = "";
	for (var i = 0; i < kokki_num; ++i) {
		text += "<img src=\"https://cdn.pixabay.com/photo/2017/10/25/05/47/usa-2887014_960_720.png\" width=\"100%\"> ";
	}
	div.textContent = text;
}

window.addEventListener("load", add_im());
window.addEventListener("resize", add_im());