import {
  realDictionary,
  keyboardLetters,
  keyboardLetters2,
  keyboardLetters3,
  Gifs,
} from "./dictionary.js";

// game data
const state = {
  secret: "salts",
  grid: Array(6)
    .fill()
    .map(() => Array(5).fill("")),
  currentRow: 0,
  currentCol: 0,
};

console.log(state.secret);

const drawBox = (container, row, column, letter = "") => {
  const box = document.createElement("div");
  box.className = "box";
  box.id = `box${row}${column}`;
  box.textContent = letter;

  container.appendChild(box);
  return box;
};

const drawGrid = (container) => {
  const grid = document.createElement("div");
  grid.className = "grid";

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      drawBox(grid, i, j);
    }
  }

  container.appendChild(grid);
};

function isLetter(key) {
  return key.length === 1 && key.match(/[a-z]/i);
}

const game = document.getElementById("container");
drawGrid(game);

const initKeyboard = () => {
  const board = document.getElementById("keyboard-container");

  const board1 = document.createElement("div");
  const board2 = document.createElement("div");
  const board3 = document.createElement("div");

  keyboardLetters.forEach((item) => {
    let key = document.createElement("button");
    key.className = "keyboard-button";
    key.textContent = item;
    key.addEventListener("click", () => {
      addLetter(item);
    });
    board1.appendChild(key);
  });

  board1.className = "keyboard";
  board.appendChild(board1);

  keyboardLetters3.forEach((item) => {
    let key = document.createElement("button");
    key.className = "keyboard-button";
    key.textContent = item;
    key.addEventListener("click", () => {
      addLetter(item);
    });
    board3.appendChild(key);
  });

  board3.className = "keyboard";
  board.appendChild(board3);

  keyboardLetters2.forEach((item) => {
    let key = document.createElement("button");
    key.className = "keyboard-button";
    key.textContent = item;
    if (isLetter(key.textContent)) {
      key.addEventListener("click", () => {
        addLetter(item);
      });
    } else if (key.textContent === "\u{23CE}") {
      key.addEventListener("click", () => {
        handleEnter();
        addRandomGifOnEnter();
        updateDisplay();
      });
    } else {
      key.addEventListener("click", () => {
        removeLetter();
      });
    }
    board2.appendChild(key);
  });

  board2.className = "keyboard";
  board.appendChild(board2);
};
const updateDisplay = () => {
  for (let i = 0; i < state.grid.length; i++)
    for (let j = 0; j < state.grid[i].length; j++) {
      const box = document.getElementById(`box${i}${j}`);
      box.textContent = state.grid[i][j];
    }
};

const addLetter = (keyPressed) => {
  if (state.currentCol == 5) return;
  state.grid[state.currentRow][state.currentCol] = keyPressed;
  state.currentCol++;
  updateDisplay();
};

const removeLetter = () => {
  if (state.currentCol == 0) return;
  state.grid[state.currentRow][state.currentCol - 1] = "";
  state.currentCol--;
  updateDisplay();
};

const checkWord = (word) => {
  // let word = state.grid[state.currentRow].join("").toLowerCase();
  return realDictionary.includes(word.toLowerCase());
};

const currentWord = () => {
  return state.grid[state.currentRow]
    .reduce((prev, curr) => prev + curr)
    .toLowerCase();
};

const occurences = (word, letter) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
};

const occurencesPosition = (word, letter, index) => {
  let count = 0;
  for (let i = 0; i <= index; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return count;
};

const revealWord = (guess) => {
  const row = state.currentRow;

  for (let i = 0; i < 5; i++) {
    const box = document.getElementById(`box${row}${i}`);
    const letter = box.textContent;
    const secretOccurances = occurences(state.secret, letter);
    const guessOccurances = occurences(guess, letter);
    const position = occurencesPosition(guess, letter, i);

    setTimeout(() => {
      if (guessOccurances > secretOccurances && position > secretOccurances) {
        box.classList.add("empty");
        console.log(secretOccurances, guessOccurances, position);
      } else {
        if (letter.toLowerCase() === state.secret[i]) {
          box.classList.add("correct");
        } else if (state.secret.includes(letter.toLowerCase())) {
          box.classList.add("wrong");
        } else {
          box.classList.add("empty");
        }
      }
    }, ((i + 1) * 500) / 2);

    box.classList.add("animated");
    box.style.animationDelay = `${(i * 500) / 2}ms`;
  }

  const isWinner = state.secret === guess;
  const isGameOver = state.currentRow === 5;

  setTimeout(() => {
    if (isWinner) {
      alert("Congratulations!");
      window.location.href = "phoneNumber.html";
    } else if (isGameOver) {
      alert(`Better luck next time! The word was ${state.secret}.`);
      window.location.href = "phoneNumber.html";
    }
  }, 3 * 500);
};

const handleEnter = () => {
  if (state.currentCol === 5) {
    const word = currentWord();
    console.log(word);
    if (checkWord(word)) {
      revealWord(word);
      state.currentRow++;
      6;
      state.currentCol = 0;
    } else {
      alert("Not a valid word.");
    }
  } else {
    alert("Enter 5 Characters.");
  }
};

const addRandomGifOnEnter = () => {
  const randomIndex = Math.floor(Math.random() * Gifs.length);
  const randomGifUrl = Gifs[randomIndex];

  const newImg = document.getElementById("imgCont");
  var gif = document.createElement("img");
  gif.classList.add("gif");
  gif.src = randomGifUrl;
  newImg.innerHTML = "";
  newImg.appendChild(gif);
  // newImg.style.height = "200px";
  // newImg.style.width = "200px";
};

initKeyboard();
