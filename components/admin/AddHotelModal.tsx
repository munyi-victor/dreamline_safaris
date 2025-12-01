import { X } from "lucide-react";

interface ModalProps {
  closeModal: () => void;
}

const AddHotelModal = ({ closeModal }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-auto"
      aria-hidden="true"
      aria-labelledby="modal-title"
      role="dialog"
    >
      <div className="w-full max-w-3xl rounded-xl bg-slate-700 p-6 shadow-xl border border-slate-600">
        {/* header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold text-gray-200">Add New Hotel</h2>

          <button
            onClick={closeModal}
            className="text-gray-200 hover:text-white cursor-pointer"
          >
            <X />
          </button>
        </div>

        {/* form */}
        <form className="space-y-4">
          {/* hotel name */}
          <div>
            <label className="text-gray-200 text-sm">Hotel Name</label>
            <input
              type="text"
              className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. Ocean Breeze Hotel"
            />
          </div>

          {/* location */}
          <div>
            <label className="text-gray-200 text-sm">Location</label>
            <input
              type="text"
              className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. Diani Beach, Kenya"
            />
          </div>

          {/* price per night */}
          <div>
            <label className="text-gray-200 text-sm">Price Per Night($)</label>
            <input
              type="number"
              className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. 200"
            />
          </div>

          {/* amenities */}
          <div>
            <label className="text-gray-200 text-sm">
              Amenities (comma separated)
            </label>
            <input
              type="text"
              className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
              placeholder="e.g. WiFi, Swimming Pool, Parking"
            />
          </div>

          {/* description */}
          <div>
            <label className="text-gray-200 text-sm">Description</label>
            <textarea
              rows={4}
              className="w-full mt-1 rounded-lg bg-slate-600 text-white p-3 border border-slate-500 outline-none focus:ring focus:ring-blue-500"
              placeholder="Write a short description of the hotel..."
            ></textarea>
          </div>

          {/* image upload */}
          <div>
            <label className="text-gray-200 text-sm">Upload Images</label>
            <input type="file" multiple className="w-full mt-1 text-gray-200" />
          </div>

          {/* actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotelModal;
