const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 13, 12];
const ages3 = [25, 22, 27, 24]; 

const values = [650, 450, 250];


const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
const maximum = Math.max(...values);
console.log(allAges);
console.log(allAges2);
console.log(maximum);
