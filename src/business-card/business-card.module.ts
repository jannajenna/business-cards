import { Module } from '@nestjs/common';
import { BusinessCardService } from './business-card.service';
import { BusinessCardController } from './business-card.controller';

@Module({
  controllers: [BusinessCardController],
  providers: [BusinessCardService],
})
export class BusinessCardModule {}
