import "./DestinationStyles.css";

type DestinationDataProps = {
  className: string;
  heading: string;
  text: string;
  img1: string;
  img2: string;
}

export default function DestinationData({
  className,
  heading,
  text,
  img1,
  img2,
}: DestinationDataProps) {
  return (
    <div className={className}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>

      <div className="image">
        <img alt="img" src={img1} />
        <img alt="img" src={img2} />
      </div>
    </div>
  );
}
