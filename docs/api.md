아래는 작성한 PRD를 기반으로 필요한 API 명세서입니다. 각 API의 기능과 사용법, 요청 및 응답 형식 등을 포함합니다.

API 명세서
Base URL: https://port-0-catch-the-fly-back-m3ecukr559d1a7ca.sel4.cloudtype.app

1. 유저 기록 저장 API
   유저가 파리 잡는 데 걸린 시간을 기록합니다. 유저 이름, 걸린 시간, 난이도를 서버에 저장합니다.

URL: /api/record

Method: POST

Request Headers: Content-Type: application/json

Request Body:

json
코드 복사
{
"username": "string", // 유저 이름
"difficulty": "string", // 난이도 (예: "Easy", "Medium", "Hard")
"time": "number" // 파리 잡는데 걸린 시간 (초 단위)
}
Response:

Status Code: 201 Created (성공 시)

Body:

json
코드 복사
{
"message": "Record saved successfully",
"data": {
"username": "string",
"difficulty": "string",
"time": "number"
}
}
Status Code: 400 Bad Request (요청 데이터가 올바르지 않을 시)

Body:

json
코드 복사
{
"error": "Invalid request data"
} 2. 난이도별 랭킹 조회 API
특정 난이도에서 현재 1위부터 5위까지의 기록을 조회합니다.

URL: /api/ranking/:difficulty

Method: GET

Path Parameters:

difficulty (string) — 조회할 난이도 (예: Easy, Medium, Hard)
Response:

Status Code: 200 OK (성공 시)

Body:

json
코드 복사
{
"difficulty": "string",
"ranking": [
{
"rank": 1,
"username": "string",
"time": "number"
},
{
"rank": 2,
"username": "string",
"time": "number"
},
{
"rank": 3,
"username": "string",
"time": "number"
},
{
"rank": 4,
"username": "string",
"time": "number"
},
{
"rank": 5,
"username": "string",
"time": "number"
}
]
}
Status Code: 404 Not Found (해당 난이도의 기록이 없을 시)

Body:

json
코드 복사
{
"error": "No ranking data found for the specified difficulty"
}
에러 응답 예시
500 Internal Server Error (서버 에러 발생 시)

json
코드 복사
{
"error": "Internal server error"
}
