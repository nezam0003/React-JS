import React, { Fragment } from "react";
import {
  CardDeck,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Button,
} from "reactstrap";
import classes from "./card.module.css";

const MyCard = (props) => {
  return (
    <Fragment>
      <CardDeck>
        <Card>
          <CardImg top src={props.imageSource} className={classes.cardImageStyle} alt="cardImage" />
          <CardBody>
            <CardText className="my-2 text-muted">{props.description}</CardText>
            <CardTitle tag="h3">{props.title}</CardTitle>
            <CardLink href={props.movieLink} target="_blank">
              <Button color="danger">Watch Now</Button>
            </CardLink>
          </CardBody>
        </Card>
      </CardDeck>
    </Fragment>
  );
};

export default MyCard;
