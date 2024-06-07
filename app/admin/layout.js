import AdminNavbar from "../components/AdminNav/AdminNavbar";

export const metadata = {
    title: "Admin",
    description: "E-shop Admin Dashboard",
  };

const AdminLayout = ({children}) => {
  return (
    <div>
          <div><AdminNavbar /></div>
            {children}
    </div>
  )
}

export default AdminLayout
