import { Test, TestingModule } from '@nestjs/testing';
import { NewbieService } from './newbie.service';

describe('NewbieService', () => {
  let service: NewbieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewbieService],
    }).compile();

    service = module.get<NewbieService>(NewbieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
