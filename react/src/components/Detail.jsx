import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail() {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      const url = `http://localhost:3456/api/images/${id}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const item = await response.json();
        setContent(item.content);
      } catch (error) {
        console.error(error.message);
      }
    }

    if (id) {
      fetchDetail();
    }
  }, [id]);

  return (
    <div className="detail-main">
      <h1>Content details</h1>
      <h2>Content: {content}</h2>
    </div>
  );
}

export default Detail;