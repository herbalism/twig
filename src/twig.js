define(["require", "twig-base", "jquery-hashchange"], function(require, base, $) {


    var show = function() {
	var page = base.location.hash.slice(1);
	var authToken = page.match(/access_token=(.*)/);

	if (authToken) {
	    page = "index";
	}

	require(["twig!"+page], function(twig) {
	    twig.goTo();
	})
    };


    var navigate = function(target) {
	base.location.hash = "#"+target;
    }

    var res = {
	load: function(resourceName, req, callback, config) {
	    req([resourceName], function(page) {
		callback({
		    goTo: function(element) {
			var element = element || 'body';
			var buffer = $("<body />")
			page(buffer);
			$(element).replaceWith(buffer);
		    }
		})
	    })
	}
    }

    function start() {
	if(base.location.hash) {
	    show()
	} else {
	    navigate("index")
	};
    }

    if($.attachedTwig !== true) {
	$(base).hashchange(show);
	$.attachedTwig = true;
	start()
    }

    return res;
});
