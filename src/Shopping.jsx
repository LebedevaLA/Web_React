import AboutUs from "./AboutUs";
import Product from "./class_Product"

function Calc(shop, dict){
    for (let i = 0; i < shop.length; i++) {
        const key = `${shop[i].img}-${shop[i].title}-${shop[i].price}-${shop[i].rate}`; 
        if (dict[key]) {
            dict[key]++;
        } else {
            dict[key] = 1;
        }
      }
    return dict;
}
function Unic_shop(dict){
    let products = [];
    for (let key in dict) {
        let [img,title, price, rate] = key.split('-'); 
        let product = new Product(img, title, Number(price), Number(rate));
        products.push(product);
      }
    return products;
}

export default function Shop({ shop, setShop, sum, setSum, count, setCount }){
    function Add(product, dict){
        const newDict = { ...dict };
        const key = `${product.img}-${product.title}-${product.price}-${product.rate}`;
        newDict[key] = newDict[key] + 1;
        setSum(sum + product.price);
        setCount(count + 1);
        setShop([...shop, product]);
        console.log(shop.length);
      };
    function Del(product, dict){
        console.log(shop.length);
        const key = `${product.img}-${product.title}-${product.price}-${product.rate}`;
        console.log(key);
        if (dict[key] > 0) {
            console.log(dict[key]);
            let newDict = { ...dict };
            newDict[key] = Math.max(newDict[key] - 1, 0);
            setSum(sum - product.price);
            const index = shop.findIndex(item => item.title === product.title && item.price === product.price && item.rate === product.rate && item.img === product.img);
            setShop([...shop.slice(0, index), ...shop.slice(index + 1)]);
            setCount(count -1);
        }
        if(dict[key] == 0){
            const index = shop.findIndex(item => item.title === product.title && item.price === product.price && item.rate === product.rate && item.img === product.img);
            setShop([...shop.slice(0, index), ...shop.slice(index + 1)]);
            setCount(count - 1);
        }
    };
    if (count > 0){
        let dict = Calc(shop,{});
        let products = Unic_shop(dict);
    return (
        
        <div className="shoplist">
            <div className="ti">
                <div className="ti" style={{margin:"70px auto", flexDirection:"column"}}>
                    <div className="total_amount">Итого   {sum}</div>
                    <button className="buy">Перейти к оформлению</button>
                </div>
                <div>
                {products.map((product, index) => (
                    <div key={index} className="shop_container">
                        <div className="ti">
                            <img className="img_buy" src={product.img} alt={product.title} />
                            <div className="cost_name">
                                <p>{product.title}</p>
                                <p className="prise">{product.price}{" "}{String.fromCharCode(8381)}</p>
                            </div>
                        </div>
                    
                        <div className="buttons">
                            <button className="button_pm"onClick={() => Add(product, dict)}>+</button>
                            <p>{dict[`${product.img}-${product.title}-${product.price}-${product.rate}`]}</p>
                            <button className="button_pm" onClick={() => Del(product, dict)}>-</button>

                        </div>
                </div>
                 ))}
            </div>
          </div>
          <AboutUs></AboutUs>
        </div>
      );
    }else{
        return(
            <AboutUs></AboutUs>
        );
    }
};