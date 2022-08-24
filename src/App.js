import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import {GithubProvider} from './context/github/GithubContext';
import {AlertProvider} from './context/alert/AlertContext';
import User from './Pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Alert />
          <div className="flex flex-col justify-between h-screen ">
            <Navbar />
            <main className=" container mx-auto px-3 pb-12 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
