"use client";

/* ----- Project Imports ----- */
import "./editbio.css";
import SubmitBio from "@/lib/SubmitBio";
import GetBio from "@/lib/GetBio";

export function EditBio({params}) {
  const myBio = GetBio({params});
  const userHasNoBioString = "You have no bio and so you should add one";

  let editingBio = false;

  function handleCreateForm() {
    editingBio = true;
  }

  return (
    <div>
      <h3>Bio</h3>
      {!editingBio && !myBio && <p>{`${userHasNoBioString}`}</p>}
      {!editingBio && myBio && <p>{`${myBio}`}</p>}
      <button className={!editingBio ? "editButton" : "hidden"} onClick={handleCreateForm}>Edit My Bio</button>
      {editingBio && <p>nOW EDIT BIO</p>}
    </div>
  )
}

export default EditBio;