import Product from "../product/Product"
import products from "../data"
import './ProductList.css';
const ProductList = () =>
{
  return(
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects </h1>
        <p className="pl-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec</p>
      </div>
      <div className="pl-list">
        {products.map((item) =>
        (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
      </div>
    )
  }
  export default ProductList