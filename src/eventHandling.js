/*
Every event that can be raised from the view (index.html, CoaB is a single page app)
will be handled in this file.
*/

var table = new Table();

//############################ COMIC LIST #######################

var onRemoveItemClick = function(rowIndex){
  console.log("wanna remove the item "+rowIndex);
  table.removeRow(rowIndex);
}

var onAffordClick = function(){
  console.log("clicked onAffordClick");
  table.generateTable(true); //show the highlighted ones
}

var onSelectedComicClick = function(rowIndex){
  table.comiclist.toggleComicSelectionByIndex(rowIndex-1);
  document.getElementById("selectedprice").style = "";
  document.getElementById("selectedprice").value = table.comiclist.selectedPrice();
}

//######################## END COMIC LIST #######################
//############################## NEW COMIC ######################

var onInsertComicClick = function(){
  console.log("inserting a new comic!");
  var newComicName = document.getElementById("comicname").value;
  var newComicPrice = document.getElementById("comicprice").value;
  var newComic = new Comic(newComicName, Number(newComicPrice));
  console.log("this is the new comic!", newComic);
  table.addRow(newComic);
  //after the insertion of the new comic, we want to show the updated table
  showTabContent('list');
}

var onInsertResetClick = function(){
  document.getElementById("comicname").value="";
  document.getElementById("comicprice").value=4.40;
}

var onInsertBackClick = function(){
  showTabContent('list');
}

// ################### END NEW COMIC ###################################
// ################### SETTINGS ########################################

var onPolicySelected = function(policyindex){
  return null;

  console.log("[onPolicySelected] policyindex: ", policyindex);
  var policyoptions = document.getElementById("policyselector").options;
  //console.log(policyoptions);
  for(var i=0; i<policyoptions.length; i++)
    //console.log(i, policyoptions[i], "policyexplanation_"+policyoptions[i].value);
    console.log(document.getElementById("policyexplanation_"+policyoptions[i].value));
    document.getElementById("policyexplanation_"+policyoptions[i].value).className = (i === policyindex)? 'explanation-shown' : "explanation-hidden";
    console.log(document.getElementById("policyexplanation_"+policyoptions[i].value).className);
}

// ################### END SETTINGS #####################################

//functions needed to show different the comic table or the new comic insertion form
var tab_suffixes = ['list', 'newcomic', 'about', 'settings'];
var showTabContent = function(tabname){
  for(var i=0; i<tab_suffixes.length; i++)
  {
    var suff = tab_suffixes[i];
    document.getElementById("tabcontent_"+suff).className="tab-pane" + (suff===tabname?" active":"");
    document.getElementById("navtab_"+suff).className= suff===tabname?"active":"";
  }
}