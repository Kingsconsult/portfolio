import theme from "styled-theming";


export const cirlcesWidth = theme.variants("mode", "circleWidth", {
         small: { light: "width: 30px" },
         medium: { light: "width: 40px" },
         large: { light: "width: 100px" }
       });

export const circleHeight = theme.variants("mode", "circleHeight", {
         small: { light: "height: 30px" },
         medium: { light: "height: 40px" },
         large: { light: "height: 100px" }
       });

export const border = theme.variants("mode", "border", {
         border: { light: "border: 2px solid blue" }
});
       
export const hover = theme.variants("mode", "hover", {
    blueBackground: {light: "&:hover {background-color: blue}"},
})

export const hoverBorder = theme.variants("mode", "hoverBorder", {
         border: {
           light: "&:hover {border: 10px solid #C2C9FD}"
         }
       });