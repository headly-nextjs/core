import React from "react";
import Link from "next/link";
import type { CRMEntry } from "@/classes/crm/types";
import MarkdownInline from "../ui/MarkdownInline";

// Define the fields for the JobListing block.
export interface JobListingComponentFields {
  title?: string;
  tag?: string;
  location?: string;
  description?: string;
  term?: string;
  salary?: string;
  link?: string;
}

// Define the complete entry type for this block.
export type JobListingComponentEntry = CRMEntry<JobListingComponentFields> & {
  sys: {
    id: string;
    contentType: { sys: { id: "jobListingComponent" } };
  };
};

// Define the props for the block component.
export interface JobListingComponentProps {
  post: JobListingComponentEntry;
}

const JobListingComponent: React.FC<JobListingComponentProps> = ({ post }) => {
  const { fields } = post;

  return (
    <div className="border-debug w-full xl:w-9/12 mx-auto">
      <Link href={fields.link || "#"} prefetch={false}>
        <div className="border-debug lg:ml-6 text-gray-500 border p-6 rounded-xl grid md:grid-flow-row hover:bg-gray-50">
          <div className="border-debug md:flex items-center">
            <div className="border-debug sm:flex items-center mb-3 md:mb-0">
              <div className="border-debug text-lg font-medium">
                {fields.title}
              </div>
              <div className="border-debug md:bg-pink-50 md:text-pink-700 md:rounded-xl md:py-1 md:px-4 text-sm ml-auto md:ml-3">
                {fields.tag}
              </div>
            </div>
            <div className="border-debug ml-auto text-gray-700 font-medium md:bg-gray-100 md:rounded-xl md:py-1 md:pl-1 md:pr-3 text-sm mb-6 md:mb-0 sm:flex items-center">
              ico
              {fields.location}
            </div>
          </div>
          <div className="border-debug mt-2 mb-8">
            <div className="border-debug font-medium">
              <MarkdownInline post={fields.description || ""} />
            </div>
          </div>
          <div className="border-debug sm:flex items-center">
            <div className="border-debug flex items-center">
              ico
              <div className="border-debug inline">{fields.term}</div>
            </div>
            <div className="border-debug mt-3 sm:mt-0 sm:ml-3 flex items-center">
              ico
              <div className="border-debug inline">{fields.salary}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default JobListingComponent;
