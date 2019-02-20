import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Button from '@material-ui/core/Button';

class PopUp extends Component {
  render() {
    const { isOpen, toggle, children, title, footer } = this.props;
    const { action, actionText } = footer;
    const showActionButtons = action ? true : false;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} className={this.props.className}>
          <ModalHeader toggle={toggle}>{title || 'Modal title'}</ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {showActionButtons && (
              <div>
                <Button variant="contained" color="primary" onClick={footer.action}>
                  {actionText}
                </Button>{' '}
                {
                  <Button variant="contained" color="primary" onClick={toggle}>
                    Cancel
                  </Button>
                }
              </div>
            )}
            {showActionButtons || (
              <Button variant="contained" color="primary" onClick={toggle}>
                Close
              </Button>
            )}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;
