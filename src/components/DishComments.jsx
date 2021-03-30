import { ListGroup } from "react-bootstrap";
import React from "react";

// const DishComments = (props) =>
//     props.selectedDish
//         ? <ListGroup>
//             <h2>Comments for {props.selectedDish.name}</h2>
//             {
//                 props.selectedDish.comments.map(c => (
//                     <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
//                 ))
//             }
//         </ListGroup>
//         : <h1>NOTHING YET</h1>

// class DishComments extends React.Component {
//   render() {
//     if (this.props.selectedDish) {
//       return (
//         <ListGroup>
//           <h2>Comments for {this.props.selectedDish.name}</h2>
//           {this.props.selectedDish.comments.map((c) => (
//             <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
//           ))}
//         </ListGroup>
//       );
//     } else {
//       return <h1>NOTHING YET</h1>;
//     }
//   }
// }

class DishComments extends React.Component {
//   componentDidMount() {
//       setTimeout(() => {this.setState}, 1000)
//   }

  render() {
    return (
      <>
        {!this.props.selectedDish && <h1>Nothing to show</h1>}
        {this.props.selectedDish && (
          <ListGroup>
            <h2>Comments for {this.props.selectedDish.name}</h2>
            {this.props.selectedDish.comments.map((c) => (
              <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        )} 
      </>
    );
  }
}

export default DishComments;
// mapping props.selectedDish.comments
