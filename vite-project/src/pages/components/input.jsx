function EnterCity() {
    return (
        <div>
            {" "}
            <input
                className="input"
                placeholder="Enter a city..."
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={getWeather}
                value={city}></input>
                {typeof  weatherData.main === 'undefined'?(
            <p>Please Enter a city</p>
        </div>)
    );
}

export default EnterCity;
