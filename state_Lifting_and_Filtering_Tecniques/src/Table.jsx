
import { useState } from 'react';
const Table = ({ contacts }) => {



    const [filter, setFilter] = useState('all')

    const handleChange = (e) => {
        setFilter(e.target.value)
    };

    const [searchTerm, setSearchTerm] = useState('');

   
    const searchCB = (contact) => contact.name.toLowerCase().includes(searchTerm) || contact.email.toLowerCase().includes(searchTerm)
    



    let filterContact = [];


    // if (filter === 'all') {
    //     filterContact = contacts
    // } else {
    //     filterContact = contacts.filter(contact => contact.group === filter)
    // };


    // if (searchTerm) {
    //     filterContact = filterContact.filter(contact => contact.name.toLowerCase().includes(searchTerm) || contact.email.toLowerCase().includes(searchTerm))

    // }

    if (filter === "all") {
        filterContact = searchTerm ? contacts.filter(searchCB) : contacts;

    } else {
        filterContact = contacts.filter(contact => contact.group === filter && searchCB(contact)
        );
    }



    return (
        <>
            <br />
            <div>
                <label>Filter:</label>
                <select onChange={handleChange} >
                    <option value="all">All</option>
                    <option value="">None</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <input type="search" placeholder='search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <br />
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Group</th>
                </tr>

                {
                    filterContact.map((contact, index) =>
                        
                         <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.group}</td>
                        </tr>

                    )
                }
            </table>
        </>

    )
}

export default Table;