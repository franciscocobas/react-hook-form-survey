import './App.css';
import Form from './components/Form';
import { ReactComponent as FCLogo } from './images/fc-logo.svg';

function App() {
  return (
    <div className='main-wrapper'>
      <div className='header'>
        <FCLogo className='logo' />
        <h1>FranciscoDev Survey</h1>
      </div>
      <p className='description'>
        This survey is just for showcasing the react-hook-form use. The
        submitted data will not be public exposed in any form. I will collect
        this data to improve the content that I create. Thank you for taking
        your time and answer the questions!
      </p>
      <Form />
    </div>
  );
}

export default App;
