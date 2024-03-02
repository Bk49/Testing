import axios from "axios";

const whateverFunc = async () => {
    const result = await axios.get("https://api.api-ninjas.com/v1/airports", {headers: {
        "X-Api-Key": "YOURAPIKEY" 
    }});

    return result.data;
};

whateverFunc()
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.error(e));
