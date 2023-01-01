import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, addCommit, like } from "../rtk/slices/myposts";
export default function Blog() {
  const posts = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [commit, setCommit] = useState("");

  const gestion = (one, two) => {
    document.querySelector(`.${one}`).classList.remove("hidden");
    document.querySelector(`.${two}`).classList.add("hidden");
  };

  const postsList = posts.filter((val) => {
    if (startDate === "" && endDate === "") {
      return val;
    } else if (startDate !== "" && endDate !== "") {
      if (
        new Date(val.date) >= new Date(startDate) &&
        new Date(val.date) <= new Date(endDate)
      ) {
        return val;
      }
    } else if (startDate !== "" && endDate === "") {
      if (new Date(val.date) <= new Date(startDate)) {
        return val;
      }
    } else if (startDate === "" && endDate !== "") {
      if (new Date(val.date) >= new Date(endDate)) {
        return val;
      }
    }
  });
  const checkForm = (e) => {
    e.preventDefault();

    document
      .querySelectorAll("input:not([type='submit'])")
      .forEach((e) => (e.value = ""));
    if (subject.length !== 0 && description.length !== 0 && date.length !== 0) {
      dispatch(
        addPost({
          subject: subject,
          description: description,
          date: date,
        })
      );
      document.querySelector("#seccess_modal").classList.remove("hidden");
      setTimeout(() => {
        document.querySelector("#seccess_modal").classList.add("hidden");
      }, 3000);
      setSubject("");
      setDescription("");
      setDate("");
    }
  };
  const checkLike = (e, post) => {
    if (e.target.classList.contains("like")) {
      return;
    } else {
      dispatch(like(post));
      e.target.classList.add("like");
    }
  };

  return (
    <>
      <div className="blogs main_container p-12 bg-white border-4  border-black ">
        <div className="head"></div>
        <div className=" post Child active">
          <h2 className="text-2xl font-bold mb-4">Blogs list</h2>

          <div className="filter-by-date flex flex-row w-full mb-2 ">
            <div className="w-1/2  flex items-center justify-center ">
              <label
                htmlFor="start"
                className="border-b-4 border-black mb-4 pb-[1px] mt-[2px]"
              >
                Start :{" "}
              </label>
              <input
                className="  border-b-4 border-black mb-4 pt-[2px]  focus:border-[#ffa580] outline-none"
                type="date"
                id="start"
                onChange={(e) => setStartdate(e.target.value)}
              />
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <label
                htmlFor="end"
                className="border-b-4 border-black mb-4 pb-[2p1] mt-[2px]"
              >
                End :{" "}
              </label>
              <input
                className="  border-b-4 border-black mb-4 pt-[2px]  focus:border-[#ffa580] outline-none"
                type="date"
                id="end"
                onChange={(e) => setEnddate(e.target.value)}
              />
            </div>
          </div>

          <div className="  contacts_table   border-4 border-black w-[900px]">
            <div className="flex flex-row">
              <div className="w-1/5 text-left border border-black bg-[#95a4ff] pl-2">
                Subject
              </div>
              <div className="w-1/5 text-left border border-black bg-[#95a4ff] pl-2">
                Description
              </div>
              <div className="w-1/5 text-left border border-black bg-[#95a4ff] pl-2">
                Date
              </div>
              <div className="w-1/5  border border-black bg-[#95a4ff] pl-2">
                like
              </div>
              <div className="grow text-left border border-black bg-[#95a4ff] pl-2">
                commit
              </div>
            </div>
            <div className="max-h-[400px] overflow-y-scroll">
              <table className="w-full">
                <tbody>
                  {postsList.map((post) => {
                    return (
                      <tr key={post.id}>
                        <td className="pl-2 w-1/5  border border-black">
                          {post.subject}
                        </td>
                        <td className="pl-2 w-1/5  border border-black">
                          {post.description}
                        </td>
                        <td className="pl-2 w-1/5  border border-black">
                          {post.date}
                        </td>
                        <td className="pl-2 w-1/5 border border-black  ">
                          <div className=" flex flex-row justify-between items-center">
                            {post.like}
                            <button
                              onClick={(e) => checkLike(e, post)}
                              className="p-[6px] hover:bg-[#ffa580] rounded-full ml-2 transition-all duration-200 ease-in-out "
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-suit-heart"
                                viewBox="0 0 16 16"
                              >
                                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="w-1/5  border border-black">
                          <div className="w-[178px] ">
                            {post.commit.length === 0 ? (
                              <div className="commit  flex flex-row">
                                <input
                                  type="text"
                                  onChange={(e) => setCommit(e.target.value)}
                                  className="w-[125px] outline-none"
                                  placeholder="Commit"
                                />
                                <button
                                  className="bg-[#ffa580]  border border-black transition-all duration-200 ease-in-out hover:bg-black hover:text-white "
                                  onClick={(e) => {
                                    dispatch(addCommit([post.id, commit]));
                                  }}
                                >
                                  {" "}
                                  commit{" "}
                                </button>
                              </div>
                            ) : (
                              post.commit
                            )}
                          </div>
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
          <h2 className="text-2xl font-bold mb-4">Create Blogs</h2>

          <h4>Please fill in post information form</h4>
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              checkForm(e);
            }}
          >
            <input
              placeholder="Subject"
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none pl-2"
              required
              type="text"
              id="subject"
              name="subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              placeholder="Description"
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none pl-2"
              required
              type="text"
              id="description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className=" text-lg border-b-4 border-black pt-2 focus:border-[#ffa580] outline-none pl-2"
              type="date"
              id="date"
              name="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="submit"
              className="links bg-[#95a4ff]  flex items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8 cursor-pointer"
              value="Add new Post"
            />
          </form>
        </div>
        <div className="btns flex flex-row mt-8 space-x-8">
          <button
            className="links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
            onClick={() => gestion("post", "form")}
          >
            List all Blogs
          </button>
          <button
            className="links bg-[#ffc9fd] grow flex justify-center items-center px-20 border-2 border-black hover:bg-black hover:text-white h-8"
            onClick={() => gestion("form", "post")}
          >
            Create Blog
          </button>
        </div>
      </div>
    </>
  );
}
