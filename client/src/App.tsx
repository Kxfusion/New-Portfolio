import './App.css';
import KButton from './components/Button';
import MyHead from './components/MyHead';
import PoppedTextBox from './components/PoppedTextBox';

function App() {
  return (
    <>
        <PoppedTextBox />
        <MyHead />
        <KButton buttonText='Custom' />
    </>
  );
}

export default App;
