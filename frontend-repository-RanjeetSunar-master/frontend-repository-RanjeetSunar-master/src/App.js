import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Mid from './Mid/Mid';
import './custom.css'
import './Mid/aboutus.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
  
    <BrowserRouter> 
<Header></Header>
<Mid></Mid>
<Footer></Footer>
			

		
			
</BrowserRouter>
		

  
  );
}

export default App;
