

const CustomApp = () => {
  return (
    <>
      <div className="flex justify-center">
      <form className="w-full md:w-1/2 lg:w-1/3 p-4">
        <h2 className="text-2xl mb-4">Contact Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input type="text" id="name" name="name" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input type="email" id="email" name="email" className="w-full border p-2" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea id="message" name="message" rows={4} className="overflow-hidden  resize-none w-full border p-2"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div> 
    </>
  )
}

export default CustomApp
