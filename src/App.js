import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import video from "./1.mp4"
import Nutrition from './Nutrition';
import apple from "./apple.png"


function App() {



  const MY_ID = "7f0c4b91";
  const MY_KEY = "60c83dfc015d4c049cd203bebc2506b6";

  const [myIngredientSearch, setMyIngredientSearch] = useState("");
  const [showCalories, setShowCalories] = useState("");
  const [showFat, setShowFat] = useState("");
  const [showCholesterol, setShowCholesterol] = useState("");

  useEffect(()=>{
    const getNutritientsInfo = async () =>{
    const response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=logging&ingr=salmon`)
      const data = await response.json();
      console.log(data);
      setShowCalories(data.calories);
      setShowFat(data.totalNutrients.FAT.quantity);
      setShowCholesterol(data.totalNutrients.CHOLE.quantity)

    }
    getNutritientsInfo()
  }, [])

  const inputIngredient = (e) => {
    console.log(e.target.value)
    setMyIngredientSearch(e.target.value)
  }



  return (
    <div className="App">
      <div className='container'>
        <h1>Nutrition Analysis API</h1>
      </div>

    <div  className='container'>
      <p>Enter an ingredient list list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc.
        Enter each ingredient on a new line.</p>
    </div>

        <video autoPlay muted loop>
          <source src={video} type = "video/mp4"/>
        </video>

      

    <form className='container'>
      <input placeholder='Type your ingredient...' onChange={inputIngredient} value={myIngredientSearch}/>
    </form>
    <div  className='container'>
      <button>
        <img src={apple} alt='icon' width="25px"/> Search
        <img src={apple} alt='icon' width="25px"/>
      </button>
    </div>

    

    
    <Nutrition data={showCalories}/>

    <p>Calories: {showCalories} </p>
    <p>Total fat: {showFat} g</p>
    <p>Cholesterol: {showCholesterol} mg</p>

    </div>
  );
}

export default App;

//Application ID - 7f0c4b91
//Application Keys - 60c83dfc015d4c049cd203bebc2506b6	—
//url - https://api.edamam.com/api/nutrition-details?app_id=7f0c4b91&app_key=60c83dfc015d4c049cd203bebc2506b6


