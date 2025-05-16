export const theme = {
    colors: {
        background: "#1e1f2b",
        primaryColor: "#ffffff",
        subtitleColor: "#70e3c2",
        buttonColor: "#f4d8da",
        buttonText: "#1e1e1e",
        gradientTitle: "linear-gradient(90deg, rgba(112, 227, 194, 1) 0%, rgba(255, 207, 203, 1) 100%);",
        heroBackground: "radial-gradient(circle at 0% 0%, rgba(24, 28, 72, 1) 56%, rgba(255, 207, 203, 1) 100%);",
        gradientDiv: "linear-gradient(90deg, rgba(0, 255, 225, 1) 0%, rgba(244, 216, 218, 1) 69%);",

    },
    fontSizes: {
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "48px",
        xxl: "4rem",
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
        six: "6rem",
    },
    padding: {
        normal: "4rem 6rem",
    },
    breakpoints: {
      mobile: "490px",
      tablet: "990px",
      desktop: "1220px",
    }
}


export type ThemeType = typeof theme;