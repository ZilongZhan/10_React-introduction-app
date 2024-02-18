export const Content = ({ courseData }) => {
  return (
    <>
      {courseData.map((course) => {
        return <p>{`${course.part}`}</p>;
      })}
    </>
  );
};
