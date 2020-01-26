import { TestBed } from '@angular/core/testing';
import { LafayService } from './lafay.service';

let service: LafayService;

describe('LafayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = TestBed.get(LafayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get exercise', () => {
    expect(service.getExercise(0).id).toBe(0);
  });

  it('should get level', () => {
    expect(service.getLevel(0).id).toBe(0);
  });
});
