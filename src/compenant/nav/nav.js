import { tab } from "@testing-library/user-event/dist/tab";
import { useEffect, useState } from "react";
import "./nav.css";
import Cocktail from "../cocktail/cocktail";

function Nav() {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const [tableau, setTableau] = useState([]);

  async function Menu() {
    let response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + search
    );
    let donnes = await response.json();
    if (donnes.drinks != null) {
      setTableau(donnes.drinks);
    }
  }
  useEffect(() => {
    Menu();
  }, [search]);

  return (
    <div className="menu">
      <h1> Choissisez un cocktail : </h1>
      <input
        onChange={handleInput}
        type="text"
        name="search"
        placeholder="Recherchez..."
      ></input>
      {tableau.map((cocktail) => (
        <Cocktail
          idDrink={cocktail.idDrink}
          strDrink={cocktail.strDrink}
          strDrinkThumb={cocktail.strDrinkThumb}
          strInstructions={cocktail.strInstructions}
          strIngredient1={cocktail.strIngredient1}
          strIngredient2={cocktail.strIngredient2}
          strIngredient3={cocktail.strIngredient3}
          strIngredient4={cocktail.strIngredient4}
          strIngredient5={cocktail.strIngredient5}
          strIngredient6={cocktail.strIngredient6}
          strIngredient7={cocktail.strIngredient7}
        />
      ))}
    </div>
  );
}
export default Nav;
