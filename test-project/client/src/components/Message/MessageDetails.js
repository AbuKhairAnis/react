import React from 'react';

const MessageDetails = ({message,index}) => {
    const{name, email,phoneNumber,address, short_message}=message

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{address}</td>
            <td>{short_message}</td>
            
        </tr>
    );
};

export default MessageDetails;