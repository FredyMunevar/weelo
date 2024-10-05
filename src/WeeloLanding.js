import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import WeeloHeaderDropdown from "./components/headerDropdown";
import WeeloFooter from "./components/footer";
import WeeloIncluded from "./components/contentIncluded";
import WeeloReport from "./components/contentReport";

import WeeloChatbot from "./components/chatbot";

import { Fade } from 'react-reveal';

import "./scss/styles.scss";

export default function WeeloLanding() {
  return(
        <div id='body'>
            <Container>
                <Fade>
                    <WeeloHeaderDropdown />
                </Fade>
            </Container>
            <Container className="mt-5">

                <Row className="d-lg-flex">
                    <Col xs={{ span: 12, offset: 0 }} md={{ span: 9, offset: 4 }} xl={{ span: 6, offset: 1 }} className="order-xl-2">
                        <WeeloIncluded />
                    </Col>
                    <Col xs={{ span: 12, offset: 0 }}  xl={{ span: 5, offset: 0 }} className="order-xl-1">
                        <WeeloReport />
                    </Col>
                </Row>

            </Container>
            <footer>
                <WeeloChatbot />
                <Fade>
                    <Container>
                        <WeeloFooter />
                    </Container>
                </Fade>
            </footer>
        </div>
    );
}


// DEJO ESTE CÓDIGO ACÁ PORQUE SIRVE EN CASO DE NECESITAR DIVIDIR
// LOS COMPONENTES PARA PROYECTOS MÁS GRANDES

// const Header = () =>{
//     return(
//         <Container>
//             <WeeloHeaderDropdown />
//         </Container>
//     );
// }

// const Footer = () =>{
//     return(
//         <footer>
//             <WeeloChatbot />
//             <Container>
//                 <WeeloFooter />
//             </Container>
//         </footer>
//     );
// }