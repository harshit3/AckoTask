import React, { useContext } from 'react';
import { inputData } from '../testData';
import { BreadcrumbsContext } from '../App';

const Details = ({
    match : {
        params : {
            title
        }
    },
    history
}) => {
    const { breadcrumbs } = useContext(BreadcrumbsContext);
    const detailPath = breadcrumbs.slice(1).join('_')

    const { subtitle } = inputData[detailPath] || {};
    if(!subtitle) history.replace('/');

    return (
        <div>
            <h4>Title: {title}</h4>
            <h5>Subtitle: {subtitle}</h5>
        </div>
    )
}

export default Details;