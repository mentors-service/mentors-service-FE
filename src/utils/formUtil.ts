export const FormErrorMessages = {
  MAX_LENGTH: '너무 깁니다.',
  MIN_LENGTH: '너무 짧습니다.',
  NAME: '제목 형식에 맞지 않습니다.',
  NAME_REQUIRED: '제목은 필수입니다.',
  PLACE: '장소 형식에 맞지 않습니다.',
  PLACE_REQUIRED: '장소는 필수입니다.',
  TAG: '태그 형식에 맞지 않습니다.',
  TAG_REQUIRED: '태그는 필수입니다.',
  SCHEDULE: '일정 형식에 맞지 않습니다.',
  SCHEDULE_REQUIRED: '일정은 필수입니다.',
};

// 한글 검사
export const koreaCheck = /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi;

// 영어 검사
export const EnglishCheck = /[a-zA-Z]/;

// 숫자 검사
export const NumberCheck =
  /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])~\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
