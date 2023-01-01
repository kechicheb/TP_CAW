import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../rtk/slices/mycontacts";
export default function Contacts() {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const gestion = (one, two) => {
    document.querySelector(`.${one}`).classList.remove("hidden");
    document.querySelector(`.${two}`).classList.add("hidden");
  };

  // eslint-disable-next-line
  const contactsList = contacts.filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.phone.toLowerCase().includes(searchTerm.toString().toLowerCase())
    ) {
      return val;
    }
  });
  const checkForm = (e) => {
    e.preventDefault();

    if (name.length !== 0 && phone.length !== 0 && email.length !== 0) {
      document
        .querySelectorAll("input:not([type='submit'])")
        .forEach((e) => (e.value = ""));
      dispatch(addContact({ name: name, phone: phone, email: email }));
      document.querySelector("#seccess_modal").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector("#seccess_modal").classList.add("hidden");
      }, 3000);
      setName("");
      setPhone("");
      setEmail("");
    }
  };
  return (
    <>
      <div className="contacts main_container p-12 bg-white border-4  border-black ">
        <div className="contact Child active">
          <div className="head">
            <h2 className="text-2xl font-bold mb-4">Contacts list</h2>
          </div>
          <div className="filter-input relative">
            <input
              type="text"
              placeholder="Filter by Name, Desc, Phone number ...."
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full  border-b-4 border-black mb-4 pt-[2px] pl-6 focus:border-[#ffa580] outline-none"
            />
            <div className="absolute top-[4px] left-0 font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
              </svg>
            </div>
          </div>

          <div className="  contacts_table   border-4 border-black w-[900px]">
            <div className="">
              <div className="flex flex-row">
                <div className="w-1/3 pl-2 text-left border border-black bg-[#95a4ff]">
                  Name
                </div>
                <div className="w-1/3 pl-2 text-left border border-black bg-[#95a4ff]">
                  Phone number
                </div>
                <div className="w-1/3 pl-2 text-left border border-black bg-[#95a4ff]">
                  Email
                </div>
              </div>
            </div>
            <div className="scrollable max-h-[400px] overflow-y-scroll">
              <table className="  w-full">
                <tbody className="">
                  {contactsList.map((contact, i) => {
                    return (
                      <tr key={i}>
                        <td className="w-1/3 text-left border border-black">
                          {contact.name}
                        </td>
                        <td className="w-1/3 text-left border border-black">
                          {contact.phone}
                        </td>
                        <td className="w-1/3 text-left border border-black">
                          {contact.email}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="Child form hidden">
          <div className="head">
            <h2 className="text-2xl font-bold mb-4">Create contacts</h2>
          </div>
          <h4>Please fill in contact information form</h4>
          <form
            className=" flex flex-col space-y-4"
            onSubmit={(e) => checkForm(e)}
          >
            <input
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none"
              placeholder="Name"
              required
              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none"
              placeholder="Phone number"
              required
              type="number"
              id="phone"
              name="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none"
              placeholder="Email"
              required
              type="email"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="links bg-[#95a4ff]  flex items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8 cursor-pointer"
              type="submit"
              value="Create"
            />
          </form>
        </div>
        <div className="btns flex flex-row mt-8 space-x-8">
          <button
            onClick={() => gestion("contact", "form")}
            className=" links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
          >
            {" "}
            Display Contacts{" "}
          </button>
          <button
            onClick={() => gestion("form", "contact")}
            className=" links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
          >
            {" "}
            Create Contact
          </button>
        </div>
      </div>
    </>
  );
}
