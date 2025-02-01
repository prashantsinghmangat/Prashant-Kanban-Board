import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { TaskCard } from './TaskCard';
import { Task, Status } from '../types';

interface ColumnProps {
  title: string;
  tasks: Task[];
  status: Status;
}

const columnColors = {
  todo: 'bg-gray-100',
  'in-progress': 'bg-blue-50',
  review: 'bg-yellow-50',
  done: 'bg-green-50',
};

export const Column: React.FC<ColumnProps> = ({ title, tasks, status }) => {
  return (
    <div className={`w-80 rounded-lg ${columnColors[status]} p-4`}>
      <h2 className="font-semibold text-gray-700 mb-4 flex items-center justify-between">
        {title}
        <span className="bg-white px-2 py-1 rounded-full text-sm text-gray-600">
          {tasks.length}
        </span>
      </h2>
      
      <Droppable droppableId={status}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="min-h-[calc(100vh-12rem)]"
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};