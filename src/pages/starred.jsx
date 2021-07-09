import React, { useContext } from 'react';

import Container from "../components/container";
import StarredContainer from "../components/starredContainer";

import { context } from '../context';

const Starred = () => {
    const ctx = useContext(context);

    return (
        <Container>
            <StarredContainer name={ctx.userData?.name} starred={ctx.userStarred} />
        </Container>
    );
}

export default Starred;