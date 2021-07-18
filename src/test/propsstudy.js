const Person = (props) => {
  const { name, age, des } = props;
  return (
    <div>
      <h1>
        {name}은 {age}살이고, {des}입니다.
      </h1>
    </div>
  );
};

export default Person;
