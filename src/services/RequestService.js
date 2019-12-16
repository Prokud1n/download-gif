import axios from "axios";
import {APIPICTURE} from "../constants/url";

export default class apiClient {
    static getPicture = async () => {
        try {
            const response = await axios.get(APIPICTURE);
            console.log(response);
            return response.data;
        } catch (error) {
            throw new Error(error);
        }
    }
}