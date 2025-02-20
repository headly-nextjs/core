import Card, { CardProps } from "./Card";
import Container, { ContainerProps } from "./Container";

import Wrapper, { WrapperProps } from "./Wrapper";

export interface UIComponentsMap {
  Container: React.ComponentType<ContainerProps>;
  Wrapper: React.ComponentType<WrapperProps>;
  Card: React.ComponentType<CardProps>;
}

export const defaultUIMap: UIComponentsMap = {
  Container,
  Wrapper,
  Card,
  
};

export function getUIComponents(
  overrides?: Partial<UIComponentsMap>
): UIComponentsMap {
  return { ...defaultUIMap, ...overrides };
}