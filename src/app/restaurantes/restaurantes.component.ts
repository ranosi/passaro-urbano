import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/model.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public oferta: Oferta[]

  constructor(public ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasCatergoria('restaurante')
      .then((ofertas:Oferta[]) => {
        this.oferta = ofertas;
      })
  }

}
