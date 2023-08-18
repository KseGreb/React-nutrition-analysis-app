function Nutrition({data, showCalories}){
    return(
        <div className="container">
            <div className="label">
                <h2>Nutrition Facts</h2>
                <p>Amount Per Serving</p>
                <h2>Calories {showCalories}</h2>
                
                <h3>Total Fat {} g</h3>
                <h3>Cholesterol {} mg</h3>
                <p>*Percent Daily Values are based on a 2000 calorie diet</p>
            </div>
            
        </div>
    )
}
export default Nutrition;