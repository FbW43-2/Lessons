import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {insertAction} from '../actions'

import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const SearchBar = (props) => {
    console.log('searchbar props', props);


    const searcInpRef = useRef();

    const searchBtnClick = () => {
        console.log(searcInpRef.current.value);
    }
    return (
        <Container>
            <Row>
                <InputGroup className="mb-3 mt-3">
                    <InputGroup.Prepend>
                        <Button onClick={searchBtnClick} variant="outline-secondary">Search</Button>
                    </InputGroup.Prepend>
                    <FormControl ref={searcInpRef} aria-describedby="basic-addon1" />
                </InputGroup>
            </Row>
        </Container>
    );
};

export default connect(null, null)(SearchBar);