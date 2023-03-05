import styles from './MessageCard.module.scss'

function MessageCard(){
    console.log(styles)
    return(
        <div className={styles.card}>

        <div className={styles.avatar}>
          <img src="../../../img/pages/messages/user__1.jpg" alt="" />
        </div>
      
        <div className={styles.row}>
          <div className={styles.top}>
            <div className={styles.name}>Ruslan Muling</div>
            <div className={styles.visit}>16 фев</div>
            <div className={styles.options}>
              <img src="../../../img/pages/messages/options.svg" alt="" />
            </div>

          </div>
          <div className={styles.bottom}>

           
            {
                (true)?  // АВАТАР + ТЕКСТ
                <>  
                <img className={styles.img} src="../../../img/user__id1/small__photo.jpg" alt="" />
                <span>
                    текст сообщения: непрочитанное
                </span>
                </>
                :        // ТОЛЬКО ТЕКСТ
                <span>
                    текст сообщения
                </span>
            }
           
           
          </div>
        </div>
      
      </div>
    )
}

export default MessageCard;