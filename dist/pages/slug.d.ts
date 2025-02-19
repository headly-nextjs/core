import { JSX } from "react";
import type { UIComponentsMap } from "../components/ui";
import { BlocksComponentsMap } from "@/components/blocks";
export interface HeadlySlugProps {
    params: Promise<{
        slug: string[];
    }>;
    searchParams: Promise<{
        preview?: string;
        secret?: string;
    }>;
    overrides?: {
        ui?: Partial<UIComponentsMap>;
        blocks?: Partial<BlocksComponentsMap>;
    };
}
export declare function generateStaticParams(): Promise<{
    slug: string[];
}[]>;
export declare function generateMetadata({ params, }: {
    params: Promise<{
        slug: string[];
    }>;
}): Promise<{
    title?: undefined;
    description?: undefined;
    openGraph?: undefined;
    robots?: undefined;
    twitter?: undefined;
} | {
    title: string;
    description: string;
    openGraph: {
        title: string;
        description: string;
        url: string;
        images: {
            width?: number | undefined;
            height?: number | undefined;
            url: string;
            alt: string;
        }[];
    };
    robots: {
        index: boolean;
        follow: boolean;
    };
    twitter: {
        card: string;
        title: string;
        description: string;
        images: {
            width?: number | undefined;
            height?: number | undefined;
            url: string;
            alt: string;
        }[];
    };
}>;
export default function HeadlySlug({ params, searchParams, overrides, }: HeadlySlugProps): Promise<JSX.Element>;
//# sourceMappingURL=slug.d.ts.map