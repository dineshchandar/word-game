const words = [
    'plum', 'clown', 'fly', 'sleep', 'blue', 'plane', 'cloud', 'flag', 'slide', 'black',
    'plant', 'clock', 'flat', 'sled', 'bloom', 'plug', 'class', 'flame', 'slip', 'blow',
    'plate', 'clap', 'float', 'slug', 'gl', 'play', 'clean', 'flap', 'slow', 'gloves',
    'planet', 'cloth', 'flush', 'slice', 'globe', 'pluck', 'clip', 'flower', 'slope', 'glass'
  ];
  
  let currentIndex = 0;
  const wordDisplay = document.getElementById('word-display');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  
  function displayWord() {
    const word = words[currentIndex];
    const displayWord = word.slice(0, 2); // First two letters
    const remainder = word.slice(2); // Remaining part of the word
    wordDisplay.innerHTML = `<span style="color: red">${displayWord}</span>${remainder}`;
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    displayWord();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    displayWord();
  });
  
  // Initial display
  displayWord();
  