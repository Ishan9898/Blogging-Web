// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { BeatLoader } from "react-spinners";

// const PopularAuthors = () => {
//   const [authors, setAuthors] = useState([]);
  
//   useEffect(() => {
//     const fetchAuthors = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4000/api/v1/user/authors",
//           { withCredentials: true }
//         );
//         console.log(data); // Log the data to check the structure
//         setAuthors(data.authors);
//       } catch (error) {
//         console.error("Error fetching authors:", error);
//       }
//     };
    
//     fetchAuthors();
//   }, []);
  
//   return (
//     <section className="popularAuthors">
//       <h3>Popular Authors</h3>
//       <div className="container">
//         {authors && authors.length > 0 ? (
//           authors.slice(0, 4).map((author) => {
//             return (
//               <div className="card" key={author._id}>
//                 <img src={author.avatar?.url} alt="author" onError={(e) => {e.target.onerror = null; e.target.src="default-image-url.jpg"}} />
//                 <p>{author.name}</p>
//                 <p>{author.role}</p>
//               </div>
//             );
//           })
//         ) : (
//           <BeatLoader color="gray" size={30} />
//         )}
//       </div>
//     </section>
//   );
// };

// export default PopularAuthors;



import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import { BeatLoader, BounceLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const { mode } = useContext(Context);
  useEffect(() => {
    const fetchAuthors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/authors",
        { withCredentials: true }
      );
      setAuthors(data.authors);
    };
    fetchAuthors();
  }, []);

  return (
    <article
      className={
        mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"
      }
    >
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {authors && authors.length > 0 ? (
          authors.map((element) => {
            return (
              <div className="card" key={element._id}>
                {/* {authors && authors.avatar && ( */}
                  <img src={element.avatar.url} alt="author_avatar" />
                {/* )} */}
                <h3>{element.name}</h3>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        )}
      </div>
    </article>
  );
};

export default AllAuthors;
