import { useState, useEffect } from "react";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FaPlus } from "react-icons/fa";

export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState<string>("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        setUsers([...users, user]);
    };


    const filterUsersByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUsersByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const filteredUsers = await client.findUsersByRole(role);
            setUsers(filteredUsers);
        } else {
            fetchUsers();
        }
    };

    const fetchUsers = async () => {
        const allUsers = await client.findAllUsers();
        setUsers(allUsers);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                Users
            </button>
            <input onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
                className="form-control float-start w-25 me-2 wd-filter-by-name" />
            <select
                value={role}
                onChange={(e) => filterUsersByRole(e.target.value)}
                className="form-select float-start w-25 wd-select-role"
            >
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
                <option value="ADMIN">Administrators</option>
            </select>
            <PeopleTable users={users} />
        </div>
    );
}
