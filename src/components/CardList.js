const CardList = (props) => { 
    return (<div className="flex flex-wrap justify-center">
        {props.data.map((item, index) => {
            return (<div className="flex flex-col justify-center m-2 p-2 border-2 rounded-md" key={index}>
                <div className="flex flex-row justify-center">
                    <img 
                        alt="$(item.breed) $(item.subBreed)"
                        className="h-14 w-14"
                        src={item.img}/>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className="text-center text-l font-extrabold text-gray-900">
                        {item.name}
                    </h2>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className="text-center text-l font-extrabold text-gray-900">
                        {item.breed}
                    </h2>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className="text-center text-l font-extrabold text-gray-900">
                        {item.age}
                    </h2>
                </div>
                <div className="flex flex-row justify-center">
                    <h2 className="text-center text-l font-extrabold text-gray-900">
                        {item.zip_code}
                    </h2>
                </div>
            </div>)
        }
        )}
    </div>)
    
}
export default CardList;