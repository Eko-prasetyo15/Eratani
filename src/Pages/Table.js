import React, { useState } from "react"
import {
    Button,
    Card,
    CardTitle,
    CardBody,
    Row,
    Col,
    Form,
    InputGroup,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table
} from 'reactstrap';
import data from "../DataJson/data.json"

const Tables = () => {

    const [first_name, setFirstname] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [field, setField] = useState(data)
    const [modal, setModal] = useState({ isActive: false, id: "" });
    const [updateSearch, setUpdateSearch] = useState('')

    const toggleAdd = (id) => {
        setModal({ isActive: !modal.isActive, id });
    }
    const changeFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const changeLastname = (e) => {
        setLastName(e.target.value)
    }
    const changeGender = (e) => {
        setGender(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const AddData = () => {
        let id = data.length + 1
        setField([...field, { id, first_name, last_name, email, gender }])
        toggleAdd()
    }

    const handleSearchChange = (e) => {
        setUpdateSearch(e.target.value)
    }
    const dataSearch = field.filter(
        (item) =>
            item.first_name.toLowerCase().includes(updateSearch) ||
            item.last_name.toLowerCase().includes(updateSearch) ||
            item.email.toLowerCase().includes(updateSearch)
    )
    const ListTable =
        dataSearch.map((item, idx) => {
            return (
                <tr id={`tableData${idx}`} className={`${idx}a`} key={idx}>
                    <td>{idx + 1}</td>
                    <td contentEditable={true} suppressContentEditableWarning={true}>{item.first_name}</td>
                    <td contentEditable={true} suppressContentEditableWarning={true}>{item.last_name}</td>
                    <td contentEditable={true} suppressContentEditableWarning={true}>{item.email}</td>
                    <td contentEditable={true} suppressContentEditableWarning={true}>{item.gender}</td>
                    <td className="text-center">
                        <i className="fa fa-trash-o" aria-hidden="true" value={idx} onClick={() => {
                            alert("Apakah Anda Yakin ?")
                            document.getElementById(`tableData${idx}`).remove()
                        }}></i>

                    </td>
                </tr>
            )
        })


    return (
        <>
            <div className="container" style={{ marginTop: '100px' }}>
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        Manage User
                </CardTitle>
                    <CardBody className="">
                        <Row className="mb-3">
                            <Col>
                                <Form>
                                    <InputGroup>
                                        <Input type="text"
                                            placeholder="search"
                                            onChange={handleSearchChange} />
                                    </InputGroup>
                                </Form>
                            </Col>
                        </Row>
                        <Card>
                            <CardTitle className="bg-light border-bottom p-3 mb-0" >
                                <Col className="d-flex">
                                    <div>
                                        <i className="fa fa-list mr-3" aria-hidden="true"></i>
                                    User List
                                </div>
                                    <div className="text-right" style={{ marginLeft: 'auto' }}>
                                        <Button className="btn btn-submit btn-info waves-effect btn-label" onClick={toggleAdd.bind(null)}>
                                            Add User
                                        </Button>
                                    </div>
                                </Col>
                            </CardTitle>
                            <CardBody className=""></CardBody>
                            <Table responsive>
                                <thead>
                                    <tr >
                                        <th>NO</th>
                                        <th>FIRSTNAME</th>
                                        <th>LASTNAME</th>
                                        <th>EMAIL</th>
                                        <th>GENDER</th>
                                        <th className="text-center">ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ListTable}
                                </tbody>
                            </Table>
                        </Card>
                    </CardBody>
                </Card>
            </div>
            <Modal
                isOpen={modal.isActive}
                toggle={toggleAdd}
                size="md"
            >
                <ModalHeader toggle={toggleAdd}>Add User</ModalHeader>
                <ModalBody>
                    <form onSubmit={AddData}>
                        <div className="mb-3">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" defaultValue={first_name} onChange={changeFirstname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" defaultValue={last_name} onChange={changeLastname} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" defaultValue={email} onChange={changeEmail} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <input type="text" className="form-control" defaultValue={gender} onChange={changeGender} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="info" onClick={AddData} className="btn-submit">
                        Submit
                            </Button>
                    <Button color="secondary" onClick={toggleAdd}>
                        Cancel
                    </Button>

                </ModalFooter>
            </Modal>
        </>
    )
}

export default Tables