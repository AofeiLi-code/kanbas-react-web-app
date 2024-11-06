import { useSelector } from "react-redux";

export default function ProtectedRole({ children, role }: { children: any, role: string }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    if (currentUser?.role === role) {
        return children;
    }
    return null;
}
