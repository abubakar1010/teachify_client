import {Button, Container } from "@mui/material";

const Home = () => {
    return (
        <Container >
            <h1>Home</h1>
            <Button variant="default">Default</Button>
            <Button variant="default-outline" sx={{marginLeft: 10}}>default-outline</Button>
        </Container>
    );
};

export default Home;