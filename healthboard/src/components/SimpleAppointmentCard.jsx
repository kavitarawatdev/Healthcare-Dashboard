export const SimpleAppointmentCard = ({currData}) => {
    const {title, time, icon}=currData;
    return (
        <div className="appointment-card flex flex-col">
            <div className="flex flex-centered">
                <h6>{title}</h6>
                <span className="icon-medium">{icon}</span>
            </div>
            <div className="flex">
                <p className="time">{time}</p>
            </div>  
        </div>
    );
};