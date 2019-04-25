import axios from 'axios';
//import queryString from 'query-string';

//await axios.get("http://localhost:8076/commute/search")
//await axios.get("http://localhost:8076/commute/list/1")
export const getTableList = () => axios.get("http://localhost:8076/commute/list/1");
//export const getTableList = (search) => axios.get(`http://localhost:8076/commute/search/?${queryString.stringify(search)}`);