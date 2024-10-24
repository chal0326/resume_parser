import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavProps } from 'react-day-picker';

export function CustomNavigation({ onPreviousClick, onNextClick }: NavProps) {
  return (
    <div className="space-x-1 flex items-center">
      <button
        type="button"
        onClick={onPreviousClick}
        className="absolute left-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onNextClick}
        className="absolute right-1 h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

