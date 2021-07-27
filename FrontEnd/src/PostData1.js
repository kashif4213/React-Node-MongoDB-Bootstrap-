import axios from "axios"

function  PostData1(params){
    return axios({
        method:"POST",url :"http://localhost:3000/postData", data:params.values
    })
}




export default {PostData1} ;