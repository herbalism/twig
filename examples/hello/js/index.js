define(['foliage'], function(f) {
    return function(parameters) {
	console.log("loading index", parameters);
	return f.div(
	    f.p("hello world!"),
	    f.p(f.a({'href':'#other'},"To the other page as nobody")),
	    f.p(f.a({'href':'#other?name=Alice'},"To the other page as Alice")),
	    f.p(f.a({'href':'#other?name=Alice&greeting=Good day'},"To the other page as Alice with a special greeting"))
	);
    };
});

