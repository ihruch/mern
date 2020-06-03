import React from 'react'
import {Link} from 'react-router-dom';


export const LinksList = ({links}) => {

    if( !links.length) {
        return  <p> Links NotFound</p>
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Оригинальная</th>
                    <th>Сокращенная</th>
                    <th>Открыть</th>
                </tr>
            </thead>

            <tbody>
            { links.map( (link, ind) => {
                return(
                    <tr key={link._id}>
                        <td>{ind + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                           <Link to={`/detail/${link._id}`}>open</Link>
                        </td>
                    </tr>

                )})}

            </tbody>
        </table>
    )

}
