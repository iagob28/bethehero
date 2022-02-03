import { styled } from "@stitches/react";

export const Button = styled("button", {
  borderRadius: "8px",
  color: "#f0f0f5",
  transition: "all 0.4s",
  fontWeight: "700",
  height: "60px",

  "&:hover": {
    filter: "brightness(0.8)",
    cursor: "pointer",
  },
  "&:active": {
    border: "1px solid #a51930",
  },

  variants: {
    size: {
      tiny: {
        width: "60px",
      },
      small: {
        width: "168px",
      },
      medium: {
        width: "263px",
      },
      default: {
        width: "351px",
      },
      long: {
        width: "448px",
      },
    },
    color: {
      red: { background: "#e02041" },
      transparent: {
        color: "#e02041",
        background: "transparent",
      },
    },

    outline: {
      default: {
        border: "1px solid #dcdce5",
      },
      none: { border: "none" },
    },

    innerSize: {
      default: {
        fontSize: "18px",
      },
      big: {
        fontSize: "24px",
      },
    },
  },

  defaultVariants: {
    size: "default",
    color: "red",
    outline: "default",
    innerSize: "default",
  },
});

export const DeleteButton = styled("button", {
  background: "transparent",
  height: "40px",
  width: "40px",
  border: "none",
  borderRadius: "8px",
  position: "absolute",

  "&:hover": {
    cursor: "pointer",
    boxShadow: "0px 0px 5px #13131a32",
  },

  "&:active": {
    background: "#e0204160",
  },
});
