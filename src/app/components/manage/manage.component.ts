import { StocksService } from './../../services/stocks.service'; 
import { Component }  from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stock: string;

  constructor(private service: StocksService) { 
    this.symbols = this.service.get(); 
  }

  add() { 
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }
}