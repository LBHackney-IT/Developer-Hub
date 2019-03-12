import { TestBed, getTestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { TestingModule } from '../../testing/utils';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { generateTestApis } from '../../testing/mock-db';
import { IApi } from '../interfaces/IApi';

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

  describe('putApi', () => {
    const api: IApi = generateTestApis(1)[0];

    it('should strip the body key from the response', () => {
      service.putApi(api).subscribe((response) => {
        expect(response.hasOwnProperty('body')).toBeFalsy();
      });
      const mockReq = httpMock.expectOne(`${service.url}api`);

    });

    it('should call the Post method', () => {
      service.putApi(api).subscribe((response) => {
      });
      const mockReq = httpMock.expectOne(`${service.url}api`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method.toUpperCase()).toBe('POST');
    });
  });

  describe('deleteApi', () => {
    const id = 'test_api';

    it('should strip the body key from the response', () => {
      service.deleteApi(id).subscribe((response) => {
        expect(response.hasOwnProperty('body')).toBeFalsy();
      });
      const mockReq = httpMock.expectOne(`${service.url}api/${id}`);

    });

    it('should call the Delete method', () => {
      service.deleteApi(id).subscribe((response) => {
      });
      const mockReq = httpMock.expectOne(`${service.url}api/${id}`);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method.toUpperCase()).toBe('DELETE');
    });
  });

});
