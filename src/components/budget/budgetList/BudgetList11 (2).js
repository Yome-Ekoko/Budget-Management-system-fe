// import React from "react";
// import "./BudgetList.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { baseEndpoint } from "../../../globalresources/Config";
// import DeleteModal from "../../modals/DeleteModal";
// import EditHandler from "../../modals/EditHandler";
// import axios from "axios";
//
// function BudgetList() {
//   const [list, setList] = useState([]);
//   const [callDelete, setCallDelete] = useState(false);
//   const [callEdit, setCallEdit] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [editId, setEditId] = useState(null);
//   const [editValue, setEditValue] = useState([]);
//
//
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");
//
//
//   useEffect(() => {
//     const getBudgetList = async () => {
//       const taskFromServer = await fetchBudgets();
//       setList(taskFromServer);
//     };
//
//     getBudgetList();
//   }, []);
//
//   const fetchBudgets = async () => {
//
//     const res = await fetch(baseEndpoint + "/api/v1/budgets", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//
//     const data = await res.json();
//     return data;
//   };
//
//
//
//   const deleteHandler = (id) => {
//     console.log("ID" + id);
//     setDeleteId(id);
//     setCallDelete(true);
//   };
//
//   const editBtnHandler = (id) => {
//     setEditId(id);
//     //console.log("clicked");
//    // setCallEdit(true);
//   };
//
//   return (
//     <main>
//       <div>{callDelete && <DeleteModal id={deleteId} />}</div>
//       <div>
//         {callEdit && (
//           <EditHandler
//             callEdit={callEdit}
//             setCallEdit={setCallEdit}
//             id={editId}
//             editValue={editValue}
//             setEditValue={setEditValue}
//           />
//         )}
//       </div>
//
//       <div className="budget-list-decapay-Do7">
//         <div className="frame-8810-kY9">
//           <Link to="/decapay/create-budget">
//             <div className="cr1">Create Budget</div>
//           </Link>
//           <br />
//           <br />
//           <div className="frame-8809-GmP">
//             <p className="budget-list-Nxq">Budget List</p>
//           </div>
//           <div className="frame-8805-79j">
//             {list.map((item) => (
//               <div key={item.id} className="frame-8806-HCd">
//                 <div className="frame-8805-RZj">
//                   <div className="frame-8799-x3s">
//                     <p className="budget-1-monthly-hn9">
//                       {" "}
//                       Budget {item.budgetId}
//                       <div class="dropdown">
//                         <a
//                           style={{
//                             fontSize: "20px",
//                             fontWeight: "400px",
//                             position: "relative",
//                             bottom: "30px",
//                             left: "350px",
//                           }}
//                           class="btn btn-secondary dropdown-toggle"
//                           href="#"
//                           role="button"
//                           id="dropdownMenuLink"
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                         </a>
//                         <ul
//                           class="dropdown-menu"
//                           aria-labelledby="dropdownMenuLink"
//                         >
//                           <li>
//                             <p
//                               onClick={() =>editBtnHandler(item.budgetId)}
//                               class="dropdown-item"
//                             >
//                               edit
//                             </p>
//                           </li>
//                           <li>
//                             <p
//                               class="dropdown-item"
//                             >
//                              <Link to ={{
//                             pathname:
//                               "/decapay/budget-single-page/" +
//                               item.budgetId
//                           }}>
//                            view details</Link>
//                             </p>
//                           </li>
//                           <li>
//                             <p
//                               onClick={() => deleteHandler(item.budgetId)}
//                               class="dropdown-item"
//                             >
//                               Delete
//                             </p>
//                           </li>
//                         </ul>
//                       </div>
//                     </p>
//                     {/* <img className="option-qdT" src="/assets/option-2Qq.png" /> */}
//                   </div>
//                   <div className="frame-8800-nHo">
//                     <p className="budget-amount-WzV">
//                       Budget amount: <span>{item.amount}</span>
//                     </p>
//                   </div>
//                   <div className="frame-8801-nh7">
//                     <p className="total-amount-spent-Kh3">
//                       Total amount spent: <span>{item.totalAmountSpent}</span>
//                     </p>
//                   </div>
//                   <div className="frame-8802-zoB">
//                     <p className="percentage-9RB">
//                       Percentage: <span>{item.percentage * 100} %</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* <div className="pagination-button-group-CmP">
//           <div className="pagination-button-group-base-7NZ">
//             <img className="arrow-left-Ei5" src="./assets/arrow-left.png" />
//             <p className="text-mT7">Previous</p>
//           </div>
//           <div className="pagination-button-group-base-sW9">1</div>
//           <div className="pagination-button-group-base-MgD">2</div>
//           <div className="pagination-button-group-base-4Kj">3</div>
//           <div className="pagination-button-group-base-Mpd">...</div>
//           <div className="pagination-button-group-base-TMs">8</div>
//           <div className="pagination-button-group-base-xpR">9</div>
//           <div className="pagination-button-group-base-U25">10</div>
//           <div className="pagination-button-group-base-xhw">
//             <p className="text-Vhs">Next</p>
//             <img className="arrow-right-SND" src="./assets/arrow-right.png" />
//           </div>
//         </div> */}
//         <button className="create-budget-7Pf">Create Budget</button>
//       </div>
//     </main>
//   );
// }
//
// export default BudgetList;


const BudgetList = () => {


}
