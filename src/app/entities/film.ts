import { Genre } from "./genre";

export class Film {
    constructor(
        public id:number,
        public titre: string,
        public affiche:string,
        public pays: string,
        public anneeSortie: number,
        public genre:Genre,
        public oscar: boolean,
        public realisateur: string,
        public acteurs:string[] 
        ){}
}
