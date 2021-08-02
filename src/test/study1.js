function Introduce(props) {
  const { name, age, job } = props;
  return (
    <div>
      <p>
        {name}은 {age}살이고, {job}입니다.
      </p>
    </div>
  );
}

export default Introduce;
