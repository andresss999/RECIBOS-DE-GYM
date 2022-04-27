import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Recibo } from 'src/app/models/Recibo';
import { ReciboService } from 'src/app/services/recibo.service';

@Component({
  selector: 'app-crear-recibos',
  templateUrl: './crear-recibos.component.html',
  styleUrls: ['./crear-recibos.component.css']
})
export class CrearRecibosComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder,
    private _reciboService: ReciboService,
    private toastr: ToastrService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      numeroderecibo: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      monto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(6)]], //agrege esta
      fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      contraseña: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(6)]],
    })
   }

  ngOnInit(): void {
  }

  crearRecibos() {
    const TARJETA: Recibo = {
      usuario: this.form.value.usuario,
      numeroderecibo: this.form.value.numeroderecibo,
      monto: this.form.value.monto,
      fechaExpiracion: this.form.value.fechaExpiracion,
      contraseña: this.form.value.contraseña,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }
    
    this.loading = true;
    this._reciboService.guardarRecibo(TARJETA).then(() => {
      this.loading = false;
      console.log('recibo registrado')
      this.toastr.success('el recibo fue registrado con exito', 'tarjeta registrada')
      this.form.reset()
    }, error => {
      this.loading = false;
      this.toastr.error('rayos..', 'ocurrio un error')
      console.log(error);
    })
  }
}