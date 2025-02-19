import React from "react";

export interface HeaderCenterComponentProps {
  post: {
    sys: {
      id: string;
      contentType: { sys: { id: "headerCenterComponent" } };
    };
    fields: {
      title?: string;
      description?: string;
      subDescription?: string;
      buttonText?: string;
      showEmailRequest?: boolean;
      backgroundColor?: string;
    };
  };
}

const HeaderCenterComponent: React.FC<HeaderCenterComponentProps> = ({ post }) => {
  const { fields } = post;
  return (
    <div className={`border-debug ${fields.backgroundColor || ""}`}>
      <div className="dark:from-primary-600 dark:to-primary-700 dark:bg-gradient-to-r dark:text-gray-400">
        <div className="border-debug w-full md:w-11/12 xl:w-9/12 mx-auto">
          {fields.title && (
            <p className="border-debug text-center text-primary-600 font-bold dark:text-white">
              {fields.title}
            </p>
          )}
          {fields.description && (
            <h1 className="border-debug text-center text-4xl md:text-6xl mt-6 mb-12 font-serif font-semibold dark:text-white">
              {fields.description}
            </h1>
          )}
          {fields.subDescription && (
            <p className="border-debug text-center text-gray-500 dark:text-gray-200">
              {fields.subDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderCenterComponent;
