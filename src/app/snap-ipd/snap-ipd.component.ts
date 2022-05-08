import { Component, Input, OnInit } from '@angular/core';
import { Isl } from '../model/Isl.model';

@Component({
  selector: 'app-snap-ipd',
  templateUrl: './snap-ipd.component.html',
  styleUrls: ['./snap-ipd.component.scss']
})
export class SnapIpdComponent implements OnInit {
  @Input() pendaG8 !: Isl;
  buttonText !: string;
  clement=true;
  i="";
  tab!:any[];
  tabValue!:any[];
  
 

  constructor() { }

  ngOnInit(): void {
   
      this.buttonText = "like";

  }
  onAddlike() : void {
    if(this.buttonText == "like")
    {
      this.pendaG8.aime++;
      this.buttonText = "Dislike";
    }
    else
    {this.pendaG8.aime--;
    this.buttonText = "like"
    }
}

onAddLikeCommentaire(){

    if (this.clement){
      this.clement=false;
      this.pendaG8.aime_commentaire++;
    } else{
      this.clement=true;
        this.pendaG8.aime_commentaire--;

    }

}

addCommentaire(){

  this.pendaG8.tab_Commentaire.push({text:"value"});
  this.tab = this.pendaG8.tab_Commentaire ;
}

}
