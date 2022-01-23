import { Container, Grid } from "@mui/material";
import Image from "next/image";

const Hero = () => {
    return (
        <Container component="section" maxWidth="md" sx={{ mb: 15 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Image
                        src="/wine_compare.svg"
                        alt="Wine Compare"
                        layout="responsive"
                        width={1200}
                        height={800}
                    />
                </Grid>
               
            </Grid>
        </Container>
    );
};

export default Hero;