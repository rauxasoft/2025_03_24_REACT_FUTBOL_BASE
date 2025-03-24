import axios from "axios";
import { BASE_URL } from "../helper/constantesGlobales";


const partidoServices = {

    getAll: () => {
        return axios.get(`${BASE_URL}/partidos`);
    }

}

export default partidoServices