import {Card,Image} from 'semantic-ui-react';

const Cardrobot = ({key,src,name,email}) => {
    <div>
        <Card key={key} className="card">
            <Image src={src} wrapped ui={true} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    {email}
                </Card.Description>
            </Card.Content>
        </Card>
    </div>
}
export default Cardrobot;