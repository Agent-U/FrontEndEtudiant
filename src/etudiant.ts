export class Etudiant{
    constructor(
       public ine:any, 
       public nom:string, 
       public prenom:string, 
       public mail:string,
       public motDePasse:string,
       public petiteEnveloppe:number,
       public grandeEnveloppe:number,
       public avisPassage:number,
       public colis:number,
       public chambre:string,
       public incidents : any,
       public rendezVous : any

    ){}
}