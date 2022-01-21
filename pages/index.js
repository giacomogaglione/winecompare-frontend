import Container from "@mui/material/Container";
import Link from 'next/link';
import Search from "@components/Search";
import MeiliSearch from "meilisearch";
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const client = new MeiliSearch({
  host: "http://127.0.0.1:7700/"
});

const Homepage = ({ wines, num }) => {
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

export async function getServerSideProps() {

  const index = await client.getIndex('wine')
  const search = await index.search('s')
  const num = search.nbHits
  console.log(num)

  const res = await fetch('http://localhost:1337/wines');
  const wines = await res.json();

  return { props: { wines, num } }
}

export default Homepage;