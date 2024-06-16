import Swal from "sweetalert2/src/sweetalert2.js";
import CustomAxios from "../API/CustomAxios";
import { useNavigate } from "react-router-dom";

const Card = ({ name, age, CardId }) => {
  const navigate = useNavigate();
  const handleAlert = (cardId) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "btn bg-teal-600 hover:bg-teal-800 text-white px-4 py-2 rounded outline-none",
        cancelButton:
          "btn bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded outline-none",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const deleteUser = () => {
            const axiosInstance = CustomAxios();
            axiosInstance
              .delete(`/deleteUser/${cardId}`)
              .then((response) => {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              })
              .catch((error) => {
                console.error("Error fetching users:", error.message);
              });
          };

          deleteUser();
          navigate("/");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="cursor-pointer" onClick={() => handleAlert(CardId)}>
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition duration-500 hover:bg-gray-200 hover:shadow-sm">
        <div className="rounded-lg bg-white p-4 sm:p-6">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{name}</h3>

          <div className="mt-4 flex gap-1">
            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-1 text-xs text-purple-600">
              {age} years old
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
