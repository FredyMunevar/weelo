import React from "react";

import { ListGroup, Row, Col } from "react-bootstrap";
import { TwitterLogo, LinkedinLogo, InstagramLogo, YoutubeLogo, FacebookLogo } from "phosphor-react";

import GooglePlay from "./googleplay";
import AppStore from "./appstore";

export default function WeeloFooter() {
    return(
        <div>
            <Row className="align-items-center">
                <Col xs={{ span: 2, offset: 5 }} md={{ span: 1, offset: 0 }}>
                    <div className="b-footer-logo">
                        <svg viewBox="0 0 56 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M45.8262 0L38.218 28.5496L29.5482 0H21.763L24.594 9.16077L18.2243 29.9726L10.3065 0H0L12.3412 39H21.9842L28 19.8335L34.06 39H43.6145L56 0H45.8262Z" fill="#3721A5"/></svg>
                    </div>
                </Col>
                <Col xs={ 12 } md={7} lg={5}>
                    <ListGroup horizontal className="b-footer-menu align-items-center">
                        <ListGroup.Item action href="#">Our services</ListGroup.Item>
                        <ListGroup.Item action href="#">About</ListGroup.Item>
                        <ListGroup.Item action href="#">Terms of use</ListGroup.Item>
                        <ListGroup.Item action href="#">Privacy policy</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={{ span: 6, offset: 3 }} md={{ span: 3, offset: 1 }}  lg={{ span: 3, offset: 3 }}>
                    <ListGroup horizontal className="b-footer-menu__stores justify-content-center">
                        <ListGroup.Item action href="#">
                            <GooglePlay />
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <AppStore />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row className="justify-content-center justify-content-md-between align-items-center">
                <Col xs={6} lg={4}>
                    <ListGroup horizontal className="b-footer-menu__social justify-content-between">
                        <ListGroup.Item action href="#">
                            <TwitterLogo weight="thin"/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <LinkedinLogo weight="thin"/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <InstagramLogo weight="thin"/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <YoutubeLogo weight="thin"/>
                        </ListGroup.Item>
                        <ListGroup.Item action href="#">
                            <FacebookLogo weight="thin"/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <p className="b-copyright">Copyright © 2021 Weelo - All rights reserved.</p>
            </Row>
        </div>
    );
}