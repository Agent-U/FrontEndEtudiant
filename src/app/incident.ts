export class Incident{
    constructor(
        public id:number, 
        public date:string, 
        public motif:string,
        public images:any,
        public etats:number,
        public lieu:string,
        public etudiant:any
    ){}
}