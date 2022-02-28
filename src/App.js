import './App.css';
import About from './component/about/about';
import Intro from './component/intro/intro';
import ThemeContextWrapper from './component/ThemeContextWrapper';
import ProductList from './component/productList/ProductList';
import Contact from './component/contact/contact';
import Toggle from './component/toggle/toggle';

function App() {
  return (
    <div className="App">
      <ThemeContextWrapper>
        <Toggle></Toggle>
        <Intro/>
        <About />
        <ProductList/>
        <Contact />
      </ThemeContextWrapper>

    </div>
  );
}

export default App;
