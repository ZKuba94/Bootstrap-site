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

// ZADANIE 2
// const array5 = [9, 15, 68, 120, 677, 1340, 2789];
const array5 = ['XC', 'IX', 'CM', 'DLXXXVII'];
const romanianNumbers = [
	{
		symbol: 'I',
		value: 1,
	},
	{
		symbol: 'V',
		value: 5,
	},
	{
		symbol: 'X',
		value: 10,
	},
	{
		symbol: 'L',
		value: 50,
	},
	{
		symbol: 'C',
		value: 100,
	},
	{
		symbol: 'D',
		value: 500,
	},
	{
		symbol: 'M',
		value: 1000,
	},
];
let convertedNumbers = [];
let units = [];
let tens = [];
let hundreds = [];
let thousands = [];
let convertedRomanianNumber = '';
let romanianValue = [];
let convertedArabicNumber = 0;
const converterRomanianArabicNumbers = arr => {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			checkArabicValue(arr[i]);
		} else if (typeof arr[i] === 'string') {
			checkRomanianValue(arr[i].toUpperCase());
		}
	}
	return console.log(array5, convertedNumbers);
};
// Arabic to Romanian converter
const checkArabicValue = arabicNumber => {
	if (arabicNumber <= 10 && arabicNumber > 0) {
		getUnits(arabicNumber);
		return convertedNumbers.push(...units);
	} else if (arabicNumber > 10 && arabicNumber < 100) {
		const unitsNumber = arabicNumber % 10;
		const tensNumber = (arabicNumber - unitsNumber) / 10;
		getTens(tensNumber);
		getUnits(unitsNumber);
		const twoDigitsRoman = tens.concat(units);
		return convertedNumbers.push(twoDigitsRoman.join(''));
	} else if (arabicNumber >= 100 && arabicNumber < 1000) {
		const unitsNumber = (arabicNumber % 100) % 10;
		const tensNumber = ((arabicNumber % 100) - unitsNumber) / 10;
		const hundredsNumber = (arabicNumber - tensNumber - unitsNumber) / 100;
		getHundreds(hundredsNumber);
		getTens(tensNumber);
		getUnits(unitsNumber);
		const threeDigitsRoman = hundreds.concat(tens.concat(units));
		return convertedNumbers.push(threeDigitsRoman.join(''));
	} else if (arabicNumber >= 1000 && arabicNumber < 4000) {
		const unitsNumber = ((arabicNumber % 1000) % 100) % 10;
		const tensNumber = (((arabicNumber % 1000) % 100) - unitsNumber) / 10;
		const hundredsNumber = ((arabicNumber % 1000) - tensNumber * 10 - unitsNumber) / 100;
		const thousandsNumber = (arabicNumber - hundredsNumber * 100 - tensNumber * 10 - unitsNumber) / 1000;
		getThousands(thousandsNumber);
		getHundreds(hundredsNumber);
		getTens(tensNumber);
		getUnits(unitsNumber);
		const fourDigitsRoman = thousands.concat(hundreds.concat(tens.concat(units)));
		return convertedNumbers.push(fourDigitsRoman.join(''));
	} else return convertedNumbers.push('Poza zakresem lb. Rzymskich');
};
const getIndexOfRomanianNumber = arabicNumber => {
	if (romanianNumbers.find(digitObject => digitObject.value === arabicNumber)) {
		const digitObject = romanianNumbers.find(digitObject => digitObject.value === arabicNumber);
		return (convertedRomanianNumber = digitObject.symbol);
	} else return false;
};
const getUnits = arabicNumber => {
	units = [];
	convertedRomanianNumber = '';
	if (getIndexOfRomanianNumber(arabicNumber) === false) {
		if (arabicNumber % 5 < 4 && arabicNumber < 4)
			// Digits from 1 to 3
			return units.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[0].symbol));
		else if (arabicNumber % 5 < 4 && arabicNumber > 4)
			// Digits from 6 to 8
			return units.push(
				convertedRomanianNumber
					.padStart(1, romanianNumbers[1].symbol)
					.padEnd(arabicNumber - 4, romanianNumbers[0].symbol)
			);
		else if (arabicNumber === 4)
			return units.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[1].symbol)
			);
		else if (arabicNumber === 9)
			return units.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[0].symbol).padEnd(2, romanianNumbers[2].symbol)
			);
	} else {
		units.push(getIndexOfRomanianNumber(arabicNumber));
	}
};
const getTens = arabicNumber => {
	tens = [];
	convertedRomanianNumber = '';
	if (getIndexOfRomanianNumber(arabicNumber * 10) === false) {
		if (arabicNumber % 5 < 4 && arabicNumber < 4)
			// Digits from 1 to 3
			return tens.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[2].symbol));
		else if (arabicNumber % 5 < 4 && arabicNumber > 4)
			// Digits from 6 to 8
			return tens.push(
				convertedRomanianNumber
					.padStart(1, romanianNumbers[3].symbol)
					.padEnd(arabicNumber - 4, romanianNumbers[2].symbol)
			);
		else if (arabicNumber === 4)
			return tens.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[3].symbol)
			);
		else if (arabicNumber === 9)
			return tens.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[2].symbol).padEnd(2, romanianNumbers[4].symbol)
			);
	} else {
		tens.push(getIndexOfRomanianNumber(arabicNumber * 10));
	}
};
const getHundreds = arabicNumber => {
	hundreds = [];
	convertedRomanianNumber = '';
	if (getIndexOfRomanianNumber(arabicNumber * 100) === false) {
		if (arabicNumber % 5 < 4 && arabicNumber < 4)
			// Digits from 1 to 3
			return hundreds.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[4].symbol));
		else if (arabicNumber % 5 < 4 && arabicNumber > 4)
			// Digits from 6 to 8
			return hundreds.push(
				convertedRomanianNumber
					.padStart(1, romanianNumbers[5].symbol)
					.padEnd(arabicNumber - 4, romanianNumbers[4].symbol)
			);
		else if (arabicNumber === 4)
			return hundreds.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[5].symbol)
			);
		else if (arabicNumber === 9)
			return hundreds.push(
				convertedRomanianNumber.padStart(1, romanianNumbers[4].symbol).padEnd(2, romanianNumbers[6].symbol)
			);
	} else {
		hundreds.push(getIndexOfRomanianNumber(arabicNumber * 100));
	}
};
const getThousands = arabicNumber => {
	thousands = [];
	convertedRomanianNumber = '';
	if (getIndexOfRomanianNumber(arabicNumber * 1000) === false) {
		if (arabicNumber % 5 < 4 && arabicNumber < 4)
			// Digits from 1 to 3
			return thousands.push(convertedRomanianNumber.padStart(arabicNumber, romanianNumbers[6].symbol));
	} else {
		thousands.push(getIndexOfRomanianNumber(arabicNumber * 1000));
	}
};
// Romanian to Arabic converter
const checkRomanianValue = romanianNumber => {
	if (checkCorrectSymbol(romanianNumber)) {
		checkSymbolOrder(romanianNumber);
	} else return convertedNumbers.push('Błędny format lb. rzymskiej.');
};
const checkCorrectSymbol = romanianNumber => {
	for (let i = 0; i < romanianNumber.length; i++) {
		if (romanianNumbers.some(el => el.symbol === romanianNumber.at(i)));
		else return false;
	}
	return true;
};
const checkSymbolOrder = romanianNumber => {
	romanianValue = [];
	for (let i = 0; i < romanianNumber.length; i++) {
		const romanianNumberValue = romanianNumbers.find(el => el.symbol === romanianNumber.at(i));
		romanianValue.push(romanianNumberValue.value);
	}
	for (let i = 0; i < romanianValue.length; i++) {
		if (romanianValue[i] >= romanianValue[i + 1] || romanianValue[i + 1] === undefined) {
		} else return checkSubstraction(romanianValue);
	}
	return romanianAdding(romanianValue);
};
const romanianAdding = romanianValue => {
	convertedArabicNumber = 0;
	for (let i = 0; i < romanianValue.length; i++) {
		const filteredValues = romanianValue.filter(value => value === romanianValue[i]);
		if (
			filteredValues.length < 2 &&
			(romanianValue[i] === romanianNumbers[1].value ||
				romanianValue[i] === romanianNumbers[3].value ||
				romanianValue[i] === romanianNumbers[5].value)
		) {
			convertedArabicNumber += romanianValue[i];
		} else if (
			filteredValues.length <= 3 &&
			(romanianValue[i] === romanianNumbers[0].value ||
				romanianValue[i] === romanianNumbers[2].value ||
				romanianValue[i] === romanianNumbers[4].value ||
				romanianValue[i] === romanianNumbers[6].value)
		) {
			convertedArabicNumber += romanianValue[i];
		} else return convertedNumbers.push('Za dużo tych samych symboli obok siebie.');
	}
	convertedNumbers.push(convertedArabicNumber);
};
const checkSubstraction = romanianValue => {
	console.log('odejmowanie');
	convertedArabicNumber = 0;
	for (let i = 0; i < romanianValue.length; i++) {
		const filteredValues = romanianValue.filter(value => value === romanianValue[i]);
		if (
			filteredValues.length < 2 &&
			(romanianValue[i] === romanianNumbers[1].value ||
				romanianValue[i] === romanianNumbers[3].value ||
				romanianValue[i] === romanianNumbers[5].value) &&
			romanianValue[i + 1] === romanianValue[i] * 10
		) {
			convertedArabicNumber = romanianValue[i + 1] - romanianValue[i];
		} else if (
			filteredValues.length <= 3 &&
			(romanianValue[i] === romanianNumbers[0].value ||
				romanianValue[i] === romanianNumbers[2].value ||
				romanianValue[i] === romanianNumbers[4].value ||
				romanianValue[i] === romanianNumbers[6].value) &&
			romanianValue[i + 1] === romanianValue[i] * 10 &&
			romanianValue[i + 1] !== undefined
		) {
			convertedArabicNumber += romanianValue[i + 1] - romanianValue[i];
		} else if (
			filteredValues.length <= 3 &&
			(romanianValue[i] === romanianNumbers[0].value ||
				romanianValue[i] === romanianNumbers[2].value ||
				romanianValue[i] === romanianNumbers[4].value ||
				romanianValue[i] === romanianNumbers[6].value) &&
			romanianValue[i + 1] === undefined
		) {
		} else return convertedNumbers.push('Błędny zapis liczby.');
	}
	convertedNumbers.push(convertedArabicNumber);
};
converterRomanianArabicNumbers(array5);
