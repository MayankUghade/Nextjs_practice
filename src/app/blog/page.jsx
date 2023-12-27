"use client";
import { useState, useEffect } from "react";
const Blog = async () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3000/api/posts");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item._id}>
            <h1>{item.title}</h1>
          </div>
        ))}
    </div>
  );
};
export default Blog;
