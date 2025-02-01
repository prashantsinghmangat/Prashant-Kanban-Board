import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Task } from '../types';
import { AlertCircle, Clock, Link } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  index: number;
}

const priorityColors = {
  low: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  high: 'bg-red-100 text-red-800',
};

export const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-4 rounded-lg shadow-sm mb-3 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-gray-900">{task.title}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                priorityColors[task.priority]
              }`}
            >
              {task.priority}
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{task.description}</p>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {new Date(task.createdAt).toLocaleDateString()}
            </div>
            
            {task.dependencies.length > 0 && (
              <div className="flex items-center">
                <Link className="w-4 h-4 mr-1" />
                {task.dependencies.length}
              </div>
            )}
            
            {task.assignee && (
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                  {task.assignee.charAt(0)}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};