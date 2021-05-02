// const isEqualto100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

// console.log(isEqualto100(100,0));
// console.log(isEqualto100(0,100));

// console.log(isEqualto100(10,0));
// console.log(isEqualto100(0,10));

// console.log(isEqualto100(20,80));
// console.log(isEqualto100(50,50));


// write a js program to get the extension of a filename
// const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

// console.log(getFileExtension('index.html'))
// console.log(getFileExtension('webpack.config.js'))


// String.fromCharCode
// charCodeAt

// const moveCharsForward = (str) =>
//   str
//     .split('')
//     .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join('');

//   console.log(moveCharsForward('abcd'))

// const formatDate = (date = new Date()) => {
//   const days = date.getDate();
//   const months = date.getMonth() + 1;
//   const years = date.getFullYear();
//   return `${months}/${days}/${years}`;
// }

// console.log(formatDate());

const addNew = (str) =>
 str.indexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('New! Offers'));
