import React, { Component } from "react";

class RenderTest extends Component {
  state = {
    counter: 0,
  };

  // 리액트는 기본적으로 setState 함수가 호출되기만 하면 state 값이 이전과 같더라도 렌더링됨.
  // 이를 해결하기 위해 setState가 선언되더라도 state 값이 변경되었을 때만 렌더링 되도록 하는 메소드
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 이전 counter 값과 비교해서 값이 변화 되었을 때만!
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState({});
  };
  render() {
    console.log("렌더링", this.state);
    return (
      <>
        <button onClick={this.onClick}>클릭</button>
      </>
    );
  }
}

export default RenderTest;
