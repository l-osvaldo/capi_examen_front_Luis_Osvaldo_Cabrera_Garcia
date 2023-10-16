import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicio/api.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss']
})
export class TablaUsuariosComponent implements OnInit {

  data: any[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.llenarData()
  }

  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data
    })
  }

}
