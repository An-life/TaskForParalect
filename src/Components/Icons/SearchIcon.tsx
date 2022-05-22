import React from "react";

const SearchIcon = ({iconSize}: { iconSize: number }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={iconSize}
            height={iconSize}
            fill="none"
            viewBox="0 0 14 14"
        >
            <path
                fill="gray"
                fillRule="evenodd"
                d="M6.235 0A6.242 6.242 0 000 6.235a6.242 6.242 0 006.235 6.235c1.403 0 2.695-.47 3.736-1.254l2.527 2.526a.877.877 0 001.244 0 .879.879 0 000-1.244l-2.526-2.527a6.195 6.195 0 001.254-3.736A6.242 6.242 0 006.235 0zM1.76 6.235A4.48 4.48 0 016.235 1.76a4.48 4.48 0 014.475 4.475 4.48 4.48 0 01-4.475 4.475A4.48 4.48 0 011.76 6.235z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default SearchIcon;
