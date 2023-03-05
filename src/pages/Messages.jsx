import React from 'react';
import ourStyle from './twoColumns.module.scss' //общие стили
import messages from './Messages.module.scss'
import MessageCard from '../components/MessageCard';

function Messages() {
    //сделал временный массив что бы просто проверить карточки
    const RandomMessages = [
        {username: 'Юра Рябцев', 
        avatar: '../../img/pages/messages/user__1.jpg',
        preview: 'я запустил стрим, заходи...',
        sender: 'not-you',
        visit: '12 мин'},

        {username: 'Ruslan Muling', 
        avatar: '../../img/pages/messages/user__2.jpg',
        preview: 'Привет, послушай песню, вчера сводил весь день...',
        sender: 'not-you',
        visit: '27 мин'},

        {username: 'Daria Tensei', 
        avatar: '../../img/pages/messages/user__3.jpg',
        preview: 'Даша, дай списать 😁',
        sender: 'you',
        visit: '29 мин'},

        {username: 'Андрей Лазаренко', 
        avatar: '../../img/pages/messages/user__4.jpg',
        preview: 'Я удалил доту..., проиграл отцу в споре, не хочешь в осу?😁',
        sender: 'not-you',
        visit: '37 мин'},

    ]
    
    // фокусировка на поле - скрывает чаты и выводит подсказки для поиска
    const [onSearchFocus, setOnSearchFocus] = React.useState(true)
    const onFocusInput = () => {
        setOnSearchFocus(!(onSearchFocus))
    }

    //очистка поля ввода
    const[inputSearchValue, setInputSearchValue] = React.useState('')
    const InputChange = (event) => {
        setInputSearchValue(event.target.value);
    }
    const clearInput = () => {
        setInputSearchValue('')
    }

    return (
        <div className={ourStyle.content}>
            <section className={ourStyle.section}>

                <div className={messages.search}>
                    <input type="text" value={inputSearchValue} onChange={InputChange} onFocus={onFocusInput} onBlur={onFocusInput}  placeholder='Поиск'/>

                    {/*//? и на них сделать Link что бы подсветка была */}
                    {
                        (inputSearchValue === '')?
                            <>
                            <img src="../img/pages/messages/1.svg" alt=''/>
                            <img src="../img/pages/messages/2.svg" alt=''/>
                            <img src="../img/pages/messages/3.svg" alt=''/>
                            </>
                        :
                            <>
                            <div onClick={clearInput} className={messages.clear}>
                                <img src="../img/pages/messages/clear.svg" alt=''/>
                            </div>
                            </>
                    }
                </div>
                {
                        (inputSearchValue === '')?
                            <>
                            <article className={messages.scroll}>
                                {RandomMessages.map((item)=>(
                                        <MessageCard
                                            props={item}
                                            key={item.user}
                                        />
                                    ))}                                
                            </article>
                            </>
                        :
                            <article className={messages.notFound}>
                              
                                <span>Ничего не найдено</span>
                                
                                <img src="../../img/pages/messages/not__found.png" alt="" />
                               
                               
                             
                            </article>
                    }
            </section>


            
            <aside className={ourStyle.aside}>
                блок фильтрации/навигации
            </aside>
        </div>
    
    );
}

export default Messages;