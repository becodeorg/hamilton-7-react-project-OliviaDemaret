function Today({weatherData, cityImage}) {
    console.log(weatherData);
    console.log(cityImage);
    return (
        <div className="weatherToday flex flex-col m-auto">
            <img src={cityImage} />

            <ul>
                {weatherData &&
                    weatherData.map((day, index) => (
                        <li key={index}>
                            <h2>{day.main.temp}</h2>
                            <p>{day.weather[0].description}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default Today;
