import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Company {
  id: number;
  name: string;
  address: string;
  selected: boolean;
}

interface CompaniesState {
  companies: Company[];
}

const initialState: CompaniesState = {
  companies: [
    { id: 1, name: "Company A", address: "Some address 1", selected: false },
    { id: 2, name: "Company B", address: "Some address 2", selected: false },
  ],
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    toggleSelectAll: (state) => {
      const allSelected = state.companies.every((company) => company.selected);
      state.companies.forEach((company) => (company.selected = !allSelected));
    },
    toggleSelect: (state, action: PayloadAction<number>) => {
      const company = state.companies.find((c) => c.id === action.payload);
      if (company) {
        company.selected = !company.selected;
      }
    },
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    deleteSelected: (state) => {
      state.companies = state.companies.filter((company) => !company.selected);
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
  },
});

export const {
  toggleSelectAll,
  toggleSelect,
  addCompany,
  deleteSelected,
  updateCompany,
} = companiesSlice.actions;

export default companiesSlice.reducer;
