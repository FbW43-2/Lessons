import React, {useRef} from 'react';
import { Container, InputGroup, Row, Button, FormControl } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getDataAction} from '../actions'

const SearchBar = (props) => {

    const inputRef = useRef();

    const serchBtnClick = () => {
        props.getDataAction(inputRef.current.value)
    }

    return (
        <Container>
            <Row>
                <InputGroup className='mt-3 mb-3'>
                    <InputGroup.Prepend>
                        <Button onClick={serchBtnClick} variant="outline-secondary">Search</Button>
                    </InputGroup.Prepend>
                    <FormControl ref={inputRef} aria-describedby="basic-on1" />
                </InputGroup>
            </Row>
        </Container>
    );
};



export default connect(null,{getDataAction})(SearchBar);