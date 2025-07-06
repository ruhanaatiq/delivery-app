import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMapMarkerAlt, FaWallet, FaMotorcycle, FaCheckCircle } from "react-icons/fa";
import { format } from 'date-fns';

export default function RiderDashboard() {
    const axiosSecure = useAxiosSecure();

    const { data: riderStats = {}, isLoading, isError, error } = useQuery({
        queryKey: ["riderDashboardStats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/rider-dashboard-stats");
            return res.data;
        },
        staleTime: 5 * 60 * 1000,
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="text-center text-red-600 mt-10">
                Error loading data: {error.message}
            </div>
        );
    }

    const { rider, totalAssigned, inTransit, delivered, totalEarnings } = riderStats;

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold">Welcome, {rider?.name || 'Rider'}!</h1>

            {/* Profile Summary */}
            <div className="card bg-base-100 shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">Rider Information</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <p><strong>Name:</strong> {rider.name}</p>
                    <p><strong>Email:</strong> {rider.email}</p>
                    <p><strong>Phone:</strong> {rider.phone}</p>
                    <p><strong>Region:</strong> {rider.region}</p>
                    <p><strong>District:</strong> {rider.district}</p>
                    <p><strong>Bike:</strong> {rider.bike_brand} ({rider.bike_registration})</p>
                    <p><strong>Status:</strong> {rider.status}</p>
                    <p><strong>Joined:</strong> {format(new Date(rider.created_at), 'PPP')}</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card bg-blue-100 p-4 text-center">
                    <FaMotorcycle className="text-4xl mx-auto text-blue-500" />
                    <p className="mt-2 font-semibold text-black">Assigned Parcels</p>
                    <p className="text-2xl font-bold text-black">{totalAssigned}</p>
                </div>
                <div className="card bg-yellow-100 p-4 text-center">
                    <FaMapMarkerAlt className="text-4xl mx-auto text-yellow-500" />
                    <p className="mt-2 font-semibold text-black">In Transit</p>
                    <p className="text-2xl font-bold text-black">{inTransit}</p>
                </div>
                <div className="card bg-green-100 p-4 text-center">
                    <FaCheckCircle className="text-4xl mx-auto text-green-500" />
                    <p className="mt-2 font-semibold text-black">Delivered</p>
                    <p className="text-2xl font-bold text-black">{delivered}</p>
                </div>
                <div className="card bg-purple-100 p-4 text-center">
                    <FaWallet className="text-4xl mx-auto text-purple-500" />
                    <p className="mt-2 font-semibold text-black">Total Earnings</p>
                    <p className="text-2xl font-bold text-black">৳{totalEarnings}</p>
                </div>
            </div>
        </div>
    );
}
