const CAKE_ORDERED = 'CAKE_ORDERED'; // 스펠링 실수 방지를 위해 상수로 선언

// action creator : a function that returns an object
function orderCake() {
    // action 정의 (action: type 프로퍼티를 가지는 객체)
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}