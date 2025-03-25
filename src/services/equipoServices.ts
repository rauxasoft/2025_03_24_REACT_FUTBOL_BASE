import axios from "axios";
import { BASE_URL } from "../helper/constantesGlobales";
import { Arbitro } from "../model/arbitro";

const arbitroServices = {

    create:(arbitro: Arbitro) => {

        console.log(arbitro);

        return axios.post(`${BASE_URL}/arbitros`, arbitro, {
            headers: {'Content-Type': 'application/json'}
        });
    },

    getAll: () => {
        return axios.get(`${BASE_URL}/arbitros`);
    }

}

export default arbitroServices