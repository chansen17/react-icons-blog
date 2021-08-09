import './App.css';
import { FaReact, FaSass, FaLinux} from 'react-icons/fa';
import {MdFavoriteBorder, MdChat} from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <ul style={{fontSize: "2rem"}}>
        <li><FaReact/></li>
        <li><FaSass/></li>
        <li><FaLinux/></li>
        <li><MdFavoriteBorder/></li>
        <li><MdChat/></li>
      </ul>
    </div>
  );
}

export default App;
