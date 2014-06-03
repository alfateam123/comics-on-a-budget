test("ComicsList", function() { 
  //test data
  var comicslist = new ComicList();

  comicslist.addComic(new Comic("Zaregoto #3", 900));
  deepEqual(
    comicslist.comics.length,
    1,
    "add a new comic"
  );

  deepEqual(
    comicslist.getAllComics(),
    comicslist.comics,
    "check #getAllComics"
  );

  comicslist.addRawComic("Date A Live #1", 1200);
  deepEqual(
    comicslist.comics.length,
    2,
    "add a comic w/o using the Comic constructor (deprecated)"
  );
  deepEqual(
    comicslist.comics[1],
    new Comic("Date A Live #1", 1200),
    "check it's equivalent to a comic created with the Comic constructor"
  );

  comicslist.addComic(new Comic("Wolf Children #2", 500));
  comicslist.addComic(new Comic("Strike the Blood #5"), 6800);

  comicslist.removeComic("Date A Live #1");
  deepEqual(comicslist.getAllComics().filter(
    function(c){c.name === "Date A Live #1"}),
    new Array(),
    "correct removal of a comic, given its name"
  );
  ok(comicslist.comics.length === 3, "really removed a comic by name");

  comicslist.removeComicByIndex(0);
  deepEqual(comicslist.getAllComics().filter(
    function(c){c.name === "Zaregoto #3"}), 
    new Array(),
    "correct removal of a comic, given its index"
  );
  deepEqual(comicslist.getAllComics()[0], new Comic("Wolf Children #2", 500),
    "check the first item is changed");

  comicslist.removeComicByIndex(-1);
  ok(comicslist.getAllComics().length === 2,
  "negative index does not delete comics"); //if an element was removed, it should change to 1

  comicslist.removeComic("20% cooler");
  deepEqual(comicslist.getAllComics().filter(
    function(c){c.name === "20% cooler"}), 
    new Array(),
    "the deletion of an non-existent comic does not break #removeComic"
  );

});