import harvardArt from "./data/harvardArt.js";
import GalleryNavigation from "./components/GalleryNavigation/index.js";


function App(props) {
  return (
    <GalleryNavigation galleries= {harvardArt.records} />
  );
}

export default App;
