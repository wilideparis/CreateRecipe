import React from 'react'
import "./RecipeList.css"
import { Link } from 'react-router-dom'
function RecipeList({data}) {
    return (
        <div className='recipe-list'>
           { data && data.map((recipe)=>(
                <div key={recipe.id} className='card'>
                    <h2 >{recipe.title}</h2>
                    <p>{recipe.cookingTime }</p>
                    <div>
                        {recipe.method.substring(0,100)}
                        <Link to={`/recipe/${recipe.id}`}>cook this</Link>
                    </div>
                
               </div>
         

           ))}
        </div>
    )
}

export default RecipeList
