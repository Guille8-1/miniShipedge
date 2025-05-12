import { ActivityActionPage } from '@/components/actividades/ActivityActionPage';
import TableActivity from '@/components/actividades/activity-table/table-activity-data';
import { verifySession } from "@/src/auth/dal";

export default async function ActivityPage() {
    
    const { user } = await verifySession()

    return (
        <>
            <section className="h-auto">
                <ActivityActionPage user={user}/>
                <TableActivity user={user}/>
            </section>
        </>
    )
}