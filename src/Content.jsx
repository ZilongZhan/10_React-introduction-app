export const Content = ({ courseData }) => {
  return (
    <>
      {courseData.map((course, index) => {
        return <p key={index}>{`${course.part}`}</p>;
      })}
    </>
  );
};
