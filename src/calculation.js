/*
The calculation functions are in this file.

TODO: start writing tests

*/

var Comic = function(comic_name, comic_price, selected){
    //return {name: comic_name, price: comic_price};
    this.name = comic_name;
    this.price = comic_price;
    this.selected = selected || false;
};

var ComicList =function(comics){
    this.comics = comics || [];
};

ComicList.prototype.addRawComic = function(name, price) {
    this.comics.push(Comic(name, price));
};

ComicList.prototype.addComic = function(newcomic){
    this.comics.push(newcomic);
};

ComicList.prototype.removeComic = function(name){
    this.comics = this.comics.filter(function(comic){return comic.name !== name});
};

ComicList.prototype.removeComicByIndex = function(indexToRemove){
    this.comics = this.comics.filter(function(comic, index){return indexToRemove !== index});
};

ComicList.prototype.getAllComics = function(){
    return this.comics;
};

ComicList.prototype.whatICanBuy = function(maxPrice){
    //RETURNS: a list of indexes [0, comics.length)        
    return [];
}

