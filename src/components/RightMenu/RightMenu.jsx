import styles from './RightMenu.module.scss'

export function RightMenu ({links}) {

    return (
        <>
        <ul className={styles.container}>
            {links.map((obj) =>
                <li key={obj.id} className={styles.links}>{obj.name}</li>
            )}
        </ul>
        </>
     
    )
}