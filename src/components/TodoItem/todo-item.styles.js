import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex: 1;
  column-gap: 5px;
  align-items: center;
  cursor: pointer;
  word-break: break-all;
`;

export const Text = styled('span')`
  user-select: none;
  text-decoration: ${(props) => props.completed ? 'line-through' : 'none'};
`;
