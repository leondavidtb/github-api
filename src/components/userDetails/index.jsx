import {
    Container,
    Name,
    Description
} from './styles';

const UserDetails = props => {
    return (
        <Container>
            <Name>{props?.name}</Name>
            <Description>{props?.bio}</Description>
        </Container>
    );
}

export default UserDetails;