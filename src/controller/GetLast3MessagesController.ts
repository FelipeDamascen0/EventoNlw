import { Request, Response } from 'express';
import { GetLast3MessagesServices } from '../services/GetLast3MessagesService';

class Get3LastMessagesController{
  async handle(request: Request, response: Response){
    const service = new GetLast3MessagesServices();
    const result  = await service.execute();

    return response.json(result);
  }
}

export {  Get3LastMessagesController };