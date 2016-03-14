// dugotrajno racunanje
function fibonacci(n) {
  if (n < 2)
    return 1;
  else
    return fibonacci(n - 2) + fibonacci(n - 1);
}
// pokrenemo tajmer
console.time('timer');
setTimeout(function() {
    console.timeEnd('timer'); // Trebalo bi da traje 1000ms, a traje duze
  }, 1000);
  // pokrenemo dugotrajno racunanje
fibonacci(44);
