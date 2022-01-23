import Container from "@mui/material/Container";
import { InstantSearch, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Hero from '@components/Hero'
import CustomHits from "@components/CustomHits";
import Search from "@components/Search";
import MuiNextLink from '@components/MuiNextLink';

const searchClient = instantMeiliSearch("http://127.0.0.1:7700/");

const Homepage = ({ wines }) => {
  return (
    <Container maxWidth="sm">
      <div>
        <Hero
          imgSrc="/wine_compare.svg"
          imgAlt="satified woman eating in restaurant"
        />
        {wines &&
          wines.map((wine) => (
            <MuiNextLink href={`/${wine.Slug}`} key={wine.id}>
              <a>
                <h2>{wine.Name}</h2>
              </a>
            </MuiNextLink>
          ))}
        <InstantSearch
          searchClient={searchClient}
          indexName="wine">
          <Search />
          <CustomHits />
          {/* <Hits hitComponent={Hit} /> */}
        </InstantSearch>
      </div>
    </Container>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/wines');
  const wines = await res.json();

  return { props: { wines } }
}

export default Homepage;