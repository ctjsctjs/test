$.getJSON("../test/js/adapters.json", function(json) {
	for (var i = json.adapters.length-1; i > -1; i--){
	    var obj = json.adapters[i];
		var div = document.createElement('div');
		var img = document.createElement('img');
		img.src = obj.image;
		var a = document.createElement('a');
		a.href = obj.link;
		a.appendChild(img);
		a.target = '_blank';
		div.appendChild(a);
		div.innerHTML += "<div class='item-name black-font'>" + obj.name + "</div>"; 
		document.getElementById("container-apps").prepend(div);
	}		
});