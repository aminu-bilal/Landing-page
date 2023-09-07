
const companies=[
    {name:'Timart Business Solution', category: 'Technology', start: 2000, end: 2020},
    {name:'Prime Age', category: 'Finance', start: 1992, end: 2008},
    {name:'BY Store', category: 'Retail', start: 1999, end: 2007},
    {name:'OK Motors', category: 'Auto', start: 1989, end: 2010},
    {name:'Mart', category: 'Retail', start: 2009, end: 2014},
    {name:'Al-Haqah', category: 'Technology', start: 1987, end: 2010},
    {name:'Wakamatu', category: 'Finance', start: 1986, end: 1996},
    {name:'Frontier', category: 'Auto', start: 2011, end: 2016},
    {name:'Tea shop', category: 'Technology', start: 1981, end: 1989},
    {name:'Golden Age', category: 'Retail', start: 1981, end: 2003},
];
const Age = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64,32];

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }
// forEach
companies.forEach(function(name) {
    console.log(name);

})

console.log("hello")

const logCompanyName = ()=>{
    console.log("hellos")
return companies.forEach((name)=> {
    console.log(name);
})
}

console.log(logCompanyName())
// filter
// map
// sort
// reduce
