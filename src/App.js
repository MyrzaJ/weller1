import First from './pages/First/First';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
 <Layout>
<div className="App">
<Routes>
  <Route path="/" element={<First/>}/>
  <Route path="/catalog" element={<Catalog/>}/>
</Routes>
    </div>
 </Layout>
  );
}

export default App;
