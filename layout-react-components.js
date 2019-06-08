import styled from "styled-components";

const GridContainer = styled.div`
  display: ${props => (props.inline ? "inline-grid" : "grid")};

  grid-template-columns: ${props => props.templateColumns || "none"};
  grid-template-rows: ${props => props.templateRows || "none"};
  grid-template-areas: ${props => props.templateAreas || "none"};

  grid-auto-columns: ${props => props.autoColumns || "auto"};
  grid-auto-rows: ${props => props.autoRows || "auto"};
  grid-auto-flow: ${props => props.autoFlow || "row"};

  grid-gap: ${props => props.gap || "0 0"}; /* row column */

  justify-items: ${props => props.justifyItems || "stretch"};
  align-items: ${props => props.alignItems || "stretch"};
  justify-content: ${props => props.justifyContent || "stretch"};
  align-content: ${props => props.alignContent || "stretch"};
`;

const GridElement = styled.div`
  grid-area: ${props => props.areaName || "auto"};
  grid-column: ${props => props.column || "auto auto"}; /* start/end */
  grid-row: ${props => props.row || "auto auto"};

  justify-self: ${props => props.justifySelf || "stretch"};
  align-self: ${props => props.alignSelf || "stretch"};
`;

const FlexContainer = styled.div`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  align-content: ${props => props.alignContent || "stretch"};
  align-items: ${props => props.alignItems || "stretch"};
  justify-content: ${props => props.justify || "flex-start"};
  flex-flow: ${props => props.flow || "row nowrap"};
`;

const FlexElement = styled.div`
  align-self: ${props => props.alignSelf || "stretch"};
  flex-basis: ${props => props.basis || "auto"};
  flex-grow: ${props => props.grow || "0"};
  flex-shrink: ${props => props.shrink || "1"};
  order: ${props => props.order || "0"};
`;

export { GridContainer, GridElement, FlexContainer, FlexElement };
