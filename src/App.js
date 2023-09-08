import React, { useEffect, useState } from "react";
import AppItem from "./AppItem";

const App = () => {
  const [data, setData] = useState([]);
  const [sortRequested, setSortRequested] = useState(false);
  const [itemsToRender, setItemsToRender] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  const styling = {
    border: "2px solid red",
  };

  useEffect(() => {
    fetchApiData();
    // console.log("data fetched");
  }, []);

  const fetchApiData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (sortRequested) {
      const sorted = [...data].sort((a, b) => b.price - a.price);
      setItemsToRender(sorted);
      console.log("data sorted");
    } else {
      setItemsToRender(data); // Reset to the original data when sorting is not requested
    }
  }, [sortRequested, data]);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const filtered = () => {
    return data.filter((item) => item.category === "women's clothing");
  };

  const filterData = () => {
    const filteredData = filtered();
    setItemsToRender(filteredData);
  };

  return (
    <>
      <div>
        <button
          style={styling}
          onClick={() => setSortRequested(!sortRequested)}
        >
          Press me!
        </button>
        <button onClick={filterData}>Try to press me!</button>
      </div>
      <div>
        {itemsToRender.map((items) => {
          const formatText = capitalize(items.category);
          return (
            <div key={items.id}>
              <AppItem
                title={items.title}
                image={items.image}
                category={formatText}
                desc={items.description}
                price={items.price}
                rating={items.rating.rate}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [entry, setEntry] = useState([]);

//   const submitForm = (e) => {
//     e.preventDefault();

//     const newEntry = { email: email, password: password };
//     setEntry([...entry, newEntry]);
//     console.log(entry);
//   };

//   const styling = { border: "2px solid blue" };

//   return (
//     <>
//       <form action="" onSubmit={submitForm}>
//         <div>
//           <label htmlFor="email">E-mail</label>
//           <input
//             type="text"
//             name="email"
//             id="email"
//             autoComplete="off"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             autoComplete="off"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <button>Login</button>
//       </form>

//       <div>
//         {entry.map((element) => {
//           return (
//             <div key={element.password} style={styling}>
//               <p>{element.email}</p>
//               <p>{element.password}</p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default App;
