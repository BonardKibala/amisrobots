import './App.css';
import { Icon, Header, Image, Container, Grid, Segment, Form, Card, Input, Modal, Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import Cardrobot from './card';
import React from 'react'

const App = () => {
  const [friends, setFriends] = useState([])
  const [search, setSearch] = useState(friends)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [modalFriend, setmodalFriend] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setLoading(false)
        setFriends(data)
        setSearch(data)
      })

  }, [])

  const currentinfo = (element) => {
    setmodalFriend([element])
  }
  console.log(modalFriend)

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
                {/* {JSON.stringify(modalFriend)} */}
                <div className="cardContainer">
                  {
                    loading ? '' : search.map((friend, index) => <div>

                      {/* ------------------Modal--------------------- */}

                      <Modal
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<div><Card key={index} className="card" onClick={() => currentinfo({id:friend.id, name: friend.name, email: friend.email,street:friend.address.street
                         ,suite:friend.address.suite,city:friend.address.city,zipcode:friend.address.zipcode,phone:friend.phone,website:friend.website
                         ,companyName:friend.company.name})}>
                          <Image src={`https://robohash.org/${friend.id}`} wrapped ui={true} />
                          <Card.Content>
                            <Card.Header>{friend.name}</Card.Header>
                            <Card.Description>
                              {friend.email}
                            </Card.Description>
                          </Card.Content>
                        </Card> <br></br></div>}
                      >
                           {modalFriend.map(elt=><> <Modal.Header>{elt.name}</Modal.Header>
                          <Modal.Content image>
                            <Image size='medium' src={`https://robohash.org/${elt.id}`} wrapped />
                            <Modal.Description>
                              <address>
                             E-mail: {elt.email} <br></br>
                            <span>Adress:</span> {`${elt.street} street, ${elt.suite} suite, ${elt.city} city, ${elt.zipcode} zipcode`} <br></br>
                              Phone: {elt.phone} <br></br>
                              Website: {elt.website}<br></br>
                              CompanyName: {elt.companyName}
                              </address>
                              <p></p>
                            </Modal.Description>
                          </Modal.Content>
                          </>)}
                        <Modal.Actions>
                          <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
                        </Modal.Actions>
                      </Modal>
                      {/* -------------------End modal----------------- */} </div>)
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
