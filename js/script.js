function filterFunc() {
    // Declare variables
    var input, filter, a, obj;
    input = document.getElementById('search-form');
    filter = input.value.toUpperCase();
    obj = document.getElementsByClassName('filter');

	for (i=0; i<obj.length; i++){
		if (obj[i].lastChild.innerHTML.toUpperCase().indexOf(filter)>-1){
			obj[i].style.display = "";
		} else {
			obj[i].style.display = "none";
		}
	}
}


$.getJSON("../test/js/adapters.json", function(json) {

	var container = document.getElementById("container-apps");	
			for (var i = json.adapters.length-1; i >-1; i--){
				var obj = json.adapters[i];
				var div = document.createElement('div');
				div.className = 'filter';
				var img = document.createElement('img');
				img.src = obj.image;
				var a = document.createElement('a');
				a.href = obj.link;
				a.appendChild(img);
				a.target = '_blank';
				div.appendChild(a);
				div.innerHTML += "<div class='item-name black-font'>" + obj.name + "</div>"; 
				container.prepend(div);
		}

});
