import Container from "@mui/material/Container";

const Homepage = () => {
  return (
    <Container maxWidth="sm">
    <h1>Home Page</h1>
    <p>lorem*15</p>
    </Container>
  );
};

export default Homepage;

/*
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home({ wines }) {
  return (
    <div>

    {wines &&
      wines.map((wine) => (
        <Link href={`/${wine.Slug}`} key={wine.id}>
          <a>
            <h2>{wine.Name}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/wines');
  const wines = await res.json();

  return {
    props: { wines },
  };
}
*/