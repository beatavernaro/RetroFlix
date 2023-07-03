import { Genero } from "../genero/genero";

export interface Filme{
    id: number,
    titulo: string,
    diretor: string,
    duracao: number,
    genero: Genero,
    sinopse: string,
    imagem: string
}