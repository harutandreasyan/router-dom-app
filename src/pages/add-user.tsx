import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../helpers/api";
import { InputUser } from "../helpers/types";

export const AddUser = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InputUser>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputUser> = (data) => {
        addNewUser(data)
            .then(() => {
                reset();
                navigate("/");
            })
            .catch((error) => {
                console.error("Failed to add user:", error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add User</h2>
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Surname Field */}
                    <div>
                        <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
                            Surname
                        </label>
                        <input
                            {...register("surname", { required: "Surname is required" })}
                            type="text"
                            id="surname"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter surname"
                        />
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                    </div>

                    {/* Age Field */}
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                            Age
                        </label>
                        <input
                            {...register("age", {
                                required: "Age is required",
                                pattern: { value: /^[0-9]+$/, message: "Age must be a number" },
                            })}
                            id="age"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter age"
                        />
                        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                    </div>

                    {/* Salary Field */}
                    <div>
                        <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                            Salary
                        </label>
                        <input
                            {...register("salary", {
                                required: "Salary is required",
                                pattern: { value: /^[0-9]+$/, message: "Salary must be a number" },
                            })}
                            id="salary"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter salary"
                        />
                        {errors.salary && <p className="text-red-500 text-sm">{errors.salary.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
