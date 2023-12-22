import React, { Component } from "react";

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

// Component로 확장 및 import를 해야한다
class TestClassExample extends Component {
  // 생성자
  constructor() {
    // ES6문법에서 super 선언전에는 this를 콜 할수가 없습니다.
    // 선언안할시에 this 를 사용할수 없다고 나옵니다
    super();
    // 초기 세팅 및 초기화
    this.state = {
      testParam: false,
      moreParam: 1234,
      nested: {
        show: function () {
          console.log("show test");
        },
        hide: function () {
          console.log("hide test");
        },
      },
      data: ["data1", "data2", "data3", "data4"],
    };
  }

  testFunction() {
    // 값을 결합시키는 방식이기 때문에 다른 데이터들은 변질되지 않습니다
    this.setState((currentParam) => {
      return { testParam: true };
    });
  }

  render() {
    return (
      <li>
        {this.state.moreParam} {this.props.data}
      </li>
    );
  }
}

export default TestClassExample;
