import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import PropTypes from "prop-types";

const BulkController = ({ clearSelected, clearCompleted, reset }) => {
  return (
    <ButtonGroup>
      <Button color="danger" onClick={clearSelected}>
        Clear Selected
      </Button>
      <Button color="danger" onClick={clearCompleted}>
        Clear Completed
      </Button>
      <Button color="danger" onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};
BulkController.propTypes = {
  clearSelected: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default BulkController;
