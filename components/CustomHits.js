import { connectStateResults } from "react-instantsearch-dom";
import MuiNextLink from '@components/MuiNextLink';

function Hits({ searchState, searchResults }) {
    const validQuery = searchState.query?.length >= 3;

    return (
        <>
            {searchResults?.hits.length === 0 && validQuery && (
                <p>Aw snap! No search results were found.</p>
            )}
            {searchResults?.hits.length > 0 && validQuery && (
                <ol>
                    {searchResults.hits.map((hit) => (
                        <MuiNextLink href={`/${hit.Slug}`} key={hit.uid}>
                            <a>
                                <li key={hit.uid}>{hit.Name}</li>
                            </a>
                        </MuiNextLink>
                    ))}
                </ol>
            )
            }
        </>
    );
}

export default connectStateResults(Hits);
