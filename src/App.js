import ProductList from "./components/product-list";


function App() {
  return (
    <div className="App">
        <ProductList type="catalogue" />
        <ProductList type="cart" />
    </div>
  );
}

export default App;
