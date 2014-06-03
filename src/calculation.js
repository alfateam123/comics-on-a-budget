/*
The calculation functions are in this file.

TODO: start writing tests

*/

var Comic = function(comic_name, comic_price){
    return {name: comic_name, price: comic_price};
}

var ComicList = {

    comics: [],

    addRawComic: function(name, price){
        this.comics.push(Comic(name, price));
    },

    addComic: function(newcomic){
        this.comics.push(newcomic);
    },

    removeComic: function(name){
        this.comics = this.comics.filter(function(comic){return comic.name !== name});
    },

    removeComicByIndex: function(indexToRemove){
        this.comics = this.comics.filter(function(comic, index){return indexToRemove !== index});
    },

    getAllComics: function(){
        return this.comics;
    },

    whatICanBuy: function(maxPrice){
        //RETURNS: a list of indexes [0, comics.length)
        
        return [];
    }
}

