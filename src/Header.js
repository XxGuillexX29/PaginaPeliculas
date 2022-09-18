import React from "react";
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import { Col } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

class Header extends React.Component {
    render() {
        return (
            <>
                <header className="p-3 mb-2 bg-dark">
                    <ul>
                    <Stack direction="horizontal" gap={3}>
                        <Col xs={12} md={11}>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="Logo"
                                    src="./Logo2.png"/>
                                    </Col>
                                    <Col xs={12} md={1}>
                                <Button variant="dark" href="./public/peliculas.html" target="_blank">Peliculas</Button>
                                </Col>
                                </Stack>
                    </ul>
                </header>
            </>
        );
    }
}


export default Header;
