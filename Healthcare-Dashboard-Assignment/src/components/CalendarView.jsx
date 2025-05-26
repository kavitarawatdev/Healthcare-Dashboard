import { RiExpandHorizontalFill } from "react-icons/ri";
import { calendarAppontmentDetails, calendarDetails } from "../data/calendarData";
export const CalendarView = () => {
    return (
        <section className="calendar-section flex flex-col">
            <div className="calendar-container flex flex-col">
                <div className="flex align-center justify-between calendar-header">
                    <h5 className="curr-month">May 2025</h5>
                    <div className="icon expand-icon"><RiExpandHorizontalFill /></div>
                </div>
                <div className="calendar-view grid grid-7-col">
                    {calendarDetails.map(detail => {
                        return (<Calendar key={detail.day} detail={detail} />)
                    })}
                </div>

            </div>

            <div className="appointment-details flex">
                {calendarAppontmentDetails.map(detail => {
                    let { icon, name, appointment, time } = detail
                    return (
                        <div className="card-container" key={name}>
                            <div className="flex justify-between align-center row-1">
                                <h5 className="capitalize">{appointment}</h5>
                                <span className="icons">{icon}</span>
                            </div>
                            <div className="flex flex-col">
                                <h6>{time}</h6>
                                <span className="doctor-name capitalize">{name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};


export const Calendar = ({ detail }) => {
    const { day, date, t1, t2, t3 } = detail;
    return (
        <div className="calendar-grid-details align-center flex flex-col">
            <span className="day capitalize text-center">{day}</span>
            <h5 className="date text-center">{date}</h5>
            <span className={`time text-center ${t1.highlight?"highlight":""}`}>{t1.time}</span>
            <span className={`time text-center ${t2.highlight?"highlight":""}`}>{t2.time}</span>
            <span className={`time text-center ${t3.highlight?"highlight":""}`}>{t3.time}</span>
        </div>
    );
};