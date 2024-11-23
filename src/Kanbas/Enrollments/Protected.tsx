import React from "react";
import { useSelector } from "react-redux";

export default function ProtectedRole({
    children,
    role,
    courseId,
}: {
    children: any;
    role: string;
    courseId?: string;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    if (currentUser?.role === role) {

        return React.cloneElement(children, { courseId });
    }
    return null;
}
