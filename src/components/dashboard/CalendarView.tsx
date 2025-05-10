
import React, { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import FarmCard from "../ui/FarmCard";
import { getCropById } from "@/data/crops";

interface CalendarViewProps {
  className?: string;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

type TaskType = "planting" | "watering" | "fertilizing" | "pruning" | "harvesting" | "other";

interface Task {
  id: string;
  cropId: string;
  description: string;
  type: TaskType;
}

// Mock calendar data
const mockTasks: Record<number, Task[]> = {
  0: [ // January
    {
      id: "task-1",
      cropId: "tomato",
      description: "Prepare soil for spring planting",
      type: "other",
    }
  ],
  1: [ // February
    {
      id: "task-2",
      cropId: "tomato",
      description: "Start tomato seeds indoors",
      type: "planting",
    },
    {
      id: "task-3",
      cropId: "carrot",
      description: "Prepare carrot beds",
      type: "other",
    }
  ],
  2: [ // March
    {
      id: "task-4",
      cropId: "spinach",
      description: "Plant spinach seeds",
      type: "planting",
    },
    {
      id: "task-5",
      cropId: "carrot",
      description: "Sow first batch of carrots",
      type: "planting",
    }
  ],
  3: [ // April
    {
      id: "task-6",
      cropId: "tomato",
      description: "Transplant tomato seedlings",
      type: "planting",
    },
    {
      id: "task-7",
      cropId: "beans",
      description: "Plant bean seeds",
      type: "planting",
    }
  ],
  4: [], // May
  5: [ // June
    {
      id: "task-8",
      cropId: "spinach",
      description: "Harvest spinach",
      type: "harvesting",
    }
  ],
  6: [ // July
    {
      id: "task-9",
      cropId: "tomato",
      description: "Support tomato plants with stakes",
      type: "other",
    },
    {
      id: "task-10",
      cropId: "carrot",
      description: "Thin carrot seedlings",
      type: "other",
    }
  ],
  7: [ // August
    {
      id: "task-11",
      cropId: "tomato",
      description: "Harvest first tomatoes",
      type: "harvesting",
    },
    {
      id: "task-12",
      cropId: "carrot",
      description: "Harvest early carrots",
      type: "harvesting",
    }
  ],
  8: [], // September
  9: [], // October
  10: [], // November 
  11: [] // December
};

// Get task color based on type
const getTaskColor = (type: TaskType): string => {
  switch (type) {
    case "planting":
      return "bg-earth-100 text-earth-800";
    case "watering":
      return "bg-blue-100 text-blue-800";
    case "fertilizing":
      return "bg-soil-100 text-soil-800";
    case "pruning":
      return "bg-stone-100 text-stone-800";
    case "harvesting":
      return "bg-clay-100 text-clay-800";
    case "other":
      return "bg-stone-100 text-stone-800";
    default:
      return "bg-stone-100 text-stone-800";
  }
};

const CalendarView: React.FC<CalendarViewProps> = ({ className }) => {
  const currentDate = new Date();
  const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth());
  
  const nextMonth = () => {
    setSelectedMonth(prev => (prev + 1) % 12);
  };
  
  const prevMonth = () => {
    setSelectedMonth(prev => (prev - 1 + 12) % 12);
  };

  return (
    <FarmCard 
      title="Farming Calendar" 
      icon={<Calendar className="h-5 w-5" />}
      className={className}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button 
            className="p-1 rounded-full hover:bg-stone-100"
            onClick={prevMonth}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <h3 className="font-medium text-lg">
            {MONTHS[selectedMonth]}
          </h3>
          
          <button 
            className="p-1 rounded-full hover:bg-stone-100"
            onClick={nextMonth}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          {mockTasks[selectedMonth] && mockTasks[selectedMonth].length > 0 ? (
            mockTasks[selectedMonth].map(task => {
              const crop = getCropById(task.cropId);
              return (
                <div 
                  key={task.id} 
                  className="bg-white border border-stone-200 rounded-lg p-3 shadow-sm"
                >
                  <div className="flex items-start">
                    {crop && (
                      <div className="mr-3 shrink-0">
                        <div className="h-10 w-10 rounded-full bg-earth-100 flex items-center justify-center">
                          <span className="text-earth-700 text-sm font-medium">
                            {crop.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium">{crop?.name || "Unknown"}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getTaskColor(task.type)}`}>
                          {task.type.charAt(0).toUpperCase() + task.type.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-sm text-stone-600">
                        {task.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-stone-500">
              <Calendar className="h-10 w-10 mb-2 opacity-40" />
              <p>No farming tasks for {MONTHS[selectedMonth]}</p>
              <p className="text-sm mt-1">This is a good time to plan ahead!</p>
            </div>
          )}
        </div>
      </div>
    </FarmCard>
  );
};

export default CalendarView;
