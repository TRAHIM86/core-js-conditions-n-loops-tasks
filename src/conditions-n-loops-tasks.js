/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a !== 0 && b !== 0 && c !== 0 && a + b > c && a + c > b && c + b > a) {
    if (a === b || a === c || b === c) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const roman = [
    '0',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX',
    'X',
    'XI',
    'XII',
    'XIII',
    'XIV',
    'XV',
    'XVI',
    'XVII',
    'XVIII',
    'XIX',
    'XX',
    'XXI',
    'XXII',
    'XXIII',
    'XXIV',
    'XXV',
    'XXVI',
    'XXVII',
    'XXVIII',
    'XXIX',
    'XXX',
    'XXXI',
    'XXXII',
    'XXXIII',
    'XXXIV',
    'XXXV',
    'XXXVI',
    'XXXVII',
    'XXXVIII',
    'XXXIX',
  ];
  return roman[num];
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        res += 'zero';
        break;
      case '1':
        res += 'one';
        break;
      case '2':
        res = `${res}two`;
        break;
      case '3':
        res += 'three';
        break;
      case '4':
        res += 'four';
        break;
      case '5':
        res = `${res}five`;
        break;
      case '6':
        res = `${res}six`;
        break;
      case '7':
        res = `${res}seven`;
        break;
      case '8':
        res += 'eight';
        break;
      case '9':
        res += 'nine';
        break;
      case '-':
        res = `${res}minus`;
        break;
      case ',':
      case '.':
        res = `${res}point`;
        break;
      default:
        break;
    }
    if (i + 1 < numberStr.length) {
      res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;
  const medium = Math.floor((str.length - 1) / 2);
  while (start < medium) {
    if (str[start] !== str[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}
/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = `${num}`;
  const digitStr = `${digit}`;
  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === digitStr) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumPrev = 0;

  for (let i = 1; i < arr.length; i += 1) {
    for (let a = i - 1; a < i; a += 1) {
      sumPrev += arr[a];
    }
    let sumNext = 0;
    for (let z = i + 1; z < arr.length; z += 1) {
      sumNext += arr[z];
    }
    if (sumPrev === sumNext) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  for (let i = 0; i < size; i += 1) {
    arr[i] = [];
    for (let j = 0; j < size; j += 1) {
      arr[i][j] = 0;
    }
  }

  const sqr = size * size;
  let num = 1;
  let minX = 0;
  let maxX = size - 1;
  let maxY = size - 1;
  let minY = 0;

  function rigth() {
    for (let i = minY; i <= maxY; i += 1) {
      arr[minX][i] = num;
      num += 1;
    }
    minX += 1;
  }

  function down() {
    for (let i = minX; i <= maxX; i += 1) {
      arr[i][maxY] = num;
      num += 1;
    }
    maxY -= 1;
  }

  function left() {
    for (let i = maxY; i >= minY; i -= 1) {
      arr[maxX][i] = num;
      num += 1;
    }
    maxX -= 1;
  }

  function up() {
    for (let i = maxX; i >= minX; i -= 1) {
      arr[i][minY] = num;
      num += 1;
    }
    minY += 1;
  }

  for (let i = num; num <= sqr; i += 1) {
    rigth();
    down();
    left();
    up();
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const m = [];
  for (let i = 0; i < matrix.length; i += 1) {
    m[i] = [];
    for (let j = 0; j < matrix.length; j += 1) {
      m[i][j] = 0;
    }
  }

  for (let i = 0; i <= m.length - 1; i += 1) {
    let max = matrix.length - 1;
    for (let j = 0; j <= m.length - 1; j += 1) {
      m[i][j] = matrix[max][i];
      max -= 1;
    }
  }

  const newMatrix = matrix;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      newMatrix[i][j] = m[i][j];
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;
  for (let i = 0; i < sortArr.length; i += 1) {
    for (let j = sortArr.length - 1; j > 0; j -= 1) {
      if (sortArr[j] < sortArr[j - 1]) {
        const x = sortArr[j];
        sortArr[j] = sortArr[j - 1];
        sortArr[j - 1] = x;
      }
    }
  }
  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let strCopy = str;
  let count = 0;
  while (count < iterations) {
    let odd = '';
    let even = '';
    for (let i = 0; i < str.length; i += 1) {
      if (i % 2 === 0) {
        odd += strCopy[i];
      } else {
        even += strCopy[i];
      }
    }
    strCopy = odd + even;
    count += 1;

    if (str === strCopy) {
      const discr = Math.floor(iterations / count);
      count *= discr;
    }
  }
  return strCopy;
}

// Перемешать массив нужное количество раз (получить четные и нечетные элементы и объединить)
// чтобы сократить время выполнения, если при перемешивании массив приходит в итоге к исходному,
// то с увеличить count в нужное количество раз (чтобы не крутить по кругу)

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arr = Array.from(`${number}`);
  let index = 0;
  let cut;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  if (index !== 0) {
    cut = arr.splice(index + 1);
  }
  cut = cut.sort();

  for (let i = 0; i < cut.length; i += 1) {
    if (arr[arr.length - 1] < cut[i]) {
      const temp = cut[i];
      cut[i] = arr[arr.length - 1];
      arr[arr.length - 1] = temp;
      break;
    }
  }
  arr.push(cut);
  const res = arr.flat();
  return Number(res.join(''));
}
// Получить из числа массив. Проход по массиву, как только левая цифра < своего правого соседа
// получить индекс. Разбить массив по индексу на две части. Для правой сорт. Последнюю левую
// цифру меняем на правую, которая больше левой. Правый массив сорт. Объединить массивы, преобразовать в число.

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
