import React, { useContext } from 'react';
import { inputData } from '../testData';
import { Link } from 'react-router-dom';
import { BreadcrumbsContext } from '../App';
import '../App.css';

const MainMenu = () => {
    const { breadcrumbs, updateBreadcrumbs } = useContext(BreadcrumbsContext);

    const addToBreadCrumbs = (title) => {
        let nextPath = `${breadcrumbs.slice(1).join('_')===''
        ?''
        :`${breadcrumbs.slice(1).join('_')}_`}${title}`

        while(Object.keys(inputData).indexOf(nextPath) === -1) {
            breadcrumbs.pop();
            nextPath = `${breadcrumbs.slice(1).join('_')===''
                ?''
                :`${breadcrumbs.slice(1).join('_')}_`}${title}`
        }
        updateBreadcrumbs([ ...breadcrumbs, title ])

    }

    const findChildren = (menu) => {
        if(!menu || menu.length===0)
            return []
        
        return(
            <div className='childlist'>
                {menu.map(each => {
                    const { title, menu } = inputData[each];
                    return <div key={title} className='child'>
                        <Link 
                            to={`/${title}`}
                            onClick={() => addToBreadCrumbs(title)}                
                        >
                            {title}
                        </Link>
                        {breadcrumbs.indexOf(title)!==-1 && findChildren(menu)}
                    </div>                    
                })}
            </div>
        )
    }
    
    return(
        inputData['Home']['menu'].map(menuItem => {
            const { title, menu } = inputData[menuItem];
            return <div key={title} className='button'>
                <Link
                    to={`/${title}`}
                    onClick={() => addToBreadCrumbs(title)}
                >
                    {title}
                </Link>
                <div className='child'>
                    {breadcrumbs.indexOf(title)!==-1 && findChildren(menu)}
                </div>
                <hr />
            </div>
        })
    )
}

export default MainMenu;