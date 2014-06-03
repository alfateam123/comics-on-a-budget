/*
The add/remove/highlight of rows in the items table
will be handled in this js module.
*/

var Table = function(){
	this.comiclist = new ComicList();
}

Table.prototype.addRow = function(comicData){
	this.comiclist.addComic(comicData);
	this.generateTable(false);
}

Table.prototype.removeRow = function(rowNumber){
	this.comiclist.removeComic(rowNumber);
	this.generateTable(false);
}

Table.prototype.highlightRow = function(rowNumber){
	document.getElementById("comic"+rowNumber).className = 'comic-chosen';
}

Table.prototype.resetTable = function(){
	this.generateTable(false);
}

Table.prototype.generateRow = function(index, comicData){
	var row = document.createElement("tr");
	row.id = 'comic'+index;
	row.className = 'comic-normal';
	for(key in comicData){
		var td = document.createElement("td");
		td.innerHTML = comicData[key];
		td.id = key+index;
		row.appendChild(td);
	}
	return row;
}

Table.prototype.generateTable = function(highlight_chosen){
	//cleaning the table
	document.getElementById("comiclist").innerHTML = "";
	document.getElementById("comiclist").className = "comiclist";
	document.getElementById("inputform").className = "inputform-hidden";

    //calculate
	var comics=this.comiclist.getAllComics(), indexesToHighlight=[];
	if(highlight_chosen){
		indexesToHighlight = this.comiclist.whatCanIBuy(Number(document.getElementById('maxprice').value));	
	}

	var table = document.createElement("table");

	for (var i = 0; i < comics.length; i++) {
		table.appendChild(this.generateRow(i, comics[i]));
		if(indexesToHighlight.indexOf(i)!=-1)
			this.highlightRow(i);
	}

	document.getElementById("comiclist").appendChild(table);
}
