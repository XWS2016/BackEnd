function longRunningOperation(callback) {
  // simuliranje operacje od 3 sekunde
  // setTimeout(callback, 3000);
  setInterval(callback, 3000);
}
function userClicked() {
  console.log('starting a long operation');
  longRunningOperation(function () {
    console.log('ending a long operation');
  });
}
// simuliranje korisničke akcije
userClicked();
