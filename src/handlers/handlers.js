const url = `https://themealdb.com/api/json/v1/1/random.php`;
export const recipePage = (meal, setMeal) => {
    fetch(url, { method: "GET" })
        .then((data) => data.json())
        .then((data) => {
            if (data.meals[0].strArea !== "Unknown") {
                console.log(data.meals[0].strMeal);
                setMeal(data.meals[0]);
            }
        })
        .catch((error) => console.log(error));
};
