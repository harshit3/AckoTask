import React from 'react';
import Menu from './Menu';

const Details = ({
    match : {
        params : {
            title
        }
    },
    location : {
        state: {
            subtitle,
            menu = []
        }
    }
}) => {
    return (
        <div>
            <h4>Title: {title}</h4>
            <h5>Subtitle: {subtitle}</h5>
            <Menu items={menu}/>
        </div>
    )
}

export default Details;