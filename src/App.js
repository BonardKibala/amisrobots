import './App.css';
import { Icon, Header, Image, Container, Grid, Segment, Form, Card, Input } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import Cardrobot from './card';

const App = () => {
  const [friends, setFriends] = useState([])
  const [search, setSearch] = useState(friends)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setLoading(false)
        setFriends(data)
        setSearch(data)
      })

  }, [])
  const handleChange = (e) => {
    e.preventDefault()
    let nameSearch = e.target.value.toUpperCase()

    const searchResult = friends.filter(result => {
      return result.name.toUpperCase().includes(nameSearch)
    })
    setSearch(searchResult)
  }

  return <div className="principalContainer">
    {loading ? <div><h1 className="loading">Loading...</h1></div> :
      <div>
        <Header as='h1' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content className="title">Bonard Kibala Robots Friends</Header.Content>
        </Header>
        <Container className="container">
          <Grid columns="equal" className="grid">
            <Grid.Column width={16} className="gridcolumn">
              <Segment color="grey" className="segment">
                <Form>
                  <Form.Field className="form">
                    <Input icon={<Icon name='search' circular link />} className="inputSearch"
                      placeholder='Search...'
                      placeholder="Recherche par nom" onChange={(e) => handleChange(e)} />
                  </Form.Field>
                </Form>
                {/* {JSON.stringify(friends)} */}
                {/* {JSON.stringify(search)} */}
                <div className="cardContainer">
                  {
                    loading ? '' : search.map((friend, index) => <div>
                      <Card key={index} className="card">
                        <Image src={`https://robohash.org/${friend.id}`} wrapped ui={true} />
                        <Card.Content>
                          <Card.Header>{friend.name}</Card.Header>
                          <Card.Description>
                            {friend.email}
                          </Card.Description>
                        </Card.Content>
                      </Card> <br></br>
                      {/* <Cardrobot key={index} src={`https://robohash.org/${friend.id}`} name={friend.name} email={friend.email} /> */}
                    </div>)
                  }
                </div>
                
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    }

  </div>
}

export default App;
