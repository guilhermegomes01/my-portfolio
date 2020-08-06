import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1'
})

export const apiSecretaria = axios.create({
    baseURL: 'https://brasil.io/api/dataset/covid19/caso'
});