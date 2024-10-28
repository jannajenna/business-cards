import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BusinessCardService } from './business-card.service';
import { CreateBusinessCardDto } from './dto/create-business-card.dto';
import { UpdateBusinessCardDto } from './dto/update-business-card.dto';

@Controller('business-card')
export class BusinessCardController {
  constructor(private readonly businessCardService: BusinessCardService) {}

  @Post()
  create(@Body() createBusinessCardDto: CreateBusinessCardDto) {
    return this.businessCardService.create(createBusinessCardDto);
  }

  @Get()
  findAll() {
    return this.businessCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessCardService.findOne(+id);
  }

  //@Put(':id')
  //update(@Param('id') id: string, @Body() updateBusinessCardDto: UpdateBusinessCardDto) {
    //return this.businessCardService.update(+id, updateBusinessCardDto);
  //}

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBusinessCardDto: UpdateBusinessCardDto) {
    return this.businessCardService.update(+id, updateBusinessCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessCardService.remove(+id);
  }
}
