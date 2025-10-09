"use client";

import { useEffect, useState } from "react";
import { getActivity, getActivityUsers, getCommentByIdActivity } from "@/src/API/client-fetching-action";
import { ActivityTypes, CommentsActivity, ActivityArrayType, User } from "@/src/schemas";


import { getColumns } from "@/components/actividades/activity-table/columns";
import { DataTable } from "@/components/actividades/activity-table/table-data";
import { ActividadModal } from "@/components/actividades/activity-table-modal/ActividadModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/Store/valueSlice";
import { resetStatus } from "@/src/Store";

export default function TableActivity({ user }: {user: User}) {
    const dispatch = useDispatch();
    const [activity, setActivity] = useState<ActivityTypes[]>([]);

    const reFetch = useSelector((state: RootState) => state.value.value);
    const [selectedIndex, setSelectedIndex] = useState<ActivityTypes | null>(null);
    const [activityComment, setActivityComment] = useState<CommentsActivity | null>(null)
    const activityIds = selectedIndex?.id

    useEffect(()=>{
        if(reFetch === 'idle') {
            async function activityResources(userId: number) {
                const activityOk = await getActivity(userId);
                const activityAssigned = await getActivityUsers(userId);
                const joinActivities = activityOk.concat(activityAssigned)
                const noRepeatedAct = (uniqueActivity: ActivityArrayType) => {
                    const seenIdAct = new Set();
                    return uniqueActivity.filter((activity) => {
                        if (seenIdAct.has(activity.id)) {
                            return false;
                        }
                        seenIdAct.add(activity.id);
                        return true;
                    })
                }
                const uniqueActivity = noRepeatedAct(joinActivities)
                setActivity(uniqueActivity);
                const activityId = selectedIndex?.id ?? 0;
                const activityComments = await getCommentByIdActivity(activityId);
                setActivityComment(activityComments)
            }
            activityResources(user.id).then()
        }
        dispatch(resetStatus());
        console.log('testing this call from modals and projects')
    }, [user.id, activityIds, selectedIndex, dispatch, reFetch])

    const columns = getColumns(setSelectedIndex)

    return (
        <>
            <div className="mb-5">
                <DataTable
                    columns={columns}
                    data={activity}
                />
                <ActividadModal
                    comments={activityComment}
                    data={selectedIndex}
                    onClose={()=> setSelectedIndex(null)}
                    user={user}
                />
            </div>
        </>
    )
}