import { BsFillTrashFill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import Form from "./Form";
import { useState } from "react";

const Table = ({ user, deleteData, updateData }) => {
  const [modal, setModal] = useState(false);

  const [id, setId] = useState("")
  const [name, setName] = useState("");
  const [username, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const data = {
    "name": name,
    "username": username,
    "email": email,
    "phone": phone,
  }

  const update = () => {
    setModal(false)
    updateData(id, data)
  }


  return (
    <>
      <tr className="bg-white">
        <td className="p-3 text-gray-700 whitespace-nowrap">{user.name}</td>
        <td className="p-3 text-gray-700 whitespace-nowrap">{user.username}</td>
        <td className="p-3 text-gray-700 whitespace-nowrap ">{user.email}</td>
        <td className="p-3 text-gray-700 whitespace-nowrap">{user.phone}</td>
        <td className="p-3 text-gray-700 whitespace-nowrap">{user.address.city}</td>
        <td className="text-gray-700 whitespace-nowrap">
          <button
            className="px-1 mx-2 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-green-400 lg:px-10 rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              setModal(true);
              setId(user.id)
              setName(user.name);
              setApellido(user.username);
              setEmail(user.email);
              setPhone(user.phone);
              setCity(user.address.city);
            }}
          >
            <BiEdit />
          </button>
          <button
            className="px-1 mx-2 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 lg:px-10 rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-black hover:bg-gray-400"
            onClick={() => deleteData(user.id)}
          >
            <BsFillTrashFill />
          </button>
        </td>
      </tr>

      <Form
        isVisible={modal}
        onClose={() => setModal(false)}
      >
        <h1 className="text-center font-semibold">Actualizar Usuario</h1>
        <div className="py-2 md:px-6 px-14 lg:px-8 text-left">
          <form className="space-y-2" action="">
            <div>
              <label htmlFor="apellido" className="block mb-2 font-medium text-gray-900">Nombre</label>
              <input
                type="text"
                id="apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Apellido"
              />
            </div>
            <div>
              <label htmlFor="nombre" className="block mb-2 font-medium text-gray-900">Apellido</label>
              <input
                type="text"
                id="nombre"
                value={username}
                onChange={(e) => setApellido(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-900">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-gray-900">Telefono</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Telefono"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-2 font-medium text-gray-900">Ciudad</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ciudad"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="px-1 mx-2 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-400 lg:px-10 rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={update}
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </Form>
    </>
  );
};

export default Table;
