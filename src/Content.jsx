export const Content = (props) => {
  const collectionLength = props.parts.length;
  const partsCollection = props.parts;
  const exercisesCollection = props.exercises;

  const paragraph = [];

  for (let index = 0; index < collectionLength; index++) {
    paragraph.push(
      <p>{`${partsCollection[index]} ${exercisesCollection[index]}`}</p>
    );
  }

  return paragraph;
};
