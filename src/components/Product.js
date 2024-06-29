import { Link } from "react-router-dom";
import '../static/sass/Product.sass'

function Product({name, imgUrl, sale, price1, price2, index}) {
  index++
  const productLink = "/product/" + index
  return (
    <div className="product">
        <Link to={productLink}>
          <div className="top" style={{backgroundImage: "url(" + imgUrl + ")"}}>
            <p className="sale"> {sale} </p>
            <div className="links">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </Link>
        <div className="body">
          <Link className="title" to={productLink}>
            <h3>{ name }</h3>
          </Link>
          <p className="price">
            <span className='line-through'>{price1}.00 EGP</span> {price2}.00 EGP
          </p>
          <a className="add-to-wishlist" href='#hoodie'>
            <i className="fa-regular fa-heart"></i>
            Add to Wishlist
          </a>
        </div>
    </div>
  );
}

export default Product;
