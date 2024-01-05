import { Controller, Get } from '@nestjs/common';
import { GrpcServerService } from './grpc-server.service';
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class GrpcServerController {
  constructor(private readonly grpcServerService: GrpcServerService) {}

  @Get()
  getHello(): string {
    return this.grpcServerService.getHello();
  }

  @GrpcMethod('BookService', 'FindBook')
  findOne(data: {id: number}) {
    const items = [
      {id:1,name:'front end 1', desc:'test1'},
      {id:2,name:'back end 2', desc:'test222'}
    ]
    return items.find(({id})=> id === data.id)
  }

}
