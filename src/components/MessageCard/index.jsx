import styles from './MessageCard.module.scss'

function MessageCard({props}){
    console.log(styles)
    return(
        <div className={styles.card}>

        <div className={styles.avatar}>
          <img src={props.avatar} alt="" />
        </div>
      
        <div className={styles.row}>
          <div className={styles.top}>
            <div className={styles.name}>{props.username}</div>
            <div className={styles.visit}>{props.visit}</div>
            <div className={styles.options}>
              <img src="../../../img/pages/messages/options.svg" alt="" />
            </div>

          </div>
          <div className={styles.bottom}>

           
            {
                (props.sender === 'you')?  // АВАТАР + ТЕКСТ
                <>  
                <img className={styles.img} src="../../../img/user__id1/small__photo.jpg" alt="" />
                
                <span>
                  
                    {props.preview}
                </span>
                </>
                :        // ТОЛЬКО ТЕКСТ
                <p>
                    {props.preview}
                </p>
            }
           
           
          </div>
        </div>
      
      </div>
    )
}

export default MessageCard;