import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

// my components & data
import Nav from '../sections/Nav'
import Header from '../sections/Header'
import Reviews from '../sections/Reviews'
import ProductList from '../sections/ProductList'
import Footer from '../sections/Footer'
import About from "./About"
import ProductPage from "./ProductPage"
// static files
import '../static/sass/App.sass'
import MyAccount from "./MyAccount"

// TODO: shoppppppppppppppppppppppppppppppping carttttttttttttttttttttttttttttttttttttttttttt

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:index" element={<ProductPage />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </Router>
  )
}

function Home() {
  return (
    <div className="App">
      <Nav position={"absolute"} />
      <Header />
      <ProductList
        title="Trending Now"
        tag="trending"
      />
      <hr />
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
