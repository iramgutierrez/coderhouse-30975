import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Cat } from './cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDTO } from './create-cat.dto';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  async findAll(@Query() params): Promise<Cat[]> {
    console.log(params);
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() payload: CreateCatDTO) {
    return this.catsService.create(payload);
  }
}
