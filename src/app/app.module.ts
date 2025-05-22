import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'senha_master',
    database: 'hotel_manager',
    autoLoadEntities: true,
    synchronize: true,
  }),
    HotelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
