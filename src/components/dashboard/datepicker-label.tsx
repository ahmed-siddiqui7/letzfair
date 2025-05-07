import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { LuCalendarDays } from "react-icons/lu";

const DatePickerWithLabel = ({
  label,
  date,
  onChange,
}: {
  label: string;
  date: Date | undefined;
  onChange: (date: Date | undefined) => void;
}) => (
  <div className="flex items-center gap-2">
    <span className="text-sm text-muted-foreground whitespace-nowrap font-bold">
      {label}
    </span>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-[150px] justify-between font-normal"
        >
          {date ? format(date, "PP") : <span>Pick a date</span>}
          <LuCalendarDays className="ml-2 h-4 w-4 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  </div>
);

export default DatePickerWithLabel;
