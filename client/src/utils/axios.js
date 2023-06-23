import axios from "axios"
import { baseUserUrl } from "./constUrls"

const instance = axios.create({
    baseURL: baseUserUrl,
  });

  export default instance;
