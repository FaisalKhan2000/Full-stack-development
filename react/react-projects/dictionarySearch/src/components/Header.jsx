import { useId, useState } from "react";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedFont, setSelectedFont] = useState("sans-serif");
  const id = useId();
  const selectId = useId();

  // handling mode
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);

    if (isChecked) {
      // Set theme to dark
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      // Set theme to light
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const handleSelectChange = (event) => {
    document.body.style.fontFamily = event.target.value;
    setSelectedFont(event.target.value);
  };

  return (
    <nav className="flex justify-between items-center w-full pt-4 pb-10 text-grey-200">
      <LibraryBooksOutlinedIcon />

      <div className="flex items-center gap-2">
        <div>
          <select
            id={selectId}
            onChange={handleSelectChange}
            value={selectedFont}
            className="px-2 py-1 rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            <option value="sans-serif">Sans Serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Mono</option>
          </select>
        </div>
        <label htmlFor={id} className="switch relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            name=""
            id={id}
            className="hidden"
          />
          <span className="slider round"></span>
        </label>

        {isChecked ? (
          <DarkModeOutlinedIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />
        ) : (
          <WbSunnyOutlinedIcon className="w-5 h-5 text-yellow-400 dark:text-yellow-300" />
        )}
      </div>
      {/* <p className={`font-${selectedFont}`}>hello</p> */}
    </nav>
  );
}

export default Header;
