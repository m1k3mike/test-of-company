import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import cl from "./CompanyTable.module.css";
import {
  toggleSelectAll,
  toggleSelect,
  deleteSelected,
  updateCompany,
  addCompany,
} from "../features/companiesSlice";
import Modal from "../UI/Modal";
import { useState } from "react";

const CompanyTable: React.FC = () => {
  const companies = useSelector(
    (state: RootState) => state.companies.companies
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleSelectAll = () => {
    dispatch(toggleSelectAll());
  };

  const handleSelect = (id: number) => {
    dispatch(toggleSelect(id));
  };

  const handleDelete = () => {
    dispatch(deleteSelected());
  };

  const handleUpdateCompany = (id: number, name: string, address: string) => {
    dispatch(updateCompany({ id, name, address, selected: false }));
  };

  const handleAddCompany = (name: string, address: string) => {
    const newCompany = { id: Date.now(), name, address, selected: false };
    dispatch(addCompany(newCompany));
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Добавить</button>
      <button onClick={handleSelectAll}>Выделить все</button>
      <button onClick={handleDelete}>Удалить выделенные</button>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" onChange={handleSelectAll} />
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr
              key={company.id}
              className={company.selected ? cl.selectedRow : ""}
            >
              <td>
                <input
                  type="checkbox"
                  checked={company.selected}
                  onChange={() => handleSelect(company.id)}
                />
              </td>
              <td>
                <input
                  className={company.selected ? cl.selectedRow : ""}
                  type="text"
                  value={company.name}
                  onChange={(e) =>
                    handleUpdateCompany(
                      company.id,
                      e.target.value,
                      company.address
                    )
                  }
                />
              </td>
              <td>
                <input
                  className={company.selected ? cl.selectedRow : ""}
                  type="text"
                  value={company.address}
                  onChange={(e) =>
                    handleUpdateCompany(
                      company.id,
                      company.name,
                      e.target.value
                    )
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleAddCompany}
      />
    </div>
  );
};

export default CompanyTable;
