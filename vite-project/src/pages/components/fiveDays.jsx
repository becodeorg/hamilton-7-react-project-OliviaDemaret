function FiveDays() {
    return (
        <div className="weatherDays flex flex-col w-full justify-center mt-2 mb-2 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
            <div className="days flex flex-col my-2">
                <img></img>
                <p className="self-center">C°</p>
                <p className="self-center">jour</p>
            </div>{" "}
            <div className="days flex flex-col my-2">
                <img></img>
                <p className="self-center">C°</p>
                <p className="self-center">jour</p>
            </div>{" "}
            <div className="days flex flex-col my-2">
                <img></img>
                <p className="self-center">C°</p>
                <p className="self-center">jour</p>
            </div>{" "}
            <div className="days flex flex-col my-2">
                <img></img>
                <p className="self-center">C°</p>
                <p className="self-center">jour</p>
            </div>{" "}
            <div className="days flex flex-col mt-2 mb-7">
                <img></img>
                <p className="self-center">C°</p>
                <p className="self-center">jour</p>
            </div>
        </div>
    );
}
export default FiveDays;
