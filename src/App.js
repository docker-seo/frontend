import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {

  const [products, setProducts] = useState([]);

  async function onLoad(){
    let response = await fetch("/api/products");
    let responseBody = await response.json();
    console.log("onLoad", responseBody);
    setProducts(responseBody)
  }

  // 초기화 메서드
  useEffect(()=>{
    onLoad();
  }, []);

  return (
    <div>
      <h1>상품목록페이지~~!!!</h1>
      <hr/>
      <div>
        {products.map((product)=> <Card product={product}/>)}
      </div>
    </div>
  );
}

export default App;
