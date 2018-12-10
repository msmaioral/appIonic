import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MoovieProvider
]
})
export class FeedPage {


  public objeto_feed = {
     nome:"Marty",
     data:"November 5, 1955",
     descricao:"Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
     qntd_likes:"12 Likes",
     qntd_comments:"4 Comments",
     time_comment:"11h ago"
  }
  public lista_filmes = new Array<any>();

  public nomeUsuario:string ="Charles França do Codigo";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoovieProvider 
    ){
  }
  
  public soma(num1:number , num2:number):void {
  alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        
      },error=>{
        console.log(error);
      }
    );
  }

}
