
import { Button, FormControl, Form } from 'react-bootstrap';
import React, {useEffect, useState} from 'react'

function Search({handleClick, handleSearchChange, value}) {
    const [searchTerm, setSearchTerm] = useState()
    return (
        <>
            <Form onSubmit={()=> handleClick(searchTerm)} inline>
                <FormControl
                name='search'
                value={value || ""}
                 onChange={(e)=> {
                    setSearchTerm(e.target.value)
                    handleSearchChange(e.target.value)
                    }} type="text" placeholder="Type to search" className="mr-sm-2" />
                {/* <Button onClick={()=> handleClick(searchTerm)} variant="outline-success">Search</Button> */}
            </Form>
        </>
    );
}

export default Search;
