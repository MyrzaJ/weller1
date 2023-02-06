import First from './pages/First/First';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Catalog from './pages/Catalog/Catalog';
import Two from './pages/two/Two';
import About from './pages/AboutUS/About';
import ContactUs from './pages/contactus/ContactUs';


function App() {
  return (
 <Layout>
<div className="App">
<Routes>
  <Route path="/" element={<First/>}/>
  <Route path="/catalog" element={<Catalog/>}/>
  <Route path="/two" element={<Two/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contactus' element={<ContactUs/>}/>
</Routes>
    </div>
 </Layout>
  );
}

export default App;
