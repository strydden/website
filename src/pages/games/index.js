import { jsx, Container, Text } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Project from "components/Project";
import { games } from "constants/games";


const Games = () => {
    return (
        <Layout>
          <Container>
            <PageTitle
              title="Games"
              text="Explore our wide range of games"
            />
            <Project
                data={games[0]}
                backgroundColor="backgroundSecondary"
                flexDirection="row"
                technologies={false}
      />
            <Project
                data={games[1]}
                backgroundColor="backgroundSecondary"
                flexDirection="row-reverse"
                technologies={false}
      />
            <Project
                data={games[2]}
                backgroundColor="backgroundSecondary"
                flexDirection="row"
                technologies={false}
      />
            <Project
                data={games[3]}
                backgroundColor="backgroundSecondary"
                flexDirection="row-reverse"
                technologies={false}
      />
          </Container>
        </Layout>
      );
}

export default Games