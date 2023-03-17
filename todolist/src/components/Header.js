import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
const Header = ()=>{
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (err) {
        console.error(err);
        alert("An error occured while fetching user data");
      }
    };
    useEffect(() => {
      if (loading) return;
      if (!user) return navigate("/");
      fetchUserName();
    }, [user, loading]);

    return(
    <div className="App">
        <header>
            <h3>To Do List</h3>
            <div class="info">
                <p class="name">Name: Justin Theofilus Yonathan</p>
                <p class="id">NIM: 2502036382</p>
                <button className="logout__btn" onClick={logout}>
                Logout
                </button>
            </div>
            
        </header>
    </div>)
}
export default Header;
