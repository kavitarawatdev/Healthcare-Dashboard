import { ActivityFeed } from "../components/ActivityFeed";
import { CalendarView } from "../components/CalendarView";
import { DashboardOverview } from "../components/DashboardOverview";
import { UpcomingSchedule } from "../components/UpcomingSchedule";

export const  DashboardMainContent = () => {
    return (
        <main className="dashboard-main-content grid-2-col grid">
            <section className="dashboard-left-section flex flex-col">
                <h4>Dashboard</h4>
                <div className="grid">
                     <DashboardOverview/>
                     <ActivityFeed/>
                </div>
            </section>
            <section className="dashboard-right-section flex flex-col grid">
                <CalendarView/>
                <UpcomingSchedule/>
            </section>

        </main>
    );
};