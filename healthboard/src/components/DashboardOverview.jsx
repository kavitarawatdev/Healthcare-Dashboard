import "../styles/dashboardOverview.css"
import { AnatomySection } from "./AnatomySection";
import { HealthStatusCard } from "./HealthStatusCard";
export const DashboardOverview = () => {
    return (
        <div className="dashboard-overview">
            <AnatomySection/>
            <HealthStatusCard/>
        </div>
    );
};