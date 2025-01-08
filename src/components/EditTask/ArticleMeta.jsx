import React from "react";
import Input from "../Input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../Select"; // Import the Select component

const ArticleMeta = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      article_meta: {
        ...prev.article_meta,
        [key]: value,
      },
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Article Meta</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Journal */}
        <div className="flex flex-col">
          <label htmlFor="journal" className="text-sm font-medium mb-1">
            Journal
          </label>
          <Input
            id="journal"
            value={formData.article_meta.journal}
            onChange={(e) => handleInputChange("journal", e.target.value)}
          />
        </div>

        {/* PTS */}
        <div className="flex flex-col">
          <label htmlFor="pts" className="text-sm font-medium mb-1">
            PTS
          </label>
          <Input
            id="pts"
            value={formData.article_meta.pts}
            onChange={(e) => handleInputChange("pts", e.target.value)}
          />
        </div>

        {/* PIT */}
        <div className="flex flex-col">
          <label htmlFor="pit" className="text-sm font-medium mb-1">
            PIT
          </label>
          <Input
            id="pit"
            value={formData.article_meta.pit}
            onChange={(e) => handleInputChange("pit", e.target.value)}
          />
        </div>

        {/* Dochead */}
        <div className="flex flex-col">
          <label htmlFor="dochead" className="text-sm font-medium mb-1">
            Dochead
          </label>
          <Input
            id="dochead"
            value={formData.article_meta.dochead}
            onChange={(e) => handleInputChange("dochead", e.target.value)}
          />
        </div>

        {/* Production Handler */}
        <div className="flex flex-col">
          <label
            htmlFor="production_handler"
            className="text-sm font-medium mb-1"
          >
            Production Handler
          </label>
          <Select
            value={formData.article_meta.production_handler}
            onValueChange={(value) => handleInputChange("production_handler", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a handler" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="John Doe">John Doe</SelectItem>
              <SelectItem value="Jane Smith">Jane Smith</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Points */}
        <div className="flex flex-col">
          <label htmlFor="points" className="text-sm font-medium mb-1">
            Points
          </label>
          <Input
            id="points"
            value={formData.article_meta.points}
            onChange={(e) => handleInputChange("points", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleMeta;
