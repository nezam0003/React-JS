import React from "react";
import { Form, Input } from "reactstrap";
import classes from "./Keep.module.css";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const CreateNote = () => {
  return (
    <div className={classes.write_note}>
      <Card style={{ width: "100%" }}>
        <CardContent>
          <Form>
            <Input type="text" name="title" placeholder="Title" autoComplete="off" />
            <Input type="textarea" name="text" placeholder="Write a Note..." className="mt-2" />
            <CardActions>
              <Button variant="contained" color="primary" size="small">
                <AddIcon />
              </Button>
            </CardActions>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateNote;
