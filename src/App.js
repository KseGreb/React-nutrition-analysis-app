import { useEffect, useState } from 'react';
import './App.css';
import Nutrition from './Nutrition';

function App() {

  const MY_ID = "7f0c4b91";
  const MY_KEY = "60c83dfc015d4c049cd203bebc2506b6";

  const [myIngredient, setMyIngredient] = useState("");
  const [showNutrition, setShowNutrition] = useState([]);

  useEffect(()=>{
    const getNutritientsInfo = async () =>{
    const response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${MY_ID}&app_key=${MY_KEY}&nutrition-type=logging&ingr=salmon`)
      const data = await response.json();
      console.log(data.totalWeight
        );
      setShowNutrition(data);
    }
    getNutritientsInfo()
  }, [])

  const inputIngredient = (e) => {
    console.log(e.target.value)
    setMyIngredient(e.target.value)
  }

  return (
    <div className="App">

      <h1>Nutrition Analysis API</h1>

    <form>
      <input placeholder='Type your ingredient...' onChange={inputIngredient} value={myIngredient}/>
    </form>

{showNutrition.map((element) =>(
  <Nutrition/>
))}

    </div>
  );
}

export default App;

//Application ID - 7f0c4b91
//Application Keys - 60c83dfc015d4c049cd203bebc2506b6	—
//url - https://api.edamam.com/api/nutrition-details?app_id=7f0c4b91&app_key=60c83dfc015d4c049cd203bebc2506b6


