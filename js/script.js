function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
		lineArray = allText.value.split("\n");
				
		for(var i=0; i<lineArray.length; i++){
		console.log(lineArray[i]);
		}
	
            }
        }
    }
    rawFile.send(null);
}

readTextFile("README.md");

