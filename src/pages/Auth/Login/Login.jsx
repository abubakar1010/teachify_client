import { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (e) => {
		e.preventDefault();
		// Handle login logic here
		console.log(`Email: ${email}, Password: ${password}`);
	};

	return (
		<Container maxWidth="md">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography variant="heading">Login and Start Learning</Typography>
				<form onSubmit={handleLogin} style={{ width: "100%" }}>
					<TextField
						sx={{
							"&.Mui-focused fieldset": {
								borderColor: "primary.main", // Border color when focused
							},
						}}
						variant="outlined"
						margin="normal"
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<TextField
						sx={{
							"&.Mui-focused fieldset": {
								borderColor: "purple", // Border color when focused
							},
						}}
						variant="outlined"
						margin="normal"
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<Button
						type="submit"
						fullWidth
						variant="default"
						color="primary"
						sx={{ mt: 3, mb: 2 }}
					>
						Login
					</Button>
				</form>
				<Box sx={{display: "flex", gap: "4px", alignItems: "center"}}>
                    <Typography>{`Don't Have Any Account?`}</Typography>
                    <Typography variant="title" sx={{textDecoration: "none", color: "primary.main", borderBottom: "3px solid rgb(233 120 98)", paddingBottom: "1px"}} to="/register" component={Link}>Sign Up</Typography>
                </Box>
			</Box>
		</Container>
	);
}
