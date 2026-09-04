//================
// Import
//================
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';


//================
// Export
//================
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
