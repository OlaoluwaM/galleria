import * as I from 'fp-ts/Identity'
import * as d from 'io-ts/Decoder';
import * as A from 'fp-ts/Array';
import * as E from 'fp-ts/Either'

import { pipe } from 'fp-ts/lib/function';
import { ArtworkInfo } from '../types';
import { RawGalleryArt } from '../../../types/index';

export const ArtworkInfoDecoder = d.struct<ArtworkInfo>({
  artName: d.string,
  artist: d.string,
  thumbnailUrl: d.string,
});

export function getArtworkInfo(rawGalleryArt: RawGalleryArt[]): ArtworkInfo[] {
  const f = pipe(rawGalleryArt, A.wilt(I.Applicative)((s) => ArtworkInfoDecoder.decode(s)))
}
