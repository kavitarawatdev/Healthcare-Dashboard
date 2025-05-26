export const SimpleAppointmentCard = ({currData}) => {
    const {title, time, icon}=currData;
    return (
        <div className="appointment-card flex flex-col">
            <div className="flex flex-centered">
                <h5>{title}</h5>
                <span className="icon">{icon}</span>
            </div>
            <div className="flex">
                <p className="time">{time}</p>
            </div>  
        </div>
    );
};