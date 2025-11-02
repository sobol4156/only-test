export const ANIMATION_INTERVAL = 30;

export const CIRCLE_CONFIG = {
  DEFAULT_RADIUS: 265,
  MOBILE_RADIUS: 200,
  INITIAL_ROTATION: 45,
  START_ANGLE: -90,
  DOT_OFFSET: 3,
} as const;

export const COLORS = {
  PRIMARY: "#42567A",
  PRIMARY_OPACITY_40: "rgba(66, 86, 122, 0.4)",
  PRIMARY_OPACITY_100: "rgba(66, 86, 122, 1)",
  PRIMARY_OPACITY_10: "rgba(66, 86, 122, 0.1)",
  TRANSPARENT: "transparent",
  WHITE: "#FFF",
} as const;

export const BREAKPOINTS = {
  MOBILE: "(max-width: 768px)",
  TABLET: "(max-width: 992px)",
} as const;

