import React,{useEffect} from "react";
import { FaUsers } from "react-icons/fa";
import '../Styles/MainContainer.css';
import { AudioList } from "./AudioList";
import { Banner } from "./Banner";


function MainContainer() {

    useEffect(()=>{
        const allLi = document
            .querySelector(".mainContainer ul")
            .querySelectorAll("li");

        function changeMenuActive (){
            allLi.forEach(n => n.classList.remove('active'))
            this.classList.add("active")
        }
        
        allLi.forEach((n) => n.addEventListener('click', changeMenuActive))
    }, [])

    return (
        <div className="mainContainer">
            <Banner/>

            <div className="menuList">
                <ul>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Albunes</a></li>
                    <li><a href="#">Canciones</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                </ul>

                <p><i><FaUsers/></i> 12.3M <span>Segidores</span></p>
            </div>

            <AudioList/>
        </div>
    )
}

export { MainContainer };
