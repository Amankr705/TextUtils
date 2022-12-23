import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
        setAlert(null);
    }, 1500);

  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark';
    }else{
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About textUtils" /> */}

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          {/* /users --> element 1
          /users/profile --> element 2 */}

            <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtils - Word & Character Counter" mode={mode} toggleMode={toggleMode}/>} /> 
            {/* <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} /> */}
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    
    </>

  );
}

export default App;
