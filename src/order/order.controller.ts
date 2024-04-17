import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() createOrderDto: any) {
    return this.orderService.create(createOrderDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log('id', id);
    return this.orderService.findOne(id);
  }

  @Delete(':id')
  async cancel(@Param('id') id: string) {
    return this.orderService.cancel(id);
  }
}
