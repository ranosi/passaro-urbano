import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ordem-sucesso-compra',
  templateUrl: './ordem-sucesso-compra.component.html',
  styleUrls: ['./ordem-sucesso-compra.component.css']
})
export class OrdemSucessoCompraComponent implements OnInit {

  @Input() public idPedidoCompra: number;

  constructor() { }

  ngOnInit() {
  }

}
