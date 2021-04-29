import { Icon, Header, Container, Grid, Segment} from 'semantic-ui-react';
import Searchbar from './search'
import ModalCard from './modalcard'
const MainContainer =({onChange,search})=>{

    return (
        <div className="principalContainer">
<Header as='h1' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content className="title">Bonard Kibala Robots Friends</Header.Content>
        </Header>
        <Container className="container">
          <Grid columns="equal" className="grid">
            <Grid.Column width={16} className="gridcolumn">
              <Segment color="grey" className="segment">
               <Searchbar onChange={onChange}/>
                <div className="cardContainer">
                  <ModalCard search={search}/>
                </div>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
        </div>
    )
}
export default MainContainer;