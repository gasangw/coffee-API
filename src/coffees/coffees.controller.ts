import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this returns coffee with id of ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this updates coffee with id of ${id} with the body ${body}`;
  }

  @Delete(':id')
  removeCoffee(@Param('id') id: string) {
    return `this removes coffee with id of ${id}`;
  }
}
