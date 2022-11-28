function Today({weatherData}) {
    console.log(weatherData);
    return (
        <div className="weatherToday flex flex-col m-auto">
            <h1 className="mb-3 mt-7 self-center uppercase">Nom de la ville</h1>
            <h2 className="my-2 self-center">Pays</h2>
            <h1 className="my-2 self-center uppercase">température</h1>
            <h2 className="mt-3 mb-7 self-center">temps</h2>
        </div>
    );
}
export default Today;
