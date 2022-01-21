import Container from "@mui/material/Container";
import Link from 'next/link';
import ToggleButton from "../components/ToggleButton";
import Box from "@mui/material/Box";
import Search from "@components/Search";

const Homepage = ({ wines }) => {
  return (
    <Container maxWidth="sm">
      <div>
      <Search />
        {wines &&
          wines.map((wine) => (
            <Link href={`/${wine.Slug}`} key={wine.id}>
              <a>
                <h2>{wine.Name}</h2>
              </a>
            </Link>
          ))}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/wines');
  const wines = await res.json();

  return {
    props: { wines },
  };
}

export default Homepage;