import Categories from "./Components/Categories";
import Delivery from "./Components/Delivery";
import Featured from "./Components/Featured";
import Fotter from "./Components/Fotter";
import Meal from "./Components/Meal";
import NewsLetter from "./Components/NewsLetter";
import TopNav from "./Components/TopNav";
import TopPics from "./Components/TopPics";
import './index.css'
function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPics/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Fotter/>
    </div>
  );
}

export default App;
