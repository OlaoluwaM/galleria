import styled from 'styled-components';
import { ReactComponent as GalleriaLogo } from '../assets/logo.svg';

const HeaderWrapper = styled.header`
  svg {
    width: clamp(8.07145rem, 30%, 12.143rem);
    min-height: 2.286rem;
    max-height: 3.4286rem;
  }

  button {
    text-transform: uppercase;
    font-size: 0.7rem;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper className='flex justify-between'>
      <GalleriaLogo />
      <button type='button' className='text-button-lg btn-hover'>
        Start Slideshow
      </button>
    </HeaderWrapper>
  );
}
