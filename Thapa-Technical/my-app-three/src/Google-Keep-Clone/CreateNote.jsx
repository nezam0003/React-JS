import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import classes from "./Keep.module.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);
  const inputFieldHandller = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(`Name: ${name} Value: ${value}`);
    setNote((previousValue) => {
      // console.log(previousValue);
      return {
        ...previousValue,
        [name]: value,
      };
    });
    // console.log(note);
  };

  const showNoteOnClick = () => {
    props.notes(note);
    setNote({
      title: "",
      content: "",
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const backToNormal = () => {
    setExpand(false);
  };
  return (
    <div className={classes.write_note}>
      <Card style={{ width: "100%" }}>
        <CardContent>
          <Form>
            {expand ? (
              <Input
                type="text"
                name="title"
                placeholder="Title"
                value={note.title}
                autoComplete="off"
                onChange={inputFieldHandller}
              />
            ) : null}
            <Input
              type="textarea"
              name="content"
              placeholder="Write a Note..."
              value={note.content}
              className="mt-2"
              onChange={inputFieldHandller}
              onClick={expandIt}
              onDoubleClick={backToNormal}
            />
            <CardActions>
              {expand ? (
                <Button variant="contained" color="primary" size="small" onClick={showNoteOnClick}>
                  <AddIcon />
                </Button>
              ) : null}
            </CardActions>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateNote;
