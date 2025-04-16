import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "./Firebase.config";
import { collection, getDocs } from "firebase/firestore";
const Provider = createContext();
export const AppContext = () => {
  return useContext(Provider);
};

const Contaxt = ({ children }) => {
  const [ShowModel, setShowModel] = useState(false);
  const [Store, setStore] = useState([]);
  const [tooltipText, setTooltipText] = useState("Copy");
  const [Find, setFind] = useState("");
  const [filteredStore, setFilteredStore] = useState([]);
   const [profileImage, setProfileImage] = useState(null);
  const getData = async () => {
    const Snapshort = await getDocs(collection(db, "Orders"));
    const AllData = [];
    Snapshort.forEach((doc) => {
      AllData.push({ id: doc.id, ...doc.data() });
    });
    setStore(AllData);
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const [year, month, day] = dateString.split("-");
    return `${day} - ${months[parseInt(month) - 1]} - ${year}`;
  };
  const formatTime = (timeString) => {
    if (!timeString) return "";

    const [hours, minutes] = timeString.split(":");
    const period = hours >= 12 ? "PM" : "AM";
    const twelveHour = hours % 12 || 12; // Convert to 12-hour format

    return `${twelveHour}:${minutes} ${period}`;
  };
  const handleCopy = (Item) => {
    navigator.clipboard.writeText(Item);
    setTooltipText("Copied!");
    setTimeout(() => setTooltipText("Copy"), 2000);
  };
  const Search = (value) => {
       setFind(value); 
       if (value === "") {
         setFilteredStore(Store);
       }
       else {
         setFilteredStore(
           Store.filter((item) =>
             item.name.toLowerCase().includes(value.toLowerCase()) ||
             item.email.toLowerCase().includes(value.toLowerCase())
           )
         );
       }
     };
  const supply = {
    profileImage,
    setProfileImage,
    ShowModel,
    setShowModel,
    getData,
    formatDate,
    formatTime,
    handleCopy,
    Store,
    setStore,
    tooltipText,
    Find,
    setFind,
    filteredStore,
    setFilteredStore,
    Search,
  };


  return <Provider.Provider value={supply}>{children}</Provider.Provider>;
};

export default Contaxt;