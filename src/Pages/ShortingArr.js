import React, { useState } from "react"
import { Form, InputGroup, Input, Row, Col } from "reactstrap"
const ShortingArr = () => {
    const [arr] = useState([8, 2, 20, -7, 25, -1, 5])
    const [updateSearch, setUpdateSearch] = useState('')

    arr.sort(function (a, b) { return a - b });

    const data = ["Danawi Liam", "Tarjaya", "Daruna", "Warsoni", "John Wick", "Hadi PS", "Derian Lekso"]
    
    const dataSearch = data.filter(
        (item) =>
            item.toLowerCase().includes(updateSearch)
    )
    const ListData = dataSearch.map((item, idx) => {

        return (
            <li className="list-group-item" key={idx}>{item}</li>
        )
    })
    const handleSearchChange = (e) => {
        setUpdateSearch(e.target.value)
    }
    console.log(arr)
    return (
        <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
            <div className="text-center">
                <div className="mb-3">
                    <h1>Shorting</h1>
                    <ul className="list-group list-group-horizontal justify-content-center">
                        {arr.map((item, idx) => {
                            return (
                                <li className="list-group-item" key={idx}>{item}</li>

                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h1>Filter</h1>
                    <Row className="mb-3">
                        <Col>
                            <Form>
                                <InputGroup>
                                    <Input type="text"
                                        placeholder="filter"
                                        onChange={handleSearchChange} />
                                </InputGroup>
                            </Form>
                        </Col>
                    </Row>
                    <ul className="list-group list-group-flush">
                        {ListData}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default ShortingArr
