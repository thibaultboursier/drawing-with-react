import React from 'react';
import { Button, ButtonGroup, Modal } from 'react-bootstrap';
import { ReactPainter } from 'react-painter';

export class DrawingModal extends React.Component {
    state = {
        url: null
    }

    render() { 
        return <Modal
            dialogClassName="drawing-modal"
            onHide={this.props.onHide}
            ref={e => (this.modalRef = e)}
            show={this.props.show}
        >
            <Modal.Header closeButton />
            <Modal.Body> 
                <ReactPainter
                    image={this.props.imageUrl}
                    onSave={this.save}
                    render={({ canvas, triggerSave }) => (
                        <div>
                            <ButtonGroup>
                                <Button bsStyle="default" onClick={this.clear} disabled>Clear</Button>
                                <Button bsStyle="primary" onClick={triggerSave}>Save</Button>
                            </ButtonGroup>
                            <div>{canvas}</div>
                        </div>
                      )
                    }
                />
            </Modal.Body>
        </Modal>
    }

    clear = () => {
        console.log(this);
    }

    save = (blob) => {
        const reader = new FileReader();
        
        reader.readAsDataURL(blob); 
        reader.onloadend = () => this.props.onDrawingSaved(reader.result);
    }
};
