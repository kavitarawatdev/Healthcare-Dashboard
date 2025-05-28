import { healthCard } from "../../../Healthcare-assignment/src/data/healthData";
import "../styles/healthCard.css"

export const HealthStatusCard = () => {
    return (
        <div className="Health-status-card dashboard-overview-right">
            <ul className="health-card-container flex flex-col">
                {healthCard.map(card=>{
                let{icon, organ, date}=card
                    return(
                        <li className="health-card flex flex-col" key={organ}>
                            <div className="flex align-center">
                                <span className="card-icon icon-large">{icon}</span>
                                <h6 className="capitalize">{organ}</h6>
                            </div>
                            <p className="date">Date: {date}</p>
                            <div className="status-bar">
                                <div className="status-progress-bar"></div>
                            </div>
                       </li>
                    )
                })}
            </ul>
        </div>
    );
};