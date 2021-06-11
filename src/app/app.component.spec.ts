import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {Location} from '@angular/common';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Graphic1Component } from './components/graphic1/graphic1.component';
import { Graphic2Component } from './components/graphic2/graphic2.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { routes } from './app-routing.module';

describe('AppComponent', () => {
  let service: DataService;
  let httpClient: HttpClient;
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        [RouterTestingModule.withRoutes(routes)],HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        Graphic1Component,
        Graphic2Component
      ],
      providers: [DataService,HttpClient]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location); 
    service = TestBed.inject(DataService);
    httpClient = TestBed.inject(HttpClient);


    fixture = TestBed.createComponent(AppComponent); 
    router.initialNavigation(); 
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'eii'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('eii');
  });

  it('navigate to "" redirects you to home component', fakeAsync(() => {
    router.navigate(['']); 
    tick(); 
    expect(location.path()).toBe('/'); 
  }));


  it('navigate to "/graphic1" redirects you to Graphic 1 component', fakeAsync(() => {
    router.navigate(['graphic1']); 
    tick(); 
    expect(location.path()).toBe('/graphic1'); 
  }));

  it('navigate to "/graphic2" redirects you to Graphic 2 component', fakeAsync(() => {
    router.navigate(['graphic2']); 
    tick(); 
    expect(location.path()).toBe('/graphic2'); 
  }));


});
