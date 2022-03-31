// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

const arrayNumbersOne: number[] = [1, 2, 3, 4, 5, 6];

function reversed(arrayOne: number[]) {
  return arrayOne.reverse();
}

console.log(reversed(arrayNumbersOne));

// 2) найти максимальное значение числа в массиве ([3,67,15...])

const arrayNumbersTwo: number[] = [3, 57, 15, 14, 45];

function maxElement(arrayTwo: number[]) {
  return Math.max.apply(null, arrayTwo);
}

console.log(maxElement(arrayNumbersTwo));

// // 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M

function numFibonacci(numbers: number) {
  const fibonacciNumbers: number[] = [0, 1];
  for (let i = 1; i < numbers; i += 1) fibonacciNumbers.push(fibonacciNumbers[i] + fibonacciNumbers[i - 1]);
  return fibonacciNumbers;
}

console.log(numFibonacci(11));

//  4) даны 2 4-хзначных числа с неповторяющимися цифрами,
// надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function countNumber(firstNumber: string, secondNumber: string) {
  let qual = 0;
  let count = 0;
  for (let i = 0; i < firstNumber.length; i += 1) {
    if (firstNumber[i] === secondNumber[i]) {
      count += 1;
    }
    for (let j = 0; j < secondNumber.length; j += 1) {
      if (firstNumber[i] === secondNumber[j]) {
        qual += 1;
      }
    }
  }
  console.log(qual, count);
}

countNumber('3487', '3794');

// 5) сортировка массива по возрастанию/убыванию

const arrayNumbersFour: number[] = [24, 45, 33, 12, 5];

function ascending(arrayFour: number[]) {
  return arrayFour.sort((a, b) => a - b);
}

function descending(arrayFive: number[]) {
  return arrayFive.sort((a, b) => b - a);
}

console.log(ascending(arrayNumbersFour));
console.log(descending(arrayNumbersFour));

// 6) удалить из массива все повторяющиеся элементы

const team: string[] = ['Chelsea', 'Milan', 'Chelsea', 'Inter', 'Barselona', 'Barselona'];

function sortElement(array: string[]) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(sortElement(team));
