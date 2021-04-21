import { Test, TestingModule } from '@nestjs/testing';
import { LocaleLabelController } from './locale-label.controller';

describe('LocaleLabelController', () => {
  let controller: LocaleLabelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocaleLabelController],
    }).compile();

    controller = module.get<LocaleLabelController>(LocaleLabelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
