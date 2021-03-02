import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const get = () => apiRequest("get");
const API = {
    get
};
export default API;