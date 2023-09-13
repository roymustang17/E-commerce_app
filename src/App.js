import React, { useEffect, useState } from "react";
import AppItem from "./AppItem";

const App = () => {
  const [data, setData] = useState([]);
  const [sortRequested, setSortRequested] = useState(false);
  const [itemsToRender, setItemsToRender] = useState([]);
  const [open, setOpen] = useState(false);

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
      setItemsToRender(data);
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
      <div style={{ flexDirection: "row" }}>
        <button
          style={{
            border: "2px solid red",
          }}
          onClick={() => setSortRequested(!sortRequested)}
        >
          Press me!
        </button>
        <button onClick={filterData}>Try to press me!</button>
        <div>
          <button onClick={() => setOpen(!open)}>Choose a category!</button>
          <ul style={{ display: open ? "inline" : "none" }}>
            <li onClick={() => setOpen(!open)}>Men's clothing</li>
            <li>Jewelery</li>
            <li>Electronics</li>
            <li>Women's clothing</li>
          </ul>
        </div>
      </div>

      {/* <form action="">
          <select name="" id="">
            <option value="men's clothing">Choose a category</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </form> */}
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
