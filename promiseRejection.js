    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
      setTimeout(()=>{
    					reject(new Error("REJECTED!"));
    					}, 300);
    });

    function onReject(error) {
      // Your solution here
      	console.log(error.message);
    }

    function onFulfill () {
      // Your solution here
      	console.log('Passed');
    }

    // Your solution here
	promise.then(onFulfill,onReject);