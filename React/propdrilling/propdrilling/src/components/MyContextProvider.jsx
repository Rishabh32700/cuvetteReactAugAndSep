import { MyContext } from "./MyContext"

const MyContextProvider = ({children}) => {
    const zameen = {
        size: "1 acer",
        price : "15 cr",
    }
  return (
    <>
      <MyContext.Provider value={zameen}>
        {children}
      </MyContext.Provider>
    </>
  )
}

export default MyContextProvider
