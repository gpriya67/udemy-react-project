import Categories from "./components/Categories";
import Footer from "./components/Footer";
import HomeBanner from "./components/HomeBanner";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";

function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <HomeBanner />
      <Recommended />
      <Popular />
      <Topics />
      <Footer />
    </>
  );
}
export default App;
