import { BadRequestException, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CandidatesController } from './candidates.controller';
import { CandidatesService } from './candidates.service';
import { Candidate } from './entities/candidate.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Candidate]),
    MulterModule.register({
      dest: '../../uploads',

      fileFilter: (req, file, cb) => {
        const allowedMimes = [];

        if (allowedMimes.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('Invalid extension'), false);
        }
      },
    }),
  ],
  controllers: [CandidatesController],
  providers: [CandidatesService],
})
export class CandidatesModule {}
