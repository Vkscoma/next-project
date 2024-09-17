import React from "react";
import Link from "next/link";

interface InfoBoxProps {
  title: string;
  description: string;
  buttonText: string;
  backgroundColor: string;
  link: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  description,
  buttonText,
  backgroundColor,
  link,
}: InfoBoxProps) => {
  return (
    <>
      <div
        className="shadow-xl mt-4 p-6 rounded-lg"
        style={{ backgroundColor: backgroundColor }}
      >
        <div
          className={`card-body ${
            backgroundColor === "#b0a8b9" ? "text-dark" : "text-white"
          }`}
        >
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions md:mt-2 mt-4 mx-auto md:mx-0">
            <Link href={link}>
              <button className="btn text-dark rounded-lg">{buttonText}</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoBox;
