import { UserMinus, UserPlus } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { ENDPOINTS } from "../../../config/api";
import Modal from "../../../components/modal";
import toast from "react-hot-toast";

export default function Users() {
  const [users, setUsers] = useState([]);

  const [openModalDisable, setOpenModalDisable] = useState(false);
  const [userIdDisable, setUserIdDisable] = useState(null);

  const [openModalEnable, setOpenModalEnable] = useState(false);
  const [userIdEnable, setUserIdEnable] = useState(null);

  function initializeTable() {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getAdminUsers(), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setUsers(data);
      });
  }

  useEffect(() => {
    initializeTable();
  }, []);

  function disableUser() {
    if (userIdDisable != null) {
      const token = localStorage.getItem("token");
      axios
        .put(
          ENDPOINTS.putAdminUserDisable(userIdDisable),
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          toast.success("Usuário desabilitado.");
          setOpenModalDisable(false);
          setUserIdDisable(null);
          initializeTable();
        });
    }
  }

  function enableUser() {
    if (userIdEnable != null) {
      const token = localStorage.getItem("token");
      axios
        .put(
          ENDPOINTS.putAdminUserEnable(userIdEnable),
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          toast.success("Usuário habilitado.");
          setOpenModalEnable(false);
          setUserIdEnable(null);
          initializeTable();
        });
    }
  }

  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Usuários
        </h1>

        <div className="w-full mt-4 overflow-scroll">
          <table className="w-full min-w-table border-collapse">
            <colgroup>
              <col className="w-3/12" />
              <col className="w-3/12" />
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-1/12" />
              <col className="w-1/12" />
            </colgroup>
            <thead>
              <tr>
                <th className="p-2 border border-slate-900">Nome</th>
                <th className="p-2 border border-slate-900">E-mail</th>
                <th className="p-2 border border-slate-900">Telefone</th>
                <th className="p-2 border border-slate-900">CPF</th>
                <th className="p-2 border border-slate-900">Role</th>
                <th className="p-2 border border-slate-900">Acesso</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u?.id}>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.nome}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.email}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.telefone}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.cpf}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.role}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {u?.habilitado ? (
                      <button
                        onClick={() => {
                          setOpenModalDisable(true);
                          setUserIdDisable(u?.id);
                        }}
                        className="flex items-center justify-start gap-2 px-2 py-1 rounded text-slate-200 bg-red-600"
                      >
                        <UserMinus />
                        Desabilitar
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setOpenModalEnable(true);
                          setUserIdEnable(u?.id);
                        }}
                        className="flex items-center justify-start gap-2 px-2 py-1 rounded text-slate-200 bg-green-600"
                      >
                        <UserPlus />
                        Habilitar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {openModalDisable && (
        <Modal
          title="Desabilitar usuário"
          message="Tem certeza que deseja desabilitar este usuário?"
          handleClose={() => {
            setOpenModalDisable(false);
            setUserIdDisable(null);
          }}
          handleSubmit={disableUser}
        />
      )}

      {openModalEnable && (
        <Modal
          title="Habilitar usuário"
          message="Tem certeza que deseja habilitar este usuário?"
          handleClose={() => {
            setOpenModalEnable(false);
            setUserIdEnable(null);
          }}
          handleSubmit={enableUser}
        />
      )}
    </main>
  );
}
