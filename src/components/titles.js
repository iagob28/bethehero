import { styled } from "@stitches/react";

export const Title = styled("h1", {
  fontWeight: "500",
  fontSize: "20px",
  textAlign: "left",
});

export const SecondTitle = styled("h2", {
  fontWeight: "700",
  fontSize: "14px",
  textAlign: "left",
  background: "transparent",
});

export const LinkTitle = styled("a", {
  fontWeight: "700",
  fontSize: "18px",

  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
});

