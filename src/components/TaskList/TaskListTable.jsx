import React, { useEffect } from "react";
import { AlertTriangle, Edit } from "lucide-react";
import axios from "axios";

const mockData = [
  {
    ptsId: "JRNL1234",
    em: "JOURNAL NAME: D-01-12345",
    firstAuthor: "John Doe",
    correspondingAuthor: "Jane Smith",
    pit: "PIT",
    articleType: "Primer",
    copyediting: "IHC",
    s200: "05/15/2023",
    hasWarning: true,
  },
  {
    ptsId: "JRNL5678",
    em: "JOURNAL NAME: D-01-67890",
    firstAuthor: "Alice Johnson",
    correspondingAuthor: "Bob Williams",
    pit: "FLA",
    articleType: "Article",
    copyediting: "RED",
    s200: "05/20/2023",
    hasWarning: false,
  },
  {
    ptsId: "JRNL9012",
    em: "JOURNAL NAME: D-01-90123",
    firstAuthor: "Carol Brown",
    correspondingAuthor: "David Green",
    pit: "INS",
    articleType: "Preview",
    copyediting: "IHC",
    s200: "05/25/2023",
    hasWarning: true,
  },
];

function TaskListTable({ searchQuery, filters }) {
  const filteredData = mockData.filter((row) => {
    const searchString = searchQuery.toLowerCase();
    return Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchString)
    );
  });

  useEffect( async () => {
   await axios
      .get("http://localhost:3030/article/getarticle")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const sortedData = filteredData.sort((a, b) => {
    if (filters.sortBy === "dueDate") {
      return new Date(a.s200) - new Date(b.s200);
    }
    return a[filters.sortBy].localeCompare(b[filters.sortBy]);
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              PTS ID
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              EM
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              First Author
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Corresponding Author
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              PIT
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Article Type
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Copyediting
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              S200
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2 flex items-center">
                {row.hasWarning && (
                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                )}
                {row.ptsId}
              </td>
              <td className="px-4 py-2">{row.em}</td>
              <td className="px-4 py-2">{row.firstAuthor}</td>
              <td className="px-4 py-2">{row.correspondingAuthor}</td>
              <td className="px-4 py-2">{row.pit}</td>
              <td className="px-4 py-2">{row.articleType}</td>
              <td className="px-4 py-2">{row.copyediting}</td>
              <td className="px-4 py-2">{row.s200}</td>
              <td className="px-4 py-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Edit className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskListTable;
