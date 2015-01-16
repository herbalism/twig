define(['foliage'], function(f) {
    return function(parameters) {
	console.log("loading other", parameters);
	var name = (parameters.name) ? parameters.name : "unknown";
	var greeting = (parameters.greeting) ? parameters.greeting : "Hello";
	return f.div(
	    f.p(greeting + " " + name + ", this is the other page!"),
	    f.a({'href':'#index'},"To the index page"));
    };
});
