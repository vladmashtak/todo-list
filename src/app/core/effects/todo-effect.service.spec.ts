import { TestBed, inject } from '@angular/core/testing';

import { TodoEffectService } from './todo-effect.service';

describe('TodoEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoEffectService]
    });
  });

  it('should be created', inject([TodoEffectService], (service: TodoEffectService) => {
    expect(service).toBeTruthy();
  }));
});
