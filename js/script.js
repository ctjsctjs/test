$.getJSON("../test/js/adapters.json", function(json) {

	for (var i = 0; i < json.adapters.length; i++){
	    var obj = json.adapters[i];
		console.log(obj.name);
		console.log(obj.image);
		console.log(obj.link);
		
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
