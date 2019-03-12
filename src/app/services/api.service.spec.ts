import { TestBed, getTestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { TestingModule } from '../../testing/utils';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
    });

    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deleteApi', () => {
    let id: string;
    beforeEach(() => {
      id = 'test_api';
    });

    it('should strip the body key from the response', () => {
      service.deleteApi(id).subscribe((response) => {
        expect(response.hasOwnProperty('body')).toBeFalsy();
      });
      const mockReq = httpMock.expectOne(`${service.url}api/${id}`);

    });

    it('should call the Deete method', () => {
      service.deleteApi(id).subscribe((response) => {
      });
      const mockReq = httpMock.expectOne(`${service.url}api/${id}`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method.toUpperCase()).toBe('DELETE');
    });

  });

});
