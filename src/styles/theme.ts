export const theme = {
    colors: {
        background: "#1e1f2b",
        primaryColor: "#ffffff",
        subtitleColor: "#70e3c2",
        buttonColor: "#f4d8da",
        buttonText: "#1e1e1e",
        gradientTitle: "linear-gradient(90deg, rgba(112, 227, 194, 1) 0%, rgba(255, 207, 203, 1) 100%);",
        heroBackground: "radial-gradient(circle at 0% 0%, rgba(24, 28, 72, 1) 56%, rgba(255, 207, 203, 1) 100%);",

    },
    fontSizes: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        xxl: "4rem",
    },
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
    },
    padding: {
        normal: "4rem 6rem",
    }
}


export type ThemeType = typeof theme;