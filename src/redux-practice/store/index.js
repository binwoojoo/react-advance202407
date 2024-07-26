import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// reducer: 상태 변경을 위한 순수 함수 - 부수 효과(비동기코드...)가 없는 함수
// 카운터 상태 관리를 위한 리듀서 정의
/*
    param1 (state): 상태 변경 이전의 상태
    param2 (action): 상태를 어떻게 변경할지의 대한 명세
    return - 변경 후 새로운 상태값
*/

// reducer를 slice로 변경
/*
  option객체에 들어가있는 프로퍼티 설명
  prop1: name - 컴포넌트가 해당 리듀서를 사용할 때 부르는 이름
  prop2: initialState - 관리할 상태값들의 초기값
  prop3: reducers - 기존 리듀서에서 사용하던 내용들(실제 액션)
*/

// 단하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// 리액트의 index.js에게 store를 제공
export default store;
