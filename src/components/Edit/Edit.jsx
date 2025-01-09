import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
  const { ptsId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');



  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!article) return <div>No article found.</div>;

  return (
    <div className="p-6 bg-white rounded shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Edit Article</h2>
    
    </div>
  );
}

export default Edit;