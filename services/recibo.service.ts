import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { Recibo } from '../models/Recibo';
//import { AngularFirestore } from '@angular/fire/firestore';
//import { Component, OnInit } from '@angular/core';
//import { Recibo } from '../models/Recibo';

@Injectable({
  providedIn: 'root'
})
export class ReciboService {
   private recibos$ = new Subject<any>();


  constructor(private firebase: AngularFirestore) { }

 guardarRecibo(recibo: Recibo): Promise<any> {
  return this.firebase.collection('recibos').add(recibo);
  } 
obtenerrecibos(): Observable<any> {
  return this.firebase.collection('recibos',ref => ref.orderBy('fechaCreacion','asc')).snapshotChanges();
}
eliminarrecibo(id: string): Promise<any> {
  return this.firebase.collection('recibos').doc(id).delete();
}
addreciboEdit(recibo: Recibo) {
  this.recibos$.next(recibo);

}}


