import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const StarredContainer = props => {
    return (
        <Section>
            <Title>Favoritos de  {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.starred).map(star => (
                    <Repo onClick={() => window.location.href(star?.html_url)} key={star?.id}>
                        <span>{star?.owner.login} / {star?.name}</span>
                        <p>{star?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default StarredContainer;