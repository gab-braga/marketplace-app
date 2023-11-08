import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import avatar from "../../../assets/imagens/avatar.jpg";
import FormUser from "./FormUser";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getClientProfile(user?.id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setUserData(data);
      });
  }, []);

  function getFileBase64(file, callback) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base36File = e.target.result;
        callback(base36File);
      };
      reader.readAsDataURL(file);
    }
  }

  function onChangePhoto(input) {
    const file = input.files[0];
    getFileBase64(file, (foto) => {
      const token = localStorage.getItem("token");
      axios
        .put(
          ENDPOINTS.putClientPhoto(user?.id),
          { foto },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(({ data }) => {
          setUserData(data);
        });
    });
  }

  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <div className="w-full flex flex-col items-center gap-4">
          <form className="hidden">
            <input
              type="file"
              id="photo"
              onChange={(e) => onChangePhoto(e.target)}
            />
          </form>
          <label htmlFor="photo" className="cursor-pointer">
            <img
              src={userData?.foto ? userData?.foto : avatar}
              alt={userData?.nome}
              className="w-40 h-40 rounded-full object-cover object-center"
            />
          </label>
          <h2 className="text-xl text-slate-900 font-semibold uppercase">
            {userData?.nome}
          </h2>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Dados Pessoais
        </h2>

        <FormUser />
      </section>
    </main>
  );
}
