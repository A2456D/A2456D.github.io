let rouletteNumbers = ['0', '00', '1', '2', '3', /* ... 36 numbers */];

function spinRoulette() {
  const result = rouletteNumbers[Math.floor(Math.random() * rouletteNumbers.length)];
  alert(`The ball landed on ${result}`);
}
