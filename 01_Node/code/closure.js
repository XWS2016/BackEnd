//simuliranje dugotrajne operacije
function longRunningOperation(callback) {
  setTimeout(callback, 3000);
}
function webRequest(request) {
  console.log('starting a long operation for 	request:', request.id);
  longRunningOperation(function () {
    console.log('ending a long operation for 	request:', request.id);
  });
}
// simuliranje zahteva
var req = { id: 1 };
webRequest(req);
// simuliranje zahteva
req.id=2;
webRequest(req);
