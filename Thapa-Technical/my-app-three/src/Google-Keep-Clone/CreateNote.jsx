import React from "react";
import { Form, Input } from "reactstrap";

const CreateNote = () => {
  return (
    <div>
      <Form>
        <Input type="text" name="title" placeholder="Title" />
      </Form>
    </div>
  );
};

export default CreateNote;
