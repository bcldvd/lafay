import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { DriveService } from './drive.service';

let service: DriveService, backend: HttpTestingController;
const mockAppData = {
  pathOfDb: './',
  title: 'test',
  id: 'uuid'
};

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(DriveService);
    backend = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    backend.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('app data', () => {
    it('should get', () => {
      service.getAppData().subscribe(appData => {
        expect(appData).toEqual(mockAppData);
      });

      backend
        .expectOne({
          method: 'GET',
          url: `${service.api}/appdata`
        })
        .flush(mockAppData);
    });

    it('should post', () => {
      const mockLocation = 'mockLocation';
      service.postAppData(mockLocation).subscribe(appData => {
        expect(appData.pathOfDb).toEqual(mockLocation);
      });

      backend
        .expectOne({
          method: 'POST',
          url: `${service.api}/appdata`
        })
        .flush({
          ...mockAppData,
          pathOfDb: mockLocation
        });
    });

    it('should delete', () => {
      service.deleteAppData().subscribe(() => {});

      backend.expectOne({
        method: 'DELETE',
        url: `${service.api}/appdata`
      });
    });
  });

  describe('sheet', () => {
    it('should get specific sheet', () => {
      const sheetId = '123';
      const range = 'A1:C20';
      const mockSheet = { data: 'test' };

      service.getSheet(sheetId, range).subscribe(sheet => {
        expect(sheet).toEqual(mockSheet);
      });

      backend
        .expectOne({
          method: 'GET',
          url: `${service.api}/sheet/${sheetId}?range=${range}`
        })
        .flush(mockSheet);
    });
  });
});
