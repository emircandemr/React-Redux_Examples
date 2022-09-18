import './App.css';
import ColorButton from './components/ColorButton/ColorButton';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import NoteList from './components/NoteList/NoteList';

function App() {
  return (
    <div className="w-full h-screen bg-[#f7f7f7] flex flex-col  items-center ">
      <Header/>
      <div className='w-full h-72 flex justify-center items-center mt-10' >
        <Input/>
        <ColorButton/>
      </div>
      <NoteList/>
    </div>
  );
}

export default App;
