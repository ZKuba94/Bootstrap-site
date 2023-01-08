// Zadanie 1

// const { userInfo } = require('os');

// Rozwiazanie 1
const array1 = [33, 4, -6, 55, 4, 3, 0];

const sort = arr => {
	if (arr === undefined || arr.length === 0) {
		return console.log('pusta tablica');
	} else {
		for (let j = 0; j < arr.length; j++) {
			for (let i = 0; i < arr.length; i++) {
				if (arr[i] > arr[i + 1]) {
					let x = arr[i];
					let y = arr[i + 1];
					arr[i] = y;
					arr[i + 1] = x;
				}
			}
		}
	}
	return console.log(arr);
};
// sort(array1);

// Rozwiazanie 2
let array2 = [25, 44, 17, 8, 6, 1, -6, 15];
const sort2 = arr => {
	let array3 = [];
	const arrayLength = arr.length;
	if (arr === undefined || arr.length === 0) {
		return console.log('pusta tablica');
	} else {
		for (let i = 0; i < arrayLength; i++) {
			x = Math.min(...arr);
			arr.indexOf(x);
			arr.splice(arr.indexOf(x), 1);
			array3.push(x);
		}
	}
	return console.log(array3);
};
// sort2(array2);

// Ten sposob nie dziala dobrze !
let array4 = [33, 4, -6, 55, 4, 3, 0];
const sort3 = arr => {
	if (arr === undefined || arr.length === 0) {
		return console.log('pusta tablica');
	} else {
		return console.log(arr.sort());
	}
};
// sort3(array4);

// Zadanie 2
const array5 = ['MM', 'CXV', 'DCDXVI', 56];
let convertedNumbers = [];
let convertedRomanianNumber;
let convertedArabicNumber;
const romanianNumbers = [
	{
		symbol: 'I',
		value: 1,
	},
	{
		symbol: 'II',
		value: 2,
	},
	{
		symbol: 'III',
		value: 3,
	},
	{
		symbol: 'IV',
		value: 4,
	},
	{
		symbol: 'V',
		value: 5,
	},
	{
		symbol: 'VI',
		value: 6,
	},
	{
		symbol: 'VII',
		value: 7,
	},
	{
		symbol: 'VIII',
		value: 8,
	},
	{
		symbol: 'IX',
		value: 9,
	},
	{
		symbol: 'X',
		value: 10,
	},
	{
		symbol: 'XX',
		value: 20,
	},
	{
		symbol: 'XXX',
		value: 30,
	},
	{
		symbol: 'XL',
		value: 40,
	},
	{
		symbol: 'L',
		value: 50,
	},
	{
		symbol: 'LX',
		value: 60,
	},
	{
		symbol: 'LXX',
		value: 70,
	},
	{
		symbol: 'LXXX',
		value: 80,
	},
	{
		symbol: 'XC',
		value: 90,
	},
	{
		symbol: 'C',
		value: 100,
	},
	{
		symbol: 'CC',
		value: 200,
	},
	{
		symbol: 'CCC',
		value: 300,
	},
	{
		symbol: 'CD',
		value: 400,
	},
	{
		symbol: 'D',
		value: 500,
	},
	{
		symbol: 'DC',
		value: 600,
	},
	{
		symbol: 'DCC',
		value: 700,
	},
	{
		symbol: 'DCCC',
		value: 800,
	},
	{
		symbol: 'CM',
		value: 900,
	},
	{
		symbol: 'M',
		value: 1000,
	},
	{
		symbol: 'MM',
		value: 2000,
	},
	{
		symbol: 'MMM',
		value: 3000,
	},
];
const converterRomanianArabicNumbers = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			checkArabicValue(arr[i]);
		} else if (typeof arr[i] === 'string') {
			checkRomanianValue(arr[i]);
		}
	}
	return console.log(array5, convertedNumbers);
};
// Arabic to Romanian converter
const checkArabicValue = arabicNumber => {
	if (arabicNumber < 10 && arabicNumber > 0) {
		getIndexOfRomanianNumber(arabicNumber);
		return convertedNumbers.push(convertedRomanianNumber);
	} else if (arabicNumber >= 10 && arabicNumber < 100) {
		let twoDigitsNumber = [];
		const units = arabicNumber % 10;
		const tens = arabicNumber - units;
		getIndexOfRomanianNumber(tens);
		twoDigitsNumber.push(convertedRomanianNumber);
		if (arabicNumber % 10 !== 0) {
			getIndexOfRomanianNumber(units);
			twoDigitsNumber.push(convertedRomanianNumber);
		}
		return convertedNumbers.push(twoDigitsNumber.join(''));
	} else if (arabicNumber >= 100 && arabicNumber < 1000) {
		let threeDigitsNumber = [];
		const units = (arabicNumber % 100) % 10;
		const tens = (arabicNumber % 100) - units;
		const hundreds = arabicNumber - tens - units;
		getIndexOfRomanianNumber(hundreds);
		threeDigitsNumber.push(convertedRomanianNumber);
		if ((arabicNumber % 100) - units !== 0) {
			getIndexOfRomanianNumber(tens);
			threeDigitsNumber.push(convertedRomanianNumber);
		}
		if (arabicNumber % 10 !== 0) {
			getIndexOfRomanianNumber(units);
			threeDigitsNumber.push(convertedRomanianNumber);
		}
		return convertedNumbers.push(threeDigitsNumber.join(''));
	} else if (arabicNumber >= 1000 && arabicNumber < 4000) {
		let fourDigitsNumber = [];
		const units = ((arabicNumber % 1000) % 100) % 10;
		const tens = ((arabicNumber % 1000) % 100) - units;
		const hundreds = (arabicNumber % 1000) - tens - units;
		const thousands = arabicNumber - hundreds - tens - units;
		getIndexOfRomanianNumber(thousands);
		fourDigitsNumber.push(convertedRomanianNumber);
		if ((arabicNumber % 1000) - tens - units !== 0) {
			getIndexOfRomanianNumber(hundreds);
			fourDigitsNumber.push(convertedRomanianNumber);
		}
		if ((arabicNumber % 100) - units !== 0) {
			getIndexOfRomanianNumber(tens);
			fourDigitsNumber.push(convertedRomanianNumber);
		}
		if (arabicNumber % 10 !== 0) {
			getIndexOfRomanianNumber(units);
			fourDigitsNumber.push(convertedRomanianNumber);
		}
		return convertedNumbers.push(fourDigitsNumber.join(''));
	} else return convertedNumbers.push('Poza zakresem lb. Rzymskich');
};
const getIndexOfRomanianNumber = arabicNumber => {
	const digitObject = romanianNumbers.find(digitObject => digitObject.value === arabicNumber);
	return (convertedRomanianNumber = digitObject.symbol);
};
// Romanian to Arabic converter
const checkRomanianValue = romanianNumber => {
	convertedArabicNumber = 0;
	let numberLength = romanianNumber.length;
	for (let i = 0; i < numberLength; i++) {
		checkSubstraction(romanianNumber);
		// checkCorrectSymbol(romanianNumber);
		romanianNumber = romanianNumber.replace(romanianNumber.at(0), '');
	}
	convertedNumbers.push(convertedArabicNumber);
};
const checkCorrectSymbol = romanianNumber => {
	const convertedToArray = Array.from(romanianNumber);
	// console.log(convertedToArray);
	// for (let i=0; i<romanianNumbers.length; i++) {
	// 	romanianNumbers[i].symbol.includes(convertedToArray)
	// }
};

const checkSubstraction = romanianNumber => {
	if (romanianNumber.at(0) === 'I' && (romanianNumber.at(1) === 'V' || romanianNumber.at(1) === 'X')) {
		convertedArabicNumber += -1;
	} else if (romanianNumber.at(0) === 'X' && (romanianNumber.at(1) === 'L' || romanianNumber.at(1) === 'C')) {
		convertedArabicNumber += -10;
	} else if (romanianNumber.at(0) === 'C' && (romanianNumber.at(1) === 'D' || romanianNumber.at(1) === 'M')) {
		convertedArabicNumber += -100;
	} else {
		addingToArabicNumber(romanianNumber.at(0));
	}
};
const addingToArabicNumber = romanianNumber => {
	const symbolObject = romanianNumbers.find(symbolObject => symbolObject.symbol === romanianNumber);
	return (convertedArabicNumber += symbolObject.value);
};
converterRomanianArabicNumbers(array5);
