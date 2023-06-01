import axios, { AxiosInstance } from 'axios';// import axios from 'axios'

const SERVER_URL= process.env.VUE_APP_BASE_URL || 'http://localhost:3000';

//Axios es una libreria que permite hacer llamadas a servicios web de manera sencilla
// crear la instancia de axios para usarla en toda la aplicacion
const instance : AxiosInstance = axios.create({
    baseURL: SERVER_URL,
    timeout: 30_000, // 30 seconds
});

export default instance;//exportar la instancia de axios para usarla en otros archivos