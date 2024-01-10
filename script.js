const words = [
    'plum', 'clown', 'fly', 'sleep', 'blue', 'plane', 'cloud', 'flag', 'slide', 'black',
    'plant', 'clock', 'flat', 'sled', 'bloom', 'plug', 'class', 'flame', 'slip', 'blow',
    'plate', 'clap', 'float', 'slug', 'gl', 'play', 'clean', 'flap', 'slow', 'gloves',
    'planet', 'cloth', 'flush', 'slice', 'globe', 'pluck', 'clip', 'flower', 'slope', 'glass'
  ];
  
  let currentIndex = 0;
  let isRandom = false; // Initially set to false
  
  const wordDisplay = document.getElementById('word-display');
  const prevButton = document.getElementById('prev-btn');
  const nextButton = document.getElementById('next-btn');
  const speakButton = document.getElementById('speak-btn');
  const randomCheckbox = document.getElementById('random-checkbox');
  const synth = window.speechSynthesis;
  
  function displayWord() {
    const word = words[currentIndex];
    const displayWord = word.slice(0, 2);
    const remainder = word.slice(2);
    wordDisplay.innerHTML = `<span style="color: red">${displayWord}</span>${remainder}`;
  }
  
  function pronounceLetters() {
    const word = words[currentIndex];
    const letters = word.split('');
    letters.forEach(letter => {
      const utterance = new SpeechSynthesisUtterance(letter);
      synth.speak(utterance);
    });
  }
  
  function pronounceWord() {
    const word = words[currentIndex];
    const utterance = new SpeechSynthesisUtterance(word);
    synth.speak(utterance);
  }
  
  function updateWordOrder() {
    if (isRandom) {
      currentIndex = Math.floor(Math.random() * words.length);
    } else {
      currentIndex = (currentIndex + 1) % words.length;
    }
    displayWord();
  }
  
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    displayWord();
  });
  
  nextButton.addEventListener('click', () => {
    updateWordOrder();
  });
  
  speakButton.addEventListener('click', () => {
    pronounceLetters();
    setTimeout(pronounceWord, words[currentIndex].length * 400);
  });
  
  randomCheckbox.addEventListener('change', (event) => {
    isRandom = event.target.checked;
    if (isRandom) {
      currentIndex = Math.floor(Math.random() * words.length);
      displayWord();
    } else {
        currentIndex = 0;
      displayWord();
    }
  });

  // Function to initialize the display with the first word
function initializeDisplay() {
    displayWord();
  }

  // Call the initialization function when the app loads
window.addEventListener('load', initializeDisplay);
  