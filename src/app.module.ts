import { Module } from '@nestjs/common';
import mongoConfig from './config/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      useFactory: mongoConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
