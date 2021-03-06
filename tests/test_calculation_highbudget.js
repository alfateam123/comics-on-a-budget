test( "Calculation - High Budget", function() { 
  //test data
  var comiclist = new ComicList();
  comiclist.addComic(new Comic('medaka box #21', 4.40));
  comiclist.addComic(new Comic('wolf children #2', 6.50));
  comiclist.addComic(new Comic('aku no hana #4', 4.50));
  var max_price = 1000;

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price),
    [1,2,3],
    "Regardless of the policy, you can buy'em all!"
  );
});

test( "Calculation - High Budget - No Items", function() {
  //test data
  var comiclist = new ComicList();
  var max_price = 1000;

  //test it!
  deepEqual(
    comiclist.whatICanBuy(max_price),
    comiclist.comics,
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
    comiclist.whatICanBuy(max_price, options),
    [1,3,2]
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
    comiclist.whatICanBuy(max_price, options),
    [2,3,1]
  );
});