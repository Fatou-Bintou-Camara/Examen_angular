import { Component, OnInit } from '@angular/core';
import { Isl } from './model/Isl.model';
import { SnapIpdComponent } from './snap-ipd/snap-ipd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pub !: Isl[];
  
  title = 'Ipd Social Link';
  ngOnInit(): void {

  }
}


/*
this.publication = new Isl ("pendaG8",
    "motivation",
     new Date(),
     "votre motivation du jour",
     "Rufisque",
       4,
      [],
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Motivation-arrows.jpg",
    );
     this.partage = new Isl ("Malick_98",
    "outils digitaux",
     new Date(),
     "utilisation des outils digitaux dans les études informatiques et marketing",
     "Mermoz",
       0,
      [],
      "https://f.hellowork.com/obs-static-images/seo/ObsJob/social-media-manager.jpg",
    );


this.pseudo="pendaG8";
this.title = "motivation";
this.date = new Date();
this.description = "votre motivation du jour"
this.localisation = "rufisque"
this.aime = 4;
this.tab_Commentaire = [];
this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/09/Motivation-arrows.jpg";
this.buttonText = "Like";
 <app-snap-ipd [pendaG8]="publication"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="partage"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="experience"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="cours"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="numerique"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="programme"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="evenement"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="presentation"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="nouveaute"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="social"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="filiere"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="information"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="contact"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="opportinutes"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="formation"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="ouverture"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="motivation"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="changement"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="recrutement"></app-snap-ipd>
      <app-snap-ipd [pendaG8]="diplome"></app-snap-ipd>

*/
