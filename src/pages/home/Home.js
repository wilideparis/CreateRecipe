import { useFetch } from '../../hooks/useFetch'
import React from 'react'
import "./Home.css"
import RecipeList from '../../components/RecipeList';

function Home() {
    const{data,isPendind,error}=useFetch('http://localhost:3000/recipes');

    return (
        <div className='home'>
          {error && <p className='error'>{error}</p> }
          {isPendind && <p className='loading'>{isPendind}</p> }
           {data && <RecipeList  data={data}/>}
        </div>
    )
}

export default Home
