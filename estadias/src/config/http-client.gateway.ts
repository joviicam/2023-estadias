import { AxiosRequestConfig } from 'axios';
import AxiosClient from './axios';
//Es como el DAO de java pero para el frontend
export default {
    doGet (endPoint : string) {
        return AxiosClient.get(endPoint);
    },
    doPost(endPoint : string, object : object, config? : AxiosRequestConfig){
        return AxiosClient.post(endPoint, object, config);
    }
}