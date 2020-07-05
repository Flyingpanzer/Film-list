import React, { useState } from 'react';
import { Alert, Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

const AddFile = ({
  showUploadModal,
  hideUploadModal,
  addFile,
  isShowingUploadModal,
  errorUpload,
  successUploadMsg,
}) => {
  const [fileInput, setFileInput] = useState('');

  const onChange = e => {
    setFileInput(e.target.files[0]);
  };

  const fileUpload = e => {
    e.preventDefault();
    if (fileInput) {
      const formData = new FormData();
      formData.append('file', fileInput);
      addFile(formData);
      showUploadModal();
    }
  };

  return (
    <div className="container">
      <form className="form form-horizontal" onSubmit={e => fileUpload(e)}>
        <div className="row">
          <h3 className="centerAlign">Add film</h3>
          <div className="col-md-12">
            <FormGroup>
              <FormControl
                onChange={onChange}
                type="file"
                placeholder="Enter film title"
                name="filmTitle"
              />
            </FormGroup>
          </div>
        </div>
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>
            Submit
          </Button>
        </FormGroup>
      </form>

      <Modal show={isShowingUploadModal} onHide={hideUploadModal}>
        <Modal.Header>
          <Modal.Title>File uploaded</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorUpload && (
            <Alert bsStyle="warning">
              Failed. <strong>{errorUpload} </strong>
            </Alert>
          )}
          {!errorUpload && (
            <Alert bsStyle="success">
              <strong>{successUploadMsg} </strong>
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideUploadModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFile;
