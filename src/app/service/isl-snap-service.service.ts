import { Injectable } from '@angular/core';
import {Isl} from "../model/Isl.model";

@Injectable({
  providedIn: 'root'
})
export class IslSnapServiceService {
  pub : Isl[] =
  [
      {
    pseudo :"pendaG8",
    title : "motivation",
    date : new Date(),
    description : "votre motivation du jour",
    localisation : "rufisque",
    aime : 4,
        aime_commentaire:4,
    tab_Commentaire : [],
   imageUrl : "https://upload.wikimedia.org/wikipedia/commons/0/09/Motivation-arrows.jpg"
   },
   {
     pseudo :"Malick_98",
    title : "outils digitaux",
    date : new Date(),
    description : "utilisation des outils digitaux dans les études informatiques et marketing",
    localisation : "Mermoz",
    aime : 0,
     aime_commentaire:4,

     tab_Commentaire : [],
   imageUrl : "https://f.hellowork.com/obs-static-images/seo/ObsJob/social-media-manager.jpg"

   },
   {
   pseudo : "chantal_diaw",
    title : "Le metier de Journalisme",
    date :   new Date(),
    description : "partons à la decouverte du metier de journalisme : formation, diplomes et milieu professionnelle",
    localisation :  "Zone A",
    aime :  3,
     aime_commentaire:4,
     tab_Commentaire :  [],
   imageUrl : "https://www.iscpa-ecoles.com/files/2018/03/journalisme.jpg"
   },


        {

         pseudo :  "DGipd_lofficiel",
         title : "les cours à l'ipd",
         date :  new Date(),
         description :  "les heures de cours theoriques et pratiques",
         localisation :   "Liberte 6",
         aime :  2,
          aime_commentaire:4,
          tab_Commentaire : [],
        imageUrl : "https://amadousow.files.wordpress.com/2011/11/leegui-legui.jpg"
        },

      {
       pseudo : "Mouhamed_ali",
       title :   "l'éducation numérique ",
       date :  new Date(),
       description :  "revue de l'impact de l'education numerique dans les enseignements superieurs en Afrique",
       localisation :  "Malika",
       aime :  6,
        aime_commentaire:4,
        tab_Commentaire :  [],
      imageUrl :   "https://digital.mondoblog.org/files/2017/06/enseignement-numerique-500x330-c-default.jpg"
      },

      {

       pseudo :  "Ahmed_Seck",
       title : " le programme de management ",
       date : new Date(),
       description : "Le programme de management à l'ipd ",
       localisation :  "Bambilor",
       aime :  1,
        aime_commentaire:4,
        tab_Commentaire :[],
      imageUrl :  "http://ipd.sn/wp/wp-content/uploads/2014/09/DSC_1284-2.jpg"

      },
      {
       pseudo : "sali447",
       title :  " Journée don de sang ",
       date : new Date(),
       description :  "les images de la Journée dédiée au don de sang à l'ipd ",
       localisation : "Liberté 6",
       aime :  59,
        aime_commentaire:4,
        tab_Commentaire : [],
      imageUrl :  "http://ipd.sn/wp/wp-content/uploads/2014/08/Capture-d%E2%80%99%C3%A9cran-2020-08-05-%C3%A0-21.38.59-350x245.png"
      },
      {
       pseudo :"MamadouS7",
       title : " présentatin des éleves en informatique ",
       date :  new Date(),
       description : "les informaticiens de la licence 1 informatique de l'ipd ",
       localisation :   "Liberté 6",
       aime :     19,
        aime_commentaire:4,
        tab_Commentaire : [],
      imageUrl :  "http://ipd.sn/wp/wp-content/uploads/2019/07/STI2-Squirrelmail-Projet%F0%9F%94%A5-20190707_131121.jpg"

      },
      {
       pseudo : "Mamadou_Sow",
       title : " Du nouveau à l'ipd ! ",
       date : new Date(),
       description : "les filieres proposées à l'ipd ont augmentés cette année avec l'insertion des enseignements en électronique ",
       localisation :  "Liberté 6",
       aime :  19,
        aime_commentaire:4,
        tab_Commentaire :  [],
      imageUrl : "http://ipd.sn/wp/wp-content/uploads/2014/08/WhatsApp-Image-2019-04-12-at-16.24.08-2.jpeg"

      },
      {
       pseudo : "bibiche76",
       title :  " Les actions social à l'ipd ! ",
       date : new Date(),
       description : "journée don de sang 4ieme édition",
       localisation :  "Liberté 6",
       aime : 1,
        aime_commentaire:4,
        tab_Commentaire :  [],
      imageUrl : "http://ipd.sn/wp/wp-content/uploads/2014/08/WhatsApp-Image-2019-04-12-at-16.24.05.jpeg"
      },

       {

         pseudo :  "Vincent_B",
         title :  " Les differentes filieres à l'ipd ! ",
         date :  new Date(),
         description :     "présentation des différentes filières de l'ipd",
         localisation :    "Liberté 6",
         aime :    16,
         aime_commentaire:4,
         tab_Commentaire :  [],
        imageUrl : "https://cursus.edu/storage/thumbnails/diuUWxbFNFmjzlMSd00AxKrP6RA5ULFJdNho9C8U.png"
       },
   {
     pseudo : "fatouGT",
     title : " Ouverture à l'ipd ! ",
     date :  new Date(),
     description :   "ouverture à l'ipd pour l'année 2021-2022",
     localisation :  "Grand yoff",
     aime : 11,
     aime_commentaire:4,
     tab_Commentaire :  [],
    imageUrl : "http://ipd.sn/wp/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-05-at-18.57.21.jpeg"

   },

   {
     pseudo : "diadia",
     title :  " Les contacts de l'ipd ! ",
     date : new Date(),
     description : "Les contacts de l'ipd pour plus d'informations sur les formations qu'il propose",
     localisation : "yoff",
     aime :  1,
     aime_commentaire:4,
     tab_Commentaire : [],
    imageUrl : "https://im.qccdn.fr/node/nous-contacter-42652/principal-25168.jpg"

   },
    {
     pseudo : "fanta_sidibe",
     title :  " les opportinuites à l'ipd  ! ",
     date :  new Date(),
     description : "les opportinutes ",
     localisation :    "Ouakam",
     aime :  9,
      aime_commentaire:4,
      tab_Commentaire :  [],
    imageUrl :  "https://amadousow.files.wordpress.com/2011/11/igp7403.jpg"
    },
    {
     pseudo :  "Aliou70",
     title : " les formations de l'ipd  ! ",
     date :  new Date(),
     description :   "diverses formations proposées par l'ipd ",
     localisation :  "almadies",
     aime : 6,
      aime_commentaire:4,
      tab_Commentaire :[],
    imageUrl : "http://www.cerfi.ch/Htdocs/Images/Pictures/puid_e2ad9412-cca4-4eaf-961c-570cf0f342eb_3354.jpg"

    },
    {
     pseudo :"papi_fall",
     title : "ouverture à l'international ! ",
     date :    new Date(),
     description : "ouverture à l'international ! ",
     localisation :  "liberte 6",
     aime : 8,
      aime_commentaire:4,
     tab_Commentaire :[],
    imageUrl : "http://medecine.umontreal.ca/wp-content/uploads/sites/8/international.jpg"
    },
    {
     pseudo :  "demba_guisse",
     title :  "motivation de l'etudiant  ",
     date :     new Date(),
     description :  "une bonne raison de continuer vos études",
     localisation :    "parcelles",
     aime :    9,
     tab_Commentaire : [] ,
      aime_commentaire:4,
    imageUrl :  "https://ncd.eanocookie.com/image/eaimages/blog_gallery/motivation-personnel_93d00888df.jpg"

    },
    {
     pseudo : "fana_mbaye",
     title : "changement de l'environnement de l'institut",
     date :   new Date(),
     description : "changement de l'environnement de l'institut : espace verte",
     localisation :   "patte d'oie",
     aime :  3,
     tab_Commentaire : [],
      aime_commentaire:4,
    imageUrl : "http://ipd.sn/wp/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-05-at-19.35.55.jpeg"
    },
    {
     pseudo : "fana_cisse",
     title :  " recrutement des étudiants aprés leurs formations",
     date : new Date(),
     description :  "trouver de l'emploie aprés les études universitaires",
     localisation : "Foire",
     aime :  9,
     tab_Commentaire :[],
      aime_commentaire:4,
    imageUrl : "https://www.dynamique-mag.com/wp-content/uploads/b9ccff8160a7ccf7b1356f445935f1cf.jpg"

    },

    {
     pseudo : "jalyBD",
     title :  " les diplomés de l'année 2020-2021",
     date : new Date(),
     description :   "Soutenance des éleves de la licence 3 en Transport Logistique",
     localisation : "Liberte 6",
     aime :  14,
     tab_Commentaire :  [],
      aime_commentaire:4,
    imageUrl : "http://ipd.sn/wp/wp-content/uploads/2019/07/FB_IMG_1513515683263-169x300.jpg",
    }
  ];
  getAllSnap()
{
  return this.pub;
}
  constructor() { }

}
