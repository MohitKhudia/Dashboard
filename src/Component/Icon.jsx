import { Tooltip } from "react-tooltip";

export function Logo() {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9978 12.037C22.1081 12.2616 22.181 12.5022 22.2137 12.7494L22.8169 21.7193L23.1164 26.2277C23.1195 26.6913 23.1922 27.152 23.3323 27.5948C23.694 28.4539 24.564 29 25.5106 28.9619L39.9347 28.0184C40.5593 28.0081 41.1625 28.2417 41.6115 28.6678C41.9857 29.0229 42.2273 29.4874 42.3034 29.9871L42.3289 30.2905C41.732 38.5557 35.6617 45.4495 27.4136 47.229C19.1655 49.0086 10.7075 45.2494 6.6317 37.9923C5.45667 35.884 4.72274 33.5666 4.47299 31.1762C4.36866 30.4685 4.32272 29.7538 4.33562 29.0389C4.32274 20.1776 10.633 12.5168 19.4662 10.6699C20.5293 10.5044 21.5716 11.0672 21.9978 12.037Z"
        fill="#97A5EB"
      />
      <path
        opacity="0.4"
        d="M27.8851 4.33515C37.7648 4.5865 46.0684 11.6909 47.6667 21.26L47.6515 21.3306L47.6078 21.4333L47.6139 21.7152C47.5913 22.0886 47.4471 22.4479 47.1987 22.7381C46.9398 23.0404 46.5862 23.2463 46.1968 23.3262L45.9594 23.3588L29.3177 24.437C28.7641 24.4916 28.213 24.3131 27.8013 23.9459C27.4583 23.64 27.239 23.2269 27.177 22.7818L26.06 6.16434C26.0406 6.10815 26.0406 6.04724 26.06 5.99105C26.0753 5.533 26.2769 5.10003 26.6198 4.78887C26.9628 4.47772 27.4185 4.31431 27.8851 4.33515Z"
        fill="#FFCC91"
      />
    </svg>
  );
}
export function DashboardIcon(param) {
  return (
    <svg
      height="100%"
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.5C3 3.87479 3.02811 3 6.5 3C9.97189 3 10 3.87479 10 6.5C10 9.12521 10.0111 10 6.5 10C2.98893 10 3 9.12521 3 6.5Z"
        stroke={param.path == "/" ? "#fff" : "#53545C"}
        fill={param.path == "/" ? "#fff" : ""}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 6.5C14 3.87479 14.0281 3 17.5 3C20.9719 3 21 3.87479 21 6.5C21 9.12521 21.0111 10 17.5 10C13.9889 10 14 9.12521 14 6.5Z"
        stroke={param.path == "/" ? "#99A9F7" : "#53545C"}
        fill={param.path == "/" ? "#99A9F7" : ""}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 17.5C3 14.8748 3.02811 14 6.5 14C9.97189 14 10 14.8748 10 17.5C10 20.1252 10.0111 21 6.5 21C2.98893 21 3 20.1252 3 17.5Z"
        stroke={param.path == "/" ? "#fff" : "#53545C"}
        fill={param.path == "/" ? "#fff" : ""}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 17.5C14 14.8748 14.0281 14 17.5 14C20.9719 14 21 14.8748 21 17.5C21 20.1252 21.0111 21 17.5 21C13.9889 21 14 20.1252 14 17.5Z"
        stroke={param.path == "/" ? "#fff" : "#53545C"}
        fill={param.path == "/" ? "#fff" : ""}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function OrderIcon(param) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5134 21.4999H8.16555C5.09919 21.4999 2.74679 20.3924 3.41498 15.9347L4.19301 9.89351C4.60491 7.66925 6.02367 6.81799 7.26852 6.81799H17.447C18.7102 6.81799 20.0466 7.73332 20.5225 9.89351L21.3006 15.9347C21.8681 19.8889 19.5797 21.4999 16.5134 21.4999Z"
        stroke={param.pathname == "/orders" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6502 6.59836C16.6502 4.21229 14.716 2.27799 12.3299 2.27799V2.27799C11.1809 2.27312 10.0773 2.72615 9.26308 3.53691C8.44889 4.34766 7.9912 5.44935 7.99121 6.59836H7.99121"
        stroke={param.pathname == "/orders" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.296 11.1018H15.2502"
        stroke={param.pathname == "/orders" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.46492 11.1018H9.41916"
        stroke={param.pathname == "/orders" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function CustomersIcon(param) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59102 15.2068C13.28 15.2068 16.433 15.7658 16.433 17.9988C16.433 20.2318 13.301 20.8068 9.59102 20.8068C5.90102 20.8068 2.74902 20.2528 2.74902 18.0188C2.74902 15.7848 5.88002 15.2068 9.59102 15.2068Z"
        stroke={param.pathname == "/Customers" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59108 12.0198C7.16908 12.0198 5.20508 10.0568 5.20508 7.63476C5.20508 5.21276 7.16908 3.24976 9.59108 3.24976C12.0121 3.24976 13.9761 5.21276 13.9761 7.63476C13.9851 10.0478 12.0351 12.0108 9.62208 12.0198H9.59108Z"
        stroke={param.pathname == "/Customers" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4824 10.8815C18.0834 10.6565 19.3164 9.28253 19.3194 7.61953C19.3194 5.98053 18.1244 4.62053 16.5574 4.36353"
        stroke={param.pathname == "/Customers" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5947 14.7322C20.1457 14.9632 21.2287 15.5072 21.2287 16.6272C21.2287 17.3982 20.7187 17.8982 19.8947 18.2112"
        stroke={param.pathname == "/Customers" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function InventoryIcon(param) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.419 15.7321C21.419 19.3101 19.31 21.4191 15.732 21.4191H7.95C4.363 21.4191 2.25 19.3101 2.25 15.7321V7.93212C2.25 4.35912 3.564 2.25012 7.143 2.25012H9.143C9.861 2.25112 10.537 2.58812 10.967 3.16312L11.88 4.37712C12.312 4.95112 12.988 5.28912 13.706 5.29012H16.536C20.123 5.29012 21.447 7.11612 21.447 10.7671L21.419 15.7321Z"
        stroke={
          (param?.pathname || "").startsWith("/Inventory") ? "#fff" : "#53545C"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.48145 14.463H16.2164"
        stroke={
          (param?.pathname || "").startsWith("/Inventory") ? "#fff" : "#53545C"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ConversationsIcon(param) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z"
        stroke={param.pathname == "/Conversations" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9398 12.413H15.9488"
        stroke={param.pathname == "/Conversations" ? "#fff" : "#53545C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9301 12.413H11.9391"
        stroke={param.pathname == "/Conversations" ? "#fff" : "#53545C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.92128 12.413H7.93028"
        stroke={param.pathname == "/Conversations" ? "#fff" : "#53545C"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SettingsIcon(param) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8064 7.62361L20.184 6.54352C19.6574 5.6296 18.4905 5.31432 17.5753 5.83872V5.83872C17.1397 6.09534 16.6198 6.16815 16.1305 6.04109C15.6411 5.91402 15.2224 5.59752 14.9666 5.16137C14.8021 4.88415 14.7137 4.56839 14.7103 4.24604V4.24604C14.7251 3.72922 14.5302 3.2284 14.1698 2.85767C13.8094 2.48694 13.3143 2.27786 12.7973 2.27808H11.5433C11.0367 2.27807 10.5511 2.47991 10.1938 2.83895C9.83644 3.19798 9.63693 3.68459 9.63937 4.19112V4.19112C9.62435 5.23693 8.77224 6.07681 7.72632 6.0767C7.40397 6.07336 7.08821 5.98494 6.81099 5.82041V5.82041C5.89582 5.29601 4.72887 5.61129 4.20229 6.52522L3.5341 7.62361C3.00817 8.53639 3.31916 9.70261 4.22975 10.2323V10.2323C4.82166 10.574 5.18629 11.2056 5.18629 11.8891C5.18629 12.5725 4.82166 13.2041 4.22975 13.5458V13.5458C3.32031 14.0719 3.00898 15.2353 3.5341 16.1454V16.1454L4.16568 17.2346C4.4124 17.6798 4.82636 18.0083 5.31595 18.1474C5.80554 18.2866 6.3304 18.2249 6.77438 17.976V17.976C7.21084 17.7213 7.73094 17.6516 8.2191 17.7822C8.70725 17.9128 9.12299 18.233 9.37392 18.6717C9.53845 18.9489 9.62686 19.2646 9.63021 19.587V19.587C9.63021 20.6435 10.4867 21.5 11.5433 21.5H12.7973C13.8502 21.5001 14.7053 20.6491 14.7103 19.5962V19.5962C14.7079 19.088 14.9086 18.6 15.2679 18.2407C15.6272 17.8814 16.1152 17.6807 16.6233 17.6831C16.9449 17.6917 17.2594 17.7798 17.5387 17.9394V17.9394C18.4515 18.4653 19.6177 18.1544 20.1474 17.2438V17.2438L20.8064 16.1454C21.0615 15.7075 21.1315 15.186 21.001 14.6964C20.8704 14.2067 20.55 13.7894 20.1108 13.5367V13.5367C19.6715 13.284 19.3511 12.8666 19.2206 12.3769C19.09 11.8873 19.16 11.3658 19.4151 10.928C19.581 10.6383 19.8211 10.3982 20.1108 10.2323V10.2323C21.0159 9.70289 21.3262 8.54349 20.8064 7.63277V7.63277V7.62361Z"
        stroke={param.pathname == "/Settings" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12.1752"
        cy="11.8891"
        r="2.63616"
        stroke={param.pathname == "/Settings" ? "#fff" : "#53545C"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function DownArrow({param , OnChart}) {
  return (
    <svg
      className="cursor-pointer"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke={
          OnChart
            ? OnChart
            : param?.Value
            ? param.Value
            : "#1C1D22" 
        }
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function NotifictionIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4744 9.7044C15.8657 8.99354 15.5891 8.3775 15.5891 7.33092V6.97507C15.5891 5.61124 15.2752 4.73251 14.5927 3.85379C13.5409 2.48912 11.7702 1.66663 10.0367 1.66663H9.96298C8.26596 1.66663 6.55072 2.45135 5.48067 3.76063C4.76095 4.65698 4.41061 5.57347 4.41061 6.97507V7.33092C4.41061 8.3775 4.15221 8.99354 3.52524 9.7044C3.06393 10.2281 2.9165 10.9012 2.9165 11.6297C2.9165 12.359 3.15586 13.0498 3.63623 13.6113C4.26319 14.2844 5.14855 14.7141 6.05296 14.7888C7.36238 14.9382 8.67179 14.9944 10.0003 14.9944C11.3279 14.9944 12.6373 14.9004 13.9475 14.7888C14.8511 14.7141 15.7365 14.2844 16.3634 13.6113C16.843 13.0498 17.0832 12.359 17.0832 11.6297C17.0832 10.9012 16.9357 10.2281 16.4744 9.7044Z"
        fill="#5570F1"
      />
      <path
        opacity="0.4"
        d="M11.674 16.0236C11.2574 15.9347 8.71888 15.9347 8.30229 16.0236C7.94616 16.1059 7.56104 16.2972 7.56104 16.7169C7.58174 17.1172 7.81613 17.4706 8.14079 17.6946L8.13996 17.6955C8.55987 18.0228 9.05266 18.2309 9.56864 18.3056C9.8436 18.3434 10.1235 18.3417 10.4084 18.3056C10.9236 18.2309 11.4164 18.0228 11.8363 17.6955L11.8355 17.6946C12.1601 17.4706 12.3945 17.1172 12.4152 16.7169C12.4152 16.2972 12.0301 16.1059 11.674 16.0236Z"
        fill="#5570F1"
      />
    </svg>
  );
}
export function HomeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09566 13.8548V11.8102C6.09565 11.2921 6.51695 10.8712 7.03879 10.8679H8.95491C9.47909 10.8679 9.90402 11.2898 9.90402 11.8102V13.8489C9.904 14.2982 10.2692 14.6634 10.7218 14.6667H12.0291C12.6396 14.6683 13.2257 14.4286 13.6579 14.0005C14.0902 13.5725 14.3332 12.9912 14.3332 12.3851V6.57727C14.3332 6.08763 14.1145 5.62318 13.7362 5.30904L9.29516 1.78289C8.51885 1.16612 7.41009 1.18605 6.65676 1.8303L2.31118 5.30904C1.915 5.61392 1.67821 6.07975 1.6665 6.57727V12.3791C1.6665 13.6425 2.69809 14.6667 3.97062 14.6667H5.24803C5.46595 14.6683 5.6755 14.5834 5.83015 14.431C5.98481 14.2786 6.07179 14.0711 6.07178 13.8548H6.09566Z"
        fill="#5570F1"
      />
    </svg>
  );  
}
export function SalesIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="36" rx="8" fill="#5570F1" fillOpacity="0.12" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3981 19.5743C22.9604 19.5743 23.4323 20.0383 23.3463 20.5936C22.8419 23.8603 20.0455 26.2857 16.6726 26.2857C12.9411 26.2857 9.9165 23.2611 9.9165 19.5304C9.9165 16.4567 12.2516 13.5936 14.8805 12.9462C15.4455 12.8067 16.0244 13.2041 16.0244 13.7857C16.0244 17.726 16.1569 18.7453 16.9051 19.2997C17.6533 19.8541 18.5332 19.5743 22.3981 19.5743Z"
        stroke="#5570F1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.0768 16.293C26.1215 13.7614 23.0119 9.68072 19.2224 9.75089C18.9277 9.75616 18.6917 10.0018 18.6785 10.2956C18.5829 12.3772 18.7119 15.0746 18.7838 16.2974C18.8057 16.6781 19.1049 16.9772 19.4847 16.9991C20.7417 17.0711 23.5373 17.1693 25.5891 16.8588C25.868 16.8167 26.0724 16.5746 26.0768 16.293Z"
        stroke="#5570F1"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function Customers() {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.666504"
        width="36"
        height="36"
        rx="8"
        fill="#FFCC91"
        fillOpacity="0.16"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6592 20.6722C19.7334 20.6722 22.3609 21.1381 22.3609 22.9989C22.3609 24.8597 19.7509 25.3389 16.6592 25.3389C13.5842 25.3389 10.9575 24.8772 10.9575 23.0156C10.9575 21.1539 13.5667 20.6722 16.6592 20.6722Z"
        stroke="#1C1D22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6594 18.0165C14.6411 18.0165 13.0044 16.3806 13.0044 14.3623C13.0044 12.344 14.6411 10.7081 16.6594 10.7081C18.6769 10.7081 20.3136 12.344 20.3136 14.3623C20.3211 16.3731 18.6961 18.009 16.6852 18.0165H16.6594Z"
        stroke="#1C1D22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4023 17.068C23.7365 16.8805 24.764 15.7355 24.7665 14.3497C24.7665 12.9839 23.7707 11.8505 22.4648 11.6364"
        stroke="#1C1D22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1626 20.2769C25.4551 20.4694 26.3576 20.9227 26.3576 21.856C26.3576 22.4985 25.9326 22.9152 25.2459 23.176"
        stroke="#1C1D22"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function OrderBag() {
  return (
    <svg
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.333496"
        width="36"
        height="36"
        rx="8"
        fill="#FFCC91"
        fillOpacity="0.16"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.095 25.9167H15.1384C12.5831 25.9167 10.6228 24.9937 11.1796 21.279L11.828 16.2447C12.1712 14.3911 13.3535 13.6818 14.3909 13.6818H22.873C23.9256 13.6818 25.0393 14.4445 25.4359 16.2447L26.0843 21.279C26.5572 24.5742 24.6503 25.9167 22.095 25.9167Z"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2095 13.4987C22.2095 11.5103 20.5976 9.89835 18.6092 9.89835V9.89835C17.6517 9.89429 16.732 10.2718 16.0535 10.9474C15.3751 11.6231 14.9936 12.5411 14.9937 13.4987V13.4987"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.0806 17.2515H21.0425"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2217 17.2515H16.1836"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function SupportIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function GiftIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12V22H4V12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7H2V12H22V7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function RightArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L10 8L6 4"
        stroke="#6E7079"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function LogOutIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M2 6.447C2 3.996 4.03024 2 6.52453 2H11.4856C13.9748 2 16 3.99 16 6.437V17.553C16 20.005 13.9698 22 11.4744 22H6.51537C4.02515 22 2 20.01 2 17.563V16.623V6.447Z"
        fill="#CC5F5F"
      />
      <path
        d="M21.7792 11.4548L18.9334 8.5458C18.6393 8.2458 18.166 8.2458 17.8728 8.5478C17.5807 8.8498 17.5816 9.3368 17.8748 9.6368L19.434 11.2298H17.9391H9.54875C9.13483 11.2298 8.79883 11.5748 8.79883 11.9998C8.79883 12.4258 9.13483 12.7698 9.54875 12.7698H19.434L17.8748 14.3628C17.5816 14.6628 17.5807 15.1498 17.8728 15.4518C18.0199 15.6028 18.2118 15.6788 18.4046 15.6788C18.5955 15.6788 18.7873 15.6028 18.9334 15.4538L21.7792 12.5458C21.9204 12.4008 22.0003 12.2048 22.0003 11.9998C22.0003 11.7958 21.9204 11.5998 21.7792 11.4548Z"
        fill="#CC5F5F"
      />
    </svg>
  );
} 
export function ShopingIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_159_613)">
        <path
          d="M17.3368 18.3333C17.797 18.3333 18.1701 17.9602 18.1701 17.5C18.1701 17.0397 17.797 16.6666 17.3368 16.6666C16.8765 16.6666 16.5034 17.0397 16.5034 17.5C16.5034 17.9602 16.8765 18.3333 17.3368 18.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.16976 18.3333C8.63 18.3333 9.00309 17.9602 9.00309 17.5C9.00309 17.0397 8.63 16.6666 8.16976 16.6666C7.70952 16.6666 7.33643 17.0397 7.33643 17.5C7.33643 17.9602 7.70952 18.3333 8.16976 18.3333Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.50342 0.833374H4.83675L7.07008 11.9917C7.14629 12.3754 7.35501 12.72 7.65971 12.9653C7.9644 13.2106 8.34567 13.3409 8.73675 13.3334H16.8367C17.2278 13.3409 17.6091 13.2106 17.9138 12.9653C18.2185 12.72 18.4272 12.3754 18.5034 11.9917L19.8367 5.00004H5.67008"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_159_613">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.669922)"
          />
        </clipPath>
      </defs>
    </svg>
  );  
}
export function BagIcon() {
  return (
    <svg
      width="45"
      height="50"
      viewBox="0 0 45 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.7832 35.7868L42.8609 20.3002C41.6899 14.7741 38.3757 12.5 35.2161 12.5H9.82928C6.62555 12.5 3.20086 14.6149 2.2066 20.3002L0.262262 35.7868C-1.32856 47.1574 4.52654 50 12.1713 50H32.8962C40.5189 50 46.1972 45.8839 44.7832 35.7868ZM15.2425 25.3714C14.0222 25.3714 13.033 24.3533 13.033 23.0973C13.033 21.8414 14.0222 20.8232 15.2425 20.8232C16.4627 20.8232 17.452 21.8414 17.452 23.0973C17.452 24.3533 16.4627 25.3714 15.2425 25.3714ZM27.5051 23.0973C27.5051 24.3533 28.4943 25.3714 29.7145 25.3714C30.9348 25.3714 31.924 24.3533 31.924 23.0973C31.924 21.8414 30.9348 20.8232 29.7145 20.8232C28.4943 20.8232 27.5051 21.8414 27.5051 23.0973Z"
        fill="#BEC0CA"
      />
      <path
        opacity="0.4"
        d="M34.9347 11.9358C34.9425 12.1297 34.9053 12.3228 34.8258 12.5H31.233C31.1634 12.3199 31.1266 12.1288 31.1242 11.9358C31.1242 7.14206 27.2247 3.25596 22.4144 3.25596C17.6041 3.25596 13.7046 7.14206 13.7046 11.9358C13.7376 12.1224 13.7376 12.3134 13.7046 12.5H10.0247C9.99176 12.3134 9.99176 12.1224 10.0247 11.9358C10.3043 5.26477 15.8125 0 22.5124 0C29.2122 0 34.7204 5.26477 35 11.9358H34.9347Z"
        fill="#BEC0CA"
      />
    </svg>
  );  
}
export function AddIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function CloseIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#FFF2E2" />
      <path
        d="M22 10L10 22"
        stroke="#1C1D22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 10L22 22"
        stroke="#1C1D22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function DropdownIcon(){
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#5E6366"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function CalanderIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.09265 9.40427H20.9166"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4421 13.3097H16.4514"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0046 13.3097H12.0139"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.55793 13.3097H7.5672"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4421 17.1962H16.4514"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0046 17.1962H12.0139"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.55793 17.1962H7.5672"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0438 2V5.29078"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.96552 2V5.29078"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function ClockIcon() {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
        stroke="#5E6366"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 6V12L16.5 14"
        stroke="#5E6366"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function SearchIcon() {
  return (
    <svg
      width="20"
      className="cursor-pointer"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.80541"
        cy="10.3055"
        r="7.49047"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0151 15.9042L17.9518 18.8333"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function DownTringleIcon() {
  return (
    <svg
      width="7"
      className="cursor-pointer"
      height="6"
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 6L0.0358987 -6.52533e-07L6.9641 -4.68497e-08L3.5 6Z"
        fill="#DDE2E6"
      />
    </svg>
  );  
}
export function BoldIcon() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 6H8C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10H3.5V6Z"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 2H7.5C8.03043 2 8.53914 2.21071 8.91421 2.58579C9.28929 2.96086 9.5 3.46957 9.5 4C9.5 4.53043 9.28929 5.03914 8.91421 5.41421C8.53914 5.78929 8.03043 6 7.5 6H3.5V2Z"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function UnderlineIcon() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 10.5H10.5"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 1.5V5C3.5 5.79565 3.81607 6.55871 4.37868 7.12132C4.94129 7.68393 5.70435 8 6.5 8C7.29565 8 8.05871 7.68393 8.62132 7.12132C9.18393 6.55871 9.5 5.79565 9.5 5V1.5"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function ItalicIcon() {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 10H3"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2H5.5"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2L5 10"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
}
export function AlianStart() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 12H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.3335H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6.6665H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
}
export function AlianCenter() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3333 12H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.3335H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3333 6.6665H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
}
export function AlianEnd() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0003 12H4.66699"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9.3335H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0003 6.6665H4.66699"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4H2"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  
}
export function LinkIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_268_567)">
        <path
          d="M10.5003 4.6665H12.5003C12.9381 4.6665 13.3715 4.75272 13.7759 4.92024C14.1804 5.08775 14.5478 5.33329 14.8573 5.64281C15.1669 5.95234 15.4124 6.31981 15.5799 6.72423C15.7474 7.12864 15.8337 7.5621 15.8337 7.99984C15.8337 8.43758 15.7474 8.87103 15.5799 9.27545C15.4124 9.67987 15.1669 10.0473 14.8573 10.3569C14.5478 10.6664 14.1804 10.9119 13.7759 11.0794C13.3715 11.247 12.9381 11.3332 12.5003 11.3332H10.5003M6.50033 11.3332H4.50033C4.06259 11.3332 3.62913 11.247 3.22471 11.0794C2.8203 10.9119 2.45283 10.6664 2.1433 10.3569C1.51818 9.73174 1.16699 8.88389 1.16699 7.99984C1.16699 7.11578 1.51818 6.26794 2.1433 5.64281C2.76842 5.01769 3.61627 4.6665 4.50033 4.6665H6.50033"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83301 8H11.1663"
          stroke="black"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_268_567">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  
}
export function DefalutImgIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M34.1102 47.3332H13.8881C5.97975 47.3332 0.666992 41.7866 0.666992 33.5298V14.4722C0.666992 6.21543 5.97975 0.666504 13.8881 0.666504H34.1126C42.0209 0.666504 47.3337 6.21543 47.3337 14.4722V33.5298C47.3337 41.7866 42.0209 47.3332 34.1102 47.3332Z"
        fill="#5570F1"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2382 16.2416C22.2382 19.4383 19.6366 22.0399 16.4399 22.0399C13.2409 22.0399 10.6416 19.4383 10.6416 16.2416C10.6416 13.0449 13.2409 10.4409 16.4399 10.4409C19.6366 10.4409 22.2382 13.0449 22.2382 16.2416ZM41.2675 28.871C41.8112 29.3983 42.2008 30.0003 42.4575 30.642C43.2345 32.5833 42.8308 34.9167 42.0002 36.8393C41.0155 39.1283 39.1302 40.8573 36.7548 41.6133C35.7002 41.9517 34.5942 42.0963 33.4905 42.0963H13.9348C11.9888 42.0963 10.2668 41.6437 8.85517 40.7943C7.97083 40.2623 7.8145 39.0373 8.47017 38.2393C9.56683 36.9093 10.6495 35.5747 11.7415 34.2283C13.8228 31.6523 15.2252 30.9057 16.7838 31.5613C17.4162 31.832 18.0508 32.2403 18.7042 32.6697C20.4448 33.8223 22.8645 35.4043 26.0518 33.687C28.2305 32.4957 29.4952 30.4571 30.596 28.6828L30.6182 28.647C30.6922 28.5282 30.7657 28.4095 30.8389 28.2912C31.2132 27.6864 31.5819 27.0907 31.9995 26.5423C32.5175 25.8633 34.4402 23.74 36.9252 25.252C38.5095 26.204 39.8418 27.492 41.2675 28.871Z"
        fill="#5570F1"
      />
    </svg>
  );  
}
export function UploadCloudIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_268_10670)">
        <path
          d="M13.3337 13.3333L10.0003 10L6.66699 13.3333"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 10V17.5"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9919 15.3249C17.8047 14.8818 18.4467 14.1806 18.8168 13.3321C19.1868 12.4835 19.2637 11.5359 19.0354 10.6388C18.807 9.7417 18.2865 8.94616 17.5558 8.37778C16.8251 7.80939 15.9259 7.50052 15.0002 7.4999H13.9502C13.698 6.52427 13.2278 5.61852 12.5752 4.85073C11.9225 4.08295 11.1042 3.47311 10.182 3.06708C9.25967 2.66104 8.25734 2.46937 7.25031 2.50647C6.24328 2.54358 5.25777 2.80849 4.36786 3.28129C3.47795 3.7541 2.7068 4.42249 2.1124 5.23622C1.51799 6.04996 1.11579 6.98785 0.936028 7.9794C0.756269 8.97095 0.803632 9.99035 1.07456 10.961C1.34548 11.9316 1.83291 12.8281 2.50021 13.5832"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3337 13.3333L10.0003 10L6.66699 13.3333"
          stroke="#5570F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_268_10670">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  
}
export function FilterIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6663 2.5H1.33301L6.66634 8.80667V13.1667L9.33301 14.5V8.80667L14.6663 2.5Z"
        stroke="#53545C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function ListIcon() {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.66669H2C1.72667 5.66669 1.5 5.44002 1.5 5.16669C1.5 4.89335 1.72667 4.66669 2 4.66669H14C14.2733 4.66669 14.5 4.89335 14.5 5.16669C14.5 5.44002 14.2733 5.66669 14 5.66669Z"
        fill="#00092E"
      />
      <path
        d="M12 9H4C3.72667 9 3.5 8.77333 3.5 8.5C3.5 8.22667 3.72667 8 4 8H12C12.2733 8 12.5 8.22667 12.5 8.5C12.5 8.77333 12.2733 9 12 9Z"
        fill="#00092E"
      />
      <path
        d="M9.33366 12.3333H6.66699C6.39366 12.3333 6.16699 12.1066 6.16699 11.8333C6.16699 11.56 6.39366 11.3333 6.66699 11.3333H9.33366C9.60699 11.3333 9.83366 11.56 9.83366 11.8333C9.83366 12.1066 9.60699 12.3333 9.33366 12.3333Z"
        fill="#00092E"
      />
    </svg>
  );  
}
export function CopyIdIcon() {
  return (
    <>
      <svg
        className="cursor-pointer outline-none"
        data-tooltip-id="copy-tooltip"
        data-tooltip-content="Copy"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 13.3333H5.33333C4.8029 13.3333 4.29419 13.1226 3.91912 12.7475C3.54405 12.3725 3.33333 11.8637 3.33333 11.3333V4.66665C3.33333 4.48984 3.2631 4.32027 3.13807 4.19524C3.01305 4.07022 2.84348 3.99998 2.66667 3.99998C2.48986 3.99998 2.32029 4.07022 2.19526 4.19524C2.07024 4.32027 2 4.48984 2 4.66665V11.3333C2 12.2174 2.35119 13.0652 2.97631 13.6903C3.60143 14.3155 4.44928 14.6666 5.33333 14.6666H10.6667C10.8435 14.6666 11.013 14.5964 11.1381 14.4714C11.2631 14.3464 11.3333 14.1768 11.3333 14C11.3333 13.8232 11.2631 13.6536 11.1381 13.5286C11.013 13.4035 10.8435 13.3333 10.6667 13.3333ZM14 5.95998C13.9931 5.89874 13.9796 5.8384 13.96 5.77998V5.71998C13.9279 5.65143 13.8852 5.58842 13.8333 5.53331L9.83333 1.53331C9.77822 1.48146 9.71521 1.4387 9.64667 1.40665H9.58667L9.37333 1.33331H6.66667C6.13623 1.33331 5.62753 1.54403 5.25245 1.9191C4.87738 2.29417 4.66667 2.80288 4.66667 3.33331V9.99998C4.66667 10.5304 4.87738 11.0391 5.25245 11.4142C5.62753 11.7893 6.13623 12 6.66667 12H12C12.5304 12 13.0391 11.7893 13.4142 11.4142C13.7893 11.0391 14 10.5304 14 9.99998V5.99998C14 5.99998 14 5.99998 14 5.95998ZM10 3.60665L11.7267 5.33331H10.6667C10.4899 5.33331 10.3203 5.26307 10.1953 5.13805C10.0702 5.01303 10 4.84346 10 4.66665V3.60665ZM12.6667 9.99998C12.6667 10.1768 12.5964 10.3464 12.4714 10.4714C12.3464 10.5964 12.1768 10.6666 12 10.6666H6.66667C6.48986 10.6666 6.32029 10.5964 6.19526 10.4714C6.07024 10.3464 6 10.1768 6 9.99998V3.33331C6 3.1565 6.07024 2.98693 6.19526 2.86191C6.32029 2.73688 6.48986 2.66665 6.66667 2.66665H8.66667V4.66665C8.66667 5.19708 8.87738 5.70579 9.25245 6.08086C9.62753 6.45593 10.1362 6.66665 10.6667 6.66665H12.6667V9.99998Z"
          fill="#8B8D97"
        />
      </svg>
      <Tooltip id="copy-tooltip" />
    </>
  );
}
export function UploadImgIcon(){
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#FFF2E2" />
      <g clip-path="url(#clip0_405_7111)">
        <path
          d="M19.3337 19.3333L16.0003 16L12.667 19.3333"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 16V23.5"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.9919 21.3249C23.8047 20.8818 24.4467 20.1806 24.8168 19.3321C25.1868 18.4835 25.2637 17.5359 25.0354 16.6388C24.807 15.7417 24.2865 14.9462 23.5558 14.3778C22.8251 13.8094 21.9259 13.5005 21.0002 13.4999H19.9502C19.698 12.5243 19.2278 11.6185 18.5752 10.8507C17.9225 10.0829 17.1042 9.47311 16.182 9.06708C15.2597 8.66104 14.2573 8.46937 13.2503 8.50647C12.2433 8.54358 11.2578 8.80849 10.3679 9.28129C9.47795 9.7541 8.7068 10.4225 8.1124 11.2362C7.51799 12.05 7.11579 12.9879 6.93603 13.9794C6.75627 14.9709 6.80363 15.9903 7.07456 16.961C7.34548 17.9316 7.83291 18.8281 8.50021 19.5832"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.3337 19.3333L16.0003 16L12.667 19.3333"
          stroke="#1C1D22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_405_7111">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(6 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
export function UserIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9849 15.3457C8.11731 15.3457 4.81445 15.9305 4.81445 18.2724C4.81445 20.6143 8.09636 21.22 11.9849 21.22C15.8525 21.22 19.1545 20.6343 19.1545 18.2933C19.1545 15.9524 15.8735 15.3457 11.9849 15.3457Z"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
        stroke="#5E6366"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9024 8.85156L13.4591 12.4646C12.6196 13.1306 11.4384 13.1306 10.5989 12.4646L6.11816 8.85156"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function LocationIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
        stroke="#5E6366"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );  
}
export function PasswordIcon(){
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4228 9.4478V7.3008C16.4228 4.7878 14.3848 2.7498 11.8718 2.7498C9.35876 2.7388 7.31276 4.7668 7.30176 7.2808V7.3008V9.4478"
        stroke="#6E7079"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.683 21.2496H8.042C5.948 21.2496 4.25 19.5526 4.25 17.4576V13.1686C4.25 11.0736 5.948 9.37659 8.042 9.37659H15.683C17.777 9.37659 19.475 11.0736 19.475 13.1686V17.4576C19.475 19.5526 17.777 21.2496 15.683 21.2496Z"
        stroke="#6E7079"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8623 14.2028V16.4238"
        stroke="#6E7079"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function ShareIcon() {
  return(
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.55498 4.94976L5.73936 8.80612L1.39962 6.09178C0.777834 5.70276 0.907177 4.75829 1.61048 4.55262L11.9142 1.53518C12.5582 1.34642 13.155 1.94855 12.9637 2.59466L9.91539 12.8912C9.70656 13.5955 8.76747 13.7213 8.38214 13.0968L5.73734 8.8068" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )  
}