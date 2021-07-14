import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MulterModule } from '@nestjs/platform-express';
import { Candidate } from './candidates/entities/candidate.entity';
import { CandidatesModule } from './candidates/candidates.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Candidate],
      synchronize: process.env.DB_SYNC === 'true',
    }),

    MulterModule.register({
      dest: './uploads',
    }),

    CandidatesModule,
  ],
  controllers: [],
})
export class AppModule {}
