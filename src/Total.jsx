export const Total = (props) => {
  const exercisesCollection = props.exercises;

  const toTotal = (accumulator, exercise) => accumulator + exercise;

  return (
    <p>{`Number of exercises ${exercisesCollection.reduce(toTotal, 0)}`}</p>
  );
};
