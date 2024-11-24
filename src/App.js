import Header from "./Components/Header/Header";
import Blog from "./Components/MENU/Blog";
import MENU_2 from "./Components/MENU/MENU_2";
import Offer from "./Components/MENU/Offer";
import Offers from "./Components/OFFERS/Offers";
import Ans from "./Components/Tailwind/Ans";
function App() {
  return (
    <div className="font-cormorant-infant">
      <Header />
      <Ans />
      <Offers />
      <MENU_2 />
      <Offer />
      <Blog />
    </div>
  );
}
export default App;
