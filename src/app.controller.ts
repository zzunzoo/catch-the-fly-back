import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

// DTO 정의
export class CreateRecordDto {
  username: string;
  difficulty: string;
  time: number;
}

// 응답 인터페이스 정의
export interface RankingResponse {
  difficulty: string;
  ranking: {
    rank: number;
    username: string;
    time: number;
  }[];
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('api/record')
  createRecord(@Body() createRecordDto: CreateRecordDto) {
    return this.appService.createRecord(createRecordDto);
  }

  @Get('api/ranking/:difficulty')
  getRanking(@Param('difficulty') difficulty: string): RankingResponse {
    return this.appService.getRanking(difficulty);
  }
}
