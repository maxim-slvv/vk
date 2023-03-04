import ourStyle from './twoColumns.module.scss' //общие стили
import messages from './Messages.module.scss'

function Messages() {
    return (
        <div className={ourStyle.content}>
            <section className={ourStyle.section}>


                <div className={messages.search}>
                    <input type="text" placeholder='Поиск'/>

                    {/* //?тут условия if - если есть что то в инпуте то скрывать эти картинки */}
                    {/*//? и показывать крестик для того что бы стереть данные ввода */}
                    {/*//? и на них сделать Link что бы подсветка была */}
                    <img src="../img/pages/messages/1.svg" alt=''/>
                    <img src="../img/pages/messages/2.svg" alt=''/>
                    <img src="../img/pages/messages/3.svg" alt=''/>
                </div>
                <article>
                    <br/>
                    отдельные карточки article
                    <br/><br/>
                </article>



            </section>


            
            <aside className={ourStyle.aside}>
                блок фильтрации/навигации
            </aside>
        </div>
    
    );
}

export default Messages;