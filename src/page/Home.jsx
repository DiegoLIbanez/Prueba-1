
import { useEffect, useState } from "react"
import devices from "../assets/illustration-devices.svg"
import Nav from "../components/Nav"
import axios from "axios"
import Table from "../components/Table"

const Home = () => {
    // estados locales
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    // utlizamos effect para ejecutal la funcion apenas se renderice el componente 
    useEffect(() => {
        getApiData()

    }, [])
    // consumo de la api con axios 
    const getApiData = async () => {
        setLoading(true)
        const { data } = await axios("https://jsonplaceholder.typicode.com/users").finally(() => {
            setLoading(false)
        })
        setData(data)
        setLoading(false)
    }

    // filtramos el usuario por(nombre, apellido, ciudad, email)
    const coinsFiltered = data.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) |
        user.username.toLowerCase().includes(search.toLowerCase()) |
        user.address.city.toLowerCase().includes(search.toLowerCase()) |
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    // eliminar datos
    const deleteData = (id) => {
        const updatedData = data.filter(user => user.id !== id);
        setData(updatedData);
    };


    const updateData = (id, newData) => {
        const updatedData = data.map(user => {
            if (user.id === id) {
                return { ...user, ...newData };
            }
            return user;
        });
        setData(updatedData);
    };

    return (
        // primara estapa 
        <>
            <div className=' md:w-full '>
                {/* nav */}
                <Nav />
                {/* seccioon 2  */}
                <div className='md:flex flex-row-reverse '>
                    <div className='md:w-2/4 pt-14 '>
                        <img className="md:absolute overflow-auto md:overflow-auto md:w-3/5 w-full" src={devices} alt="" />
                    </div>
                    <div className='md:w-2/4 pl-8 md:px-28'>
                        <div className='pt-28'>
                            <div className='flex gap-4 items-center'>
                                <p className='bg-slate-900 text-gray-50 rounded-xl px-2 font-semibold'>New</p>
                                <p className='font-light'>MONOGRAPH DASHBOARD</p>
                            </div>
                            <h1 className="py-4 md:text-5xl text-4xl md:w-96 font-extrabold md:font-black">POWERFUL INSIGHTS <br /> INTO YOUR TEAM</h1>
                            <p className='py-2 pb-12 md:text-sm font-light'>Project plannig and time tracking <br /> for agile teams</p>
                            <div className='flex gap-6 items-center pb-20'>
                                <button className='bg-[#FF8584] md:text-sm font-semibold text-xs text-gray-50 px-2 py-2 rounded'>SCHEDULE A DEMO</button>
                                <p className='font-light text'>TO SEE A PREVIEW</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* segunda etapa  */}

            <div className="mt-24 mb-24 px-14  overflow-auto rounded-lg shadow" >
                <h1 className="text-4xl mb-6 text-center font-semibold">List Api</h1>

                {/* Search */}
                <div className="flex justify-end mb-8">
                    <div>
                        <label className="sr-only"> Search </label>

                        <input
                            type="text"
                            id="Search"
                            placeholder="Search..."
                            className=" rounded-md pl-2 border-gray-900 py-2.5 pe-10 shadow-2xl sm:text-sm"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                </div>


                {/* Tabla */}
                <table className="w-full">
                    <thead className="border-b-2 border-gray-400">
                        <tr>
                            <th className="p-3 font-semibold tracking-wide text-left">Nombre</th>
                            <th className="p-3 font-semibold tracking-wide text-left">Apellido</th>
                            <th className="p-3 font-semibold tracking-wide text-left">Email</th>
                            <th className="p-3 font-semibold tracking-wide text-left">Telefono</th>
                            <th className="p-3 font-semibold tracking-wide text-left">Ciudad</th>
                            <th className="p-3 font-semibold tracking-wide text-left">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading && <p>Cargando...</p>}
                        {coinsFiltered.map(user => (
                            <Table key={user.id.value} deleteData={deleteData} user={user} updateData={updateData} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Home
