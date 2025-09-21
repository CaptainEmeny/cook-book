function ListItem({recipe}){

    console.log(recipe)
    return(
    <a href= 'https://projectborges.com' className= 'listItemDiv'>
            <img src= {recipe.image} alt='Image of food'></img>
            <h2>{recipe.name}</h2>
            <h3>Cook Time: {recipe.cookTime} Min.</h3>
            <p>{recipe.description}</p>
    </a>)
}

export default ListItem