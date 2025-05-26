import { appointments } from "../data/appointments";
import { SimpleAppointmentCard } from "./SimpleAppointmentCard";
export const UpcomingSchedule = () => {
    return (
        <div className="upcoming-schedule-section flex flex-col">
            <h4 className="capitalize">The Upcoming schedule</h4>
            {appointments.map((appointment) => {
                const { day, data } = appointment;
                return (
                    <div key={day} className="upcoming-schedule-container flex flex-col">
                        <h5 className="capitalize">On {day}</h5>
                        <div className="appointment-card-container flex">
                            {data.map((currData) => {
                                return (
                                    <SimpleAppointmentCard
                                        key={currData.title}
                                        currData={currData}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
