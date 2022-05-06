import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    
  <>
  <Navbar title="TEXTUTILS"/>
  <div className="container my-3">
<TextForm placeholderHeading='Enter your Text to Analyze here'/>
  </div>
  
  </>
  );
}

export default App;
