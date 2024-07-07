// Import images
import tempImage from "../../assets/hero_images/temp.png"; // Add more images as needed

const images = {
  temp: tempImage,
  // Add more mappings here if needed
};

function Coursecard(course, description, link, image) {
  // Get the image source from the images object
  const imageSrc = images[image];

  return (
    <div className="bg-dark w-96 h-100 text-white rounded px-2">
      <img src={imageSrc} alt={course} className="mt-3 w-100 h-4/5 rounded" />
      <h2>{course}</h2>
      <div className="text-base font-extralight">{description}</div>
    </div>
  );
}

export default Coursecard;
