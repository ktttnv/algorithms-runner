import { Test, TestingModule } from '@nestjs/testing';
import { AlgoController } from './algo.controller';

describe('AlgoController', () => {
  let controller: AlgoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlgoController],
    }).compile();

    controller = module.get<AlgoController>(AlgoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
