async function headsOrTails() {
    // Wait one second
    await new Promise(r => setTimeout(r, 1000));
    // Toss a coin
    const isHeads = Boolean(Math.round(Math.random(100)));
    console.log(Math.random());
    console.log(Math.round(Math.random()));
    console.log('kết quả:',isHeads);
    if (isHeads) return 'Heads';
    throw Error('Tails');
  }
  
  async function tossTheCoin() {
    try {
      await headsOrTails();
      console.log('tossThecoin');
      return 'bb'
    }
    catch (e) {
        console.log(e);
      return 'caught';
    }
  }
  
  const getResult = async () => {
    const result = await tossTheCoin();
    console.log('result', result)
  }
  
  getResult()