import React from "react"

const Footer = () => {

    return (
        <footer style={{ backgroundColor: '#0e9749', color:'white', position:'absolute'}}>
            <div className="container">
                <div className="row" style={{flexWrap:'wrap'}}>
                    <div className="col-lg-5">
                        <div className="footer-col">
                            <a href="/">
                                <figure className="footer-logo"><img src="https://eratani.co.id/assets/img/logo-white.png" alt="" /></figure>
                            </a>
                            <p className="mb-2 alamat">
                                Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 Unit J, Jakarta
                                Selatan, DKI Jakarta 12870, Indonesia
                            </p>
                            <p>Email : info@eratani.co.id</p>
                            <p>Telepon : +62 811 952 2577</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h4>Menu</h4>
                        <div className="footer-menu">
                            <div><a href="/" style={{color:'white', textDecoration:'none'}}>Beranda</a></div>
                            <div><a href="/our-team" style={{ color: 'white', textDecoration: 'none' }}>Tim Kami</a></div>
                            <div><a href="/news" style={{ color: 'white', textDecoration: 'none' }}>Tips &amp; Berita Pertanian</a></div>
                        </div>
                    </div>
                    <div className="col-lg-4 footer-col-right">
                    </div>
                </div>
                <div className="socmed">
                    <a href="https://vt.tiktok.com/ZSe6mM8uL/" style={{ marginRight: "30px" }}><img src="https://www.eratani.co.id/assets/img/icon_tiktok.png" alt="" /></a>
                    <a href="https://instagram.com/erataniindonesia" style={{ marginRight: "30px" }}><img src="https://www.eratani.co.id/assets/img/icon_ig.png" alt="" /></a>
                    <a href="https://www.linkedin.com/company/eratani" style={{ marginRight: "30px" }}><img src="https://www.eratani.co.id/assets/img/icon_linkedin.png" alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCJVSBg8OVokZooGalKhLUHQ/featured" style={{ marginRight: "30px" }}><img src="https://www.eratani.co.id/assets/img/icon_youtube.png" alt="" /></a>
                    <a href="https://api.whatsapp.com/send?phone=628119522577&amp;text=Halo,%20Saya%20ingin%20menjadi%20bagian%20dari%20Eratani"><img src="https://www.eratani.co.id/assets/img/icon_wa.png" alt="" /></a>
                </div>
            </div>
            <p className="copyright">Copyright © 2021 by PT Eratani Teknologi Nusantara</p>
        </footer>
    )
}
export default Footer