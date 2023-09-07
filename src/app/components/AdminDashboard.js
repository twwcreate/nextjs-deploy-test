"use client" 
import { useSession } from "next-auth/react";

function AdminDashboard() {
const { data: session } = useSession();
return (
    <div className="flex items-center justify-between mt-14 ml-10">
    <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
    )
}

export default AdminDashboard;