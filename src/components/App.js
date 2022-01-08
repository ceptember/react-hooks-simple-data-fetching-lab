import React, {useState, useEffect} from "react"; 

function App (){

    const [doggo, setDoggo] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect( () => {
        
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(data => {
                setDoggo(data.message);
                setIsLoaded(true);
            })
                
    }, [])

    return <div>
                {!isLoaded ? <p>Loading...</p> : <img alt="A Random Dog." src={doggo} />}
                
            </div>
}

export default App; 