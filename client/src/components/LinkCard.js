import  React from 'react'

export const LinkCard = ({ link }) => {

    return(
        <>
            <h2>Link</h2>
            <p> <strong>Ваша ссылка:</strong> {link.to}</p>
            <p> <strong>Откуда ссылка:</strong> {link.from}</p>
            <p> <strong>Кол-во кликов:</strong> {link.clicks}</p>
            <p> <strong>Дата создания:</strong> {new Date(link.date).toLocaleDateString()}</p>
        </>
    )
}
