import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Genero } from '../genero';



const dadosTabela: Genero[] = [
  { id: 1, nome: 'Ação'},
  { id: 2, nome: 'Aventura'},
  { id: 3, nome: 'Terror'}

];

@Component({
  selector: 'app-listar-generos',
  templateUrl: './listar-generos.component.html',
  styleUrls: ['./listar-generos.component.css']
})


export class ListarGenerosComponent {
  displayedColumns: string[] = ['id', 'nome', 'quantidade'];
  dataSource = dadosTabela;

}
