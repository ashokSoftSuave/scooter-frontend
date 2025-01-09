import React from "react";
import Input from "../Input"; // Assuming you're using the same Input component
import { Calendar } from "../Calendar";
import { DatePicker } from "../DatePicker";

const ScheduleInfo = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      schedule_info: {
        ...prev.schedule_info,
        [key]: value,
      },
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Schedule Info</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Speed target */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            Speed target
          </label>
          <DatePicker date={formData.schedule_info.speed_target} />
        </div>

        {/* ON Date */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            ON Date
          </label>
          <DatePicker date={formData.schedule_info.on_date} />
        </div>

        {/* Embargo exp */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            Embargo exp
          </label>
          <DatePicker date={formData.schedule_info.embargo_exp} />
        </div>

        {/* Embargo stg */}
        <div className="flex flex-col">
          <label htmlFor="embargo_stg" className="text-sm font-medium mb-1">
            Embargo stg
          </label>
          <Input
            id="embargo_stg"
            value={formData.schedule_info.embargo_stg}
            onChange={(e) =>
              handleInputChange("embargo_stg", e.target.value)
            }
          />
        </div>

        {/* Article S300 date */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            Article S300 date
          </label>
          <DatePicker date={formData.schedule_info.article_s300_date} />
        </div>

        {/* Item holdout */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            Item holdout
          </label>
          <DatePicker date={formData.schedule_info.item_holdout} />
        </div>

        {/* Item finalizing */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            Item finalizing
          </label>
          <DatePicker date={formData.schedule_info.item_finalizing} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleInfo;
