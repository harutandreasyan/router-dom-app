import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../helpers/api";
import { IUser } from "../helpers/types";

export const UserDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        if (id) {
            getUserById(id)
                .then(setUser)
                .catch((error) => {
                    console.error("Failed to fetch user:", error);
                });
        }
    }, [id]);

    if (!user) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-gray-500 text-xl">Loading user details...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">User Details</h2>
                <div className="space-y-4">
                    <div>
                        <span className="text-gray-500 font-medium">Name:</span>
                        <span className="ml-2 text-gray-800">{user.name}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-medium">Surname:</span>
                        <span className="ml-2 text-gray-800">{user.surname}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-medium">Age:</span>
                        <span className="ml-2 text-gray-800">{user.age}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-medium">Salary:</span>
                        <span className="ml-2 text-gray-800">${user.salary.toLocaleString()}</span>
                    </div>
                </div>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Back
                </button>
            </div>
        </div>
    );
};
