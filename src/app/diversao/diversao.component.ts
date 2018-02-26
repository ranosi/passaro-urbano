import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/model.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {
  public oferta: Oferta[];

  constructor(private ofertasService: OfertasService) {  }

  ngOnInit() {
    this.ofertasService.getOfertasCatergoria('diversao')
      .then((ofertas: Oferta[]) => this.oferta = ofertas)
  }

}
