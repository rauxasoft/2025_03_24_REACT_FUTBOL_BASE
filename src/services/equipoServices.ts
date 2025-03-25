import axios from "axios";
import { BASE_URL } from "../helper/constantesGlobales";

const equipoServices = {

    getAll: () => {
        return axios.get(`${BASE_URL}/equipos`);
    }

}

export default equipoServices