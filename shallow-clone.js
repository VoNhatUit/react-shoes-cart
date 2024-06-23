const  products = [
  { id: 1, title: 'iphone', quantity: 1 },
  { id: 2, title: 'apple', quantity: 1 },
]

// const clonedProducts = [...products]; // shallow clone - clone value, but share same reference
const clonedProducts =JSON.parse(JSON.stringify(products)); // deep clone - clone value, but not share reference 
clonedProducts[0].quantity = 2;

console.log('reference: ', {
  products,
  clonedProducts, 
})



const obj1 = {};
const obj2 = {};
const obj3 = obj1; // shallow clone

obj3.title = 'tony'
