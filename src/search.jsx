import {Form,Input,Icon} from 'semantic-ui-react'
const Searchbar = ({onChange}) => {

    return <Form>
        <Form.Field className="form">
            <Input icon={<Icon name='search' circular link />} className="inputSearch"
                placeholder="Recherche par nom" onChange={onChange} />
        </Form.Field>
    </Form>
}
export default Searchbar;