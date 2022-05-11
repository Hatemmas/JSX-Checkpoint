import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><>
      <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: 'black', maxWidth: '100vw' }}>
        <h1 className="titleRed">Hatem</h1>
        <br />
        <img src={"/image1.jpg"} alt="image1" />
        <br />
        <img src={"../public/image0.jpg"} alt="image0" />
      </div>
    </><video width="320" height="240" controls /><source src="myVideo.mp4" type="video/mp4" /></>
  );
}

export default App;