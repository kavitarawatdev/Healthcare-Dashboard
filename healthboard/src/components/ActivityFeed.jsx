import "../styles/activity.css"
export const ActivityFeed = () => {
    return (
        <div className="activity-section">
            <div className="activity-container flex- flex-col">
                <div className="activity-header flex justify-between align-centre">
                    <h5>Activity</h5>
                    <span className="appointment-nums">3 appointment on this week</span>
                </div>

                <div className="bar-graph-container flex">
                    <BarChart day={"Mon"}/>
                    <BarChart day={"tue"}/>
                    <BarChart day={"wed"}/>
                    <BarChart day={"thurs"}/>
                    <BarChart day={"fri"}/>
                    <BarChart day={"sat"}/>
                    <BarChart day={"sun"}/>
                </div>

            </div>
        </div>
    )
}

export const BarChart = ({day}) => {
    return (
        <div className="flex flex-col individual-day-data align-center">
            <div className="flex flex-row bar-container">
                <div className="graph-bar-1 bar flex flex-centered flex-col">
                    <span className="progress-1 progress"></span>
                    <span className="progress-2 progress"></span>
                </div>
                <div className="graph-bar-2 bar flex flex-centered flex-col">
                    <span className="progress"></span>
                </div>
                <div className="graph-bar-3 bar flex flex-centered flex-col">
                    <span className="progress"></span>
                    <span className="progress"></span>
                </div>
                <div className="graph-bar-4 bar flex justify-end flex-col">
                    <span className="progress"></span>
                </div>
            </div>
            <span className="day capitalize">{day}</span>
        </div>
    );
};