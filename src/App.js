import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

function App(){

    return (
        <FeedbackProvider>
        <Router>
        <Header text =  {'Feedback UI'}/>
        <div className='container'>
           <Routes>

{/* Main Page Route */}
           <Route exact path = '/' element = {
                <>
                <FeedbackStats/>
                <FeedbackForm/>
                <FeedbackList/>
                </>
           }>
           </Route>

{/* About Page Route */}
            <Route path = '/about' element = {<AboutPage />}/>
           </Routes>
           <AboutIconLink/>
        </div> 
        </Router>
        </FeedbackProvider>
    );
}

export default App;