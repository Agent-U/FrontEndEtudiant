export class Incident{
    constructor(
        public id:number, 
        public date:string, 
        public motif:string,
        public imageUrl:any,
        public etat:number,
        public lieu:string,
        public description : string,
        public etudiant:any
    ){}
}