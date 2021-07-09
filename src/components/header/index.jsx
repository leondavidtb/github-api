import { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

import api from '../../services/api';

import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context);
    const [userName, setUserName] = useState('');

    async function getUserData() {
        try {
            const response = await api.get(`/${userName}`);
            const repos = await api.get(`/${userName}/repos`);
            const starred = await api.get(`/${userName}/starred`);
            
            ctx.setUserData(response.data);
            ctx.setUserRepos(repos.data);
            ctx.setUserStarred(starred.data);
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <HeaderSection>
            <HeaderTitle>Github API Searcher</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput type="text" value={userName} onChange={e => setUserName(e.target.value)} />
        
                <HeaderSearchButton onClick={getUserData}>
                    <FiSearch size={15} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;