
import { Button, FormControl, Form } from 'react-bootstrap';
import React, {useEffect, useState} from 'react'

function Search({handleClick}) {
    const [searchTerm, setSearchTerm] = useState()
    return (
        <>
            <Form onSubmit={()=> handleClick(searchTerm)} inline>
                <FormControl onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={()=> handleClick(searchTerm)} variant="outline-success">Search</Button>
            </Form>
        </>
    );
}

export default Search;
