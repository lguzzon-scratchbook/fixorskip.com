import {globalStyle, style} from "@vanilla-extract/css"
import {recipe} from "@vanilla-extract/recipes"

export const Main = style({
  padding: 50,
  display: "grid",
  gridTemplateColumns: "minmax(360px,25vw) auto",
  gridTemplateAreas: `
    "aside content"
    "aside content"
    "aside content"
    "aside content"
    "aside foot"
    `,
  columnGap: "10vw",
  minHeight: "100vh",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: 20,
      gridTemplateColumns: "auto",
      gridTemplateAreas: `
                "content"
                "aside"
                "foot"
            `,
      gridTemplateRows: "230px auto auto",
      rowGap: "20px"
    },
    "screen and (max-width: 500px)": {padding: 5}
  }
})
export const Row = style({display: "flex", columnGap: 10, alignItems: "center"})

export const OftenRow = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  width: "100%",
  marginTop: 10
})

export const Aside = style({
  padding: 30,
  borderRadius: 24,
  backgroundColor: "#FFF",
  height: "100%",
  gridArea: "aside",
  boxShadow: "0px 8px 50px rgba(0,0,0,0.22)"
})

export const LogoStyles = style({width: 140, opacity: 0.5})

export const Result = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  flexDirection: "column",
  height: "100%"
})

export const ResultGroup = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  gridArea: "content",
  flexGrow: 1,

  "@media": {"screen and (max-width: 768px)": {alignItems: "center"}}
})

export const Month = style({
  padding: 30,
  borderRadius: 24,
  backgroundColor: "#FFF",
  boxShadow: "0px 2px 10px rgba(0,0,0,0.2)"
})

export const OftenButton = recipe({
  base: {
    padding: "8px 14px",
    borderRadius: 0,
    backgroundColor: "white",
    color: "#2D2D47",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRight: "none",
    ":hover": {backgroundColor: "rgba(0,0,0,0.1)"},
    ":first-child": {borderTopLeftRadius: 8, borderBottomLeftRadius: 8},
    ":last-child": {
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      borderRight: "1px solid rgba(0,0,0,0.1)"
    }
  },
  variants: {
    active: {
      true: {
        backgroundColor: "#2D2D47",
        color: "#FFF",
        ":hover": {backgroundColor: "#2D2D47", cursor: "default"}
      }
    }
  }
})

export const PeriodButton = recipe({
  base: {
    padding: "8px 14px",
    border: "none",
    borderRadius: 8,
    backgroundColor: "rgba(220, 230, 240, 0.5)",
    color: "#2D2D47",
    ":hover": {backgroundColor: "rgba(220, 230, 240, 0.75)"}
  },
  variants: {
    active: {
      true: {
        backgroundColor: "#2D2D47",
        color: "#FFF",
        ":hover": {backgroundColor: "#2D2D47", cursor: "default"}
      }
    }
  }
})

export const Section = style({
  borderTop: "1px solid rgba(0,0,0,0.05)",
  paddingTop: 10,
  marginTop: 25,
  ":first-child": {marginTop: 0, paddingTop: 0, borderTop: "none"}
})

export const PeriodButtonGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: 5,
  columnGap: 5,
  marginTop: 10,
  width: "100%"
})

globalStyle("html, body", {
  margin: 0,
  padding: 0,
  background:
    "linear-gradient(0deg, rgba(224,228,233,1) 0%, rgba(245,247,249,1) 62%, rgba(255,255,255,1) 100%)",
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
})

globalStyle("*", {textRendering: "optimizeLegibility", boxSizing: "border-box"})

globalStyle("p, span", {fontSize: 14})

globalStyle("button", {cursor: "pointer"})
globalStyle("h2", {
  display: "block",
  fontSize: 32,
  paddingBottom: "6px",
  borderBottom: "2.5px solid #000",
  marginBottom: 10
})

globalStyle("footer p", {
  margin: 0,
  fontSize: 12,
  display: "block",
  padding: "5px 10px",
  borderRadius: "15px",
  textAlign: "center",
  lineHeight: "16px",
  border: "1px solid rgba(0,0,0,0.075)"
})

globalStyle("footer", {
  gridArea: "foot",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center"
})

globalStyle("input", {
  width: "100%",
  backgroundColor: "rgba(10,20,30,0.077)",
  border: "none",
  borderRadius: "7px",
  padding: "10px"
})

globalStyle("input, button", {fontSize: 12})
