import React from "react"
import Carousels from "../Component/Soal1/Carousel"
import ListKegiatan from "../Component/Soal1/ListKegiatan"

const Soal1 = () => {

    return (
        <>
            <Carousels />
            <br></br>
            <br></br>
            <div className="kegiatan">
                <h2 className="text-center" style={{ color: '#0e9749'}}>Kegiatan</h2>
                <br></br>
                <br></br>
                <ListKegiatan />
            </div>     
        </>
    )
}
export default Soal1