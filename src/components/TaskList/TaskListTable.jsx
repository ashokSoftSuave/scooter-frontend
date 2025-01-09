import React, { useEffect, useState } from "react";
import { AlertTriangle, Edit } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchArticles = async () => {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/article/getarticle`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          if (error.response.status === 400) {
            window.location.href = "/login";
          }
          setError(error.response.data || { msg: "Something went wrong!" });
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchArticles();
  }, []);

  const handleRedirectPath = (ptsId) => {
    const navigationData = data.filter((item) => item.pts_id === ptsId);
    navigate(`/edit/${ptsId}`, { state: { data: navigationData } });
  };

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
          {data.length > 0 ? (
            data?.map((row, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2 flex items-center">
                  {row.hasWarning && (
                    <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                  )}
                  {row.pts_id}
                </td>
                <td className="px-4 py-2">{row.em}</td>
                <td className="px-4 py-2">{row.first_author}</td>
                <td className="px-4 py-2">{row.corr_author}</td>
                <td className="px-4 py-2">{row.pit}</td>
                <td className="px-4 py-2">{row.title}</td>
                <td className="px-4 py-2">
                  {row.milestone?.copy_edit_task_complete}
                </td>
                <td className="px-4 py-2">
                  {row.event.sd_published_on_the_web_s200}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-600 hover:text-blue-800"
                    onClick={() => {
                      handleRedirectPath(row.pts_id);
                    }}
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No articles found!
              </td>
            </tr>
          )}
          {loading && (
            <tr>
              <td colSpan="8" className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
          {error && (
            <tr>
              <td colSpan="8" className="text-center py-4">
                Error: {error.msg}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TaskListTable;
