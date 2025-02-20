// /headly/components/blocks/index.ts
import HeaderCenterComponent, {
  HeaderCenterComponentEntry,
} from "./HeaderCenterComponent";
import RichTextComponent, { RichTextComponentEntry } from "./RichTextComponent";
import CallToActionComponent, {
  CallToActionComponentEntry,
} from "./CallToActionComponent";
import ImageCardListComponent, { ImageCardListComponentEntry } from "./ImageCardListComponent";
import ImageCardComponent, { ImageCardComponentEntry } from "./ImageCardComponent";
import CenterTextComponent, { CenterTextComponentEntry } from "./CenterTextComponent";
import CustomerQuoteComponent, { CustomerQuoteComponentEntry } from "./CustomerQuoteComponent";
import JobListingComponent, { JobListingComponentEntry } from "./JobListingComponent";
import MetricsComponent, { MetricsComponentEntry } from "./MetricsComponent";

// Create a single object that maps the component keys to their respective React components.
export const blocks = {
  headerCenterComponent: HeaderCenterComponent,
  richTextComponent: RichTextComponent,
  callToActionComponent: CallToActionComponent,
  imageCardListComponent: ImageCardListComponent,
  imageCardComponent: ImageCardComponent,
  centerTextComponent: CenterTextComponent,
  customerQuoteComponent: CustomerQuoteComponent,
  jobListingComponent: JobListingComponent,
  metricsComponent: MetricsComponent
};

// Automatically derive the valid keys from the object.
export type BlockComponentType = keyof typeof blocks;

// The mapping type is automatically inferred.
export type BlocksComponentsMap = typeof blocks;

// Define the union type for page components based on your individual entry types.
export type PageComponent =
  | HeaderCenterComponentEntry
  | RichTextComponentEntry
  | ImageCardListComponentEntry
  | ImageCardComponentEntry
  | CenterTextComponentEntry
  | CustomerQuoteComponentEntry
  | JobListingComponentEntry
  | MetricsComponentEntry
  | CallToActionComponentEntry;
