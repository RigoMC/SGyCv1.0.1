import { Component, OnInit } from '@angular/core';
import { Material } from "../../../../interfaces/material.interface";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  material:Material = {
    nombre: "",
    descripcion: "",
    cantidad: "",
    unidad: "",
    gastoUnidad: ""
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.material);
  }
}
