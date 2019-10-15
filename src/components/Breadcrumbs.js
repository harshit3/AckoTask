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
            if(ind === breadcrumbs.length - 1) {
                return (
                    <span key={each}>{each}</span>
                )
            }
            return <span key={each}>
                <Link 
                    to={{
                        pathname: each==='Home'?'/':`/${each}`
                    }}
                    onClick={() => removeFromBreadcrumbs(ind)}
                >
                    {each}
                </Link>
                &nbsp;/&nbsp;
            </span>
        })
    )
}

export default Breadcrumbs;