import { Test, TestingModule } from '@nestjs/testing';
import { BusinessCardController } from './business-card.controller';
import { BusinessCardService } from './business-card.service';

describe('BusinessCardController', () => {
  let controller: BusinessCardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessCardController],
      providers: [BusinessCardService],
    }).compile();

    controller = module.get<BusinessCardController>(BusinessCardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
