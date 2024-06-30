import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// my components & data
import Nav from '../sections/Nav'
import Hero from '../sections/Hero'
import Reviews from '../sections/Reviews'
import ProductList from '../sections/ProductList'
import Footer from '../sections/Footer'
import About from "./About"
import Contact from "./Contact"
import ProductDetails from "./ProductDetails"
import Billboard from "../sections/Billboard"
import MyAccount from "./MyAccount"
// static files
import '../static/sass/App.sass'

// TODO: shoppppppppppppppppppppppppppppppping carttttttttttttttttttttttttttttttttttttttttttt

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:index" element={<ProductDetails />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ProductList
        title="Trending Now"
        tag="trending"
      />
      <Billboard />
      <Reviews />
      <hr />
      <ProductList
        title="All Products"
        tag="all"
      />
      <Footer />
    </div>
  )
}

export default App;
