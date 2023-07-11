✔ **Original code**: https://github.com/gopinav/Redux-Toolkit-Tutorials
<br /><br /><br />

# What is Redux?
<!-- 리덕스 로고 넣기 -->
<!-- ![redux-logo](https://github.com/dabinchiii/redux-toolkit-practice/assets/81626630/f0e14a00-4b1f-41e6-ad7f-75208c27324e) -->
<img src="https://github.com/dabinchiii/redux-toolkit-practice/assets/81626630/f0e14a00-4b1f-41e6-ad7f-75208c27324e" />
https://redux.js.org/

### "A Predictable State Container for JS Apps"

* For Javascript apps
* A state container
* Predictable

### Redux is for JavaScript applications

* Redux는 React만을 위한 것이 아님.
React, Angular, Vue, vanilla JavaScript와 함께도 사용 가능.
* Redux는 자바스크립트 어플리케이션을 위한 라이브러리. (상태 관리 라이브러리)

### Redux is a state container

* Redux는 어플리케이션의 state(상태)를 저장한다.
<br/> - React app의 경우 컴포넌트의 state.
* app의 state는 app의 개별 컴포넌트에 공유된다.
* app의 state를 저장하고 관리한다.

### Redux is predictable

* state는 바뀔 수 있다.
* 모든 state transition은 명시적이고 추적할 수 있도록 보장하는 패턴이 적용된다.

<br/>

# Why Redux?

Redux에서 제공하는 패턴과 tool들을 이용하면, 
1. state가 언제, 어디서, 왜, 어떻게 업데이트되었고,
2. 변경들이 발생할 때 app이 어떻게 행동할지 쉽게 이해할 수 있도록 한다.

=> application의 global state를 예측가능한 방법으로 관리하고 싶을 때 사용 가능

<br />

# What is Redux Toolkit(RTK)?

### The official, opinionated, batteries-included toolset for efficient Redux development

또한 Redux logic을 작성하는 표준적인 방법을 위함.

<br />

# Why Redux Toolkit?

### Redux는 몇 가지 결점이 있다.
* Configuration이 복잡
* 너무 많은 보일러플레이트 코드를 요구한다.
* Redux를 유용하게 사용하기 위하여 다른 많은 패키지들의 설치가 필요하다.

### Redux toolkit은 redux에 대한 추상화 역할을 한다.

<br />

# Redux Toolkit featuring Redux
* Redux 또는 Redux toolkit은 UI 라이브러리를 필요로 하지 않는다.
* RTK + React => 일반적으로 사용
    - React : UI 라이브러리
    - Redux (or Redux Toolkit) : 상태 관리 라이브러리
    - React-Redux 패키지 : the official Redux UI binding library for React

<br />

# Three Core Concepts
    

**1. Store**
    : Hold the state of your application

**2. Action**
    : Describes what happned 

**3. Reducer**
    : handles the action and decides how to update the state <br />(Ties the store and actions together)


