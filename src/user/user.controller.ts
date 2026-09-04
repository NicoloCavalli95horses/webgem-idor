//================
// Import
//================
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';


//================
// Controller class
//================
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  find() {
    return this.userService.getData();
  }
}
