import { Test, TestingModule } from '@nestjs/testing';
import { LocaleLabelService } from './locale-label.service';

describe('LocaleLabelService', () => {
  let service: LocaleLabelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocaleLabelService],
    }).compile();

    service = module.get<LocaleLabelService>(LocaleLabelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
