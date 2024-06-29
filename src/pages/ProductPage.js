import { useParams } from "react-router-dom"
import { products, slides } from "../data"
import Nav from "../sections/Nav"
import Footer from "../sections/Footer"
import ProductList from "../sections/ProductList"
import "../static/sass/ProductPage.sass"

export default function ProductPage() {
    let { index } = useParams()
    index--
    const product = products[index]
    return (
        <div className="product-page">
            <Nav />
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={product.imgUrl} alt="" />
                        </div>
                        <div className="col-6">
                            <div className="text">
                                <p className="sale">UP TO - {product.sale} %</p>
                                <h2>{product.name}</h2>
                                <h3>
                                    <span className="line-through">{product.price1} EGP </span>
                                    <span className="theme-color">{product.price2} EGP </span>
                                </h3>
                                <p className="gray">{slides[0].describtion}</p>
                                <select>
                                    <option value="s">s</option>
                                    <option value="m">m</option>
                                    <option value="l">l</option>
                                    <option value="xl">xl</option>
                                </select>
                                <p className="gray">Purchase this product now and earn {product.price2} Points!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="more">
                <ProductList
                    title="Related products"
                    tag="latest"
                />
            </div>
            <Footer />
        </div>
    )
}