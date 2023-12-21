import React from "react";

// Test Class Example 컴포넌트 입니다.
// Funcitonal Component 방식으로 우선 만들었습니다
// const TestClassExample = (props) => {
//   const data = "data";

//   return (
//     <>
//       {props.data} {data}
//     </>
//   );
// };

class TestClassExample {
  // 생성자
  constructor() {
    // 초기 세팅 및 초기화
  }
  render() {
    return <li className={classes.user}>{this.props.data}</li>;
  }
}

export default TestClassExample;
