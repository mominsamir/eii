import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { EmployemntData } from '../models/employement';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DataService]
    });;
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getGraphicData function', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getGraphicData).toBeTruthy();
   });

   it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: EmployemntData[] = [{
      agrictulture_ratio: 10,
      employed_percent: 10,
      employed_total:10,
      footnotes: '',
      labor_force: 'string',
      nonagriculture_ratio: 10,
      not_in_labor: 10,
      population: 10,
      population_percent: 10,
      unemployed: 10,
      unemployed_percent: 10,
      year: 2020
    },{
      agrictulture_ratio: 10,
      employed_percent: 10,
      employed_total:10,
      footnotes: '',
      labor_force: 'string',
      nonagriculture_ratio: 10,
      not_in_labor: 10,
      population: 10,
      population_percent: 10,
      unemployed: 10,
      unemployed_percent: 10,
      year: 2020
    }];

    service.getGraphicData().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
    });
   });

});

