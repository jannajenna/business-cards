
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create_cat.dto';

@Controller('cats')
export class CatsController {

    constructor (private catsService:CatsService){}
    
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
    
@Post()
async create(@Body() createCatDto: CreateCatDto) {
  return await this.catsService.create(createCatDto);
}
}

