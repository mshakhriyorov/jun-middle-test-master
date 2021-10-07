import styled from 'styled-components'

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px;

  position: relative;
  width: 216px;
  height: 272px;

  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  position: static;
  width: 200px;
  height: 32px;
  left: 8px;
  top: 8px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

export const User = styled.div`
  position: static;
  width: 200px;
  height: 32px;
  left: 8px;
  top: 40px;
  cursor: pointer;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
`
