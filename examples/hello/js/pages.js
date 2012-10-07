define(['twig', 'twig!hello'], 
       function(twig) {
	   console.log("About to start twig", twig);
	   twig.start('hello');
       });
