import "./TripStyles.css";

type TripDataProps = {
  image: string;
  heading: string;
  text: string;
}

function TripData({
  image,
  heading,
  text,
}: TripDataProps) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={image} alt="Trip" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
    </div>
  );
}

export default TripData;
