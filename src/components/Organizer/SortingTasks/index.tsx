import { useState } from "react";
import { OrganizerContainer, OrganizerTitle } from "../styles";
import { SortingData, SortingItem, SortingTextArea } from "./styles";
import { DefaultButton } from "../../DefaultComponents/styles";

function SortingTasks(){
  const [newArrayTasks, setNewArrayTasks] = useState<string>('');
  const [separatedTasks, setSeparatedTasks] = useState<string[]>([]);
  const [winning, setWinning] = useState<string>('');
  const getSeparatedTasks = () => {
    setSeparatedTasks(newArrayTasks.split(';'));

    const randomIndex = Math.floor(Math.random() * separatedTasks.length);
    const randomItem = separatedTasks[randomIndex];
    debugger
    setWinning(randomItem);
  };
  return (
    <>
    <OrganizerContainer>
      <OrganizerTitle>Sorting Tasks</OrganizerTitle>
      <SortingTextArea 
        placeholder="Add a list of tasks, use ; to separate the tasks"
        value={newArrayTasks}
        onChange={(e) => setNewArrayTasks(e.target.value)}
      />
      <DefaultButton onClick={ getSeparatedTasks }>SORTING</DefaultButton>
      <SortingData>
      {separatedTasks.length!==0 && separatedTasks.map((task)=>{
        return (
          <SortingItem> ⚡ {task}</SortingItem>
        )
      })}
      </SortingData>
      {winning !=='' && <OrganizerTitle>O vencedor é {winning}</OrganizerTitle>}
    </OrganizerContainer>
    </>
  );
}

export default SortingTasks;