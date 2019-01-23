var web_worker;

function startWebWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(web_worker) == "undefined") {
            web_worker = new Worker("js/web_worker.js");
        }
        web_worker.onmessage = function(event) {
            console.log("here")
        };
    } else {
        
    }
}

startWebWorker();

(function updateVisualization() {
	web_worker.postMessage(['updateV1']);
	web_worker.postMessage(['updateV2']);
})();