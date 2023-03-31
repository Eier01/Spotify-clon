import React from "react";
import {BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs';
import {FaBroadcastTower, FaMicrophone, FaPodcast} from 'react-icons/fa';
import {BiPulse} from 'react-icons/bi';

const MenuList = [
    {
    id:1,
    icon:<BsFillHouseFill/>,
    name: "Home",
    },
    {
        id:2,
        icon:<BiPulse/>,
        name: "Descubra",
    },
    {
        id:3,
        icon:<FaBroadcastTower/>,
        name: "Radio",
    },
    {
        id:4,
        icon:<FaMicrophone/>,
        name: "Artistas",
    },
    {
        id:5,
        icon:<BsJournalAlbum/>,
        name: "Albunes",
    },
    {
        id:6,
        icon:<FaPodcast/>,
        name: "Podcasts",
    },
]


export {MenuList}

