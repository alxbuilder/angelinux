var local = location.hostname;
var target = ' target="_blank"';
var anchors = document.getElementsByTagName('a');

for (i=0; i<anchors.length; i++) {
	if (anchors[i].hostname != local) {
		anchors[i].target = "_blank";
	}
}