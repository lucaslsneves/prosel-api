import {
  Body,
  Controller,
  Get,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('candidate')
export class CandidatesController {
  @Get()
  @UseInterceptors(AnyFilesInterceptor())
  create(
    @Body() body: any,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ): any {
    return {
      files,
      step: body.step,
    };
  }
}
