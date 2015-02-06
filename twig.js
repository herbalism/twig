define(["require", "foliage/foliage-react", "twig-base"], function(require, render, base) {

    function show() {
	var request = base.location.hash.slice(1).split('?');
	var page = request[0];

	var parameters = {};
	if (request.length > 1) {
	    request[1].split('&').forEach(function(parameter) {
		var parameterEntry = parameter.split('=');
		parameters[parameterEntry[0]] = parameterEntry[1];
	    });
	}

	require(["twig!"+page], function(twig) {
	    twig.goTo(parameters);
	})
    }

    var res = {
	load: function(resourceName, req, callback, config) {
	    req([resourceName], function(page) {
		callback({
		    goTo: function(parameters) {
			render.in('#content', page(parameters));
		    }
		});
	    });
	}
    };

    function navigate(target) {
	base.location.hash = "#"+target;
    }

    function start() {
	if(base.location.hash) {
	    show();
	} else {
	    navigate("index");
	}
    }

    window.onhashchange = show;
    start();

    return res;
});
