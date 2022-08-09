import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'historico-versoes',
  templateUrl: './historico-versoes.component.html',
  styleUrls: ['./historico-versoes.component.scss']
})



export class HistoricoVersoesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  getClassTag(tag: string): string {
    if (tag == 'M') {
      return 'tag-melhoria';
    }
    else if (tag == 'N') {
      return 'tag-nova-funcionalidade';
    }
    else if (tag == 'C') {
      return 'tag-correcao-bug';
    }
    return 'tag-nova-funcionalidade'
  }
}
