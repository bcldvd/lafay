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
    it('should get', async done => {
      service.getAppData().subscribe(appData => {
        expect(appData).toEqual(mockAppData);
        done();
      });

      backend
        .expectOne({
          method: 'GET',
          url: `${service.api}/appdata`
        })
        .flush(mockAppData);
    });

    it('should post', async done => {
      const mockLocation = 'mockLocation';
      service.postAppData(mockLocation).subscribe(appData => {
        expect(appData.pathOfDb).toEqual(mockLocation);
        done();
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
    it('should get specific sheet', async done => {
      const sheetId = '123';
      const range = 'A1:C20';
      const mockSheet = { data: 'test' };

      service.getSheet(sheetId, range).subscribe(sheet => {
        expect(sheet).toEqual(mockSheet);
        done();
      });

      backend
        .expectOne({
          method: 'GET',
          url: `${service.api}/sheet/${sheetId}?range=${range}`
        })
        .flush(mockSheet);
    });

    it('should provide default range if not set', async done => {
      const sheetId = '123';
      const range = 'A1:C20';
      const mockSheet = { data: 'test' };

      service.getSheet(sheetId).subscribe(sheet => {
        expect(sheet).toEqual(mockSheet);
        done();
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
