import {Modal,Card,Button,Image} from 'semantic-ui-react'
import { useState } from 'react';
import React from 'react'


const ModalCard = ({search})=>{
    const [open, setOpen] = React.useState(false)
    const [modalFriend, setmodalFriend] = useState([])

    const currentinfo = (element) => {
        setmodalFriend([element])
      }
      console.log(modalFriend)
    return(
        <>
        {
                search.map((friend, index) => <div>
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
                      </Modal></div>)
                  }
        </>
    )
}
export default ModalCard;