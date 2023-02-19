import { Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourite";
import NewMeetupPage from "./pages/NewMeetup";
import { Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
