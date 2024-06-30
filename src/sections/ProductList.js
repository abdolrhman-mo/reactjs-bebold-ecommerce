import { products } from '../data'
import Product from '../components/Product'
import '../static/sass/App.sass'

// TODO: Max num of items in gallery

export default function ProductList({title, tag}) {
    let filtered = []
    if (tag === 'all') {
        filtered = products.map(product => product)
    } else {
        filtered = products.filter(product =>
            product.tag[0] === tag || product.tag[1] === tag
        )
    }
    const listItems = filtered.map(product =>
        <div className="col-md-3 col-6">
            <Product
                name={product.name}
                imgUrl={product.imgUrl}
                sale={product.sale}
                price1={product.price1}
                price2={product.price2}
                index={product.index}
            />
        </div>
        )
    return (
        <div className="product-list">
            <div className="container">
                <h2>{title}</h2>
                <div className="row">
                    {listItems}
                </div>
            </div>
        </div>
    )
}