import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupLIst";

function FavouritesPage() {
  const favortitesCtx = useContext(FavoritesContext);

  let content;

  if (favortitesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet.Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favortitesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
