import axios from "axios";

const BASE_URL = "http://localhost:3000"

export class LivrosService{
    static getLivros(){
        return axios.get(BASE_URL+'/api/listar');
    }

    static getLivro(id){
        return axios.get(`${BASE_URL}/api/listar/${id}`);
    }

    static createLivro(body){
        return axios.post(`${BASE_URL}/api/cadastrar`,body);
    }

    static updateLivro(id,body){
        return axios.patch(`${BASE_URL}/api/editar/${id}`,body);
    }

    static deleteLivro(id){
        return axios.delete(`${BASE_URL}/api/deletar/${id}`);
    }
    
}