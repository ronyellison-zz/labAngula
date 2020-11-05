import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public contador = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public contarClick(){
    this.contador = this.contador+1;
  }

  public zeraContador(){
    this.contador =0;
  }

}
