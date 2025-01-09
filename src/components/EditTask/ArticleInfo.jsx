import React from "react";
import Input from "../Input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../Select"; // Import the Select component

const ArticleInfo = ({ formData, setFormData }) => {
  // Handler for input changes
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      article_info: {
        ...prev.article_info,
        [key]: value,
      },
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">Article Info</h2>
      <div className="grid grid-cols-3 gap-6">
        {/* Item group */}
        <div className="flex flex-col">
          <label htmlFor="item_group" className="text-sm font-medium mb-1">
            Item group
          </label>
          <Input
            id="item_group"
            value={formData.article_info.item_group}
            onChange={(e) => handleInputChange("item_group", e.target.value)}
          />
        </div>

        {/* Volume */}
        <div className="flex flex-col">
          <label htmlFor="volume" className="text-sm font-medium mb-1">
            Volume
          </label>
          <Input
            id="volume"
            value={formData.article_info.volume}
            onChange={(e) => handleInputChange("volume", e.target.value)}
          />
        </div>

        {/* Isuue */}
        <div className="flex flex-col">
          <label htmlFor="issue" className="text-sm font-medium mb-1">
            Isuue
          </label>
          <Input
            id="issue"
            value={formData.article_info.issue}
            onChange={(e) => handleInputChange("issue", e.target.value)}
          />
        </div>

        {/* Vol/Iss */}
        <div className="flex flex-col">
          <label htmlFor="vol/iss" className="text-sm font-medium mb-1">
            Vol/Iss
          </label>
          <Input
            id="vol/iss"
            value={formData.article_info["vol/iss"]}
            onChange={(e) => handleInputChange("vol/iss", e.target.value)}
          />
        </div>

        {/* Handling editor */}
        <div className="flex flex-col">
          <label htmlFor="handling_editor" className="text-sm font-medium mb-1">
            Handling editor
          </label>
          <Select
            value={formData.article_info.handling_editor}
            onValueChange={(value) =>
              handleInputChange("handling_editor", value)
            }
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

        {/* First author */}
        <div className="flex flex-col">
          <label htmlFor="first_author" className="text-sm font-medium mb-1">
            First author
          </label>
          <Input
            id="first_author"
            value={formData.article_info.first_author}
            onChange={(e) => handleInputChange("first_author", e.target.value)}
          />
        </div>

        {/* Corr author */}
        <div className="flex flex-col">
          <label htmlFor="corr.author" className="text-sm font-medium mb-1">
            Corr.author
          </label>
          <Input
            id="corr.author"
            value={formData.article_info["corr.author"]}
            onChange={(e) => handleInputChange("corr.author", e.target.value)}
          />
        </div>

        {/* Corr author email */}
        <div className="flex flex-col">
          <label htmlFor="corr.author_email" className="text-sm font-medium mb-1">
            Corr.author email
          </label>
          <Input
            id="corr.author_email"
            value={formData.article_info['corr.author_email']}
            onChange={(e) => handleInputChange("corr.author_email", e.target.value)}
          />
        </div>

        {/* EM */}
        <div className="flex flex-col">
          <label htmlFor="em" className="text-sm font-medium mb-1">
            EM
          </label>
          <Input
            id="em"
            value={formData.article_info.em}
            onChange={(e) => handleInputChange("em", e.target.value)}
          />
        </div>

        {/* DOI */}
        <div className="flex flex-col">
          <label htmlFor="doi" className="text-sm font-medium mb-1">
            DOI
          </label>
          <Input
            id="doi"
            value={formData.article_info.doi}
            onChange={(e) => handleInputChange("doi", e.target.value)}
          />
        </div>

        {/* PII */}
        <div className="flex flex-col">
          <label htmlFor="pii" className="text-sm font-medium mb-1">
            PII
          </label>
          <Input
            id="pii"
            value={formData.article_info.pii}
            onChange={(e) => handleInputChange("pii", e.target.value)}
          />
        </div>

        {/* URL */}
        <div className="flex flex-col">
          <label htmlFor="url" className="text-sm font-medium mb-1">
            URL
          </label>
          <Input
            id="url"
            value={formData.article_info.url}
            onChange={(e) => handleInputChange("url", e.target.value)}
          />
        </div>

        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-medium mb-1">
            Title
          </label>
          <Input
            id="title"
            value={formData.article_info.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        </div>

        {/* PTS refers to */}
        <div className="flex flex-col">
          <label htmlFor="pts_refers_to" className="text-sm font-medium mb-1">
            PTS refers to
          </label>
          <Input
            id="pts_refers_to"
            value={formData.article_info.pts_refers_to}
            onChange={(e) => handleInputChange("pts_refers_to", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleInfo;
