"use client"

import { useSession } from "next-auth/react"

const Profile = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>
    }

    const getUser = async () => {
        const res = await fetch(``, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${session?.user?.token}`
            }
        })
        const data = await res.json()
    }

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={getUser} className="">{session?.user?.email}</button>
        </div>
    )
}

export default Profile;