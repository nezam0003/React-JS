import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const Note = () => {
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        className="mb-5"
      >
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <h1>Title</h1>
              <p>this is card text</p>
              <CardActions>
                <Button variant="contained" color="secondary" size="small">
                  <DeleteIcon />
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Note;
