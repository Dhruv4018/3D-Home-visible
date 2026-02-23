import { useLocation } from "react-router";

const Visualizer = () => {
  const location = useLocation();
  const base64Image = location.state?.image as string | undefined;

  return (
    <div>
      {base64Image ? (
        <img src={base64Image} alt="Uploaded floor plan" style={{ maxWidth: "100%" }} />
      ) : (
        <p>No image provided.</p>
      )}
    </div>
  );
};

export default Visualizer;