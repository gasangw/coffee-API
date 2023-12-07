import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Ugandan Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'caramel'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    return this.coffees.find((coffee) => coffee.id === parseInt(id));
  }
}
