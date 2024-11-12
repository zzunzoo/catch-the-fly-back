import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecordDto, RankingResponse } from './app.controller';

// 게임 기록을 저장할 인터페이스
interface GameRecord {
  username: string;
  difficulty: string;
  time: number;
}

@Injectable()
export class AppService {
  // 메모리에 기록을 저장할 배열
  private records: GameRecord[] = [];

  createRecord(createRecordDto: CreateRecordDto) {
    this.records.push(createRecordDto);

    return {
      message: 'Record saved successfully',
      data: createRecordDto,
    };
  }

  getRanking(difficulty: string): RankingResponse {
    // 해당 난이도의 기록만 필터링
    const filteredRecords = this.records
      .filter((record) => record.difficulty === difficulty)
      .sort((a, b) => a.time - b.time)
      .slice(0, 5)
      .map((record, index) => ({
        rank: index + 1,
        username: record.username,
        time: record.time,
      }));

    if (filteredRecords.length === 0) {
      throw new NotFoundException(
        'No ranking data found for the specified difficulty',
      );
    }

    return {
      difficulty,
      ranking: filteredRecords,
    };
  }
}
