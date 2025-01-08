import React from "react";
import Input from "../Input"; // Assuming you're using the same Input component

const Notes = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      notes: {
        ...prev.notes,
        [key]: value,
      },
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Notes</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* PTS Remarks */}
        <div className="flex flex-col">
          <label htmlFor="pts_remarks" className="text-sm font-medium mb-1">
            PTS Remarks
          </label>
          <Input
            id="pts_remarks"
            value={formData.notes.pts_remarks}
            onChange={(e) => handleInputChange("pts_remarks", e.target.value)}
          />
        </div>

        {/* Production Notes */}
        <div className="flex flex-col">
          <label htmlFor="production_notes" className="text-sm font-medium mb-1">
            Production Notes
          </label>
          <Input
            id="production_notes"
            value={formData.notes.production_notes}
            onChange={(e) =>
              handleInputChange("production_notes", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Notes;

  