import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles';

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <span>{repo?.name}</span>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;