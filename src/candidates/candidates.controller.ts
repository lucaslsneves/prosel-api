import {
  Body,
  Controller,
  Get,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CandidatesService } from './candidates.service';
import { CandidateBodyDto } from './dto/candidate-body.dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Get()
  @UseInterceptors(AnyFilesInterceptor())
  create(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() body: CandidateBodyDto,
  ): any {
    console.log(body);
  }
}
