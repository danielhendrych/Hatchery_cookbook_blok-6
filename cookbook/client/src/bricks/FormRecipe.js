import { useState } from 'react'
import { Modal, Form, Button, Row, Col } from "react-bootstrap";

function FormRecipe() {
    const [showModal, setShowModal] = useState(false);
  
    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const [information, setInformation] = useState({
       název: "",
        postup: "",
        ingredience: "",
        množství: 0,
        jednotka: "",
    });

    const setInput = (name, value) => {
        return setInformation((information) => {
            const newInformation = { ...information };
            newInformation[name] = value;
            return newInformation
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
         e.stopPropagation(); 

        const payload = {
            ...information,
        }

        console.log(payload);
    }

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Vytvořte si vlastní recept</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group 
                            className="mb-1" 
                        >
                            <Form.Label>Název</Form.Label>
                            <Form.Control 
                                type="text"
                                onChange={(e) => setInput("název", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group 
                            className="mb-1" 
                        >
                            <Form.Label>Postup</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={5}
                                onChange={(e) => setInput("postup", e.target.value)}
                            />
                        </Form.Group>

                        <Row>
                        <Form.Group as={Col} className="mb-3">
                                <Form.Label>Ingredience</Form.Label>
                                <Form.Select
                                    onChange={(e) => setInput("ingredience", e.target.value)}
                                >
                                    <option></option>
                                    <option>Vajíčko</option>
                                    <option>Hovězí maso</option>
                                    <option>Čočka</option>
                                    <option>Chleba</option>
                                    <option>Cukr</option>
                                    <option>Sůl</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} className="mb-1">
                                <Form.Label>Počet</Form.Label>
                                <Form.Control 
                                        type="number"
                                        rows={1}
                                        onChange={(e) => setInput("množství", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-1">
                                <Form.Label>Jednotka</Form.Label>
                                <Form.Select
                                    onChange={(e) => setInput("jednotka", e.target.value)}
                                >
                                    <option></option>
                                    <option>ks</option>
                                    <option>kg</option>
                                    <option>g</option>
                                    <option>ml</option>
                                    <option>l</option>
                                    <option>cm</option>
                                    <option>polévková lžíce</option>
                                    <option>čajová lžička</option>
                                    <option>hrnek</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="primary" 
                            type="submit"
                        >
                            Uložit recept
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            <Button
                variant="primary"
                onClick={handleOpen}
            >
                {"Vytvořit recept"}
            </Button>
        </>
    )
  }
  
export default FormRecipe;

