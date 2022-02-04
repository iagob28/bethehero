import { styled } from "@stitches/react";

export const TextInput = styled("input", {
  border: "1.5px solid #dcdce6",
  boxSizing: "border-box",
  borderRadius: "8px",
  fontSize: "18px",
  background: "#ffffff",
  height: "60px",
  paddingLeft: "8px",

  variants: {
    size: {
      small: { width: "70px" },
      medium: { width: "351px" },
      default: { width: "370px" },
      long: { width: "448px" },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const Label = styled("label", {
  display: "flex",
  background: "transparent",
  fontSize: "18px",
  fontWeight: "500",
  color: "#a8a8b3",
  position: "absolute",
  transition: "all 0.3s",

  variants: {
    position: {
      low: { transform: "translate(8px, 10px) scale(1)" },
      default: { transform: "translate(8px, 16px) scale(1)" },
      high: { transform: "translate(8px, 70px) scale(1)" },
    },
    active: {
      on: { transform: "translate(0px, 0px) scale(0.7)" },
      off: {},
    },
  },

  defaultVariants: {
    position: "default",
    active: "off",
  },
});

export const DescriptionTextArea = styled("textarea", {
  border: "1.5px solid #dcdce6",
  boxSizing: "border-box",
  borderRadius: "8px",
  fontSize: "18px",
  background: "#ffffff",
  width: "448px",
  paddingLeft: "8px",
  height: "175px",
  paddingTop: "30px",
});

export const Description = styled("p", {
  fontWeight: "400",
  fotSize: "18px",
  width: "380px",
  color: "#737380",
  background: "transparent",
});
