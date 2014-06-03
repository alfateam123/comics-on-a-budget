var tests = [];

var loadTests = function(new_tests){
	if(Array.isArray(new_tests)){
		for(var t_i=0; t_i<new_tests.length; t_i++)
			loadTests(new_tests[t_i]);
	}
	else{ //assuming single test
		tests.push(new_tests);
	}
}

var failingMatches = function(testindex){
	var fails = [];
	var exp= tests[testindex].expected;
	var got = tests[testindex].got;
	for(var i=0; i<exp.length; i++){
		if(exp[i] !== got[i])
			fails.push({exp: exp[i], got: got[i]});
	}
	return fails;
}

var isTestPassed = function(test){
	var compareLists = function(alist, blist){
		for(var i=0; i<alist.length; i++){
			if(blist.indexOf(alist[i])<0)
				return false;
		}
		return true;
	}
	//var conv_options = test.options || {};
	//var converter = new Showdown.converter(conv_options);
	if(Array.isArray(test.expected)){
		var result = true;
		test.got = ComicList.whatICanBuy(test.starting_list) ;
		return compareLists(test.expected, test.got);
	}
	else{
		return false; //no tests here, can't say it's ok or not
	}
}

var showTestInfo = function (testindex){
	var testInfoDiv = document.getElementById("test_info");
	testInfoDiv.innerHTML = "should you don't see the test cases, run failingMatches("+testindex+") in the console";
	
	for(var i=0; i<tests[testindex].expected.length; i++){
		testInfoDiv.innerHTML+="<br/><pre><code>"+tests[testindex].expected[i]+"<code></pre> &#8593; expected, got &#8595; <pre><code>"+tests[testindex].got[i]+"<code></pre><hr>";
	}
}

var updateResults = function (res) {
	var resLine = "<tr><td>"+res.test_index+"</td><td>"+tests[res.test_index].description+"</td><td class='res_"+res.test_result+"'><a href='#' onclick='showTestInfo("+res.test_index+")'>"+(res.test_result?"PASS":"FAIL")+"</a></td></tr></table>"
	document.getElementById("results").innerHTML = document.getElementById("results").innerHTML.slice(0, -"</table>".length) + 
resLine;
}

var launch_tests = function(){
	var passedTests=0, totalTests = tests.length;
	var testResult;

	document.getElementById("results").innerHTML="<table border=1><tr><td align=center>#test</td><td align=center>Description</td><td align=center>Result</td>";

	for(var i=0; i<totalTests; i++){
		testResult = isTestPassed(tests[i]);
		passedTests += testResult?1:0;
		updateResults({test_index: i, test_result: testResult});
		tests[i].result = testResult;
	}

	document.getElementById("results").innerHTML=document.getElementById("results").innerHTML.slice(0, -"</table>".length)+"<tr><td><strong>Results</strong></td><td align=center>"+passedTests+"</td><td align=center>"+totalTests+"</td></table><br />";
}
