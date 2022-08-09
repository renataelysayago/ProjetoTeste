import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialModule } from '@modules/material.module';
import { of } from 'rxjs';

import { ErrorComponent } from './error.component';

describe('ErrorComponentComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      imports: [HttpClientTestingModule, MaterialModule],
      providers: [
        { provide: Router, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({}),
            paramMap: of({})
          }
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
