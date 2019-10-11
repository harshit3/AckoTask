import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbsContext } from '../App';

const Menu = ({
    items
}) => {

    const { breadcrumbs, updateBreadcrumbs } = useContext(BreadcrumbsContext);
    
    const addToBreadCrumbs = (data) => {
        const { title } = data;
        
        const lastBreadcrumbMenu = breadcrumbs[breadcrumbs.length-1]['menu'] || []

        const findSubmenu = lastBreadcrumbMenu.filter(item => item.title === title)
        
        if(findSubmenu.length === 0) {
            updateBreadcrumbs(breadcrumbs => {
                breadcrumbs.pop()
                return [...breadcrumbs, {...data}]
            })
        }else {
            updateBreadcrumbs(breadcrumbs => {
                return [...breadcrumbs, {...data}]
            })
        }
    }

    return(
        items.map(item => {
            const { id, title, subtitle, menu } = item;
            return <div 
                key={id}
            >
                <Link
                    to={{
                        pathname: `/${id}/${title}`,
                        state: {
                            subtitle, menu
                        }
                    }}
                    onClick={() => addToBreadCrumbs(item)}
                >
                    {title}
                </Link>
            </div>
        })
    )
}

export default Menu;