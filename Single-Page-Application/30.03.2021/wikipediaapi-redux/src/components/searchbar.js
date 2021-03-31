import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {insertAction} from '../actions'

import { Button, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const SearchBar = (props) => {
    console.log('searchbar props', props);


    const searcInpRef = useRef();

    const searchBtnClick = () => {
        console.log(searcInpRef.current.value);
        // 1- option to use action
        //props.dispatch(insertAction(searcInpRef.current.value));

        props.insert(searcInpRef.current.value)
        // dispatch will:
        // 1- run the action function and get the result
        // 2- change the main state depending on the action type
        // 3- rerender ANY component which connected to the main state
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

// 2- option to use action
const mapDispatchToProps = (dispatch) => {
    return {
        insert: (text) => dispatch(insertAction(text))
    }
}
export default connect(null, mapDispatchToProps)(SearchBar);



// 3- option to use action
// export default connect(null, {insert: insertAction})(SearchBar);