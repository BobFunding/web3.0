// 구구단 출력하는 함수
// 수정: 반복문을 함수 안으로 옮기고, 작은따옴표(') 대신 백틱(`)을 써서 ${} 안의 값이 실제 숫자로 출력되도록 함
const makeMultiplication = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
};

makeMultiplication();
