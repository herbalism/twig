define(["require", "twig-base"], function(require, base) {
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
	start: function(name) {
	    console.log("showing twig: ", name);
	    require(["twig!"+name], function(twig) {
		console.log("about to show", twig);
		twig.show();
	    })
	}
    }
});
