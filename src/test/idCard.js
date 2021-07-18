const IdCard = (props) => {
  const { name, age } = props;
  return (
    <div>
      <p>
        {name}대표는 {age}살입니다.
      </p>
    </div>
  );
};

export default IdCard;
