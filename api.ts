import axios from "axios";

const whateverFunc = async () => {
    return await "Hello World";
};

whateverFunc()
    .then((res) => {
        console.log(res);
    })
    .catch((e) => console.error(e));
