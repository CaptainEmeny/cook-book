import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'

function List(){

    //Renders while the recipes fetch
    const temporaryList = [
            {
            'name':'',
            'description': ''
            }
    ]

    const [recipes, getRecipes] = useState(temporaryList);


    useEffect(()=> {
        async function fetchRecipes(){
            try{
                //Gets the recipes from the main website
                const recipesFetch = await fetch('https://projectborges.com/recipes/recipes.json');
                const recievedRecipes = await recipesFetch.json();
                getRecipes(r => recievedRecipes);  // Updates recipe with useState

            } catch (e){
                console.error(e);
            }
        }  
        
        fetchRecipes();

        // Clean-up
        return() => {

            } 
    }, [])

    return(
    <div className= 'listDiv'>
        {recipes.map((recipe) => <ListItem recipe = {recipe} />)}        

    </div>);
}

export default List