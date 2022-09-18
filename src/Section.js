import React from "react";
import { Figure, Stack } from "react-bootstrap";


class Section extends React.Component {
    render() {
        return (
            <>
                <section className="p-3 mb-2 bg-dark text-white">
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Figure.Image
                        width={900}
                        height={1200}
                        alt="Cartelera"
                        src="./Pelis1.png" />
                        </Stack>
                </section>
            </>
        );

    }
}

export default Section;