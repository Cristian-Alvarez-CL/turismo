

export default function FormContact() {
  return (
    <form className="w-full">
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          {" "}
          Nombre
        </label>
        <input
          type="text"
          className="px-2 py-2 border w-full outline-none rounded-md"
          id="exampleInput90"
          placeholder="Nombre completo"
        />
      </div>

      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          {" "}
          E-mail
        </label>
        <input
          type="email"
          className="px-2 py-2 border w-full outline-none rounded-md"
          id="exampleInput90"
          placeholder="Dirección E-mail"
        />
      </div>

      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          {" "}
          Teléfono
        </label>
        <input
          type="text"
          className="px-2 py-2 border w-full outline-none rounded-md"
          id="exampleInput90"
          placeholder="Ingrese su teléfono"
        />
      </div>

      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700">
          {" "}
          Mensaje
        </label>
        <textarea
          className="px-2 py-2 border rounded-[5px] w-full outline-none"
          name=""
          id=""
        ></textarea>
      </div>

      <button
        type="button"
        className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
      >
        Enviar
      </button>
    </form>
  );
}
