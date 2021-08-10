import axios from 'axios';

export async function fetchJson(url: string): Promise<String> {

    return axios.get(url)
        .then(response => response.data);

}