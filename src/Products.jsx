

export default function ProductList({productslist, shop, setShop, sum, setSum, count, setCount }) {
    let products = productslist;
    const handleBuyClick = (product) => {
        setShop((shop) => [...shop, product]);
        setSum((sum) => sum + product.price);
        setCount((count) => count + 1);
      };
    return (
      <div className="products_gallery">
        {products.map((product, index) => (
          <div key={index} className="product_container">
            <img src={product.img} alt={product.title} />
            <div className="info">
                <div className="text">
                    <p className="left">{product.title}</p>
                    <p className="prise">{product.price}{" "}{String.fromCharCode(8381)}</p>
                </div>
                <div className="text2">
                    <img className="icons" src = "./src/assets/images/star.webp"></img>
                    <p>{product.rate}</p>
                    <button onClick={() => handleBuyClick(product)}>Купить</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  