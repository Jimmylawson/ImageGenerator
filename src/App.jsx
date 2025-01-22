import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";
import { useState } from "react";
export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const data = await searchImages(term);
    setImages(data);
  };
  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
