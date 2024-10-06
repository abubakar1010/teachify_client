import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme.js";
import "./index.css";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	</StrictMode>
);
