import React from "react";

export interface CardProps {
  title?: string;
  description?: string;
  subDescription?: string;
}

const Card: React.FC<CardProps> = ({ title, description, subDescription }) => {
  return (
    <div className="border-debug text-center">
      {title && (
        <p className="border-debug text-4xl md:text-6xl font-serif font-semibold leading-[60px]">
          {title}
        </p>
      )}

      {description && (
        <p className="border-debug mt-3 mb-2 font-medium text-lg">
          {description}
        </p>
      )}

      {subDescription && (
        <p className="border-debug text-md text-gray-300">
          {subDescription}
        </p>
      )}
    </div>
  );
};

export default Card;
