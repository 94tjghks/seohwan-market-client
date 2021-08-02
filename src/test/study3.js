import React from "react";

const Enter2 = () => {
  const [person, statePerson] = React.useState(0);
  console.log("1명이 추가 입장했습니다.");
  React.useEffect(() => {
    statePerson(person + 1);
  }, []);

  return (
    <div>
      <h1>{person}명 입장 중</h1>
      <button>1명씩 증가합니다.</button>
    </div>
  );
};

export default Enter2;
