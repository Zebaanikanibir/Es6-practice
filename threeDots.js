const ages = [12, 14, 56, 23, 89];
const ages2 = [11, 10, 20, 32, 45];
const ages3 = [25, 56, 85, 21];
const allAges = ages.concat(ages2).concat([2]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];


console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);

console.log(maximum);
const taka = [650, 780, 963, 456];
const maximum2 = Math.max(...taka);
console.log(maximum2);