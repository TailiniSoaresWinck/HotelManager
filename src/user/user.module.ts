import { Module } from '@nestjs/common';
import { UserLevelService } from './user-level.service';
import { UserService } from './user.service';

@Module({
  providers: [UserLevelService, UserService],
})
export class UserModule {}
