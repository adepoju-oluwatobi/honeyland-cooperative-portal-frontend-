import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "./Header";
import Footer from "./Footer";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
     axios
       .get("https://test-api-uxtu.onrender.com/users/" + id)
       .then((res) => setData(res.data))
       .catch((err) => console.log(err));
  }, []);

  
  async function handleSubmit(event) {
    event.preventDefault();
   axios
     .put("https://test-api-uxtu.onrender.com/users/" + id, data)
     .then((res) => {
       toast.info("Data updated successfully!");
       navigate("admin-dashboard");
     });
  }
  return (
    <div>
      <Header />
      <div className="bg-[url(./assets/loan-bg.jpg)] h-[100vh] bg-no-repeat bg-cover pt-[5%]">
        <form
          action=""
          className="flex flex-col w-fit m-auto bg-black bg-opacity-60 p-4"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Members Name"
            type="text"
            value={data.id}
            disabled
          />
          <input
            placeholder="Members Name"
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            placeholder="Monthly Savings"
            type="text"
            value={data.monthlySavings}
            onChange={(e) =>
              setData({ ...data, monthlySavings: e.target.value })
            }
          />
          <input
            placeholder="Loan Amount"
            type="text"
            value={data.loanAmount}
            onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
          />
          <input
            placeholder="Loan Balance"
            type="text"
            value={data.loanBalance}
            onChange={(e) => setData({ ...data, loanBalance: e.target.value })}
          />
          <input
            placeholder="Loan Monthly Deduction"
            type="text"
            value={data.monthlyDeduction}
            onChange={(e) =>
              setData({ ...data, monthlyDeduction: e.target.value })
            }
          />
          <input
            placeholder="Available Balance"
            type="text"
            value={data.availableBal}
            onChange={(e) => setData({ ...data, availableBal: e.target.value })}
          />
          <button className="bg-violet-500 border-0 text-white p-2 cursor-pointer rounded-xl">
            Update
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditUser;