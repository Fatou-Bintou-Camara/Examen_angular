export class Isl {
    
  constructor(public pseudo : string,
              public title : string, 
              public date : Date, 
              public description : string,
              public localisation : string,
              public aime : number,
              public aime_commentaire:number,
              public tab_Commentaire : any[],
              public imageUrl: string){

  }
}
