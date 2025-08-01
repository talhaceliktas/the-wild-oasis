import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) => {
    const type = props.type || "vertical";
    return type === "horizontal"
      ? css`
          justify-content: space-between;
          align-items: center;
        `
      : css`
          flex-direction: column;
          gap: 1.6rem;
        `;
  }}
`;

export default Row;
