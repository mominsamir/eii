import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/services/data.service';

import { Graphic2Component } from './graphic2.component';

describe('Graphic2Component', () => {
  let component: Graphic2Component;
  let service: DataService;
  let fixture: ComponentFixture<Graphic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ Graphic2Component ]
    })
    .compileComponents();
    service = TestBed.get(DataService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
