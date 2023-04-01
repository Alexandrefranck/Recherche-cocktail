

function Cocktail(props){
    return(
        <div className="cocktail">
    <li key={props.idDrink}>
    <h2>{props.strDrink}</h2>
    <img src={props.strDrinkThumb} />
    <p>{props.strInstructions}</p>
    <p>{props.strIngredient1}</p>
    <p>{props.strIngredient2}</p>
    <p>{props.strIngredient3}</p>
    <p>{props.strIngredient4}</p>
    <p>{props.strIngredient5}</p>
    <p>{props.strIngredient6}</p>
    <p>{props.strIngredient7}</p>
    </li>
        </div>
    )
}

export default Cocktail