import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CandidateBodyDto {
  @Type(() => Number)
  @IsNotEmpty()
  @IsInt()
  @Max(7)
  @Min(0)
  step: number;
}
