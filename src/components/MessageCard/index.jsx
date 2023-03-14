
import styles from './MessageCard.module.scss'



export function MessageCard({props}){

    const isLooked = () => {
      return (!props.looked)?
          <span>{props.preview}</span>
          : 
          <p>{props.preview}</p>
    }
    const isOnline = () =>{
      return ((props.online) ?<label></label> : '')
    }
    const renderCard = () => {
      return(
        (props.sender === 'you')?  // АВАТАР + ТЕКСТ
        <>
        <img className={styles.img} src="../../../img/user__id1/small__photo.jpg" alt="" />
        {isLooked()}
        </>
        :        // ТОЛЬКО ТЕКСТ
        <>{isLooked()}</>
      )
    }
    return(
        <div className={styles.card}>
        <div className={styles.avatar}>
          <img src={props.avatar} alt="" />
          {isOnline()}
        </div>
        <div className={styles.row}>
          <div className={styles.top}>
            <div className={styles.name}>
              {props.username}
            </div>
            <div className={styles.visit}>
              {props.visit}
            </div>
            <div className={styles.options}>
              <img src="../../../img/pages/messages/options.svg" alt="" />
            </div>
          </div>
          <div className={styles.bottom}>
            {renderCard()}
          </div>
        </div>
      </div>
    )
}