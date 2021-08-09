import './App.css';
import { FaReact, FaSass, FaLinux} from 'react-icons/fa';
import {MdFavoriteBorder, MdChat} from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <ul style={{fontSize: "3rem"}}>
        <li style={{color: "lightblue"}}><FaReact/></li>
        <li style={{color: "pink"}}><FaSass/></li>
        <li style={{color: "yellow"}}><FaLinux/></li>
        <li style={{color: "red"}}><MdFavoriteBorder/></li>
        <li style={{color: "white"}}><MdChat/></li>
      </ul>
    </div>
  );
}

export default App;
