import "./HeroStyles.css";

type HeroProps = {
  cName?: string;
  heroImg?: string;
  title: string;
  text?: string;
  url?: string;
  btnClass?: string;
  buttonText?: string;
}

export default function Hero({
  cName,
  heroImg,
  title,
  text,
  url,
  btnClass,
  buttonText,
}: HeroProps) {
  return (
    <div className={cName}>
      <img alt="HerpImg" src={heroImg} />

      <div className="hero-text">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={url} className={btnClass}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}
