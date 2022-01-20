import Link from 'next/link';

export default function Wine({ wine }) {
  return (
    <div>
      <Link href="/">
        <a> Go Home </a>
      </Link>
      <h2>{wine.Name}</h2>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:1337/wines');
  const wines = await res.json();

  const paths = wines.map((wine) => ({
    params: { slug: wine.Slug },
  }));

  return {
    paths,
    fallback: false,
  };

 }

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://localhost:1337/wines?Slug=${slug}`);
  const data = await res.json();
  const wine = data[0];

  return {
    props: { wine },
  };

}
