import "./styles.css";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import Posts from "./Components/Posts";
export default function App() {
  return (
    <div className="App">
      <div className="Nav-Section">
        <Navbar />
        <Profile />
        <Posts />
      </div>
    </div>
  );
}
