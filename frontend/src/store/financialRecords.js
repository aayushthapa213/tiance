import { create } from "zustand";

const useFinancialRecords = create((set) => {
  return {
    records: [],
    setRecords: (records) => {
      set({ records });
    },

    createRecord: async (newRecord) => {
      const res = await fetch("/api/financial-records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecord),
      });
      const data = await res.json();
      // setRecords([...state.records, data]);
      set((state) => {
        return { records: [...state.records, data] };
      });
      return { success: true, message: "Product created successfully!" };
    },

    fetchRecord: async (userId) => {
      const res = await fetch(
        `/api/financial-records/getAllByUserId/${userId}`
      );
      const data = await res.json();
      console.log("hello", data.data);
      set((state) => {
        return { records: data.data };
      });
    },

    deleteRecord: async (rid) => {
      const res = await fetch(`/api/financial-records/${rid}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => ({
        records: state.records.filter((record) => record._id !== rid),
      }));
      return { success: true, message: data.message };
    },

    updateRecord: async (rid, updateRecord) => {
      const res = await fetch(`/api/financial-records/${rid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateRecord),
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => {
        return {
          records: state.records.map((record) =>
            record._id === rid ? data.data : record
          ),
        };
      });
      return { success: true, message: "Product Updated Successfully!" };
    },
  };
});

export default useFinancialRecords;
