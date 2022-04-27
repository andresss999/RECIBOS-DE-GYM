import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Recibo } from 'src/app/models/Recibo';
import { ReciboService } from 'src/app/services/recibo.service';

@Component({
  selector: 'app-listar-recibos',
  templateUrl: './listar-recibos.component.html',
  styleUrls: ['./listar-recibos.component.css']
})
export class ListarRecibosComponent implements OnInit {
  listrecibos: Recibo[] = [];

  constructor(private _reciboService: ReciboService,   
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerrecibos();
  }
obtenerrecibos() {
  this._reciboService.obtenerrecibos().subscribe(doc =>{
    this.listrecibos = [];
    doc.forEach((element: any) => {
      this.listrecibos.push({
        id: element.payload.doc.id,
        ...element.payload.doc.data()
      });   
    });
    console.log(this.listrecibos);
  })
}
eliminarrecibo(id: any) {
  this._reciboService.eliminarrecibo(id).then(() => {
  this.toastr.error('el recibo fue eliminado con exito','Registro Eliminado')
}, error => {
  this.toastr.error('vaya!!', 'algo fallo')
  console.log(error);
})



}}
