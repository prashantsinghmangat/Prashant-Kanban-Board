import React, { useState } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { Column } from './components/Column';
import { useKanbanStore } from './store/kanbanStore';
import { useAuthStore } from './store/authStore';
import { Status } from './types';
import { AuthForm } from './components/AuthForm';
import { AddTaskModal } from './components/AddTaskModal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const columns: { id: Status; title: string }[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' },
];

function App() {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const { tasks, moveTask } = useKanbanStore();
  const { user } = useAuthStore();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const { draggableId, destination } = result;
    moveTask(draggableId, destination.droppableId as Status);
  };

  if (!user) {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onAddTask={() => setIsAddingTask(true)} />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <DragDropContext onDragEnd={handleDragEnd}>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {columns.map((column) => (
              <Column
                key={column.id}
                title={column.title}
                status={column.id}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            ))}
          </div>
        </DragDropContext>
      </main>

      <Footer />

      {isAddingTask && <AddTaskModal onClose={() => setIsAddingTask(false)} />}
    </div>
  );
}

export default App;