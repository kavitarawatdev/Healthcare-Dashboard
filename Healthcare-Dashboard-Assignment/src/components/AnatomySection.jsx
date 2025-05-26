import { CiZoomIn } from "react-icons/ci";
import { healthIndicator } from "../data/healthData";
import { LuScanLine } from "react-icons/lu";
export const AnatomySection = () => {
    return (
            <div className="anatomy-section dashboard-overview-left flex flex-col">
                <div className="icons zoom-icon flex">
                    <CiZoomIn />
                </div>
                <div className="human-anatomy-container">
                    <div className="illustration" style={{backgroundImage:`url(./Images/anatomy.webp)`,}}>
                        {healthIndicator.map(indicator=>{
                        let {organ, icon, condition, position}=indicator;
                            return(
                                <div className={`indicator flex align-centered`} id={position} key={organ}>
                                    <div className={`flex flex-centered indicator-details ${condition.toLowerCase()=="healthy"?"healthy":"issue" }`}>
                                        <span className="icon">{icon}</span>
                                        <h6 className="organ-conditon">{condition+" "+organ}</h6>
                                    </div>
                                    <div className="scan flex align-centered"><LuScanLine/></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    );
};