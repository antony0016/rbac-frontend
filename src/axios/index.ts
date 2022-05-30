import axios from "axios";

const config = {
  baseURL: 'http://localhost:8000'
}

export default axios.create(config)
