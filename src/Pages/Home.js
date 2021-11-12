import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postData } from "../Redux/Actions"
import { Card, CardBody, CardTitle, Button, Row} from "reactstrap"
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(postData())
    }, [dispatch])

    const stateData = useSelector((state) => state.Datas.datas)
  
    return (
        <div className="container" style={{ marginTop: '100px' }}>
            <Row>
                {stateData.map((item, idx) => {
                    return (
                        <div className="col-lg-4 col-md-12" key={idx}>
                            <Card className="mb-3" >
                                <CardBody>

                                    <img width="100%" src={item.image} alt="" />
                                    <small style={{ color: '#8c8c8c'}}>
                                        {item.date}
                                    </small>
                                    <CardTitle className="mt-3 mb-3" tag="h3">
                                        {item.title}
                                    </CardTitle>
                                    <span>Oleh : Eratani Team</span>
                                    <div className="text-center mt-3">
                                        <Button className="btn-warning">
                                            Lihat Selengkapnya
                                </Button>
                                    </div>
                                </CardBody>

                            </Card>
                        </div>
                    )
                })}
            </Row>


        </div>
    )
}
export default Home