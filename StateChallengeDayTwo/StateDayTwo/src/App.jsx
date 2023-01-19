import { useState } from "react";

import Card from "./Card.jsx";
import tasks from "./assets/data";

function App() {
  //sets the tasks array
  const [newTasks, setNewTasks] = useState(tasks); //start at the original array, save it as the one you get when stuff will be deleted

  //function that deletes an object from the array
  const deleteTask = (taskToDeleteIndex) => {
    //task to delete index is just a renamed tasks index
    setNewTasks(
      newTasks.filter((tasks, taskIndex) => {
        //so filter for everything not our target
        if (taskIndex !== taskToDeleteIndex) {
          console.log(taskToDeleteIndex);
          return tasks; //so the name of the return is arbitrary
        }
      })
    );
  };

  return (
    <>
      {newTasks.map((task, index) => (
        <Card
          key={index}
          taskName={task.task}
          taskPriority={task.priority}
          taskIndex={index}
          deleteTask={deleteTask}
        />
      ))}
    </>
  );
}

export default App;
