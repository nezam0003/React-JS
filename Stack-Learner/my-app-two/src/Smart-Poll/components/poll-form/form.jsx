import React from "react";
import { Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";

const MyForm = ({
  title,
  description,
  options,
  errors,
  buttonValue,
  handleChange,
  handleOptionChange,
  createOption,
  deleteOptions,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          name="title"
          id="title"
          placeholder="A dummy Title"
          value={title}
          onChange={handleChange}
          invalid={errors.title ? true : false}
        />
        {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="description">description</Label>
        <Input
          name="description"
          id="description"
          placeholder="A dummy description"
          value={description}
          onChange={handleChange}
          invalid={errors.description ? true : false}
        />
        {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label>
          Enter Options
          <span
            style={{
              padding: "5px",
              marginLeft: "30px",
              borderRadius: "5px",
              background: "green",
              color: "white",
              cursor: "pointer",
            }}
            onClick={createOption}
          >
            Add Option
          </span>
        </Label>
        {options.map((opt, index) => (
          <div className="d-flex my-2" key={opt.id}>
            <Input
              value={opt.value}
              onChange={(e) => handleOptionChange(e, index)}
              invalid={errors.options && errors.options[index] ? true : false}
            />
            <Button
              color="danger"
              className="ml-2"
              disabled={options.length <= 2}
              onClick={() => deleteOptions(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </FormGroup>
      <Button type="submit" color="primary">
        {buttonValue}
      </Button>
    </Form>
  );
};

export default MyForm;
