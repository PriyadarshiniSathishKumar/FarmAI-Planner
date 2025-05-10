
import React from "react";
import { cn } from "@/lib/utils";

interface FarmCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const FarmCard: React.FC<FarmCardProps> = ({
  title,
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-md transition-all hover:shadow-lg overflow-hidden border border-border",
        className
      )}
      {...props}
    >
      <div className="p-4 border-b border-border bg-stone-50 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default FarmCard;
