import { RxDashboard } from "react-icons/rx";
import { TbArrowsTransferUpDown } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
export  const navListData=[
    {
        general:"General",
        navlink:[
        {
            link:"",
            list_name:"Dashboard",
            icon:<RxDashboard/>
        },
        {
            link:"",
            list_name:"History",
            icon:<TbArrowsTransferUpDown/>
        },
        {
            link:"",
            list_name:"Calendar",
            icon:<FaCalendarAlt/>
        },
        {
            link:"",
            list_name:"Appointments",
            icon:<MdOutlineAddBox/>
        },
        {
            link:"",
            list_name:"Statistics",
            icon:<BsGraphUpArrow/>
        },
    ]
    },
]

export const tools=[
    {
        general:"Tools",
        navlink:[
            {
               tool_name:"Chat",
               icon:<IoChatbubbleEllipsesOutline/>  
            },
            {
               tool_name:"Support",
               icon:<IoIosCall/>  
            },
            {
               tool_name:"Setting",
               icon:<IoSettings/>  
            },
        ]
    }
]