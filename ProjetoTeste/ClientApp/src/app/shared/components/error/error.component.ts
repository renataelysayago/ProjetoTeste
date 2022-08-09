import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';

import { ErrorService } from '@services/error.service';
import { ActivatedRoute } from '@angular/router';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'prnta-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  name: string;

  description: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private location: Location,
    private errorService: ErrorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    zip(this.activatedRoute.data, this.errorService.name, this.errorService.description)
      .pipe(
        map((values) => {
          const data = values[0] as { name: string, description: string};
          const name = data.name || values[1];
          const description = data.description || values[2];

          return { name, description };
        })
      )
      .subscribe({
        next: (data: { name: string, description: string}) => {
          this.name = data.name;
          this.description = data.description;
        }
      });

    // Quando o usuário não tiver nenhum papel no sistema esses elementos não são carregados.
    const sidenav = this.document.getElementById('sidenav-content');
    if (sidenav !== null) sidenav.classList.add('flex');

    const content = this.document.getElementById('content-body');
    if (content !== null) content.classList.add('flex');
  }

  ngOnDestroy(): void {
    const sidenav = this.document.getElementById('sidenav-content');
    if (sidenav !== null) sidenav.classList.remove('flex');

    const content = this.document.getElementById('content-body');
    if (content !== null) content.classList.remove('flex');
  }

  back(): void {
    this.location.back();
  }
}
