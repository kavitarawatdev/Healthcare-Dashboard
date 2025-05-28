import "../styles/main.css"
import { ActivityFeed } from "../components/ActivityFeed";
import { CalendarView } from "../components/CalendarView";
import { DashboardOverview } from "../components/DashboardOverview";
import { UpcomingSchedule } from "../components/UpcomingSchedule";

export const  DashboardMainContent = () => {
    return (
        <main className="dashboard-main-content">
            <section className="dashboard-left-section flex-col flex">
                <h4>Dashboard</h4>
                <div className="dashboard-left-section-container">
                     <DashboardOverview/>
                     <ActivityFeed/>
                </div>
            </section>
            <section className="dashboard-right-section">
                <CalendarView/>
                <UpcomingSchedule/>
            </section>
        </main>
    );
};