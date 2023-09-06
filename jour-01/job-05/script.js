function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function myPrimeList(num) {
    for (let i = 2; i <= num; i++) {
      if (isPrime(i)) {
        console.log(i + " est premier");
      }
    }
  }
  
  myPrimeList(200);
  