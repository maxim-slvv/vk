import React from 'react';
import ourStyle from './twoColumns.module.scss' //общие стили
import messages from './Messages.module.scss'
import MessageCard from '../components/MessageCard';

function Messages() {
    const RandomMessages = [
        {user: '../../img/pages/messages/user__1.jpg',
         username: 'Ruslan Muling', preview: 'Текст сообщения', visit: 'вчера'},

    ]
    
    //фокусировка на поле - скрывает чаты и выводит подсказки для поиска
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
                            <article>
                                <MessageCard/>
                                <MessageCard/>
                                <MessageCard/>
                            </article>
                            </>
                        :
                            <article>
                                <br/><br/>
                                Люди и сообщества
                                <br/><br/><br/>
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