import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../components/Card";
import building1 from "../assets/images/building1.png";
import building2 from "../assets/images/building2.jpg";
import building3 from "../assets/images/building3.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Research Paper Summarization",
          subTitle: "Natural Language Processing Project",
          imgSrc: building1,
          link:
            "https://github.com/jananiarunachalam/Research-Paper-Summarization",
          selected: false,
        },
        {
          id: 1,
          title: "Toss It Right",
          subTitle: "A recycling app",
          imgSrc: building2,
          link: "https://github.com/jananiarunachalam/TossItRight",
          selected: false,
        },
        {
          id: 2,
          title: "Brainstorm",
          subTitle: "A content sharing website",
          imgSrc: building3,
          link: "https://github.com/jananiarunachalam/Brainstorm",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
