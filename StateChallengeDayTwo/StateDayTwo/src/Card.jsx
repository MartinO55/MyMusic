const Card = ({ taskName, taskPriority, taskIndex, deleteTask }) => {
  //function that tells the page to re render when the button is clicked
  const handleChange = () => {
    deleteTask(taskIndex);
  };

  return (
    <>
      <div>
        <h3>{taskName}</h3>
        <p>{taskPriority}</p>
        <p>task number: {taskIndex + 1}</p>
        <button onClick={handleChange}>Ok, I have completed {taskName}</button>
      </div>
    </>
  );
};

export default Card;
