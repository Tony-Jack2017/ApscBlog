import {CSSProperties} from "react";

export function computeSize(size:"default" | "small" | "large" | "auto" | [number, number]):CSSProperties {
  switch (size) {
    case "small":
      return { width: 36, height: 36 } as CSSProperties;
    case "default":
      return { width: 48, height: 48 } as CSSProperties;
    case "large":
      return { width: 60, height: 60 } as CSSProperties;
    default:
      return size == "auto" ? {} : { width: size[0], height: size[1] } as CSSProperties
  }
}
