import styled from 'styled-components';

// We are using a div because we want that `display: block` property of automatically stretching to fill the
// with of the parent and because height values are reflected by default
const SeparatorLine = styled.div`
  height: 1px;
  position: fixed;
  width: 100%;
  left: 0;
  background-color: var(--gray);
  margin: var(--gutters) 0;
`;

export default SeparatorLine;
