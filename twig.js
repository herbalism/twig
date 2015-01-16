define(["require", "twig-base", "jquery"], function(require, base, $) {

    function show() {
	var request = base.location.hash.slice(1).split('?');
	var page = request[0];
	var parameters = {};
	
	if (request.length > 1) {
	    request[1].split('&').forEach(function(parameter) {
		parameters[parameter.split('=')[0]] = parameter.split('=')[1];
	    });
	}

	require(["twig!"+page], function(twig) {
	    twig.goTo(parameters);
	})
    }

    function navigate(target) {
	base.location.hash = "#"+target;
    }

    var res = {
	load: function(resourceName, req, callback, config) {
	    req([resourceName], function(page) {
		callback({
		    goTo: function(parameters, element) {
			element = element || 'body';
			var buffer = $("<body />")
			page(parameters)(buffer);
			$(element).replaceWith(buffer);
		    }
		});
	    });
	}
    }

    function start() {
	if(base.location.hash) {
	    show();
	} else {
	    navigate("index");
	}
    }

    if($.attachedTwig !== true) {
	window.onhashchange = show;
	$.attachedTwig = true;
	start();
    }

    return res;
});
