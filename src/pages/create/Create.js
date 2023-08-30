import "./Create.css" 
import { useRef, useState } from "react"
function Create() {
    const[title,setTitle]=useState('');
    const[method,setMethod]=useState('');
    const[cookingTime,setCookingTime]=useState('')
  const[newIngridients,setNewIngridient]=useState('')
  const[ingredients,setIngridient]=useState([]);
  const ingredientsInput=useRef(null)

    function  HandleSubmit(e){
    e.preventDefault();
    console.log(cookingTime,method,title,ingredients);


  }
  function HandleClick(e){
    e.preventDefault();
    const ing = newIngridients.trim();
    if(ing && !ingredients.includes(ing)){
    setIngridient((previouseIngridients)=> [...previouseIngridients,ing])}
    setNewIngridient('');
    ingredientsInput.current.focus();
  }
    return (
        <div className="create">
            <h2 className="page-title">add new reciept</h2>
            <form onSubmit={HandleSubmit}  key={ingredients}>
               <label>
                    <span>
                    Recipe Title:
                    </span>
                    <input
                    type="text"
                    onChangeCapture={(e)=>{setTitle(e.target.value)}}
                    value={title}
                    required
                    />
               </label>

               <label >
                <span>
                    reciept ingridients
                </span> 
                <div className="ingredients">
                    <input type="text"
                    onChange={(e)=>{setNewIngridient(e.target.value)}}
                    value={newIngridients}
                   ref={ingredientsInput}
                   />
                    <button className="btn"
                    onClick={HandleClick}
                    >add</button>
                </div>

                   <p>
                    current Ingridients: {ingredients.map((i)=>(
                        
                        <em>{i},</em>

                    ))}
                   </p>

               </label>

               <label>
                    <span>
                    Recipe method:
                    </span>
                    <textarea
                    type="text"
                    onChangeCapture={(e)=>{setMethod(e.target.value)}}
                    value={method}
                    required
                    />
               </label>

               <label>
                    <span>
                    Cooking time (minuites):
                    </span>
                    <input
                    type="number"
                    onChangeCapture={(e)=>{setCookingTime(e.target.value)}}
                    value={cookingTime}
                    required
                    />
               </label>
              
              <button>submit</button>

            </form>
        </div>
    )
}

export default Create
