import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Container,
    NumberContainer
} from "./styles";

import { context } from '../../context';


const UserNumbers = props => {
    const ctx = useContext(context);
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <h1>{props?.repos}</h1>
                <h2>Repositórios</h2>
            </NumberContainer>

            <NumberContainer onClick={() => handleOnClick('/starred')}>
                <h1>{ctx.userStarred.length}</h1>
                <h2>Starred</h2>
            </NumberContainer>
        </Container>
    );
}

export default UserNumbers;