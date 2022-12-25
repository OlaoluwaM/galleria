import styled from 'styled-components';
import { ArtworkInfo } from '../types';

interface ArtworkProps {
  artworkInfo: ArtworkInfo;
}

const ArtworkWrapper = styled.figure`
  width: 100%;
  display: inline-block;
  height: max-content;
  position: relative;
  color: var(--white);

  img {
    max-width: 100%;
  }

  figcaption {
    width: 100%;
    position: absolute;
    height: 12.143rem;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.841672) 100%
    );
  }

  p {
    opacity: 0.75;
  }
`;

export default function Artwork({ artworkInfo }: ArtworkProps) {
  const { artName, artist, thumbnailUrl } = artworkInfo;

  return (
    <figure>
      <img src={thumbnailUrl} alt={`The ${artName} by ${artist}`} />

      <figcaption>
        <h4 className='text-heading2'>{artName}</h4>
        <p className='text-button-sm tracking-normal'>{artist}</p>
      </figcaption>
    </figure>
  );
}
