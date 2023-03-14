import React from 'react';

import { MessageCard } from '../components/MessageCard';
import { RightMenu } from '../components/RightMenu/RightMenu'

import ourStyle from './twoColumns.module.scss' 
import MessagesStyle from './Messages.module.scss'

export function Messages() {

    //* Заготовка + тестовый массив
    // const profiles = [
    //     {
    //     id: 1, 
    //     username: 'Юра Рябцев',
    //     avatar: '../../img/pages/messages/user__1.jpg',
    //     isOnline: 'true',
    //     visit: '5 минут',
    //     post: [{id:1, text: '', picture: ''}],
    //     messages: [{messageId:1, userId: 1, dialog: [{dialogId: 1}]}]
    //     },
    // ]
    const RandomMessages = [
        {username: 'Юра Рябцев',
        avatar: '../../img/pages/messages/user__1.jpg',
        online: false,
        preview: 'я запустил стрим, заходи',
        sender: 'not-you',
        looked: true,
        visit: '12 мин'},

        {username: 'Ruslan Muling', 
        avatar: '../../img/pages/messages/user__2.jpg',
        online: true,
        preview: 'Привет, послушай песню, вчера сводил весь день',
        sender: 'not-you',
        looked: true,
        visit: '27 мин'},

        {username: 'Daria Tensei', 
        online: false,
        avatar: '../../img/pages/messages/user__3.jpg',
        preview: 'Даша, дай списать 😁',
        sender: 'you',
        looked: false,
        visit: '29 мин'},

        {username: 'Андрей Лазаренко', 
        avatar: '../../img/pages/messages/user__4.jpg',
        online: true,
        preview: 'Я удалил доту..., проиграл отцу в споре, не хочешь в осу?😁',
        sender: 'not-you',
        looked: true,
        visit: '37 мин'},
    ]
    const asideMenu = [ 
        {id: 1, name: 'Все чаты', link: '#', select: true},
        {id: 2, name: 'Непрочитанные', link: '#', select: true},
        {id: 3, name: 'Архив', link: '#', select: true},
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

    const input = () =>{
        return (inputSearchValue === '')?
        <>
        <img src="../img/pages/messages/1.svg" alt=''/>
        <img src="../img/pages/messages/2.svg" alt=''/>
        <img src="../img/pages/messages/3.svg" alt=''/>
        </>
    :
        <>
        <div onClick={clearInput} className={MessagesStyle.clear}>
            <img src="../img/pages/messages/clear.svg" alt=''/>
        </div>
        </>
    }
    const selectDialog =()=> {
        return (inputSearchValue === '')?
        <article className={MessagesStyle.scroll}>
            {RandomMessages.map((item)=>(
                <MessageCard
                    props={item}
                    key={item.user}
                />
            ))}                                
        </article>
        :
        <article className={MessagesStyle.notFound}>
            <span>Ничего не найдено</span>
            <img src="../../img/pages/messages/not__found.png" alt="" />
        </article>
    }


    return (
        <div className={ourStyle.content}>
            <section className={ourStyle.section}>
                <div className={MessagesStyle.search}>
                    <input type="text" value={inputSearchValue} onChange={InputChange} onFocus={onFocusInput} onBlur={onFocusInput}  placeholder='Поиск'/>
                    {input()}
                </div>
                { selectDialog() }
            </section>
            <aside className={ourStyle.aside}>
                <ul>
                    <RightMenu links={asideMenu}/>
                </ul>
            </aside>
        </div>
    );
}