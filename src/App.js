import Toggle from './component/toggle/toggle';
import './App.css';
import About from './component/about/about';
import Intro from './component/intro/intro';
import ThemeContextWrapper from './component/ThemeContextWrapper';
import ProductList from './component/productList/ProductList';
import Contact from './component/contact/contact';

function App() {
  return (
    <div className="App">
      <ThemeContextWrapper>
        <Toggle/>
        <Intro/>
        <About />
        <ProductList/>
        <Contact />
      </ThemeContextWrapper>

    </div>
  );
}

export default App;
