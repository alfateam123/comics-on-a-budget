test( "Calculation - High Budget", function() { 
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 1000;

  //test it!
  deepEqual(
    comiclist.comics,
    comiclist.whatICanBuy(max_price),
    "Regardless of the policy, you can buy'em all!"
  );
});

test( "Calculation - High Budget - No Items", function() {
  //test data
  var comiclist = new ComicList();
  var max_price = 1000;

  //test it!
  deepEqual(
    comiclist.comics,
    comiclist.whatICanBuy(max_price),
    "no comics... buy'em all"
  );

});

test( "Calculation - High Budget - Lower first", function() {
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 1000;
  var options = {policy: "lowerpricefirst"};

  //test it!
  deepEqual(
    comiclist.comics,
    comiclist.whatICanBuy(max_price, options)
  );
});

test( "Calculation - High Budget - Higher first", function() {
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 1000;
  var options = {policy: "higherpricefirst"};

  //test it!
  deepEqual(
    comiclist.comics,
    comiclist.whatICanBuy(max_price, options)
  );
});