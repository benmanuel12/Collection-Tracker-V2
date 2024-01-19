import axios from 'axios'

const API_URL = 'http://localhost:8080'

class UnitDataService {

    retrieveAllUnits() {
        return axios.get(`${API_URL}/units`);
    }

    retrieveUnit(id) {
        return axios.get(`${API_URL}/units/${id}`);
    }

    deleteUnit(id) {
        //console.log('executed service')
        return axios.delete(`${API_URL}/delete/${id}`);
    }
}

export default new UnitDataService()