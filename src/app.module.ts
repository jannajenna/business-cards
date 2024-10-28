import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './Cats/cats.module';
import { BusinessCardModule } from './business-card/business-card.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/business-cards'),
    CatsModule,
    BusinessCardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
