define(["require", "twig-base"], function(require, base) {
    var show = function() {
	var page = base.location.hash.slice(1);
	console.log("showing twig: ", name, base.location.hash);
	require(["twig!"+page], function(twig) {
	    console.log("about to show", page);
	    twig.show();
	})
    };

    var navigate = function(target) {
	base.location.hash = "#"+target;
	show();
    }
    
    return {
	load: function(resourceName, req, callback, config) {
	    req([resourceName], function(page) {
		callback({
		    show: function(element) {
			var element = element || 'body';
			page(element, base.document);
		    }
		})
	    })
	},
	start: function() {
	    var page = base.location.hash;
	    if(page) {
		show();
	    }
	    else {
		navigate("index");
	    }
	}
    }
});
