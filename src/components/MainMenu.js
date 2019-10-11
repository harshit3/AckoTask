import React, { useContext } from 'react';
import { inputData } from '../testData';
import { Link } from 'react-router-dom';
import { BreadcrumbsContext } from '../App';

const MainMenu = () => {
    const { breadcrumbs, updateBreadcrumbs } = useContext(BreadcrumbsContext);

    const addToBreadCrumbs = (data) => {
        const { title } = data;

        const mainMenus = breadcrumbs[0]['menu'];

        const isAlreadyPresent = breadcrumbs.filter((item, ind) => {
            const ifAnyMatchWithMain = mainMenus.filter(mainItem => mainItem.title===item.title).length===0?false:true;
            
            const ifLastBreadcrumbInMain = mainMenus.filter((item => item.title===breadcrumbs[breadcrumbs.length-1]['title'])).length===0?false:true
            if(ifLastBreadcrumbInMain) {
                return false
            }else if(ifAnyMatchWithMain) {
                return true
            }else {
                return false
            }
        }).length===0?false:true

        if(!isAlreadyPresent) {
            const findSubmenu = breadcrumbs[breadcrumbs.length-1]['menu'].filter(item => item.title === title)
            if(findSubmenu.length === 0) {
                updateBreadcrumbs(breadcrumbs => {
                    breadcrumbs.pop()
                    return [...breadcrumbs, { ...data }]
                })
            }else {
                updateBreadcrumbs(breadcrumbs => {
                    return [...breadcrumbs, { ...data }]
                })
            }
        }
    }

    return(
        inputData.map(data => {
            const { id, title, subtitle, menu = [] } = data;
            return <div key={id} >
                <Link
                    to={{
                        pathname: `/${id}/${title}`,
                        state: {
                            subtitle, menu
                        }
                    }}
                    onClick={() => addToBreadCrumbs(data)}
                >
                    {title}
                </Link>
            </div>
        })
    )
}

export default MainMenu;