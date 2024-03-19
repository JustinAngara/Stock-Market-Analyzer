import styled from "styled-components";

const Grid = () => {
  const inventory = [
    { title: "title 1", data: "data 1", insight: "insight 1" },
    { title: "title 2", data: "data 2", insight: "insight 2" },
    { title: "title 3", data: "data 3", insight: "insight 3" },
    { title: "title 4", data: "data 4", insight: "insight 4" },
    { title: "title 5", data: "data 5", insight: "insight 5" },
  ];

  return (
    <GridStyled>
      {inventory.map((item) => (
        <GridItem key={item.title}>
          <h3>{item.title}</h3>
          <p>Data: {item.data}</p>
          <p>Insight: {item.insight}</p>
        </GridItem>
      ))}
    </GridStyled>
  );
};

export default Grid;

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive columns */
  grid-gap: 10px; /* Spacing between items */
  border: 1px solid #ff0000;
  padding: 10px; /* Padding for content */
`;

const GridItem = styled.div`
  color: black;
  background-color: #eee; /* Light background color */
  padding: 10px; /* Padding for content */
  border-radius: 5px; /* Rounded corners */
`;