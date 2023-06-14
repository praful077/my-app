export default function Product(){

   //const products = [
   // {id:1, name:"Laptop", price:500},
   // {id:2, name:"Computer", price:600},
   // {id:3, name:"Model", price:900},
   // {id:4, name:"Laptop", price:500},
//
   //];
   //

   //const productList = products.map((product) =>(
   // <h3 key={product.id}>
   //     {product.name} :${product.price}
   // </h3>
   const fruits = ["apple","mango","banana"]

   const fruitList = fruits.map((fruits, index) => <h3 key={index}>{fruits} </h3>);
   return <div>{fruitList}</div>;

}