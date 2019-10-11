import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbsContext } from '../App';

const Breadcrumbs = () => {
    const { breadcrumbs, updateBreadcrumbs } = useContext(BreadcrumbsContext);

    const removeFromBreadcrumbs = (index) => {
        updateBreadcrumbs(breadcrumbs => {
            return breadcrumbs.slice(0, index+1)
        })
    }

    return(
        breadcrumbs.map((each, ind) => {
            const { id, title, subtitle, menu } = each;
            if(ind === breadcrumbs.length - 1) {
                return (
                    <span key={title}>{each.title}</span>
                )
            }
            return <span key={title}>
                <Link 
                    to={{
                        pathname: id?`/${id}/${title}`:'/',
                        state: id?{ subtitle, menu }:{}
                    }}
                    onClick={() => removeFromBreadcrumbs(ind)}
                >
                    {each.title}
                </Link>
                &nbsp;>&nbsp;
            </span>
        })
    )
}

export default Breadcrumbs;