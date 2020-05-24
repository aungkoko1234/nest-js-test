import { Test, TestingModule } from '@nestjs/testing';
import { NewbieController } from './newbie.controller';

describe('Newbie Controller', () => {
  let controller: NewbieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewbieController],
    }).compile();

    controller = module.get<NewbieController>(NewbieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
