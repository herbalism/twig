define(['twig', 'twig!index'], 
       function(twig) {
	   console.log("About to start twig", twig);
	   twig.start();
       });
