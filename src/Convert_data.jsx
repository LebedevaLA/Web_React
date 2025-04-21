import Product from "./class_Product"
import headphones from "./data"
let items = headphones;

function CreateProducts(){
    let products = [];
    for (let i =0; i<items.length;i++){
        let product = new Product(items[i].img, items[i].title, items[i].price, items[i].rate);
        products.push(product);
    }
    return products;
}
const productlist = CreateProducts();
export {productlist};