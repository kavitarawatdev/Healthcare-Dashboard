import "../styles/sidebar.css"
import { navListData, tools } from "../data/navigation";
export const Sidebar = () => {
    return (
        <section className="sidebar-section">
                    <nav className="nav-bar flex flex-col">
                    {navListData.map(data=>{
                        return(
                            <ul key={data.general} className="flex flex-col nav-list-container">
                                <h6 className="nav-list-heading">{data.general}</h6>
                                {data.navlink.map(list=>{
                                    return(
                                        <li key={list.list_name} className="nav-list flex align-center">
                                            <a href={list.link} className="flex">
                                                <span className="icon-medium">{list.icon}</span>
                                                <span className="nav-list-name">{list.list_name}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    })}
                    {tools.map(data=>{
                        return(
                            <ul key={data.general} className="flex flex-col tools-container">
                                <h6 className="tool-list-heading">{data.general}</h6>
                                {data.navlink.map(list=>{
                                    return(
                                        <li key={list.tool_name} className="tool-list flex">
                                            <a href={list.link} className="flex align-center">
                                                <span className="icon-medium">{list.icon}</span>
                                                <span className="tool-list-name">{list.tool_name}</span>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    })}
            </nav>
        </section>
    );
};