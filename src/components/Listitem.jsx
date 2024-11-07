import { IoIosBriefcase } from "react-icons/io";
import { RiVipCrownFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import api from "../utils/api";
import { useState } from "react";
import Moodal from "./Moodal";
import { toast } from "react-toastify";


const ListItem = ({ todo, setTodos }) => {
    const [isOpen, setIsOpen] = useState(false);

    // status değerine göre icon belirledik
    const icon =
        todo.status === "important" ? (<RiVipCrownFill className="text-danger fs-4" />)
            : todo.status === "job" ? (<IoIosBriefcase className="text-primary fs-4" />) : (<FaCalendarDays className="text-success fs-4" />);

    //Silme butonuna tııklayınca çalışır
    const handleDelete = () => {

        //API'a todoyu silmek için istek at
        api.delete(`/todos/${todo.id}`)
            //başarılı olursa silinen todoyu stateden kaldır
            .then(() =>
            //state'i güncelle
            {
                setTodos((todos) => todos.filter((item) => item.id !== todo.id))
                // bildirim gönder
                toast.info("Todo kaldırıldı")
            }
            );


    };
    return (
        <li className="p-3 list-group-item d-flex justify-content-between align-item-center gap-3">
            {icon}


            <span>{todo.title}</span>

            <div className="btn-group">
                <button onClick={() => setIsOpen(true)} className="btn btn-sm btn-primary">Düzenle </button>
                <button onClick={handleDelete} className="btn btn-sm btn-danger">Sil</button>
            </div>
            {isOpen && <Moodal todo={todo} close={() => setIsOpen(false)} setTodos={setTodos} />}

        </li>
    );
};

export default ListItem;
