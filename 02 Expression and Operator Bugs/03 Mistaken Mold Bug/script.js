function getResource(url, callbacks) {
    Request(url, function(response) {
        if (typeof callbacks === "array") {
            callbacks.forEach(function(cb) { cb(response) });
        } else {
            callbacks(response);
        }
    });
}


function cb1(data) { console.log("callback1", data) }

function cb2(data) { console.log("callback2", data) }

getResource("data.json", cb1);

getResource("data.json", [cb1, cb2]);
