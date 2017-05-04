function timedCounter() {
  let i = 0;
  setInterval(() => {
    postMessage(++i);
    if(i==1) {
      throw new Error('Invalid count')
    }
  }, 1000);
}

timedCounter();
