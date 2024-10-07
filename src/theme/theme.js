import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

const mode = "light"

const theme = createTheme({
    palette: {
        mode: `${mode}`,
      primary: {
        main: purple[500]
      },
      secondary: {
        main: purple[400]
      },
    },
    components: {
      MuiButton: {
            variants:[
              {
                props: {
                  variant: "default"
                },
                style:{
                  backgroundColor: "rgb(233 120 98)",
                  color: "white",
                  padding: "8px 90px",
                  fontSize: 18
                }
              },
              {
                props: {
                  variant: "default-outline"
                },
                style:{
                  backgroundColor: "white",
                  border: " 2px solid rgb(233 120 98) ",
                  color: "rgb(233 120 98)",
                  padding: "8px 60px",
                  fontSize: 18
                }
              }
            ]
          },
      MuiTypography: {
        variants:[
          {
            props: {
              variant: "title",
            },
            style: {
              color: "rgb(27 33 36)",
              fontSize: "1.25rem",
              fontWeight: "700"
            }
          },
          {
            props: {
              variant: "subtitle",
            },
            style: {
              color: "rgb(119 119 119)",
              fontSize: ".875rem",
              fontWeight: "600"
            }
          }
        ]
      }
        }
  });

  export default theme