import { Injectable } from '@nestjs/common';
import { CreateBusinessCardDto } from './dto/create-business-card.dto';
import { UpdateBusinessCardDto } from './dto/update-business-card.dto';

@Injectable()
export class BusinessCardService {
  create(createBusinessCardDto: CreateBusinessCardDto) {
    return 'This action adds a new businessCard';
  }

  // /cards

  findAll() {
    return `This action returns all businessCard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessCard`;
  }

  update(id: number, updateBusinessCardDto: UpdateBusinessCardDto) {
    return `This action updates a #${id} businessCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessCard`;
  }
}
