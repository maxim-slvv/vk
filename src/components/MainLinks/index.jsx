import { Link } from 'react-router-dom';
import styles from './MainLinks.module.scss'

function MainLinks(props){
   const svg = [
        {1: '../img/menu__icon/1.svg'},
        {2: '../img/menu__icon/2.svg'},
        {3: '../img/menu__icon/3.svg'},
        {4: '../img/menu__icon/4.svg'},
        {5: '../img/menu__icon/5.svg'},
        {6: '../img/menu__icon/6.svg'},
        {7: '../img/menu__icon/7.svg'},
        {8: '../img/menu__icon/8.svg'},
        {9: '../img/menu__icon/9.svg'},
        {10: '../img/menu__icon/10.svg'},
        {11: '../img/menu__icon/11.svg'},
        {12: '../img/menu__icon/12.svg'},
        {13: '../img/menu__icon/13.svg'},
        {14: '../img/menu__icon/14.svg'},
    ]
    return(
        <Link to={props.item['link']} className={styles.link}>
            <li className={styles.links}>
                <img src={svg[props.item['id']-1][props.item['id']]} alt="" />
                <span>{props.item['name']}</span>
            </li>
        </Link>  
    );
}
export default MainLinks;







