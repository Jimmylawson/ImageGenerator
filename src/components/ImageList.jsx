import ImageShow from "./ImageShow";
const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-flex">{renderedImages}</div>;
};

export default ImageList;
