import Container, { ContainerProps } from "./Container";

import Wrapper, { WrapperProps } from "headly/components/ui/Wrapper";


export interface UIComponentsMap {
  Container: React.ComponentType<ContainerProps>;
  Wrapper: React.ComponentType<WrapperProps>;
}

export const defaultUIMap: UIComponentsMap = {
  Container,
  Wrapper,
};
